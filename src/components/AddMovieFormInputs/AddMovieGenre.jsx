import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovieGenre extends Component {
  render() {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          type="checkbox"
          name="genre"
          id="genre"
          data-testid="genre-input"
          // onChange=""
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default AddMovieGenre;
