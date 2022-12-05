import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <header>
      <Box
        borderBottom='1px solid black'
        alignItems={'center'}
        height={'65px'}
        padding={'20px 10px'}
      >
        <Typography textAlign={'center'}>Weather App</Typography>
      </Box>
    </header>
  );
};

export default Header;
