import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form" className="search-bar-form">
          <label data-testid="text-input-label" htmlFor="searchText">
            <p>Inclui o texto:</p>
            <input name="searchText" type="text" onChange={onSearchTextChange} value={searchText} />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
            <input name="bookmarkedOnly" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
            Mostrar somente favoritos
          </label>
          <label data-testid="select-input-label" htmlFor="selectedGenre">
            <p>Filtrar por gênero</p>
            <select data-testid="select-input" name="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
              <option data-testid="select-option" value="">Todos</option>
              {/* <option data-testid="select-option" value={action}>Ação</option>
              <option data-testid="select-option" value={comedy}>Comédia</option>
              <option data-testid="select-option" value={thriller}>Suspense</option> */}
            </select>
          </label>

        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
