(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "./app/js/utils/utils.js": function(e, t, n) {
      var s;
      void 0 ===
        (s = function() {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          (t.convertDashKeysToCamelCase = function(e) {
            var t = {};
            return (
              console.log("obj:", e),
              Object.keys(e).reduce(function(n, s) {
                return (
                  (t[
                    s.replace(/-([a-z])/gi, function(e, t) {
                      return t.toUpperCase();
                    })
                  ] = e[s]),
                  n
                );
              }, {}),
              t
            );
          }),
            (t.other = "");
        }.apply(t, [])) || (e.exports = s);
    },
    "./app/js/views/components/elements/occGenericText/OccGenericText.jsx": function(
      e,
      t,
      n
    ) {
      var s;
      void 0 ===
        (s = function() {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var e = (function(e) {
              return e && e.__esModule ? e : { default: e };
            })(n("./node_modules/react/index.js")),
            s = n("./app/js/utils/utils.js");
          t.default = function(t) {
            var n = t.elementConfig,
              o = t.nodeName,
              c = t.widget,
              r = n.font,
              a = (0, s.convertDashKeysToCamelCase)(r.styles),
              u = o;
            return e.default.createElement(
              u,
              { style: a, className: "occ-react__generic-text" },
              c.customTranslations["text." + n.id]
            );
          };
        }.apply(t, [])) || (e.exports = s);
    }
  }
]);
