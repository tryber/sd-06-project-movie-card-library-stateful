import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  handleInputs({target}) {
    const { name, value } = target;
    
    this.setState({
      [name]: value 
    })
  }
  
  handleSubmit(event) {
    event.preventDefault();

    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }))

    this.props.onClick(this.state);
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input 
            type="text"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.handleInputs}
            name="title"
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            data-testid="subtitle-input"
            onChange={this.handleInputs}
          />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={this.state.imagePath}
            data-testid="image-input"
            onChange={this.handleInputs}
          />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea 
            value={this.state.storyline}
            data-testid="storyline-input"
            onChange={this.handleInputs}
            name="storyline"
          />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={this.state.rating}
            onChange={this.handleInputs}
          />
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select
            name="genre" value={this.state.genre}
            onChange={this.handleInputs} data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={this.handleSubmit}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
