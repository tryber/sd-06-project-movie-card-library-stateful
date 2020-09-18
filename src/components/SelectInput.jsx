import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { labelText, name, value, handle, inputId, labelId, options } = this.props;
    return (
      <div>
        <label htmlFor={name} data-testid={labelId} >{labelText}</label>
        <select name={name} value={value} onChange={handle} data-testid={inputId}>
          {options.map((option) => <option key={option.value} data-testid={`${name}-option`} value={option.value}>{option.label}</option>)}
        </select>
      </div>
    );
  }
}

export default SelectInput;

SelectInput.defaultProps = {
  labelText: '',
  name: '',
  value: {},
  handle: undefined,
  inputId: '',
  options: [],
  labelId: '',
};

SelectInput.propTypes = {
  labelText: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.objectOf(PropTypes.string),
  handle: PropTypes.func,
  inputId: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  labelId: PropTypes.string,
};
