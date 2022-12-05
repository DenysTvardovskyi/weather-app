import { Box, Typography, useMediaQuery } from '@mui/material';
import * as React from 'react';
import { IForecast } from '../../../application/intefaces/i-weather';

interface Props {
  weather: IForecast;
}

const WeatherIconTemp = ({ weather }: Props) => {
  const matches = useMediaQuery('(min-width:1200px)');

  return (
    <Box>
      <Box display={'flex'} alignItems={'center'}>
        <img
          src={
            'http://openweathermap.org/img/wn/' +
            weather.weather[0].icon +
            '@2x.png'
          }
          loading='lazy'
          width={matches ? 'auto' : '48px'}
          title={weather.weather[0].main}
          alt={weather.weather[0].description}
        />
        <Typography fontSize={matches ? '48px' : '24px'}>
          {weather.main.temp} &#176;
        </Typography>
      </Box>
    </Box>
  );
};

export default WeatherIconTemp;
