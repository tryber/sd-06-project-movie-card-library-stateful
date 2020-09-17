import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="filter-text" data-testid="text-input-label">
          Inclui o texto:
          <input id="filter-text" type="text" data-testid="text-input" 
          value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="filter-check" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input id="filter-check" type="checkbox" data-testid="checkbox-input" 
          checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="filter-select" data-testid="select-input-label">
          Filtrar por gênero
          <select id="filter-select" data-testid="select-input" 
          value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
