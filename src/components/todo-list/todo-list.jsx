import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({data}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <TodoListItem key={id} {...itemProps}></TodoListItem>
    )
  })

  return (
    <div>
      <ul className="list-group mx-auto">
        {elements}
      </ul>
    </div>
  );
};

export default TodoList;