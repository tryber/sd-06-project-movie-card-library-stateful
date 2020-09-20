import React from 'react';

import props from './propsValidation';

class GenreFilter extends React.Component {
  render() {
    const { state, changeFunc } = this.props;

    return (
      <div className="select-container">
        <select
          name="selectedGenre"
          id="genre"
          value={state}
          onChange={changeFunc}
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
        <label htmlFor="genre" data-testid="select-input-label">Filtrar por gênero</label>
      </div>
    );
  }
}

export default GenreFilter;

GenreFilter.propTypes = props;
