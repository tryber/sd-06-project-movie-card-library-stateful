import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { onSearchTextChange, searchText } = this.props;
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    const { onSelectedGenreChange, selectedGenre } = this.props;

    return (
      <fieldset data-testid="search-bar-form">
        <div className="text-container">
          <label htmlFor="filter" data-testid="text-input-label">Inclui o texto</label>
          <input
            name="filter" id="filter" data-testid="text-input"
            onChange={onSearchTextChange} value={searchText}
          />
        </div>

        <div className="checkbox-container">
          <label htmlFor="check" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input
            name="check" id="check" data-testid="checkbox-input" type="checkbox"
            onChange={onBookmarkedChange} checked={bookmarkedOnly}
          />
        </div>
        < Select onSelectedGenreChange={onSelectedGenreChange} selectedGenre={selectedGenre} />
      </fieldset>
    );
  }
}

class Select extends Component {
  render() {
    const { onSelectedGenreChange, selectedGenre } = this.props;

    return (
      <div className="checkbox-container">
        <label data-testid="select-input-label">Filtrar por gênero</label>
        <select data-testid="select-input" onChange={onSelectedGenreChange} value={selectedGenre}>
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </div>
    )
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
};

export default SearchBar;
