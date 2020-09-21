import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor() {
    super();
    this.renderSelection = this.renderSelection.bind(this);
    this.renderCheckbox = this.renderCheckbox.bind(this);
  }

  renderCheckbox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="label-checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          id="label-checkbox"
          type="checkbox"
          checked={bookmarkedOnly}
          name="bookmarkedOnly"
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  renderSelection() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="label-select" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="label-select"
          value={selectedGenre}
          name="selectedGenre"
          onChange={onSelectedGenreChange}
          data-testid="select-input"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form action="" data-testid="search-bar-form">
        <label htmlFor="label-input-texto" data-testid="text-input-label">
         Inclui o texto:
         <input
           id="label-input-texto"
           type="text"
           value={searchText}
           name="searchText"
           onChange={onSearchTextChange}
           data-testid="text-input"
         />
        </label>
        {this.renderCheckbox()}
        {this.renderSelection()}
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
