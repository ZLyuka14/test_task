/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Products from './pages/Products/Products';

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/products/:id" component={Products} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
