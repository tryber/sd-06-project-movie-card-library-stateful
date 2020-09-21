// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      onSearchTextChange: '',
      bookmarkedOnly: false,
      onBookmarkedChange: '',
      selectedGenre: '',
      onSelectedGenreChange: '',
    };
  }
  render() {
    return (
      <form className="form" data-testid="search-bar-form">
        <input type="text" />
      </form>
    );
  }
}
export default SearchBar;
