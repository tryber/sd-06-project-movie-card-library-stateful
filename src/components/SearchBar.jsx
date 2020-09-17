import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          <input
            data-testid="text-input"
            onChange={onSearchTextChange}
            type="text"
            value={searchText}
          />
        </label>
      </form>
    )
  }
}

export default SearchBar;
