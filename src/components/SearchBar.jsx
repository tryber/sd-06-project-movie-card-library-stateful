import React from 'react';
import PropTypes from 'prop-types';

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
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">Inclui o texto</label>
          <input type="text" id="text-input" data-testid="text-input" value={searchText} onChange={onSearchTextChange}></input>

          <input type="checkbox" id="bookmark-checked" data-testid="checkbox-input" checked={bookmarkedOnly} onChange={onBookmarkedChange}></input>
          <label htmlFor="bookmark-checked" data-testid="checkbox-input-label" >Mostrar somente favoritos</label>

          <label htmlFor="movie-genre" data-testid="select-input-label">Filtrar por gênero</label>
          <select id="movie-genre" data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </form>
      </div>
    );
  };
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string;
  onSelectedGenreChange: PropTypes.func
}.isRequired

export default SearchBar;
