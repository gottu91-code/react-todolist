import { useRef, useState } from "react"
import { TodoList } from "./TodoList"

export const App = () => {
  const [todos, setTodos] = useState([]);

  const inputElement = useRef();

  const addTodo = () => {
    const todo = inputElement.current.value;
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    inputElement.current.value = '';
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={addTodo}>追加</button>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}