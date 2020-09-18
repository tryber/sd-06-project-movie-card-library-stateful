import React from 'react';
import './App.css';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchText: '',
      onSearchTextChange: 'callback',
      bookmarkedOnly: false,
      onBookmarkedChange: 'callback',
      selectedGenre: '',
      onSelectedGenreChange: 'callback',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="movie-card-header">
        <form id="search-bar-form" data-testid="text-input-label">
          <label htmlFor="text-input-label">
            Inclui o texto:
            <input type="text" onChange="onSearchTextChange" name="searchtext" value="searchText" data-testid="text-input" />
          </label>
        </form>
      </div>
    );
  }

}

export default SearchBar;

// data-testid="add-movie-form"