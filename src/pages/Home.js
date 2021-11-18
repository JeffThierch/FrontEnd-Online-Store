import React, { Component } from 'react';
import { getCategories } from '../services/api';
import Categories from '../components/Categories';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const data = await getCategories();
    this.setState({ categories: data });
  };

  render() {
    const { categories } = this.state;

    return (
      <main>
        <Categories categories={ categories } />

        <div>
          <label htmlFor="search">
            <input type="text" name="search" id="search" />
          </label>
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </div>
      </main>
    );
  }
}
