import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { labelText, value, handle, inputId } = this.props;

    return (
      <div>
        <button value={value} onClick={handle} data-testid={inputId}>{labelText}</button>
      </div>
    );
  }
}

export default Button;

Button.defaultProps = {
  labelText: '',
  value: {},
  handle: undefined,
  inputId: '',
};

Button.propTypes = {
  labelText: PropTypes.string,
  value: PropTypes.objectOf(PropTypes.string),
  handle: PropTypes.func,
  inputId: PropTypes.string,
};
