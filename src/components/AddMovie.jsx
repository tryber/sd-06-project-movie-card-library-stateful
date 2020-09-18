// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor () {
    super()
    this.state {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNumber = this.handleChange.bind(this);
  }
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value});
  }
  handleChangeNumber({target}) {
    const { name, value } = target;
    this.setState({ [name]: Number(value) });
  }

  render() {
    return (
      <div>
        
        <section>
          <form data-testid="add-movie-form">
            <label for="title-input" data-testid="title-input-label"> Título </label>
            <input id="title-input" type="text" 
            value={this.state.title} onChange={this.handleChange}data-testid="title-input" />
            
          </form>
        </section>
      </div>
    )
  }
}

export default AddMovie;


// data-testid="add-movie-form" 