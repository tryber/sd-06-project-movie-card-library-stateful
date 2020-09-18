import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="select-options" data-testid="select-input-label">Filtrar por gênero
        <select value={selectedGenre} id="select-options"
          onChange={onSelectedGenreChange} data-testid="select-input"
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
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="id-text" data-testid="text-input-label">Inclui o texto:
          <input value={searchText} data-testid="text-input"
            onChange={onSearchTextChange} type="text" id="id-text"
          />
        </label>
        <label htmlFor="id-check" data-testid="checkbox-input-label">Mostrar somente favoritos
          <input checked={bookmarkedOnly} data-testid="checkbox-input"
            onChange={onBookmarkedChange} type="checkbox" id="id-check"
          />
        </label>
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
