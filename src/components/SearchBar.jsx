// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form className="form" data-testid="search-bar-form">
        <input type="text" />
      </form>
    );
  }
}
export default SearchBar;
