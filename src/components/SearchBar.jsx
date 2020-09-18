// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange
    } = this.props;
    return (
      <form
        data-testid="search-bar-form"
      >

        <label data-testid="text-input-label" htmlFor="search-text">
          Inclui o texto:
        </label>
        <input
          type="text"
          data-testid="text-input"
          id="search-text"
          onChange={onSearchTextChange}
          value={searchText}
        />

        <label data-testid="checkbox-input-label" htmlFor="search-check">
          Mostrar somente favoritos
        </label>
        <input
        type="checkbox"
        data-testid="checkbox-input"
        id="search-check"
        onChange={onBookmarkedChange}
        value={bookmarkedOnly}
        />

        <label data-testid="select-input-label" htmlFor="search-select">Filtrar por gênero</label>
        <select
        id="search-select"
        onChange={onSelectedGenreChange}
        value={selectedGenre}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
