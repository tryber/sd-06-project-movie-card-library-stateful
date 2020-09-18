import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputCheckbox extends Component {
  render() {
    return (
      <label htmlFor="checkboxInput" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          id="checkboxInput"
          data-testid="checkbox-input"
          checked={this.props.bookmarkedOnly}
          type="checkbox"
          onChange={this.props.onBookmarkedChange}
        />
      </label>
    );
  }
}

InputCheckbox.propTypes = {
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
};

export default InputCheckbox;
