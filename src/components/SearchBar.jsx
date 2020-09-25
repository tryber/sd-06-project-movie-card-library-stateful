
import React from 'react';
import PropTypes from 'prop-types';
// import MovieCard from './MovieCard';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="text-input-label" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            value={this.props.searchText}
            onChange={this.props.onSearchTextChange}
            type="text"
          />
        </label>
        <form data-testid="search-bar-form">
          <label
            data-testid="checkbox-input-label"
            htmlFor="checkbox-input-label"
          >
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              type="checkbox"
              checked={this.props.bookmarkedOnly}
              onChange={this.props.onBookmarkedChange}
            />
          </label>
          <label
            data-testid="select-input-label"
            htmlFor="select-input-label"
          >
            {' '}
            Filtrar por gênero
            <select
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
