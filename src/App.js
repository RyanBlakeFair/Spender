import React, { useState, useEffect } from "react";
import "./tailwind.css";
import "./App.css";

import Header from "./Components/Header";
import TileGrid from "./Components/TileGrid";

const LOCAL_STORAGE_KEY = "react-spender";

function App() {
  const [tileArr, setTileArr] = useState([]);

  useEffect(() => {
    const storageArr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageArr) {
      setTileArr(storageArr);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tileArr));
  }, [tileArr]);

  function getID(date, realDate) {
    console.log(realDate);
    if (tileArr.includes(date)) return;
    setTileArr(tileArr.concat(date));
  }

  function removeTile(id) {
    setTileArr(tileArr.filter((tile) => tile !== id));
  }

  return (
    <div className="mainpage bg-gray-800">
      <Header getID={getID} />
      <TileGrid tiles={tileArr} removeTile={removeTile} />
    </div>
  );
}

export default App;
