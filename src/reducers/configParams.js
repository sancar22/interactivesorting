const initState = {
  sortAlgorithm: null,
  speed: null,
  arraySize: null,
  finished: true,
  randomArray: Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  ),
};

const configParamsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CONFIG":
      return {
        finished: false,
        sortAlgorithm: action.payload.algo,
        speed: parseInt(action.payload.speed),
        arraySize: parseInt(action.payload.size),
      };
    case "STOP":
      return {
        ...state,
        finished: true,
      };
    case "ARRAY_SET":
      return {
        ...state,
        randomArray: Array.from({ length: action.payload }, () =>
          Math.floor(Math.random() * 100)
        ),
        arraySize: parseInt(action.payload),
      };
    default:
      return state;
  }
};

export default configParamsReducer;
