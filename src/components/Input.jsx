import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { checked, id, name, onChange, type, value, labelText } = this.props;

    return (
      <label htmlFor={id} data-testid={`${id}-label`}>
        {labelText}
        <input
          checked={checked}
          data-testid={id}
          id={id}
          name={name}
          onChange={onChange}
          type={type}
          value={value}
        />
      </label>
    );
  }
}

export default Input;
