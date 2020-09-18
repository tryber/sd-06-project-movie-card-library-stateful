import PropTypes from 'prop-types';
import React from 'react';

class AddMovieComponentPartThree extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="this-form" data-testid="genre-input-label">
          Gênero
          <select
            value={value}
            data-testid="genre-input"
            onChange={handleChange}
            name="genre"
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

AddMovieComponentPartThree.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};


export default AddMovieComponentPartThree;
