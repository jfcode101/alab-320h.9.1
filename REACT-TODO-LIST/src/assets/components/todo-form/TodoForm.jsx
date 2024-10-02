import { useState } from "react";
import "./form.css";

function TodoForm({ dispatch }) {
  // state to store the input value
  const [inputVal, setInputVal] = useState("");

  // function to handle form submission
  const handleSubmit = (e) => {
    // prevent auto submission
    e.preventDefault();
    if (inputVal.trim()) {
      dispatch({ type: "ADD_TODO", title: inputVal });
      // clear the input fiel
      setInputVal("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cls-form">
      <input
        type="text"
        value={inputVal}
        // add an onchange event listener
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Add a task to you Todo list"
        className="cls-frm-input"
      />
      <button type="submit" className="btn-submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
