import React from 'react';

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className='todo-item'>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}

        className='checkbox checkmark'
      />
      
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} className='todo-text'>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} className='delete-button'>Delete</button>
    </div>
  );
}

export default TodoItem;
