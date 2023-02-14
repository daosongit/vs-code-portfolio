import { createTheme } from '@mui/material/styles';

const theme = (mode: string) => {
  const isLight = mode === 'light'
  const options = {
    palette: {
      primary: {
        main: isLight ?  '#ffffff' : '#1e1e1e',
      },
      secondary:{
        main: isLight ? '#ffffff':'#1e1e1e' 
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
