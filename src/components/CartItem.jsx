import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    const { cartItems: { quantity } } = this.props;
    this.state = {
      quantity,
      isDisable: false,
    };
  }

  onClickIncrease = () => {
    const { cartItems: { availableQuantity, name, price } } = this.props;
    const { quantity: stateQuantity } = this.state;
    if (stateQuantity >= availableQuantity) {
      this.setState({ isDisable: true });
    } else {
      this.setState({ quantity: stateQuantity + 1 }, () => (
        this.updateCartInfos(name, price, availableQuantity)
      ));
    }
  };

  onClickDecrease = () => {
    const { cartItems: { availableQuantity, name, price } } = this.props;
    const { quantity: stateQuantity } = this.state;
    if (stateQuantity > 1) {
      this.setState({ quantity: stateQuantity - 1 }, () => (
        this.updateCartInfos(name, price, availableQuantity)
      ));
    } else {
      this.setState({ quantity: 1 });
    }
  };

  updateCartInfos = (name, price, availableQuantity) => {
    const { attCart } = this.props;
    const { quantity } = this.state;
    attCart({ name, price, quantity, availableQuantity });
  }

  render() {
    const { cartItems: { name, price } } = this.props;
    const { isDisable, quantity } = this.state;
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
  attCart: PropTypes.func.isRequired,
};
