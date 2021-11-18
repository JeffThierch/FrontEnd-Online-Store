import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { categories } = this.props;

    return (
      <aside>
        {categories.map((category) => (
          <div key={ category.id }>
            <label htmlFor={ category.name } data-testid="category">
              {category.name}
              <input type="radio" id={ category.name } name="category" />
            </label>
          </div>
        ))}
      </aside>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
