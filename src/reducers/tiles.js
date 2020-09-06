const tilesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TILE":
      if (action.object !== undefined) {
        state.push(action.object);
        return state;
      } else {
        return state;
      }

    // case "DELETE_TILE":
    //   Object.assign(state, action.object);

    //   return Object.assign({}, state);

    default:
      return state;
  }
};

export default tilesReducer;
