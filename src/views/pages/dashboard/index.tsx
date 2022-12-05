import { Box } from '@mui/material';
import SearchBar from 'components/search-bar';

const Dashboard = () => {
  return (
    <Box
      display={'flex'}
      height={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <SearchBar />
    </Box>
  );
};

export default Dashboard;
