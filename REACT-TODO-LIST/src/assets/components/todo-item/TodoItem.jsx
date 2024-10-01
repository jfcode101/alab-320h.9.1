import { useState } from "react";

const TodoItem = ({ todo, dispatch }) => {
  // state to track editing — boolean
  const [isEditing, setIsEditing] = useState(false);
  // state to track edit value
  const [editVal, setEditVal] = useState("");

  // handle editing
  const handleEdit = () => {
    setIsEditing(true);
  };

  // save the use inputs
  const handleSave = () => {
    dispatch({ type: "EDIT_TODO", id: todo.id, title: editVal });
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
      />
      {isEditing ? (
        <input
          type="text"
          value={editVal}
          onChange={(e) => setEditVal(e.target.value)}
        />
      ) : (
        <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
      )}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button
            onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
            disabled={!todo.completed}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
