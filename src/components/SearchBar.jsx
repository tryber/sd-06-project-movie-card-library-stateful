import React from 'react';

const inputSearch = {
  onChange: 'onSearchTextChange',
  name: 'searchtext',
  value: 'searchText',
};

class SearchBar extends React.Component {

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange, } = this.props;

    return (
      <div className="movie-card-header">
        <form id="search-bar-form" data-testid="text-input-label">
          <label htmlFor="text-input-label">
            Inclui o texto:
            <input type="text" {...inputSearch} data-testid="text-input" />
          </label>
          <label htmlFor="" data-testid="checkbox-input-label">
            <input type="checkbox" checked="bookmarkedOnly" onChange="onBookmarkedChange" data-testid="checkbox-input" />
          </label>
          <label data-testid="select-input-label">
            <select value="selectedGenre">
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;

// data-testid="add-movie-form"

