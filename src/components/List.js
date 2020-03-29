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

  handleSubmit = e =>{
    e.preventDefault();

    this.setState({ 
      names: [...this.state.names, this.state.newName],
      newName: ''
    });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.names.map(name => <li key={name}>{name}</li>)}
        </ul>
        <input 
          type="text"
          onChange={this.handleInputChange} 
          value={this.state.newName}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }

}

export default List;
