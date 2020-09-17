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
        <label data-testid="text-input-label">
          Search:
          <input
            data-testid="text-input"
            type="text"
            name="serachText"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        <input type="submit" value="Submit" /> <br />
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="Favorits"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label> <br />
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
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
