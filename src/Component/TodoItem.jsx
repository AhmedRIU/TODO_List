import { useState } from "react";
import tick from "../assets/tick.png";
import delete_icon from "../assets/delete.png";
import edit_icon from "../assets/edit.png";

const TodoItem = ({ text, ID, isComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleSave = () => {
    editTodo(ID, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center my-3.5 gap-1">
      <div className="flex flex-1 items-center cursor-pointer">
        <img src={tick} alt="" />
        {isEditing ? (
          <input
            className="bg-gray-100 rounded px-2 py-1 text-slate-700 text-[17px]"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
          />
        ) : (
          <p className="text-slate-700 ml-4 text-[17px]">{text}</p>
        )}
      </div>
      <img
        onClick={() => deleteTodo(ID)}
        src={delete_icon}
        alt="delete"
        className="w-3.5 cursor-pointer"
      />
      {isEditing ? (
        <button
          onClick={handleSave}
          className="ml-2 bg-orange-600 text-white rounded-full px-2 py-1 text-lg"
        >
          Save
        </button>
      ) : (
        <img
          onClick={() => setIsEditing(true)}
          src={edit_icon}
          alt="edit"
          className="w-3.5 cursor-pointer"
        />
      )}
    </div>
  );
};

export default TodoItem;
