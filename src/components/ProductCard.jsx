import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const { searchData, addToCart } = this.props;
    const { title, price, thumbnail, id } = searchData;
    return (
      <section
        data-testid="product"
        className="product-card"
      >
        <Link
          to={ { pathname: `/item/${id}`, data: { searchData } } }
          data-testid="product-detail-link"
          className="product-title"
        >
          <h1>{title}</h1>
        </Link>
        <img
          src={ thumbnail }
          alt={ `img from ${title}` }
          className="product-img"
        />
        <p className="product-price">{price}</p>
        <button
          data-testid="product-add-to-cart"
          type="button"
          className="product-btn"
          onClick={ () => addToCart({ name: title, price }) }
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
