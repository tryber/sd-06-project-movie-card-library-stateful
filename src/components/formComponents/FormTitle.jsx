import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormTitle extends Component {
  render() {
    const { title, callback } = this.props;
    return (
      <label htmlFor="label-title" data-testid="title-input-label">
        Título
        <input
          id="label-title"
          className="formItems"
          type="text"
          value={title}
          name="title"
          data-testid="title-input"
          onChange={callback}
        />
      </label>
    );
  }
}

export default FormTitle;

FormTitle.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
