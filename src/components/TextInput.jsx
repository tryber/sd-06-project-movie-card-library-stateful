import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const searchText = this.props.searchText;
    const onSearchTextChange = this.props.onSearchTextChange;
    return (
      <label htmlFor="text" data-testid="text-input-label">Inclui o texto:
        <input
          id="text"
          value={searchText}
          onChange={onSearchTextChange}
          data-testid="text-input"
        />
      </label>
    );
  }
}

export default TextInput;

TextInput.defaultProps = {
  searchText: {},
  onSearchTextChange: {},
};
TextInput.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
};
