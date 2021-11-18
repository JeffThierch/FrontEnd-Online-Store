import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { categories } = this.props;

    return (
      <div>
        {categories.map((category) => (
          <div key={ category.id }>
            <label htmlFor="category" data-testid="category">
              {category.name}
              <input type="radio" id="category" name="category" />
            </label>
          </div>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
