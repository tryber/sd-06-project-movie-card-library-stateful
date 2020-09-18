import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    const a = onSearchTextChange;
    const b = onBookmarkedChange; const c = bookmarkedOnly; const d = onSelectedGenreChange;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto
          <input type="text" id="text-input" data-testid="text-input" value={searchText} onChange={a} />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="fav-check">
          Mostrar somente favoritos
          <input type="checkbox" id="fav-check" data-testid="checkbox-input" checked={c} onChange={b} />
        </label>

        <label data-testid="select-input-label" htmlFor="gen-select">
          Filtrar por gênero
          <select id="gen-select" data-testid="select-input" value={selectedGenre} onChange={d}>
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
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
