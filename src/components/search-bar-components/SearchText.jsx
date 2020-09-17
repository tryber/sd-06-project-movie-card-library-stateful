import React from 'react';
import PropTypes from 'prop-types';

class SearchText extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="search-text">
        Inclui o texto
        <input
          id="search-text"
          type="text"
          value={value}
          onChange={onChange}
          data-testid="text-input"
        />
      </label>
    );
  }
}

SearchText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

SearchText.defaultProps = {
  value: '',
  onChange: undefined,
};

export default SearchText;
