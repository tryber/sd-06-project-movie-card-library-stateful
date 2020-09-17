import React, { Component } from 'react';

class AddMovie extends Component{
  constructor() {
    super()
    
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '',
      genre: '',
    }
  }

  handleChange( {target} )  {
    let { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { onClick } = this.props
    return(
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título
          <input name="title" data-testid="title-input" value={this.state.title} onChange={this.handleChange} />
        </label>

        <label data-testid="subtitle-input-label">Subtítulo
          <input name="subtitle" data-testid="subtitle-input" value={this.state.subtitle} onChange={this.handleChange} />
        </label>
        
        <label data-testid="image-input-label">Imagem
          <input name="imagePath" data-testid="image-input" value={this.state.imagePath} onChange={this.handleChange}></input>
        </label>

        <label data-testid="storyline-input-label">Sinopse
          <textarea data-testid="storyline-input" name="storyline" value={this.state.storyline} onChange={this.handleChange}></textarea>
        </label>

        <label data-testid="rating-input-label">Avaliação
          <input name="rating" data-testid="rating-input" type="number" value={this.state.rating} onChange={this.handleChange}></input>
        </label>

        <label data-testid="genre-input-label">Gênero
          <select name="genre" value={this.state.genre} data-testid="genre-input" onChange={this.handleChange} >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>

        <button data-testid="send-button" onClick={() => onClick(this.state)}>Adicionar filme</button>
        
        
      </form>
    )
  }
}

export default AddMovie;
