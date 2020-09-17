import React from 'react';
import PropTypes from 'prop-types';

class AddMovieInput extends React.Component {
  render() {
    const { labelTestid, label, value, id, inputType, testid, callback } = this.props;
    return (
      <label data-testid={labelTestid} htmlFor={id}>{label}
        <input type={inputType} id={id} value={value} data-testid={testid} onChange={callback} />
      </label>
    )
  }
}

AddMovieInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  lalbelTestid: PropTypes.string,
  label: PropTypes.string,
  inputType: PropTypes.string,
  testid: PropTypes.string,
  callback: PropTypes.func,
};

export default AddMovieInput;
