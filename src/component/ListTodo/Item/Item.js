import React from "react";
function Item({ todo, removeTodo, deleteTodo }) {
  const handleClick = (e) => {
    removeTodo(e.target.id);
  };
  const handleDelete = (e) => {
    deleteTodo(e.target.id);
  };
  return (
    <div className="item-todo" key={todo.id + todo.task}>
      <div className="content-todo-list ">
        <span
          id={todo.id}
          onClick={handleClick}
          className={todo.complete ? "strike" : "todo"}
        >
          {todo.task}
        </span>
      </div>
      <div className="icon-todo-list">
        <div className="icon-edit-todo">
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <div className="icon-delete-todo">
          <i
            className="fa-solid fa-trash-can"
            id={todo.id}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Item;
