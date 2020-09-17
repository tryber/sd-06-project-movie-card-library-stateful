import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  renderSelect() {
    const {
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <select id="select" value={selectedGenre} onChange={onSelectedGenreChange} data-testid="select-input" >
        <option data-testid="select-option" value="">Todos</option>
        <option data-testid="select-option" value="action">Ação</option>
        <option data-testid="select-option" value="comedy">Comédia</option>
        <option data-testid="select-option" value="thriller">Suspense</option>
      </select>
    );
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input1" data-testid="text-input-label">
          Inclui o texto:
          <input id="input1"value={searchText} onChange={onSearchTextChange} data-testid="text-input" type="text" />
        </label>
        <label htmlFor="input2" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input id="input2" data-testid="checkbox-input-label" checked={bookmarkedOnly} onChange={onBookmarkedChange} type="checkbox" />
        </label>
        <label htmlFor="select" data-testid="select-input-label">Filtrar por gênero</label>
        {this.renderSelect()}
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
