const initState = {
  sortAlgorithm: null,
  speed: null,
  arraySize: null,
  randomArray: Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  ),
};

const configParamsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CONFIG":
      return {
        ...state,
        //finished: false,
        sortAlgorithm: action.payload.algo,
        speed: parseInt(action.payload.speed),
        arraySize: parseInt(action.payload.size),
      };
    case "ARRAY_SET":
      return {
        ...state,
        randomArray: Array.from(
          { length: action.payload },
          () => Math.floor(Math.random() * 97) + 3
        ),
        arraySize: parseInt(action.payload),
      };
    default:
      return state;
  }
};

export default configParamsReducer;
