import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      onSelectedGenreChange,
      selectedGenre 
    } = this.props;
    return (
      <form data-testid="search-bar-form" action="GET">
        <label data-testid="text-input-label" htmlFor="text-input">Inclui o texto:
          <input
          data-testid="text-input" type="text" name="text-input" id="text-input"
          onChange={onSearchTextChange} value={searchText}
          />
        </label>
        <label data-testid="checkbox-input-label"
        htmlFor="checkbox-input">Mostrar somente favoritos
          <input
          data-testid="checkbox-input" type="checkbox" name="checkbox-input" id="checkbox-input"
          onChange={onBookmarkedChange} checked={bookmarkedOnly} />
        </label>
        <label data-testid="select-input-label" htmlFor="">Filtrar por gênero
          <select data-testid="select-input" name="select-input" id="select-input"
          value={selectedGenre} onChange={onSelectedGenreChange}>
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