import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="search">
        <input type="text" name="search" id="search" />
      </label>
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
    </div>
  );
}

export default App;
