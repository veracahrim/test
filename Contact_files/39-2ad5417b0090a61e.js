(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [39],
  {
    6664: function (a, b, c) {
      !(function (a, d) {
        d(b, c(7294));
      })(this, function (a, b) {
        "use strict";
        function c() {}
        function d() {}
        (b =
          b && Object.prototype.hasOwnProperty.call(b, "default")
            ? b.default
            : b),
          (d.resetWarningCache = c);
        var e = function () {
            function a(a, b, c, d, e, f) {
              if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== f) {
                var g = Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((g.name = "Invariant Violation"), g);
              }
            }
            function b() {
              return a;
            }
            a.isRequired = a;
            var e = {
              array: a,
              bool: a,
              func: a,
              number: a,
              object: a,
              string: a,
              symbol: a,
              any: a,
              arrayOf: b,
              element: a,
              elementType: a,
              instanceOf: b,
              node: a,
              objectOf: b,
              oneOf: b,
              oneOfType: b,
              shape: b,
              exact: b,
              checkPropTypes: d,
              resetWarningCache: c,
            };
            return (e.PropTypes = e), e;
          },
          f = (function (a, b) {
            return a((b = { exports: {} }), b.exports), b.exports;
          })(function (a) {
            a.exports = e();
          });
        function g(a, b) {
          var c = Object.keys(a);
          if (Object.getOwnPropertySymbols) {
            var d = Object.getOwnPropertySymbols(a);
            b &&
              (d = d.filter(function (b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
              })),
              c.push.apply(c, d);
          }
          return c;
        }
        function h(a) {
          for (var b = 1; b < arguments.length; b++) {
            var c = null != arguments[b] ? arguments[b] : {};
            b % 2
              ? g(Object(c), !0).forEach(function (b) {
                  j(a, b, c[b]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
              : g(Object(c)).forEach(function (b) {
                  Object.defineProperty(
                    a,
                    b,
                    Object.getOwnPropertyDescriptor(c, b)
                  );
                });
          }
          return a;
        }
        function i(a) {
          return (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (a) {
                  return typeof a;
                }
              : function (a) {
                  return a &&
                    "function" == typeof Symbol &&
                    a.constructor === Symbol &&
                    a !== Symbol.prototype
                    ? "symbol"
                    : typeof a;
                })(a);
        }
        function j(a, b, c) {
          return (
            b in a
              ? Object.defineProperty(a, b, {
                  value: c,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (a[b] = c),
            a
          );
        }
        function k(a, b) {
          (null == b || b > a.length) && (b = a.length);
          for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
          return d;
        }
        var l = function (a) {
            var c = b.useRef(a);
            return (
              b.useEffect(
                function () {
                  c.current = a;
                },
                [a]
              ),
              c.current
            );
          },
          m = function (a) {
            return null !== a && "object" === i(a);
          },
          n = "[object Object]",
          o = function a(b, c) {
            if (!m(b) || !m(c)) return b === c;
            var d = Array.isArray(b),
              e = Array.isArray(c);
            if (d !== e) return !1;
            var f = Object.prototype.toString.call(b) === n,
              g = Object.prototype.toString.call(c) === n;
            if (f !== g) return !1;
            if (!f && !d) return b === c;
            var h = Object.keys(b),
              i = Object.keys(c);
            if (h.length !== i.length) return !1;
            for (var j = {}, k = 0; k < h.length; k += 1) j[h[k]] = !0;
            for (var l = 0; l < i.length; l += 1) j[i[l]] = !0;
            var o = Object.keys(j);
            if (o.length !== h.length) return !1;
            var p = b,
              q = c,
              r = function (b) {
                return a(p[b], q[b]);
              };
            return o.every(r);
          },
          p = function (a, b, c) {
            return m(a)
              ? Object.keys(a).reduce(function (d, e) {
                  var f = !m(b) || !o(a[e], b[e]);
                  return c.includes(e)
                    ? (f &&
                        console.warn(
                          "Unsupported prop change: options.".concat(
                            e,
                            " is not a mutable property."
                          )
                        ),
                      d)
                    : f
                    ? h(h({}, d || {}), {}, j({}, e, a[e]))
                    : d;
                }, null)
              : null;
          },
          q = function (a) {
            var b;
            if (
              null === a ||
              (m((b = a)) &&
                "function" == typeof b.elements &&
                "function" == typeof b.createToken &&
                "function" == typeof b.createPaymentMethod &&
                "function" == typeof b.confirmCardPayment)
            )
              return a;
            throw Error(
              "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details."
            );
          },
          r = function (a) {
            if (m((b = a)) && "function" == typeof b.then)
              return {
                tag: "async",
                stripePromise: Promise.resolve(a).then(q),
              };
            var b,
              c = q(a);
            return null === c ? { tag: "empty" } : { tag: "sync", stripe: c };
          },
          s = b.createContext(null);
        s.displayName = "ElementsContext";
        var t = function (a, b) {
            if (!a)
              throw Error(
                "Could not find Elements context; You need to wrap the part of your app that ".concat(
                  b,
                  " in an <Elements> provider."
                )
              );
            return a;
          },
          u = function (a) {
            var c,
              d,
              e = a.stripe,
              f = a.options,
              g = a.children,
              h = b.useMemo(
                function () {
                  return r(e);
                },
                [e]
              ),
              i =
                ((c = b.useState(function () {
                  return {
                    stripe: "sync" === h.tag ? h.stripe : null,
                    elements: "sync" === h.tag ? h.stripe.elements(f) : null,
                  };
                })),
                (d = 2),
                (function a(b) {
                  if (Array.isArray(b)) return b;
                })(c) ||
                  (function a(b, c) {
                    var d,
                      e,
                      f =
                        b &&
                        (("undefined" != typeof Symbol && b[Symbol.iterator]) ||
                          b["@@iterator"]);
                    if (null != f) {
                      var g = [],
                        h = !0,
                        i = !1;
                      try {
                        for (
                          f = f.call(b);
                          !(h = (d = f.next()).done) &&
                          (g.push(d.value), !c || g.length !== c);
                          h = !0
                        );
                      } catch (j) {
                        (i = !0), (e = j);
                      } finally {
                        try {
                          h || null == f.return || f.return();
                        } finally {
                          if (i) throw e;
                        }
                      }
                      return g;
                    }
                  })(c, d) ||
                  (function a(b, c) {
                    if (b) {
                      if ("string" == typeof b) return k(b, c);
                      var d = Object.prototype.toString.call(b).slice(8, -1);
                      if (
                        ("Object" === d &&
                          b.constructor &&
                          (d = b.constructor.name),
                        "Map" === d || "Set" === d)
                      )
                        return Array.from(b);
                      if (
                        "Arguments" === d ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)
                      )
                        return k(b, c);
                    }
                  })(c, d) ||
                  (function a() {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()),
              j = i[0],
              m = i[1];
            b.useEffect(
              function () {
                var a = !0,
                  b = function (a) {
                    m(function (b) {
                      return b.stripe
                        ? b
                        : { stripe: a, elements: a.elements(f) };
                    });
                  };
                return (
                  "async" !== h.tag || j.stripe
                    ? "sync" !== h.tag || j.stripe || b(h.stripe)
                    : h.stripePromise.then(function (c) {
                        c && a && b(c);
                      }),
                  function () {
                    a = !1;
                  }
                );
              },
              [h, j, f]
            );
            var n = l(e);
            b.useEffect(
              function () {
                null !== n &&
                  n !== e &&
                  console.warn(
                    "Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."
                  );
              },
              [n, e]
            );
            var o = l(f);
            return (
              b.useEffect(
                function () {
                  if (j.elements) {
                    var a = p(f, o, ["clientSecret", "fonts"]);
                    a && j.elements.update(a);
                  }
                },
                [f, o, j.elements]
              ),
              b.useEffect(
                function () {
                  var a = j.stripe;
                  a &&
                    a._registerWrapper &&
                    a.registerAppInfo &&
                    (a._registerWrapper({
                      name: "react-stripe-js",
                      version: "1.10.0",
                    }),
                    a.registerAppInfo({
                      name: "react-stripe-js",
                      version: "1.10.0",
                      url: "https://stripe.com/docs/stripe-js/react",
                    }));
                },
                [j.stripe]
              ),
              b.createElement(s.Provider, { value: j }, g)
            );
          };
        u.propTypes = { stripe: f.any, options: f.object };
        var v = function (a) {
            var c = b.useContext(s);
            return t(c, a);
          },
          w = function () {
            return v("calls useElements()").elements;
          },
          x = function () {
            return v("calls useStripe()").stripe;
          },
          y = function (a) {
            var b = a.children,
              c = v("mounts <ElementsConsumer>");
            return b(c);
          };
        y.propTypes = { children: f.func.isRequired };
        var z = function (a) {
            var c = b.useRef(a);
            return (
              b.useEffect(
                function () {
                  c.current = a;
                },
                [a]
              ),
              function () {
                c.current && c.current.apply(c, arguments);
              }
            );
          },
          A = function () {},
          B = function (a, c) {
            var d,
              e = "".concat(
                (d = a).charAt(0).toUpperCase() + d.slice(1),
                "Element"
              ),
              g = function (c) {
                var d = c.id,
                  f = c.className,
                  g = c.options,
                  h = void 0 === g ? {} : g,
                  i = c.onBlur,
                  j = c.onFocus,
                  k = c.onReady,
                  m = c.onChange,
                  n = c.onEscape,
                  o = c.onClick,
                  q = c.onLoadError,
                  r = c.onLoaderStart,
                  s = v("mounts <".concat(e, ">")),
                  t = s.elements,
                  u = b.useRef(null),
                  w = b.useRef(null),
                  x = z(void 0 === k ? A : k),
                  y = z(void 0 === i ? A : i),
                  B = z(void 0 === j ? A : j),
                  C = z(void 0 === o ? A : o),
                  D = z(void 0 === m ? A : m),
                  E = z(void 0 === n ? A : n),
                  F = z(void 0 === q ? A : q),
                  G = z(void 0 === r ? A : r);
                b.useLayoutEffect(function () {
                  if (null == u.current && t && null != w.current) {
                    var b = t.create(a, h);
                    (u.current = b),
                      b.mount(w.current),
                      b.on("ready", function () {
                        return x(b);
                      }),
                      b.on("change", D),
                      b.on("blur", y),
                      b.on("focus", B),
                      b.on("escape", E),
                      b.on("loaderror", F),
                      b.on("loaderstart", G),
                      b.on("click", C);
                  }
                });
                var H = l(h);
                return (
                  b.useEffect(
                    function () {
                      if (u.current) {
                        var a = p(h, H, ["paymentRequest"]);
                        a && u.current.update(a);
                      }
                    },
                    [h, H]
                  ),
                  b.useLayoutEffect(function () {
                    return function () {
                      u.current && (u.current.destroy(), (u.current = null));
                    };
                  }, []),
                  b.createElement("div", { id: d, className: f, ref: w })
                );
              },
              h = function (a) {
                v("mounts <".concat(e, ">"));
                var c = a.id,
                  d = a.className;
                return b.createElement("div", { id: c, className: d });
              },
              i = c ? h : g;
            return (
              (i.propTypes = {
                id: f.string,
                className: f.string,
                onChange: f.func,
                onBlur: f.func,
                onFocus: f.func,
                onReady: f.func,
                onClick: f.func,
                onLoadError: f.func,
                onLoaderStart: f.func,
                options: f.object,
              }),
              (i.displayName = e),
              (i.__elementType = a),
              i
            );
          },
          C = "undefined" == typeof window,
          D = B("auBankAccount", C),
          E = B("card", C),
          F = B("cardNumber", C),
          G = B("cardExpiry", C),
          H = B("cardCvc", C),
          I = B("fpxBank", C),
          J = B("iban", C),
          K = B("idealBank", C),
          L = B("p24Bank", C),
          M = B("epsBank", C),
          N = B("payment", C),
          O = B("paymentRequestButton", C),
          P = B("linkAuthentication", C),
          Q = B("shippingAddress", C),
          R = B("affirmMessage", C),
          S = B("afterpayClearpayMessage", C);
        (a.AffirmMessageElement = R),
          (a.AfterpayClearpayMessageElement = S),
          (a.AuBankAccountElement = D),
          (a.CardCvcElement = H),
          (a.CardElement = E),
          (a.CardExpiryElement = G),
          (a.CardNumberElement = F),
          (a.Elements = u),
          (a.ElementsConsumer = y),
          (a.EpsBankElement = M),
          (a.FpxBankElement = I),
          (a.IbanElement = J),
          (a.IdealBankElement = K),
          (a.LinkAuthenticationElement = P),
          (a.P24BankElement = L),
          (a.PaymentElement = N),
          (a.PaymentRequestButtonElement = O),
          (a.ShippingAddressElement = Q),
          (a.useElements = w),
          (a.useStripe = x),
          Object.defineProperty(a, "__esModule", { value: !0 });
      });
    },
    7597: function (a, b) {
      "use strict";
      function c(a) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (a) {
                return typeof a;
              }
            : function (a) {
                return a &&
                  "function" == typeof Symbol &&
                  a.constructor === Symbol &&
                  a !== Symbol.prototype
                  ? "symbol"
                  : typeof a;
              })(a);
      }
      var d,
        e,
        f = "https://js.stripe.com/v3",
        g = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        h =
          "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
        i = function () {
          for (
            var a = document.querySelectorAll('script[src^="'.concat(f, '"]')),
              b = 0;
            b < a.length;
            b++
          ) {
            var c = a[b];
            if (g.test(c.src)) return c;
          }
          return null;
        },
        j = function (a) {
          var b =
              a && !a.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
            c = document.createElement("script");
          c.src = "".concat(f).concat(b);
          var d = document.head || document.body;
          if (!d)
            throw Error(
              "Expected document.body not to be null. Stripe.js requires a <body> element."
            );
          return d.appendChild(c), c;
        },
        k = function (a, b) {
          a &&
            a._registerWrapper &&
            a._registerWrapper({
              name: "stripe-js",
              version: "1.36.0",
              startTime: b,
            });
        },
        l = null,
        m = function (a, b, c) {
          if (null === a) return null;
          var d = a.apply(void 0, b);
          return k(d, c), d;
        },
        n = function (a) {
          var b =
            "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(
              JSON.stringify(a),
              "\n"
            );
          if (null === a || "object" !== c(a)) throw Error(b);
          if (
            1 === Object.keys(a).length &&
            "boolean" == typeof a.advancedFraudSignals
          )
            return a;
          throw Error(b);
        },
        o = !1;
      (function () {
        for (var a = arguments.length, b = Array(a), c = 0; c < a; c++)
          b[c] = arguments[c];
        o = !0;
        var e,
          f = Date.now();
        return ((e = d),
        null !== l
          ? l
          : (l = new Promise(function (a, b) {
              if ("undefined" == typeof window) {
                a(null);
                return;
              }
              if ((window.Stripe && e && console.warn(h), window.Stripe)) {
                a(window.Stripe);
                return;
              }
              try {
                var c = i();
                c && e ? console.warn(h) : c || (c = j(e)),
                  c.addEventListener("load", function () {
                    window.Stripe
                      ? a(window.Stripe)
                      : b(Error("Stripe.js not available"));
                  }),
                  c.addEventListener("error", function () {
                    b(Error("Failed to load Stripe.js"));
                  });
              } catch (d) {
                b(d);
                return;
              }
            }))).then(function (a) {
          return m(a, b, f);
        });
      }.setLoadParameters = function (a) {
        if (o)
          throw Error(
            "You cannot change load parameters after calling loadStripe"
          );
        d = n(a);
      });
    },
    7894: function (a, b, c) {
      c(7597);
    },
    3556: function (a, b, c) {
      "use strict";
      c.d(b, {
        cI: function () {
          return u;
        },
      });
      var d = c(7294);
      c(7894);
      var e,
        f,
        g = c(6664),
        h = Object.create,
        i = Object.defineProperty,
        j = Object.getOwnPropertyDescriptor,
        k = Object.getOwnPropertyNames,
        l = Object.getPrototypeOf,
        m = Object.prototype.hasOwnProperty,
        n = (a, b, c, d) => {
          if ((b && "object" == typeof b) || "function" == typeof b)
            for (let e of k(b))
              m.call(a, e) ||
                e === c ||
                i(a, e, {
                  get: () => b[e],
                  enumerable: !(d = j(b, e)) || d.enumerable,
                });
          return a;
        },
        o = (a, b, c) => (
          (c = null != a ? h(l(a)) : {}),
          n(
            !b && a && a.__esModule
              ? c
              : i(c, "default", { value: a, enumerable: !0 }),
            a
          )
        ),
        p =
          ((e = (a, b) => {
            var c,
              d = Object.defineProperty,
              e = Object.getOwnPropertyDescriptor,
              f = Object.getOwnPropertyNames,
              g = Object.prototype.hasOwnProperty,
              h = {};
            ((a, b) => {
              for (var c in b) d(a, c, { get: b[c], enumerable: !0 });
            })(h, {
              Client: () => r,
              createClient: () => s,
              getDefaultClient: () => t,
              isFieldError: () => v,
            }),
              (b.exports =
                ((c = h),
                ((a, b, c, h) => {
                  if ((b && "object" == typeof b) || "function" == typeof b)
                    for (let i of f(b))
                      g.call(a, i) ||
                        void 0 === i ||
                        d(a, i, {
                          get: () => b[i],
                          enumerable: !(h = e(b, i)) || h.enumerable,
                        });
                  return a;
                })(d({}, "__esModule", { value: !0 }), c)));
            var i,
              j,
              k =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              l =
                /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
              m = (a) =>
                (function (a) {
                  a = String(a);
                  for (
                    var b, c, d, e, f = "", g = 0, h = a.length % 3;
                    g < a.length;

                  ) {
                    if (
                      (c = a.charCodeAt(g++)) > 255 ||
                      (d = a.charCodeAt(g++)) > 255 ||
                      (e = a.charCodeAt(g++)) > 255
                    )
                      throw TypeError(
                        "Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range."
                      );
                    (b = (c << 16) | (d << 8) | e),
                      (f +=
                        k.charAt((b >> 18) & 63) +
                        k.charAt((b >> 12) & 63) +
                        k.charAt((b >> 6) & 63) +
                        k.charAt(63 & b));
                  }
                  return h ? f.slice(0, h - 3) + "===".substring(h) : f;
                })(JSON.stringify(a)),
              n = (a) => {
                let b = "@formspree/core@2.8.0";
                return a ? `${a} ${b}` : b;
              },
              o = (a, b, c) => {
                a instanceof FormData
                  ? a.append(b, c)
                  : (a = Object.assign(a, { [b]: c }));
              },
              p = async ({
                stripePromise: a,
                response: b,
                responseData: c,
                payload: d,
                data: e,
                fetchImpl: f,
                request: g,
                url: h,
              }) => {
                let i = await a.handleCardAction(
                  c.stripe.paymentIntentClientSecret
                );
                if (i.error)
                  return {
                    response: b,
                    body: {
                      errors: [
                        {
                          code: "STRIPE_CLIENT_ERROR",
                          message: "Stripe SCA error",
                          field: "paymentMethod",
                        },
                      ],
                    },
                  };
                {
                  d.paymentMethod.id ||
                    o(e, "paymentMethod", d.paymentMethod.id),
                    o(e, "paymentIntent", i.paymentIntent.id),
                    o(e, "resubmitKey", c.resubmitKey);
                  let j = await f(h, {
                      ...g,
                      body: JSON.stringify({
                        paymentIntent: i.paymentIntent.id,
                        resubmitKey: c.resubmitKey,
                      }),
                    }),
                    k = await j.json();
                  return { response: j, body: k };
                }
              },
              q = class {
                constructor() {
                  (this.loadedAt = 1 * new Date()),
                    (this.webdriver =
                      navigator.webdriver ||
                      !!document.documentElement.getAttribute(
                        (function (a) {
                          if (
                            ((a = String(a).replace(/[\t\n\f\r ]+/g, "")),
                            !l.test(a))
                          )
                            throw TypeError(
                              "Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded."
                            );
                          a += "==".slice(2 - (3 & a.length));
                          for (var b, c, d, e = "", f = 0; f < a.length; )
                            (b =
                              (k.indexOf(a.charAt(f++)) << 18) |
                              (k.indexOf(a.charAt(f++)) << 12) |
                              ((c = k.indexOf(a.charAt(f++))) << 6) |
                              (d = k.indexOf(a.charAt(f++)))),
                              (e +=
                                64 === c
                                  ? String.fromCharCode((b >> 16) & 255)
                                  : 64 === d
                                  ? String.fromCharCode(
                                      (b >> 16) & 255,
                                      (b >> 8) & 255
                                    )
                                  : String.fromCharCode(
                                      (b >> 16) & 255,
                                      (b >> 8) & 255,
                                      255 & b
                                    ));
                          return e;
                        })("d2ViZHJpdmVy")
                      ) ||
                      !!window.callPhantom ||
                      !!window._phantom);
                }
                teardown() {}
                data() {
                  return { loadedAt: this.loadedAt, webdriver: this.webdriver };
                }
              },
              r = class {
                constructor(a = {}) {
                  (this.project = a.project),
                    (this.stripePromise = a.stripePromise),
                    "u" > typeof window && this.startBrowserSession();
                }
                startBrowserSession() {
                  this.session || (this.session = new q());
                }
                teardown() {
                  this.session && this.session.teardown();
                }
                async submitForm(a, b, c = {}) {
                  var d;
                  let e = c.endpoint || "https://formspree.io",
                    f = c.fetchImpl || fetch,
                    g = this.project
                      ? `${e}/p/${this.project}/f/${a}`
                      : `${e}/f/${a}`,
                    h = {
                      Accept: "application/json",
                      "Formspree-Client": n(c.clientName),
                    };
                  this.session &&
                    (h["Formspree-Session-Data"] = m(this.session.data())),
                    b instanceof FormData ||
                      (h["Content-Type"] = "application/json");
                  let i = {
                    method: "POST",
                    mode: "cors",
                    body: (d = b) instanceof FormData ? d : JSON.stringify(d),
                    headers: h,
                  };
                  if (!this.stripePromise || !c.createPaymentMethod)
                    return f(g, i).then((a) =>
                      a.json().then((b) => ({ body: b, response: a }))
                    );
                  {
                    let j = await c.createPaymentMethod();
                    if (j.error)
                      return {
                        response: null,
                        body: {
                          errors: [
                            {
                              code: "STRIPE_CLIENT_ERROR",
                              message: "Error creating payment method",
                              field: "paymentMethod",
                            },
                          ],
                        },
                      };
                    o(b, "paymentMethod", j.paymentMethod.id);
                    let k = await f(g, { ...i, body: b }),
                      l = await k.json();
                    return l &&
                      l.stripe &&
                      l.stripe.requiresAction &&
                      l.resubmitKey
                      ? await p({
                          stripePromise: this.stripePromise,
                          responseData: l,
                          response: k,
                          payload: j,
                          data: b,
                          fetchImpl: f,
                          request: i,
                          url: g,
                        })
                      : { response: k, body: l };
                  }
                }
              },
              s = (a) => new r(a),
              t = () => (j || (j = s()), j),
              u =
                (((i = u || {}).REQUIRED_FIELD_MISSING =
                  "REQUIRED_FIELD_MISSING"),
                (i.REQUIRED_FIELD_EMPTY = "REQUIRED_FIELD_EMPTY"),
                (i.TYPE_EMAIL = "TYPE_EMAIL"),
                (i.TYPE_NUMERIC = "TYPE_NUMERIC"),
                (i.TYPE_TEXT = "TYPE_TEXT"),
                i);
            function v(a) {
              return a.code in u && void 0 !== a.field;
            }
          }),
          () => (f || e((f = { exports: {} }).exports, f), f.exports)),
        q = o(p()),
        r =
          ((0, d.lazy)(() =>
            Promise.resolve()
              .then(c.t.bind(c, 6664, 19))
              .then((a) => ({ default: a.Elements }))
          ),
          d.createContext({ client: void 0 }));
      r.displayName = "Formspree";
      var s,
        t = (a) => void 0 !== a.preventDefault,
        u = (a, b = {}) => {
          let c,
            [e, f] = (0, d.useState)(null),
            [h, i] = (0, d.useState)(!1),
            [j, k] = (0, d.useState)(!1),
            [l, m] = (0, d.useState)([]),
            n = (c = (0, d.useContext)(r)).client
              ? c
              : { client: (0, q.getDefaultClient)() },
            o,
            p;
          if (!(b.client || n))
            throw Error("You must provide a Formspree client");
          if (!a)
            throw Error(
              'You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")'
            );
          n.client &&
            n.client.stripePromise &&
            ((o = (0, g.useStripe)()), (p = (0, g.useElements)()));
          let s = !!b.debug,
            u = b.data;
          return [
            { result: e, submitting: h, succeeded: j, errors: l },
            async (c) => {
              let d = async (a) => {
                  a.preventDefault();
                  let b = a.target;
                  if ("FORM" != b.tagName)
                    throw Error("submit was triggered for a non-form element");
                  return new FormData(b);
                },
                e = t(c) ? await d(c) : c,
                h = (a, b) => {
                  e instanceof FormData
                    ? e.append(a, b)
                    : (e = Object.assign(e, { [a]: b }));
                };
              if ("object" == typeof u)
                for (let j in u)
                  if ("function" == typeof u[j]) {
                    let l = u[j].call(null);
                    l instanceof Promise && (l = await l),
                      void 0 !== l && h(j, l);
                  } else h(j, u[j]);
              let q = async () => {
                let a = {
                  ...(e.address_line1 && { line1: e.address_line1 }),
                  ...(e.address_line2 && { line2: e.address_line2 }),
                  ...(e.address_city && { city: e.address_city }),
                  ...(e.address_country && { country: e.address_country }),
                  ...(e.address_state && { state: e.address_state }),
                  ...(e.address_postal_code && {
                    postal_code: e.address_postal_code,
                  }),
                };
                return await o.createPaymentMethod({
                  type: "card",
                  card: p.getElement(g.CardElement),
                  billing_details: {
                    ...(e.name && { name: e.name }),
                    ...(e.email && { email: e.email }),
                    ...(e.phone && { phone: e.phone }),
                    ...(a && { address: a }),
                  },
                });
              };
              return (
                i(!0),
                n.client
                  .submitForm(a, e, {
                    endpoint: b.endpoint,
                    clientName: "@formspree/react@2.4.0",
                    createPaymentMethod:
                      n.client && n.client.stripePromise ? q : void 0,
                  })
                  .then((a) => {
                    let b = a.response.status,
                      c;
                    return (
                      200 === b
                        ? (s && console.log("Form submitted", a),
                          k(!0),
                          f(a),
                          m([]))
                        : b >= 400 && b < 500
                        ? ((c = a.body).errors && m(c.errors),
                          s && console.log("Validation error", a),
                          k(!1))
                        : (s && console.log("Unexpected error", a), k(!1)),
                      a
                    );
                  })
                  .catch((a) => {
                    throw (s && console.log("Unexpected error", a), k(!1), a);
                  })
                  .finally(() => {
                    i(!1);
                  })
              );
            },
            () => {
              i(!1), k(!1), m([]);
            },
          ];
        };
      o(p()).isFieldError;
    },
    7568: function (a, b, c) {
      "use strict";
      function d(a, b, c, d, e, f, g) {
        try {
          var h = a[f](g),
            i = h.value;
        } catch (j) {
          c(j);
          return;
        }
        h.done ? b(i) : Promise.resolve(i).then(d, e);
      }
      function e(a) {
        return function () {
          var b = this,
            c = arguments;
          return new Promise(function (e, f) {
            var g = a.apply(b, c);
            function h(a) {
              d(g, e, f, h, i, "next", a);
            }
            function i(a) {
              d(g, e, f, h, i, "throw", a);
            }
            h(void 0);
          });
        };
      }
      c.d(b, {
        Z: function () {
          return e;
        },
      });
    },
    9534: function (a, b, c) {
      "use strict";
      function d(a, b) {
        if (null == a) return {};
        var c,
          d,
          e = (function (a, b) {
            if (null == a) return {};
            var c,
              d,
              e = {},
              f = Object.keys(a);
            for (d = 0; d < f.length; d++)
              (c = f[d]), b.indexOf(c) >= 0 || (e[c] = a[c]);
            return e;
          })(a, b);
        if (Object.getOwnPropertySymbols) {
          var f = Object.getOwnPropertySymbols(a);
          for (d = 0; d < f.length; d++)
            (c = f[d]),
              !(b.indexOf(c) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(a, c) &&
                (e[c] = a[c]);
        }
        return e;
      }
      c.d(b, {
        Z: function () {
          return d;
        },
      });
    },
    603: function (a, b, c) {
      "use strict";
      function d(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
        return d;
      }
      function e(a, b) {
        return (
          (function (a) {
            if (Array.isArray(a)) return a;
          })(a) ||
          (function (a) {
            if (
              ("undefined" != typeof Symbol && null != a[Symbol.iterator]) ||
              null != a["@@iterator"]
            )
              return Array.from(a);
          })(a, b) ||
          (function (a, b) {
            if (a) {
              if ("string" == typeof a) return d(a, b);
              var c = Object.prototype.toString.call(a).slice(8, -1);
              if (
                ("Object" === c && a.constructor && (c = a.constructor.name),
                "Map" === c || "Set" === c)
              )
                return Array.from(c);
              if (
                "Arguments" === c ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
              )
                return d(a, b);
            }
          })(a, b) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      c.d(b, {
        Z: function () {
          return e;
        },
      });
    },
    7536: function (a, b, c) {
      "use strict";
      c.d(b, {
        Qr: function () {
          return E;
        },
        cI: function () {
          return av;
        },
      });
      var d = c(7294),
        e = (a) => "checkbox" === a.type,
        f = (a) => a instanceof Date,
        g = (a) => null == a;
      let h = (a) => "object" == typeof a;
      var i = (a) => !g(a) && !Array.isArray(a) && h(a) && !f(a),
        j = (a) =>
          i(a) && a.target
            ? e(a.target)
              ? a.target.checked
              : a.target.value
            : a,
        k = (a) => a.substring(0, a.search(/\.\d+(\.|$)/)) || a,
        l = (a, b) => a.has(k(b)),
        m = (a) => (Array.isArray(a) ? a.filter(Boolean) : []),
        n = (a) => void 0 === a,
        o = (a, b, c) => {
          if (!b || !i(a)) return c;
          let d = m(b.split(/[,[\].]+?/)).reduce(
            (a, b) => (g(a) ? a : a[b]),
            a
          );
          return n(d) || d === a ? (n(a[b]) ? c : a[b]) : d;
        };
      let p = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
        q = {
          onBlur: "onBlur",
          onChange: "onChange",
          onSubmit: "onSubmit",
          onTouched: "onTouched",
          all: "all",
        },
        r = {
          max: "max",
          min: "min",
          maxLength: "maxLength",
          minLength: "minLength",
          pattern: "pattern",
          required: "required",
          validate: "validate",
        },
        s = d.createContext(null),
        t = () => d.useContext(s);
      var u = (a, b, c, d = !0) => {
          let e = {};
          for (let f in a)
            Object.defineProperty(e, f, {
              get: () => {
                let e = f;
                return (
                  b[e] !== q.all && (b[e] = !d || q.all), c && (c[e] = !0), a[e]
                );
              },
            });
          return e;
        },
        v = (a) => i(a) && !Object.keys(a).length,
        w = (a, b, c) => {
          let { name: d, ...e } = a;
          return (
            v(e) ||
            Object.keys(e).length >= Object.keys(b).length ||
            Object.keys(e).find((a) => b[a] === (!c || q.all))
          );
        },
        x = (a) => (Array.isArray(a) ? a : [a]),
        y = (a, b, c) =>
          c && b
            ? a === b
            : !a ||
              !b ||
              a === b ||
              x(a).some((a) => a && (a.startsWith(b) || b.startsWith(a)));
      function z(a) {
        let b = d.useRef(a);
        (b.current = a),
          d.useEffect(() => {
            let c = (a) => {
                a && a.unsubscribe();
              },
              d =
                !a.disabled &&
                b.current.subject.subscribe({ next: b.current.callback });
            return () => c(d);
          }, [a.disabled]);
      }
      var A = (a) => "string" == typeof a,
        B = (a, b, c, d) => {
          let e = Array.isArray(a);
          return A(a)
            ? (d && b.watch.add(a), o(c, a))
            : e
            ? a.map((a) => (d && b.watch.add(a), o(c, a)))
            : (d && (b.watchAll = !0), c);
        },
        C = (a) => "function" == typeof a,
        D = (a) => {
          for (let b in a) if (C(a[b])) return !0;
          return !1;
        };
      let E = (a) =>
        a.render(
          (function (a) {
            let b = t(),
              { name: c, control: e = b.control, shouldUnregister: f } = a,
              g = l(e._names.array, c),
              h = (function (a) {
                let b = t(),
                  {
                    control: c = b.control,
                    name: e,
                    defaultValue: f,
                    disabled: g,
                    exact: h,
                  } = a || {},
                  j = d.useRef(e);
                j.current = e;
                let k = d.useCallback(
                  (a) => {
                    if (y(j.current, a.name, h)) {
                      let b = B(j.current, c._names, a.values || c._formValues);
                      m(
                        n(j.current) || (i(b) && !D(b))
                          ? { ...b }
                          : Array.isArray(b)
                          ? [...b]
                          : n(b)
                          ? f
                          : b
                      );
                    }
                  },
                  [c, h, f]
                );
                z({ disabled: g, subject: c._subjects.watch, callback: k });
                let [l, m] = d.useState(n(f) ? c._getWatch(e) : f);
                return (
                  d.useEffect(() => {
                    c._removeUnmounted();
                  }),
                  l
                );
              })({
                control: e,
                name: c,
                defaultValue: o(
                  e._formValues,
                  c,
                  o(e._defaultValues, c, a.defaultValue)
                ),
                exact: !0,
              }),
              k = (function (a) {
                let b = t(),
                  {
                    control: c = b.control,
                    disabled: e,
                    name: f,
                    exact: g,
                  } = a || {},
                  [h, i] = d.useState(c._formState),
                  j = d.useRef({
                    isDirty: !1,
                    dirtyFields: !1,
                    touchedFields: !1,
                    isValidating: !1,
                    isValid: !1,
                    errors: !1,
                  }),
                  k = d.useRef(f),
                  l = d.useRef(!0);
                k.current = f;
                let m = d.useCallback(
                  (a) =>
                    l.current &&
                    y(k.current, a.name, g) &&
                    w(a, j.current) &&
                    i({ ...c._formState, ...a }),
                  [c, g]
                );
                return (
                  z({ disabled: e, callback: m, subject: c._subjects.state }),
                  d.useEffect(
                    () => (
                      (l.current = !0),
                      () => {
                        l.current = !1;
                      }
                    ),
                    []
                  ),
                  u(h, c._proxyFormState, j.current, !1)
                );
              })({ control: e, name: c }),
              m = d.useRef(e.register(c, { ...a.rules, value: h }));
            return (
              d.useEffect(() => {
                let a = (a, b) => {
                  let c = o(e._fields, a);
                  c && (c._f.mount = b);
                };
                return (
                  a(c, !0),
                  () => {
                    let b = e._options.shouldUnregister || f;
                    (g ? b && !e._stateFlags.action : b)
                      ? e.unregister(c)
                      : a(c, !1);
                  }
                );
              }, [c, e, g, f]),
              {
                field: {
                  name: c,
                  value: h,
                  onChange: d.useCallback(
                    (a) => {
                      m.current.onChange({
                        target: { value: j(a), name: c },
                        type: p.CHANGE,
                      });
                    },
                    [c]
                  ),
                  onBlur: d.useCallback(() => {
                    m.current.onBlur({
                      target: { value: o(e._formValues, c), name: c },
                      type: p.BLUR,
                    });
                  }, [c, e]),
                  ref: d.useCallback(
                    (a) => {
                      let b = o(e._fields, c);
                      a &&
                        b &&
                        a.focus &&
                        (b._f.ref = {
                          focus: () => a.focus(),
                          select: () => a.select(),
                          setCustomValidity: (b) => a.setCustomValidity(b),
                          reportValidity: () => a.reportValidity(),
                        });
                    },
                    [c, e._fields]
                  ),
                },
                formState: k,
                fieldState: Object.defineProperties(
                  {},
                  {
                    invalid: { enumerable: !0, get: () => !!o(k.errors, c) },
                    isDirty: {
                      enumerable: !0,
                      get: () => !!o(k.dirtyFields, c),
                    },
                    isTouched: {
                      enumerable: !0,
                      get: () => !!o(k.touchedFields, c),
                    },
                    error: { enumerable: !0, get: () => o(k.errors, c) },
                  }
                ),
              }
            );
          })(a)
        );
      var F = (a, b, c, d, e) =>
          b
            ? {
                ...c[a],
                types: {
                  ...(c[a] && c[a].types ? c[a].types : {}),
                  [d]: e || !0,
                },
              }
            : {},
        G = (a) => /^\w*$/.test(a),
        H = (a) => m(a.replace(/["|']|\]/g, "").split(/\.|\[/));
      function I(a, b, c) {
        let d = -1,
          e = G(b) ? [b] : H(b),
          f = e.length,
          g = f - 1;
        for (; ++d < f; ) {
          let h = e[d],
            j = c;
          if (d !== g) {
            let k = a[h];
            j = i(k) || Array.isArray(k) ? k : isNaN(+e[d + 1]) ? {} : [];
          }
          (a[h] = j), (a = a[h]);
        }
        return a;
      }
      let J = (a, b, c) => {
        for (let d of c || Object.keys(a)) {
          let e = o(a, d);
          if (e) {
            let { _f: f, ...g } = e;
            if (f && b(f.name)) {
              if (f.ref.focus && n(f.ref.focus())) break;
              if (f.refs) {
                f.refs[0].focus();
                break;
              }
            } else i(g) && J(g, b);
          }
        }
      };
      var K = (a, b, c) =>
          !c &&
          (b.watchAll ||
            b.watch.has(a) ||
            [...b.watch].some(
              (b) => a.startsWith(b) && /^\.\w+/.test(a.slice(b.length))
            )),
        L = (a, b, c) => {
          let d = m(o(a, c));
          return I(d, "root", b[c]), I(a, c, d), a;
        },
        M = (a) => "boolean" == typeof a,
        N = (a) => "file" === a.type,
        O = (a) => A(a) || d.isValidElement(a),
        P = (a) => "radio" === a.type,
        Q = (a) => a instanceof RegExp;
      let R = { value: !1, isValid: !1 },
        S = { value: !0, isValid: !0 };
      var T = (a) => {
        if (Array.isArray(a)) {
          if (a.length > 1) {
            let b = a
              .filter((a) => a && a.checked && !a.disabled)
              .map((a) => a.value);
            return { value: b, isValid: !!b.length };
          }
          return a[0].checked && !a[0].disabled
            ? a[0].attributes && !n(a[0].attributes.value)
              ? n(a[0].value) || "" === a[0].value
                ? S
                : { value: a[0].value, isValid: !0 }
              : S
            : R;
        }
        return R;
      };
      let U = { isValid: !1, value: null };
      var V = (a) =>
        Array.isArray(a)
          ? a.reduce(
              (a, b) =>
                b && b.checked && !b.disabled
                  ? { isValid: !0, value: b.value }
                  : a,
              U
            )
          : U;
      function W(a, b, c = "validate") {
        if (O(a) || (Array.isArray(a) && a.every(O)) || (M(a) && !a))
          return { type: c, message: O(a) ? a : "", ref: b };
      }
      var X = (a) => (i(a) && !Q(a) ? a : { value: a, message: "" }),
        Y = async (a, b, c, d, f) => {
          let {
            ref: h,
            refs: j,
            required: k,
            maxLength: l,
            minLength: m,
            min: n,
            max: o,
            pattern: p,
            validate: q,
            name: s,
            valueAsNumber: t,
            mount: u,
            disabled: w,
          } = a._f;
          if (!u || w) return {};
          let x = j ? j[0] : h,
            y = (a) => {
              d &&
                x.reportValidity &&
                (x.setCustomValidity(M(a) ? "" : a || " "), x.reportValidity());
            },
            z = {},
            B = P(h),
            D = e(h),
            E =
              ((t || N(h)) && !h.value) ||
              "" === b ||
              (Array.isArray(b) && !b.length),
            G = F.bind(null, s, c, z),
            H = (a, b, c, d = r.maxLength, e = r.minLength) => {
              let f = a ? b : c;
              z[s] = {
                type: a ? d : e,
                message: f,
                ref: h,
                ...G(a ? d : e, f),
              };
            };
          if (
            f
              ? !Array.isArray(b) || !b.length
              : k &&
                ((!(B || D) && (E || g(b))) ||
                  (M(b) && !b) ||
                  (D && !T(j).isValid) ||
                  (B && !V(j).isValid))
          ) {
            let { value: I, message: J } = O(k)
              ? { value: !!k, message: k }
              : X(k);
            if (
              I &&
              ((z[s] = {
                type: r.required,
                message: J,
                ref: x,
                ...G(r.required, J),
              }),
              !c)
            )
              return y(J), z;
          }
          if (!E && (!g(n) || !g(o))) {
            let K,
              L,
              R = X(o),
              S = X(n);
            if (g(b) || isNaN(b)) {
              let U = h.valueAsDate || new Date(b);
              A(R.value) && (K = U > new Date(R.value)),
                A(S.value) && (L = U < new Date(S.value));
            } else {
              let Y = h.valueAsNumber || (b ? +b : b);
              g(R.value) || (K = Y > R.value), g(S.value) || (L = Y < S.value);
            }
            if ((K || L) && (H(!!K, R.message, S.message, r.max, r.min), !c))
              return y(z[s].message), z;
          }
          if ((l || m) && !E && (A(b) || (f && Array.isArray(b)))) {
            let Z = X(l),
              $ = X(m),
              _ = !g(Z.value) && b.length > Z.value,
              aa = !g($.value) && b.length < $.value;
            if ((_ || aa) && (H(_, Z.message, $.message), !c))
              return y(z[s].message), z;
          }
          if (p && !E && A(b)) {
            let { value: ab, message: ac } = X(p);
            if (
              Q(ab) &&
              !b.match(ab) &&
              ((z[s] = {
                type: r.pattern,
                message: ac,
                ref: h,
                ...G(r.pattern, ac),
              }),
              !c)
            )
              return y(ac), z;
          }
          if (q) {
            if (C(q)) {
              let ad = await q(b),
                ae = W(ad, x);
              if (ae && ((z[s] = { ...ae, ...G(r.validate, ae.message) }), !c))
                return y(ae.message), z;
            } else if (i(q)) {
              let af = {};
              for (let ag in q) {
                if (!v(af) && !c) break;
                let ah = W(await q[ag](b), x, ag);
                ah &&
                  ((af = { ...ah, ...G(ag, ah.message) }),
                  y(ah.message),
                  c && (z[s] = af));
              }
              if (!v(af) && ((z[s] = { ref: x, ...af }), !c)) return z;
            }
          }
          return y(!0), z;
        },
        Z =
          "undefined" != typeof window &&
          void 0 !== window.HTMLElement &&
          "undefined" != typeof document;
      function $(a) {
        let b,
          c = Array.isArray(a);
        if (a instanceof Date) b = new Date(a);
        else if (a instanceof Set) b = new Set(a);
        else if (
          !(!(Z && (a instanceof Blob || a instanceof FileList)) && (c || i(a)))
        )
          return a;
        else
          for (let d in ((b = c ? [] : {}), a)) {
            if (C(a[d])) {
              b = a;
              break;
            }
            b[d] = $(a[d]);
          }
        return b;
      }
      var _ = (a) => ({
        isOnSubmit: !a || a === q.onSubmit,
        isOnBlur: a === q.onBlur,
        isOnChange: a === q.onChange,
        isOnAll: a === q.all,
        isOnTouch: a === q.onTouched,
      });
      function aa(a) {
        for (let b in a) if (!n(a[b])) return !1;
        return !0;
      }
      function ab(a, b) {
        let c = G(b) ? [b] : H(b),
          d =
            1 == c.length
              ? a
              : (function (a, b) {
                  let c = b.slice(0, -1).length,
                    d = 0;
                  for (; d < c; ) a = n(a) ? d++ : a[b[d++]];
                  return a;
                })(a, c),
          e = c[c.length - 1],
          f;
        d && delete d[e];
        for (let g = 0; g < c.slice(0, -1).length; g++) {
          let h = -1,
            j,
            k = c.slice(0, -(g + 1)),
            l = k.length - 1;
          for (g > 0 && (f = a); ++h < k.length; ) {
            let m = k[h];
            (j = j ? j[m] : a[m]),
              l === h &&
                ((i(j) && v(j)) || (Array.isArray(j) && aa(j))) &&
                (f ? delete f[m] : delete a[m]),
              (f = j);
          }
        }
        return a;
      }
      function ac() {
        let a = [],
          b = (b) => {
            for (let c of a) c.next(b);
          },
          c = (b) => (
            a.push(b),
            {
              unsubscribe: () => {
                a = a.filter((a) => a !== b);
              },
            }
          ),
          d = () => {
            a = [];
          };
        return {
          get observers() {
            return a;
          },
          next: b,
          subscribe: c,
          unsubscribe: d,
        };
      }
      var ad = (a) => g(a) || !h(a);
      function ae(a, b) {
        if (ad(a) || ad(b)) return a === b;
        if (f(a) && f(b)) return a.getTime() === b.getTime();
        let c = Object.keys(a),
          d = Object.keys(b);
        if (c.length !== d.length) return !1;
        for (let e of c) {
          let g = a[e];
          if (!d.includes(e)) return !1;
          if ("ref" !== e) {
            let h = b[e];
            if (
              (f(g) && f(h)) ||
              (i(g) && i(h)) ||
              (Array.isArray(g) && Array.isArray(h))
                ? !ae(g, h)
                : g !== h
            )
              return !1;
          }
        }
        return !0;
      }
      var af = (a) => {
          let b = a ? a.ownerDocument : 0,
            c = b && b.defaultView ? b.defaultView.HTMLElement : HTMLElement;
          return a instanceof c;
        },
        ag = (a) => "select-multiple" === a.type,
        ah = (a) => P(a) || e(a),
        ai = (a) => af(a) && a.isConnected;
      function aj(a, b = {}) {
        let c = Array.isArray(a);
        if (i(a) || c)
          for (let d in a)
            Array.isArray(a[d]) || (i(a[d]) && !D(a[d]))
              ? ((b[d] = Array.isArray(a[d]) ? [] : {}), aj(a[d], b[d]))
              : g(a[d]) || (b[d] = !0);
        return b;
      }
      function ak(a, b, c) {
        let d = Array.isArray(a);
        if (i(a) || d)
          for (let e in a)
            Array.isArray(a[e]) || (i(a[e]) && !D(a[e]))
              ? n(b) || ad(c[e])
                ? (c[e] = Array.isArray(a[e]) ? aj(a[e], []) : { ...aj(a[e]) })
                : ak(a[e], g(b) ? {} : b[e], c[e])
              : (c[e] = !ae(a[e], b[e]));
        return c;
      }
      var al = (a, b) => ak(a, b, aj(b)),
        am = (a, { valueAsNumber: b, valueAsDate: c, setValueAs: d }) =>
          n(a)
            ? a
            : b
            ? "" === a
              ? NaN
              : a
              ? +a
              : a
            : c && A(a)
            ? new Date(a)
            : d
            ? d(a)
            : a;
      function an(a) {
        let b = a.ref;
        return (a.refs ? a.refs.every((a) => a.disabled) : b.disabled)
          ? void 0
          : N(b)
          ? b.files
          : P(b)
          ? V(a.refs).value
          : ag(b)
          ? [...b.selectedOptions].map(({ value: a }) => a)
          : e(b)
          ? T(a.refs).value
          : am(n(b.value) ? a.ref.value : b.value, a);
      }
      var ao = (a, b, c, d) => {
          let e = {};
          for (let f of a) {
            let g = o(b, f);
            g && I(e, f, g._f);
          }
          return {
            criteriaMode: c,
            names: [...a],
            fields: e,
            shouldUseNativeValidation: d,
          };
        },
        ap = (a) =>
          n(a)
            ? void 0
            : Q(a)
            ? a.source
            : i(a)
            ? Q(a.value)
              ? a.value.source
              : a.value
            : a,
        aq = (a) =>
          a.mount &&
          (a.required ||
            a.min ||
            a.max ||
            a.maxLength ||
            a.minLength ||
            a.pattern ||
            a.validate);
      function ar(a, b, c) {
        let d = o(a, c);
        if (d || G(c)) return { error: d, name: c };
        let e = c.split(".");
        for (; e.length; ) {
          let f = e.join("."),
            g = o(b, f),
            h = o(a, f);
          if (g && !Array.isArray(g) && c !== f) break;
          if (h && h.type) return { name: f, error: h };
          e.pop();
        }
        return { name: c };
      }
      var as = (a, b, c, d, e) =>
          !e.isOnAll &&
          (!c && e.isOnTouch
            ? !(b || a)
            : (c ? d.isOnBlur : e.isOnBlur)
            ? !a
            : (c ? !d.isOnChange : !e.isOnChange) || a),
        at = (a, b) => !m(o(a, b)).length && ab(a, b);
      let au = {
        mode: q.onSubmit,
        reValidateMode: q.onChange,
        shouldFocusError: !0,
      };
      function av(a = {}) {
        let b = d.useRef(),
          [c, h] = d.useState({
            isDirty: !1,
            isValidating: !1,
            dirtyFields: {},
            isSubmitted: !1,
            submitCount: 0,
            touchedFields: {},
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            errors: {},
          });
        b.current
          ? (b.current.control._options = a)
          : (b.current = {
              ...(function (a = {}) {
                let b = { ...au, ...a },
                  c = {
                    isDirty: !1,
                    isValidating: !1,
                    dirtyFields: {},
                    isSubmitted: !1,
                    submitCount: 0,
                    touchedFields: {},
                    isSubmitting: !1,
                    isSubmitSuccessful: !1,
                    isValid: !1,
                    errors: {},
                  },
                  d = {},
                  h = $(b.defaultValues) || {},
                  i = b.shouldUnregister ? {} : $(h),
                  k = { action: !1, mount: !1, watch: !1 },
                  r = {
                    mount: new Set(),
                    unMount: new Set(),
                    array: new Set(),
                    watch: new Set(),
                  },
                  s,
                  t = 0,
                  u = {},
                  w = {
                    isDirty: !1,
                    dirtyFields: !1,
                    touchedFields: !1,
                    isValidating: !1,
                    isValid: !1,
                    errors: !1,
                  },
                  y = { watch: ac(), array: ac(), state: ac() },
                  z = _(b.mode),
                  D = _(b.reValidateMode),
                  E = b.criteriaMode === q.all,
                  F = (a) => (b) => {
                    clearTimeout(t), (t = window.setTimeout(a, b));
                  },
                  G = async (a) => {
                    let e = !1;
                    return (
                      w.isValid &&
                        ((e = b.resolver
                          ? v((await S()).errors)
                          : await U(d, !0)),
                        a ||
                          e === c.isValid ||
                          ((c.isValid = e), y.state.next({ isValid: e }))),
                      e
                    );
                  },
                  H = (a, b = [], e, f, g = !0, j = !0) => {
                    if (f && e) {
                      if (((k.action = !0), j && Array.isArray(o(d, a)))) {
                        let l = e(o(d, a), f.argA, f.argB);
                        g && I(d, a, l);
                      }
                      if (w.errors && j && Array.isArray(o(c.errors, a))) {
                        let m = e(o(c.errors, a), f.argA, f.argB);
                        g && I(c.errors, a, m), at(c.errors, a);
                      }
                      if (
                        w.touchedFields &&
                        j &&
                        Array.isArray(o(c.touchedFields, a))
                      ) {
                        let n = e(o(c.touchedFields, a), f.argA, f.argB);
                        g && I(c.touchedFields, a, n);
                      }
                      w.dirtyFields && (c.dirtyFields = al(h, i)),
                        y.state.next({
                          isDirty: W(a, b),
                          dirtyFields: c.dirtyFields,
                          errors: c.errors,
                          isValid: c.isValid,
                        });
                    } else I(i, a, b);
                  },
                  O = (a, b) => {
                    I(c.errors, a, b), y.state.next({ errors: c.errors });
                  },
                  P = (a, b, c, e) => {
                    let f = o(d, a);
                    if (f) {
                      let g = o(i, a, n(c) ? o(h, a) : c);
                      n(g) || (e && e.defaultChecked) || b
                        ? I(i, a, b ? g : an(f._f))
                        : aj(a, g),
                        k.mount && G();
                    }
                  },
                  Q = (a, b, d, e, f) => {
                    let g = !1,
                      i = { name: a },
                      j = o(c.touchedFields, a);
                    if (w.isDirty) {
                      let k = c.isDirty;
                      (c.isDirty = i.isDirty = W()), (g = k !== i.isDirty);
                    }
                    if (w.dirtyFields && (!d || e)) {
                      let l = o(c.dirtyFields, a),
                        m = ae(o(h, a), b);
                      m ? ab(c.dirtyFields, a) : I(c.dirtyFields, a, !0),
                        (i.dirtyFields = c.dirtyFields),
                        (g = g || l !== o(c.dirtyFields, a));
                    }
                    return (
                      d &&
                        !j &&
                        (I(c.touchedFields, a, d),
                        (i.touchedFields = c.touchedFields),
                        (g = g || (w.touchedFields && j !== d))),
                      g && f && y.state.next(i),
                      g ? i : {}
                    );
                  },
                  R = async (b, d, e, f) => {
                    let g = o(c.errors, b),
                      h = w.isValid && c.isValid !== d;
                    if (
                      (a.delayError && e
                        ? (s = F(() => O(b, e)))(a.delayError)
                        : (clearTimeout(t),
                          (s = null),
                          e ? I(c.errors, b, e) : ab(c.errors, b)),
                      (e ? !ae(g, e) : g) || !v(f) || h)
                    ) {
                      let i = {
                        ...f,
                        ...(h ? { isValid: d } : {}),
                        errors: c.errors,
                        name: b,
                      };
                      (c = { ...c, ...i }), y.state.next(i);
                    }
                    u[b]--,
                      w.isValidating &&
                        !Object.values(u).some((a) => a) &&
                        (y.state.next({ isValidating: !1 }), (u = {}));
                  },
                  S = async (a) =>
                    b.resolver
                      ? await b.resolver(
                          { ...i },
                          b.context,
                          ao(
                            a || r.mount,
                            d,
                            b.criteriaMode,
                            b.shouldUseNativeValidation
                          )
                        )
                      : {},
                  T = async (a) => {
                    let { errors: b } = await S();
                    if (a)
                      for (let d of a) {
                        let e = o(b, d);
                        e ? I(c.errors, d, e) : ab(c.errors, d);
                      }
                    else c.errors = b;
                    return b;
                  },
                  U = async (a, d, e = { valid: !0 }) => {
                    for (let f in a) {
                      let g = a[f];
                      if (g) {
                        let { _f: h, ...j } = g;
                        if (h) {
                          let k = r.array.has(h.name),
                            l = await Y(
                              g,
                              o(i, h.name),
                              E,
                              b.shouldUseNativeValidation,
                              k
                            );
                          if (l[h.name] && ((e.valid = !1), d)) break;
                          d ||
                            (o(l, h.name)
                              ? k
                                ? L(c.errors, l, h.name)
                                : I(c.errors, h.name, l[h.name])
                              : ab(c.errors, h.name));
                        }
                        j && (await U(j, d, e));
                      }
                    }
                    return e.valid;
                  },
                  V = () => {
                    for (let a of r.unMount) {
                      let b = o(d, a);
                      b &&
                        (b._f.refs
                          ? b._f.refs.every((a) => !ai(a))
                          : !ai(b._f.ref)) &&
                        aD(a);
                    }
                    r.unMount = new Set();
                  },
                  W = (a, b) => (a && b && I(i, a, b), !ae(ay(), h)),
                  X = (a, b, c) => {
                    let d = {
                      ...(k.mount ? i : n(b) ? h : A(a) ? { [a]: b } : b),
                    };
                    return B(a, r, d, c);
                  },
                  aa = (b) =>
                    m(
                      o(
                        k.mount ? i : h,
                        b,
                        a.shouldUnregister ? o(h, b, []) : []
                      )
                    ),
                  aj = (a, b, c = {}) => {
                    let f = o(d, a),
                      h = b;
                    if (f) {
                      let j = f._f;
                      j &&
                        (j.disabled || I(i, a, am(b, j)),
                        (h = Z && af(j.ref) && g(b) ? "" : b),
                        ag(j.ref)
                          ? [...j.ref.options].forEach(
                              (a) => (a.selected = h.includes(a.value))
                            )
                          : j.refs
                          ? e(j.ref)
                            ? j.refs.length > 1
                              ? j.refs.forEach(
                                  (a) =>
                                    !a.disabled &&
                                    (a.checked = Array.isArray(h)
                                      ? !!h.find((b) => b === a.value)
                                      : h === a.value)
                                )
                              : j.refs[0] && (j.refs[0].checked = !!h)
                            : j.refs.forEach((a) => (a.checked = a.value === h))
                          : N(j.ref)
                          ? (j.ref.value = "")
                          : ((j.ref.value = h),
                            j.ref.type || y.watch.next({ name: a })));
                    }
                    (c.shouldDirty || c.shouldTouch) &&
                      Q(a, h, c.shouldTouch, c.shouldDirty, !0),
                      c.shouldValidate && ax(a);
                  },
                  ak = (a, b, c) => {
                    for (let e in b) {
                      let g = b[e],
                        h = `${a}.${e}`,
                        i = o(d, h);
                      (!r.array.has(a) && ad(g) && (!i || i._f)) || f(g)
                        ? aj(h, g, c)
                        : ak(h, g, c);
                    }
                  },
                  av = (a, b, e = {}) => {
                    let f = o(d, a),
                      j = r.array.has(a),
                      k = $(b);
                    I(i, a, k),
                      j
                        ? (y.array.next({ name: a, values: i }),
                          (w.isDirty || w.dirtyFields) &&
                            e.shouldDirty &&
                            ((c.dirtyFields = al(h, i)),
                            y.state.next({
                              name: a,
                              dirtyFields: c.dirtyFields,
                              isDirty: W(a, k),
                            })))
                        : !f || f._f || g(k)
                        ? aj(a, k, e)
                        : ak(a, k, e),
                      K(a, r) && y.state.next({}),
                      y.watch.next({ name: a });
                  },
                  aw = async (a) => {
                    let e = a.target,
                      f = e.name,
                      g = o(d, f);
                    if (g) {
                      let h,
                        k,
                        l = e.type ? an(g._f) : j(a),
                        m = a.type === p.BLUR || a.type === p.FOCUS_OUT,
                        n =
                          (!aq(g._f) &&
                            !b.resolver &&
                            !o(c.errors, f) &&
                            !g._f.deps) ||
                          as(m, o(c.touchedFields, f), c.isSubmitted, D, z),
                        q = K(f, r, m);
                      I(i, f, l),
                        m
                          ? (g._f.onBlur && g._f.onBlur(a), s && s(0))
                          : g._f.onChange && g._f.onChange(a);
                      let t = Q(f, l, m, !1),
                        w = !v(t) || q;
                      if ((m || y.watch.next({ name: f, type: a.type }), n))
                        return w && y.state.next({ name: f, ...(q ? {} : t) });
                      if (
                        (!m && q && y.state.next({}),
                        (u[f] = (u[f], 1)),
                        y.state.next({ isValidating: !0 }),
                        b.resolver)
                      ) {
                        let { errors: x } = await S([f]),
                          A = ar(c.errors, d, f),
                          B = ar(x, d, A.name || f);
                        (h = B.error), (f = B.name), (k = v(x));
                      } else
                        (h = (
                          await Y(g, o(i, f), E, b.shouldUseNativeValidation)
                        )[f]),
                          (k = await G(!0));
                      g._f.deps && ax(g._f.deps), R(f, k, h, t);
                    }
                  },
                  ax = async (a, e = {}) => {
                    let f,
                      g,
                      h = x(a);
                    if ((y.state.next({ isValidating: !0 }), b.resolver)) {
                      let i = await T(n(a) ? a : h);
                      (f = v(i)), (g = a ? !h.some((a) => o(i, a)) : f);
                    } else
                      a
                        ? ((g = (
                            await Promise.all(
                              h.map(async (a) => {
                                let b = o(d, a);
                                return await U(b && b._f ? { [a]: b } : b);
                              })
                            )
                          ).every(Boolean)) ||
                            c.isValid) &&
                          G()
                        : (g = f = await U(d));
                    return (
                      y.state.next({
                        ...(!A(a) || (w.isValid && f !== c.isValid)
                          ? {}
                          : { name: a }),
                        ...(b.resolver ? { isValid: f } : {}),
                        errors: c.errors,
                        isValidating: !1,
                      }),
                      e.shouldFocus &&
                        !g &&
                        J(d, (a) => o(c.errors, a), a ? h : r.mount),
                      g
                    );
                  },
                  ay = (a) => {
                    let b = { ...h, ...(k.mount ? i : {}) };
                    return n(a) ? b : A(a) ? o(b, a) : a.map((a) => o(b, a));
                  },
                  az = (a, b) => ({
                    invalid: !!o((b || c).errors, a),
                    isDirty: !!o((b || c).dirtyFields, a),
                    isTouched: !!o((b || c).touchedFields, a),
                    error: o((b || c).errors, a),
                  }),
                  aA = (a) => {
                    a ? x(a).forEach((a) => ab(c.errors, a)) : (c.errors = {}),
                      y.state.next({ errors: c.errors });
                  },
                  aB = (a, b, e) => {
                    let f = (o(d, a, { _f: {} })._f || {}).ref;
                    I(c.errors, a, { ...b, ref: f }),
                      y.state.next({ name: a, errors: c.errors, isValid: !1 }),
                      e && e.shouldFocus && f && f.focus && f.focus();
                  },
                  aC = (a, b) =>
                    C(a)
                      ? y.watch.subscribe({ next: (c) => a(X(void 0, b), c) })
                      : X(a, b, !0),
                  aD = (a, e = {}) => {
                    for (let f of a ? x(a) : r.mount)
                      r.mount.delete(f),
                        r.array.delete(f),
                        o(d, f) &&
                          (e.keepValue || (ab(d, f), ab(i, f)),
                          e.keepError || ab(c.errors, f),
                          e.keepDirty || ab(c.dirtyFields, f),
                          e.keepTouched || ab(c.touchedFields, f),
                          b.shouldUnregister || e.keepDefaultValue || ab(h, f));
                    y.watch.next({}),
                      y.state.next({
                        ...c,
                        ...(e.keepDirty ? { isDirty: W() } : {}),
                      }),
                      e.keepIsValid || G();
                  },
                  aE = (a, c = {}) => {
                    let e = o(d, a),
                      f = M(c.disabled);
                    return (
                      I(d, a, {
                        ...(e || {}),
                        _f: {
                          ...(e && e._f ? e._f : { ref: { name: a } }),
                          name: a,
                          mount: !0,
                          ...c,
                        },
                      }),
                      r.mount.add(a),
                      e
                        ? f && I(i, a, c.disabled ? void 0 : o(i, a, an(e._f)))
                        : P(a, !0, c.value),
                      {
                        ...(f ? { disabled: c.disabled } : {}),
                        ...(b.shouldUseNativeValidation
                          ? {
                              required: !!c.required,
                              min: ap(c.min),
                              max: ap(c.max),
                              minLength: ap(c.minLength),
                              maxLength: ap(c.maxLength),
                              pattern: ap(c.pattern),
                            }
                          : {}),
                        name: a,
                        onChange: aw,
                        onBlur: aw,
                        ref: (f) => {
                          if (f) {
                            aE(a, c), (e = o(d, a));
                            let g =
                                (n(f.value) &&
                                  f.querySelectorAll &&
                                  f.querySelectorAll(
                                    "input,select,textarea"
                                  )[0]) ||
                                f,
                              i = ah(g),
                              j = e._f.refs || [];
                            (i ? !j.find((a) => a === g) : g !== e._f.ref) &&
                              (I(d, a, {
                                _f: {
                                  ...e._f,
                                  ...(i
                                    ? {
                                        refs: [
                                          ...j.filter(ai),
                                          g,
                                          ...(Array.isArray(o(h, a))
                                            ? [{}]
                                            : []),
                                        ],
                                        ref: { type: g.type, name: a },
                                      }
                                    : { ref: g }),
                                },
                              }),
                              P(a, !1, void 0, g));
                          } else
                            (e = o(d, a, {}))._f && (e._f.mount = !1),
                              (b.shouldUnregister || c.shouldUnregister) &&
                                !(l(r.array, a) && k.action) &&
                                r.unMount.add(a);
                        },
                      }
                    );
                  },
                  aF = (a, e) => async (f) => {
                    f &&
                      (f.preventDefault && f.preventDefault(),
                      f.persist && f.persist());
                    let g = !0,
                      h = $(i);
                    y.state.next({ isSubmitting: !0 });
                    try {
                      if (b.resolver) {
                        let { errors: j, values: k } = await S();
                        (c.errors = j), (h = k);
                      } else await U(d);
                      v(c.errors)
                        ? (y.state.next({ errors: {}, isSubmitting: !0 }),
                          await a(h, f))
                        : (e && (await e({ ...c.errors }, f)),
                          b.shouldFocusError &&
                            J(d, (a) => o(c.errors, a), r.mount));
                    } catch (l) {
                      throw ((g = !1), l);
                    } finally {
                      (c.isSubmitted = !0),
                        y.state.next({
                          isSubmitted: !0,
                          isSubmitting: !1,
                          isSubmitSuccessful: v(c.errors) && g,
                          submitCount: c.submitCount + 1,
                          errors: c.errors,
                        });
                    }
                  },
                  aG = (a, b = {}) => {
                    o(d, a) &&
                      (n(b.defaultValue)
                        ? av(a, o(h, a))
                        : (av(a, b.defaultValue), I(h, a, b.defaultValue)),
                      b.keepTouched || ab(c.touchedFields, a),
                      b.keepDirty ||
                        (ab(c.dirtyFields, a),
                        (c.isDirty = b.defaultValue ? W(a, o(h, a)) : W())),
                      !b.keepError && (ab(c.errors, a), w.isValid && G()),
                      y.state.next({ ...c }));
                  },
                  aH = (b, e = {}) => {
                    let f = b || h,
                      g = $(f),
                      j = b && !v(b) ? g : h;
                    if ((e.keepDefaultValues || (h = f), !e.keepValues)) {
                      if (e.keepDirtyValues)
                        for (let l of r.mount)
                          o(c.dirtyFields, l)
                            ? I(j, l, o(i, l))
                            : av(l, o(j, l));
                      else {
                        if (Z && n(b))
                          for (let m of r.mount) {
                            let p = o(d, m);
                            if (p && p._f) {
                              let q = Array.isArray(p._f.refs)
                                ? p._f.refs[0]
                                : p._f.ref;
                              try {
                                if (af(q)) {
                                  q.closest("form").reset();
                                  break;
                                }
                              } catch (s) {}
                            }
                          }
                        d = {};
                      }
                      (i = a.shouldUnregister
                        ? e.keepDefaultValues
                          ? $(h)
                          : {}
                        : g),
                        y.array.next({ values: j }),
                        y.watch.next({ values: j });
                    }
                    (r = {
                      mount: new Set(),
                      unMount: new Set(),
                      array: new Set(),
                      watch: new Set(),
                      watchAll: !1,
                      focus: "",
                    }),
                      (k.mount = !w.isValid || !!e.keepIsValid),
                      (k.watch = !!a.shouldUnregister),
                      y.state.next({
                        submitCount: e.keepSubmitCount ? c.submitCount : 0,
                        isDirty:
                          e.keepDirty || e.keepDirtyValues
                            ? c.isDirty
                            : !!(e.keepDefaultValues && !ae(b, h)),
                        isSubmitted: !!e.keepIsSubmitted && c.isSubmitted,
                        dirtyFields:
                          e.keepDirty || e.keepDirtyValues
                            ? c.dirtyFields
                            : e.keepDefaultValues && b
                            ? al(h, b)
                            : {},
                        touchedFields: e.keepTouched ? c.touchedFields : {},
                        errors: e.keepErrors ? c.errors : {},
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                      });
                  },
                  aI = (a, b) => aH(C(a) ? a(i) : a, b),
                  aJ = (a, b = {}) => {
                    let c = o(d, a)._f,
                      e = c.refs ? c.refs[0] : c.ref;
                    e.focus(), b.shouldSelect && e.select();
                  };
                return {
                  control: {
                    register: aE,
                    unregister: aD,
                    getFieldState: az,
                    _executeSchema: S,
                    _getWatch: X,
                    _getDirty: W,
                    _updateValid: G,
                    _removeUnmounted: V,
                    _updateFieldArray: H,
                    _getFieldArray: aa,
                    _subjects: y,
                    _proxyFormState: w,
                    get _fields() {
                      return d;
                    },
                    get _formValues() {
                      return i;
                    },
                    get _stateFlags() {
                      return k;
                    },
                    set _stateFlags(value) {
                      k = value;
                    },
                    get _defaultValues() {
                      return h;
                    },
                    get _names() {
                      return r;
                    },
                    set _names(value) {
                      r = value;
                    },
                    get _formState() {
                      return c;
                    },
                    set _formState(value) {
                      c = value;
                    },
                    get _options() {
                      return b;
                    },
                    set _options(value) {
                      b = { ...b, ...value };
                    },
                  },
                  trigger: ax,
                  register: aE,
                  handleSubmit: aF,
                  watch: aC,
                  setValue: av,
                  getValues: ay,
                  reset: aI,
                  resetField: aG,
                  clearErrors: aA,
                  unregister: aD,
                  setError: aB,
                  setFocus: aJ,
                  getFieldState: az,
                };
              })(a),
              formState: c,
            });
        let i = b.current.control,
          k = d.useCallback(
            (a) => {
              w(a, i._proxyFormState, !0) &&
                ((i._formState = { ...i._formState, ...a }),
                h({ ...i._formState }));
            },
            [i]
          );
        return (
          z({ subject: i._subjects.state, callback: k }),
          d.useEffect(() => {
            i._stateFlags.mount ||
              (i._proxyFormState.isValid && i._updateValid(),
              (i._stateFlags.mount = !0)),
              i._stateFlags.watch &&
                ((i._stateFlags.watch = !1), i._subjects.state.next({})),
              i._removeUnmounted();
          }),
          (b.current.formState = u(c, i._proxyFormState)),
          b.current
        );
      }
    },
  },
]);
