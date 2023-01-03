import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [state, setState] = useState({});
  const emp = [
    {
      ename: "priya",
      edep: "dev"
    },
    {
      ename: "laxmi",
      edep: "devops"
    },
    {
      ename: "darshini",
      edep: "data engineer"
    }
  ];
  return (
    <div className="App">
      {emp.map((index, values) => (
        <div key={index}>
          <li>
            {emp[values]["ename"]} : {emp[values]["edep"]}
          </li>
        </div>
      ))}
    </div>
  );
}
