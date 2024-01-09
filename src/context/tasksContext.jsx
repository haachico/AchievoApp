import { createContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { format } from "date-fns";
export const TasksContext = createContext();

const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [taskItem, setTaskItem] = useState({
    taskTitle: "",
    taskText: "",
    taskPriority: "",
    taskDueDate: null,
  });

  const [editTaskItem, setEditTaskItem] = useState();

  const [isEditable, setIsEditable] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem("allTasks");

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskItem({
      taskTitle: "",
      taskText: "",
      taskPriority: "",
      taskDueDate: null,
    });
    setEditTaskItem("");
    setIsEditable(false);
  };

  const handleDueDateChange = (date) => {
    if (isEditable) {
      setEditTaskItem((prevState) => {
        return {
          ...prevState,
          dueDate: date,
        };
      });
    } else {
      setTaskItem((prevState) => {
        return {
          ...prevState,
          taskDueDate: date,
        };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (isEditable) {
      setEditTaskItem((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    } else {
      setTaskItem((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }
  };

  const handleSubmit = () => {
    if (isEditable) {
      setTasks((prevState) =>
        prevState.map((task) => {
          if (task.id === editTaskItem.id) {
            return {
              ...task,
              title: editTaskItem.title,
              description: editTaskItem.description,
              dueDate: editTaskItem.dueDate,
              priority: editTaskItem.priority,
            };
          } else {
            return task;
          }
        })
      );

      setEditTaskItem("");

      setIsEditable(false);
    } else {
      if (taskItem.taskText === "") return;
      const newTask = {
        id: nanoid(),
        title: taskItem.taskTitle,
        description: taskItem.taskText,
        category: "added",
        dueDate: taskItem.taskDueDate,
        priority: taskItem.taskPriority,
      };

      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);

      localStorage.setItem("allTasks", JSON.stringify(updatedTasks));

      setTaskItem({
        taskTitle: "",
        taskText: "",
        taskDueDate: null,
        taskPriority: "",
      });
    }

    setIsModalOpen(false);
  };

  const handleEdit = (id) => {
    setIsEditable(true);
    setIsModalOpen(true);

    const toBeEditedTask = tasks.find((task) => task.id == id);

    setEditTaskItem(toBeEditedTask);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        taskItem,
        editTaskItem,
        isModalOpen,
        setIsModalOpen,
        openModal,
        closeModal,
        handleChange,
        handleDueDateChange,
        handleSubmit,
        handleEdit,
        isEditable,
        setIsEditable,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
