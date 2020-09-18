import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBarCheckBoxFilter extends Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return(
      <div className="check-box-filter-container">
        <label htmlFor="checkBoxFilter" data-testid="checkbox-input-label">
          Mostrar somente favoritos: 
          <input type="checkbox" name="checkBoxFilter"
            id="checkBoxFilter"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />
        </label>
      </div>
    );
  }
}

SearchBarCheckBoxFilter.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBarCheckBoxFilter;
