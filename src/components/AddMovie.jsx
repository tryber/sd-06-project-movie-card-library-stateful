import React from 'react';
import PropTypes from 'prop-types';
import ButtonAddMovie from './ButtonAddMovie';
import SelectAM from './SelectAM';
import RatingAM from './RatingAM';
import TextAreaAM from './TextAreaAM';
import ImagePathAM from './ImagePathAM';
import SubtitleAM from './SubtitleAM';
import TitleAM from './TitleAM';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.baseState = this.state;
  }

  resetState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.baseState);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleAM value={this.state.title} handleChange={this.handleChange} />
          <SubtitleAM value={this.state.subtitle} handleChange={this.handleChange} />
          <ImagePathAM value={this.state.imagePath} handleChange={this.handleChange} />
          <TextAreaAM value={this.state.storyline} handleChange={this.handleChange} />
          <RatingAM value={this.state.rating} handleChange={this.handleChange} />
          <SelectAM value={this.state.genre} handleChange={this.handleChange} />
          <ButtonAddMovie resetState={this.resetState} />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
