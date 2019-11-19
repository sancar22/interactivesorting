export const config = info => {
    return {
        type: "CONFIG",
        payload: info,
    };
};

export const arraySet = info => {
    return {
        type: "ARRAY_SET",
        payload: info,
    };
};
