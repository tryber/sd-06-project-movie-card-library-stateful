import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { details, value, handleChange } = this.props;
    const
      { labelName, inputName, labelTestId, inputTestId, inputId } = details;

    return (
      <label
        data-testid={labelTestId}
        htmlFor={inputId}
      >
        {labelName}
        <input
          type="text"
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

TextInput.propTypes = {
  labelName: PropTypes.string,
  value: PropTypes.string,
  labelTestId: PropTypes.string,
  inputTestId: PropTypes.string,
  inputId: PropTypes.string,
  inputName: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default TextInput;
