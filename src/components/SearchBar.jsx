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

  renderCheckBoxInput() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="forCheckbox" data-testid="checkbox-input-label">
      Mostrar somente favoritos
      <input
        id="forCheckbox"
        type="checkbox"
        name=""
        checked={bookmarkedOnly}
        onChange={onBookmarkedChange}
        data-testid="checkbox-input"
      />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        <div>{this.renderTextInput()}</div>
        <div>{this.renderCheckBoxInput()}</div>
      </form>
    );
  }
}

export default SearchBar;
