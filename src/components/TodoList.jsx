import React from "react";
import TodoItem from "./TodoItem";
import "./css/TodoList.css";

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="todo-list">
      {totalCount === 0 ? (
        <div className="no-todos">Chưa có công việc nào được thêm</div>
      ) : (
        <>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
          <div className="todo-summary">
            {completedCount === totalCount ? (
              //style={{color: #28a745}}
              <span>Tất cả công việc đã được hoàn thành</span>
            ) : (
              <span>
                Công việc đã hoàn thành: {completedCount}/{totalCount}
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TodoList;
