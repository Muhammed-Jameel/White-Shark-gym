import React from "react";

const Home = () => {
  const taskList = document.getElementById("task-list");
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");

  function addTask() {
    if (taskInput.value === "") {
      alert("Please enter a task.");
      return;
    }

    const newTask = document.createElement("li");
    newTask.innerHTML = taskInput.value;
    taskList.appendChild(newTask);
    taskInput.value = "";
  }

  addTaskBtn.addEventListener("click", addTask);

  return (
    <>
      <div className="nav-bar-container">
        <div className="nav-bar-logo">
          <h1>ToDo</h1>
        </div>
        <div className="add-button">
          <button className="add-task-btn" id="add-task-btn"></button>
          <input type="text" id="task-input" />
        </div>
      </div>

      <div className="labels-container">
        <div className="label"></div>
        <div className="label"></div>
        <div className="label"></div>
        <div className="label"></div>
        <div className="labels-control"></div>
      </div>

      <div className="tasks-container" id="task-list">
        <div className="task"></div>
      </div>
    </>
  );
};

export default Home;
