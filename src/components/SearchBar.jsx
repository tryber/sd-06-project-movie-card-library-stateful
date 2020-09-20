import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchTextInput" data-testid="text-input-label">Inclui o texto
          <input
            id="searchTextInput"
            data-testid="text-input"
            value={this.props.searchText}
            onChange={this.props.onSearchTextChange}
          />
        </label>
        <label htmlFor="checkboxInput" data-testid="checkbox-input-label">Mostrar somente favoritos
          <input
            id="checkboxInput"
            type="checkbox"
            data-testid="checkbox-input"
            checked={this.props.bookmarkedOnly}
            onChange={this.props.onBookmarkedChange}
          />
        </label>
        <label htmlFor="selectInput" data-testid="select-input-label">Filtrar por gênero
          <select
            id="selectInput"
            data-testid="select-input"
            value={this.props.selectedGenre}
            onChange={this.props.onSelectedGenreChange}
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

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.boolean.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
