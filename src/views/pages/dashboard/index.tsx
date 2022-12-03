import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import SearchBar from 'components/search-bar';
import { IOption } from 'application/intefaces/i-option';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { cityList } = useSelector((state: any) => state.city);
  return (
    <Box>
      <SearchBar />
      <Box>
        {cityList.map((city: IOption, index: number) => (
          <Link
            key={index}
            to={`weather?lat=${city.value[1]}&lon=${city.value[0]}`}
          >
            {' '}
            {city.label} - [ {city.value.join(', ')} ]
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
