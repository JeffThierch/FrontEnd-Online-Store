import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartIcon from '../assets/CartIcon';
import '../styles/Header.css';

export default class Header extends Component {
  render() {
    const { cartQuantity } = this.props;
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
              <span data-testid="shopping-cart-size">{cartQuantity}</span>
            </button>
          </Link>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  cartQuantity: PropTypes.number.isRequired,
};
