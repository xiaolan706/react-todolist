import React, { useState } from 'react';

const AddTodo = ({ toggleAdd }) => {
  const [value, setValue] = useState('');
  return (
    <div className="add-container">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          toggleAdd(value);
          setValue('');
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
