(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [335],
  {
    1382: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact",
        function () {
          return c(3120);
        },
      ]);
    },
    3120: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return w;
          },
        });
      var d = c(7568),
        e = c(603),
        f = c(4051),
        g = c.n(f),
        h = c(5893),
        i = c(7294),
        j = c(684),
        k = c(471),
        l = c(3556),
        m = c(7536),
        n = c(1799),
        o = c(9534),
        p = c(5820),
        q = function (a) {
          var b = a.error;
          return (0, h.jsx)(p.M, {
            children: b
              ? (0, h.jsx)(j.E.aside, {
                  initial: { translateY: "-25%", opacity: 0 },
                  animate: { translateY: "0%", opacity: 1 },
                  exit: {
                    translateY: "-25%",
                    opacity: 0,
                    transition: { duration: 0.3 },
                  },
                  children: (0, h.jsx)(j.E.p, {
                    initial: "closed",
                    animate: "open",
                    exit: "closed",
                    className: "mt-2 text-sm text-rose-400",
                    children: b,
                  }),
                })
              : null,
          });
        },
        r = q,
        s = function (a) {
          a.fullWidth;
          var b = a.error,
            c = (0, o.Z)(a, ["fullWidth", "error"]);
          return (0, h.jsxs)("div", {
            className: "w-full",
            children: [
              (0, h.jsx)("div", {
                className: "rounded-lg bg-white",
                children: (0, h.jsx)(
                  "input",
                  (0, n.Z)(
                    {
                      className:
                        "w-full rounded-lg p-3 text-card focus:border-highlight focus:outline-card active:outline",
                    },
                    c
                  )
                ),
              }),
              (0, h.jsx)(r, { error: b }),
            ],
          });
        },
        t = s,
        u = c(9830),
        v = function () {
          var a,
            b = (0, e.Z)((0, l.cI)("xnqojawl"), 2),
            c = (b[0], b[1]),
            f = (0, m.cI)(),
            n = f.reset,
            o = f.control,
            p = f.handleSubmit,
            q = (0, i.useState)(!1),
            s = q[0],
            v = q[1],
            w = (0, i.useState)("Send"),
            x = w[0],
            y = w[1],
            z =
              ((a = (0, d.Z)(
                g().mark(function a(b) {
                  var d;
                  return g().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.prev = 0),
                              v(!0),
                              y(""),
                              (d = {
                                name: b.name.trim(),
                                email: b.email.trim(),
                                message: b.message.trim(),
                              }),
                              (a.next = 6),
                              c(d)
                            );
                          case 6:
                            y("Sent \uD83D\uDE80"), (a.next = 12);
                            break;
                          case 9:
                            (a.prev = 9),
                              (a.t0 = a.catch(0)),
                              console.error(a.t0);
                          case 12:
                            return (
                              (a.prev = 12),
                              n(),
                              v(!1),
                              setTimeout(function () {
                                y("Send");
                              }, 2e3),
                              a.finish(12)
                            );
                          case 17:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[0, 9, 12, 17]]
                  );
                })
              )),
              function (b) {
                return a.apply(this, arguments);
              });
          return (0, h.jsxs)("div", {
            className:
              "mt-10 grid grid-cols-1 gap-10 px-5 sm:px-10 lg:grid-cols-2 lg:px-0",
            children: [
              (0, h.jsxs)(j.E.div, {
                initial: "hidden",
                animate: "visible",
                variants: u.Pi,
                className: "container",
                children: [
                  (0, h.jsx)(j.E.h1, {
                    variants: u.oo,
                    className: "text-5xl font-bold text-heading",
                    children: "Get in Touch",
                  }),
                  (0, h.jsxs)("div", {
                    className: "my-3 text-lg",
                    children: [
                      (0, h.jsx)(j.E.p, {
                        variants: u.oo,
                        className: "text-2xl",
                        children: "I'd love to hear your ideas and thoughts!",
                      }),
                      (0, h.jsxs)("div", {
                        className: "mt-14",
                        children: [
                          (0, h.jsx)(j.E.p, {
                            variants: u.oo,
                            children: "Alternatively you can email me at:",
                          }),
                          (0, h.jsx)(j.E.p, {
                            variants: u.oo,
                            children: "m.ahsankhan26@hotmail.com",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, h.jsx)(j.E.div, {
                initial: "hidden",
                animate: "visible",
                variants: u.Pi,
                children: (0, h.jsxs)(j.E.form, {
                  onSubmit: p(z),
                  variants: u.qD,
                  className:
                    "flex-center flex-col gap-4 rounded-3xl bg-card p-5 sm:p-8",
                  children: [
                    (0, h.jsx)(m.Qr, {
                      name: "name",
                      control: o,
                      defaultValue: "",
                      rules: {
                        validate: function (a) {
                          return !!a.trim() || "Please enter name";
                        },
                      },
                      render: function (a) {
                        var b = a.field,
                          c = b.name,
                          d = b.value,
                          e = b.onChange,
                          f = a.fieldState.error;
                        return (0, h.jsx)(t, {
                          type: "text",
                          name: c,
                          value: d,
                          placeholder: "Name",
                          onChange: e,
                          disabled: s,
                          error: null == f ? void 0 : f.message,
                        });
                      },
                    }),
                    (0, h.jsx)(m.Qr, {
                      name: "email",
                      control: o,
                      defaultValue: "",
                      rules: {
                        required: "Please enter email",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid Email",
                        },
                      },
                      render: function (a) {
                        var b = a.field,
                          c = b.name,
                          d = b.value,
                          e = b.onChange,
                          f = a.fieldState.error;
                        return (0, h.jsx)(t, {
                          type: "email",
                          name: c,
                          value: d,
                          disabled: s,
                          onChange: e,
                          placeholder: "Email",
                          error: null == f ? void 0 : f.message,
                        });
                      },
                    }),
                    (0, h.jsx)(m.Qr, {
                      name: "message",
                      control: o,
                      defaultValue: "",
                      rules: {
                        validate: function (a) {
                          return !!a.trim() || "Please enter your message";
                        },
                      },
                      render: function (a) {
                        var b = a.field,
                          c = b.name,
                          d = b.value,
                          e = b.onChange,
                          f = a.fieldState.error;
                        return (0, h.jsxs)("div", {
                          className: "w-full",
                          children: [
                            (0, h.jsx)("textarea", {
                              rows: 5,
                              name: c,
                              value: d,
                              disabled: s,
                              onChange: e,
                              placeholder: "Message",
                              className:
                                "w-full resize-none rounded-lg bg-white p-3 text-card focus:border-highlight focus:outline-card",
                            }),
                            (0, h.jsx)(r, {
                              error: null == f ? void 0 : f.message,
                            }),
                          ],
                        });
                      },
                    }),
                    (0, h.jsxs)("button", {
                      type: "submit",
                      disabled: s,
                      className:
                        "flex-center w-full rounded-lg bg-highlight p-3 text-lg font-semibold text-card transition hover:bg-highlight/80 focus:border-highlight focus:outline-card active:outline",
                      children: [
                        s
                          ? (0, h.jsx)(k.frZ, {
                              size: 24,
                              className: "animate-spin",
                            })
                          : null,
                        x,
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        w = v;
    },
  },
  function (a) {
    a.O(0, [955, 39, 774, 888, 179], function () {
      var b;
      return a((a.s = 1382));
    }),
      (_N_E = a.O());
  },
]);
