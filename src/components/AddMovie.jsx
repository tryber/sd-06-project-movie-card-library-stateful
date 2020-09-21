import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    console.log('se ao clicar no botão essa função é chamada');
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label"> Título
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} data-testid="title-input" />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label"> Subtítulo
          <input type="text" name="subtitle" value={this.state.subtitle} onChange={this.handleChange} data-testid="subtitle-input" />
        </label>
        <label htmlFor="image" data-testid="image-input-label"> Imagem
          <input type="text" name="imagePath" value={this.state.imagePath} onChange={this.handleChange} data-testid="image-input" />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label"> Sinopse
          <textarea type="text" name="storyline" value={this.state.storyline} onChange={this.handleChange} data-testid="storyline-input" />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label"> Avaliação
          <input type="number" name="rating" value={this.state.rating} onChange={this.handleChange} data-testid="rating-input" />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label"> Gênero
          <select name="genre" value={this.state.genre} onChange={this.handleChange} data-testid="genre-input" >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={this.handleClick}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
