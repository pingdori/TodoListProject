import Item from "./Item.js";
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { contextData } from "..";
import { getDb } from "../../../utils/firebase";
//index傳入listData, deleteData

const List = function () {
  const data = useContext(contextData);
  useEffect(() => {
    getDb(data.setData);
  }, []);

  return (
    <div className="list">
      {data.data.map((item) => {
        const { note, id } = item;
        return <Item key={id} id={id} note={note} />;
      })}
      <div className="listLink">
        <Link to="/" className="homepage">
          Back
        </Link>
      </div>
    </div>
  );
};

export default List;
