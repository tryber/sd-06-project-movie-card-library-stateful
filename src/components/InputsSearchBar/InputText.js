import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    return (
      <label htmlFor="searchText" data-testid="text-input-label">
        Inclui o texto:
        <input
          id="searchText"
          data-testid="text-input"
          onChange={this.props.onSearchTextChange}
          value={this.props.searchText}
          type="text"
        />
      </label>
    );
  }
}

InputText.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default InputText;
