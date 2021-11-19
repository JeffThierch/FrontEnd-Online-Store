import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  render() {
    const { cartItems: { name, price, quantity } } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{name}</p>
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  cartItems: PropTypes.objectOf(PropTypes.any).isRequired,
};
