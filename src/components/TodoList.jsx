import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  let todoList = useSelector((state) => state);

  return (
    <div className="my-4">
      {todoList.map((todo) => {
        return <TodoItem key={todoList.id} todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
