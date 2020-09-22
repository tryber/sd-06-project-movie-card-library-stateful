import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Selected extends Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <fieldset>
        <label data-testid="select-input-label" htmlFor="select-input" >Filtrar por gênero</label>
        <select
          data-testid="select-input" name="selectedGenre"
          value={selectedGenre} onChange={onSelectedGenreChange}
        >
          <option data-testid="select-option" value="" >Todos</option>
          <option data-testid="select-option" value="action" >Ação</option>
          <option data-testid="select-option" value="comedy" >Comédia</option>
          <option data-testid="select-option" value="thriller" >Suspense</option>
        </select>
      </fieldset>
    );
  }
}

Selected.propTypes = {
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

Selected.defaultProps = {
  selectedGenre: '',
  onSelectedGenreChange: '',
};

export default Selected;
