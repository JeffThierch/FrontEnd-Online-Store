import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Categories.css';

export default class Categories extends Component {
  render() {
    const { categories, handleClick } = this.props;
    return (
      <aside className="categories-list">
        {categories.map(({ id, name }) => (
          <div
            key={ id }
            className="category-item"
          >
            <label
              htmlFor={ name }
              data-testid="category"
              className="category-label"
            >
              {name}
              <input
                type="radio"
                id={ name }
                name="userCategory"
                value={ id }
                onClick={ handleClick }
              />
            </label>
          </div>
        ))}
      </aside>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
};
