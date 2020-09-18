import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  functionNeededTwo() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="text-input-label">
        Inclui o texto
        <input type="text" data-testid="text-input"
          onChange={onSearchTextChange} value={searchText}
        />
      </label>
    );
  }

  functionNeeded() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <select data-testid="select-input" onChange={onSelectedGenreChange} value={selectedGenre}>
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    );
  }

  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          {this.functionNeededTwo()}
          <br />
          <label data-testid="checkbox-input-label" htmlFor="checkbox-input-label">
            Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            onChange={onBookmarkedChange}
            checked={bookmarkedOnly}
            />
          </label><br />
          <label data-testid="select-input-label" htmlFor="select-input-label">
            Filtrar por gênero
            {this.functionNeeded()}
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
