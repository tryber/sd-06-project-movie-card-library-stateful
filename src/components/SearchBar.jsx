import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form" className="search-bar-form">
          <label data-testid="text-input-label" htmlFor="searchText">
            <p>Inclui o texto:</p>
            <input name="searchText" type="text" />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
            <input name="bookmarkedOnly" type="checkbox" />
            Mostrar somente favoritos
          </label>
          <label data-testid="select-input-label" htmlFor="selectedGenre">
            <p>Filtrar por gênero</p>
            <select data-testid="select-input" name="selectedGenre">
              <option data-testid="select-option" value="">Todos</option>
              {/* <option data-testid="select-option" value={action}>Ação</option>
              <option data-testid="select-option" value={comedy}>Comédia</option>
              <option data-testid="select-option" value={thriller}>Suspense</option> */}
            </select>
          </label>

        </form>
      </div>
    );
  }
}

export default SearchBar;
