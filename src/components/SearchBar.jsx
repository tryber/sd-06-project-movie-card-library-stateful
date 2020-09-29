import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(){
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props; 
  }

  render() {
    return (
      <form data-testid="search-bar-form">

        <label
          htmlFor="text-input"
          data-testid="text-input-label"
        >Inclui o texto:</label>
        <input
          id="text-input"
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
          data-testid="text-input"
        />

        <label
          htmlFor="input-checkbox"
          data-testid="checkbox-input-label"
        >Mostrar somente favoritos</label>
        <input
          type="checkbox"
          checked={bookmarkedOnly}
          onchange={onBookmarkedChange}
          data-testid="checkbox-input"
        />
        
        <label
          htmlFor="input-select"
          data-testid="select-input-label"
        >Filtrar por gẽnero</label>
        <select
          value="selectedGenre"
          onChange={onSelectedGenreChange}
          data-testid="select-input"
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          </select>
      </form>
    )
  }
}


SearchBar.propTypes = {
  searchText: PropTypes.string
}

export default SearchBar;