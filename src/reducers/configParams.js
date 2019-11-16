const initState = {
  sortAlgorithm: null,
  speed: null,
  arraySize: null,
  finished: true,
};

const configParamsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CONFIG":
      return {
        finished: false,
        sortAlgorithm: action.payload.algo,
        speed: parseInt(action.payload.speed),
        arraySize: parseInt(action.payload.slider),
      };
    case "STOP":
      return {
        ...state,
        finished: true,
      };
    default:
      return state;
  }
};

export default configParamsReducer;
