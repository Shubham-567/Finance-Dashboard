import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// configuration
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide vertical grid lines
      },
      ticks: {
        color: "#6b7280",
      },
    },

    y: {
      min: -0.2,
      max: 0.6,
      ticks: {
        stepSize: 0.2,
        color: "#6b7280",
        callback: function (value) {
          return value.toFixed(2) + " Cr";
        },
      },
      grid: {
        color: "#e5e7eb", // grid lines
      },
    },
  },
};

// data for chart
const data = {
  labels: ["Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    // Dataset 1: The Red Line
    {
      label: "Dataset 1",
      data: [0.3, 0.15, 0.2, 0.1, 0.05],
      borderColor: "#ef4444", // Red
      backgroundColor: "rgba(239, 68, 68, 0.2)",
      fill: "origin",
      tension: 0.4, // line curved
      pointRadius: 0,
    },
    // Dataset 2: The Green Line
    {
      label: "Dataset 2",
      data: [0.25, 0.1, 0.45, 0.3, 0.13],
      borderColor: "#22c55e", // Green
      backgroundColor: "rgba(34, 197, 94, 0.2)",
      fill: "origin",
      tension: 0.4,
      pointRadius: 0,
    },
    // Dataset 3: The Blue Line
    {
      label: "Dataset 3",
      data: [-0.05, -0.15, 0.35, 0.2, 0.03],
      borderColor: "#3b82f6", // Blue
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      fill: "origin",
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const MonthlyMisChart = () => {
  return (
    <div style={{ height: "300px" }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default MonthlyMisChart;
