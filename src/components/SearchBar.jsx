import React from 'react';
import PropTypes from 'prop-types';


class SearchBar extends React.Component {

  renderFilterByGender() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="genre">
        Filtrar por gênero
        <select value={selectedGenre} onChange={onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderFavorites() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="favorites">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </label>
    );
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;
    return (
      <form>
        <label data-testid="text-input-label" htmlFor="text">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        {this.renderFavorites()}
        {this.renderFilterByGender()}
      </form>
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
