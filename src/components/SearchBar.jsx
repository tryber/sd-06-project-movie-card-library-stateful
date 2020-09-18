// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
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
        </section>
      </div>
    );
  }
}

export default SearchBar;
