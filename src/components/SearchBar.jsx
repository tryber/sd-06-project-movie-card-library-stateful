import React from 'react';
import PropType from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <form data-testid="search-bar-form" className="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input type="text" value={searchText}
          onChange={this.props.onSearchTextChange} data-testid="text-input" />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos:
          <input type="checkbox" className="text-input"
          onChange={this.props.onBookmarkedChange} data-testid="checkbox-input" value={bookmarkedOnly} checked="bookmarkedOnly"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero:
          <select
          data-testid="select-input" onChange={this.props.onSelectedGenreChange} value={selectedGenre}
          >
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

SearchBar.propType = {
  searchText: PropType.string.isRequired,
  bookmarkedOnly: PropType.bool.isRequired,
  selectedGenre: PropType.string.isRequired,
  onSearchTextChange: PropType.func.isRequired,
  onBookmarkedChange: PropType.func.isRequired,
  onSelectedGenreChange: PropType.func.isRequired,
}.isRequired;

export default SearchBar;
