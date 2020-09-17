import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="incluiOTexto" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="incluiOTexto" type="text" value={searchText} onChange={onSearchTextChange}
              data-testid="text-input"
            />
          </label>
          <label htmlFor="mostraFavoritos" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="mostraFavoritos" type="checkbox" checked={bookmarkedOnly}
              onChange={onBookmarkedChange} data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="filtrarGenero" data-testid="select-input-label">
            Filtrar por gênero
            <select
              id="filtrarGenero"value={selectedGenre} onChange={onSelectedGenreChange}
              data-testid="select-input"
            >
              <option value={''} data-testid="select-option">Todos</option>
              <option value={'action'} data-testid="select-option">Ação</option>
              <option value={'comedy'} data-testid="select-option">Comédia</option>
              <option value={'thriller'} data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
