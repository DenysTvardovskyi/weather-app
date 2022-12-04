import { Box, Card, Typography } from '@mui/material';
import * as React from 'react';

const WeatherCard = ({ name, temp, icon }: any) => {
  return (
    <Card
      sx={{
        maxWidth: 320,
        width: '100%',
        gap: 2,
        '&:hover': {
          boxShadow: 'md',
          borderColor: 'neutral.outlinedHoverBorder',
        },
      }}
    >
      <Box sx={{ width: 90 }}>
        <img
          src={'http://openweathermap.org/img/wn/' + icon + '@2x.png'}
          loading='lazy'
          alt=''
        />
      </Box>
      <div>
        <Typography fontSize='lg' id='card-description' mb={0.5}>
          {name}
        </Typography>
        <Typography fontSize='lg' mb={0.5}>
          {temp} &#8451;
        </Typography>
      </div>
    </Card>
  );
};

export default WeatherCard;
