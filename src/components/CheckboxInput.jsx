import React from 'react';
import propTypes from 'prop-types';

class CheckboxInput extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <div>
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          <input
            id="checkbox-input"
            data-testid="checkbox-input"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
          <span>Mostrar somente favoritos</span>
        </label>
      </div>
    );
  }
}

CheckboxInput.propTypes = { bookmarkedOnly: propTypes.bool.isRequired };
CheckboxInput.propTypes = { onBookmarkedChange: propTypes.func.isRequired };

export default CheckboxInput;
