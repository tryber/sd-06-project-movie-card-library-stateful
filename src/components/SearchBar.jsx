import React from 'react';

class SearchBar extends React.Component {
  renderTextInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="searchText" data-testid="text-input-label">
      Inclui o texto:
      <input
        id="searchText"
        value={searchText}
        data-testid="text-input"
        onChange={onSearchTextChange}
        type="text"
      />
      </label>
    );
  }

  renderCheckBoxInput() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="forCheckbox" data-testid="checkbox-input-label">
      Mostrar somente favoritos
      <input
        id="forCheckbox"
        type="checkbox"
        name=""
        checked={bookmarkedOnly}
        onChange={onBookmarkedChange}
        data-testid="checkbox-input"
      />
      </label>
    );
  }

  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="label-option" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="label-option"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        <div>{this.renderTextInput()}</div>
        <div>{this.renderCheckBoxInput()}</div>
        <div>{this.renderSelect()}</div>
      </form>
    );
  }
}

export default SearchBar;
