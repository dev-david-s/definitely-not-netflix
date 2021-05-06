import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <h2>Soon be the sign in page</h2>
        </Route>
        <Route path="/signup">
          <h2>Soon be the sign up page</h2>
        </Route>
        <Route path="/browse">
          <h2>Soon be the browse page</h2>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
