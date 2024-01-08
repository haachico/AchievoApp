import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/util.js";
import { TasksContext } from "../main.jsx";

const TaskDetails = () => {
  const { tasks } = useContext(TasksContext);

  const { id } = useParams();

  const selectedTask = tasks.find((task) => task.id === id);

  console.log(selectedTask, "SELECTED");

  const { title, description, dueDate, priority } = selectedTask;

  return (
    <div className="details--page">
      <Link to="/">
        <span style={{ marginRight: "5px" }}>
          <i class="fa-solid fa-arrow-left"></i>
        </span>
        Back
      </Link>
      <div className="details--div">
        <h2>{title} </h2>
        {/* <h3>
        <strong>Title:</strong> {title}
      </h3> */}
        <p>
          <strong>Description :</strong> {description}
        </p>
        <p>
          <strong>Due Date :</strong> {formatDate(dueDate)}
        </p>
        <p>
          <strong>Priority :</strong>{" "}
          {priority === "high"
            ? "High"
            : priority === "low"
            ? "Low"
            : priority === "medium"
            ? "Medium"
            : ""}
        </p>
      </div>
    </div>
  );
};

export default TaskDetails;
