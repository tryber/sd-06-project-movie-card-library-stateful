import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { label, name, value, handle, inputId, labelId } = this.props.objProps;
    return (
      <div>
        <label htmlFor={name} data-testid={labelId} >{label}</label>
        <textarea name={name} value={value} onChange={handle} data-testid={inputId} />
      </div>
    );
  }
}

export default TextArea;

TextArea.defaultProps = {
  objProps: {
    label: '',
    name: '',
    value: {},
    handle: undefined,
    inputId: '',
    labelId: '',
  },
};

TextArea.propTypes = {
  objProps: PropTypes.shape(
    PropTypes.string,
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
    PropTypes.func,
    PropTypes.string,
    PropTypes.string,
  ),
};
