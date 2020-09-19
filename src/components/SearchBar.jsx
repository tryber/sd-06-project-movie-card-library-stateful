import React from 'react';

class SearchBar extends React.Component {
  render() {

    const {onSearchTextChange, searchText, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.props;

    return (
      <form data-testid="search-bar-form">
        <div>
        <label data-testid="text-input-label">Inclui o texto:</label>
        <input data-testid="text-input" onChange={onSearchTextChange} value={searchText} />
        </div>

        <div>
        <label data-testid="checkbox-input-label">Mostrar somente favoritos</label> 
        <input type="checkbox" data-testid="checkbox-input" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </div>

        <div>
          <label data-testid="select-input-label">Filtrar por gênero</label>
          <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </div>
      </form>
    );
  }
}

export default SearchBar;
