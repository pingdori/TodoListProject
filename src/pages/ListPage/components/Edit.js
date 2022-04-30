import { useState } from "react";
import { v4 } from "uuid";
const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }
  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }
  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }
  function addItem() {
    add(function (prevData) {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
  }
  return (
    <div>
      <h1>Todo List</h1>
      <p>Note</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>Due date</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>Due time</p>
      <input type="time" value={time} onChange={timeChange} />
      <button
        value={time}
        onChange={timeChange}
        onClick={addItem}
        className="add"
      >
        New Todo
      </button>
    </div>
  );
};

export default Edit;
