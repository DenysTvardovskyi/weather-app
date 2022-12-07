import { Box } from '@mui/material';
import { IAppState } from 'application/intefaces/i-app';
import { Link, useLocation } from 'react-router-dom';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { fetchWeather, setCoordinates } from 'slices/citySlice';
import useSortWeatherByDate from '../../../application/hooks/useSortWeatherByDate';
import HourChart from 'components/hour-chart';
import WeatherInfo from 'components/weather-info';
import DaySelector from 'components/day-selector';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import ErrorPage from 'pages/error-page';
import Loader from 'components/loader';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const CityPage = () => {
  const { city, status } = useAppSelector((state: IAppState) => state.city);
  const { filteredDataByDay, weatherInfo } = useSortWeatherByDate();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeTooltipIndex, setActiveTooltipIndex] = useState<number>(0);

  const dispatch = useAppDispatch();
  const query = useQuery();

  useEffect(() => {
    if (query.get('lon') !== null && query.get('lat') !== null) {
      dispatch(setCoordinates([query.get('lon'), query.get('lat')]));
      dispatch(fetchWeather([query.get('lon') ?? 0, query.get('lat') ?? 0]));
    }
  }, []);

  return city && filteredDataByDay.length > 0 ? (
    <Box display={'flex'} boxSizing={'border-box'} flexDirection={'column'}>
      <Box padding={'10px 15px 15px'}>
        <Link style={{ color: '#000' }} to={'/weather-app/'}>
          Back
        </Link>
      </Box>
      <WeatherInfo
        data={weatherInfo(activeIndex, activeTooltipIndex)}
        name={city.name}
      />
      <HourChart
        data={filteredDataByDay[activeIndex]}
        handleClick={(e) => setActiveTooltipIndex(e.activeTooltipIndex ?? 0)}
      />
      <DaySelector
        filteredDataByDay={filteredDataByDay}
        activeIndex={activeIndex}
        handleClick={(e) => setActiveIndex(e)}
      />
    </Box>
  ) : status == 'failed' ? (
    <Loader />
  ) : (
    <ErrorPage />
  );
};

export default CityPage;
