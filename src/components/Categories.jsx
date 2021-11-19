import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { categories, handleClick } = this.props;
    return (
      <aside>
        {categories.map(({ id, name }) => (
          <div key={ id }>
            <label htmlFor={ name } data-testid="category">
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
