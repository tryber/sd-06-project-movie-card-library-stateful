import React from 'react';
import PropTypes from 'prop-types';
import details from './add-movie-components/details';
import TextInput from './add-movie-components/TextInput';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  inputChange({ target }) {
    const { value, name } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { titleObj, subtitleObj, imagePathObj, storylineObj, genreObj } = details;

    return (
      <form data-testid="add-movie-form">
        <TextInput value={title} handleChange={this.inputChange} details={titleObj} />
        <TextInput value={subtitle} handleChange={this.inputChange} details={subtitleObj} />
        <TextInput value={imagePath} handleChange={this.inputChange} details={imagePathObj} />
      </form>
    );
  }
}

export default AddMovie;
