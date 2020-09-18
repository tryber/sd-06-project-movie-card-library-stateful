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
    return (
      <section>
        <form data-testid="search-bar-form">
          <input type="text" />
          <label for="text-input" data-testid="text-input-label" > Inclui o Texto </label>
          <input id="text-input" type="text"
            value={searchText} onChange={onSearchTextChange} data-testid="text-input" />
          <label for="checkbox-input" data-testid="checkbox-input-label" >Mostrar somente favoritos
          </label>
          <input id="checkbox-input" type="checkbox"
            value={bookmarkedOnly} onChange={onBookmarkedChange} data-testid="checkbox-input"
            checked={bookmarkedOnly}
          />
          <label for="select-input" data-testid="select-input-label" > Filtrar por gênero </label>
          <select id="select-input" type="checkbox"
            value={selectedGenre} onChange={onSelectedGenreChange} data-testid="select-input"
            checked={bookmarkedOnly}
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
