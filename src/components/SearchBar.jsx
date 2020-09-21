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
      // selectedGenre: '',
      // onSelectedGenreChange: '',
    };
  }

  render() {
    return (
      <form
        data-testid="search-bar-form"
      >
        <label 
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            value={this.state.searchText}
            onChange={this.state.onSearchTextChange}
          />
        </label>
        <br />
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            checked={this.state.bookmarkedOnly}
            onChange={this.state.onBookmarkedChange}
          />
        </label>
      </form>
    );
  }
}
export default SearchBar;
