import React from 'react';
import PropTypes from 'prop-types';

class SelectAM extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="select-id" data-testid="genre-input-label">
          Gênero
          <select
            id="select-id" name="genre" data-testid="genre-input" value={value}
            onChange={handleChange}
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

SelectAM.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectAM;
