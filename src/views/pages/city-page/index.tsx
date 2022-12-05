import { Box, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from 'application/intefaces/i-app';
import { Link, useLocation } from 'react-router-dom';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { fetchWeather, setCoordinates } from 'slices/citySlice';
import useSortWeatherByDate from '../../../application/hooks/useSortWeatherByDate';
import HourChart from 'components/hour-chart';
import WeatherInfo from 'components/weather-info';
import DaySelector from 'components/day-selector';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const CityPage = () => {
  const { city } = useSelector((state: IAppState) => state.city);
  const { filteredDataByDay } = useSortWeatherByDate();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeTooltipIndex, setActiveTooltipIndex] = useState<number>(0);

  const dispatch = useDispatch();
  const query = useQuery();

  useEffect(() => {
    dispatch(setCoordinates([query.get('lon'), query.get('lat')]));
    dispatch(fetchWeather([query.get('lon'), query.get('lat')]));
  }, []);

  return city && filteredDataByDay.length > 0 ? (
    <Box display={'flex'} boxSizing={'border-box'} flexDirection={'column'}>
      <Box padding={'10px 15px 15px'}>
        <Link style={{ color: '#000' }} to={'/'}>
          Back
        </Link>
      </Box>
      <WeatherInfo
        data={filteredDataByDay[activeIndex][activeTooltipIndex]}
        name={city.name}
      />
      <HourChart
        data={filteredDataByDay[activeIndex]}
        handleClick={(e) => setActiveTooltipIndex(e.activeTooltipIndex)}
      />
      <DaySelector
        filteredDataByDay={filteredDataByDay}
        activeIndex={activeIndex}
        handleClick={(e) => setActiveIndex(e)}
      />
    </Box>
  ) : (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'grey.700',
      }}
    >
      <CircularProgress color={'inherit'} />
    </Box>
  );
};

export default CityPage;
