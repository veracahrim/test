(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    9212: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return c(4228);
        },
      ]);
    },
    394: function (a, b, c) {
      "use strict";
      var d = c(5893),
        e = c(684),
        f = c(9830),
        g = function (a) {
          var b = a.size,
            c = void 0 === b ? 80 : b,
            g = a.animation,
            h = void 0 !== g && g;
          return (0, d.jsx)(e.E.div, {
            variants: h ? f.Pi : {},
            children: (0, d.jsx)("div", {
              className: "flex-center flex-wrap gap-7",
              children:
                null === f.nb || void 0 === f.nb
                  ? void 0
                  : f.nb.map(function (a) {
                      return (0,
                      d.jsx)(e.E.a, { href: a.link, target: "_blank", whileHover: { color: a.color }, variants: h ? f.qD : {}, children: (0, d.jsx)(a.Icon, { size: c }) }, a.link);
                    }),
            }),
          });
        };
      b.Z = g;
    },
    4228: function (a, b, c) {
      "use strict";
      c.r(b);
      var d = c(5893),
        e = c(684),
        f = c(394),
        g = c(9830),
        h = function () {
          return (0, d.jsxs)(e.E.div, {
            initial: "hidden",
            animate: "visible",
            variants: g.Pi,
            className: "container px-10",
            children: [
              (0, d.jsx)(e.E.h1, {
                variants: g.qD,
                className:
                  "flex-center text-5xl font-bold text-light md:text-7xl",
                children: "ABOUT ME",
              }),
              (0, d.jsxs)("div", {
                className: "my-10 flex flex-col gap-3 text-2xl",
                children: [
                  (0, d.jsxs)(e.E.p, {
                    variants: g.oo,
                    children: [
                      "Hey I am ",
                      (0, d.jsx)("strong", {
                        className: "text-highlight",
                        children: "Ahsan Khan",
                      }),
                      "; A self taught Full Stack Software Engineer.",
                    ],
                  }),
                  (0, d.jsxs)(e.E.p, {
                    variants: g.oo,
                    children: [
                      "I have always been interested in computers as a kid and I liked the feeling of creating something,",
                      (0, d.jsx)("br", {}),
                      " Combine these two together and you get a Software Engineer! ✨",
                    ],
                  }),
                  (0, d.jsx)(e.E.p, {
                    variants: g.oo,
                    className: "mt-10",
                    children: "Here are some of the things I am good at",
                  }),
                ],
              }),
              (0, d.jsx)(f.Z, { animation: !0 }),
            ],
          });
        };
      b.default = h;
    },
  },
  function (a) {
    a.O(0, [774, 888, 179], function () {
      var b;
      return a((a.s = 9212));
    }),
      (_N_E = a.O());
  },
]);
