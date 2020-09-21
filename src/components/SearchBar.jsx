import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {

  renderSearch() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <input
        type="text" value={searchText} onChange={onSearchTextChange}
        data-testid="text-input" id="text-input"
      />
    );
  }
  renderInputFavourite() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <input
        type="checkbox" data-testid="checkbox-input" checked={bookmarkedOnly}
        onChange={onBookmarkedChange} id="checkbox-input"
      />
    );
  }
  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <select
        value={selectedGenre} onChange={onSelectedGenreChange}
        data-testid="select-input" id="select-input"
      >
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    );
  }
  render() {
    return (
      <form data-testid="search-bar-form">

        <label data-testid="text-input-label" htmlFor="text-input">Inclui o texto:</label>
        {this.renderSearch()}

        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          </label>
        {this.renderInputFavourite()}

        <label data-testid="select-input-label" htmlFor="select-input">Filtrar por gênero</label>
        {this.renderSelect()}

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

