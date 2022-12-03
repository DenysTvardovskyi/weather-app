import { Box } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from 'components/search-bar';
import { IOption } from 'application/intefaces/i-option';

const Dashboard = () => {
  const { cityList } = useSelector((state: any) => state.city);
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');
  return (
    <Box>
      <SearchBar />
      <Box>
        {cityList.map((city: IOption, index: number) => (
          <div key={index}>
            {city.label} - {city.value.join(', ')}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
