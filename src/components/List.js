import React, { Component } from 'react';


class List extends Component{

  state = {
    newName:'',
    names: [
      'Eduardo',
      'Pedro',
      'Lucas'
    ]
  };

  handleInputChange = e =>{
    this.setState({ newName: e.target.value });
  }

  render(){
    return (
      <>
        <h1>{this.state.newName}</h1>
        <ul>
          {this.state.names.map(name => <li key={name}>{name}</li>)}
        </ul>
        <input type="text" onChange={this.handleInputChange}/>
      </>
    );
  }

}

export default List;
