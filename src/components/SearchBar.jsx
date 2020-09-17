import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <select value={selectedGenre} onChange={onSelectedGenreChange} data-testid="select-input">
        <option value="" data-testid="select-option" id="select-genre">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    );
  }

  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,onBookmarkedChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="includes">
          Inclui o texto:
          <input
            type="text" id="includes" value={searchText}
            onChange={onSearchTextChange} data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="show-favorite">
          Mostrar somente favoritos
          <input
            type="checkbox" onChange={onBookmarkedChange} checked={bookmarkedOnly}
            data-testid="checkbox-input" id="show-favorite"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select-genre">
          Filtrar por gênero
          {this.renderSelect()}
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
