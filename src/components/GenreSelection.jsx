import React from 'react';
import PropTypes from 'prop-types';

class GenreSelection extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="genre-selection">
        Filtrar por gênero
        <select
          id="genre-selection"
          data-testid="select-input"
          value={value}
          onChange={onChange}
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreSelection.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

GenreSelection.defaultProps = {
  value: '',
  onChange: undefined,
};

export default GenreSelection;
