import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <div>
        <p>Search Bar</p>
        <form action="" data-testid="search-bar-form">
          <label htmlFor="" data-testid="text-input-label">Inclui o texto</label>
          <input
            type="text"
            name=""
            id=""
            data-testid="text-input"
            value={searchText}
            onChange={onSearchTextChange}
          />
          <input type="checkbox" name="" id="" data-testid="checkbox-input" />
        </form>
      </div>
    )
  }
}

export default SearchBar;