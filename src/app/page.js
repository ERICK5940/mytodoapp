'use client';
import { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
  <center>
    <div
      style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '30px',
        background: 'linear-gradient(to right, #fceabb, #f8b500)',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          backgroundColor: '#ff4b5c',
          color: 'white',
          fontSize: '26px',
          fontWeight: 'bold',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}
      >
        📝 Todo List
      </h1>

      <TodoForm addTodo={addTodo} />

      <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  </center>
);
}

