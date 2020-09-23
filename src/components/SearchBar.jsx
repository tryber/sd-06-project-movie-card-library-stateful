import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  createSelect() {
    return (
      <select
        htmlFor="label-select"
        data-testid="select-input"
        value={this.props.selectedGenre}
        onChange={this.props.onSelectedGenreChange}
      >
        <option data-testid="select-option" value="">Todos</option>
        <option data-testid="select-option" value="action">Ação</option>
        <option data-testid="select-option" value="comedy">Comédia</option>
        <option data-testid="select-option" value="thriller">Suspense</option>
      </select>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="inputText" data-testid="text-input-label">
            Inclui o texto
            <input
              id="inputText" data-testid="text-input" type="text"
              value={this.props.searchText} onChange={this.props.onSearchTextChange}
            />
          </label>
          <label htmlFor="inputCheckbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="inputCheckbox" type="checkbox" data-testid="checkbox-input"
              checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange}
            />
          </label>
          <label htmlFor="label-select" data-testid="select-input-label">
            Filtrar por gênero
            {this.createSelect()}
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
