import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoType } from "../types/Types";
import { createTodo } from "../redux/todo-slice";

export default function TodoCreate() {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("Add some Todo");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 999999),
      content: newTodo,
    };

    dispatch(createTodo(payload));
    setNewTodo("");
    console.log("added");
  };

  return (
    <div className="todo-create">
      <input
        type="text"
        className="todo-input"
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        placeholder="Add todo..."
      />
      <button onClick={handleCreateTodo} className="todo-create-button">
        {" "}
        Create
      </button>
    </div>
  );
}
