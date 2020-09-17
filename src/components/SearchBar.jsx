import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { 
      searchText, onSearchTextChange, 
      bookmarkedOnly, onBookmarkedChange,
       selectedGenre, onSelectedGenreChange 
      } = this.props.search;
    return (
      <div />
    );
  }
}

export default SearchBar;

SearchBar.defaultProps = { search: {} };
SearchBar.propTypes = {
  search: PropTypes.objectOf({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.callback,
    bookmarkedOnly: PropTypes.boolean,
    onBookmarkedChange: PropTypes.callback,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.callback,
  }),
};
