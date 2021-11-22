import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemCard extends Component {
  render() {
    const { location: { data }, addToCart } = this.props;
    const { searchData: { title, thumbnail, price, attributes } } = data;
    return (
      <main>
        <section>
          <div>
            <h1 data-testid="product-detail-name">{ title }</h1>
            <h2>{ `R$ ${price}` }</h2>
          </div>
          <img src={ thumbnail } alt={ `img from ${title}` } />
          {attributes.map(({ id, name, value_name: valueName }) => (
            <p key={ id }>{ `${name}: ${valueName}` }</p>
          ))}
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ () => addToCart({ name: title, price }) }
          >
            Adicionar ao carrinho

          </button>
        </section>
      </main>
    );
  }
}

ItemCard.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  addToCart: PropTypes.func.isRequired,
};
