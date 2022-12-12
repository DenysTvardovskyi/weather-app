import * as React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Header from '../header';
import Footer from '../footer';
import SideBar from '../side-bar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const matches = useMediaQuery('(min-width:1200px)');
  const tablet = useMediaQuery('(min-width:700px)');
  return (
    <Box height={'100%'} maxHeight={'100vh'} boxSizing={'border-box'}>
      <Header />
      <Box
        display={'flex'}
        height={tablet ? 'calc(100vh - 130px)' : '100%'}
        width={'100%'}
        flexDirection={matches ? 'row' : 'column'}
      >
        <SideBar />
        <Box width={'100%'} borderLeft={matches ? '1px solid black' : 'none'}>
          <Box
            boxSizing={'border-box'}
            padding={'10px'}
            height={'100%'}
            data-testid={'router-outlet-cont'}
            overflow={'auto'}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
