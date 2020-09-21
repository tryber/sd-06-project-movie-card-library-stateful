import React from 'react';
import propTypes from 'prop-types';
import CheckboxInput from './CheckboxInput';
import SearchbarSelect from './SearchbarSelect';
import SearchbarText from './SearchbarText';

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
      <div>
        <form data-testid="search-bar-form">
          <SearchbarText searchText={searchText} onSearchTextChange={onSearchTextChange} />
          <CheckboxInput bookmarkedOnly={bookmarkedOnly} onBookmarkedChange={onBookmarkedChange} />
          <SearchbarSelect
            selectedGenre={selectedGenre}
            onSelectedGenreChange={onSelectedGenreChange}
          />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: propTypes.string.isRequired,
  onSearchTextChange: propTypes.func.isRequired,
  bookmarkedOnly: propTypes.bool.isRequired,
  onBookmarkedChange: propTypes.func.isRequired,
  selectedGenre: propTypes.string.isRequired,
  onSelectedGenreChange: propTypes.func.isRequired,
};

export default SearchBar;
