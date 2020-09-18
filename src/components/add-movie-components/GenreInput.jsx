import React from 'react';
import PropTypes from 'prop-types';

class GenreInput extends React.Component {
  render() {
    const { details } = this.props;
    const
      { labelName, inputName, labelTestId, inputTestId, value, inputId, handleChange } = details;

    return (
      <label
        data-testid={labelTestId}
        htmlFor={inputId}
      >
        {labelName}
        <select
          name={inputName}
          id={inputId}
          data-testid={inputTestId}
          value={value}
          onChange={handleChange}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreInput.propTypes = {
  labelName: PropTypes.string,
  value: PropTypes.string,
  labelTestId: PropTypes.string,
  inputTestId: PropTypes.string,
  inputId: PropTypes.string,
  inputName: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default GenreInput;
