import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelecionarMovie extends Component {
  render() {
    const { genero, acao } = this.props;
    return (
      <select
        className="tipoInput" data-testid="genre-input" name="genre"
        value={genero} onChange={acao}
      >
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    );
  }
}

SelecionarMovie.propTypes = { genero: PropTypes.string.isRequired};

export default SelecionarMovie;
