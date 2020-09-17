import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form" action="GET">
        <label data-testid="text-input-label" htmlFor="text-input">Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            name="text-input"
            id="text-input"
            onChange={this.props.onSearchTextChange}
            value={this.props.searchText}
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          <input
          type="checkbox"
          name="checkbox-input"
          id="checkbox-input"
          onChange={this.props.onBookmarkedChange}
          checked={this.props.bookmarkedOnly}
          />
        </label>
      </form>
    )
  }
}

export default SearchBar;