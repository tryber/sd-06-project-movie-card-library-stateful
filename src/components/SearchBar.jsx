import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { 
      searchText, 
      onSearchTextChange, 
      bookmarkedOnly, 
      onBookmarkedChange, 
      selectedGenre, 
      onSelectedGenreChange
    } = this.props;

    return (
        <form data-testid="search-bar-form" action="">
          <label data-testid="text-input-label">
            Inclui o texto:
            <input 
              data-testid="text-input" 
              onChange={onSearchTextChange} 
              value={searchText} 
              type="text"
            />
          </label>
          <br/>
          <label data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              checked={bookmarkedOnly}
              type="checkbox"
              onChange={onBookmarkedChange}
            />
          </label>
          <br/>
          <label data-testid="select-input-label">
            Filtrar por gênero
            <select  
              value={selectedGenre} 
              onChange={onSelectedGenreChange}
              data-testid="select-input"
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
    );
  }
}

export default SearchBar;
