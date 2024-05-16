import React, { useState, useRef, useEffect } from "react";
import "./css/AddTodo.css";

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Focus vào ô input khi component được mount
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle("");
      setError("");
      inputRef.current.focus(); // Focus lại vào ô input sau khi thêm công việc thành công
    } else {
      setError("Tên công việc không được để trống");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <form className="add-todo-form" onSubmit={handleSubmit}>
        <input
          className="add-todo-input"
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Thêm mới công việc"
        />
        <button className="add-todo-button" type="submit">
          Thêm
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </>
  );
};

export default AddTodo;
