import { Box, Typography } from '@mui/material';
import * as React from 'react';

const Footer = () => {
  return (
    <footer>
      <Box
        alignItems={'center'}
        padding={'20px 10px'}
        data-testid={'footer'}
        height={'65px'}
        borderTop={'1px solid black'}
      >
        <Typography textAlign={'start'}>Weather by TDM</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
