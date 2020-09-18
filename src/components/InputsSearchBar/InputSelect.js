import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSelect extends Component {
  render() {
    return (
      <label htmlFor="selectInput" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="selectInput"
          value={this.props.selectedGenre}
          onChange={this.props.onSelectedGenreChange}
          data-testid="select-input"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  onSelectedGenreChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default InputSelect;
