import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form" htmlFor="my-form">
        <label htmlFor="my-form" data-testid="text-input-label">
          Inclui o texto:
          <input type="text" value={searchText} onChange={onSearchTextChange}
            data-testid="text-input"
          />
        </label>
        <label htmlFor="my-form" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="my-form" data-testid="select-input-label">
          Filtrar por gênero
          <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
