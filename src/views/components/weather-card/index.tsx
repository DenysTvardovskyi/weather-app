import {
  Box,
  Card,
  CardActions,
  CardHeader,
  IconButton,
  Link,
  Menu,
  MenuItem,
} from '@mui/material';
import * as React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCity } from 'slices/userSlice';
import { fetchWeather } from 'slices/citySlice';

const WeatherCard = ({ name, city, weather }: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const icon = weather.weather[0].icon;
  const temp = weather.main;
  return (
    <Card
      sx={{
        maxWidth: 320,
        width: '100%',
        border: '1px solid black',
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
        action={
          <div>
            <IconButton
              aria-label='more'
              id='long-button'
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup='true'
              onClick={(e) => {
                e.stopPropagation();
                handleClick(e);
              }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id='long-menu'
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: 48 * 4.5,
                  width: '20ch',
                },
              }}
            >
              <MenuItem
                key={'remove'}
                onClick={() => {
                  dispatch(removeCity(name));
                }}
              >
                Remove
              </MenuItem>
              <MenuItem
                key={'refresh'}
                onClick={() => {
                  dispatch(fetchWeather([city.coord.lon, city.coord.lat]));
                }}
              >
                Refresh
              </MenuItem>
            </Menu>
          </div>
        }
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
