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
