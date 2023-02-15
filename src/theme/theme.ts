import { createTheme } from '@mui/material/styles';

const theme = (mode: string) => {
  const isLight = mode === 'light'
  const options = {
    breakpoints: {
      // keys: Array('xs', 'xm', 'sm', 'md', 'lg', 'xl'),
      values: {
        xs: 0,
        xm: 400,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536

      }
    },
    palette: {
      custom:{
        activityBar: '#333333',
        explorer: isLight ? '#f3f3f3' : '#252527',
      },
      primary: {
        main: isLight ? '#1e1e1e' : '#ffffff',
      },
      secondary:{
        main: isLight ? '#1e1e1e' : '#ffffff',
      },
      background:{
        default: isLight ? '#ffffff' : '#1e1e1e' 
      },
      text:{
        secondary: isLight ? '#6a6760' : '#b8beca'
      }
    },
  }

  return  createTheme(options) 
}

export default theme;
