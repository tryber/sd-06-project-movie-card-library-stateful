import React, { Component } from 'react';

class FormSinopse extends Component {
  render() {
    const { storyline, callback } = this.props;
    return (
      <label data-testid="storyline-input-label">
        Sinopse
        <textarea value={storyline} name="storyline"data-testid="storyline-input" onChange={callback}/>
      </label>
    )
  }
}

export default FormSinopse;