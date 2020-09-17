import React, { Component } from 'react';


class SearchBar extends Component {
  render({ searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange }) {
    return (
      <form data-testid="search-bar-form">
        <h2>Filtre os filmes</h2>
        <div className="input-container">
          <label htmlFor="title" data-testid="text-input-label">Inclui o texto:</label>
          <input type="text" id="title" value={searchText} data-testid="text-input" onChange={onSearchTextChange} />
        </div>
        <div className="filters">
          <div className="check-box-container">
            <input type="checkbox" name="favorites" id="favorites" checked={bookmarkedOnly} onChange={onBookmarkedChange} data-testid="checkbox-input" />
            <label htmlFor="favorites" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          </div>
          <div className="select-container">
            <label htmlFor="genre" data-testid="select-input-label">Filtrar por gênero</label>
            <select name="genre" id="genre" value={selectedGenre} onChange={onSelectedGenreChange} data-testid="select-input">
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
