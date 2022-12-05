import { Box, Typography } from '@mui/material';
import * as React from 'react';

const WeatherIconTemp = ({ weather }: any) => {
  return (
    <Box>
      <Box display={'flex'}>
        <img
          src={
            'http://openweathermap.org/img/wn/' +
            weather.weather[0].icon +
            '@2x.png'
          }
          loading='lazy'
          title={weather.weather[0].main}
          alt={weather.weather[0].description}
        />
        <Typography fontSize={'48px'}>{weather.main.temp} &#176;</Typography>
      </Box>
    </Box>
  );
};

export default WeatherIconTemp;
