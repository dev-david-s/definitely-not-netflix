import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';

import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <h2>Soon be the sign in page</h2>
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <h2>Soon be the sign up page</h2>
        </Route>
        <Route path={ROUTES.BROWSE}>
          <h2>Soon be the browse page</h2>
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
