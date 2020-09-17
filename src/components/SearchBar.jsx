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
          <label data-testid="text-input-label">Inclui o texto</label>
          <input data-testid="text-input" onChange={onSearchTextChange} value={searchText} />
        </div>

        <div className="checkbox-container">
          <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input
            data-testid="checkbox-input" type="checkbox"
            onChange={onBookmarkedChange} checked={bookmarkedOnly}
          />
        </div>

        <div className="checkbox-container">
          <label data-testid="select-input-label">Filtrar por gênero</label>
          <select data-testid="select-input" onChange={onSelectedGenreChange} value={selectedGenre}>
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </div>
      </fieldset>
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default SearchBar;
