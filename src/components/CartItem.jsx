import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      isDisable: false,
    };
  }

  onClickIncrease = () => {
    const { cartItems: { availableQuantity } } = this.props;
    const { quantity } = this.state;
    if (quantity >= availableQuantity) {
      this.setState({ isDisable: true });
    } else {
      this.setState({ quantity: quantity + 1 });
    }
  };

  onClickDecrease = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    } else {
      this.setState({ quantity: 1 });
    }
  };

  render() {
    const { cartItems: { name, price } } = this.props;
    const { quantity, isDisable } = this.state;
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
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ this.onClickDecrease }
            disabled={ isDisable }
            className="decrease-btn"
          >
            -
          </button>
          <p
            data-testid="shopping-cart-product-quantity"
            className="cartItem-quantity"
          >
            {quantity}
          </p>
          <button
            data-testid="product-increase-quantity"
            type="button"
            disabled={ isDisable }
            onClick={ this.onClickIncrease }
            className="increase-btn"
          >
            +
          </button>
        </section>
      </div>
    );
  }
}

CartItem.propTypes = {
  cartItems: PropTypes.objectOf(PropTypes.any).isRequired,
};
