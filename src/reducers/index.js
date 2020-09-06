import { combineReducers } from "redux";
import tilesReducer from "./tiles";

const allReducers = combineReducers({
  tiles: tilesReducer,
});

export default allReducers;
