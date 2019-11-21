"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _configParams = _interopRequireDefault(require("./configParams"));

var _redux = require("redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allReducer = (0, _redux.combineReducers)({
  configuration: _configParams.default
});
var _default = allReducer;
exports.default = _default;