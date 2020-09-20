import React from 'react';

import props from './propsValidation';

class TextArea extends React.Component {
  render() {
    const { state, name, text, changeFunc, testDesc } = this.props;

    return (
      <div className="textarea-container">
        <label
          htmlFor={testDesc}
          data-testid={`${(testDesc || name)}-input-label`}
        >
          {text}
        </label>

        <textarea
          data-testid={`${(testDesc || name)}-input`}
          name={name}
          value={state}
          onChange={changeFunc}
        />

      </div>
    );
  }
}

export default TextArea;

TextArea.propTypes = props;
