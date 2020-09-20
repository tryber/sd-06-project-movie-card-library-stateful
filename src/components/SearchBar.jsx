import React, { Component } from 'react';
import propTypes from 'prop-types';

import '../App.css';

class SearchBar extends Component {

  render() {
    const { procurarTexto, eventoProcurarTexto, marcarFavorito, eventoMarcarFavorito,
      selecionarGenero, eventoSelecionarGenero } = this.props;
    return (
      <form className="SearchBar" data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="textinput">Inclui o texto :
          <input
            type="text" value={procurarTexto} onChange={eventoProcurarTexto}
            data-testid="text-input" id="textinput"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="fav">
          Mostrar somente favoritos :
          <input
            type="checkbox" checked={marcarFavorito} onChange={eventoMarcarFavorito}
            data-testid="checkbox-input" id="fav"
          />
        </label>

        <label data-testid="select-input-label" htmlFor="select">
          Filtrar por gênero :
          <select value={selecionarGenero} onChange={eventoSelecionarGenero} data-testid="select-input">
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  procurarTexto: propTypes.string.isRequired,
  eventoProcurarTexto: propTypes.func.isRequired,
  marcarFavorito: propTypes.bool.isRequired,
  eventoMarcarFavorito: propTypes.func.isRequired,
  selecionarGenero: propTypes.string.isRequired,
  eventoSelecionarGenero: propTypes.func.isRequired,
};

export default SearchBar;
