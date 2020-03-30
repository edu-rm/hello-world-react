import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ name, onDelete }){
  return (
    <li>
      {name}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  )
}

ListItem.defaultProps = {
  name: 'oculto',
}

ListItem.propTypes= {
  name: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default ListItem;