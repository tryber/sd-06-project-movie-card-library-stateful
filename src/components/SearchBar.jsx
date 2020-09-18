import React from 'react';
import propTypes from 'prop-types';

class SearchBar extends React.Component {
  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="select-genre" data-testid="select-input-label">
        Filtrar por gênero
        <select data-testid="select-input" id="select-genre" name="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="movie-search" data-testid="text-input-label">
            Inclui o texto:
            <input
              data-testid="text-input"
              id="movie-search"
              type="text"
              name="searchText"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>
          <label htmlFor="check-favorites" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              id="check-favorites"
              type="checkbox"
              name="bookmarkedOnly"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          </label>
          {this.renderSelect()}
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  selectedGenre: propTypes.string.isRequired,
  searchText: propTypes.string.isRequired,
  bookmarkedOnly: propTypes.string.isRequired,
  onSelectedGenreChange: propTypes.func.isRequired,
  onSearchTextChange: propTypes.func.isRequired,
  onBookmarkedChange: propTypes.func.isRequired,
};

export default SearchBar;
