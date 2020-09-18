import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputsSearchBar/InputText';
import InputCheckbox from './InputsSearchBar/InputCheckbox';
import InputSelect from './InputsSearchBar/InputSelect';

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
      <form data-testid="search-bar-form" action="">
        <InputText searchText={searchText} onSearchTextChange={onSearchTextChange} />

        <br />

        <InputCheckbox bookmarkedOnly={bookmarkedOnly} onBookmarkedChange={onBookmarkedChange} />

        <br />

        <InputSelect selectedGenre={selectedGenre} onSelectedGenreChange={onSelectedGenreChange} />

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
