import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleClick() {
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
    return (
      <form action=""></form>
    );
  }
}

export default AddMovie;
