// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor () {
    super()
    this.state {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNumber = this.handleChange.bind(this);
  }
  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value});
  }
  handleChangeNumber({target}) {
    const { name, value } = target;
    this.setState({ [name]: Number(value) });
  }

  render() {
    const titleInput = { type: 'text', value: this.state.title, onChange: this.handleChange };
    const subtitleInput = { type: 'text', value: this.state.subtitle, onChange: this.handleChange};
    const imageInput = { type: 'text', value: this.state.imagePath, onChange: this.handleChange};
    const storylineInput = { maxlength: 200, rows: 4, value: this.state.storyline, onChange: this.handleChange};
    const ratingInput = { type: 'number', value: this.state.rating, onChange: this.handleChangeNumber};
    const selectInput = {
      value: this.state.genre,
      onChange: this.handleChangeNumber,
      checked: ,
    };
    return (
      <div>
        <section>
          <form data-testid="add-movie-form">
            <label htmlFor="title-input" data-testid="title-input-label"> Título </label>
            <input id="title-input" data-testid="title-input" {...titleInput} />
            <label htmlFor="subtitle-input" data-testid="subtitle-input-label"> Subtítulo </label>
            <input id="subtitle-input" data-testid="subtitle-input" {...subtitleInput} />
            <label htmlFor="image-input" data-testid="image-input-label"> Imagem </label>
            <input id="image-input" data-testid="image-input" {...imageInput} />
            <label htmlFor="storyline-input" data-testid="storyline-input-label"> Sinopse </label>
            <textarea id="storyline-input" data-testid="storyline-input" {...storylineInput} ></textarea>
            <label htmlFor="rating-input" data-testid="rating-input-label"> Avaliação </label>
            <input id="rating-input" data-testid="rating-input" {...ratingInput} />
            <label htmlFor="genre-option" data-testid="genre-input-label" > Gênero </label>
            <select id="genre-option" data-testid="genre-input" {...}>
              <option data-testid="genre-option" value={this.state.action}> Ação </option>
              <option data-testid="genre-option" value="action"> Ação </option>
              <option data-testid="genre-option" value="comedy"> Comédia </option>
              <option data-testid="genre-option" value="thriller"> Suspense </option>
            </select>
            
          </form>
        </section>
      </div>
    )
  }
}

export default AddMovie;


// data-testid="add-movie-form" 