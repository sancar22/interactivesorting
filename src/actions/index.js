export const config = info => {
  return {
    type: "CONFIG",
    payload: info,
  };
};

export const stop = info => {
  return {
    type: "STOP",
    payload: info,
  };
};

export const arraySet = info => {
  return {
    type: "ARRAY_SET",
    payload: info,
  };
};
