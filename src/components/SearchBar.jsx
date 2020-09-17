import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {

  render() {
    // const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto
        <input
          type="text"
          data-testid="text-input"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
        Mostrar somente favoritos
        <input
          type="checkbox"
          data-testid="checkbox-input"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequire,
  onSearchTextChange: PropTypes.func.isRequire,
  bookmarkedOnly: PropTypes.bool.isRequire,
  onBookmarkedChange: PropTypes.func.isRequire,
  selectedGenre: PropTypes.string.isRequire,
  onSelectedGenreChange: PropTypes.func.isRequire,
}.isRequire;
export default SearchBar;
