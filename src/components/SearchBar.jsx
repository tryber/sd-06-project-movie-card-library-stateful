// implement SearchBar component here
import React, { Component } from 'react';

const inputText = {
  type: 'text',
  value: 'searchText',
  onChange: 'onSearchChange',
};

const inputCheckBox = {
  type: 'checkbox',
  checked: 'bookMarkedOnly',
  onChange: 'onBookMarkedChange',
};

const inputSelect = {
  type: 'select',
  value: '',
  onChange: 'onSelectedGenreChange',
};
class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <section className="form" data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="text-input">
            Inclui o texto:
          </label>
          <input data-testid="text-input" {...inputText} />
          <label data-testid="checkbox-input-label" htmlFor="check-input">
            Mostrar somente favoritos
          </label>
          <input data-testid="checkbox-input" {...inputCheckBox} />
          <label data-testid="select-input-label" htmlFor="select-input">
            Filtrar por Gênero
          </label>
          <select data-testid="select-input" {...inputSelect}>
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </section>
      </div>
    );
  }
}

export default SearchBar;
