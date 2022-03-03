import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, toggleDelete, toggleEdit, toggleChecked }) => {
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            toggleDelete={toggleDelete}
            toggleEdit={toggleEdit}
            toggleChecked={toggleChecked}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
