import React from 'react';
import TitleInputText from './TitleInputText';
import SubTitleInputText from './SubTitleInputText';
import Image from './Image';
import Storyline from './Storyline';
import NewRating from './NewRating';
import Genre from './Genre';
import AddButton from './AddButton';


class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick();
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
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInputText onChange={this.handleChange} value={title} />
        <SubTitleInputText onChange={this.handleChange} value={subtitle} />
        <Image onChange={this.handleChange} value={imagePath} />
        <Storyline onChange={this.handleChange} value={storyline} />
        <NewRating onChange={this.handleChange} value={rating} />
        <Genre onChange={this.handleChange} value={genre} />
        <AddButton onClick={this.handleClick} />
      </form>
    );
  }
}

export default AddMovie;
