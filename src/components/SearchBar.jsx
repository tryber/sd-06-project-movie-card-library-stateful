import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <div>
        <p>Search Bar</p>
        <form action="" data-testid="search-bar-form">
          <label for="text-input" htmlFor="" data-testid="text-input-label">Inclui o texto</label>
          <input
            type="text"
            name=""
            id="text-input"
            data-testid="text-input"
            value={searchText}
            onChange={onSearchTextChange}
          />
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
            <input
          type="checkbox"
          name="" id="checkbox-input" data-testid="checkbox-input" checked value={bookmarkedOnly} onChange={onBookmarkedChange} />

          <label for="gender" data-testid="select-input-label">Filtrar por gênero</label>
          <select name="gender" id="gender" form="genderform" data-testid="select-input" >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </form>
      </div>
    )
  }
}

export default SearchBar;