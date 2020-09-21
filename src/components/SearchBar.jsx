import React from 'react'
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  handleSelect(){

  }
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Insira o texto
          <input 
            data-testid="text-input"
            name="searchText"
            onChange={onSearchTextChange}
            value={searchText}
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="bookmarkedOnly"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
      </form>
    );

  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default SearchBar;
