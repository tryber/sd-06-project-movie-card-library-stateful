import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">

        <label
          htmlFor="text-input"
          data-testid="text-input-label"
        >Inclui o texto:</label>
        <input
          id="text-input"
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
          data-testid="text-input"
        />

        <label
          htmlFor="input-checkbox"
          data-testid="checkbox-input-label"
        >Mostrar somente favoritos</label>
        <input
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
          data-testid="checkbox-input"
        />

        <label
          htmlFor="input-select"
          data-testid="select-input-label"
        >Filtrar por gênero</label>
        <select
          value={this.props.selectedGenre}
          onChange={this.props.onSelectedGenreChange}
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
