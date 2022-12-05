import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Box
        alignItems={'center'}
        padding={'20px 10px'}
        height={'65px'}
        borderTop={'1px solid black'}
      >
        <Typography textAlign={'start'}>Weather by TDM</Typography>
      </Box>
    </footer>
  );
};

export default Footer;