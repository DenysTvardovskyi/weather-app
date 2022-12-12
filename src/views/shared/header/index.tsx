import { Box, Typography } from '@mui/material';
import * as React from 'react';

const Header = () => {
  return (
    <header>
      <Box
        borderBottom='1px solid black'
        alignItems={'center'}
        data-testid={'header'}
        height={'65px'}
        padding={'20px 10px'}
      >
        <Typography textAlign={'center'}>Weather App</Typography>
      </Box>
    </header>
  );
};

export default Header;
