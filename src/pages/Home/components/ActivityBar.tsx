import { Box, Button, Tooltip } from '@mui/material';
import { ImFilesEmpty as IcoExplorer } from 'react-icons/im';
import { IoIosGitBranch as IcoGit } from 'react-icons/io';
import { CiLight as IcoLight, CiDark as IcoDark } from 'react-icons/ci';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { FC, ReactElement } from 'react';
import { changeTheme } from '../../../redux/themeSlice';

interface MenuItemProps {
  title: string;
  onClick?: () => void;
  children?: ReactElement;
}

export default function ActivityBar() {
  const theme = useAppSelector((state) => state.theme.state);
  const dispatch = useAppDispatch();
  const MenuItem: FC<MenuItemProps> = ({ title, children, onClick = () => {} }) => {
    return (
      <Tooltip title={title} placement="right" describeChild arrow disableTouchListener>
        <Button
          onClick={onClick}
          sx={{
            p: 0,
            minWidth: 0,
            color: '#a0a0a0',
            borderLeft: '1px solid transparent',
            borderRadius: 0,
            '&:hover': { color: { md: '#ffffff' }, bgcolor: 'transparent' },
          }}
          disableRipple>
          {children}
        </Button>
      </Tooltip>
    );
  };

  return (
    <Box
      component="aside"
      position="sticky"
      display="flex"
      flexDirection="column"
      sx={{
        top: 0,
        width: '50px',
        height: '100vh',
        bgcolor: '#333333',
        pt: '20px',
        rowGap: '15px',
      }}>
      <MenuItem title="Explorer">
        <IcoExplorer size={27} />
      </MenuItem>
      <MenuItem title="GitHub">
        <IcoGit size={30} />
      </MenuItem>
      <MenuItem title="Theme" onClick={() => dispatch(changeTheme())}>
        {theme === 'light' ? <IcoLight size={33} /> : <IcoDark size={33} />}
      </MenuItem>
    </Box>
  );
}
