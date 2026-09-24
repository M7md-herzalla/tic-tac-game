"use client";

import { useEffect, useState } from "react";
import Cell from "./components/cell";



const winningCombos=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]

]

export default function Home() {
const [winningMassage,setWinningMassage]=useState("");
   
   const [cells, setCells] = useState([
    "", "", "",
    "", "", "",
    "", "", ""
  ]);
 
  const [go,setGo]=useState("circle");
useEffect(() => {

  let winner = "";

  winningCombos.forEach((combo) => {

    const circleWins =
      combo.every((cell) => cells[cell] === "circle");

    const crossWins =
      combo.every((cell) => cells[cell] === "cross");

    if (circleWins) {
      winner = "Circle Wins!";
    }

    if (crossWins) {
      winner = "Cross Wins!";
    }

  });

  if (winner) {

    setWinningMassage(winner);

  } else if (
    cells.every((cell) => cell !== "")
  ) {

    setWinningMassage("Draw!");

  }

}, [cells]);
  return (
    <main>

      <div className="game-section">

        {cells.map((cell, index) => (
          <Cell
            id={index}
            key={index}
            go={go}
            setGo={(currentGo) => setGo(go === "circle" ? "cross" : "circle")}
            cells={cells}
            setCells={setCells}
            cell={cell}
            winningMassage={winningMassage}
          
          />
        ))}

      </div>
      <div className="text">{winningMassage}</div>
     {!winningMassage&& <div className="text">{`its now ${go} turn!`}</div>}

    </main>
  );
}