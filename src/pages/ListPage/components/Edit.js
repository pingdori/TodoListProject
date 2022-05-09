import React, { useContext } from "react";
import { contextData } from "..";
import { v4 } from "uuid";
import { addDb, getDb } from "../../../utils/firebase";

const Edit = () => {
  const data = useContext(contextData);
  function noteChange(e) {
    data.setNote(e.target.value);
  }

  //要渲染的資料
  function addItem() {
    const id = v4();
    addDb(id, data.note);
    data.setNote("");
    getDb(data.setData);
    return [
      {
        id,
        note: data.note,
      },
      // ...prevData, //解構語法
    ];
  }
  //下放資料
  return (
    <div>
      <h1>Todo List</h1>
      <p>Note</p>
      <input type="text" value={data.note} onChange={noteChange} />
      <button onClick={addItem} className="add">
        New Todo
      </button>
    </div>
  );
};

export default Edit;
