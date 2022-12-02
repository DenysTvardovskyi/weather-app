import { Box, Button, TextField } from '@mui/material';
import { addCity } from 'actions/addCity';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  const { cityList } = useSelector((state: any) => state.common);
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');
  return (
    <Box>
      <ul>
        {cityList.map((i: string, index: number) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
      <TextField
        id={'city_name'}
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
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
