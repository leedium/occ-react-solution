(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    "./app/js/utils/utils.js": function(e, t, n) {
      var r;
      void 0 ===
        (r = function() {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          (t.convertDashKeysToCamelCase = function(e) {
            var t = {};
            return (
              console.log("obj:", e),
              Object.keys(e).reduce(function(n, r) {
                return (
                  (t[
                    r.replace(/-([a-z])/gi, function(e, t) {
                      return t.toUpperCase();
                    })
                  ] = e[r]),
                  n
                );
              }, {}),
              t
            );
          }),
            (t.other = "");
        }.apply(t, [])) || (e.exports = r);
    },
    "./app/js/views/components/elements/occImage/OccImage.jsx": function(
      e,
      t,
      n
    ) {
      var r;
      void 0 ===
        (r = function() {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var e = (function(e) {
              return e && e.__esModule ? e : { default: e };
            })(n("./node_modules/react/index.js")),
            r = n("./app/js/utils/utils.js");
          function a() {
            return (a =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }).apply(this, arguments);
          }
          t.default = function(t) {
            var n = t.elementConfig;
            console.log("Image Props", n);
            var o = n.image,
              l = n.richText,
              s = e.default.createElement("img", {
                style: (0, r.convertDashKeysToCamelCase)(
                  Object.assign(
                    { borderStyle: "solid", width: "100%" },
                    n.border || {},
                    n.horizontalAlignment || {},
                    a(
                      {},
                      Object.keys(n.padding || []).reduce(function(e, t) {
                        return (e[t] = n.padding[t] + "px"), e;
                      }, {})
                    )
                  )
                ),
                title: o.titleText,
                alt: o.altText,
                src: o.src
              });
            return e.default.createElement(
              "div",
              null,
              o.link
                ? e.default.createElement(
                    "a",
                    { title: o.titleText, href: o.link },
                    s
                  )
                : e.default.createElement(
                    "div",
                    { className: "occ-react__image" },
                    s
                  ),
              e.default.createElement("div", {
                dangerouslySetInnerHTML: { __html: l.content }
              })
            );
          };
        }.apply(t, [])) || (e.exports = r);
    }
  }
]);
