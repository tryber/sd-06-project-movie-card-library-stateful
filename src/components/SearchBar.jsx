import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="name" data-testid="text-input-label">Inclui o texto:
        </label>
        <input
          data-testid="text-input" type="text" name="name" onChange={onSearchTextChange}
          value={searchText}
        />
        <label htmlFor="name" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
        <input
          type="checkbox" data-testid="checkbox-input" name="name" checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          />
        <label htmlFor="name" data-testid="select-input-label">Filtrar por gênero</label>
        <select
          name="name" data-testid="select-input" value={selectedGenre}
          onChange={onSelectedGenreChange}
          >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequerid,
  onSearchTextChange: PropTypes.callback.isRequerid,
  bookmarkedOnly: PropTypes.callback.isRequerid,
  onBookmarkedChange: PropTypes.callback.isRequerid,
  selectedGenre: PropTypes.string.isRequerid,
  onSelectedGenreChange: PropTypes.callback.isRequerid,
}

export default SearchBar;
