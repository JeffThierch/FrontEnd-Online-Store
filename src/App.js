import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ItemCard from './pages/ItemCard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
        <Route exact path="/item/:id" render={ (props) => <ItemCard { ...props } /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
