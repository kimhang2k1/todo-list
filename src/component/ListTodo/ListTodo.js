import Item from "./Item/Item";
import React from "react";

function ListTodo({ todoList, removeTodo, handleComplete, deleteTodo }) {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <Item
            todo={todo}
            key={todo.id}
            removeTodo={removeTodo}
            handleComplete={handleComplete}
            deleteTodo={deleteTodo}
          />
        );
      })}
      <div className="btn-clear-complete">
        <button onClick={handleComplete}>Clear Complete</button>
      </div>
    </div>
  );
}

export default ListTodo;
