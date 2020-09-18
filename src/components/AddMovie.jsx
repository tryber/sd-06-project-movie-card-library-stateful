import React, { Component } from 'react';

class AddMovie extends  Component {

  constructor() {
    super();
    this.userInput = this.userInput.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  userInput( {target} ) {
    const name = target.name
    this.setState({
      [name]: target.value,
    })
  }

  handleClick() {
    const onClick = this.props;
    const reset = this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    })
    this.onClick(reset);
  }

  render() {
    const { onClick } = this.props;
    return (
        <form data-testid="add-movie-form" >
          <label data-testid="title-input-label">
            Título
            <input type="text" value={this.state.title} name="title" data-testid="title-input" onChange={this.userInput}/>
          </label>
          <label data-testid="subtitle-input-label">
            Subtítulo
            <input type="text" value={this.state.subtitle} name="subtitle" data-testid="subtitle-input" onChange={this.userInput}/>
          </label>
          <label data-testid="image-input-label">
            Imagem
            <input type="text" value={this.state.imagePath} name="imagePath" data-testid="image-input" onChange={this.userInput}/>
          </label>
          <label data-testid="storyline-input-label">
            Sinopse
            <textarea value={this.state.storyline} name="storyline"data-testid="storyline-input" onChange={this.userInput}/>
          </label>
          <label data-testid="rating-input-label" >
            Avaliação
            <input type="number" value={this.state.rating} name="rating" data-testid="rating-input" onChange={this.userInput}/>
          </label>
          <label data-testid="genre-input-label">
            Gênero
            <select value={this.state.genre} data-testid="genre-input" name="genre"onChange={this.userInput}>
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button data-testid="send-button" onClick={this.handleClick}>Adicionar filme</button>
        </form>
    )
  }
}

export default AddMovie;
