import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoInitialState, TodoType } from "../types/Types";

const initialState: TodoInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos, action.payload];
    },
    remoweTodoById: (
      state: TodoInitialState,
      action: PayloadAction<number>
    ) => {
      state.todos = [
        ...state.todos.filter((todo: TodoType) => todo.id !== action.payload),
      ];
    },
    updateTodoById: (
      state: TodoInitialState,
      action: PayloadAction<TodoType>
    ) => {
      state.todos = [
        ...state.todos.map((todo: TodoType) =>
          todo.id !== action.payload.id ? todo : action.payload
        ),
      ];
    },
  },
});

export const { createTodo, remoweTodoById, updateTodoById } = todoSlice.actions;

export default todoSlice.reducer;
