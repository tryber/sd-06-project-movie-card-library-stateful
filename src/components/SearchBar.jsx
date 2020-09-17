import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="searchText">
            <input name="searchText" type="text" />
          </label>
          <label htmlFor="bookmarkedOnly">
            <input name="bookmarkedOnly" type="checkbox" />
          </label>
          <label htmlFor="selectedGenre">
            Escolha:
            <select name="selectedGenre">
              <option value="test">teste</option>
            </select>
          </label>

        </form>
      </div>
    );
  }
}

export default SearchBar;
