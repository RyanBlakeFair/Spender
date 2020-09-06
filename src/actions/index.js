export const addTile = (object) => {
  return {
    type: "ADD_TILE",
    object,
  };
};

export const deleteTile = (object) => {
  return {
    type: "DELETE_TILE",
    object,
  };
};
