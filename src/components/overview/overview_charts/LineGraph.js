import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const LineGraph = () => {

    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "First dataset",
          data: [33, 53, 85, 41, 44, 65],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)"
        },
        {
          label: "Second dataset",
          data: [33, 25, 35, 51, 54, 76],
          fill: false,
          borderColor: "#742774"
        }
      ]
    };
    
    const options = {
      animations: {
          tension: {
              duration: 1200,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
          }
      },
      scales: {
          y: {
              min: 0,
              max: 100
          }
      }
    };

    return (
        <>
        <Line data={data} options={options}/>
        </>
    );
};

export default LineGraph;