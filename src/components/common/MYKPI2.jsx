import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);


export const options = {
  responsive: true,
  //   maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        boxWidth: 15,
        padding: 1,
        textAlign: "left",
      },
      position: "top",
      align: "end",
    },

    tooltip: {
      backgroundColor: "#fff",
      displayColors: true,
      borderColor: "#8b7a7a",
      borderWidth: 0.5,
      bodyColor: "#0000",
      titleColor: "#8b7a7a",
      // bodyFontColor: "#8b7a7a",
      padding: 10,
      footerSpacing: 0,
      boxHeight: 10,

      callbacks: {
        labelTextColor: function (context) {
          return "#000000";
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = ["3May", "4May", "5May", "6May", "7May", "8May", "9May"];

export const data = {
  labels,
  datasets: [
    {
      label: "# of POs",
      data: [1, 2, 3, 4, 5, 6, 7],
      backgroundColor: "#3b0fac",
    },
    {
      label: "# of Appointment",
      data: [9, 15, 6, 7, 11, 9, 10],
      backgroundColor: "red",
    },
    {
      label: "# of POs about to Expire",
      data: [3, 5, 6, 7, 1, 2, 4],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function App() {
  return(

     
        <Bar options={options} data={data} />
     
  )

}
export default App;
