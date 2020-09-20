import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }
  render() {
    return (
      <form data-testid="text-input-label">
        <label for="testing-form">Digite algo se você me vê:</label>
        <input type="text" id="fname" name="testing-form"></input>
      </form>
    );
  }
}

export default SearchBar;
