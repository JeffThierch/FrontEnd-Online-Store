import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/CartIcon';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <Link to="/">
            <h1>Mercadinho 08</h1>
          </Link>
        </div>
        <div>
          <Link to="/cart" data-testid="shopping-cart-button">
            <button type="button">
              <CartIcon />
            </button>
          </Link>
        </div>
      </header>
    );
  }
}
