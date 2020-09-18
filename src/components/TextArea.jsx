import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { labelText, name, value, handle, inputId, labelId } = this.props;
    return (
      <div>
        <label htmlFor={name} data-testid={labelId} >{labelText}</label>
        <textarea name={name} value={value} onChange={handle} data-testid={inputId} />
      </div>
    );
  }
}

export default TextArea;

TextArea.defaultProps = {
  labelText: '',
  name: '',
  value: {},
  handle: undefined,
  inputId: '',
  labelId: '',
};

TextArea.propTypes = {
  labelText: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.objectOf(PropTypes.string),
  handle: PropTypes.func,
  inputId: PropTypes.string,
  labelId: PropTypes.string,
};
