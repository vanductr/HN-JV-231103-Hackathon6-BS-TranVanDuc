import React from "react";
import "./css/TodoItem.css";

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.title}</span>
      <button className="edit-button" onClick={() => onEdit(todo)}>
        Edit
      </button>
      <button className="delete-button" onClick={() => onDelete(todo)}>
        Xoá
      </button>
    </div>
  );
};

export default TodoItem;
