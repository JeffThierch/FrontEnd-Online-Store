import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      userSearchInput: '',
      userCategory: '',
      userSearchResult: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const data = await getCategories();
    this.setState({ categories: data });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    }, () => { this.searchProduct(); });
  }

  searchProduct = async () => {
    const { userSearchInput, userCategory } = this.state;
    const searchData = (
      await getProductsFromCategoryAndQuery(userCategory, userSearchInput)
    );
    this.setState({
      userSearchResult: searchData.results,
    });
  }

  render() {
    const { categories, userSearchResult } = this.state;
    const { addToCart } = this.props;
    return (
      <main>
        <section>
          <label htmlFor="search">
            <input
              type="text"
              name="userSearchInput"
              id="search"
              onChange={ this.handleChange }
              data-testid="query-input"
            />
            <button
              type="button"
              onClick={ this.searchProduct }
              data-testid="query-button"
            >
              Pesquisar

            </button>
          </label>

        </section>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Categories
          categories={ categories }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
        {userSearchResult.map((item, index) => (
          <ProductCard
            key={ index }
            searchData={ item }
            addToCart={ addToCart }
          />
        ))}
      </main>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
