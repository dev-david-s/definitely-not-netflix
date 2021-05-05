import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css';

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
          <h2>Soon to be home page of the Netflix Clone</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
