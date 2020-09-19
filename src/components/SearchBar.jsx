import React from 'react';
import PropTypes from 'prop-types';
import SelectSB from './SelectSB';
import CheckBoxSB from './CheckBoxSB';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <div>
            <label htmlFor="input-text" data-testid="text-input-label">Inclui o texto:</label>
            <input
              type="text" data-testid="text-input" name="searchText"
              value={searchText} onChange={onSearchTextChange}
            />
          </div>
          <CheckBoxSB checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          <SelectSB value={selectedGenre} onChange={onSelectedGenreChange} />
        </form>
      </div>
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
