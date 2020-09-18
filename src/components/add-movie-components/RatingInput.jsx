import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
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
        <input
          type="number"
          name={inputName}
          id={inputId}
          data-testid={inputTestId}
          value={value}
          onChange={handleChange}
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  labelName: PropTypes.string,
  value: PropTypes.string,
  labelTestId: PropTypes.string,
  inputTestId: PropTypes.string,
  inputId: PropTypes.string,
  inputName: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default RatingInput;
