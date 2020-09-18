import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super()

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
    const name = target.name;
    this.setState({ [name]: target.value })
  }
  renderInput(labelTitle, labelId, inputName, inputId, state) {
    return (
      <label data-testid={labelId}>{labelTitle}
        <input
          data-testid={inputId}
          name={inputName}
          type="text" value={state}
          onChange={this.handleChange}>
        </input>
      </label>
    )
  }
  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderInput("Título", "title-input-label", 'title', "title-input", this.state.title)}
        {this.renderInput("Subtítulo", "subtitle-input-label", 'subtitle', "subtitle-input", this.state.subtitle)}

      </form>
    )
  }
}

export default AddMovie;