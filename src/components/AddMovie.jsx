import React from 'react';
import TitleAddMovie from './TitleAddMovie';
import SubtitleAddMovie from './SubtitleAddMovie';
import ImageAddMovie from './ImageAddMovie';
import StorylineAddMovie from './StorylineAddMovie';
import RatingAddMovie from './RatingAddMovie';
import SelectAddMovie from './SelectAddMovie';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handlerChange = this.handlerChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handlerChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">

        <TitleAddMovie title={title} handlerChange={this.handlerChange} />

        <SubtitleAddMovie subtitle={subtitle} handlerChange={this.handlerChange} />

        <ImageAddMovie imagePath={imagePath} handlerChange={this.handlerChange} />

        <StorylineAddMovie storyline={storyline} handlerChange={this.handlerChange} />

        <RatingAddMovie rating={rating} handlerChange={this.handlerChange} />

        <SelectAddMovie genre={genre} handlerChange={this.handlerChange} />

      </form>
    );
  }
}

export default AddMovie;
