import React from 'react';


function ListItem({ name, onDelete }){
  return (
    <li>
      {name}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  )
}

export default ListItem;