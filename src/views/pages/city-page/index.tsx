import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { IAppState } from 'application/intefaces/i-app';

const CityPage = () => {
  const { cityWeather } = useSelector((state: IAppState) => state.city);
  return <Box>City</Box>;
};

export default CityPage;
