import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();
  }

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
      <div>
        <span>SearchBar Component</span>
        <form data-testid="search-bar-form">
          <label htmlFor="textField" data-testid="text-input-label">Inclui o texto:</label>
          <input
            name="textField" 
            id="textField"
            data-testid="text-input"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}/>
          <label htmlFor="checkboxField" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input
            name="checkboxField"
            id="checkboxField"
            data-testid="checkbox-input"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}/>
          <label htmlFor="selectField" data-testid="select-input-label">Filtrar por gênero</label>
          <select
            data-testid="select-input"
            name=""
            id="selectField"
            value={selectedGenre}
            onChange={onSelectedGenreChange}>
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
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
