import React, { Component } from  'react';

class Inputs extends Component {
  render() {
    const { valorTitle, acaoTitle, valorSub, acaoSub, valorImg, acaoImg,
      valorHistorico, acaoHistorico, valorRating, acaoRating
    } = this.props
    return (
      <div>
        <input
          className="tipoInput" data-testid="title-input" name="title"
          onChange={acaoTitle} value={valorTitle}
        />
        <input
          className="tipoInput" data-testid="subtitle-input" name="subtitle"
          onChange={acaoSub} value={valorSub}
        />
        <input
          className="tipoInput" data-testid="image-input" name="imagePath"
          onChange={acaoImg} value={valorImg}
        />
        <textarea 
          className="tipoInput" data-testid="storyline-input" name="storyline"
          onChange={acaoHistorico} value={valorHistorico}
        />
        <input
          className="tipoInput" data-testid="rating-input" name="rating"
          type="number" onChange={acaoRating} value={valorRating}
        />
      </div>
    )
  }
}

export default Inputs;
