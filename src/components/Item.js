import React from "react";

export default function Item({ id, todo, editItem, handleEdit, handleDelete }) {
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <h6>{todo}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success" onClick={() => handleEdit(id)}>
          <i className="fas fa-pen"></i>
        </span>
        <span className="mx-2 text-danger" onClick={() => handleDelete(id)}>
          <i className="fas fa-trash"></i>
        </span>
      </div>
    </li>
  );
}
