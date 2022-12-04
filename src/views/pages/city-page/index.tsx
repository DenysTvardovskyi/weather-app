import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from 'application/intefaces/i-app';
import { useLocation } from 'react-router-dom';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { fetchWeather, setCoordinates } from 'slices/citySlice';
import useSortWeatherByDate from '../../../application/hooks/useSortWeatherByDate';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  weekDay: {
    color: '#000',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
    },
  },
  active: {
    backgroundColor: '#000',
    color: '#fff',
  },
});

const CityPage = () => {
  const { city } = useSelector((state: IAppState) => state.city);
  const { filteredDataByDay, days } = useSortWeatherByDate();

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const dispatch = useDispatch();
  const query = useQuery();
  const classes = useStyles();

  useEffect(() => {
    dispatch(setCoordinates([query.get('lon'), query.get('lat')]));
    dispatch(fetchWeather([query.get('lon'), query.get('lat')]));
  }, []);

  const data: any = filteredDataByDay[activeIndex];
  return city && filteredDataByDay.length > 0 ? (
    <Box display={'flex'} flexDirection={'column'}>
      <Box width={'100%'}>
        <Box display={'flex'}>
          <img
            src={
              'http://openweathermap.org/img/wn/' +
              data[0].weather[0].icon +
              '@2x.png'
            }
            loading='lazy'
            title={data[0].weather[0].main}
            alt={data[0].weather[0].description}
          />
          <Typography fontSize={'48px'}>{data[0].main.temp} &#8451;</Typography>
        </Box>
      </Box>
      {/*<Box>*/}
      {/*  <ResponsiveContainer width='100%' height='100%'>*/}
      {/*    <LineChart*/}
      {/*      width={500}*/}
      {/*      height={300}*/}
      {/*      data={[*/}
      {/*        {*/}
      {/*          temp: 0,*/}
      {/*          dt_txt: 1,*/}
      {/*        },*/}
      {/*        {*/}
      {/*          temp: 2,*/}
      {/*          dt_txt: 2,*/}
      {/*        },*/}
      {/*        {*/}
      {/*          temp: 2,*/}
      {/*          dt_txt: 3,*/}
      {/*        },*/}
      {/*      ]}*/}
      {/*      margin={{*/}
      {/*        top: 5,*/}
      {/*        right: 30,*/}
      {/*        left: 20,*/}
      {/*        bottom: 5,*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <XAxis dataKey='dt_txt' />*/}
      {/*      <YAxis />*/}
      {/*      <Line*/}
      {/*        type='monotone'*/}
      {/*        dataKey='temp'*/}
      {/*        stroke='#8884d8'*/}
      {/*        activeDot={{ r: 8 }}*/}
      {/*      />*/}
      {/*    </LineChart>*/}
      {/*  </ResponsiveContainer>*/}
      {/*</Box>*/}
      <Box
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'center'}
        gap={'5px'}
      >
        {filteredDataByDay.map((weather: any, index: number) => {
          return (
            <Box
              boxSizing={'border-box'}
              borderRadius={'5px'}
              border={'1px solid black'}
              padding={'5px 10px'}
              className={
                classes.weekDay +
                ' ' +
                (index === activeIndex && classes.active)
              }
              key={index}
              onClick={() => setActiveIndex(index)}
            >
              <Typography>
                {index === 0
                  ? 'Today'
                  : new Date(weather[0].dt_txt).toLocaleDateString('en-US', {
                      weekday: 'short',
                    })}
              </Typography>
              <img
                src={
                  'http://openweathermap.org/img/wn/' +
                  weather[0].weather[0].icon +
                  '@2x.png'
                }
                loading='lazy'
                title={weather[0].weather[0].main}
                alt={weather[0].weather[0].description}
              />
              <Box display={'flex'} justifyContent={'space-around'}>
                <Typography fontWeight={'bold'}>
                  {weather[0].main.temp_max}
                </Typography>
                <Typography>{weather[0].main.temp_min}</Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  ) : (
    <div>Loading...</div>
  );
};

export default CityPage;
