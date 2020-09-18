import React from 'react';
import propTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="select" data-testid="genre-input-label">
          <p>Gênero</p>
          <select
            id="rating"
            data-testid="genre-input"
            name="genre"
            value={genre}
            nChange={handleChange}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

SubtitleInput.propTypes = { genre: propTypes.string.isRequired };
SubtitleInput.propTypes = { handleChange: propTypes.func.isRequired };

export default SubtitleInput;
