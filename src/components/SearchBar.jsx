import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBarTextFilter from './SearchBarTextFilter';
import SearchBarCheckBoxFilter from './SearchBarCheckBoxFilter';
import SearchBarSelectFilter from './SearchBarSelectGenreFilter';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form" className="search-bar-form">
        <SearchBarTextFilter
          searchText={searchText}
          onSearchTextChange={onSearchTextChange}
        />
        <SearchBarCheckBoxFilter
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={onBookmarkedChange}
        />
        <SearchBarSelectFilter
          selectedGenre={selectedGenre}
          onSelectedGenreChange={onSelectedGenreChange}
        />
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
