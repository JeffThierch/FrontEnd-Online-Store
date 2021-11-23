import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ProductDetails.css';

export default class ItemCard extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      evaluation: '',
    };
  }

  saveEvaluation = (event) => {
    event.preventDefault();
    const { email, evaluation } = this.state;
    console.log(email, evaluation);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { location: { data }, addToCart } = this.props;
    const {
      searchData: {
        title,
        thumbnail,
        price,
        attributes,
        available_quantity: availableQuantity,
        shipping: { free_shipping: freeShiping } },
      email,
      evaluation,
    } = data;

    return (
      <main>
        <section>
          <div>
            <h1 data-testid="product-detail-name">{ title }</h1>
            <h2>{ `R$ ${price}` }</h2>
          </div>
          {freeShiping ? <p data-testid="free-shipping">DIGRATIS</p> : ''}
          <img src={ thumbnail } alt={ `img from ${title}` } />
          {attributes.map(({ id, name, value_name: valueName }) => (
            <p key={ id }>{ `${name}: ${valueName}` }</p>
          ))}
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ () => addToCart({ name: title, price, availableQuantity }) }
          >
            Adicionar ao carrinho

          </button>
        </section>

        <section>
          <h1>Avaliações</h1>
          <form action="">
            <label htmlFor="email">
              Email
              <input
                type="text"
                name="email"
                id="email"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>

            <label htmlFor="evaluation">
              <textarea
                name="evaluation"
                id="evaluation"
                cols="30"
                rows="10"
                data-testid="product-detail-evaluation"
                value={ evaluation }
                onChange={ this.handleChange }
              />
            </label>

            <button
              type="submit"
              onClick={ this.saveEvaluation }
            >
              Avaliar

            </button>
          </form>
        </section>
      </main>
    );
  }
}

ItemCard.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  addToCart: PropTypes.func.isRequired,
};
