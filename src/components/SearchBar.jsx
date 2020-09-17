import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <div>
            <label htmlFor="search-text" data-testid="text-input-label">Inclui o texto:</label>
            <input type="text" id="search-text" data-testid="text-input" onChange={this.props.onSearchTextChange} value={this.props.searchText}/>
          </div>

        </form>
      </div>
    );
  }
}

export default SearchBar;
