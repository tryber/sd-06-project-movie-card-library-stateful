import React, { Component } from 'react';

class FormAvaliacao extends Component {
  render() {
    const { rating, callback } = this.props;
    return (
      <label data-testid="rating-input-label" >
        Avaliação
        <input type="number" value={rating} name="rating" data-testid="rating-input" onChange={callback}/>
      </label>
    )
  }
}

export default FormAvaliacao;