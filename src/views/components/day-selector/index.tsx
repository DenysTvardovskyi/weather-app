import { Box, useMediaQuery } from '@mui/material';
import * as React from 'react';
import { IForecast } from '../../../application/intefaces/i-weather';
import DaySelectorItem from '../day-selector-item';

interface Props {
  filteredDataByDay: IForecast[][];
  activeIndex: number;
  handleClick: (e: number) => void;
}

const DaySelector = ({
  filteredDataByDay,
  activeIndex,
  handleClick,
}: Props) => {
  const matches = useMediaQuery('(min-width:700px)');
  return (
    <Box
      display={'flex'}
      flexDirection={matches ? 'row' : 'column'}
      justifyContent={'center'}
      overflow={'auto'}
      width={'100%'}
      gap={'5px'}
    >
      {filteredDataByDay.map((weather, index: number) => {
        const data = weather[0];
        const forecast = data.weather[0];
        const weather_temp = data.main;
        return (
          <DaySelectorItem
            key={index}
            forecast={forecast}
            weather_temp={weather_temp}
            handleClick={handleClick}
            index={index}
            date={data.dt_txt}
            activeIndex={activeIndex}
          />
        );
      })}
    </Box>
  );
};

export default DaySelector;
