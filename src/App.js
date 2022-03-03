import React, { useState, useEffect } from 'react';
import './style.css';
import AddTodo from './AddTodo';
import * as todoApi from './todoApi';
import TodoList from './TodoList';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);

  const handleAdd = (value) => {
    const newTodo = {
      id: new Date().valueOf(),
      title: value,
      completed: false,
    };
    todoApi.addTodo(newTodo).then((data) => {
      setTodoList([...todoList, newTodo]);
    });
  };

  const handleDelete = (id) => {
    todoApi.deleteTodo(id).then(() => {
      const newTodo = todoList.filter((todo) => todo.id !== id);
      setTodoList(newTodo);
    });
  };

  const handleEdit = (id, editedTitle) => {
    todoApi.updateTodo(id, editedTitle).then((data) => {
      const updatedTodo = [...todoList].map((todo) => {
        if (todo.id === id) {
          todo.title = editedTitle;
        }
        return todo;
      });
      setTodoList(updatedTodo);
    });
  };

  const handleCheck = (id) => {
    const targetTodo = todoList.find((todo) => todo.id === id);
    if (targetTodo) {
      todoApi
        .updateTodo(id, { completed: !targetTodo.completed })
        .then((data) => {
          const newTodo = todoList.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            } else {
              return todo;
            }
          });
          setTodoList(newTodo);
        });
    }
  };

  useEffect(() => {
    todoApi.loadTodo().then((data) => {
      setTodoList(data.slice(0, 5));
    });
  }, []);

  return (
    <div className="app-container">
      <h1>Todo List with Fetched Data</h1>
      <AddTodo toggleAdd={handleAdd} />
      <TodoList
        todoList={todoList}
        toggleDelete={handleDelete}
        toggleEdit={handleEdit}
        toggleChecked={handleCheck}
      />
    </div>
  );
}
