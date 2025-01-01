import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { remoweTodoById } from "../redux/todo-slice";

interface TodoProps {
  todoProps: TodoType;
}

const Todo = ({ todoProps }: TodoProps) => {
  const { id, content } = todoProps;

  const dispatch = useDispatch();

  const handleRemoweTodo = () => {
    dispatch(remoweTodoById(id));
  };

  return (
    <div className="todo">
      <div>{content}</div>
      <div className="todo-icons">
        <FaRegTrashCan onClick={handleRemoweTodo} className="trash-icon" />
        <FaRegEdit className="edit-icon" />
      </div>
    </div>
  );
};

export default Todo;
