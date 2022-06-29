import { useState } from "react";

function InputTodo({ addTodo }) {
  const [input, setInput] = useState("");
  const changeInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <div className="input-todo">
      <input
        type="text"
        value={input}
        placeholder="add your new todo"
        onChange={changeInput}
      />
      <button type="submit" onClick={handleSubmit}>
        +
      </button>
    </div>
  );
}

export default InputTodo;
