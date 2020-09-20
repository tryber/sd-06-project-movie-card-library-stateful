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

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.showTitleInput()}
      </form>
    );
  }
}

export default AddMovie;
