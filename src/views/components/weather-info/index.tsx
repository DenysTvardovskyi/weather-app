import { Box, Typography } from '@mui/material';
import WeatherIconTemp from 'components/weather-icon-temp';
import * as React from 'react';

interface Props {
  data: any;
  name: string;
}

const WeatherInfo = ({ data, name }: Props) => {
  const formatDate = (date: string | Date) =>
    new Date(date).toLocaleString('en-US', {
      weekday: 'long',
      hour: 'numeric',
    });
  return (
    <Box display={'grid'} gridTemplateColumns={'50% 50%'}>
      <Box display={'flex'} justifyContent={'space-between'}>
        <WeatherIconTemp weather={data} />
        <Box>
          <Typography>
            Precipitation: <strong>{data?.pop * 100}</strong>%
          </Typography>
          <Typography>
            Humidity: <strong>{data.main.humidity}</strong>%
          </Typography>
          <Typography>
            Wind: <strong>{data.wind.speed}</strong> m/s
          </Typography>
        </Box>
      </Box>
      <Box textAlign={'end'}>
        <Typography fontSize={'22px'} fontWeight={'bold'}>
          {name}
        </Typography>
        <Typography>{formatDate(data.dt_txt)}</Typography>
        <Typography>{data.weather[0].main}</Typography>
      </Box>
    </Box>
  );
};

export default WeatherInfo;
