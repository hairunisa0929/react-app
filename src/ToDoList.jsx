import { useState } from "react";

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 5; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialTodos;
}

function ToDoList() {
  const [todos, setTodos] = useState(createInitialTodos());

  function addToDo() {
    const duplicateToDo = [...todos];

    const newToDo = {
      id: todos.length,
      text: "New To Do Item",
    };
    duplicateToDo.push(newToDo);
    setTodos(duplicateToDo);
  }

  return (
    <div>
      <button
        className="rounded-lg bg-sky-400 p-2 text-white"
        onClick={addToDo}
      >
        Add Item
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
