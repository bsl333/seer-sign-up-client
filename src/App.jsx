import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/SignUpPage/SignUpPage';

import './App.scss';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/signup" component={HomePage} />
        <Route
          path="/"
          render={() => {
            return <Redirect to="/signup" />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
