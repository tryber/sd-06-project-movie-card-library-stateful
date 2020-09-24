// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class SearchBar extends Component {
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
      <form className="form-SearchBar" data-testid="search-bar-form">
        <label
          htmlFor="textSearch"
          data-testid="text-input-label"
        >
          Inclui o texto:
        </label>
        <input
          type="Text"
          id="textSearch"
          className="textSearch"
          name="searchText"
          onChange={onSearchTextChange}
          data-testid="text-input"
          value={searchText}
        />
        <label
          htmlFor="favShow"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
        </label>
        <input
          type="checkbox"
          id="favShow"
          name="bookmarkedOnly"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"
        />
        <label
          htmlFor="select"
          data-testid="select-input-label"
        >Filtrar por gênero
        </label>
        <select
          id="select"
          className="select"
          name="selectedGenre"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </form>
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
