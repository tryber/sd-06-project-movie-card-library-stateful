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
        <label data-testid="text-input-label">Inclui o texto:
          <input type="text" />
        </label>
      </form>
    );
  }
}
export default SearchBar;
