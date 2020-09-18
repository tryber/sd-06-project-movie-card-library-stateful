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
        <p>Search Bar</p>
        <form action="" data-testid="search-bar-form">

          <label
            for="text-input"
            htmlFor=""
            data-testid="text-input-label">Inclui o texto
          </label>

          <input
            type="text"
            name=""
            id="text-input"
            data-testid="text-input"
            value={searchText}
            onChange={onSearchTextChange}
          />

          <label
            htmlFor="checkbox-input"
            data-testid="checkbox-input-label">Mostrar somente favoritos
          </label>

          <input
            type="checkbox"
            name=""
            id="checkbox-input"
            data-testid="checkbox-input"
            checked value={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />

          <label for="gender" data-testid="select-input-label">Filtrar por gênero</label>
          <select name="gender" id="gender" form="" data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange} >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    )
  }
}

export default SearchBar;