import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import * as React from 'react';

const ErrorPage = () => {
  return (
    <Box
      id='error-page'
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      height={'100%'}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link style={{ color: '#000', margin: '10px 0' }} to={'/weather-app/'}>
        Back to Dashboard
      </Link>
    </Box>
  );
};

export default ErrorPage;
