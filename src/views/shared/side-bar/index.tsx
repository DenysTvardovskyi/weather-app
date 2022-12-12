import { Box, Typography, useMediaQuery } from '@mui/material';
import * as React from 'react';
import WeatherCard from '../../components/weather-card';
import { useLocation } from 'react-router-dom';
import { IAppState, ICityListEl } from '../../../application/intefaces/i-app';
import { useAppSelector } from '../../../redux/hooks';

const SideBar = () => {
  const { cityList } = useAppSelector((state: IAppState) => state.user);
  const location = useLocation();
  const matches = useMediaQuery('(min-width:1200px)');
  return (
    <Box
      display={!matches ? 'flex' : 'inherit'}
      data-testid={'side-bar'}
      maxWidth={matches ? '320px' : 'inherit'}
      width={'100%'}
      height={'100%'}
      maxHeight={matches ? 'inherit' : '160px'}
      minHeight={matches ? 'inherit' : '150px'}
      flexDirection={matches ? 'column' : 'row'}
      borderBottom={matches ? 'none' : '1px solid black'}
      overflow={'auto'}
    >
      <Box>
        <Typography
          p={'15px'}
          height={'100%'}
          borderBottom={matches ? '1px solid black' : 'none'}
          textAlign={'center'}
        >
          City List
        </Typography>
      </Box>
      <Box
        boxSizing={'border-box'}
        gap={'10px'}
        flexDirection={matches ? 'column' : 'row'}
        display={'flex'}
        padding={'10px'}
      >
        {cityList.length > 0 ? (
          cityList.map((city: ICityListEl, index: number) => {
            const Active =
              location.search ===
              `?lat=${city.city.coord.lat}&lon=${city.city.coord.lon}`;
            return (
              <WeatherCard
                key={index}
                name={city.city.name}
                coord={city.city.coord}
                main_temp={city.weather.main}
                icon={city.weather.weather[0].icon}
                active={Active}
              />
            );
          })
        ) : (
          <Box>
            <Typography>No city selected yet</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SideBar;
