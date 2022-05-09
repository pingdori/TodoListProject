import React, { useState } from "react";
import Edit from "./components/Edit.js";
import List from "./components/List.js";
import "./index.css";

const contextData = React.createContext();
const Home = () => {
  const [data, setData] = useState([]);
  const [note, setNote] = useState("");
  return (
    <div className="app">
      <contextData.Provider
        value={{
          data: data,
          setData: setData,
          note: note,
          setNote: setNote,
        }}
      >
        <Edit />
        <List />
      </contextData.Provider>
    </div>
  );
};

export { Home as default, contextData };
