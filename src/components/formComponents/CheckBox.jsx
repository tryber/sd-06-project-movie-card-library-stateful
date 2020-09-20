import React from 'react';

import props from './propsValidation';

class CheckBox extends React.Component {
  render() {
    const {
      state,
      changeFunc,
    } = this.props;

    return (
      <div className="check-box-container">
        <input
          type="checkbox"
          name="bookmarkedOnly"
          checked={state}
          onChange={changeFunc}
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
