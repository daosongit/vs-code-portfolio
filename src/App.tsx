import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import Home from './pages/Home/Home';
import { useAppSelector } from './redux/store';

export default function App() {
  const themeMode = useAppSelector((state) => state.theme.state);
  console.log('themeMode = ', themeMode);
  const th = useMemo(() => theme(themeMode), [themeMode]);

  return (
    <ThemeProvider theme={th}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}
