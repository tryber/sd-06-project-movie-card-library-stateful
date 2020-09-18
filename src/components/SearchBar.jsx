import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      checkbox: false,
      selectGenre: ''
    }

  }

  onSearchTextChange() {
    
  }

  render() {
    return (
      <form data-testid='search-bar-form'>
         <div>
          <label data-testid='text-input-label'>Inclui o texto</label><br/>
            <input type="text" data-testid='text-input'/>
           <br />
          <label >
            <input type="checkbox"data-testid='checkbox-input'/>
            Mostrar somente os favoritos 
          </label><br/>
          <label data-testid='select-input-label'>Filtrar por gênero</label><br/>
            <select data-testId='select-input'>
              <option value="Todos">Todos</option>
            </select>
        </div>
      </form>
    );
  }
}

export default SearchBar;
