import React, { useState } from 'react';

const TodoItem = ({
  id,
  title,
  completed,
  toggleDelete,
  toggleEdit,
  toggleChecked,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');

  return (
    <li className="todo-container">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleChecked(id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <p className="title">{title}</p>
      )}
      {isEditing ? (
        <button
          onClick={() => {
            toggleEdit(id, editedTitle);
            setIsEditing(false);
            setEditedTitle('');
          }}
        >
          Confirm
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

      <button onClick={() => toggleDelete(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
