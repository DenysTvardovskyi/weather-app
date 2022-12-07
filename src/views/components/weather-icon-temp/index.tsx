import { Box, Typography, useMediaQuery } from '@mui/material';
import * as React from 'react';
import { IWeather } from '../../../application/intefaces/i-weather';

interface Props {
  weather: IWeather;
  temp: number;
}

const WeatherIconTemp = ({ weather, temp }: Props) => {
  const matches = useMediaQuery('(min-width:1200px)');

  return (
    <Box>
      <Box display={'flex'} alignItems={'center'}>
        <img
          src={'http://openweathermap.org/img/wn/' + weather?.icon + '@2x.png'}
          loading='lazy'
          width={matches ? 'auto' : '48px'}
          title={weather?.main}
          alt={weather?.description}
        />
        <Typography fontSize={matches ? '48px' : '24px'}>
          {temp} &#176;
        </Typography>
      </Box>
    </Box>
  );
};

export default WeatherIconTemp;
