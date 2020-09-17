// implement SearchBar component here
import PropTypes from 'prop-types';
import React, { Component, useCallback } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
    <form data-testid="search-bar-form">

    </form>
    );
  }
}

SearchBar.defaultProps = {
  searchText: 'searchText',
  onSearchTextChange: useCallback,
  bookmarkedOnly: true,
  onBookmarkedChange: useCallback,
  selectedGenre: 'selectedGenre',
  onSelectedGenreChange: useCallback,
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;