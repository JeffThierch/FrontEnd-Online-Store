import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/CartIcon';
import '../styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="header-texts">
          <Link to="/" className="header-title">
            <h1>Mercadinho 08</h1>
          </Link>
          <h2 className="header-bar">|</h2>
          <h2 className="header-slogan">Aqui você encontra tudo!</h2>
        </div>
        <div>
          <Link to="/cart" data-testid="shopping-cart-button">
            <button className="cart-btn" type="button">
              <CartIcon />
            </button>
          </Link>
        </div>
      </header>
    );
  }
}
