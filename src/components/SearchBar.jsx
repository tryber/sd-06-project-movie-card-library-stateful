import react, { Component } from 'react';
import MovieList from './MovieList.jsx';

class SearchBar extends Component {
  render() {
    return(
      <forms data-testid="search-bar-form">
        <label data-testid="text-input-label">
        Inclui o texto:
          <input value={this.searchText} onChange={this.onSearchTextChange} data-testid="text-input" />
          </label>
        

      </forms>
    );
  }
}

SearchBar.propTypes = {
  searchText: propTypes.string,
  onSearchTextChange: propTypes.function,
  bookmarkedOnly: propTypes.bool,
  onBookmarkedChange: propTypes.function,
  selectedGenre: propTypes.function,
  onSelectedGenreChange: propTypes.function
}

export default SearchBar;
