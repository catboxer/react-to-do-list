import React from "react";

export default function ToDoInput({
  item,
  handleChange,
  handleSubmit,
  editItem,
}) {
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-info text-white">
              <i className="fas fa-tree" />
            </div>
          </div>
          <input
            type="text"
            className="form-control text capitalize"
            placeholder="add todo item"
            value={item}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-block btn-info mt-3 text-uppercase"
        >
          add it
        </button>
      </form>
    </div>
  );
}
