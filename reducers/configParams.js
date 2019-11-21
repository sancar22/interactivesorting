"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initState = {
  sortAlgorithm: null,
  speed: null,
  arraySize: null,
  randomArray: Array.from({
    length: 10
  }, function () {
    return Math.floor(Math.random() * 100);
  })
};

var configParamsReducer = function configParamsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "CONFIG":
      return _objectSpread({}, state, {
        //finished: false,
        sortAlgorithm: action.payload.algo,
        speed: parseInt(action.payload.speed),
        arraySize: parseInt(action.payload.size)
      });

    case "ARRAY_SET":
      return _objectSpread({}, state, {
        randomArray: Array.from({
          length: action.payload
        }, function () {
          return Math.floor(Math.random() * 97) + 3;
        }),
        arraySize: parseInt(action.payload)
      });

    default:
      return state;
  }
};

var _default = configParamsReducer;
exports.default = _default;