import { useState } from 'react';
import './App.css';

function App() {
  const [todoinput, updateinput] = useState("test");
  const [todolist, updatetodolist] = useState([
    { id: 1, task: 'learn react' },
    { id: 2, task: 'learn angular' },
    { id: 3, task: 'learn web development' },
  ]);
  const [nextid, setNextid] = useState(4); // Store nextid in state

  function addnewtodo() {
    if (todoinput === "") {
      alert("add some task");
    } else {
      let newtodos = [
        ...todolist,
        {
          id: nextid,
          task: todoinput,
        },
      ];
      updatetodolist(newtodos);
      updateinput("");
      setNextid(nextid + 1); // Increment nextid correctly
    }
  }

  function deletetodo(id) {
    let updatedtodos = todolist.filter((todo) => todo.id !== id);
    updatetodolist(updatedtodos);
  }

  return (
    <div className="container mt-5 w-50">
      <h1 className="text-center">Todo App Using React</h1>
      <div className="input-group">
        <input
          className="form-control"
          onChange={(e) => {
            let task = e.target.value;
            updateinput(task);
          }}
          type="text"
          value={todoinput}
        />
        <button
          onClick={() => {
            addnewtodo();
          }}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
      <ul className="list-group mt-4">
        {todolist.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <p>{todo.task}</p>
            <button
              onClick={() => {
                deletetodo(todo.id);
              }}
              className="btn"
            >
              ✂
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
