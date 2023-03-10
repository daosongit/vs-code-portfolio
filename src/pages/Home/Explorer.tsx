import { Box, Collapse, List, ListItemButton, ListSubheader, Typography } from '@mui/material';
import { useState } from 'react';
import { IoIosArrowForward as IcoArrowLeft, IoIosArrowDown as IcoArrowDown } from 'react-icons/io';
import { RiReactjsFill as IcoReact } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

export default function Explorer({ isShown }: { isShown: boolean }) {
  console.log('Explorer');
  const [dropDown, setDropDown] = useState(true);
  const explorerList = [
    { title: 'Portfolio', icon: <IcoReact />, link: '/portfolio' },
    { title: 'Snake', icon: <IcoReact />, link: '/snake' },
  ];
  return (
    <>
      <Box
        component="aside"
        display={isShown ? 'block' : 'none'}
        sx={{
          width: { xs: '100%', xm: '200px' },
          bgcolor: 'custom.explorer',
          color: 'text.secondary',
          zIndex: 1,
        }}>
        <List
          component="nav"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            position: 'sticky',
            top: 0,
          }}
          subheader={
            <ListSubheader component="span" sx={{ bgcolor: 'transparent' }}>
              Explorer
            </ListSubheader>
          }>
          <ListItemButton
            component="button"
            disableRipple
            sx={{ columnGap: '10px', width: '100%', py: '5px' }}
            onClick={() => setDropDown(!dropDown)}>
            <Box component="span" display="flex">
              {dropDown ? <IcoArrowDown /> : <IcoArrowLeft />}
            </Box>
            <Typography component="h6" variant="h6">
              Home
            </Typography>
          </ListItemButton>
          <Collapse in={dropDown}>
            <List disablePadding>
              {explorerList.map((el) => (
                <ListItemButton
                  key={el.title}
                  component={NavLink}
                  to={el.link}
                  disableRipple
                  sx={{ pl: '30px', width: '100%', columnGap: '5px', py: '5px' }}>
                  <Box component="span" display="flex" paddingLeft="10px" color="#4c96eb">
                    {el.icon}
                  </Box>
                  <Typography component="span" variant="body1">
                    {el.title}
                  </Typography>
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
      </Box>
    </>
  );
}
