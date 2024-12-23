import React from "react";

export default function TodoCreate() {
  return (
    <div className="todo-create">
      <input type="text" className="todo-input" placeholder="Add todo..." />
      <button className="todo-create-button"> Create</button>
    </div>
  );
}
