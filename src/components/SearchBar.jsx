// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form 
        data-testid="search-bar-form">

        <label data-testid="text-input-label" htmlFor="">
          Inclui o texto:
        </label>
        <input type="text" data-testid="text-input" />

        <label data-testid="checkbox-input-label" htmlFor="">
          Mostrar somente favoritos
        </label>
        <input type="checkbox" data-testid="checkbox-input" />

        <label data-testid="select-input-label" htmlFor="">Filtrar por gênero</label>
        <select>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        
      </form>    
    );
  }
}

export default SearchBar;
