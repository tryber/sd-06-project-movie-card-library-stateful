import React from 'react';

class SearchBar extends React.Component {
  
  render() {
    return(
      <div>
        <form data-testid="search-bar-form">
          <div>
          <label data-testid="text-input-label">
            Inclui o texto:
              <input
              type="text"
              data-testid="text-input"
              // value={this.searchText}
              // onChange={this.onSearchTextChange}
              />
          </label>
          </div>
          <div>
            <input
              data-testid="checkbox-input"
              type="checkbox"
              // checked={bookmarkedOnly}
              // onChange={onBookmarkedChange}
            />
          <label data-testid="checkbox-input-label">
            Mostrar somente favoritos
          </label>
          </div>
          <div>
          <label data-testid="select-input-label">
            Filtrar por gênero
            <select
            data-testid="select-input"
            // value={selectedGenre}
            // onChange={onSelectedGenreChange}
            >
              <option data-testid="select-option" selected value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;