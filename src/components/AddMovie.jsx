import React from 'react';
import PropTypes from 'prop-types';
import details from './add-movie-components/details';
import TextInput from './add-movie-components/TextInput';
import TextareaInput from './add-movie-components/TextareaInput';
import RatingInput from './add-movie-components/RatingInput';
import GenreInput from './add-movie-components/GenreInput';

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
    this.initialState = this.state;
    // https://medium.com/@justintulk/best-practices-for-resetting-an-es6-react-components-state-81c0c86df98d inspired the reset state code
  }

  inputChange({ target }) {
    const { value, name } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { titleObj, subtitleObj, imagePathObj, storylineObj, ratingObj, genreObj } = details;

    return (
      <form data-testid="add-movie-form">
        <TextInput value={title} handleChange={this.inputChange} details={titleObj} />
        <TextInput value={subtitle} handleChange={this.inputChange} details={subtitleObj} />
        <TextInput value={imagePath} handleChange={this.inputChange} details={imagePathObj} />
        <TextareaInput value={storyline} handleChange={this.inputChange} details={storylineObj} />
        <RatingInput value={rating} handleChange={this.inputChange} details={ratingObj} />
        <GenreInput value={genre} handleChange={this.inputChange} details={genreObj} />
        <button type="submit" data-testid="send-button" onClick={onClick}>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func }.isRequired;

export default AddMovie;
