import React, { Component } from 'react';
import PropType from 'prop-types';

class FormSubtitle extends Component {
  render() {
    const { subtitle, callback } = this.props;
    return (
      <label htmlFor="label-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="label-subtitle"
          className="formItems"
          type="text"
          value={subtitle}
          name="subtitle"
          data-testid="subtitle-input"
          onChange={callback}
        />
      </label>
    );
  }
}

export default FormSubtitle;

FormSubtitle.propTypes = {
  subtitle: PropType.string.isRequired,
  callback: PropType.func.isRequired,
};
