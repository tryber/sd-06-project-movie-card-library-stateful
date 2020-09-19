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
    const textInput = { type: 'text', value: searchText, onChange: 'onSearchTextChange' };
    const checkboxInput = {
      type: 'checkbox',
      value: 'bookmarkedOnly',
      onChange: onBookmarkedChange,
      checked: bookmarkedOnly,
    };
    const selectInput = {
      value: 'selectedGenre',
      onChange: 'onSelectedGenreChange'
    };
    return (
      <section>
        <form data-testid="search-bar-form">
          <input type="text" />
          <label htmlFor="text-input" data-testid="text-input-label" > Inclui o Texto </label>
          <input id="text-input" data-testid="text-input" {...textInput} />
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label" >
            Mostrar somente favoritos
          </label>
          <input id="checkbox-input" data-testid="checkbox-input" {...checkboxInput} />
          <label htmlFor="select-input" data-testid="select-input-label" > Filtrar por gênero </label>
          <select id="select-input" data-testid="select-input" {...selectInput}>
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
