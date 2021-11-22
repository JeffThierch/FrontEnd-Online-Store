import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { searchData, addToCart } = this.props;
    const { title, price, thumbnail, id } = searchData;
    return (
      <section data-testid="product">
        <Link
          to={ { pathname: `/item/${id}`, data: { searchData } } }
          data-testid="product-detail-link"
        >
          <h1>{title}</h1>
        </Link>
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
