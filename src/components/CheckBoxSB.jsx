import React from 'react';
import PropTypes from 'prop-types';

class CheckBoxSB extends React.Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <div>
        <input
          data-testid="checkbox-input" type="checkbox" name="bookmarkedOnly"
          checked={checked} onChange={onChange}
        />
        <label htmlFor="input-check" data-testid="checkbox-input-label">
          Mostrar somente favoritos
        </label>
      </div>
    );
  }
}

CheckBoxSB.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckBoxSB;
