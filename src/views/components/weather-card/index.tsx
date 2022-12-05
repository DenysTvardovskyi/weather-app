import {
  Box,
  Card,
  CardActions,
  CardHeader,
  Link,
  useMediaQuery,
} from '@mui/material';
import * as React from 'react';
import MenuButton from 'components/menu-button';

interface Props {
  name: string;
  city: any;
  weather: any;
  active: boolean;
}

const WeatherCard = ({ name, city, weather, active }: Props) => {
  const matches = useMediaQuery('(min-width:1200px)');

  const icon = weather.weather[0].icon;
  const temp = weather.main;
  return (
    <Card
      sx={{
        maxWidth: 320,
        width: matches ? '100%' : 300,
        border: '1px solid black',
        background: active ? '#c1eca5' : 'inherit',
        transition: '0.3s',
        gap: 5,
        '&:hover': {
          background: '#d9d9d9',
        },
      }}
    >
      <CardHeader
        avatar={
          <img
            src={'http://openweathermap.org/img/wn/' + icon + '@2x.png'}
            loading='lazy'
            alt=''
            style={{ maxWidth: '45px' }}
          />
        }
        action={<MenuButton />}
        title={name}
        subheader={
          <Box>
            <strong>{temp.temp_max}&#176;</strong> {temp.temp_min}&#176;
          </Box>
        }
      />
      <CardActions disableSpacing>
        <Link
          href={`weather?lat=${city.coord.lat}&lon=${city.coord.lon}`}
          sx={{
            color: '#000',
            textDecoration: 'none',
            border: '1px solid black',
            borderRadius: '5px',
            padding: '5px 10px',
            transition: '0.3s',
            '&:hover': {
              color: '#fff',
              background: '#000',
            },
          }}
        >
          View
        </Link>
      </CardActions>
    </Card>
  );
};

export default WeatherCard;
