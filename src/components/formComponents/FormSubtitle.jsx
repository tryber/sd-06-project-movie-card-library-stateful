import React, { Component } from 'react';

class FormSubtitle extends Component {
  render() {
    const { subtitle, callback } = this.props;
    return (
      <label data-testid="subtitle-input-label">
        Subtítulo
        <input type="text" value={subtitle} name="subtitle" data-testid="subtitle-input" onChange={callback}/>
      </label>
    )
  }
}

export default FormSubtitle;