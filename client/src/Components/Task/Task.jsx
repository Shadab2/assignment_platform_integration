import React from "react";
import "./Task.css";
import { FiCheckCircle } from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";

function Task({ active, desc, title }) {
  return (
    <div className={`todo ${active ? "active" : "non-active"}`}>
      {active ? (
        <BsPencilSquare color="purple" fontSize={30} />
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
