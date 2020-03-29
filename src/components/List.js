import React, { Component } from 'react';


class List extends Component{

  state = {
    names: [
      'Eduardo',
      'Pedro',
      'Lucas'
    ]
  }

  render(){
    console.log(this.state);
    return (
      <ul>
        <li>Eduardo</li>
        <li>Pedro</li>
        <li>Lucas</li>
      </ul>
    );
  }
}

export default List;
