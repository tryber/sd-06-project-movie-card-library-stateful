import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSinopse extends Component {
  render() {
    const { storyline, callback } = this.props;
    return (
      <label htmlFor="label-sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="label-sinopse"
          className="formItems"
          value={storyline}
          name="storyline"
          data-testid="storyline-input"
          onChange={callback}
        />
      </label>
    );
  }
}

export default FormSinopse;

FormSinopse.propTypes = {
  storyline: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
