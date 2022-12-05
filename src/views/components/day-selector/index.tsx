import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { makeStyles } from '@mui/styles';

interface Props {
  filteredDataByDay: any[];
  activeIndex: number;
  handleClick: (e: any) => void;
}

const useStyles = makeStyles({
  weekDay: {
    color: '#000',
    cursor: 'pointer',
    transition: '0.3s',
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

const DaySelector = ({
  filteredDataByDay,
  activeIndex,
  handleClick,
}: Props) => {
  const classes = useStyles();

  const formatDate = (date: string | Date) =>
    new Date(date).toLocaleDateString('en-US', {
      weekday: 'short',
    });

  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      gap={'5px'}
    >
      {filteredDataByDay.map((weather: any, index: number) => {
        const data = weather[0];
        const forecast = data.weather[0];
        const weather_temp = data.main;
        return (
          <Box
            boxSizing={'border-box'}
            borderRadius={'5px'}
            border={'1px solid black'}
            padding={'5px 10px'}
            className={
              classes.weekDay + ' ' + (index === activeIndex && classes.active)
            }
            key={index}
            onClick={() => handleClick(index)}
          >
            <Typography>
              {index === 0 ? 'Today' : formatDate(data.dt_txt)}
            </Typography>
            <img
              src={
                'http://openweathermap.org/img/wn/' + forecast.icon + '@2x.png'
              }
              loading='lazy'
              title={forecast.main}
              alt={forecast.description}
            />
            <Box display={'flex'} justifyContent={'space-around'}>
              <Typography fontWeight={'bold'}>
                {weather_temp.temp_max}
              </Typography>
              <Typography>{weather_temp.temp_min}</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default DaySelector;
