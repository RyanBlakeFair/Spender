import React from "react";
import Tile from "./Tile";
import "../App.css";

function TileGrid(props) {
  return (
    <main className="grid">
      {props.tiles.length > 0 ? (
        props.tiles.map((tile) => (
          <Tile key={tile} id={tile} removeTile={props.removeTile} />
        ))
      ) : (
        <p className="text-white text-3xl text-center font-bold"></p>
      )}
    </main>
  );
}

export default TileGrid;
