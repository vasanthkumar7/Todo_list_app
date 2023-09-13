import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {



  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      // Call your function here
      handleAddTodo();
    }
  };



 




  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false, // Initialize as not completed
    };
    setTodos([...todos, newTodo]);
    setText('');
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className='add-todo'>
       
        <input
          type="text"
          className=''
          placeholder="Enter a new task"
          value={text}
          onChange={(e) => setText(e.target.value)}

          onKeyUp={handleKeyUp}
        />
        <button onClick={handleAddTodo}>Add</button>


        
       
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onToggle={handleToggleTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
