import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form" action="GET">
        <label data-testid="text-input-label" htmlFor="text-input">Inclui o texto:
          <input data-testid="text-input" type="text" name="text-input" id="text-input"
            onChange={this.props.onSearchTextChange} value={this.props.searchText} />
        </label>
        <label data-testid="checkbox-input-label"
        htmlFor="checkbox-input">Mostrar somente favoritos
          <input type="checkbox" name="checkbox-input" id="checkbox-input"
          onChange={this.props.onBookmarkedChange} checked={this.props.bookmarkedOnly} />
        </label>
        <label data-testid="select-input-label" htmlFor="">Filtrar por gênero
          <select data-testid="select-input" name="select-input" id="select-input"
          value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    )
  }
}

export default SearchBar;