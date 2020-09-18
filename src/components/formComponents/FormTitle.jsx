import React, { Component } from 'react';

class FormTitle extends Component {
  render() {
    const { title, callback } = this.props;
    return (
      <label data-testid="title-input-label">
        Título
        <input type="text" value={title} name="title" data-testid="title-input" onChange={callback}/>
      </label>
    )
  }
}

export default FormTitle;