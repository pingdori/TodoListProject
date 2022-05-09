import React, { useContext } from "react";
import { contextData } from "..";
import { delDb } from "../../../utils/firebase";
const Item = ({ id, note }) => {
  const data = useContext(contextData);

  function deleteItem() {
    data.setData((prev) => {
      const delData = prev.filter((item) => {
        return item.id !== id;
      });
      return delData;
    });
    delDb(id);
  }
  return (
    <div className="item">
      <div id={id}>
        <p>{note}</p>
      </div>
      <button onClick={deleteItem} className="remove">
        Delete
      </button>
    </div>
  );
};

export default Item;
