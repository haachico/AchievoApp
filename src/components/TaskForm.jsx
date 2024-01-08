import { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "./Modal";
import { TasksContext } from "../main";

const TaskForm = () => {
  const {
    taskItem,
    isModalOpen,
    closeModal,
    handleChange,
    handleDueDateChange,
    handleSubmit,
    isEditable,
    editTaskItem,
  } = useContext(TasksContext);

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h3 className="heading">{`${isEditable ? "Edit" : "Add"} a task.`}</h3>
        <div className="task--modal">
          <label htmlFor="title">Title: {""} </label>
          <input
            type="text"
            id="title"
            name={isEditable ? "title" : "taskTitle"}
            value={isEditable ? editTaskItem.title : taskItem.taskTitle}
            onChange={handleChange}
            placeholder="Add a title"
          />

          <label htmlFor="description">Description : {""} </label>
          <textarea
            id="description"
            name={isEditable ? "description" : "taskText"}
            value={isEditable ? editTaskItem.description : taskItem.taskText}
            type="text"
            onChange={handleChange}
            placeholder="Add a description"
          />

          <label>Due date : {""}</label>
          <DatePicker
            selected={
              isEditable
                ? (editTaskItem.dueDate && new Date(editTaskItem.dueDate)) ||
                  null
                : (taskItem.taskDueDate && new Date(taskItem.taskDueDate)) ||
                  null
            }
            onChange={handleDueDateChange}
            placeholderText="Select a date"
          />
          <label>Priority : {""} </label>
          <select
            name={isEditable ? "priority" : "taskPriority"}
            value={isEditable ? editTaskItem.priority : taskItem.taskPriority}
            onChange={handleChange}
          >
            <option value="low">Select</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <button onClick={handleSubmit}>
            {isEditable ? "Save" : "Submit"}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default TaskForm;
