import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';

class SearchBar extends Component {

  checkBox() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <select
        data-testid="select-input"
        name="selectedGenre"
        value={selectedGenre}
        onChange={onSelectedGenreChange}
      >
        <option data-testid="select-option" value="">Todos</option>
        <option data-testid="select-option" value="action">Ação</option>
        <option data-testid="select-option" value="comedy">Comédia</option>
        <option data-testid="select-option" value="thriller">Suspense</option>
      </select>
    );
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form className="SearchBar" data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">Inclui o texto :
          <input
            type="text" value={searchText} onChange={onSearchTextChange}
            data-testid="text-input" name="searchText"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="fav">
          Mostrar somente favoritos :
          <input
            type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange}
            data-testid="checkbox-input" id="fav" name="bookmarkedOnly"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero :
          {this.checkBox()}
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
