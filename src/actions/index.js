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

export const start = info => {
  return {
    type: "START",
    payload: info,
  };
};

export const arraySet = info => {
  return {
    type: "ARRAY_SET",
    payload: info,
  };
};

export const arraySort = info => {
  return {
    type: "SORT_ARRAY",
    payload: info,
  };
};

export const changeArray = info => {
  return {
    type: "CHANGE_ARRAY",
    payload: info,
  };
};

export const arrayDuplicate = info => {
  return {
    type: "ARRAY_DUPLICATE",
    payload: info,
  };
};
