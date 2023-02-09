import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import App from 'components/App';
import './index.css';

const theme = {
  colors: {
    mainColor: 'rgb(46, 34, 2)',
    whiteColor: '#fff',
    redColor: 'red',
    buttonGood: 'rgb(54, 219, 48)',
    buttonNeutral: 'rgb(169, 189, 168)',
    buttonBad: 'rgb(207, 46, 37)',
    bgColor: 'rgb(240, 184, 180)',
  },
  fontSizes: {
    main: '40px',
    second: '20px',
    hover: '25px',
  },
  lineHeights: {
    title: '1.2',
  },
  space: {
    m: '20px',
    xs: '0',
  },
  fontWeights: {
    b: '700',
  },
  radii: {
    radius: '5px',
  },
  sizes: {
    w: '150px',
    h: '50px',
  },
  borderWidths: {
    w: '1px',
  },
};

console.log(theme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
