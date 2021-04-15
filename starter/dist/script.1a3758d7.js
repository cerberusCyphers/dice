parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    mpVp: [
      function (require, module, exports) {
        'use strict';
        var e,
          t,
          n,
          c,
          r = document.querySelector('#score--0'),
          o = document.getElementById('score--1'),
          a = document.getElementById('current--0'),
          d = document.getElementById('current--1'),
          l = document.querySelector('.dice'),
          s = document.querySelector('.btn--new'),
          i = document.querySelector('.btn--roll'),
          u = document.querySelector('.btn--hold'),
          y = document.querySelector('.player--0'),
          m = document.querySelector('.player--1'),
          v = function () {
            (document.getElementById('current--'.concat(n)).textContent = 0),
              (n = 0 === n ? 1 : 0),
              (t = 0),
              (a.textContent = t),
              y.classList.toggle('player--active'),
              m.classList.toggle('player--active');
          },
          L = function () {
            (r.textContent = 0),
              (o.textContent = 0),
              (a.textContent = 0),
              (d.textContent = 0),
              (e = [0, 0]),
              (t = 0),
              (n = 0),
              (c = !0),
              l.classList.add('hidden'),
              y.classList.remove('player--winner'),
              m.classList.remove('player--winner'),
              y.classList.add('active--player'),
              m.classList.remove('active--player');
          };
        L(),
          i.addEventListener('click', function () {
            if (c) {
              var e = Math.trunc(6 * Math.random()) + 1;
              l.classList.remove('hidden'),
                (l.src = 'dice-'.concat(e, '.png')),
                1 !== e
                  ? ((t += e),
                    (document.getElementById(
                      'current--'.concat(n)
                    ).textContent = t))
                  : v();
            }
          }),
          u.addEventListener('click', function () {
            c &&
              ((e[n] += t),
              (document.getElementById('score--'.concat(n)).textContent = e[n]),
              e[n] >= 100
                ? ((c = !1),
                  document
                    .querySelector('.player--'.concat(n))
                    .classList.add('player--winner'),
                  document
                    .querySelector('.player--'.concat(n))
                    .classList.add('active--player'),
                  l.classList.add('hidden'))
                : v());
          }),
          s.addEventListener('click', L);
      },
      {},
    ],
  },
  {},
  ['mpVp'],
  null
);
//# sourceMappingURL=/script.1a3758d7.js.map
