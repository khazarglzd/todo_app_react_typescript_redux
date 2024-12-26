import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

const Todo = () => {
  return (
    <div className="todo">
      <div>I m the first todo</div>
      <div className="todo-icons">
        <FaRegTrashCan className="trash-icon" />
        <FaRegEdit className="edit-icon" />
      </div>
    </div>
  );
};

export default Todo;
