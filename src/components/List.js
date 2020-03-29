import React, { Component } from 'react';

import ListItem from './ListItem';

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

  handleDelete = (name) => {
    this.setState({ names: this.state.names.filter(t => t !== name) });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>

        <ul>
          
          {this.state.names.map(name => 
            <ListItem 
              key={name} 
              name={name} 
              onDelete={() => this.handleDelete(name)} 
            />
          )}

          <ListItem />
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
