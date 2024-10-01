import { useState } from "react";

function TodoForm({ dispatch }) {
  // state to store the input value
  const [inputVal, setVal] = useState();

  // function to handle form submission
  const handleSubmit = (e) => {};

  return (
    <form className="cls-form">
      <input type="text" value="" placeholder="What do you need to do " />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
