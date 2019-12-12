import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

import './App.scss';

function App() {
  return (
    <div className="container">
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
