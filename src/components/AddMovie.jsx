import React from 'react';
import propTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import GenreInput from './GenreInput';
import ImageInput from './ImageInput';
import Storyline from './Storyline';
import RatingInput from './RatingInput';

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
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleInput value={title} handleChange={this.handleChange} />
          <SubtitleInput value={subtitle} handleChange={this.handleChange} />
          <ImageInput value={imagePath} handleChange={this.handleChange} />
          <Storyline value={storyline} handleChange={this.handleChange} />
          <RatingInput value={rating} handleChange={this.handleChange} />
          <GenreInput value={genre} handleChange={this.handleChange} />
          <button type="submit" data-testid="send-button" onClick={onClick}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: propTypes.func.isRequired };

export default AddMovie;
