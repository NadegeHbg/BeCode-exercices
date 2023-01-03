
import './App.css';
import React, { useState } from 'react';

const Title = () => {
  return <h1 className='App-Title'>My Todo App</h1>;

}
const Form = () => {
  return (
    <form>
      <div className='displayFlex'>
        <input type='text' placeholder='Type a new todo' />
        <input type='submit' />
      </div>
    </form>)
}

const SubTitle = () => {
  return <h2>Todos</h2>
}

const ToDoList = () => {
  const initialTodos = [{ task: "My first todo", checked: false }, { task: "Forgot this one", checked: false }, { task: "My second todo", checked: false }, { task: "One more", checked: false },];
  const [todos, setTodos] = useState(initialTodos);

  const handleCheckboxChange = (index) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return {
            ...todo,
            checked: !todo.checked
          };
        }
        return todo;
      })
    );
  };

  return (
    <ul>
      {initialTodos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => handleCheckboxChange(index)}
          /> {todo.task}
        </li>
      ))}
    </ul>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>

      <main className="App-body">
        <Form />
        <SubTitle />
        <ToDoList />
      </main>
    </div>
  );
}

export default App;