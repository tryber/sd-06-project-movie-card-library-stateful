import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBarTextFilter extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div className="text-filter-container">
        <label htmlFor="textFilter" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="textFilter"
            id="textFilter"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
          />
        </label>
      </div>
    );
  }
}

SearchBarTextFilter.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBarTextFilter;
