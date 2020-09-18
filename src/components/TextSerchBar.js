import React from 'react';
import PropTypes from 'prop-types';

class TextSerchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto:
        <input
          id="text-input"
          type="text"
          data-testid="text-input"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </label>
    );
  }
}

TextSerchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default TextSerchBar;
