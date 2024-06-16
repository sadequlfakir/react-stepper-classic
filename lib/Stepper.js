"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Step = _interopRequireDefault(require("./Step"));
var _excluded = ["activeStep", "steps", "disabledSteps", "customStyles"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
var Stepper = function Stepper(_ref) {
  var _ref$activeStep = _ref.activeStep,
    activeStep = _ref$activeStep === void 0 ? 0 : _ref$activeStep,
    steps = _ref.steps,
    _ref$disabledSteps = _ref.disabledSteps,
    disabledSteps = _ref$disabledSteps === void 0 ? [] : _ref$disabledSteps,
    _ref$customStyles = _ref.customStyles,
    customStyles = _ref$customStyles === void 0 ? {} : _ref$customStyles,
    stepProps = _objectWithoutProperties(_ref, _excluded);
  var styles = {
    root: _objectSpread({
      width: '100%',
      minHeight: 0,
      padding: 0
    }, customStyles.root),
    stepper: _objectSpread({
      display: 'table',
      width: '100%',
      margin: '0 auto'
    }, customStyles.stepper)
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.root
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.stepper
  }, steps.map(function (step, index) {
    return /*#__PURE__*/_react["default"].createElement(_Step["default"], _extends({
      key: index,
      width: 100 / steps.length,
      title: step.title,
      icon: step.icon,
      href: step.href,
      onClick: step.onClick,
      active: !disabledSteps.includes(index) && index === activeStep,
      completed: !disabledSteps.includes(index) && index < activeStep,
      first: index === 0,
      isLast: index === steps.length - 1,
      index: index,
      customStyles: step.customStyles || {}
    }, stepProps));
  })));
};
Stepper.propTypes = {
  activeStep: _propTypes["default"].number,
  steps: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    href: _propTypes["default"].string,
    onClick: _propTypes["default"].func,
    customStyles: _propTypes["default"].object
  })).isRequired,
  disabledSteps: _propTypes["default"].arrayOf(_propTypes["default"].number),
  customStyles: _propTypes["default"].object,
  activeColor: _propTypes["default"].string,
  completeColor: _propTypes["default"].string,
  defaultColor: _propTypes["default"].string,
  activeTitleColor: _propTypes["default"].string,
  completeTitleColor: _propTypes["default"].string,
  defaultTitleColor: _propTypes["default"].string,
  circleFontColor: _propTypes["default"].string,
  size: _propTypes["default"].number,
  circleFontSize: _propTypes["default"].number,
  titleFontSize: _propTypes["default"].number,
  circleTop: _propTypes["default"].number,
  titleTop: _propTypes["default"].number,
  defaultOpacity: _propTypes["default"].string,
  completeOpacity: _propTypes["default"].string,
  activeOpacity: _propTypes["default"].string,
  defaultTitleOpacity: _propTypes["default"].string,
  completeTitleOpacity: _propTypes["default"].string,
  activeTitleOpacity: _propTypes["default"].string,
  barStyle: _propTypes["default"].string,
  defaultBarColor: _propTypes["default"].string,
  completeBarColor: _propTypes["default"].string,
  defaultBorderColor: _propTypes["default"].string,
  completeBorderColor: _propTypes["default"].string,
  activeBorderColor: _propTypes["default"].string,
  defaultBorderStyle: _propTypes["default"].string,
  completeBorderStyle: _propTypes["default"].string,
  activeBorderStyle: _propTypes["default"].string,
  lineMarginOffset: _propTypes["default"].number,
  defaultBorderWidth: _propTypes["default"].number
};
var _default = exports["default"] = Stepper;