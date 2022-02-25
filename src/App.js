import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const arrayGadu = [...Array(26).keys()].slice(1, 26);
  const [arr, setArr] = useState([]);
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    setArr(array);
  };

useEffect(() => {
  shuffle(arrayGadu)
}, [])


  return (
    <>
      <div className="container">
        {arr.map((ele) => (
          <>
            <div className="box" onClick={(e)=>e.target.style.background="grey"}>{ele}</div>
          </>
        ))}
      </div>

      <div className="btn_container">
        <button
          className="btn"
          onClick={() => {
            shuffle(arrayGadu);
          }}
        >
          Random
        </button>
      </div>
    </>
  );
}

export default App;
