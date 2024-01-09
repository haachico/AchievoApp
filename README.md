# Task Manager App

## Overview

The Task Manager app is designed to offer a user-friendly and intuitive task management experience. Let's delve into its distinctive features:

### Adding and Managing Tasks

- **Add Tasks with Ease:** Simply click the "Add" button in the app's header to create new tasks. Input relevant details such as the task title, description, due date, and priority.

- **Edit and Delete Tasks:** Experience flexibility in task management. Edit existing tasks to reflect changes and delete tasks that are no longer needed, ensuring your task list remains dynamic and personalized.

### Streamlined Task Organization

- **Task Categories:** Efficiently organize your tasks into three meaningful categories - "Added," "Started," and "Completed." The application leverages the React-dnd library, enabling you to intuitively drag and drop tasks between these categories.

### Task Details and Navigation

- **Task Details View:** Gain a comprehensive understanding of a specific task by clicking on it. This functionality is achieved through React Router's `useParams`, providing an in-depth view of each task.

- **Nested Routes:** Navigate seamlessly with two nested routes on the home page. One route showcases a comprehensive list of all tasks, while the other unveils an interactive Chart/Graph, enhancing the overall user experience.

### Code Splitting and Optimization

- **Code Splitting:** Enhance app performance with the implementation of lazy loading and suspense. The second route, featuring the dynamic Chart/Graph, is loaded only when accessed, contributing to improved load times.

### Data Persistence

- **Local Storage:** All tasks and modifications are automatically saved and stored locally, ensuring data persistence across sessions.

## Getting Started

To run the Task Manager app locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/task-manager-app.git
