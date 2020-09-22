import React from 'react';
import PropTypes from 'prop-types';


class SearchBar extends React.Component {

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
      <div className="movie-card-header">
        <form id="search-bar-form" data-testid="search-bar-form">
          <label
            htmlFor="text-input-label"
            data-testid="text-input-label"
          >
            Inclui o texto
            <input
              type="text"
              value={searchText}
              onChange={onSearchTextChange}
              data-testid="text-input"
            />
          </label>
          <label
            htmlFor="checkbox-input"
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          </label>
          <label htmlFor="select" data-testid="select-input-label">
            Filtrar por gênero
            <select
              onChange={onSelectedGenreChange}
              id="select" value={selectedGenre}
              data-testid="select-input"
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

function defProp() {
  return {
    onSearchTextChange: this.onSearchTextChange.bind(this),
    onBookmarkedChange: this.onBookmarkedChange.bind(this),
    onSelectedGenreChange: this.onSelectedGenreChange.bind(this),
  };
}

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: defProp,
  bookmarkedOnly: false,
  onBookmarkedChange: defProp,
  selectedGenre: '',
  onSelectedGenreChange: defProp,
};

export default SearchBar;
