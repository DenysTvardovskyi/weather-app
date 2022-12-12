import { Box, Typography, useMediaQuery } from '@mui/material';
import formatDate from '../../../application/utils/useFormatDate';
import * as React from 'react';

import { makeStyles } from '@mui/styles';
import { IMain, IWeather } from '../../../application/intefaces/i-weather';

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

interface Props {
  index: number;
  forecast: IWeather;
  weather_temp: IMain;
  date: string | Date;
  activeIndex: number;
  handleClick: (e: number) => void;
}

const DaySelectorItem = ({
  index,
  date,
  forecast,
  weather_temp,
  activeIndex,
  handleClick,
}: Props) => {
  const classes = useStyles();

  const matches = useMediaQuery('(min-width:700px)');
  return (
    <Box
      boxSizing={'border-box'}
      borderRadius={'5px'}
      border={'1px solid black'}
      display={matches ? 'block' : 'flex'}
      justifyContent={matches ? 'flex-start' : 'space-between'}
      data-testid='day-selector-item'
      padding={'5px 10px'}
      className={
        classes.weekDay + ' ' + (index === activeIndex && classes.active)
      }
      key={index}
      onClick={() => handleClick(index)}
    >
      <Typography>
        {index === 0
          ? 'Today'
          : formatDate(date, {
              weekday: 'short',
            })}
      </Typography>
      <img
        src={'http://openweathermap.org/img/wn/' + forecast.icon + '@2x.png'}
        loading='lazy'
        title={forecast.main}
        width={matches ? 'inherit' : '32px'}
        alt={forecast.description}
      />
      <Box display={'flex'} columnGap={'10px'} justifyContent={'space-around'}>
        <Typography fontWeight={'bold'}>{weather_temp.temp_max}</Typography>
        <Typography>{weather_temp.temp_min}</Typography>
      </Box>
    </Box>
  );
};

export default DaySelectorItem;
