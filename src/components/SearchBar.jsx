import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input data-testid="text-input" onChange={onSearchTextChange} value={searchText} type="text"/>
        </label>
      </form>
    );
  }
}

export default SearchBar;
