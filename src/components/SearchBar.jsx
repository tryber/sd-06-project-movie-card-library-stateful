import React from 'react';

class SearchBar extends React.Component {
  renderTextInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="searchText" data-testid="text-input-label">
      Inclui o texto:
      <input
        id="searchText"
        value={searchText}
        data-testid="text-input"
        onChange={onSearchTextChange}
        type="text"
      />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        <div>{this.renderTextInput()}</div>
      </form>
    );
  }
}

export default SearchBar;
