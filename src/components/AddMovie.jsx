import React from 'react';


class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClickSend = this.handleClickSend.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }
    handleChange({target}) { 
      const {name} = target;
    
      this.setState ({
        [name]: target.value
      });
/*
        handleClickSend({target}) {
            // codigo
        }
*/
    }
  render() {
      return (
        <form>
          <label htmlFor="title-input-label">Título
            <input htmlFor="title-input" onChange={this.handleChange} />
          </label>
          <br />
          <label htmlFor="subtitle-input-label">Subtítulo
            <input htmlFor="subtitle-input" onChange={this.handleChange} />
          </label>
          <br />
          <label htmlFor="image-input-label">Imagem
            <input htmlFor="image-input" onChange={this.handleChange} />
          </label>
          <br />
          <label htmlFor="storyline-input-label">Sinopse
            <textarea htmlFor="storyline-input" onChange={this.handleChange} />
          </label>
          <br />
          <label htmlFor="rating-input-label">Avaliação
            <textarea type="number" htmlFor="rating-input" onChange={this.handleChange} />
          </label>
          <br />
          <label htmlFor="genre-input-label">Gênero
            <select data-testid="genre-input" onChange={this.handleChange}>
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comedy</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <br />
          <button data-testid="send-button" onClick={this.handleClickSend}>Adicionar filme</button>
      </form>
    );
    }
}

export default AddMovie;
