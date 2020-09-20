import React from 'react';

import props from './propsValidation';

class CheckBox extends React.Component {
  render() {
    const {
      state,
      ctl,
    } = this.props;

    return (
      <div className="check-box-container">
        <input
          type="checkbox"
          name="bookmarkedOnly"
          checked={state}
          onChange={ctl}
          data-testid="checkbox-input"
        />
        <label
          htmlFor="bookmarkedOnly"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
        </label>
      </div>

    );
  }
}

export default CheckBox;

CheckBox.propTypes = props;
