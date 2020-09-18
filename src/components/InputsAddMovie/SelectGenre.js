import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends Component {
  render() {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          id="genre"
          name="genre"
          value={this.props.genre}
          onChange={this.props.handleInputs}
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  handleInputs: PropTypes.func.isRequired,
};

export default SelectGenre;
