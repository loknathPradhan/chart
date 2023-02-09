import './App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2"
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
)

function App() {

  const [data, setData] = useState({
    datasets: []
  });
  const [option, setOption] = useState();

  useEffect(() => {
    setData({
      labels: ["2010", "2012", "2014", "2016", "2018", "2020"],
      datasets: [
        {
          label: "Subscriber in a year",
          data: [50, 10, 100, 40, 70, 20],
          borderColor: "rgb(53,162,235)",
          backgroundColor: "rgba(53,162,235)",
        }
      ]
    });
    setOption({
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      Plugin: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "voting"
        },
      },
    })
  }, []);
  return (
    <div className="container" >
      <Line options={option} data={data} />
    </div>
  );
}
export default App;
