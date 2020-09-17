import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText } = this.props;
    const { onSearchTextChange } = this.props;
    const { bookmarkedOnly } = this.props;
    const { onBookmarkedChange } = this.props;
    const { selectedGenre } = this.props;
    const { onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">Inclui o texto:
          <input
              data-testid="text-input"
              type="text"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>
          <label data-testid="checkbox-input-label">Mostrar somente favoritos
          <input
              data-testid="checkbox-input"
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          </label>
          <label data-testid="select-input-label">Filtrar por gênero
          <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange} />
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </label>
        </form>
      </div>
    )
  }
}

export default SearchBar;