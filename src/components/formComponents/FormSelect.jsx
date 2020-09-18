import React, { Component } from 'react';

class FormSelect extends Component {
  render() {
    const { genre, callback } = this.props;
    return (
      <label data-testid="genre-input-label">
        Gênero
        <select value={genre} data-testid="genre-input" name="genre"onChange={callback}>
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    )
  }
}

export default FormSelect;