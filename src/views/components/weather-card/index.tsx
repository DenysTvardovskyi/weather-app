import {
  Box,
  Card,
  CardActions,
  CardHeader,
  Link,
  useMediaQuery,
} from '@mui/material';
import * as React from 'react';
import MenuButton from '../menu-button';
import { ICoord, IMain } from '../../../application/intefaces/i-weather';

interface Props {
  name: string;
  main_temp: IMain;
  icon: string;
  coord: ICoord;
  active: boolean;
}

const WeatherCard = ({ name, icon, main_temp, coord, active }: Props) => {
  const matches = useMediaQuery('(min-width:1200px)');
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
      data-testid={'weather-card'}
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
        action={<MenuButton coord={coord} name={name} />}
        title={name}
        subheader={
          <Box>
            <strong>{main_temp.temp_max}&#176;</strong> {main_temp.temp_min}
            &#176;
          </Box>
        }
      />
      <CardActions disableSpacing>
        <Link
          href={`/weather-app/weather?lat=${coord.lat}&lon=${coord.lon}`}
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
