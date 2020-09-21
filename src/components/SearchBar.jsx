import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  renderFavorite() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="check" data-testid="checkbox-input-label">
        <input
          id="check"
          className="check"
          data-testid="checkbox-input"
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
        Mostrar somente favoritos
      </label>
    );
  }

  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="filter" data-testid="select-input-label">
      Filtrar por gênero
        <select
          data-testid="select-input"
          id="filter"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form className="search-bar-form" data-testid="search-bar-form">
        <label htmlFor="sea" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="sea"
            data-testid="text-input"
            type="text"
            placeholder="Escreva aqui"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        {this.renderFavorite()}
        {this.renderSelect()}
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
