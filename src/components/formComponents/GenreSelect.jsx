import React from 'react';

import props from './propsValidation';

class GenreSelect extends React.Component {
  render() {
    const { state, name, text, ctl, testDesc } = this.props;

    return (
      <div className="input-container">
        <label htmlFor={testDesc} data-testid={`${(testDesc || name)}-input-label`}>{text}</label>
        <select
          data-testid={`${(testDesc || name)}-input`}
          name={name}
          value={state}
          onChange={ctl}
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </div>
    );
  }
}

export default GenreSelect;

GenreSelect.propTypes = props;
