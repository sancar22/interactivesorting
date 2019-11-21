"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeAnimator = exports.animator = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var animator = function animator(animations, speed) {
  var _loop = function _loop(i) {
    var arrayBars = document.getElementsByClassName("bars");

    var _animations$i = _slicedToArray(animations[i], 3),
        barOneIdx = _animations$i[0],
        barTwoIdx = _animations$i[1],
        swap = _animations$i[2];

    var _animations = _slicedToArray(animations[i - 1], 2),
        prevBarOneIdx = _animations[0],
        prevBarTwoIdx = _animations[1];

    var barOneStyle = arrayBars[barOneIdx].style;
    var barTwoStyle = arrayBars[barTwoIdx].style;
    var prevOneStyle = arrayBars[prevBarOneIdx].style;
    var prevTwoStyle = arrayBars[prevBarTwoIdx].style;
    var color = barOneIdx === prevBarOneIdx && barTwoIdx === prevBarTwoIdx ? "red" : "green";
    setTimeout(function () {
      barOneStyle.backgroundColor = color;
      barTwoStyle.backgroundColor = color;
      prevOneStyle.backgroundColor = color;
      prevTwoStyle.backgroundColor = color;
    }, i * (1 / speed) * 10); //const [barOneIdx, barTwoIdx] = animations[i];

    if (swap) {
      setTimeout(function () {
        var newHeightOne = barTwoStyle.height;
        var newHeightTwo = barOneStyle.height;
        var newTextOne = arrayBars[barTwoIdx].textContent;
        var newTextTwo = arrayBars[barOneIdx].textContent;
        barOneStyle.height = newHeightOne;
        barTwoStyle.height = newHeightTwo;
        arrayBars[barOneIdx].textContent = newTextOne;
        arrayBars[barTwoIdx].textContent = newTextTwo;
      }, i * (1 / speed) * 10);
    }
  };

  for (var i = 1; i < animations.length; i++) {
    _loop(i);
  }
};

exports.animator = animator;

var mergeAnimator = function mergeAnimator(animations, speed) {
  var _loop2 = function _loop2(i) {
    var arrayBars = document.getElementsByClassName("bars");
    var isColorChange = i % 3 !== 2;

    if (isColorChange) {
      var _animations$i2 = _slicedToArray(animations[i], 2),
          barOneIdx = _animations$i2[0],
          barTwoIdx = _animations$i2[1];

      var barOneStyle = arrayBars[barOneIdx].style;
      var barTwoStyle = arrayBars[barTwoIdx].style;
      var color = i % 3 === 0 ? "red" : "green";
      setTimeout(function () {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * (1 / speed) * 10);
    } else {
      setTimeout(function () {
        var _animations$i3 = _slicedToArray(animations[i], 2),
            barOneIdx = _animations$i3[0],
            newHeight = _animations$i3[1];

        var barOneStyle = arrayBars[barOneIdx].style;
        arrayBars[barOneIdx].textContent = newHeight;
        barOneStyle.height = "".concat(newHeight * 0.87, "vh");
      }, i * (1 / speed) * 10);
    }
  };

  for (var i = 0; i < animations.length; i++) {
    _loop2(i);
  }
};

exports.mergeAnimator = mergeAnimator;