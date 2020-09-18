import React, { Component } from 'react';

class SearchBar extends Component {
  renderInputText() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
      <input
        type="text" data-testid="text-input" value={searchText} onChange={onSearchTextChange}
      />
      </label>
    );
  }

  renderCheckBox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <label
        htmlFor="checkbox-input"
        data-testid="checkbox-input-label"
      >
        Mostrar somente favoritos
        <input
          type="checkbox"
          data-testid="checkbox-input"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </label>
    );
  }

  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label
        htmlFor="select-input" data-testid="select-input-label"
      >
        Filtrar por gênero
        <select
          data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}
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
      <div>
        <form data-testid="search-bar-form">
          {this.renderInputText()}
          {this.renderCheckBox()}
          {this.renderSelect()}
        </form>
      </div>
    );
  }

}

export default SearchBar;
