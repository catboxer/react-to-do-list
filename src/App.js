import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./components/List";
import Input from "./components/Input";

function App() {
  //state
  const [item, createNewItem] = useState({
    todo: "",
    id: uuidv4(),
    editItem: false,
  });
  const [list, createNewList] = useState([]);
  //functions

  function handleDelete(id) {
    createNewList(list.filter((e) => e.id !== id));
  }

  function handleEdit(id) {
    createNewList(list.filter((e) => e.id !== id));
    const selectedItem = list.find((e) => e.id === id);
    createNewItem({
      todo: selectedItem.todo,
      id: id,
      editItem: true,
    });
    console.log(list);
  }

  function clearList() {
    return createNewList([]);
  }

  function handleChange(e) {
    const newItem = e.target.value;
    createNewItem((prev) => {
      return {
        ...prev,
        todo: newItem,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    //add new item to list
    createNewList((prev) => {
      return [...prev, item];
    });
    // clear item from input field
    createNewItem({
      todo: "",
      id: uuidv4(),
      editItem: false,
    });
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-med-8 mt-5">
            <h3 className="text-capitalize text-center">Add Your Items Here</h3>
            <Input
              todo={item.todo}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              editItem={item.editItem}
            />
            <List
              list={list}
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
