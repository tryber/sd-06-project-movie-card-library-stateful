// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      SearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    const checkboxInput = {
      type: 'checkbox',
      value: 'bookmarkedOnly',
      onChange: onBookmarkedChange,
      checked: bookmarkedOnly,
    };
    const selectInput = {
      value: 'selectedGenre',
      onChange: 'onSelectedGenreChange',
    };
    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label" > Inclui o Texto </label>
          <input
            id="text-input"
            data-testid="text-input"
            name="searchText"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label" >
            Mostrar somente favoritos
          </label>
          <input
            id="checkbox-input"
            data-testid="checkbox-input"
            name="bookmarkedOnly"
            type="checkbox"
            value={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
          <label htmlFor="select-input" data-testid="select-input-label" > Filtrar por gênero </label>
          <select
            id="select-input"
            data-testid="select-input"
            name="selectedGenre"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option data-testid="select-option" value=""> Todos </option>
            <option data-testid="select-option" value="action"> Ação </option>
            <option data-testid="select-option" value="comedy"> Comédia </option>
            <option data-testid="select-option" value="thriller"> Suspense </option>
          </select>
        </form>
      </section>
    );
  }
}

export default SearchBar;
