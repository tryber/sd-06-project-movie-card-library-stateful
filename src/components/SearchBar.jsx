// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              id="text-input"
              data-testid="text-input"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
