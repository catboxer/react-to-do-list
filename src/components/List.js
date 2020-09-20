import React from "react";
import Item from "./Item";

export default function List(props) {
  return (
    <div>
      <h3 className="text-capitalize text-center">Shit List</h3>

      {props.list.map((todoitem) => {
        return (
          <Item
            id={todoitem.id}
            todo={todoitem.todo}
            editItem={todoitem.editItem}
            key={todoitem.id}
            handleEdit={props.handleEdit}
            handleDelete={props.handleDelete}
          />
        );
      })}
      <button
        type="button"
        className="btn btn-danger btn-block text-uppercase mt-5"
        onClick={props.clearList}
      >
        Clear Shit List
      </button>
    </div>
  );
}
