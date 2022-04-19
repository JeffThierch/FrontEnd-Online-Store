import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    const data = this.recoverdCartItemsFromLocalStorage();
    this.setData(data);
  }

  setData = (data) => {
    this.setState({
      cartItems: data,
    });
  }

  recoverdCartItemsFromLocalStorage = () => {
    if (!JSON.parse(localStorage.getItem('cart_items'))) {
      localStorage.setItem('cart_items', JSON.stringify([]));
    }
    const data = (JSON.parse(localStorage.getItem('cart_items')));
    return data;
  }

  render() {
    const { cartItems } = this.state;
    const { addToCart, cartTotalValue } = this.props;
    return (
      <div className="cartItem-list">

        {cartItems.length === 0 ? (
          <p
            data-testid="shopping-cart-empty-message"
            className="empty-cart-text"
          >
            Seu carrinho está vazio
          </p>)
          : (
            <section className="cart-items-container-section">
              {
                cartItems.map((items, index) => (
                  <CartItem key={ index } cartItems={ items } attCart={ addToCart } />
                ))
              }
            </section>
          )}
        <div className="cart-total-container-section">
          <p>{`Total: R$ ${cartTotalValue}`}</p>
          <Link to="/checkout">
            <button
              type="button"
              data-testid="checkout-products"
            >
              Finalizar Compra
            </button>
          </Link>
        </div>

      </div>
    );
  }
}

Cart.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cartTotalValue: PropTypes.string.isRequired,
};
