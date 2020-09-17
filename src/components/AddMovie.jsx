import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super()
    
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputs ({ target }) {
    const {name, value} = target;
    this.setState({[name]: value});
  }

  handleSubmit (event) {
    event.preventDefault();

    this.props.onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            name="title"
            data-testid="title-input" 
            value={this.state.title} 
            type="text"
            onChange={this.handleInputs}
          />
        </label>

        <label data-testid="subtitle-input-label">
          Subtítulo
          <input 
            name="subtitle"
            data-testid="subtitle-input"
            value={this.state.subtitle}
            onChange={this.handleInputs}
            type="text"
          />
        </label>

        <label data-testid="image-input-label">
          Imagem
          <input 
            name="imagePath"
            value={this.state.imagePath}
            type="text"
            data-testid="image-input"
            onChange={this.handleInputs}
          />
        </label>

        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={this.state.storyline}
            data-testid="storyline-input"
            onChange={this.handleInputs}
          />
        </label>

        <label data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={this.state.rating}
            data-testid="rating-input"
            onChange={this.handleInputs}
          />
        </label>

        <label data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={this.state.genre} 
            onChange={this.handleInputs}
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button onClick={this.handleSubmit} data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
