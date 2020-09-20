import React from 'react';
import TitleInputText from './TitleInputText';
import SubTitleInputText from './SubTitleInputText';
import Image from './Image';
import Storyline from './Storyline';


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
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
    } = this.state;
    return (
      <form>
        <TitleInputText onChange={this.handleChange} value={title} />
        <SubTitleInputText onChange={this.handleChange} value={subtitle} />
        <Image onChange={this.handleChange} value={imagePath} />
        <Storyline onChange={this.handleChange} value={storyline} />
      </form>
    );
  }
}

export default AddMovie;
