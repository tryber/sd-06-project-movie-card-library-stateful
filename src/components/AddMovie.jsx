/*
  props recebidas:
    - onClick, uma callback
  
  O form deve apresentar o att data-testid="add-movie-form"
*/
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: '',
    };
  }
}
