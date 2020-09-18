import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const searchText = this.props.searchText;
    const onSearchTextChange = this.props.onSearchTextChange;
    const bookmarkedOnly = this.props.bookmarkedOnly;
    const onBookmarkedChange = this.props.onBookmarkedChange;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">Inclui o texto:</label>
          <input 
            value={searchText}
            onChange={onSearchTextChange} 
            data-testid="text-input" 
          />
          <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input 
            data-testid="checkbox-input"
            checked={bookmarkedOnly} 
            onChange={onBookmarkedChange} 
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;

SearchBar.defaultProps = { 
  searchText: {},
  onSearchTextChange: {},
  bookmarkedOnly: {},
  onBookmarkedChange: {},
};
SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
};
