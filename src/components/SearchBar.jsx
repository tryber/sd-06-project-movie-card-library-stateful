import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
    //   bookmarkedOnly,
    //   onBookmarkedChange,
    //   selectedGenre,
    } = this.props;
    return (
      <form data-testid="search-bar-form" htmlFor="text-input">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
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
};

export default SearchBar;
