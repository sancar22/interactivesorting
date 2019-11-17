const isStartedReducer = (state = true, action) => {
  switch (action.type) {
    case "START":
      return false;
    default:
      return state;
  }
};

export default isStartedReducer;
