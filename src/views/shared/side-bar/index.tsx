import { Box, Link, Typography } from '@mui/material';

import WeatherCard from 'components/weather-card';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const { cityList } = useSelector((state: any) => state.user);
  return (
    <Box
      borderRight='1px solid black'
      maxWidth={'320px'}
      width={'100%'}
      height={'100%'}
      overflow={'auto'}
    >
      <Box>
        <Typography
          p={'15px'}
          borderBottom={'1px solid black'}
          textAlign={'center'}
        >
          City List
        </Typography>
      </Box>
      <Box
        boxSizing={'border-box'}
        rowGap={'10px'}
        display={'flex'}
        flexDirection={'column'}
        padding={'10px'}
      >
        {cityList.map((city: any, index: number) => {
          return (
            <WeatherCard
              key={index}
              name={city.city.name}
              city={city.city}
              weather={city.weather}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default SideBar;
