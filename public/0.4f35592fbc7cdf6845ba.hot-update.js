webpackHotUpdate(0,{

/***/ "./app/js/App.jsx":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js"), __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js"), __webpack_require__("./app/js/index.jsx")], __WEBPACK_AMD_DEFINE_RESULT__ = function (_react, _reactDom, _index) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  //  artificially create container
  var root = document.createElement('div'); /* eslint-disable class-methods-use-this, import/no-unresolved, no-undef, import/no-amd, no-unused-vars */

  root.id = 'root';
  document.body.appendChild(root);

  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(1), __webpack_require__(4), __webpack_require__(0), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ko, $, pubsub, ccConstants, navigation) {
    return {
      onLoad: function onLoad(widget) {
        console.log(widget, pubsub, ccConstants, navigation);
        console.log(ko.toJS(widget));
        _reactDom2.default.render(_react2.default.createElement(_index2.default, null), document.getElementById('main'));
        $.Topic('PAGE_CHANGED', function (pageContext) {
          console.log(pageContext);
        });
      }
    };
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./app/js/index.jsx":
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Adjacent JSX elements must be wrapped in an enclosing tag (11:6)\n\n\u001b[0m \u001b[90m  9 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33mLink\u001b[39m to\u001b[33m=\u001b[39m{\u001b[32m'/cart'\u001b[39m}\u001b[33m>\u001b[39mgo to cart\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mLink\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 10 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mRouter\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 11 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 12 | \u001b[39m    )\u001b[33m;\u001b[39m\n \u001b[90m 13 | \u001b[39m  }\n \u001b[90m 14 | \u001b[39m}\u001b[0m\n");

/***/ }),

/***/ "./node_modules/history/es/DOMUtils.js":
false,

/***/ "./node_modules/history/es/LocationUtils.js":
false,

/***/ "./node_modules/history/es/PathUtils.js":
false,

/***/ "./node_modules/history/es/createBrowserHistory.js":
false,

/***/ "./node_modules/history/es/createHashHistory.js":
false,

/***/ "./node_modules/history/es/createMemoryHistory.js":
false,

/***/ "./node_modules/history/es/createTransitionManager.js":
false,

/***/ "./node_modules/history/es/index.js":
false,

/***/ "./node_modules/history/node_modules/warning/browser.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/invariant/browser.js":
false,

/***/ "./node_modules/lodash-es/_Symbol.js":
false,

/***/ "./node_modules/lodash-es/_baseGetTag.js":
false,

/***/ "./node_modules/lodash-es/_freeGlobal.js":
false,

/***/ "./node_modules/lodash-es/_getPrototype.js":
false,

/***/ "./node_modules/lodash-es/_getRawTag.js":
false,

/***/ "./node_modules/lodash-es/_objectToString.js":
false,

/***/ "./node_modules/lodash-es/_overArg.js":
false,

/***/ "./node_modules/lodash-es/_root.js":
false,

/***/ "./node_modules/lodash-es/isObjectLike.js":
false,

/***/ "./node_modules/lodash-es/isPlainObject.js":
false,

/***/ "./node_modules/react-redux/es/components/Provider.js":
false,

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
false,

/***/ "./node_modules/react-redux/es/connect/connect.js":
false,

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
false,

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
false,

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
false,

/***/ "./node_modules/react-redux/es/index.js":
false,

/***/ "./node_modules/react-redux/es/utils/PropTypes.js":
false,

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
false,

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
false,

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
false,

/***/ "./node_modules/react-redux/es/utils/warning.js":
false,

/***/ "./node_modules/react-router-dom/es/BrowserRouter.js":
false,

/***/ "./node_modules/react-router-dom/es/HashRouter.js":
false,

/***/ "./node_modules/react-router-dom/es/Link.js":
false,

/***/ "./node_modules/react-router-dom/es/MemoryRouter.js":
false,

/***/ "./node_modules/react-router-dom/es/NavLink.js":
false,

/***/ "./node_modules/react-router-dom/es/Prompt.js":
false,

/***/ "./node_modules/react-router-dom/es/Redirect.js":
false,

/***/ "./node_modules/react-router-dom/es/Route.js":
false,

/***/ "./node_modules/react-router-dom/es/Router.js":
false,

/***/ "./node_modules/react-router-dom/es/StaticRouter.js":
false,

/***/ "./node_modules/react-router-dom/es/Switch.js":
false,

/***/ "./node_modules/react-router-dom/es/generatePath.js":
false,

/***/ "./node_modules/react-router-dom/es/index.js":
false,

/***/ "./node_modules/react-router-dom/es/matchPath.js":
false,

/***/ "./node_modules/react-router-dom/es/withRouter.js":
false,

/***/ "./node_modules/react-router/es/MemoryRouter.js":
false,

/***/ "./node_modules/react-router/es/Prompt.js":
false,

/***/ "./node_modules/react-router/es/Redirect.js":
false,

/***/ "./node_modules/react-router/es/Route.js":
false,

/***/ "./node_modules/react-router/es/Router.js":
false,

/***/ "./node_modules/react-router/es/StaticRouter.js":
false,

/***/ "./node_modules/react-router/es/Switch.js":
false,

/***/ "./node_modules/react-router/es/generatePath.js":
false,

/***/ "./node_modules/react-router/es/matchPath.js":
false,

/***/ "./node_modules/react-router/es/withRouter.js":
false,

/***/ "./node_modules/react-router/node_modules/isarray/index.js":
false,

/***/ "./node_modules/react-router/node_modules/path-to-regexp/index.js":
false,

/***/ "./node_modules/redux/es/applyMiddleware.js":
false,

/***/ "./node_modules/redux/es/bindActionCreators.js":
false,

/***/ "./node_modules/redux/es/combineReducers.js":
false,

/***/ "./node_modules/redux/es/compose.js":
false,

/***/ "./node_modules/redux/es/createStore.js":
false,

/***/ "./node_modules/redux/es/index.js":
false,

/***/ "./node_modules/redux/es/utils/warning.js":
false,

/***/ "./node_modules/resolve-pathname/index.js":
false,

/***/ "./node_modules/symbol-observable/es/index.js":
false,

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
false,

/***/ "./node_modules/value-equal/index.js":
false,

/***/ "./node_modules/warning/warning.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/webpack/buildin/harmony-module.js":
false

})