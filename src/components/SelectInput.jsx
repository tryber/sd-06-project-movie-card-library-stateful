import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { type, label, name, value, handle, inputId, labelId, options } = this.props.objProps;

    return (
      <div>
        <label htmlFor={name} data-testid={labelId} >{label}</label>
        <select name={name} value={value} onChange={handle} data-testid={inputId}>
          {options.map((option) => <option key={option.value} data-testid={`${type}-option`} value={option.value}>{option.label}</option>)}
        </select>
      </div>
    );
  }
}

export default SelectInput;

SelectInput.defaultProps = {
  objProps: {
    label: '',
    name: '',
    value: {},
    handle: undefined,
    inputId: '',
    options: [],
    labelId: '',
  },
};

SelectInput.propTypes = {
  objProps: PropTypes.shape(
    PropTypes.string,
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
    PropTypes.func,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.string,
  ),
};
