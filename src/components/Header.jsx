import { useContext } from "react";
import { Link } from "react-router-dom";
import { TasksContext } from "../context/tasksContext";
const Header = () => {
  const { setIsModalOpen } = useContext(TasksContext);
  const handleAddTaskBtn = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="header">
      <h2>AchievoApp</h2>
      <button onClick={handleAddTaskBtn} className="addTask--btn">
        <Link to="/"> Add task </Link>
      </button>
    </div>
  );
};

export default Header;
