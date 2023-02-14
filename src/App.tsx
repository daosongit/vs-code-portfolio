import { useMemo } from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';

export default function App() {
  const th = useMemo(() => theme('light'), []);

  return <ThemeProvider theme={th}>color</ThemeProvider>;
}
