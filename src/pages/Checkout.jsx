import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutItem from '../components/CheckoutItem';
import '../styles/Cart.css';

export default class Checkout extends Component {
  render() {
    const { cartItems, totalValue } = this.props;
    return (
      <section>

        <section>
          {cartItems.map((item, index) => (<CheckoutItem
            key={ index }
            cartItem={ item }
          />))}
          <p>{`Total: ${totalValue}`}</p>
        </section>
        <form>
          <section>
            <label htmlFor="input-name">
              Nome Completo:
              <input type="text" data-testid="checkout-fullname" id="input-name" />
            </label>
          </section>
          <section>
            <label htmlFor="input-email">
              Email:
              <input type="email" data-testid="checkout-email" id="input-email" />
            </label>
          </section>
          <section>
            <label htmlFor="input-cpf">
              CPF:
              <input type="text" data-testid="checkout-cpf" id="input-cpf" />
            </label>
          </section>
          <section>
            <label htmlFor="input-phone">
              Telefone:
              <input type="tel" data-testid="checkout-phone" id="input-phone" />
            </label>
          </section>
          <section>
            <label htmlFor="input-cep">
              CEP:
              <input type="text" data-testid="checkout-cep" id="input-cep" />
            </label>
          </section>
          <section>
            <label htmlFor="input-address">
              Endereço:
              <input type="text" data-testid="checkout-address" id="input-address" />
            </label>
          </section>
        </form>
      </section>
    );
  }
}

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalValue: PropTypes.string.isRequired,
};
