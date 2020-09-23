import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    // const { 
    //   searchText, onSearchTextChange,
    //   bookmarkedOnly, onBookmarkedChange,
    //   selectGenre, onSelectedGenreChange
    // } = this.props.search;

    return (
      <div />
    );
  }
}

SearchBar.defaultProps = { search: {} };
SearchBar.propTypes = {
  search: PropTypes.objectOf({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.callback,
    bookmarkedOnly: PropTypes.boolean,
    onBookmarkedChange: PropTypes.callback,
    selectGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.callback,
  }),
};

export default SearchBar;
