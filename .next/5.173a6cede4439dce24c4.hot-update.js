webpackHotUpdate(5,{

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A = undefined;

var _link = __webpack_require__(408);

var _link2 = _interopRequireDefault(_link);

var _propTypes = __webpack_require__(52);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(387);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = __webpack_require__(403);

var _styledTools = __webpack_require__(400);

var _utils = __webpack_require__(417);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// If you want to have a standard link like one that links to an
//  outside page, then pass a string to the `href` prop
// If you want a react router link then pass a string to the `route` prop
// If you want to wrap it in a <li> tag, pass `li` as a boolean

var A = exports.A = (0, _styledComponents2.default)(function (props) {
  return _react2.default.createElement('a', (0, _utils.omitProps)(props, ['absolute', 'block', 'li', 'padding', 'margin']));
}).withConfig({
  displayName: 'Link__A',
  componentId: 's19hvy7y-0'
})(['display:', ';text-decoration:none;&:hover{color:', ';}', ';'], (0, _styledTools.ifProp)('block', 'block', 'default'), function (props) {
  return props.bg ? (0, _utils.shade)(props.bg, 0.1) : null;
}, _styledSystem.color);

var Li = _styledComponents2.default.li.withConfig({
  displayName: 'Link__Li',
  componentId: 's19hvy7y-1'
})(['', ';'], _styledSystem.space);

var Link = function Link(props) {
  if (props.absolute) {
    if (props.li) {
      return _react2.default.createElement(Li, null, _react2.default.createElement(A, props));
    } else {
      return _react2.default.createElement(A, props);
    }
  } else {
    if (props.li) {
      return _react2.default.createElement(Li, null, _react2.default.createElement(_link2.default, null, _react2.default.createElement(A, props, props.children)));
    } else {
      return _react2.default.createElement(_link2.default, null, _react2.default.createElement(A, props, props.children));
    }
  }
};

Link.displayName = 'Link';

Link.propTypes = {
  absolute: _propTypes2.default.bool,
  block: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  children: _propTypes2.default.node,
  li: _propTypes2.default.bool,
  href: _propTypes2.default.string.isRequired
};

Link.defaultProps = {
  absolute: false,
  bg: 'black',
  block: true,
  color: 'white',
  li: false
};

exports.default = Link;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2F0b21zL0xpbmsvTGluay5qcyJdLCJuYW1lcyI6WyJSb3V0ZUxpbmsiLCJQcm9wVHlwZXMiLCJSZWFjdCIsInN0eWxlZCIsImNvbG9yIiwic3BhY2UiLCJpZlByb3AiLCJvbWl0UHJvcHMiLCJzaGFkZSIsIkEiLCJwcm9wcyIsImJnIiwiTGkiLCJsaSIsIkxpbmsiLCJhYnNvbHV0ZSIsImNoaWxkcmVuIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJib29sIiwiYmxvY2siLCJzdHJpbmciLCJub2RlIiwiaHJlZiIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFPLEFBQWE7O0FBQzdCLEFBQVMsQUFBYzs7QUFDdkIsQUFBUyxBQUFXOzs7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBLEFBRUE7O0FBQU8sSUFBTSxnREFBVyxpQkFBUyxBQUMvQjtTQUNFLG1DQUNNLHNCQUFBLEFBQVUsT0FBTyxDQUFBLEFBQUMsWUFBRCxBQUFhLFNBQWIsQUFBc0IsTUFBdEIsQUFBNEIsV0FGckQsQUFDRSxBQUNNLEFBQWlCLEFBQXVDLEFBR2pFO0FBTlksQUFBSSxDQUFBO2VBQUo7ZUFBQTtBQUFBLG9FQU9BLHlCQUFBLEFBQU8sU0FBUCxBQUFnQixTQVBoQixBQU9BLEFBQXlCLFlBR3pCLGlCQUFBO1NBQVUsTUFBQSxBQUFNLEtBQUssa0JBQU0sTUFBTixBQUFZLElBQXZCLEFBQVcsQUFBZ0IsT0FBckMsQUFBNEM7QUFWbEQsQUFBTSxBQVlUOztBQUdKLElBQU0sZ0NBQUEsQUFBWTtlQUFaO2VBQUE7QUFBQSxDQUFLLE9BQVgsQUFBTSxBQUNGOztBQUdKLElBQU0sT0FBTyxTQUFQLEFBQU8sWUFBUyxBQUNwQjtNQUFJLE1BQUosQUFBVSxVQUFVLEFBQ2xCO1FBQUksTUFBSixBQUFVLElBQUksQUFDWjthQUNFLGdCQUFDLGNBQUQsSUFDRSxvQ0FBQSxBQUFDLEdBRkwsQUFDRSxBQUNFLEFBQU8sQUFHWjtBQU5ELFdBTU8sQUFDTDthQUFPLDhCQUFBLEFBQUMsR0FBUixBQUFPLEFBQU8sQUFDZjtBQUNGO0FBVkQsU0FVTyxBQUNMO1FBQUksTUFBSixBQUFVLElBQUksQUFDWjthQUNFLGdCQUFDLGNBQUQsSUFDRSxzQkFBQSxBQUFDLDhCQUNDLHNCQUFDLGNBQUQsQUFBTyxHQUFQLEFBQWUsYUFIckIsQUFDRSxBQUNFLEFBQ0UsQUFBcUIsQUFJNUI7QUFSRCxXQVFPLEFBQ0w7YUFDRSxnQkFBQSxBQUFDLDhCQUNDLHNCQUFDLGNBQUQsQUFBTyxHQUFQLEFBQWUsYUFGbkIsQUFDRSxBQUNFLEFBQXFCLEFBRzFCO0FBQ0Y7QUFDRjtBQTVCRDs7QUE4QkEsS0FBQSxBQUFLLGNBQUwsQUFBbUI7O0FBRW5CLEtBQUEsQUFBSztZQUNPLG9CQURLLEFBQ0ssQUFDcEI7U0FBTyxvQkFGUSxBQUVFLEFBQ2pCO1NBQU8sb0JBSFEsQUFHRSxBQUNqQjtZQUFVLG9CQUpLLEFBSUssQUFDcEI7TUFBSSxvQkFMVyxBQUtELEFBQ2Q7UUFBTSxvQkFBQSxBQUFVLE9BTmxCLEFBQWlCLEFBTVE7QUFOUixBQUNmOztBQVFGLEtBQUEsQUFBSztZQUFlLEFBQ1IsQUFDVjtNQUZrQixBQUVkLEFBQ0o7U0FIa0IsQUFHWCxBQUNQO1NBSmtCLEFBSVgsQUFDUDtNQUxGLEFBQW9CLEFBS2QsQUFHTjtBQVJvQixBQUNsQjs7a0JBT0YsQUFBZSIsImZpbGUiOiJMaW5rLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J5YW4vZGV2L3BvcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/ryan/dev/port/src/components/atoms/Link/Link.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/ryan/dev/port/src/components/atoms/Link/Link.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xNzNhNmNlZGU0NDM5ZGNlMjRjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvTGluay9MaW5rLmpzP2VkMmZiNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgY29sb3IsIHNwYWNlIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcbmltcG9ydCB7IGlmUHJvcCB9IGZyb20gJ3N0eWxlZC10b29scydcbmltcG9ydCB7IG9taXRQcm9wcywgc2hhZGUgfSBmcm9tICd1dGlscydcblxuLy8gSWYgeW91IHdhbnQgdG8gaGF2ZSBhIHN0YW5kYXJkIGxpbmsgbGlrZSBvbmUgdGhhdCBsaW5rcyB0byBhblxuLy8gIG91dHNpZGUgcGFnZSwgdGhlbiBwYXNzIGEgc3RyaW5nIHRvIHRoZSBgaHJlZmAgcHJvcFxuLy8gSWYgeW91IHdhbnQgYSByZWFjdCByb3V0ZXIgbGluayB0aGVuIHBhc3MgYSBzdHJpbmcgdG8gdGhlIGByb3V0ZWAgcHJvcFxuLy8gSWYgeW91IHdhbnQgdG8gd3JhcCBpdCBpbiBhIDxsaT4gdGFnLCBwYXNzIGBsaWAgYXMgYSBib29sZWFuXG5cbmV4cG9ydCBjb25zdCBBID0gc3R5bGVkKHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgey4uLm9taXRQcm9wcyhwcm9wcywgWydhYnNvbHV0ZScsICdibG9jaycsICdsaScsICdwYWRkaW5nJywgJ21hcmdpbiddKX1cbiAgICAvPlxuICApXG59KWBcbiAgZGlzcGxheTogJHtpZlByb3AoJ2Jsb2NrJywgJ2Jsb2NrJywgJ2RlZmF1bHQnKX07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmJnID8gc2hhZGUocHJvcHMuYmcsIDAuMSkgOiBudWxsKX07XG4gIH1cbiAgJHtjb2xvcn07XG5gXG5cbmNvbnN0IExpID0gc3R5bGVkLmxpYFxuICAke3NwYWNlfTtcbmBcblxuY29uc3QgTGluayA9IHByb3BzID0+IHtcbiAgaWYgKHByb3BzLmFic29sdXRlKSB7XG4gICAgaWYgKHByb3BzLmxpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGk+XG4gICAgICAgICAgPEEgey4uLnByb3BzfSAvPlxuICAgICAgICA8L0xpPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPEEgey4uLnByb3BzfSAvPlxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAocHJvcHMubGkpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMaT5cbiAgICAgICAgICA8Um91dGVMaW5rPlxuICAgICAgICAgICAgPEEgey4uLnByb3BzfT57cHJvcHMuY2hpbGRyZW59PC9BPlxuICAgICAgICAgIDwvUm91dGVMaW5rPlxuICAgICAgICA8L0xpPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Um91dGVMaW5rPlxuICAgICAgICAgIDxBIHsuLi5wcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvQT5cbiAgICAgICAgPC9Sb3V0ZUxpbms+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbkxpbmsuZGlzcGxheU5hbWUgPSAnTGluaydcblxuTGluay5wcm9wVHlwZXMgPSB7XG4gIGFic29sdXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgYmxvY2s6IFByb3BUeXBlcy5ib29sLFxuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBsaTogUHJvcFR5cGVzLmJvb2wsXG4gIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn1cblxuTGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIGFic29sdXRlOiBmYWxzZSxcbiAgYmc6ICdibGFjaycsXG4gIGJsb2NrOiB0cnVlLFxuICBjb2xvcjogJ3doaXRlJyxcbiAgbGk6IGZhbHNlLFxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hdG9tcy9MaW5rL0xpbmsuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQU9BO0FBRUE7QUFWQTtBQVdBO0FBRUE7QUFGQTtBQVVBO0FBS0E7QUFDQTtBQTVCQTtBQUNBO0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFQQTtBQUNBO0FBTUE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==