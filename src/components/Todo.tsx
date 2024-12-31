import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

interface TodoProps {
  todoProps: TodoType;
}

const Todo = ({ todoProps }: TodoProps) => {
  const { id, content } = todoProps;

  return (
    <div className="todo">
      <div>{content}</div>
      <div className="todo-icons">
        <FaRegTrashCan className="trash-icon" />
        <FaRegEdit className="edit-icon" />
      </div>
    </div>
  );
};

export default Todo;
