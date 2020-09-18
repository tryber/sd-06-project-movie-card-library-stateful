import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <p>Search Bar</p>
        <form action="" data-testid="search-bar-form">
          <label htmlFor="" data-testid="text-input-label">Inclui o texto</label>
          <input type="text" name="" id="" data-testid="text-input"/>
        </form>
      </div>
    )
  }

}

export default SearchBar;