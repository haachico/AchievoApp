import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import { useContext } from "react";
import { TasksContext } from "../context/tasksContext";
import { formatDate } from "../utils/util";

const TaskGraph = () => {
  const { tasks } = useContext(TasksContext);

  const chartData = {
    labels: tasks.map((task) => formatDate(task.dueDate)),
    datasets: [
      {
        label: "Tasks Due Dates",
        data: tasks.map((task) => ({ x: formatDate(task.dueDate), y: 1 })),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8,
        backgroundColor: "#0ea5e9",
      },
    ],
  };

  return (
    <div className="whole--page">
      <div className="graph--div">
        <Line data={chartData} />;
      </div>
    </div>
  );
};

export default TaskGraph;
