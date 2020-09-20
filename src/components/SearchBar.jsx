import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="text-input-label">
        <label htmlFor="testing-form"> Digite algo se você me vê:
          <input type="text" id="fname" name="testing-form" />
        </label>
      </form>
    );
  }
}

export default SearchBar;
