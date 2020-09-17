import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { 
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange
    } = this.props;
    return (
      <form data-testid="search-bar-form" >
        <label data-testid="text-input-label" htmlFor="text-input">Inclui o texto:</label>
        <input
          data-testid="text-input" value={searchText} onChange={onSearchTextChange}
        />
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
            Mostrar somente favoritos
        </label>
        <input
          data-testid="checkbox-input" type="checkbox"
          checked={bookmarkedOnly} onChange={onBookmarkedChange}
        />
        <label data-testid="select-input-label" htmlFor="select-input" >Filtrar por gênero</label>
        <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange} >
          <option data-testid="select-option" value="" >Todos</option>
          <option data-testid="select-option" value="action" >Ação</option>
          <option data-testid="select-option" value="comedy" >Comédia</option>
          <option data-testid="select-option" value="thriller" >Suspense</option>
        </select>
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
  searchText: 'movie',
  onSearchTextChange: 'callback',
  bookmarkedOnly: false,
  onBookmarkedChange: 'callback',
  selectedGenre: 'genre',
  onSelectedGenreChange: 'callback',
};

export default SearchBar;
