import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Selected from './selected';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form" >
        <label data-testid="text-input-label" htmlFor="text-input">Inclui o texto:</label>
        <input
          data-testid="text-input" value={searchText} name="searchText"
          onChange={onSearchTextChange}
        />
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
            Mostrar somente favoritos
        </label>
        <input
          data-testid="checkbox-input" type="checkbox" name="bookmarkedOnly"
          checked={bookmarkedOnly} onChange={onBookmarkedChange}
        />
        <Selected
          selectedGenre={selectedGenre} onSelectedGenreChange={onSelectedGenreChange}
        />
      </form >
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: '',
  bookmarkedOnly: false,
  onBookmarkedChange: '',
  selectedGenre: '',
  onSelectedGenreChange: '',
};

export default SearchBar;
