import React from 'react';
import PropTypes from 'prop-types';

class BotaoAddMovie extends React.Component {
  render() {
    const { handlerClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={handlerClick}
      >
        Adicionar filme
      </button>
    );
  }
}

BotaoAddMovie.propTypes = { handlerClick: PropTypes.func.isRequired };

export default BotaoAddMovie;
