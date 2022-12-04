import { Box, Typography } from '@mui/material';
import Header from '../header';
import Footer from '../footer';
import SideBar from '../side-bar';

const Layout = ({ children }: any) => {
  return (
    <Box height={'100%'} maxHeight={'100vh'} boxSizing={'border-box'}>
      <Header />
      <Box
        display={'flex'}
        columnGap={'10px'}
        height={'calc(100% - 115px)'}
        width={'100%'}
      >
        <SideBar />
        <Box
          display={'flex'}
          flexDirection={'column'}
          width={'100%'}
          borderLeft={'1px solid black'}
        >
          <Box width={'100%'}>
            <Typography
              p={'15px'}
              borderBottom={'1px solid black'}
              textAlign={'center'}
            >
              Lviv
            </Typography>
          </Box>
          <Box boxSizing={'border-box'} padding={'10px'} overflow={'auto'}>
            {children}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
