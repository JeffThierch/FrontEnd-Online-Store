import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  onClickIncrease = () => {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
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
    const { quantity } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{name}</p>
        <p>{price}</p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.onClickDecrease }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.onClickIncrease }
        >
          +
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  cartItems: PropTypes.objectOf(PropTypes.any).isRequired,
};
