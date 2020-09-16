import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./components/ToDoInput";
import List from "./components/ToDoList";

function App() {
  const [list, makeList] = useState({
    items: [
      { id: 1, title: "make list" },
      { id: 2, title: "enter shit" },
      { id: 3, title: "do stuff" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  });
  function handleChange(e) {
    console.log("handle change");
  }
  function handleSubmit(e) {
    console.log("handle submit");
  }
  function handleDelete(id) {
    console.log(`handle delete ${id}`);
  }
  function handleEdit(id) {
    console.log(`handle edit ${id}`);
  }
  function clearList() {
    console.log("clearList");
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-med-8 mt-5">
            <h3 className="text-capitalize text-center">Your Shit List</h3>
            {console.log(list)};
            <Input
              item={list.item}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleEdit={handleEdit}
            />
            <List
              item={list.item}
              clearList={clearList}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
