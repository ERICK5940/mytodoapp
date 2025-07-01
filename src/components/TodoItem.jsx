'use client';

export default function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        marginBottom: '10px',
      }}
    >
      <span
        onClick={() => toggleComplete(todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{ color: 'red', fontWeight: 'bold', marginLeft: '10px' }}
      >
        ✕
      </button>
    </li>
  );
}
