import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form" >
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto
          <input type="text" id="text-input" data-testid="text-input" value={searchText} onChange={onSearchTextChange} />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="fav-check">
          Mostrar somente favoritos
          <input type="checkbox" id="fav-check" data-testid="checkbox-input" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>

        <label data-testid="select-input-label" htmlFor="gender-sel">
          Filtrar por gênero
          <select id="gender-sel" data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange} >
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

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;