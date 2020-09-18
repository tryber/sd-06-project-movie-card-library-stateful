import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { label, value, handle, inputId } = this.props.objProps;

    return (
      <div>
        <button value={value} onClick={handle} data-testid={inputId}>{label}</button>
      </div>
    );
  }
}

export default Button;

Button.defaultProps = {
  objProps: {
    label: '',
    value: {},
    handle: undefined,
    inputId: '',
  },
};

Button.propTypes = {
  objProps: PropTypes.shape(
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
    PropTypes.func,
    PropTypes.string,
  ),
};
