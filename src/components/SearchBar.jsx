// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
