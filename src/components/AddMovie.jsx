import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // genre: 'action',
      // imagePath: '',
      // rating: 0,
      // storyline: '',
      // subtitle: '',
      title: '',
    };
  }

  render() {
    const { title } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="text-input">
          <input
            data-testid="title-input"
            onChange=""
            type="text"
            value={title}
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
