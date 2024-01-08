import { useDrop } from "react-dnd";
import { useContext } from "react";
import { TasksContext } from "../context/tasksContext";
import TasksList from "./TasksList";

const Categories = () => {
  const { tasks, setTasks } = useContext(TasksContext);

  const [{ isOver: isOverAdded }, dropAdded] = useDrop(
    () => ({
      accept: "TASK",
      drop: (item) => addTaskFn(item.id, "added"),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [tasks]
  );

  const [{ isOver: isOverStarted }, dropStarted] = useDrop(
    () => ({
      accept: "TASK",
      drop: (item) => addTaskFn(item.id, "started"),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [tasks]
  );

  const [{ isOver: isOverCompleted }, dropCompleted] = useDrop(
    () => ({
      accept: "TASK",
      drop: (item) => addTaskFn(item.id, "completed"),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [tasks]
  );

  const addTaskFn = (id, category) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          category,
        };
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
    localStorage.setItem("allTasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  const selectPriority = (e, id) => {
    const priority = e.target.value;

    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            priority,
          };
        } else {
          return task;
        }
      })
    );
  };

  const addedTasks = tasks.filter((task) => task.category === "added");

  const startedTasks = tasks.filter((task) => task.category === "started");

  const completedTasks = tasks.filter((task) => task.category === "completed");

  return (
    <div className="categories ">
      <div className="added" ref={dropAdded}>
        <h4>Added</h4>
        {addedTasks.length > 0 ? (
          <TasksList
            tasks={addedTasks}
            deleteTask={deleteTask}
            selectPriority={selectPriority}
          />
        ) : (
          <h3>No task here yet.</h3>
        )}
      </div>
      <div className="started" ref={dropStarted}>
        <h4>Started</h4>
        {startedTasks.length > 0 ? (
          <TasksList
            tasks={startedTasks}
            deleteTask={deleteTask}
            selectPriority={selectPriority}
          />
        ) : (
          <h3>No task here yet.</h3>
        )}
      </div>
      <div className="completed" ref={dropCompleted}>
        <h4>Completed</h4>
        {completedTasks.length > 0 ? (
          <TasksList
            tasks={completedTasks}
            deleteTask={deleteTask}
            selectPriority={selectPriority}
          />
        ) : (
          <h3>No task here yet.</h3>
        )}
      </div>
    </div>
  );
};

export default Categories;
