import React from "react";

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  handleChange({ target }) {
    const inputName = target.name;

    this.setState(() => ({
      [inputName]: target.value
    }))
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título</label>
        <input type="text" value={this.state.title} data-testid="title-input" onChange={this.handleChange} name="title"></input>

        <label data-testid="subtitle-input-label">Subtítulo</label>
        <input type="text" value={this.state.subtitle} data-testid="subtitle-input" onChange={this.handleChange} name="subtitle"></input>
      </form>
    )
  }
}

export default AddMovie;