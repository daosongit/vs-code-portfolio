import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { createHashRouter, useOutlet } from 'react-router-dom';
import ActivityBar from '../pages/Home/ActivityBar';
import Explorer from '../pages/Home/Explorer';
import Portfolio from '../pages/Portfolio/Portfolio';
import Snake from '../pages/Snake/Snake';
import { useAppSelector } from '../redux/store';
import theme from '../theme/theme';

const Root = () => {
  const outlet = useOutlet();
  const themeMode = useAppSelector((state) => state.theme.state);
  const th = useMemo(() => theme(themeMode), [themeMode]);
  return (
    <ThemeProvider theme={th}>
      <Box display="flex">
        <CssBaseline />
        <ActivityBar />
        <Explorer />
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
    ],
  },
]);

export default router;
