import React from 'react';

class SearchBar extends React.Component {
  render() {

    const {onSearchTextChange, searchText} = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <div>
            <label htmlFor="search-text" data-testid="text-input-label">Inclui o texto:</label>
            <input type="text" id="search-text" data-testid="text-input" onChange={onSearchTextChange} value={searchText} />
          </div>

        </form>
      </div>
    );
  }
}

export default SearchBar;
