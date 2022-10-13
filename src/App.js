import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.ScoreTypes),
    datasets: [
      {
        label: "Pre-Test Scores in Relation to Age Level",
        data: UserData.map((data) => data.Score),
        backgroundColor: [
          "#CFFF8D",
          "#47B5FF",
          "#FF884B",
          "#f3ba2f",
          "#FF577F",
          "#ffe9a0",
        ],
      },
    ],
  });


  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
