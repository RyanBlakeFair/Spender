import React, { useState, useEffect } from "react";
import "./tailwind.css";
import "./App.css";
import { motion } from "framer-motion";

import Header from "./Components/Header";
import TileGrid from "./Components/TileGrid";
import Stats from "./Components/Stats";
import Footer from "./Components/Footer";

const LOCAL_STORAGE_KEY = "react-spender";

// SAVE TO LOCAL STORAGE
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

  // SETTING ARRAY OF TILES
  function getID(date, realDate) {
    if (tileArr.includes(date)) return;
    setTileArr([date, ...tileArr]);
  }

  function removeTile(id) {
    setTileArr(tileArr.filter((tile) => tile !== id));
  }

  return (
    <div className="mainpage bg-gray-800">
      <Header getID={getID} />
      <TileGrid tiles={tileArr} removeTile={removeTile} />
      <motion.div layout>
        <Stats tileID={tileArr} />
      </motion.div>

      <Footer />
    </div>
  );
}

export default App;
