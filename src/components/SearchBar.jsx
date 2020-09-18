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
          <label id="texto" data-testid="text-input-label">Inclui o texto:</label>
          <input id="texto" value={searchText} onChange={onSearchTextChange} data-testid="text-input" />
          <label id="favoritos" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input id="favoritos" data-testid="checkbox-input" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
};
