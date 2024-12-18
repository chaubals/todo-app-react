import ToDoItem from "./ToDoItem";

function ToDoItems({ taskArray, deleteTask }) {
  return (
    <div className="items-container">
      {taskArray.map((item) => (
        <ToDoItem
          key={item.name}
          toDoDate={item.dueDate}
          toDoName={item.name}
          srNo={item.srNo}
          deleteTask={deleteTask}
        ></ToDoItem>
      ))}
    </div>
  );
}

export default ToDoItems;
