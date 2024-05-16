import React from "react";
import "./css/ConfirmDialog.css";

const ConfirmDialog = ({ todo, onConfirm, onCancel }) => {
  return (
    <div className="confirm-dialog">
      <div className="confirm-dialog-content">
        <p>Bạn có muốn xoá công việc "{todo.title}"?</p>
        <div className="confirm-dialog-buttons">
          <button onClick={() => onConfirm(todo.id)}>Xác nhận</button>
          <button onClick={onCancel}>Huỷ</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
