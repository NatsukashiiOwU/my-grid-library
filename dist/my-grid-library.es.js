import je, { useState as M, useEffect as Oe, useRef as pr } from "react";
import { Pagination as gr } from "antd";
import { styled as q } from "@linaria/react";
import hr from "@viselect/react";
var re = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function mr() {
  if (xe) return $;
  xe = 1;
  var f = je, E = Symbol.for("react.element"), P = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, _ = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(u, s, g) {
    var c, m = {}, T = null, L = null;
    g !== void 0 && (T = "" + g), s.key !== void 0 && (T = "" + s.key), s.ref !== void 0 && (L = s.ref);
    for (c in s) p.call(s, c) && !C.hasOwnProperty(c) && (m[c] = s[c]);
    if (u && u.defaultProps) for (c in s = u.defaultProps, s) m[c] === void 0 && (m[c] = s[c]);
    return { $$typeof: E, type: u, key: T, ref: L, props: m, _owner: _.current };
  }
  return $.Fragment = P, $.jsx = S, $.jsxs = S, $;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function yr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var f = je, E = Symbol.for("react.element"), P = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), te = Symbol.iterator, ke = "@@iterator";
    function Ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var k = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var l = t.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Fe = !1, De = !1, We = !1, $e = !1, Ye = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === C || Ye || e === _ || e === g || e === c || $e || e === L || Fe || De || We || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === m || e.$$typeof === S || e.$$typeof === u || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case P:
          return "Portal";
        case C:
          return "Profiler";
        case _:
          return "StrictMode";
        case g:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var r = e;
            return ae(r) + ".Consumer";
          case S:
            var t = e;
            return ae(t._context) + ".Provider";
          case s:
            return Le(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : x(e.type) || "Memo";
          case T: {
            var i = e, l = i._payload, o = i._init;
            try {
              return x(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, F = 0, oe, ie, se, ue, le, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ne() {
      {
        if (F === 0) {
          oe = console.log, ie = console.info, se = console.warn, ue = console.error, le = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ve() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: oe
            }),
            info: j({}, e, {
              value: ie
            }),
            warn: j({}, e, {
              value: se
            }),
            error: j({}, e, {
              value: ue
            }),
            group: j({}, e, {
              value: le
            }),
            groupCollapsed: j({}, e, {
              value: ce
            }),
            groupEnd: j({}, e, {
              value: fe
            })
          });
        }
        F < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = k.ReactCurrentDispatcher, K;
    function N(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            K = n && n[1] || "";
          }
        return `
` + K + e;
      }
    }
    var G = !1, V;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ue();
    }
    function ve(e, r) {
      if (!e || G)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = B.current, B.current = null, Ne();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (R) {
              n = R;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (R) {
              n = R;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            n = R;
          }
          e();
        }
      } catch (R) {
        if (R && n && typeof R.stack == "string") {
          for (var a = R.stack.split(`
`), y = n.stack.split(`
`), d = a.length - 1, v = y.length - 1; d >= 1 && v >= 0 && a[d] !== y[v]; )
            v--;
          for (; d >= 1 && v >= 0; d--, v--)
            if (a[d] !== y[v]) {
              if (d !== 1 || v !== 1)
                do
                  if (d--, v--, v < 0 || a[d] !== y[v]) {
                    var w = `
` + a[d].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, w), w;
                  }
                while (d >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        G = !1, B.current = l, Ve(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", O = A ? N(A) : "";
      return typeof e == "function" && V.set(e, O), O;
    }
    function ze(e, r, t) {
      return ve(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, qe(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case g:
          return N("Suspense");
        case c:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return ze(e.render);
          case m:
            return U(e.type, r, t);
          case T: {
            var n = e, i = n._payload, l = n._init;
            try {
              return U(l(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var D = Object.prototype.hasOwnProperty, pe = {}, ge = k.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var l = Function.call.bind(D);
        for (var o in e)
          if (l(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              a = d;
            }
            a && !(a instanceof Error) && (z(i), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), z(null)), a instanceof Error && !(a.message in pe) && (pe[a.message] = !0, z(i), h("Failed %s type: %s", t, a.message), z(null));
          }
      }
    }
    var Ke = Array.isArray;
    function J(e) {
      return Ke(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function me(e) {
      if (Je(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), he(e);
    }
    var W = k.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, be, H;
    H = {};
    function Xe(e) {
      if (D.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var t = x(W.current.type);
        H[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(W.current.type), e.ref), H[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          ye || (ye = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          be || (be = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, i, l, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, i) {
      {
        var l, o = {}, a = null, y = null;
        t !== void 0 && (me(t), a = "" + t), Ze(r) && (me(r.key), a = "" + r.key), Xe(r) && (y = r.ref, Qe(r, i));
        for (l in r)
          D.call(r, l) && !He.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (l in d)
            o[l] === void 0 && (o[l] = d[l]);
        }
        if (a || y) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(o, v), y && rr(o, v);
        }
        return tr(e, a, y, i, n, W.current, o);
      }
    }
    var X = k.ReactCurrentOwner, Ee = k.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function Re() {
      {
        if (X.current) {
          var e = x(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var _e = {};
    function or(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + x(e._owner.type) + "."), I(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), I(null);
      }
    }
    function Se(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && we(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Ie(e);
          if (typeof i == "function" && i !== e.entries)
            for (var l = i.call(e), o; !(o = l.next()).done; )
              Q(o.value) && we(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = x(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var i = x(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            I(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Pe = {};
    function Te(e, r, t, n, i, l) {
      {
        var o = Me(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = ar();
          y ? a += y : a += Re();
          var d;
          e === null ? d = "null" : J(e) ? d = "array" : e !== void 0 && e.$$typeof === E ? (d = "<" + (x(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, a);
        }
        var v = nr(e, r, t, i, l);
        if (v == null)
          return v;
        if (o) {
          var w = r.children;
          if (w !== void 0)
            if (n)
              if (J(w)) {
                for (var A = 0; A < w.length; A++)
                  Se(w[A], e);
                Object.freeze && Object.freeze(w);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(w, e);
        }
        if (D.call(r, "key")) {
          var O = x(e), R = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), ee = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[O + ee]) {
            var dr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, O, dr, O), Pe[O + ee] = !0;
          }
        }
        return e === p ? sr(v) : ir(v), v;
      }
    }
    function ur(e, r, t) {
      return Te(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Te(e, r, t, !1);
    }
    var cr = lr, fr = ur;
    Y.Fragment = p, Y.jsx = cr, Y.jsxs = fr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? re.exports = mr() : re.exports = yr();
var b = re.exports;
const br = /* @__PURE__ */ q("img")({
  name: "Img",
  class: "i39deuy",
  propsAsIs: !1
}), Er = /* @__PURE__ */ q("span")({
  name: "FileTitle",
  class: "f1wq90a1",
  propsAsIs: !1
}), Rr = ({
  filedata: f
}) => /* @__PURE__ */ b.jsxs(b.Fragment, {
  children: [/* @__PURE__ */ b.jsx(br, {
    alt: "filedata.type",
    src: (f == null ? void 0 : f.link) || "../src/assets/file-svgrepo-com.svg",
    draggable: "false"
  }), /* @__PURE__ */ b.jsx("br", {}), /* @__PURE__ */ b.jsx(Er, {
    children: f == null ? void 0 : f.title
  })]
}), _r = /* @__PURE__ */ q("div")({
  name: "Container",
  class: "cqdk1ip",
  propsAsIs: !1
}), wr = /* @__PURE__ */ q("div")({
  name: "Selectable",
  class: "sgto93x",
  propsAsIs: !1
});
function Sr({
  items: f,
  className: E
}) {
  const [P, p] = M(() => /* @__PURE__ */ new Set()), _ = (u) => u.map((s) => s.getAttribute("data-key")).filter(Boolean).map(Number), C = ({
    event: u,
    selection: s
  }) => {
    !(u != null && u.ctrlKey) && !(u != null && u.metaKey) && (s.clearSelection(), p(() => /* @__PURE__ */ new Set()));
  }, S = ({
    store: {
      changed: {
        added: u,
        removed: s
      }
    }
  }) => {
    p((g) => {
      const c = new Set(g);
      return _(u).forEach((m) => c.add(m)), _(s).forEach((m) => c.delete(m)), c;
    });
  };
  return /* @__PURE__ */ b.jsx(hr, {
    className: `container ${E}`,
    onStart: C,
    onMove: S,
    selectables: ".selectable",
    children: /* @__PURE__ */ b.jsx(_r, {
      children: f == null ? void 0 : f.map((u) => /* @__PURE__ */ b.jsx(wr, {
        className: P.has(u.key) ? "selected selectable" : "selectable",
        "data-key": u.key,
        children: /* @__PURE__ */ b.jsx(Rr, {
          filedata: u.filedata
        })
      }, u.key))
    })
  });
}
const Pr = ({ containerRef: f, cardWidth: E, onResize: P, itemslength: p, currentPage: _ }) => {
  const [C, S] = M([0, 0]);
  Oe(() => {
    function s() {
      S([window.innerWidth, window.innerHeight]), u();
    }
    return window.addEventListener("resize", s), s(), () => window.removeEventListener("resize", s);
  }, []);
  const u = () => {
    var T;
    const s = ((T = f.current) == null ? void 0 : T.offsetWidth) || 0, g = Math.floor(s / E), c = Math.min(g, p), m = Math.min(_, Math.ceil(p / c));
    P(c, m);
  };
  return null;
};
function Or({ items: f }) {
  const [E, P] = M(1), [p, _] = M(3), [C, S] = M([]), u = pr(null);
  Oe(() => {
    s();
  }, [f, E, p]);
  const s = () => {
    const g = (E - 1) * p, c = g + p;
    S(f.slice(g, c));
  };
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx("div", { ref: u, children: /* @__PURE__ */ b.jsx(Sr, { items: C, className: "blue" }) }),
    /* @__PURE__ */ b.jsx(
      Pr,
      {
        containerRef: u,
        cardWidth: 120,
        onResize: (g, c) => {
          _(g), P(c);
        },
        itemslength: f.length,
        currentPage: E
      }
    ),
    /* @__PURE__ */ b.jsx(
      gr,
      {
        pageSize: p,
        onChange: (g, c) => {
          P(g), _(c);
        },
        total: f.length,
        current: E
      }
    )
  ] });
}
export {
  Or as default
};
