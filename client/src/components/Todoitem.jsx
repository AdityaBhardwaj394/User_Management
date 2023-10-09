import React, { useState } from 'react';
import ImageWithProps from './image';

function TodoItem({ todo, deleteTodo, toggleComplete, updateTodo, fetchTodos }) {
    const [title, setTitle] = useState(todo.title);
    const [description,setdescription] = useState(todo.description);
    const [dueDate,setdueDate] = useState(todo.dueDate);
    const [priority, setPriority] = useState(todo.priority);
    const [isEditing, setIsEditing] = useState(false);
    const [completed,setcompleted]=useState(false)
  
    const handleUpdateClick = () => {
      updateTodo(todo._id, title,description,completed,dueDate, priority);
      setIsEditing(false);
      fetchTodos();
    };
  
    return (
      <li className={`todo-list-item ${todo.completed ? 'completed' : ''}`}>
        <span
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
          }}
          onClick={() => toggleComplete(todo._id)}
        >
          <strong>{todo.title}</strong>
        </span>
        <div>
          <ImageWithProps height="50px" width="50px"/>
          <p>Email: {todo.description}</p>
          <p>Mob no: {todo.dueDate}</p>
          <p>Last Modified: {new Date(todo.createdAt).toLocaleString()}</p>
          <p>UserType: {todo.priority}</p>
        </div>
        {isEditing ? (
          <div>
            <input
              type="text"
              placeholder="Updated Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Updated Email"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Updated mob"
              value={dueDate}
              onChange={(e) => setdueDate(e.target.value)}
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="DBA">DBA</option>
              <option value="Normal">Normal User</option>
              {/* <option value="low"></option> */}
            </select>
            <button className="update-button" onClick={handleUpdateClick}>
              Update
            </button>
          </div>
        ) : (
          <>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete-button" onClick={() => deleteTodo(todo._id)}>
              Delete
            </button>
          </>
        )}

    
      </li>
    );
  }

  export default TodoItem;