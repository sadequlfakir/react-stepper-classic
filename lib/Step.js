"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = ["active", "completed", "first", "isLast", "width", "title", "icon", "index", "href", "onClick", "customStyles"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
var Step = function Step(_ref) {
  var active = _ref.active,
    completed = _ref.completed,
    first = _ref.first,
    isLast = _ref.isLast,
    width = _ref.width,
    title = _ref.title,
    icon = _ref.icon,
    index = _ref.index,
    href = _ref.href,
    onClick = _ref.onClick,
    _ref$customStyles = _ref.customStyles,
    customStyles = _ref$customStyles === void 0 ? {} : _ref$customStyles,
    stepProps = _objectWithoutProperties(_ref, _excluded);
  var getStyles = function getStyles() {
    var activeColor = stepProps.activeColor,
      completeColor = stepProps.completeColor,
      defaultColor = stepProps.defaultColor,
      circleFontColor = stepProps.circleFontColor,
      activeTitleColor = stepProps.activeTitleColor,
      completeTitleColor = stepProps.completeTitleColor,
      defaultTitleColor = stepProps.defaultTitleColor,
      size = stepProps.size,
      circleFontSize = stepProps.circleFontSize,
      titleFontSize = stepProps.titleFontSize,
      circleTop = stepProps.circleTop,
      titleTop = stepProps.titleTop,
      width = stepProps.width,
      completeOpacity = stepProps.completeOpacity,
      activeOpacity = stepProps.activeOpacity,
      defaultOpacity = stepProps.defaultOpacity,
      completeTitleOpacity = stepProps.completeTitleOpacity,
      activeTitleOpacity = stepProps.activeTitleOpacity,
      defaultTitleOpacity = stepProps.defaultTitleOpacity,
      barStyle = stepProps.barStyle,
      defaultBarColor = stepProps.defaultBarColor,
      completeBarColor = stepProps.completeBarColor,
      defaultBorderColor = stepProps.defaultBorderColor,
      completeBorderColor = stepProps.completeBorderColor,
      activeBorderColor = stepProps.activeBorderColor,
      defaultBorderStyle = stepProps.defaultBorderStyle,
      completeBorderStyle = stepProps.completeBorderStyle,
      activeBorderStyle = stepProps.activeBorderStyle,
      lineMarginOffset = stepProps.lineMarginOffset,
      defaultBorderWidth = stepProps.defaultBorderWidth;
    return {
      step: _objectSpread({
        width: "".concat(width, "%"),
        display: 'table-cell',
        position: 'relative',
        paddingTop: circleTop
      }, customStyles.step),
      circle: _objectSpread({
        width: size,
        height: size,
        margin: '0 auto',
        backgroundColor: defaultColor,
        borderRadius: '50%',
        textAlign: 'center',
        padding: 1,
        fontSize: circleFontSize,
        color: circleFontColor,
        display: 'block',
        opacity: defaultOpacity,
        borderWidth: defaultBorderColor ? defaultBorderWidth : 0,
        borderColor: defaultBorderColor,
        borderStyle: defaultBorderStyle
      }, customStyles.circle),
      activeCircle: _objectSpread({
        backgroundColor: activeColor,
        opacity: activeOpacity,
        borderWidth: activeBorderColor ? defaultBorderWidth : 0,
        borderColor: activeBorderColor,
        borderStyle: activeBorderStyle
      }, customStyles.activeCircle),
      completedCircle: _objectSpread({
        backgroundColor: completeColor,
        opacity: completeOpacity,
        borderWidth: completeBorderColor ? defaultBorderWidth : 0,
        borderColor: completeBorderColor,
        borderStyle: completeBorderStyle
      }, customStyles.completedCircle),
      index: _objectSpread({
        lineHeight: "".concat(size + circleFontSize / 4, "px"),
        color: circleFontColor
      }, customStyles.index),
      title: _objectSpread({
        marginTop: titleTop,
        fontSize: titleFontSize,
        fontWeight: '300',
        textAlign: 'center',
        display: 'block',
        color: defaultTitleColor,
        opacity: defaultTitleOpacity
      }, customStyles.title),
      activeTitle: _objectSpread({
        color: activeTitleColor,
        opacity: activeTitleOpacity
      }, customStyles.activeTitle),
      completedTitle: _objectSpread({
        color: completeTitleColor,
        opacity: completeTitleOpacity
      }, customStyles.completedTitle),
      leftBar: _objectSpread({
        position: 'absolute',
        top: circleTop + size / 2,
        height: 1,
        borderTopStyle: barStyle,
        borderTopWidth: 1,
        borderTopColor: defaultBarColor,
        left: 0,
        right: '50%',
        marginRight: size / 2 + lineMarginOffset,
        opacity: defaultOpacity
      }, customStyles.leftBar),
      rightBar: _objectSpread({
        position: 'absolute',
        top: circleTop + size / 2,
        height: 1,
        borderTopStyle: barStyle,
        borderTopWidth: 1,
        borderTopColor: defaultBarColor,
        right: 0,
        left: '50%',
        marginLeft: size / 2 + lineMarginOffset,
        opacity: defaultOpacity
      }, customStyles.rightBar),
      completedBar: _objectSpread({
        borderTopStyle: barStyle,
        borderTopWidth: 1,
        borderTopColor: completeBarColor,
        opacity: completeOpacity
      }, customStyles.completedBar)
    };
  };
  var styles = getStyles();
  var circleStyle = Object.assign(styles.circle, completed ? styles.completedCircle : {}, active ? styles.activeCircle : {});
  var titleStyle = Object.assign(styles.title, completed ? styles.completedTitle : {}, active ? styles.activeTitle : {});
  var leftStyle = Object.assign(styles.leftBar, active || completed ? styles.completedBar : {});
  var rightStyle = Object.assign(styles.rightBar, completed ? styles.completedBar : {});
  var stepContent = icon ? /*#__PURE__*/_react["default"].createElement("img", {
    src: icon,
    alt: index + 1
  }) : index + 1;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.step
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: circleStyle
  }, active || completed ? /*#__PURE__*/_react["default"].createElement("a", {
    href: href,
    onClick: onClick,
    style: styles.index
  }, stepContent) : /*#__PURE__*/_react["default"].createElement("span", {
    style: styles.index
  }, stepContent)), active || completed ? /*#__PURE__*/_react["default"].createElement("a", {
    href: href,
    onClick: onClick,
    style: titleStyle
  }, title) : /*#__PURE__*/_react["default"].createElement("div", {
    style: titleStyle
  }, title), !first && /*#__PURE__*/_react["default"].createElement("div", {
    style: leftStyle
  }), !isLast && /*#__PURE__*/_react["default"].createElement("div", {
    style: rightStyle
  }));
};
Step.defaultProps = {
  activeColor: '#5096FF',
  completeColor: '#5096FF',
  defaultColor: '#E0E0E0',
  activeTitleColor: '#000',
  completeTitleColor: '#000',
  defaultTitleColor: '#757575',
  circleFontColor: '#FFF',
  size: 32,
  circleFontSize: 16,
  titleFontSize: 16,
  circleTop: 24,
  titleTop: 8,
  defaultBarColor: '#E0E0E0',
  barStyle: 'solid',
  borderStyle: 'solid',
  lineMarginOffset: 4,
  defaultBorderWidth: 3
};
Step.propTypes = {
  width: _propTypes["default"].number.isRequired,
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
  title: _propTypes["default"].string,
  index: _propTypes["default"].number,
  active: _propTypes["default"].bool,
  completed: _propTypes["default"].bool,
  first: _propTypes["default"].bool,
  isLast: _propTypes["default"].bool,
  completeOpacity: _propTypes["default"].string,
  activeOpacity: _propTypes["default"].string,
  defaultOpacity: _propTypes["default"].string,
  completeTitleOpacity: _propTypes["default"].string,
  activeTitleOpacity: _propTypes["default"].string,
  defaultTitleOpacity: _propTypes["default"].string,
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
var _default = exports["default"] = Step;