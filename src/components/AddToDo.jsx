import { useState } from "react";

function AddToDo({ addTask }) {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTaskNameChange = (event) => {
    setTask(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddClick = () => {
    if (task && dueDate) {
      addTask({ name: task, dueDate: dueDate });
      setTask("");
      setDueDate("");
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <div className="container text-center">
      <div className="row">
        {/* Sr. No. column */}
        <div className="col-12 col-md-2 my-2">
          <div className="text-center">Sr. No.</div>
        </div>

        {/* Task Input column */}
        <div className="col-12 col-md-4 my-2">
          <input
            type="text"
            placeholder="Enter to do here"
            className="form-control"
            value={task}
            onChange={handleTaskNameChange}
          />
        </div>

        {/* Due Date column */}
        <div className="col-12 col-md-3 my-2">
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={handleDueDateChange}
          />
        </div>

        {/* Add button column */}
        <div className="col-12 col-md-3 my-2">
          <button
            type="button"
            className="btn btn-success w-100"
            onClick={handleAddClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
