import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Popover from "@material-ui/core/Popover";
import {Typography} from "@material-ui/core";
import {Avatar} from "@material-ui/core";

export default function MenuRenderer({ items, Component, typographyProps, startIndex=0 }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = onClick => e => {
    onClick?.();
    handleClose();
  }

  const isString = str => typeof str === "string";

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <div aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        {Component}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuList>
          {
            items?.map((item, index) => (
              <MenuItem onClick={handleMenuItemClick(item.onClick)} key={item.label}>
                {
                  (item.icon && isString(item.icon)) ?
                    <Avatar alt={item.label} src={item.imageUrl}/> :
                    item.icon ? <item.icon/> :
                      <></>
                }
                <Typography variant='h6' component='span' {...typographyProps?.(startIndex+index)}>
                  {item.label}
                </Typography>
              </MenuItem>
            ))
          }
        </MenuList>
      </Popover>
    </div>
  );
}
