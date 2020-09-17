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
      <form>
        <label data-testid="text-input-label" htmlFor="text">
          Inclui o texto:
          <input data-testid="text-input" type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="favorites">
          Mostrar somente favoritos
          <input data-testid="checkbox-input" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="genre">
          Filtrar por gênero
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}


export default SearchBar;
