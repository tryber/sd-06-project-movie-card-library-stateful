import React from 'react';

class SearchBar extends React.Component {
  render () {
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">Inclui o texto:</label>
        <input type="text" value={this.props.searchText} onChange={this.props.onSearchTextChange} data-testid="text-input" />

        <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
        <input type="checkbox" checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange} data-testid="checkbox-input"></input>
      </form>
    )
  }
}

export default SearchBar;