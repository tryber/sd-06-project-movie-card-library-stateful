/*
  props recebidas:
    - onClick, uma callback
  
  O form deve apresentar o att data-testid="add-movie-form"
*/
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleFormInputsChange = this.handleFormInputsChange.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: '',
    };
  }

  handleFormInputsChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  showTitleInput() {
    return (
      <div>
        <label for="title" data-testid="title-input-label">Título</label>
        <input
          type="text"
          name="title"
          id="title"
          value={this.state.title}
          onChange={this.handleFormInputsChange}
          data-testid="title-input"/>
      </div>
    );
  }

  showSubtitleInput() {
    return (
      <div>
        <label for="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          value={this.state.subtitle}
          onChange={this.handleFormInputsChange}
          data-testid="subtitle-input"/>
      </div>
    );
  }

  showImageInput() {
    return (
      <div>
        <label for="imagePath" data-testid="image-input-label">Imagem</label>
        <input
          type="text"
          name="imagePath"
          id="imagePath"
          value={this.state.imagePath}
          onChange={this.handleFormInputsChange}
          data-testid="image-input"/>
      </div>
    );
  }

  showStorylineInput() {
    return (
      <div>
        <label for="storyline" data-testid="storyline-input-label">Sinopse</label>
        <textarea
          name="storyline"
          id="storyline"
          cols="30"
          rows="10"
          value={this.state.storyline}
          onChange={this.handleFormInputsChange}
          data-testid="storyline-input"></textarea>
      </div>
    );
  }

  showRatingInput() {
    return (
      <div>
        <label for="rating" data-testid="rating-input-label">Avaliação</label>
        <input
          type="number"
          name="rating"
          id="rating"
          value={this.state.rating}
          onChange={this.handleFormInputsChange}
          data-testid="rating-input"/>
      </div>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.showTitleInput()}
        {this.showSubtitleInput()}
        {this.showImageInput()}
        {this.showStorylineInput()}
        {this.showRatingInput()}
      </form>
    );
  }
}

export default AddMovie;
