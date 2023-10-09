import React, { useState } from 'react';
import '../styles/Todoform.css';

function TodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    completed: false,
    dueDate: '', // This should be in the format 'YYYY-MM-DDTHH:mm'
    priority: 'Normal',
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.title.trim() !== '') {
      addTodo(newTodo);
      setNewTodo({
        title: '',
        description: '',
        completed: false,
        dueDate: '', // Reset the dueDate
        priority: 'Normal',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="name"
        value={newTodo.title}
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Email"
        value={newTodo.description}
        onChange={(e) =>
          setNewTodo({ ...newTodo, description: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Mob no"
        value={newTodo.dueDate}
        onChange={(e) => setNewTodo({ ...newTodo, dueDate: e.target.value })}
      />
      <select
        value={newTodo.priority}
        onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value })}
      >
        <option value="Admin">Admin</option>
        <option value="Normal">Normal user</option>
        {/* <option value="low"></option> */}
      </select>
      
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
