// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
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

  handleChange( {target} ) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  handleClick (event) {
    //  const { onClick } = this.props;
    event.preventDefault();
    //  console.clear();
    console.log(this.state);
    //  onClick(this.state)
  }

  render() {
    return (
      <form>
        <label htmlFor="" data-testid="title-input-label">
          Título
          <input data-testid="title-input" onChange={this.handleChange}
          value={this.state.title} type="text" name="title"
          />
        </label>
        <label htmlFor="" data-testid="subtitle-input-label">
        Subtítulo
          <input data-testid="subtitle-input" onChange={this.handleChange}
          value={this.state.subtitle} type="text" name="subtitle"
          />
        </label>
        <label htmlFor="" data-testid="image-input-label">
        Imagem
          <input data-testid="image-input" onChange={this.handleChange}
          value={this.state.imagePath} type="text" name="imagePath"
          />
        </label>
        <label htmlFor="" data-testid="storyline-input-label">
          Sinopse
          <textarea data-testid="storyline-input" onChange={this.handleChange}
          value={this.state.storyline} type="text" name="storyline"
          />
        </label>
        <label htmlFor="" data-testid="rating-input-label">
          Avaliação
          <input data-testid="rating-input" onChange={this.handleChange}
          value={this.state.rating} type="number" name="rating"
          />
        </label>
        <label htmlFor="" data-testid="rating-input-label">
          Gênero
          <select value={this.state.genre} data-testid="genre-input" 
          onChange={this.handleChange} name="genre">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button"
        onClick={this.handleClick}>Adicionar filme</button>  
      </form>
    );
  }
}

export default AddMovie;