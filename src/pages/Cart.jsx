import React, { Component } from 'react';
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
    return (
      <div className="cartItem-list">
        {cartItems.length === 0 ? (
          <p
            data-testid="shopping-cart-empty-message"
            className="empty-cart-text"
          >
            Seu carrinho está vazio
          </p>) : (

          cartItems.map((items, index) => (
            <CartItem key={ index } cartItems={ items } />
          ))
        )}

      </div>
    );
  }
}
