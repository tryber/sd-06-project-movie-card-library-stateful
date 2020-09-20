import React from 'react';

import props from './propsValidation';

class Input extends React.Component {
  render() {
    const {
      state,
      name, text, type,
      changeFunc, testDesc,
    } = this.props;

    return (
      <div className="input-container">
        <label
          htmlFor={testDesc}
          data-testid={`${(testDesc || name)}-input-label`}
        >
          {text}
        </label>

        <input
          data-testid={`${(testDesc || name)}-input`}
          name={name}
          value={state}
          onChange={changeFunc}
          type={type || 'text'}
        />

      </div>
    );
  }
}

export default Input;

Input.propTypes = props;
