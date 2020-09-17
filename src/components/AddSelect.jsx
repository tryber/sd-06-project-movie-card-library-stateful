import React from 'react';
import PropTypes from 'prop-types';

class AddSelect extends React.Component {
  render() {
    const { label, value, id, testid, callback, optionId, options } = this.props;
    return (
      <label data-testid={`${testid}-label`} htmlFor={id}>
        {label}
        <select id={id} value={value} onChange={callback} data-testid={testid}>
          {options.map((option) => (
            <option key={option[0]} data-testid={optionId} value={option[0]}>{option[1]}</option>
          ))}
        </select>
      </label>
    );
  }
}

AddSelect.propTypes = {
  id: PropTypes.string.isRequired,
  optionId: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.array).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  label: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default AddSelect;
