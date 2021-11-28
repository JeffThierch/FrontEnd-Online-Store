import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckoutItem extends Component {
  render() {
    const { cartItem: { name, price, quantity } } = this.props;
    console.log(this.props);
    return (
      <div className="cart-item">
        <section className="description-section">
          <p
            data-testid="shopping-cart-product-name"
            className="cartItem-title"
          >
            {name}
          </p>
          <p
            className="cartItem-price"
          >
            {`R$${price}`}
          </p>
        </section>
        <section className="quantity-section">
          <p
            data-testid="shopping-cart-product-quantity"
            className="cartItem-quantity"
          >
            {`Quantidade: ${quantity}`}
          </p>
        </section>
      </div>
    );
  }
}

CheckoutItem.propTypes = {
  cartItem: PropTypes.objectOf(PropTypes.any).isRequired,
};
