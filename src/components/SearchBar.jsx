import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">Inclui o texto:</label>
          <input data-testid="text-input" value={searchText} onChange={onSearchTextChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
