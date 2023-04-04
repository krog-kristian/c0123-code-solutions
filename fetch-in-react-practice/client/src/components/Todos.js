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
  function addTodo(newTodo) {
    const todo = JSON.stringify(newTodo)
    const request = new Request(url('/api/todos'), {
      method: 'POST',
      body: todo,
      headers: {
        'Content-Type': "application/json"
      }
    })
    async function postTodo(outgoing) {
      try{
      const response = await fetch(outgoing)
      if (!response.ok) throw new Error(`Could not post: ${response.status}`);
      const data = await response.json()
      setTodos((prev) => prev.concat(data))
      } catch (err) {
        setError(err)
      }
    }
    postTodo(request)
  }

/**
 * Sends a request to change the isCompleted status of a todo.
 * @param {number} todoId of the item to be checked off.
 */
  function toggleCompleted(todoId) {
    const [todo] = todos.filter(item => item.todoId === todoId)
    const thisID = todoId
    const value = {isCompleted: !todo.isCompleted}
    const request = new Request(url(`/api/todos/${todoId}`), {
      method: 'PATCH',
      body: JSON.stringify(value),
      headers: {
        'Content-Type': "application/json"
      }
    })
    async function postTodo(outgoing) {
      try {
        const response = await fetch(outgoing)
        if (!response.ok) throw new Error(`Could not update status: ${response.status}`);
        const data = await response.json()
        setTodos(todos.map((todo) => {
          if (todo.todoId === todoId) {
            return data;
          } else {
            return todo
          }
        }))
      } catch (err) {
        setError(err)
      }
    }
    postTodo(request)
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
