import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';

import withChannel from '../adk/WithChannel';
import { EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK } from '../config';

const currentTheme = data => {
  try {
    const theme = data.themes[data.themeInd];
    return createTheme(theme);
  } catch (err) {
    return createTheme({});
  }
};

// eslint-disable-next-line react/prop-types
const MuiDecorator = ({ data, story }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={currentTheme(data)}>
      <div>{story}</div>
    </ThemeProvider>
  </StyledEngineProvider>
);

export default withChannel({ EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK })(
  MuiDecorator
);
