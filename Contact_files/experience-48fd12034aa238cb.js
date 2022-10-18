(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [538],
  {
    1906: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/experience",
        function () {
          return c(7119);
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
    7119: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return p;
          },
        });
      var d = c(5893),
        e = c(684),
        f = c(6893),
        g = c(2882),
        h = c(9830),
        i = function (a) {
          var b = a.list,
            c = void 0 === b ? [] : b,
            f = a.title,
            g = a.heading,
            i = a.paragraph,
            j = a.subheading;
          return (0, d.jsxs)("div", {
            className: "mb-5",
            children: [
              (0, d.jsxs)(e.E.div, {
                variants: h.oo,
                children: [
                  (0, d.jsx)("h2", {
                    className: "text-4xl font-bold text-highlight",
                    children: void 0 === f ? "" : f,
                  }),
                  (0, d.jsxs)("div", {
                    className: "text-heading",
                    children: [
                      (0, d.jsx)("p", {
                        className: "text-lg font-semibold",
                        children: void 0 === g ? "" : g,
                      }),
                      (0, d.jsx)("p", {
                        className: "text-sm italic",
                        children: void 0 === j ? "" : j,
                      }),
                    ],
                  }),
                ],
              }),
              (0, d.jsxs)(e.E.div, {
                variants: h.oo,
                children: [
                  (0, d.jsx)("p", {
                    className: "my-3",
                    children: void 0 === i ? "" : i,
                  }),
                  (0, d.jsx)("ul", {
                    className: "my-3 list-inside list-disc",
                    children:
                      null == c
                        ? void 0
                        : c.map(function (a, b) {
                            return (0,
                            d.jsx)("li", { children: a }, "".concat(a, "_").concat(b));
                          }),
                  }),
                ],
              }),
            ],
          });
        },
        j = function (a) {
          var b = a.title,
            c = a.details;
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)(e.E.div, {
                variants: h.oo,
                children: (0, d.jsx)("h1", {
                  className:
                    "mb-10 text-center text-5xl font-bold text-heading sm:text-left sm:text-7xl",
                  children: b,
                }),
              }),
              null == c
                ? void 0
                : c.map(function (a) {
                    return (0,
                    d.jsx)(i, { list: a.list, title: a.title, heading: a.heading, paragraph: a.paragraph, subheading: a.subheading }, a.title);
                  }),
            ],
          });
        },
        k = [
          {
            title: "Geeks of Kolachi",
            heading: "Software Engineer",
            subheading: "Aug 2021 - Present",
            paragraph: "Responsible for developing Web and Mobile Applications",
            list: [
              "Heera Digital: handled UI and interaction of Smart Contracts on Blockchain from frontend.",
              "Motoclub: revamped entire frontend for better user experience and performance.",
              "Joshua Tree Academy: added screens and Calendar feature on the app that gets updated at run-time.",
              "VoterFeed: added feature to import CSV files that resolves into SQL database after categorizing races.",
            ],
          },
          {
            title: "TPS Worldwide",
            heading: "Associate Software Engineer",
            subheading: "Dec 2020 - Jun 2021",
            list: [
              'I was part of a small team called "Internal Automation" in Business Excellence Department, which was responsible for developing and providing support for internal products within TPS such as TPSConnect, EPM and TPSTracker.',
            ],
          },
        ],
        l = [
          {
            title: "TPS Worldwide",
            heading: "Sept 2019 - Oct 2019",
            list: [
              "Worked on TPSConnect Support",
              "Developed Custom SharePoint WebParts",
            ],
          },
          {
            title: "Gaditek",
            heading: "Sept 2018 - Oct 2018",
            list: ["Wrote a WhatsApp Chat Parser script using Python"],
          },
        ],
        m = [
          {
            title: "NED University",
            heading: "Computer Systems Engineering",
            subheading: "2016 - 2020",
          },
        ],
        n = [
          {
            list: [
              "Complete ReactJS Course - Udemy",
              "The Web Developer Bootcamp - Udemy",
              "JavaScript ES6 Course: ECMA Script 6 - Udemy",
              "Problem Solving (Basic) Certificate - HackerRank",
            ],
          },
        ],
        o = function (a) {
          var b = a.name,
            c = a.link,
            e = a.Icon;
          return (0, d.jsx)("a", {
            target: "_blank",
            rel: "noreferrer",
            href: c,
            className: "contents",
            children: (0, d.jsx)("button", {
              className:
                "w-full rounded-lg border py-2 px-5 transition hover:bg-light/10",
              children: (0, d.jsxs)("span", {
                className: "flex-center gap-2 text-sm sm:text-base",
                children: [e ? (0, d.jsx)(e, {}) : null, b],
              }),
            }),
          });
        },
        p = function () {
          return (0, d.jsx)("div", {
            className: "grid grid-cols-3 gap-10 px-5 sm:px-2",
            children: (0, d.jsxs)(e.E.div, {
              initial: "hidden",
              animate: "visible",
              variants: h.Pi,
              className: "contents",
              children: [
                (0, d.jsx)(e.E.div, {
                  variants: h.Pi,
                  className: "col-span-3 lg:col-span-1",
                  children: (0, d.jsxs)("div", {
                    className:
                      "flex-center sticky top-5 h-full flex-col gap-5 md:flex-row lg:h-auto lg:flex-col",
                    children: [
                      (0, d.jsxs)(g.Z, {
                        variants: h.qD,
                        className: "h-full w-full",
                        children: [
                          (0, d.jsx)("h1", {
                            className: "text-3xl font-bold text-heading",
                            children: "Ahsan Khan",
                          }),
                          (0, d.jsxs)("div", {
                            className: "text-sm",
                            children: [
                              (0, d.jsx)("p", {
                                children:
                                  "Full Stack Software Engineer \uD83D\uDCBB",
                              }),
                              (0, d.jsx)("p", {
                                className: "mt-5 text-heading sm:text-base",
                                children: "m.ahsankhan26@hotmail.com",
                              }),
                              (0, d.jsxs)("p", {
                                className: "mt-5 flex items-center gap-1",
                                children: [
                                  (0, d.jsx)(f.i63, {}),
                                  "Karachi | Pakistan \uD83C\uDDF5\uD83C\uDDF0",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, d.jsx)(g.Z, {
                        variants: h.qD,
                        className: "flex-between h-full w-full flex-col gap-3",
                        children:
                          null === h.w6 || void 0 === h.w6
                            ? void 0
                            : h.w6.map(function (a) {
                                return (0,
                                d.jsx)(o, { name: a.name, link: a.link, Icon: a.icon }, a.name);
                              }),
                      }),
                    ],
                  }),
                }),
                (0, d.jsxs)(e.E.div, {
                  variants: h.Pi,
                  className: "col-span-3 lg:col-span-2",
                  children: [
                    (0, d.jsx)(j, { title: "Experience", details: k }),
                    (0, d.jsx)(j, { title: "Internship", details: l }),
                    (0, d.jsx)(j, { title: "Education", details: m }),
                    (0, d.jsx)(j, { title: "Certifications", details: n }),
                  ],
                }),
              ],
            }),
          });
        };
    },
  },
  function (a) {
    a.O(0, [774, 888, 179], function () {
      var b;
      return a((a.s = 1906));
    }),
      (_N_E = a.O());
  },
]);
