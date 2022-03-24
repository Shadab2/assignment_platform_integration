import React, { useContext, useRef, useState, useEffect } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import "./Dashboard.css";
import Task from "../../Components/Task/Task";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import TopBar from "../Topbar/TopBar";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const title = useRef();
  const desc = useRef();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("/todo/" + user._id);
        setTodos(res.data.sort().reverse());
      } catch (e) {
        console.log(e);
      }
    };
    fetchTodos();
  }, [user, todos]);

  const handleSubmit = async () => {
    const data = {
      title: title.current.value,
      desc: desc.current.value,
      userId: user._id,
    };
    try {
      await axios.post("/todo", data);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const updateTodo = async (id, active) => {
    try {
      await axios.put("/todo/" + id, { userId: user._id, active: !active });
      alert("Updated Successfully");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <TopBar />
      <div className="dashboard">
        <h2 className="dashboard-user">Welcome, {user.username}</h2>
        <div className="dashboard-wrapper">
          <div className="todo-list">
            {todos.length > 0 ? (
              <h1>Todo's</h1>
            ) : (
              <span>There are no todo's left</span>
            )}
            {todos.map((todo) => {
              return (
                <Task
                  title={todo.title}
                  desc={todo.desc}
                  active={todo.active}
                  key={todo._id}
                  updateTodo={updateTodo}
                  id={todo._id}
                />
              );
            })}
          </div>
          <div className="create-todo">
            <form onSubmit={handleSubmit} className="login-form">
              <div className="create-todo-title">
                <BsPlusCircleFill color="#0635f1" size={30} className="icon" />
                <span
                  style={{ marginLeft: "10px" }}
                >{`What's in your mind ${user.username} ?`}</span>
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  min={5}
                  required
                  className="form-input"
                  ref={title}
                  placeholder="Enter a todo "
                />
              </div>
              <div className="input-wrapper">
                <textarea
                  type="text"
                  required
                  className="form-input"
                  ref={desc}
                  placeholder="Descripton"
                />
              </div>
              <button className="submit-button">Add Todo</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
