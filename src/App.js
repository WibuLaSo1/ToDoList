// import React, { useState } from 'react';
// import './App.scss';
// import TodoList from './components/TodoList';

// function App() {
//   const [todoList, setTodoList] = useState([
//     { id: 1, title: 'day la task 1' },
//     { id: 2, title: 'day la task 2' },
//     { id: 3, title: 'day la task 3' },
//   ]);
    
// function handleTodoClick(todo) {
//   console.log(todo);
//   const index = todoList.findIndex(x => x.id === todo.id);
//   if (index < 0) return;

//   const newTodoList = [...todoList];
//   newTodoList.splice(index, 1);
//   setTodoList(newTodoList)
// }
//   return (
//     <div className="app">
//       <h1>React TodoList</h1>
      
//       <TodoList todos={todoList} onTodoClick={handleTodoClick} />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';


function App() {
  
  const [todos, setTodos] = React.useState([
{
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);
  
    const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

    const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  function Todo({ todo, index, completeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}


  return (
<div className="app">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />  
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;