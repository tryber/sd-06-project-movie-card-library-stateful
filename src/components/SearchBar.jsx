import React, { Component } from 'react';

class SearchBar extends Component {


  // searchText={props.searchText}
  // onSearchTextChange={props.onSearchTextChange}
  // bookmarkedOnly={props.bookmarkedOnly}
  // onBookmarkedChange={props.onBookmarkedChange}
  // selectedGenre={props.selectedGenre}
  // onSelectedGenreChange={props.onSelectedGenreChange}

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props

    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
            Inclui o texto
            <textarea data-testid="text-input" onChange={onSearchTextChange} value={searchText} />
          </label>
          <label data-testid="checkbox-input-label">
            Mostrar somente favoritos
          <input
              data-testid="checkbox-input"
              type="checkbox"
              onChange={onBookmarkedChange}
              checked={bookmarkedOnly}
            />
          </label>
          <label data-testid="select-input-label">
            Filtrar por gênero
            <select data-testid="select-input" onChange={onSelectedGenreChange} value={selectedGenre}>
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

export default SearchBar;
