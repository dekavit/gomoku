import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type CellVal = "_" | "b" | "w"
type GameScene = "title" | "start" | "end"

function App() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: "slategray",
    }}>
      <Game />
      <footer style={{
        marginTop: "auto",
        marginBottom: "1rem",
        color: "white",
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}>
        &copy; 2022 Dekavit
      </footer>
    </main>
  )
}

function Cell({ val: c }: { val: CellVal }) {
  return (
    <div style={{
      width: "8rem",
      height: "8rem",
      margin: ".5rem",
      padding: ".5rem",
      border: "solid 4px #444",
      borderRadius: "8px",
    }}>
      <div style={{
        width: "100%",
        height: "100%",
        background: c === "_" ? "transparent" : c === "b" ? "black" : "white",
        border: `solid 4px ${c === "_" ? "gray" : "transparent"}`,
        borderRadius: "50%",
      }} />
    </div>
  )
}

function Settings() {
  const [row, setRow] = useState<number>(5)
  const [col, setCol] = useState<number>(5)

  return (
    <div style={{
      display: "flex",
      width: "100%",
      height: "100%",
      position: "absolute",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        padding: "1.5rem",
        background: "white",
        borderRadius: "1rem",
        boxShadow: "0.5rem 0.5rem 0 0 black",
      }}>
        <p style={{
          display: "flex",
          justifyContent: "space-between",
        }}>
          <label>Row</label>
          <input
            type="number"
            style={{ marginLeft: "0.5rem" }}
            value={row}
            onChange={e => setRow(Number(e.target.value))}
          />
        </p>
        <p style={{
          display: "flex",
          justifyContent: "space-between",
        }}>
          <label>Column</label>
          <input
            type="number"
            style={{ marginLeft: "0.5rem" }}
            value={col}
            onChange={e => setCol(Number(e.target.value))}
          />
        </p>
        <button style={{
          marginTop: "2rem",
          padding: "0.5rem",
          border: "none",
          borderRadius: "0.5rem",
          background: "red",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}>Start</button>
      </div>
    </div >
  )
}

function Game() {
  const init = Array.from({ length: 1 }, () =>
    Array.from({ length: 1 }, () => "_" as CellVal))

  const [phase, setPhase] = useState<number>(0);
  const [board, setBoard] = useState<CellVal[][]>(init);
  const [scene, setScene] = useState<GameScene>("title");

  function cellClick(x: number, y: number) {
    if (board[y][x] !== "_") return

    board[y][x] = phase % 2 ? "w" : "b"

    const newBoard = board.map(row => [...row]) // copy array
    setBoard(newBoard)

    setPhase(phase + 1)
  }

  return (
    <>
      {scene === "title" && (
        <Settings />
      )}
      <div style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
      }}>
        <div style={{
          display: "flex",
          marginBottom: "1rem",
          padding: "1rem 1.5rem",
          justifyContent: "space-between",
          borderRadius: "1rem",
          background: "white",
          fontSize: "3rem",
          fontWeight: "bold",
        }}>
          <div>asdf</div>
          <div>#{phase.toString()}</div>
          <div>fdsa</div>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          background: "green",
          margin: "auto",
          padding: "2rem",
          borderRadius: "1rem",
        }}>
          {board.map((row, i) => (
            <div key={i} style={{ display: "flex" }}>
              {row.map((cell, j) => (
                <div key={j} onClick={() => cellClick(j, i)}>
                  <Cell val={cell} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
