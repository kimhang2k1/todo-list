import { useState } from "react";
import InputTodo from "./component/InputTodo/InputTodo";
import ListTodo from "./component/ListTodo/ListTodo";
import TitleTodo from "./component/TitleTodo/TitleTodo";
import data from "./data.json";

function App() {
  const [todoList, setTodoList] = useState(data);

  const addTodo = (input) => {
    let copy = [...todoList];
    copy = [...copy, { id: todoList.length + 1, task: input, complete: false }];
    setTodoList(copy);
    console.log(copy);
  };
  const removeTodo = (id) => {
    let mapped = todoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodoList(mapped);
  };
  const handleComplete = () => {
    let filtered = todoList.filter((task) => {
      return !task.complete;
    });
    setTodoList(filtered);
  };

  const deleteTodo = (id) => {
    let updateItems = todoList.filter((task) => {
      return task.id !== Number(id);
    });

    setTodoList(updateItems);
  };
  return (
    <div className="todo-list-app">
      <div className="nav-todo-list">
        <TitleTodo />
        <div className="work-todo">
          <InputTodo addTodo={addTodo} />
          <ListTodo
            todoList={todoList}
            removeTodo={removeTodo}
            handleComplete={handleComplete}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
