function ToDoItem({ toDoDate, toDoName, srNo, deleteTask }) {
  const handleDeleteTaskButton = () => {
    deleteTask(srNo);
  };

  return (
    <div className="row d-flex justify-content-between align-items-center m-2">
      <div className="col-1 text-center">{srNo}</div>{" "}
      <div className="col-5">
        <div>{toDoName}</div>
      </div>
      {/* Due Date Column */}
      <div className="col-4">
        <div>{toDoDate}</div>
      </div>
      {/* Delete Button Column */}
      <div className="col-2 text-center">
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDeleteTaskButton}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
