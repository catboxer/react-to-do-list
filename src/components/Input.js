import React from "react";

export default function Input(props) {
  return (
    <div className="card card-body my-3">
      <form onSubmit={props.handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-info text-white">
              <i className="fas fa-tree" />
            </div>
          </div>
          <input
            type="text"
            className="form-control text capitalize"
            placeholder="add to your shit list"
            value={props.todo}
            id={props.id}
            onChange={props.handleChange}
          />
        </div>
        <button
          disabled={props.todo ? false : true}
          type="submit"
          className={
            props.editItem
              ? "btn btn-block btn-success mt-3 text-uppercase"
              : "btn btn-block btn-info mt-3 text-uppercase"
          }
          onClick={props.handleSubmit}
        >
          {props.editItem ? "edit it" : "add it"}
        </button>
      </form>
    </div>
  );
}
