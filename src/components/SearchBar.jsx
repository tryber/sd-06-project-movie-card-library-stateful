import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  selectInput() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <select
        value={selectedGenre}
        onChange={onSelectedGenreChange}
        data-testid="select-input"
        name="selectedGenre"
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
      <div>
        <form data-testid="search-bar-form" className="search-bar-form">
          <label data-testid="text-input-label" htmlFor="searchText">
            <p>Inclui o texto:</p>
            <input
              onChange={onSearchTextChange}
              value={searchText}
              data-testid="text-input"
              type="text"
              name="searchText"
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
            <input
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
              data-testid="checkbox-input"
              name="bookmarkedOnly"
              type="checkbox"
            />
            Mostrar somente favoritos
          </label>
          <label data-testid="select-input-label" htmlFor="selectedGenre">
            <p>Filtrar por gênero</p>
            {this.selectInput()}
          </label>

        </form>
      </div>
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
