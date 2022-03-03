export const loadTodo = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos').then((resp) =>
    resp.json()
  );
};

export const addTodo = (newtodo) => {
  return fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(newtodo),
  }).then((resp) => resp.json());
};

export const deleteTodo = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE',
  }).then((resp) => resp.json());
};

export const updateTodo = (id, partialTodo) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(partialTodo),
  }).then((resp) => resp.json());
};
