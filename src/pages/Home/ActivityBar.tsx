import { Box, Tooltip } from '@mui/material';
import { ImFilesEmpty as IcoExplorer } from 'react-icons/im';
import { IoIosGitBranch as IcoGit } from 'react-icons/io';
import { CiLight as IcoLight, CiDark as IcoDark } from 'react-icons/ci';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { FC, ReactElement, useState } from 'react';
import { changeTheme } from '../../redux/slices';
import Explorer from './Explorer';
import { NavLink } from 'react-router-dom';
import React from 'react';

interface BtnWrapperProps {
  title: string;
  borderLeft?: boolean;
  children?: ReactElement;
}

function ActivityBar() {
  const theme = useAppSelector((state) => state.theme.state);
  const dispatch = useAppDispatch();
  const [isExplorerShown, setIsExplorerShown] = useState(true);
  console.log('ActivityBar');

  const BtnWrapper: FC<BtnWrapperProps> = ({ title, borderLeft = false, children }) => (
    <Tooltip title={title} placement="right" describeChild arrow disableTouchListener>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          border: 'none',
          borderLeft: `2px solid ${borderLeft ? '#fff' : 'transparent'}`,
        }}>
        {children}
      </Box>
    </Tooltip>
  );

  const boxSx = {
    textAlign: 'center',
    color: '#a0a0a0',
    border: 'none',
    bgcolor: 'transparent',
    cursor: 'pointer',
    '&:hover': { color: { md: '#ffffff' } },
  };

  return (
    <>
      <Box
        component="aside"
        sx={{
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'sticky',
          top: 0,
          width: '50px',
          height: '100vh',
          bgcolor: '#333333',
          pt: '20px',
          rowGap: '15px',
        }}>
        <BtnWrapper title="Explorer" borderLeft={isExplorerShown}>
          <Box component="button" sx={boxSx} onClick={() => setIsExplorerShown(!isExplorerShown)}>
            <IcoExplorer size={27} />
          </Box>
        </BtnWrapper>
        <BtnWrapper title="Git Hub">
          <Box
            component={NavLink}
            to="/git"
            sx={{ color: '#a0a0a0', height: '30px', '&:hover': { color: { md: '#ffffff' } } }}>
            <IcoGit size={30} />
          </Box>
        </BtnWrapper>
        <BtnWrapper title="Theme">
          <Box component="button" sx={boxSx} onClick={() => dispatch(changeTheme())}>
            {theme === 'light' ? <IcoLight size={33} /> : <IcoDark size={33} />}
          </Box>
        </BtnWrapper>
      </Box>
      <Explorer isShown={isExplorerShown} />
      {isExplorerShown && (
        <Box
          onClick={() => setIsExplorerShown(false)}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      )}
    </>
  );
}

export default React.memo(() => <ActivityBar />);
