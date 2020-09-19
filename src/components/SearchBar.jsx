// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              id="text-input"
              data-testid="text-input"
              value={this.props.searchText}
              onChange={this.props.onSearchTextChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
