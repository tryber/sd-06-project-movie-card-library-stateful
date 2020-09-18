import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.selectRender = this.selectRender.bind(this);
  }

  selectRender() {
    const { onSelectedGenreChange, selectedGenre } = this.props;
    return (
      <select
        data-testid="select-input" name="select-input" id="select-input"
        value={selectedGenre} onChange={onSelectedGenreChange}
      >
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    );
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    const { selectRender } = this;
    return (
      <form data-testid="search-bar-form" action="GET">
        <label data-testid="text-input-label" htmlFor="text-input">Inclui o texto:</label>
        <input
          data-testid="text-input" type="text" name="text-input" id="text-input"
          onChange={onSearchTextChange} value={searchText}
        />
        <label
          data-testid="checkbox-input-label"
          htmlFor="checkbox-input"
        >Mostrar somente favoritos</label>
        <input
          data-testid="checkbox-input" type="checkbox" name="checkbox-input" id="checkbox-input"
          onChange={onBookmarkedChange} checked={bookmarkedOnly}
        />
        <label data-testid="select-input-label" htmlFor="select-input">Filtrar por gênero</label>
        {selectRender()}
      </form>
    );
  }
}

SearchBar.PropTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
}

export default SearchBar;
