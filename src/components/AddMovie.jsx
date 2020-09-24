import React from 'react';
import PropTypes from 'prop-types';
import TitleAddMovie from './TitleAddMovie';
import SubtitleAddMovie from './SubtitleAddMovie';
import ImageAddMovie from './ImageAddMovie';
import StorylineAddMovie from './StorylineAddMovie';
import RatingAddMovie from './RatingAddMovie';
import SelectAddMovie from './SelectAddMovie';
import BoataoAddMovie from './BotaoAddMovie';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
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

  handlerClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
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

        <BoataoAddMovie handlerClick={this.handlerClick} />

      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
