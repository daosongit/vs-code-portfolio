import { Box, Button, Tooltip } from '@mui/material';
import { ImFilesEmpty as IcoExplorer } from 'react-icons/im';
import { IoIosGitBranch as IcoGit } from 'react-icons/io';
import { CiLight as IcoLight, CiDark as Dark } from 'react-icons/ci';

export default function ActivityBar() {
  const menuList = [
    { title: 'Explorer', icon: <IcoExplorer size={27} /> },
    { title: 'GitHub', icon: <IcoGit size={30} /> },
    { title: 'Theme', icon: <IcoLight size={33} /> },
  ];
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
        bgcolor: 'custom.activityBar',
        pt: '20px',
        rowGap: '15px',
      }}>
      {menuList.map((el) => (
        <Tooltip
          key={el.title}
          title={el.title}
          placement="right"
          describeChild
          arrow
          disableTouchListener>
          <Button
            sx={{
              p: 0,
              minWidth: 0,
              color: '#a0a0a0',
              borderLeft: '1px solid transparent',
              borderRadius: 0,
              '&:hover': { color: { md: '#ffffff' } },
            }}
            disableRipple>
            {el.icon}
          </Button>
        </Tooltip>
      ))}
    </Box>
  );
}
