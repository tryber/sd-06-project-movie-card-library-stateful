import React from 'react';

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
  }

  render() {
    return (
     <form>
       <label htmlFor="testing-form"> Digite algo se você me vê também:
          <input type="text" id="fname" name="testing-form" />
        </label>
     </form>
    );
  }
}

export default AddMovie;
