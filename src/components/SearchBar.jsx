import React from 'react';

class SearchBar extends React.Component {

  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto
        <input type="text" 
          data-testid="text-input"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange} />
        </label>
      </form>
    );
  }
}

export default SearchBar;
