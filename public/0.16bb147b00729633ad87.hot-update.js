webpackHotUpdate(0,{

/***/ "./app/js/App.jsx":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js"), __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js"), __webpack_require__("./node_modules/react-router-dom/es/index.js"), __webpack_require__("./app/js/index.jsx")], __WEBPACK_AMD_DEFINE_RESULT__ = function (_react, _reactDom, _reactRouterDom, _index) {
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
  /* eslint-disable class-methods-use-this, import/no-unresolved, no-undef, import/no-amd, no-unused-vars */

  var root = document.createElement('div');
  root.id = 'root';
  document.body.prepend(root);

  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(1), __webpack_require__(4), __webpack_require__(0), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ko, $, pubsub, ccConstants, navigation, routing) {

    var dependencies = { ko: ko, $: $, pubsub: pubsub, ccConstants: ccConstants, navigation: navigation };

    return {
      onLoad: function onLoad(widget) {
        console.log(widget, pubsub, ccConstants, navigation);
        console.log(ko.toJS(widget));

        $.Topic(pubsub.topicNames.PAGE_VIEW_CHANGED).subscribe(function (pageContext) {
          console.log(widget, pageContext);
        });

        _reactDom2.default.render(_react2.default.createElement(_index2.default, { pageName: 'TEST', occProps: dependencies }), document.getElementById('root'));
      }
    };
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

})