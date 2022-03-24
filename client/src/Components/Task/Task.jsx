import React from "react";
import "./Task.css";
import { FiCheckCircle } from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";

function Task({ id, active, desc, title, updateTodo }) {
  return (
    <div className={`todo ${active ? "active" : "non-active"}`}>
      {active ? (
        <BsPencilSquare
          color="purple"
          fontSize={30}
          onClick={() => updateTodo(id, active)}
        />
      ) : (
        <FiCheckCircle color="green" fontSize={30} />
      )}
      <div className="todo-wrapper">
        <h2 className="todo-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Task;
