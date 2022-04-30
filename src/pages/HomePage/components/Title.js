import React from "react";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <div>
      <h1 className="title">Todo List</h1>
      <Link to="/list">
        <div className="btn">New Todo</div>
      </Link>
    </div>
  );
};
export default Title;
