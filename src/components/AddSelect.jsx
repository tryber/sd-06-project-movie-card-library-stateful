import React from 'react';
import PropTypes from 'prop-types';

class AddSelect extends React.Component {
  render() {
    const { labelTestid, label, value, id, testid, callback, optionId, options } = this.props;
    return (
      <label data-testid={labelTestid} htmlFor={id}>
        {label}
        <select id={id} value={value} onChange={callback} data-testid={testid}>
          {options.map((option, index) => <option key={index} data-testid={optionId} value={option[0]}>{option[1]}</option> )}
        </select>
      </label>
    )
  }
}

AddSelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  labelTestid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default AddSelect;
