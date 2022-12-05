import { Box } from '@mui/material';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error: unknown = useRouteError();

  return (
    <Box
      id='error-page'
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      height={'100vh'}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <Link style={{ color: '#000', margin: '10px 0' }} to={'/'}>
        Back to Dashboard
      </Link>
    </Box>
  );
};

export default ErrorPage;
