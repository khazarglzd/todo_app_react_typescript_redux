import React, { useState } from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { remoweTodoById, updateTodoById } from "../redux/todo-slice";

interface TodoProps {
  todoProps: TodoType;
}

const Todo = ({ todoProps }: TodoProps) => {
  const { id, content } = todoProps;

  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const dispatch = useDispatch();

  const handleRemoweTodo = () => {
    dispatch(remoweTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodoById(payload));
    setEditable(false);
  };

  return (
    <div className="todo">
      {editable ? (
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
          value={newTodo}
        />
      ) : (
        <div>{content}</div>
      )}
      <div className="todo-icons">
        <FaRegTrashCan onClick={handleRemoweTodo} className="trash-icon" />
        {editable ? (
          <FaRegCheckSquare className="check-icon" onClick={handleUpdateTodo} />
        ) : (
          <FaRegEdit onClick={() => setEditable(true)} className="edit-icon" />
        )}
      </div>
    </div>
  );
};

export default Todo;
