import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  renderFilterByGender() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="select-input-label">
        Filtrar por gênero
        <select value={selectedGenre} onChange={onSelectedGenreChange} data-testid="select-input">
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderFavorites() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="fav">
        Mostrar somente favoritos
        <input
          id="fav"
          data-testid="checkbox-input"
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </label>
    );
  }

  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="incluesText">
          Inclui o texto:
          <input
            id="incluesText"
            data-testid="text-input"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        {this.renderFavorites()}
        {this.renderFilterByGender()}
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
