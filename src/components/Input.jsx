import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { labelText, type, name, value, checked, handle, inputId, labelId } = this.props;

    return (
      <div>
        <label htmlFor={name} data-testid={labelId} >{labelText}</label>
        <input type={type} name={name} value={value} onChange={handle} data-testid={inputId} checked={checked} />
      </div>
    );
  }
}

export default Input;

Input.defaultProps = {
  labelText: '',
  type: '',
  name: '',
  value: '',
  checked: false,
  handle: '',
  inputId: '',
  labelId: '',
  options: [],
};

Input.propTypes = {
  labelText: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  handle: PropTypes.func,
  inputId: PropTypes.string,
  labelId: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};
