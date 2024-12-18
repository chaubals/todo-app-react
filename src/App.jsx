import { useState, useEffect } from "react";
import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import ToDoItems from "./components/ToDoItems";

function App() {
  // Load taskArray from localStorage or use default tasks
  const loadTasksFromStorage = () => {
    const storedTasks = localStorage.getItem("taskArray");
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  const [taskArray, setTaskArray] = useState(loadTasksFromStorage());

  //Function to sort tasks by due date
  const sortTasksByDate = (tasks) => {
    return tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  };

  // Function to add a new task
  const addTask = (newTask) => {
    const newSrNo = taskArray.length + 1; // Increment serial number based on taskArray length
    const updatedTasks = [...taskArray, { ...newTask, srNo: newSrNo }];
    const sortedTasks = sortTasksByDate(updatedTasks);
    setTaskArray(sortedTasks);
    localStorage.setItem("taskArray", JSON.stringify(updatedTasks)); // Save tasks to localStorage
  };

  // Function to delete a task
  const deleteTask = (srNo) => {
    const updatedTasks = taskArray.filter((task) => task.srNo !== srNo);
    //Re-adjust serial numbers after deletion
    const reIndexedTasks = updatedTasks.map((task, index) => ({
      ...task,
      srNo: index + 1,
    }));
    //Sort tasks after deletion
    const sortedTasks = sortTasksByDate(reIndexedTasks);
    setTaskArray(sortedTasks);
    localStorage.setItem("taskArray", JSON.stringify(sortedTasks)); // Save updated tasks to localStorage
  };

  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddToDo addTask={addTask} />
        <div className="items-container">
          <ToDoItems taskArray={taskArray} deleteTask={deleteTask} />
        </div>
      </center>
    </div>
  );
}

export default App;
