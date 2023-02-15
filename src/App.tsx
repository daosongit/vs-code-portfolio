import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import Home from './pages/Home/Home';

export default function App() {
  const th = useMemo(() => theme('light'), []);

  return (
    <ThemeProvider theme={th}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}
