/* eslint-disable no-unused-vars -- Remove me */
import React, { useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const url = (path) => `${process.env.REACT_APP_BASE_URL}${path}`;

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  /**
   * Retrieves the todos list on first render.
   */
  useEffect(() => {
    async function getAll() {
      try {
      const response = await fetch(url('/api/todos'))
      if (!response.ok) throw new Error(`Server responded with a message of: ${response.status}`);
      const data = await response.json();
      setTodos(data);
      setIsLoading(false)
      } catch (err) {
        setError(err)
        setIsLoading(false)
      }
    }
    getAll()
  }, []);

/**
 * Adds a new todo to the todos via fetch
 * @param {string} newTodo
 */
  async function addTodo(newTodo) {
      try {
        const todo = JSON.stringify(newTodo)
        const response = await fetch(url('/api/todos'), {
          method: 'POST',
          body: todo,
          headers: {
            'Content-Type': 'application/json'
        }})
      if (!response.ok) {
        const serverError = await response.json();
        console.log('Server msg:', serverError)
        throw new Error(`Could not post: ${serverError.error}, code ${response.status}`);
      }
      const data = await response.json()
      setTodos((prev) => prev.concat(data))
      } catch (err) {
        setError(err)
      }
  }

/**
 * Sends a request to change the isCompleted status of a todo.
 * @param {number} todoId of the item to be checked off.
 */
  async function toggleCompleted(todoId) {
      try {
        const [todo] = todos.filter(item => item.todoId === todoId)
        const value = { isCompleted: !todo.isCompleted }
        const response = await fetch(url(`/api/todos/${todoId}`), {
          method: 'PATCH',
          body: JSON.stringify(value),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (!response.ok) {
          const serverError = await response.json();
          console.log('Server msg:', serverError)
         throw new Error(`Could not update status: ${serverError.error}, code ${response.status}`);}
        const data = await response.json()
        setTodos(todos.map(todo => todo.todoId === todoId ? data : todo))
      } catch (err) {
        setError(err)
      }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}
