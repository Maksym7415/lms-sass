import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { blue, pink } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#feffff',
        color: '#758095',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
  },
  palette: {
    primary: {
      main: '#64c8bc',
    },
    secondary: {
      main: '#feffff',
    },
  },
});
theme = responsiveFontSizes(theme);

function Theme(props) {
  return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
  );
}

export default Theme;
