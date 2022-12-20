import { deepOrange, grey } from '@mui/material/colors';

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    // primary: {
    //   ...(mode === 'dark' && {
    //     main: 'white',
    //   }),
    // },
    ...(mode === 'dark' && {
      background: {
        default: 'rgba(0, 0, 0, 0.87)',
        paper: 'light-blue',
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: 'black',
            secondary: '#808080',
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
    },
    common: {
      black:'#000',
      white:'#fff',
      grey:{
        500:'#9e9e9e',
        600:'#757575',
        700:'#616161',
      }
    },
  },
})
