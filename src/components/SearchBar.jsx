import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <div>
        <p>Search Bar</p>
        <form action="" data-testid="search-bar-form">
          <label for="text-input" htmlFor="" data-testid="text-input-label">Inclui o texto</label>
          <input
            type="text"
            name=""
            id="text-input"
            data-testid="text-input"
            value={searchText}
            onChange={onSearchTextChange}
          />
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input type="checkbox" name="" id="checkbox-input" data-testid="checkbox-input" />
        </form>
      </div>
    )
  }
}

export default SearchBar;