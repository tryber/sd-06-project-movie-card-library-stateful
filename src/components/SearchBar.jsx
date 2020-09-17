import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">Inclui o texto:</label>
          <input data-testid="text-input" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
