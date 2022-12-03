import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { removeCity, addCity } from '../../../redux/slices/citySlice';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from 'components/search-bar';

const Dashboard = () => {
  const { cityList } = useSelector((state: any) => state.city);
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');
  return (
    <Box>
      <ul>
        {cityList.map((i: string, index: number) => (
          <li key={index} onClick={() => dispatch(removeCity(i))}>
            {i}
          </li>
        ))}
      </ul>
      <TextField
        id={'city_name'}
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />

      <SearchBar />

      <Button
        variant='contained'
        onClick={() => {
          setCityName('');
          dispatch(addCity(cityName));
        }}
      >
        Hello World
      </Button>
    </Box>
  );
};

export default Dashboard;
