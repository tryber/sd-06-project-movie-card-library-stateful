import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super()
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    }
  }
  };
  
  render() {
    return (
      <form data-tested="search-bar-form">
        Inclui
        <label htmlFor="text-input" data-testid="text-input-label">
          <input
            type="textarea"
            name="text-input"
            data-testid="text-input"
            checkted={this.searchText}
            onChange={this.onSearchTextChange}
          />
        </label>
        <br />
        inclui checkbox
        <label htmlFor="text-input" data-testid="checkbox-input-label">
          <input
            type="text"
            name="text-check"
            data-testid="checkbox-input"
            checked={this.bookmarkedOnly}
            onChange={this.onBookmarkedChange}
          />
        </label>
        <br />
        Genero
        <label htmlFor="text-input" data-testid="select-input-label">
          <select
            name="select-option"
            type="text"
            data-testid="select-option"
            checked={this.selectedGenre}
            onChange={this.onSelectedGenreChange}
          >
            <option value=" ">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <br />
      </form>
    );
  }

export default SearchBar;
