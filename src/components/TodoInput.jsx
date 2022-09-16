import React, { useState } from "react";
import { addTodo } from "../Redux/Action";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";

function TodoInput() {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  return (
    <div>
      <div className="row m-2">

        <h1 className= "d flex mt-5 mb-5 mx-5 ms-5" style={{ color: "brown" }}> To do List </h1>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="col form-control" />
        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: uuid(),
                name: name,
              })
            );
            setName("");
          }}
          className="btn btn-primary mx-2"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
