import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { 
            searchText,
            onSearchTextChange,
            bookmarkedOnly,
            onBookmarkedChange,
            selectedGenre,
            onSelectedGenreChange
           } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="include">Inclui o texto:</label>
          <input
                 data-testid="text-input"
                 type="text"
                 onChange={onSearchTextChange}
                 value={searchText}
                 id="include"
          />
          <label data-testid="checkbox-input-label" HtmlFor="favorite">Mostrar somente favoritos</label>
          <input
                 data-testid="checkbox-input"
                 type="radio"
                 checked={bookmarkedOnly}
                 onChange={onBookmarkedChange}
                 id="favorite"
          />
          <label data-testid="select-input-label">Filtrar por gênero</label>
          <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchBar;
