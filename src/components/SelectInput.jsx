import React, { Component } from 'react';

class SelectInput extends Component {
  render() {
    const { id, name, onChange, value, labelText, optionId } = this.props;

    let allOption = undefined;
    if (id === "select-input") {
      allOption = <option value="" data-testid="select-option">Todos</option>;
    }
    
    return (
      <label htmlFor={id} data-testid={`${id}-label`}>
          {labelText}
          <select
            name={name}
            id={id}
            data-testid={id}
            onChange={onChange}
            value={value}
            selected={value}
          >
            {(allOption) ? allOption : ''}
            <option value="action" data-testid={optionId}>Ação</option>
            <option value="comedy" data-testid={optionId}>Comédia</option>
            <option value="thriller" data-testid={optionId}>Suspense</option>
          </select>
        </label>
    );
  }
}

export default SelectInput;
