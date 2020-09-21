import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormAvaliacao extends Component {
  render() {
    const { rating, callback } = this.props;
    return (
      <label htmlFor="label-avaliacao" data-testid="rating-input-label" >
        Avaliação
        <input
          id="label-avaliacao"
          className="formItems"
          type="number"
          value={rating}
          name="rating"
          data-testid="rating-input"
          onChange={callback}
        />
      </label>
    );
  }
}

export default FormAvaliacao;

FormAvaliacao.propTypes = {
  rating: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};
