import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange(this)
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }
  handleChange({ target }) {
    const key = target.id;
    const value = target.value;
    this.setState({[key]: value});
  }
  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input id="title" type="text" data-testid="title-input" 
          onChange={this.handleChange} value={this.state.title} />
        </label>
        <label htmlFor="title" data-testid="subtitle-input-label">
          Subtítulo
          <input id="title" type="text" data-testid="subtitle-input" 
          onChange={this.handleChange} value={this.state.subtitle} />
        </label>
        <label htmlFor="title" data-testid="image-input-label">
          Imagem
          <input id="title" type="text" data-testid="image-input" 
          onChange={this.handleChange} value={this.state.imagePath} />
        </label>
        <label htmlFor="title" data-testid="storyline-input-label">
          Sinopse
          <textarea id="title" type="text" data-testid="storyline-input" 
          onChange={this.handleChange} value={this.state.storyline}></textarea>
        </label>
      </form>
    );
  }
}

export default AddMovie;
