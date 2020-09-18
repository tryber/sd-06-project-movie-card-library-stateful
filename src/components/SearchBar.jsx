import React from 'react';
import PropTypes from 'prop-types';

import SearchSelect from './SearchSelect.jsx'

class SearchBar extends React.Component {

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">Inclui o texto</label>
          <input type="text" id="text-input" data-testid="text-input"
            value={searchText} onChange={onSearchTextChange} />

          <input type="checkbox" id="bookmark-checked" data-testid="checkbox-input"
            checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          <label htmlFor="bookmark-checked" data-testid="checkbox-input-label" >
            Mostrar somente favoritos
          </label>

          <SearchSelect selectedGenre={selectedGenre} onSelectedGenreChange={onSelectedGenreChange} />
        </form>
      </div>
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
}.isRequired;

export default SearchBar;
