import React from 'react';
import PropTypes from 'prop-types';

class FavoritesCheck extends React.Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="favorites">
        Mostrar somente favoritos
        <input
          id="favorites"
          type="checkbox"
          checked={checked}
          onChange={onChange}
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

FavoritesCheck.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}.isRequired;

export default FavoritesCheck;
