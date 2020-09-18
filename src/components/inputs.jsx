import React, { Component } from 'react';

class Inputs extends Component {
  render() {
    const {
      value, title, change, text
    } = this.props;

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

export default Inputs;
