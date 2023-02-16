import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { useMemo } from 'react';
import { createHashRouter, useOutlet } from 'react-router-dom';
import Git from '../pages/Git/Git';
import ActivityBar from '../pages/Home/ActivityBar';
import Explorer from '../pages/Home/Explorer';
import Portfolio from '../pages/Portfolio/Portfolio';
import Snake from '../pages/Snake/Snake';
import { useAppSelector } from '../redux/store';
import theme from '../theme/theme';

const Root = () => {
  console.log('Root');
  const outlet = useOutlet();
  const themeMode = useAppSelector((state) => state.theme.state);
  const th = useMemo(() => theme(themeMode), [themeMode]);

  return (
    <ThemeProvider theme={th}>
      <Box display="flex">
        <CssBaseline />
        <ActivityBar />
        {outlet}
      </Box>
    </ThemeProvider>
  );
};

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/snake',
        element: <Snake />,
      },
      {
        path: '/git',
        element: <Git />,
      },
    ],
  },
]);

export default router;
