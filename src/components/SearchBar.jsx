import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText,
        onSearchTextChange,
        bookmarkedOnly,
        onBookmarkedChange,
        selectedGenre,
        onSelectedGenreChange,
      } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">Inclui o texto:</label>
        <input type="text" value={this.props.searchText} onChange={this.props.onSearchTextChange} data-testid="text-input"/>
        <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
        <input type="checkbox" checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange} data-testid="checkbox-input"></input>
        <label data-testid="select-input-label">Filtrar por gênero</label>
        <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange} data-testid="select-input">
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
