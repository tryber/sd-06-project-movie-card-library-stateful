import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTitle extends Component {
  render() {
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          id="title"
          name="title"
          data-testid="title-input"
          value={this.props.title}
          type="text"
          onChange={this.props.handleInputs}
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  title: PropTypes.string.isRequired,
  handleInputs: PropTypes.func.isRequired,
};

export default InputTitle;
