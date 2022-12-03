import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from 'application/intefaces/i-app';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { fetchWeather, setCoordinates } from 'slices/citySlice';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const CityPage = () => {
  const { cityWeather, city } = useSelector((state: IAppState) => state.city);

  const dispatch = useDispatch();
  const query = useQuery();

  useEffect(() => {
    dispatch(setCoordinates([query.get('lon'), query.get('lat')]));
    dispatch(fetchWeather([query.get('lon'), query.get('lat')]));
  }, []);

  return city ? (
    <Box>
      <Box>
        <Typography>
          {city.name} {city.country}
        </Typography>
      </Box>
      <Box>
        {cityWeather.map((stmp, index: number) => {
          return (
            <Box key={index}>
              <TextField
                label={'Time'}
                disabled
                value={new Date(stmp.dt_txt).toLocaleString()}
              />
              <TextField label={'Temp'} disabled value={stmp.main.temp} />
            </Box>
          );
        })}
      </Box>
    </Box>
  ) : (
    <div>Loading...</div>
  );
};

export default CityPage;
