/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';

const url = (path) => `${process.env.REACT_APP_BASE_URL}${path}`;

/**
 * Manages the Todos by reading from and writing to the backend API.
 *
 * @returns {Object} with the following properties:
 *   `isLoading`: a boolean indicating if the data has not yet loaded;
 *   `error`: an error if their is an error;
 *   `todos`: a list of To Do items;
 *   `addTodo`: a function (newTodo) that will add a new To Do;
 *   `toggleCompleted`: a function (todoId) that will toggle the completion of an existing To Do.
 */
export function useTodos() {
  const [todos, setTodos] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function getAll() {
      try {
      const data = await readTodos();
      setTodos(data)
      } catch (err) {
        setError(err)
      }
    }
    if (!todos) {
      getAll()
    }
  }, [todos]);

  async function addTodo(newTodo) {
    try {
    const data = await createTodo(newTodo);
    setTodos([...todos, data])
    } catch (err) {
      setError(err)
    }
  }

  async function toggleCompleted(todoId) {
    try {
    const oldTodo = todos.find((todo) => todo.todoId === todoId);
    const data = await updateTodo(oldTodo);
    setTodos(todos.map(todo => todo.todoId === todoId ? data : todo))
    } catch (err) {
      setError(err)
    }
  }

  return {
    isLoading: todos === undefined,
    error,
    todos,
    addTodo,
    toggleCompleted,
  };
}

/**
 * Reads all To Do items from the API.
 * @returns Promise that resolves with the read items.
 */
async function readTodos() {
  const res = await fetch(url('/api/todos'));
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Creates a new To Do item using the API.
 * @param todo The To Do to create.
 * @returns Promise that resolves with the new item returned from the API.
 */
async function createTodo(todo) {
  const req = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  };
  const res = await fetch(url('/api/todos'), req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Updates a To Do item using the API by setting its `isCompleted` state.
 * @param todo The To Do to update.
 * @returns Promise that resolves with the updated To Do item.
 */
async function updateTodo(todo) {
  const req = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isCompleted: !todo.isCompleted }),
  };
  const res = await fetch(url(`/api/todos/${todo.todoId}`), req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
