import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends Component {
  render() {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle"
          name="subtitle"
          data-testid="subtitle-input"
          value={this.props.subtitle}
          onChange={this.props.handleInputs}
          type="text"
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleInputs: PropTypes.func.isRequired,
};

export default InputSubtitle;
