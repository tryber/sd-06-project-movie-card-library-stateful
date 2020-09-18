import React, { Component } from 'react';
import FormTitle from './formComponents/FormTitle';
import FormSubtitle from './formComponents/FormSubtitle';
import FormImage from './formComponents/FormImage';
import FormSinopse from './formComponents/FormSinopse';
import FormAvaliacao from './formComponents/FormAvaliacao';
import FormSelect from './formComponents/FormSelect';

class AddMovie extends  Component {

  constructor() {
    super();
    this.userInput = this.userInput.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  userInput( {target} ) {
    const name = target.name
    this.setState({
      [name]: target.value,
    })
  }

  handleClick() {
    const { onClick } = this.props;
    const resetState = this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    })
    onClick(resetState);
  }

  render() {
    return (
        <form data-testid="add-movie-form" >
          <FormTitle title={this.state.title} callback={this.userInput}/>
          <FormSubtitle subtitle={this.state.subtitle} callback={this.userInput}/>
          <FormImage imagePath={this.state.imagePath} callback={this.userInput}/>
          <FormSinopse storyline={this.state.storyline} callback={this.userInput}/>
          <FormAvaliacao rating={this.state.rating} callback={this.userInput}/>
          <FormSelect genre={this.state.genre} callback={this.userInput}/>
          <button data-testid="send-button" onClick={this.handleClick}>Adicionar filme</button>
        </form>
    )
  }
}

export default AddMovie;
