import React from 'react';
import PropTypes from 'prop-types';

class AddInput extends React.Component {
  render() {
    const { label, value, id, inputType, testid, callback } = this.props;
    return (
      <label data-testid={testid + '-label'} htmlFor={id}>{label}
        <input type={inputType} id={id} value={value} data-testid={testid} onChange={callback} />
      </label>
    )
  }
}

AddInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  labelTestid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default AddInput;
