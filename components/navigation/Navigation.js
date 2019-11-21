"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./Navigation.css");

var _reactDropdown = _interopRequireDefault(require("react-dropdown"));

require("react-dropdown/style.css");

var _actions = require("../../actions/");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Navigation(_ref) {
  var isRunning = _ref.isRunning,
      props = _objectWithoutProperties(_ref, ["isRunning"]);

  var Logo = require("../../assets/bars.png");

  var _useState = (0, _react.useState)(50),
      _useState2 = _slicedToArray(_useState, 2),
      sizeVal = _useState2[0],
      setSizeVal = _useState2[1];

  var _useState3 = (0, _react.useState)(5),
      _useState4 = _slicedToArray(_useState3, 2),
      speedVal = _useState4[0],
      setSpeedVal = _useState4[1];

  var _useState5 = (0, _react.useState)("Select..."),
      _useState6 = _slicedToArray(_useState5, 2),
      algorithm = _useState6[0],
      setAlgorithm = _useState6[1];

  var dispatch = (0, _reactRedux.useDispatch)();
  var searchAlgorithms = ["Merge Sort", "Bubble Sort", "Quick Sort", "Heap Sort"];
  (0, _react.useEffect)(function () {
    //Update array as slider moves
    dispatch((0, _actions.arraySet)(sizeVal));
  }, [sizeVal]);
  (0, _react.useEffect)(function () {
    dispatch((0, _actions.config)({
      algo: algorithm,
      speed: speedVal,
      size: sizeVal
    }));
  }, [sizeVal, speedVal, algorithm]);

  var clickHandler = function clickHandler() {
    dispatch((0, _actions.arraySet)(sizeVal));
  };

  return _react.default.createElement("div", {
    className: "bodyy"
  }, _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement("div", {
    className: "navBox"
  }, _react.default.createElement("img", {
    className: "image",
    src: Logo,
    alt: "Mixed Array"
  }), _react.default.createElement("div", {
    className: "titleP"
  }, "Interactive Sorting"), _react.default.createElement("div", {
    className: "columnO"
  }, _react.default.createElement("div", {
    className: "textT"
  }, "Sorting Algorithm"), _react.default.createElement(_reactDropdown.default, {
    options: searchAlgorithms,
    onChange: function onChange(e) {
      return setAlgorithm(e.value);
    },
    value: algorithm,
    className: isRunning ? "dropDown" : "dropDownOp",
    disabled: isRunning ? null : "disabled"
  })), _react.default.createElement("div", {
    className: "columnO1"
  }, _react.default.createElement("div", {
    className: "textT1"
  }, "Array Size"), _react.default.createElement("div", {
    className: "slider"
  }, _react.default.createElement("input", {
    id: "sizeChanger",
    type: "range",
    min: "10",
    max: "100",
    defaultValue: "50",
    disabled: isRunning ? null : "disabled",
    onChange: function onChange(e) {
      return setSizeVal(e.target.value);
    }
  }), _react.default.createElement("div", {
    className: isRunning ? "slideVal" : "slideValOp"
  }, sizeVal))), _react.default.createElement("div", {
    className: "columnO1"
  }, _react.default.createElement("div", {
    className: "textT2"
  }, "Sort Speed"), _react.default.createElement("div", {
    className: "slider1"
  }, _react.default.createElement("input", {
    id: "sizeChanger",
    type: "range",
    min: "1",
    max: "10",
    defaultValue: "5",
    disabled: isRunning ? null : "disabled",
    onChange: function onChange(e) {
      return setSpeedVal(e.target.value);
    }
  }), _react.default.createElement("div", {
    className: isRunning ? "slideVal" : "slideValOp"
  }, speedVal), _react.default.createElement("div", {
    onClick: clickHandler,
    className: "generateArr",
    style: {
      pointerEvents: isRunning ? "auto" : "none",
      opacity: !isRunning && "0.5"
    }
  }, "GENERATE NEW ARRAY")))))));
}

var _default = Navigation;
exports.default = _default;