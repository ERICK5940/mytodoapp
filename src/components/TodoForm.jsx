'use client';
import { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
      <input
        type="text"
        placeholder="Enter task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        
        style={{ flex: 1, padding: '8px',borderRadius:'6px',}}
      />
      <button type="submit" style={{ padding: '10px 16px', background: '#0070f3', color: 'white',border:'none',borderRadius:'6px',fontWeight:'bold',cursor:'pointer',transition:'0.3s' }}>
        Add
      </button>
    </form>
  );
}
