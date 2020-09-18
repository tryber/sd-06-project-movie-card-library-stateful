import React from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">Inclui o texto:
        <input data-testid="text-input" onChange={onSearchTextChange}
            value={searchText} type="text" /></label>
        <label data-testid="checkbox-input-label">Mostrar somente favoritos<input type="checkbox" data-testid="checkbox-input"
          checked={bookmarkedOnly} onChange={onBookmarkedChange} /></label>
        <label data-testid="select-input-label">Filtrar por gênero<select value={selectedGenre}
          onChange={onSelectedGenreChange} data-testid="select-input">
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

// SearchBar.propTypes = {
// searchText: PropTypes.string.isRequerid,
// onSearchTextChange: PropTypes.callback.isRequerid,
// bookmarkedOnly: PropTypes.callback.isRequerid,
// onBookmarkedChange: PropTypes.callback.isRequerid,
// selectedGenre: PropTypes.string.isRequerid,
// onSelectedGenreChange: PropTypes.callback.isRequerid,
// }

export default SearchBar;
