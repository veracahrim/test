(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return c(5075);
        },
      ]);
    },
    2882: function (a, b, c) {
      "use strict";
      var d = c(5893),
        e = c(4184),
        f = c.n(e),
        g = c(684),
        h = function (a) {
          var b = a.noShadow,
            c = a.variants,
            e = a.className,
            h = a.children;
          return (0, d.jsx)(g.E.div, {
            variants: c,
            className: f()(
              "group rounded-3xl bg-card p-8 ".concat(void 0 === e ? "" : e),
              { "hover:shadow-3xl hover:transition hover:duration-500": !b }
            ),
            children: h,
          });
        };
      b.Z = h;
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
    5075: function (a, b, c) {
      "use strict";
      c.r(b);
      var d = c(5893),
        e = c(1664),
        f = c.n(e),
        g = c(684),
        h = c(9583),
        i = c(6893),
        j = c(2882),
        k = c(394),
        l = c(9830),
        m = function () {
          return (0, d.jsx)("div", {
            className: "grid gap-5 px-5 md:grid-cols-3 lg:grid-cols-4",
            children: (0, d.jsxs)(g.E.div, {
              initial: "hidden",
              animate: "visible",
              variants: l.Pi,
              className: "contents",
              children: [
                (0, d.jsx)(j.Z, {
                  variants: l.U2,
                  className: "col-span-3 lg:col-span-2",
                  children: (0, d.jsx)(f(), {
                    href: l.Z6.ABOUT,
                    children: (0, d.jsxs)("a", {
                      className: "flex h-full flex-col justify-between gap-10",
                      children: [
                        (0, d.jsx)("div", {
                          className:
                            "flex-center h-28 w-28 overflow-hidden rounded-full bg-gradient-to-tr from-violet-700 to-yellow-500",
                          children: (0, d.jsx)("img", {
                            src: "image/avatar.jpeg",
                            className: "h-full w-full",
                          }),
                        }),
                        (0, d.jsxs)("div", {
                          children: [
                            (0, d.jsxs)("h1", {
                              className:
                                "mb-3 flex items-center gap-2 text-3xl font-bold text-heading",
                              children: [
                                "Hey, I'm Ahsan",
                                (0, d.jsx)(g.E.div, {
                                  variants: {
                                    hidden: { rotateZ: 30 },
                                    visible: {
                                      rotateZ: 0,
                                      transition: {
                                        duration: 0.3,
                                        repeat: 7,
                                        repeatType: "reverse",
                                      },
                                    },
                                  },
                                  className: "w-fit",
                                  children: "\uD83D\uDC4B",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("div", {
                              className: "flex-between",
                              children: [
                                (0, d.jsx)("p", {
                                  className: "text-lg",
                                  children:
                                    "Full Stack Software Engineer \uD83D\uDCBB",
                                }),
                                (0, d.jsx)(i.qhs, {
                                  size: 30,
                                  className: "group-hover:text-highlight",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, d.jsx)(j.Z, {
                  variants: l.U2,
                  className: "col-span-3 md:col-auto",
                  children: (0, d.jsx)(f(), {
                    href: l.Z6.RESUME,
                    children: (0, d.jsxs)("a", {
                      className:
                        "flex h-full flex-row items-center justify-start gap-10 md:flex-col md:items-start md:justify-between",
                      children: [
                        (0, d.jsx)(i.NOg, {
                          size: 60,
                          className:
                            "text-heading transition group-hover:text-highlight",
                        }),
                        (0, d.jsx)("h1", {
                          className: "text-3xl font-semibold",
                          children: "Resume",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, d.jsx)(j.Z, {
                  variants: l.U2,
                  className: "col-span-3 md:col-auto",
                  children: (0, d.jsxs)("a", {
                    href: l.UY.github.link,
                    target: "_blank",
                    rel: "noreferrer",
                    className:
                      "flex h-full flex-row items-center justify-start gap-10 md:flex-col md:items-start md:justify-between",
                    children: [
                      (0, d.jsx)(h.hJX, {
                        size: 60,
                        className:
                          "text-heading transition group-hover:text-highlight",
                      }),
                      (0, d.jsx)("h1", {
                        className: "text-3xl font-semibold",
                        children: "GitHub",
                      }),
                    ],
                  }),
                }),
                (0, d.jsx)(j.Z, {
                  variants: l.U2,
                  className: "col-span-3 md:col-auto",
                  children: (0, d.jsx)(f(), {
                    href: l.Z6.CONTACT,
                    children: (0, d.jsxs)("a", {
                      className:
                        "flex h-full flex-row items-center justify-start gap-10 md:flex-col md:items-start md:justify-between",
                      children: [
                        (0, d.jsx)(i.IC0, {
                          size: 60,
                          className:
                            "text-heading transition group-hover:text-highlight",
                        }),
                        (0, d.jsx)("h1", {
                          className: "text-3xl font-semibold",
                          children: "Contact",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, d.jsx)(j.Z, {
                  variants: l.U2,
                  className: "col-span-3",
                  children: (0, d.jsxs)("div", {
                    className: "flex h-full flex-col justify-between gap-10 ",
                    children: [
                      (0, d.jsx)("h1", {
                        className: "text-3xl font-semibold",
                        children: "Stuff I like",
                      }),
                      (0, d.jsx)(k.Z, { size: 50 }),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
      b.default = m;
    },
  },
  function (a) {
    a.O(0, [774, 888, 179], function () {
      var b;
      return a((a.s = 8312));
    }),
      (_N_E = a.O());
  },
]);
