import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    const { value, title, change, text } = this.props;

    return (
      <fieldset>
        <label
          data-testid={`${title}-input-label`} htmlFor={`${title}-input`} >{text}
        </label>
        <input
          data-testid={`${title}-input`} name={title} value={value} onChange={change}
        />
      </fieldset>
    );
  }
}

Inputs.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  change: PropTypes.func,
};

Inputs.defaultProps = {
  value: '',
  title: '',
  text: '',
  change: '',
};

export default Inputs;
