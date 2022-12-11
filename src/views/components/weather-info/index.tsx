import { Box, Typography, useMediaQuery } from '@mui/material';
import WeatherIconTemp from '../weather-icon-temp';
import * as React from 'react';
import formatDate from '../../../application/utils/useFormatDate';
import { IWeatherInfoData } from '../../../application/intefaces/i-weather';

interface Props {
  data: IWeatherInfoData;
  name: string;
}

const WeatherInfo = ({ data, name }: Props) => {
  const mobileL = useMediaQuery('(min-width:600px)');

  const precipitation = (data?.pop * 100).toFixed(0);

  return (
    <Box display={'grid'} gridTemplateColumns={'50% 50%'}>
      <Box display={'flex'} flexDirection={mobileL ? 'row' : 'column'}>
        <WeatherIconTemp weather={data?.weather} temp={data?.temp} />
        <Box>
          <Typography>
            Precipitation: <strong>{precipitation}</strong>%
          </Typography>
          <Typography>
            Humidity: <strong>{data?.humidity}</strong>%
          </Typography>
          <Typography>
            Wind: <strong>{data?.wind_speed}</strong> m/s
          </Typography>
        </Box>
      </Box>
      <Box textAlign={'end'}>
        <Typography fontSize={'22px'} fontWeight={'bold'}>
          {name}
        </Typography>
        <Typography>
          {formatDate(data?.dt_txt, {
            weekday: 'long',
            hour: 'numeric',
          })}
        </Typography>
        <Typography>{data?.weather?.main}</Typography>
      </Box>
    </Box>
  );
};

export default WeatherInfo;
