import { Box, Typography } from '@mui/material';

import WeatherCard from 'components/weather-card';

const SideBar = () => {
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
        <WeatherCard name={'lviv'} icon={'sun'} temp={0.0} />
      </Box>
    </Box>
  );
};

export default SideBar;
