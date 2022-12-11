import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { removeCity } from '../../../redux/slices/userSlice';
import { fetchWeather } from '../../../redux/slices/citySlice';
import * as React from 'react';
import { useState } from 'react';
import { ICoord } from '../../../application/intefaces/i-weather';
import { useAppDispatch } from '../../../redux/hooks';

interface Props {
  coord: ICoord;
  name: string;
}

const MenuButton = ({ coord, name }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        data-testid={'menu-icon'}
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='long-menu'
        data-testid='menu-body'
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
            dispatch(fetchWeather([coord.lon, coord.lat]));
          }}
        >
          Refresh
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuButton;
