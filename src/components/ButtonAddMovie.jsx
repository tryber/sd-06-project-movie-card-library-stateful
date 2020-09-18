import React from 'react';

class ButtonAddMovie extends React.Component {
  render(){
    const { resetState } = this.props;
    return (
      <div>
        <button type='button' data-testid="send-button" onClick={resetState}>
          Adicionar filme
        </button>
      </div>
    )
  }
}

export default ButtonAddMovie;
