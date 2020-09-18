import React, { Component } from 'react';

class Selects extends Component {
  render() {
    const {
      labTitle, selectName, selectValue, optValue, optTitle, change,
    } = this.props;

    return (
      <fieldset>
        <label
          data-testid="genre-input-label" htmlFor="genre-input"
        >
          {labTitle}
        </label>
        <select
          data-testid="genre-input" name={selectName} value={selectValue} onChange={change}
        >
          <option data-testid="genre-option" value={optValue[0]} >{optTitle[0]}</option>
          <option data-testid="genre-option" value={optValue[1]} >{optTitle[1]}</option>
          <option data-testid="genre-option" value={optValue[2]} >{optTitle[2]}</option>
        </select>
      </fieldset>
    )
  }
}

export default Selects;
