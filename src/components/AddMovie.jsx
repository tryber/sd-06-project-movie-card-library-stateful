// implement AddMovie component here
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
      genre: '',
    };
  };

  handleChange(e) {
    const { name , value } = e.target;
    this.setState({
        [name]: value,
    })
  };

  render() {
    const { onClick } = this.props;
    return (
      <form>
        <label data-testid="title-input-label">
          Titulo
          <input value={this.state.title}
          data-testid="title-input"
          name="title"
          onChange={this.handleChange}/>
        </label>
      </form>
    )
  }
};