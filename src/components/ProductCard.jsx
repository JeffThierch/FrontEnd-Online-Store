import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { searchData: { title, price, thumbnail } } = this.props;
    return (
      <section data-testid="product">
        <h1>{title}</h1>
        <img src={ thumbnail } alt={ `img from ${title}` } />
        <p>{price}</p>
      </section>
    );
  }
}

ProductCard.propTypes = {
  searchData: PropTypes.objectOf(PropTypes.any).isRequired,
};
