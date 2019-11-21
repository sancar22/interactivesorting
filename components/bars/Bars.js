"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Bars.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Bars = function Bars(_ref) {
  var idx = _ref.idx,
      name = _ref.name,
      width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      className = _ref.className,
      value = _ref.value,
      children = _ref.children,
      style = _ref.style,
      ref = _ref.ref,
      size = _ref.size,
      bgColor = _ref.bgColor,
      props = _objectWithoutProperties(_ref, ["idx", "name", "width", "height", "onChange", "className", "value", "children", "style", "ref", "size", "bgColor"]);

  var font = size > 80 ? 8 : size > 50 ? 10 : size > 40 ? 12 : 14;
  return _react.default.createElement("div", {
    key: idx,
    className: "bars",
    style: {
      width: "".concat(width, "vw"),
      height: "".concat(height, "vh"),
      fontSize: "".concat(font, "px"),
      backgroundColor: {
        bgColor: bgColor
      }
    }
  }, children);
};

var _default = Bars;
exports.default = _default;