import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <main>
        <label htmlFor="search">
          <input type="text" name="search" id="search" />
        </label>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </main>
    );
  }
}
