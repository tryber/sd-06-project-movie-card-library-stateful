// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">Inclui o texto:</label>
          <input type="text" id="text-input" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
