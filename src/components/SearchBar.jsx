import { func } from 'prop-types';
import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super()
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      onBookmarkedChange: func,
      onSelectedGenreChange: func,
      onSearchTextChange: func,
    }
  }
  }

  render() {
    return (
      <form data-tested="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
         Inclui o texto:
          <input
            type="textarea"
            name="text-input"
            data-testid="text-input"
            checkted={this.searchText}
            onChange={this.onSearchTextChange}
          />
        </label>
        <br />
        <label htmlFor="text-input" data-testid="checkbox-input-label">
         Mostrar somente favoritos
          <input
            type="text"
            name="text-check"
            data-testid="checkbox-input"
            checked={this.bookmarkedOnly}
            onChange={this.onBookmarkedChange}
          />
        </label>
        <br />
        <label htmlFor="text-input" data-testid="select-input-label">
        F iltrar por gênero
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
