import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { searchData: { title, price, thumbnail }, addToCart } = this.props;
    return (
      <section data-testid="product">
        <h1>{title}</h1>
        <img src={ thumbnail } alt={ `img from ${title}` } />
        <p>{price}</p>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addToCart({ name: title, price, quantity: 1 }) }
        >
          Adicionar ao carrinho

        </button>
      </section>
    );
  }
}

ProductCard.propTypes = {
  searchData: PropTypes.objectOf(PropTypes.any).isRequired,
  addToCart: PropTypes.func.isRequired,
};
