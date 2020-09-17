import React from 'react';
import PropTypes from 'prop-types';

class AddInpNum extends React.Component {
  render() {
    const { label, value, id, callback } = this.props;
    return (
      <label data-testid={`${id}-input-label`} htmlFor={id}>{label}
        <input type="number" id={id} value={value} data-testid={`${id}-input`} onChange={callback} />
      </label>
    );
  }
}

AddInpNum.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default AddInpNum;
