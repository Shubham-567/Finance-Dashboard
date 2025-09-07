import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
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

    "y-axis-1": {
      type: "linear",
      position: "left",
      min: 0,
      max: 2.4,
      ticks: {
        stepSize: 0.8,
        color: "#6b7280",
      },
      grid: {
        color: "#e5e7eb", // grid lines
      },
    },
    "y-axis-2": {
      type: "linear",
      position: "right",
      min: 90,
      max: 120,
      ticks: {
        stepSize: 10,
        color: "#6b7280",
      },
      grid: {
        display: false,
      },
    },
  },
};

// data for chart
const data = {
  labels: ["Mar", "Apr", "May", "Jun"],
  datasets: [
    // Dataset 1: The Red Line
    {
      type: "line",
      label: "Growth Rate",
      data: [1.8, 0.1, 0, 0],
      borderColor: "#ef4444", // Red
      backgroundColor: "rgba(239, 68, 68, 0.2)",
      yAxisID: "y-axis-1",
      tension: 0.4, // line curved
      fill: true,
      pointRadius: 0,
    },
    // Dataset 2: The Blue Bars
    {
      type: "bar", // bar chart
      label: "Business Volume",
      data: [108, 108, 108, 108],
      backgroundColor: "#3b82f6", // Blue
      yAxisID: "y-axis-2",
      barPercentage: 0.4,
    },
  ],
};

const SipBusinessChart = () => {
  return (
    <div style={{ height: "300px" }}>
      <Chart type='bar' options={options} data={data} />
    </div>
  );
};

export default SipBusinessChart;
