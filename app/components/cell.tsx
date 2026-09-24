import { Dispatch, SetStateAction } from "react";
type CellProps={
    go:string;
    setGo:Dispatch<SetStateAction<string>>;
    id:number;
    cells:string[];
    setCells:Dispatch<SetStateAction<string[]>>;
    cell:string;
    winningMassage:string;
}
  
    const Cell=({winningMassage,go,setGo,id,cells,setCells,cell}:CellProps) => {
    const handelClick = () =>{
        if (winningMassage) {
            return;
        }
        const taken=!!cells[id];
         console.log("Taken:", taken);
         
         if (taken) {
             return;
         }
         const newCells = [...cells];
         newCells[id] = go;
         setCells(newCells);
         setGo((currentGo) => currentGo === "X" ? "O" : "X");

    };
      const handelCellChange=(cellToChange :string)=>{
        let copyCells=[...cells]
        copyCells[id]=cellToChange;
        setCells(copyCells);
    }
    return( <div  className="cell" onClick={handelClick}>
        <div className={cell}>{cell ?(cell === "circle" ? "O" :"X"): ""}</div>
    </div>)
};

export default Cell;