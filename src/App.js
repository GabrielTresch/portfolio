import React from 'react';
import ReactGA from 'react-ga';
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

ReactGA.initialize('UA-120472258-3');
ReactGA.pageview(window.location.pathname + window.location.search);

history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

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
