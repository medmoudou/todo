import './index.css';
import Header from './components/Header.js';
import Todo from './components/Todo.js';
import { useState } from 'react';

function App() {
  const todolist = []
  const [todos, setTodos] = useState(todolist);
  const [text, setText] = useState('');

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const id = Math.floor(Math.random() * 10000) + 1
    const newTodo = { id, ...text }
    setTodos([...todos, { id: id, text: text }])
    console.log(text)
    setText('')
  }

  return (
    <div className="app" >
      <Header />
      <div className="addcontainer">
        <form onSubmit={onSubmit}>
          <input
            className="inputtext"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input><br></br><br></br>
          <input className="btn" type="submit" value="Save to list"></input>
        </form>
      </div>
      <div className="container">
        <ul>
          {todos.map((todo) =>
            <Todo key={todo.id} id={todo.id} value={todo.text} onDelete={deleteTodo}></Todo>
          )}
        </ul>
      </div>
    </div>
  );
}


export default App;
