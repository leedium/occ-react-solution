(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    "./app/js/views/components/elements/occRichText/OccRichText.jsx": function(
      e,
      t,
      c
    ) {
      var n;
      void 0 ===
        (n = function() {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var e = o(c("./node_modules/react/index.js")),
            n = o(c("./node_modules/react-html-parser/lib/index.js"));
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          t.default = function(t) {
            var c = t.elementConfig;
            return e.default.createElement(
              "div",
              {
                key: "occ-react-id-" + c.richText.id,
                className: "occ-react__rich-text"
              },
              (0, n.default)(c.richText.content)
            );
          };
        }.apply(t, [])) || (e.exports = n);
    }
  }
]);
