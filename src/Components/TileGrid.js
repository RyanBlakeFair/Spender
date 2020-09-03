import React from "react";
import Tile from "./Tile";
import "../App.css";
import { motion } from "framer-motion";

function TileGrid(props) {
  const welcome = [
    "📅 Choose a starting date for the week you want to track",
    "Click ➕ and enter your paycheck",
    "💳 Add each expense and its cost",
    "💰 See how much dosh you've saved",
    "📈 View your average weekly spendings and savings",
  ];

  return (
    <div className="grid">
      {props.tiles.length > 0
        ? props.tiles.map((tile) => (
            <motion.div layout key={tile}>
              <Tile id={tile} removeTile={props.removeTile} />
            </motion.div>
          ))
        : welcome.map((message) => (
            <p
              key={message}
              className="text-white text-xl text-center font-bold py-10"
            >
              {message}
            </p>
          ))}
    </div>
  );
}

export default TileGrid;
