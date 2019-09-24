import React from 'react';
import { Router } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createBrowserHistory } from 'history';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';
import Layout from './containers/LayoutContainer';
import routes from './config/Routes';

const theme = createMuiTheme({
  typography: {
    // Use the system font.
    fontFamily:
      '-apple-system,system-ui,BlinkMacSystemFont,'
      + '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  },
});

const history = createBrowserHistory();

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

const App = () => (
  <>
    <CssBaseline />
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history} theme={theme}>
        <Layout>
          { routes }
        </Layout>
      </Router>
    </StylesProvider>
  </>
);

export default App;
