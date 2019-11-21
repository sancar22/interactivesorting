"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arraySet = exports.config = void 0;

var config = function config(info) {
  return {
    type: "CONFIG",
    payload: info
  };
};

exports.config = config;

var arraySet = function arraySet(info) {
  return {
    type: "ARRAY_SET",
    payload: info
  };
};

exports.arraySet = arraySet;