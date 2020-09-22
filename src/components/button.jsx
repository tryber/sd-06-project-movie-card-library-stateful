import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { click } = this.props;

    return (
      <fieldset>
        <button
          data-testid="send-button" onClick={click}
        >
          Adicionar filme
        </button>
      </fieldset>
    );
  }
}

Button.propTypes = { click: PropTypes.func };
Button.defaultProps = { click: '' };


export default Button;
