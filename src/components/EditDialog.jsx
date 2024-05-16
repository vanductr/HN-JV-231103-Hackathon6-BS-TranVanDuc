import React, { useState } from "react";
import "./css/EditDialog.css";

const EditDialog = ({ todo, onSave, onCancel }) => {
  const [newTitle, setNewTitle] = useState(todo.title);
  const [error, setError] = useState("");

  const handleSave = () => {
    if (newTitle.trim()) {
      onSave(todo.id, newTitle);
      setError("");
    } else {
      setError("Tên công việc không được để trống");
    }
  };

  return (
    <div className="edit-dialog">
      <div className="edit-dialog-content">
        <p>Chỉnh sửa công việc</p>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <div className="edit-dialog-buttons">
          <button onClick={handleSave}>Lưu</button>
          <button onClick={onCancel}>Huỷ</button>
        </div>
      </div>
    </div>
  );
};

export default EditDialog;
