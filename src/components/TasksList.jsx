import TaskItem from "./TaskItem";

const TasksList = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
          id={task.id}
          priority={task.priority}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TasksList;
