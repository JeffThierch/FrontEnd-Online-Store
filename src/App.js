import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCartProducts: [],
    };
  }

  addToCart = (produto) => {
    const { userCartProducts } = this.state;
    const filterProducts = userCartProducts.filter(({ name }) => name !== produto.name);
    let itemsCart = [];
    if (filterProducts.length === 0) {
      itemsCart = [produto];
      this.setState({
        userCartProducts: itemsCart,
      }, () => {
        this.saveCartItemsInLocalStorage(itemsCart);
      });
    } else {
      itemsCart = [...filterProducts, produto];
      this.setState({
        userCartProducts: itemsCart,
      }, () => this.saveCartItemsInLocalStorage(itemsCart));
    }
  };

  saveCartItemsInLocalStorage = (cartItems) => {
    if (!JSON.parse(localStorage.getItem('cart_items'))) {
      localStorage.setItem('cart_items', JSON.stringify(cartItems));
    } else {
      localStorage.setItem('cart_items', JSON.stringify(cartItems));
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={ () => <Home addToCart={ this.addToCart } /> } />
          <Route exact path="/cart" component={ Cart } />
          <Route
            exact
            path="/item/:id"
            render={
              (props) => <ProductDetails { ...props } addToCart={ this.addToCart } />
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
