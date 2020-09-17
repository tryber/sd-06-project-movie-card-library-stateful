import React from 'react';
import PropTypes from 'prop-types';
import GenreSelection from './GenreSelection';
import FavoritesCheck from './FavoritesCheck';
import SearchText from './SearchText';

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
      <form data-testid="search-bar-form">
        <SearchText value={searchText} onChange={onSearchTextChange} />
        <FavoritesCheck checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        <GenreSelection value={selectedGenre} onChange={onSelectedGenreChange} />
      </form>
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

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: undefined,
  bookmarkedOnly: false,
  onBookmarkedChange: undefined,
  selectedGenre: '',
  onSelectedGenreChange: undefined,
};

export default SearchBar;
