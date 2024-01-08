import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { formatDate } from "../utils/util.js";
import { TasksContext } from "../main.jsx";

const TaskItem = ({ title, dueDate, id, deleteTask, priority }) => {
  const { handleEdit } = useContext(TasksContext);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const editIcon = <i class="fa-solid fa-pen"></i>;
  const deleteIcon = <i class="fa-solid fa-trash"></i>;

  const color =
    priority === "high"
      ? "red"
      : priority === "medium"
      ? "orange"
      : priority === "low"
      ? "green"
      : "";

  return (
    <div
      ref={drag}
      className="taskItem"
      style={{
        opacity: isDragging ? 0.4 : 1,
        cursor: "move",
        transform: isDragging ? "scale(0.8)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div className="taskItem--heading">
        <h3>{title}</h3>
        <div>
          <div className="priority--div">
            <h6>Priority: </h6>

            <span
              style={{ backgroundColor: color }}
              className="priority-icon"
            ></span>
          </div>
          <h6 className="dueDate">Due Date : {formatDate(dueDate)}</h6>
        </div>
      </div>
      <p>
        Description : <Link to={`/${id}`}>Click here</Link>{" "}
      </p>
      <span onClick={() => handleEdit(id)} className="editIcon">
        {editIcon}
      </span>
      <span onClick={() => deleteTask(id)} className="deleteIcon">
        {deleteIcon}
      </span>
    </div>
  );
};

export default TaskItem;
