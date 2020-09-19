import React, { Component } from 'react';

class SearchBar extends Component {

  rendererTextInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
      Inclui o texto
        <input
          data-testid="text-input"
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </label>
    );
  }

  rendererCheckboxInput() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
      Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </label>
    );
  }

  rendererSelectInput() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
      Filtrar por gênero
        <select
          data-testid="select-input"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
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
    return (
      <form data-testid="search-bar-form">
        {this.rendererTextInput()}
        {this.rendererCheckboxInput()}
        {this.rendererSelectInput()}
      </form>
    );
  }
}

export default SearchBar;
