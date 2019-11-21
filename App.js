"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Navigation = _interopRequireDefault(require("./components/navigation/Navigation"));

var _reactRedux = require("react-redux");

var _Bars = _interopRequireDefault(require("./components/bars/Bars"));

var _MergeSort = require("./algorithms/MergeSort");

var _BubbleSort = require("./algorithms/BubbleSort");

var _QuickSort = require("./algorithms/QuickSort");

var _HeapSort = require("./algorithms/HeapSort");

var _Animators = require("./animators/Animators");

require("./App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function App() {
  var width = useResponsive();
  var configuration = (0, _reactRedux.useSelector)(function (state) {
    return state.configuration;
  });

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isRunning = _useState2[0],
      setIsRunning = _useState2[1];

  var arraySize = configuration.arraySize,
      speed = configuration.speed,
      randomArray = configuration.randomArray,
      sortAlgorithm = configuration.sortAlgorithm;
  var firstUpdate = (0, _react.useRef)(true);
  var time = sortAlgorithm !== "Bubble Sort" ? 220 : 770;
  (0, _react.useLayoutEffect)(function () {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (!isRunning) {
      sortAlgorithm === "Merge Sort" ? mergeSort() : sortAlgorithm === "Bubble Sort" ? bubbleSort() : sortAlgorithm === "Quick Sort" ? quickSort() : heapSort();
    }
  }, [isRunning]);

  var mergeSort = function mergeSort() {
    var animations = (0, _MergeSort.getMergeSortAnimations)(randomArray);
    (0, _Animators.mergeAnimator)(animations, speed);
    timerQMHB(time);
  };

  var bubbleSort = function bubbleSort() {
    var animations = (0, _BubbleSort.getBubbleSortAnimations)(randomArray);
    (0, _Animators.animator)(animations, speed);
    timerQMHB(time);
  };

  var quickSort = function quickSort() {
    var animations = (0, _QuickSort.getQSAnim)(randomArray, 0, arraySize - 1);
    (0, _Animators.animator)(animations, speed);
    timerQMHB(time);
  };

  var heapSort = function heapSort() {
    var animations = (0, _HeapSort.getHeapSortAnimations)(randomArray);
    (0, _Animators.animator)(animations, speed);
    timerQMHB(time);
  };

  var timerQMHB = function timerQMHB(time) {
    return setTimeout(function () {
      setIsRunning(true);
      arrayOriginalColor(arraySize);
    }, arraySize * (1 / speed) * time);
  };

  var clickHandler = function clickHandler() {
    if (sortAlgorithm !== "Select...") {
      setIsRunning(false);
    } else {
      alert("Choose an algorithm");
    }
  };

  return _react.default.createElement("div", {
    style: {
      height: "100vh",
      width: width
    },
    className: "allContainer"
  }, _react.default.createElement(_Navigation.default, {
    isRunning: isRunning
  }), _react.default.createElement("div", {
    className: "sorter"
  }, _react.default.createElement("div", {
    className: "divSort",
    style: {
      visibility: !isRunning && "hidden"
    },
    onClick: clickHandler
  }, "SORT!")), _react.default.createElement("div", {
    className: "arrayContainer"
  }, randomArray.map(function (num, index) {
    var backgroundColor = "blue";
    return _react.default.createElement(_Bars.default, {
      key: index,
      idx: index,
      width: 100 / arraySize,
      height: 0.87 * num,
      children: num,
      size: arraySize,
      bgColor: backgroundColor
    });
  })));
}

var _default = App;
exports.default = _default;

function arrayOriginalColor(arraySize) {
  var arrayBars = document.getElementsByClassName("bars");

  for (var i = 0; i < arraySize; i++) {
    arrayBars[i].style.backgroundColor = "blue";
  }
}

function useResponsive() {
  var _useState3 = (0, _react.useState)(window.innerWidth),
      _useState4 = _slicedToArray(_useState3, 2),
      width = _useState4[0],
      setWidth = _useState4[1];

  (0, _react.useEffect)(function () {
    var handleResize = function handleResize() {
      return setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return function () {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
}