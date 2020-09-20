import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    const { lista, evento } = this.props;
    return(
      <label data-testid="select-input-label" htmlFor="select">
      Filtrar por gênero :
      <select value={lista} onChange={evento} data-testid="select-input">
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    </label>
    );
  }
}

export default SearchBox;
