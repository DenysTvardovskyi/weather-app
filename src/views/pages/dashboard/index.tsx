import { Box } from '@mui/material';
import * as React from 'react';
import SearchBar from '../../components/search-bar';

const Dashboard = () => {
  return (
    <Box
      display={'flex'}
      height={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      data-testid={'dashboard'}
    >
      <SearchBar />
    </Box>
  );
};

export default Dashboard;
