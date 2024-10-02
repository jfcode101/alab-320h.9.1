import { useState } from "react";
import "./item.css";

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
    <li className="cls-item">
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
          <button onClick={handleEdit} className="btn-item btn-edit">
            Edit
          </button>
          <button
            onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
            disabled={!todo.completed}
            className="btn-item btn-delete"
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
