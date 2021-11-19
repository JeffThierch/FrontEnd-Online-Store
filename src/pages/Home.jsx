import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/CartIcon';
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
      userCartProducts: [],
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

  addToCart = (produto) => {
    const { userCartProducts } = this.state;
    const filterProducts = userCartProducts.filter(({ name }) => name !== produto.name);
    let itemsCart = [];
    if (filterProducts.length === 0) {
      itemsCart = [produto];
      this.setState({
        userCartProducts: itemsCart,
      }, () => {
        this.saveCartItemsInLocalStorage(itemsCart);
      });
    } else {
      itemsCart = [...filterProducts, produto];
      this.setState({
        userCartProducts: itemsCart,
      }, () => this.saveCartItemsInLocalStorage(itemsCart));
    }
  }

  saveCartItemsInLocalStorage = (cartItems) => {
    if (!JSON.parse(localStorage.getItem('cart_items'))) {
      localStorage.setItem('cart_items', JSON.stringify(cartItems));
    } else {
      localStorage.setItem('cart_items', JSON.stringify(cartItems));
    }
  }

  render() {
    const { categories, userSearchResult } = this.state;
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
          <Link to="/cart" data-testid="shopping-cart-button">
            <button type="button">
              <CartIcon />
            </button>
          </Link>
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
            addToCart={ this.addToCart }
          />
        ))}
      </main>
    );
  }
}
