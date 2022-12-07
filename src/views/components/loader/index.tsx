import { Box, CircularProgress } from '@mui/material';
import * as React from 'react';

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'grey.700',
      }}
    >
      <CircularProgress color={'inherit'} />
    </Box>
  );
};

export default Loader;
