const initState = {
  sortAlgorithm: null,
  speed: null,
  arraySize: null,
};

const configParamsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CONFIG":
      return {
        sortAlgorithm: action.payload.algo,
        speed: action.payload.speed,
        arraySize: action.payload.slider,
      };

    default:
      return state;
  }
};

export default configParamsReducer;
