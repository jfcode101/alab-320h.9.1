import React from "react";
import TodoItem from "../todo-item/TodoItem";

function TodoList({ todos, dispatch }) {
  return (
    <ul className="cl-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}

export default TodoList;
