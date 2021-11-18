import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
