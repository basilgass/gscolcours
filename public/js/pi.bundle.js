/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!****************************!*\
  !*** ./resources/js/pi.js ***!
  \****************************/
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e47) { throw _e47; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e48) { didErr = true; err = _e48; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function i(s) {
    if (e[s]) return e[s].exports;
    var n = e[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return t[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
  }

  i.m = t, i.c = e, i.d = function (t, e, s) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: s
    });
  }, i.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var s = Object.create(null);
    if (i.r(s), Object.defineProperty(s, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var n in t) {
      i.d(s, n, function (e) {
        return t[e];
      }.bind(null, n));
    }
    return s;
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return i.d(e, "a", e), e;
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, i.p = "", i(i.s = 9);
}([function (t, e, i) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Fraction = void 0;
  var s = i(1);

  var n = /*#__PURE__*/function () {
    function n(t, e) {
      var _this = this;

      _classCallCheck(this, n);

      return this.parse = function (t, e) {
        var i;
        if (null === t) return _this._numerator = 0, _this._denominator = 1, _this;

        switch (_typeof(t)) {
          case "string":
            if (i = t.split("/"), i.length > 2) throw "Two many divide signs";
            if (i.map(function (t) {
              return "" === t || isNaN(Number(t));
            }).includes(!0)) throw "Not a number";
            if (1 === i.length) return _this.parse(+i[0]);
            2 === i.length ? "0" === i[1] ? (_this._numerator = NaN, _this._denominator = 1) : (_this._numerator = +i[0], _this._denominator = +i[1]) : (_this._numerator = NaN, _this._denominator = 1);
            break;

          case "number":
            if (Number.isSafeInteger(t)) _this._numerator = +t, void 0 !== e && Number.isSafeInteger(e) ? _this._denominator = +e : _this._denominator = 1;else {
              var _i = t.toString().split(".")[1].length;
              void 0 === e ? (_this._numerator = t * Math.pow(10, _i), _this._denominator = Math.pow(10, _i)) : Number.isSafeInteger(e) && (_this._numerator = t * Math.pow(10, _i) - Math.floor(t * Math.pow(10, _i - e)), _this.denominator = Math.pow(10, _i) - Math.pow(10, _i - e));
            }
            break;

          case "object":
            t.isFraction && (_this._numerator = +t.numerator, _this._denominator = +t.denominator);
        }

        return _this;
      }, this.clone = function () {
        var t = new n();
        return t.numerator = +_this._numerator, t.denominator = +_this._denominator, t;
      }, this.zero = function () {
        return _this._numerator = 0, _this._denominator = 1, _this;
      }, this.one = function () {
        return _this._numerator = 1, _this._denominator = 1, _this;
      }, this.infinite = function () {
        return _this._numerator = 1 / 0, _this._denominator = 1, _this;
      }, this.invalid = function () {
        return _this._numerator = NaN, _this._denominator = 1, _this;
      }, this.opposed = function () {
        return _this._numerator = -_this._numerator, _this;
      }, this.add = function (t) {
        var e = _this._numerator,
            i = _this._denominator;
        return _this._numerator = e * t.denominator + t.numerator * i, _this._denominator = i * t.denominator, _this.reduce();
      }, this.subtract = function (t) {
        return _this.add(t.clone().opposed());
      }, this.multiply = function (t) {
        var e = new n(t);
        return _this._numerator = _this._numerator * e.numerator, _this._denominator = _this._denominator * e.denominator, _this.reduce();
      }, this.divide = function (t) {
        var e = new n(t);
        if (0 === e.numerator) return new n().infinite();
        var i = +_this._numerator,
            s = +_this._denominator;
        return _this._numerator = i * e.denominator, _this._denominator = s * e.numerator, _this.reduce();
      }, this.invert = function () {
        var t = +_this._numerator,
            e = +_this._denominator;
        return _this._numerator = e, _this._denominator = t, _this;
      }, this.pow = function (t) {
        return Number.isSafeInteger(t) ? (_this.reduce(), t < 0 && _this.invert(), _this._numerator = Math.pow(_this._numerator, Math.abs(t)), _this._denominator = Math.pow(_this._denominator, Math.abs(t)), _this) : _this.invalid();
      }, this.root = function (t) {
        if (0 === t) return _this;
        t < 0 && _this.invert();
        Math.pow(_this._numerator, Math.abs(1 / t)), Math.pow(_this._denominator, Math.abs(1 / t));
        return _this._numerator = Math.pow(_this._numerator, Math.abs(1 / t)), _this._denominator = Math.pow(_this._denominator, Math.abs(1 / t)), _this;
      }, this.sqrt = function () {
        return _this.root(2);
      }, this.abs = function () {
        return _this._numerator = Math.abs(_this._numerator), _this._denominator = Math.abs(_this._denominator), _this;
      }, this.reduce = function () {
        var t = s.Numeric.gcd(_this._numerator, _this._denominator);
        return _this._numerator = _this._numerator / t, _this._denominator = _this._denominator / t, _this._denominator < 0 && (_this._denominator = -_this._denominator, _this._numerator = -_this._numerator), _this;
      }, this.amplify = function (t) {
        return Number.isSafeInteger(t) && (_this._numerator *= t, _this._denominator *= t), _this;
      }, this.compare = function (t, e) {
        switch (void 0 === e && (e = "="), e) {
          case ">":
            return _this.value > t.value;

          case ">=":
            return _this.value >= t.value;

          case "<":
            return _this.value < t.value;

          case "<=":
            return _this.value <= t.value;

          case "=":
            return _this.value === t.value;

          case "<>":
            return _this.value !== t.value;

          default:
            return !1;
        }
      }, this.lesser = function (t) {
        return _this.compare(t, "<");
      }, this.leq = function (t) {
        return _this.compare(t, "<=");
      }, this.greater = function (t) {
        return _this.compare(t, ">");
      }, this.geq = function (t) {
        return _this.compare(t, ">=");
      }, this.isEqual = function (t) {
        return _this.compare(t, "=");
      }, this.isDifferent = function (t) {
        return _this.compare(t, "<>");
      }, this.isOpposed = function (t) {
        return _this.isEqual(t.clone().opposed());
      }, this.isInverted = function (t) {
        return _this.isEqual(new n().one().divide(t.clone()));
      }, this.isZero = function () {
        return 0 === _this._numerator;
      }, this.isOne = function () {
        return 1 === _this._numerator && 1 === _this._denominator;
      }, this.isPositive = function () {
        return 1 === _this.sign();
      }, this.isNegative = function () {
        return -1 === _this.sign();
      }, this.isNaN = function () {
        return isNaN(_this._numerator);
      }, this.isInfinity = function () {
        return _this._numerator === 1 / 0;
      }, this.isFinite = function () {
        return !_this.isInfinity();
      }, this.isSquare = function () {
        return Math.sqrt(_this._numerator) % 1 == 0 && Math.sqrt(_this._denominator) % 1 == 0;
      }, this.sign = function () {
        return _this._numerator * _this._denominator >= 0 ? 1 : -1;
      }, this.areEquals = function () {
        for (var _e = 0; _e < arguments.length; _e++) {
          if (!_this.isEqual(_e < 0 || arguments.length <= _e ? undefined : arguments[_e])) return !1;
        }

        return !0;
      }, this._numerator = 1, this._denominator = 1, void 0 !== t && this.parse(t, e), this;
    }

    _createClass(n, [{
      key: "isFraction",
      get: function get() {
        return !0;
      }
    }, {
      key: "numerator",
      get: function get() {
        return this._numerator;
      },
      set: function set(t) {
        this._numerator = t;
      }
    }, {
      key: "denominator",
      get: function get() {
        return this._denominator;
      },
      set: function set(t) {
        this._denominator = t;
      }
    }, {
      key: "value",
      get: function get() {
        return this._numerator / this._denominator;
      }
    }, {
      key: "tex",
      get: function get() {
        return 1 === this._denominator ? "" + this._numerator : this._numerator < 0 ? "-\\frac{ ".concat(-this._numerator, " }{ ").concat(this._denominator, " }") : "\\frac{ ".concat(this._numerator, " }{ ").concat(this._denominator, " }");
      }
    }, {
      key: "display",
      get: function get() {
        return 1 === this._denominator ? "" + this._numerator : "".concat(this._numerator, "/").concat(this._denominator);
      }
    }, {
      key: "frac",
      get: function get() {
        return this.tex;
      }
    }, {
      key: "dfrac",
      get: function get() {
        return this.tex.replace("\\frac", "\\dfrac");
      }
    }]);

    return n;
  }();

  e.Fraction = n;
}, function (t, e, i) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Numeric = void 0;

  var s = /*#__PURE__*/function () {
    function s() {
      _classCallCheck(this, s);
    }

    _createClass(s, null, [{
      key: "round",
      value: function round(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        return Number(Math.round(Number(t + "e" + e)) + "e-" + e);
      }
    }, {
      key: "prime",
      value: function prime(t) {
        var e = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181, 1187, 1193, 1201, 1213, 1217, 1223, 1229, 1231, 1237, 1249, 1259, 1277, 1279, 1283, 1289, 1291, 1297, 1301, 1303, 1307, 1319, 1321, 1327, 1361, 1367, 1373, 1381, 1399, 1409, 1423, 1427, 1429, 1433, 1439, 1447, 1451, 1453, 1459, 1471, 1481, 1483, 1487, 1489, 1493, 1499, 1511, 1523, 1531, 1543, 1549, 1553, 1559, 1567, 1571, 1579, 1583, 1597, 1601, 1607, 1609, 1613, 1619, 1621, 1627, 1637, 1657, 1663, 1667, 1669, 1693, 1697, 1699, 1709, 1721, 1723, 1733, 1741, 1747, 1753, 1759, 1777, 1783, 1787, 1789, 1801, 1811, 1823, 1831, 1847, 1861, 1867, 1871, 1873, 1877, 1879, 1889, 1901, 1907, 1913, 1931, 1933, 1949, 1951, 1973, 1979, 1987, 1993, 1997, 1999, 2003, 2011, 2017, 2027, 2029, 2039, 2053, 2063, 2069, 2081, 2083, 2087, 2089, 2099, 2111, 2113, 2129, 2131, 2137, 2141, 2143, 2153, 2161, 2179, 2203, 2207, 2213, 2221, 2237, 2239, 2243, 2251, 2267, 2269, 2273, 2281, 2287, 2293, 2297, 2309, 2311, 2333, 2339, 2341, 2347, 2351, 2357, 2371, 2377, 2381, 2383, 2389, 2393, 2399, 2411, 2417, 2423, 2437, 2441, 2447, 2459, 2467, 2473, 2477, 2503, 2521, 2531, 2539, 2543, 2549, 2551, 2557, 2579, 2591, 2593, 2609, 2617, 2621, 2633, 2647, 2657, 2659, 2663, 2671, 2677, 2683, 2687, 2689, 2693, 2699, 2707, 2711, 2713, 2719, 2729, 2731, 2741, 2749, 2753, 2767, 2777, 2789, 2791, 2797, 2801, 2803, 2819, 2833, 2837, 2843, 2851, 2857, 2861, 2879, 2887, 2897, 2903, 2909, 2917, 2927, 2939, 2953, 2957, 2963, 2969, 2971, 2999, 3001, 3011, 3019, 3023, 3037, 3041, 3049, 3061, 3067, 3079, 3083, 3089, 3109, 3119, 3121, 3137, 3163, 3167, 3169, 3181, 3187, 3191, 3203, 3209, 3217, 3221, 3229, 3251, 3253, 3257, 3259, 3271, 3299, 3301, 3307, 3313, 3319, 3323, 3329, 3331, 3343, 3347, 3359, 3361, 3371, 3373, 3389, 3391, 3407, 3413, 3433, 3449, 3457, 3461, 3463, 3467, 3469, 3491, 3499, 3511, 3517, 3527, 3529, 3533, 3539, 3541, 3547, 3557, 3559, 3571, 3581, 3583, 3593, 3607, 3613, 3617, 3623, 3631, 3637, 3643, 3659, 3671, 3673, 3677, 3691, 3697, 3701, 3709, 3719, 3727, 3733, 3739, 3761, 3767, 3769, 3779, 3793, 3797, 3803, 3821, 3823, 3833, 3847, 3851, 3853, 3863, 3877, 3881, 3889, 3907, 3911, 3917, 3919, 3923, 3929, 3931, 3943, 3947, 3967, 3989, 4001, 4003, 4007, 4013, 4019, 4021, 4027, 4049, 4051, 4057, 4073, 4079, 4091, 4093, 4099, 4111, 4127, 4129, 4133, 4139, 4153, 4157, 4159, 4177, 4201, 4211, 4217, 4219, 4229, 4231, 4241, 4243, 4253, 4259, 4261, 4271, 4273, 4283, 4289, 4297, 4327, 4337, 4339, 4349, 4357, 4363, 4373, 4391, 4397, 4409, 4421, 4423, 4441, 4447, 4451, 4457, 4463, 4481, 4483, 4493, 4507, 4513, 4517, 4519, 4523, 4547, 4549, 4561, 4567, 4583, 4591, 4597, 4603, 4621, 4637, 4639, 4643, 4649, 4651, 4657, 4663, 4673, 4679, 4691, 4703, 4721, 4723, 4729, 4733, 4751, 4759, 4783, 4787, 4789, 4793, 4799, 4801, 4813, 4817, 4831, 4861, 4871, 4877, 4889, 4903, 4909, 4919, 4931, 4933, 4937, 4943, 4951, 4957, 4967, 4969, 4973, 4987, 4993, 4999, 5003, 5009, 5011, 5021, 5023, 5039, 5051, 5059, 5077, 5081, 5087, 5099, 5101, 5107, 5113, 5119, 5147, 5153, 5167, 5171, 5179, 5189, 5197, 5209, 5227, 5231, 5233, 5237, 5261, 5273, 5279, 5281, 5297, 5303, 5309, 5323, 5333, 5347, 5351, 5381, 5387, 5393, 5399, 5407, 5413, 5417, 5419, 5431, 5437, 5441, 5443, 5449, 5471, 5477, 5479, 5483, 5501, 5503, 5507, 5519, 5521, 5527, 5531, 5557, 5563, 5569, 5573, 5581, 5591, 5623, 5639, 5641, 5647, 5651, 5653, 5657, 5659, 5669, 5683, 5689, 5693, 5701, 5711, 5717, 5737, 5741, 5743, 5749, 5779, 5783, 5791, 5801, 5807, 5813, 5821, 5827, 5839, 5843, 5849, 5851, 5857, 5861, 5867, 5869, 5879, 5881, 5897, 5903, 5923, 5927, 5939, 5953, 5981, 5987, 6007, 6011, 6029, 6037, 6043, 6047, 6053, 6067, 6073, 6079, 6089, 6091, 6101, 6113, 6121, 6131, 6133, 6143, 6151, 6163, 6173, 6197, 6199, 6203, 6211, 6217, 6221, 6229, 6247, 6257, 6263, 6269, 6271, 6277, 6287, 6299, 6301, 6311, 6317, 6323, 6329, 6337, 6343, 6353, 6359, 6361, 6367, 6373, 6379, 6389, 6397, 6421, 6427, 6449, 6451, 6469, 6473, 6481, 6491, 6521, 6529, 6547, 6551, 6553, 6563, 6569, 6571, 6577, 6581, 6599, 6607, 6619, 6637, 6653, 6659, 6661, 6673, 6679, 6689, 6691, 6701, 6703, 6709, 6719, 6733, 6737, 6761, 6763, 6779, 6781, 6791, 6793, 6803, 6823, 6827, 6829, 6833, 6841, 6857, 6863, 6869, 6871, 6883, 6899, 6907, 6911, 6917, 6947, 6949, 6959, 6961, 6967, 6971, 6977, 6983, 6991, 6997, 7001, 7013, 7019, 7027, 7039, 7043, 7057, 7069, 7079, 7103, 7109, 7121, 7127, 7129, 7151, 7159, 7177, 7187, 7193, 7207, 7211, 7213, 7219, 7229, 7237, 7243, 7247, 7253, 7283, 7297, 7307, 7309, 7321, 7331, 7333, 7349, 7351, 7369, 7393, 7411, 7417, 7433, 7451, 7457, 7459, 7477, 7481, 7487, 7489, 7499, 7507, 7517, 7523, 7529, 7537, 7541, 7547, 7549, 7559, 7561, 7573, 7577, 7583, 7589, 7591, 7603, 7607, 7621, 7639, 7643, 7649, 7669, 7673, 7681, 7687, 7691, 7699, 7703, 7717, 7723, 7727, 7741, 7753, 7757, 7759, 7789, 7793, 7817, 7823, 7829, 7841, 7853, 7867, 7873, 7877, 7879, 7883, 7901, 7907, 7919, 7927, 7933, 7937, 7949, 7951, 7963, 7993, 8009, 8011, 8017, 8039, 8053, 8059, 8069, 8081, 8087, 8089, 8093, 8101, 8111, 8117, 8123, 8147, 8161, 8167, 8171, 8179, 8191, 8209, 8219, 8221, 8231, 8233, 8237, 8243, 8263, 8269, 8273, 8287, 8291, 8293, 8297, 8311, 8317, 8329, 8353, 8363, 8369, 8377, 8387, 8389, 8419, 8423, 8429, 8431, 8443, 8447, 8461, 8467, 8501, 8513, 8521, 8527, 8537, 8539, 8543, 8563, 8573, 8581, 8597, 8599, 8609, 8623, 8627, 8629, 8641, 8647, 8663, 8669, 8677, 8681, 8689, 8693, 8699, 8707, 8713, 8719, 8731, 8737, 8741, 8747, 8753, 8761, 8779, 8783, 8803, 8807, 8819, 8821, 8831, 8837, 8839, 8849, 8861, 8863, 8867, 8887, 8893, 8923, 8929, 8933, 8941, 8951, 8963, 8969, 8971, 8999, 9001, 9007, 9011, 9013, 9029, 9041, 9043, 9049, 9059, 9067, 9091, 9103, 9109, 9127, 9133, 9137, 9151, 9157, 9161, 9173, 9181, 9187, 9199, 9203, 9209, 9221, 9227, 9239, 9241, 9257, 9277, 9281, 9283, 9293, 9311, 9319, 9323, 9337, 9341, 9343, 9349, 9371, 9377, 9391, 9397, 9403, 9413, 9419, 9421, 9431, 9433, 9437, 9439, 9461, 9463, 9467, 9473, 9479, 9491, 9497, 9511, 9521, 9533, 9539, 9547, 9551, 9587, 9601, 9613, 9619, 9623, 9629, 9631, 9643, 9649, 9661, 9677, 9679, 9689, 9697, 9719, 9721, 9733, 9739, 9743, 9749, 9767, 9769, 9781, 9787, 9791, 9803, 9811, 9817, 9829, 9833, 9839, 9851, 9857, 9859, 9871, 9883, 9887, 9901, 9907, 9923, 9929, 9931, 9941, 9949, 9967, 9973];
        return void 0 === t ? e : e.slice(0, Math.max(e.length, t));
      }
    }, {
      key: "dividers",
      value: function dividers(t) {
        var e;
        var i = Math.sqrt(t);
        e = [];

        for (var _s3 = 1; _s3 < i; _s3++) {
          t % _s3 == 0 && (e.push(_s3), e.push(t / _s3));
        }

        return e.sort(function (t, e) {
          return t - e;
        }), e;
      }
    }, {
      key: "gcd",
      value: function gcd() {
        var e = function e(t, i) {
          return 0 === i ? t : e(i, t % i);
        },
            i = 1,
            _s2 = 2;

        for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
          t[_key] = arguments[_key];
        }

        if (0 === t.length) return 1;
        if (1 === t.length) return 0 === t[0] ? 1 : t[0];
        if (i = e(t[0], t[1]), 1 === i) return 1;

        for (_s2 = 2; _s2 < t.length && (i = e(i, t[_s2]), 1 !== i); _s2++) {
          ;
        }

        return Math.abs(i);
      }
    }, {
      key: "lcm",
      value: function lcm() {
        for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          t[_key2] = arguments[_key2];
        }

        return t.reduce(function (t, e) {
          return Math.abs(t * e / s.gcd(t, e));
        });
      }
    }, {
      key: "randomBool",
      value: function randomBool() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .5;
        return Math.random() < t;
      }
    }, {
      key: "randomInt",
      value: function randomInt(t, e) {
        return void 0 === e ? s.randomInt(0, t) : Math.floor(Math.random() * (e - t + 1) + t);
      }
    }, {
      key: "randomIntSym",
      value: function randomIntSym(t, e) {
        return !1 === e ? s.randomBool() ? this.randomInt(1, t) : -this.randomInt(1, t) : s.randomInt(-t, t);
      }
    }]);

    return s;
  }();

  e.Numeric = s;
}, function (t, e, i) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Polynom = void 0;
  var s = i(7),
      n = i(10),
      r = i(1),
      o = i(0);

  var h = /*#__PURE__*/function () {
    function h(t) {
      var _this2 = this;

      _classCallCheck(this, h);

      for (var _len3 = arguments.length, e = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.genDisplay = function (t, e, i) {
        var s = "";

        var _iterator = _createForOfIteratorHelper(_this2._monoms),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _i2 = _step.value;
            0 !== _i2.coefficient.value && (s += "".concat(1 !== _i2.coefficient.sign() || "" === s && !0 !== e ? "" : "+").concat("tex" === t ? _i2.tex : _i2.display));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return !0 === i && _this2.length > 1 && (s = "tex" === t ? "\\left( ".concat(s, " \\right)") : "(".concat(s, ")")), "" === s && (s = "0"), s;
      }, this.parse = function (t) {
        for (var _len4 = arguments.length, e = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          e[_key4 - 1] = arguments[_key4];
        }

        if (void 0 === e || 0 === e.length) {
          if (t = "" + t, _this2._rawString = t, "" !== t && !isNaN(Number(t))) {
            _this2.empty();

            var _e2 = new s.Monom();

            return _e2.coefficient = new o.Fraction(t), _e2.literalStr = "", _this2.add(_e2), _this2;
          }

          return _this2.shutingYardToReducedPolynom(t);
        }

        if (/^[a-z]/.test(t)) {
          _this2.empty();

          var _i3 = e.map(function (t) {
            return new o.Fraction(t);
          });

          if (t.length > 1) {
            var _e3 = t.split(""),
                _n = 0;

            var _iterator2 = _createForOfIteratorHelper(_i3),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _t = _step2.value;

                var _i4 = new s.Monom();

                _i4.coefficient = _t.clone(), _i4.literalStr = _e3[_n] || "", _this2.add(_i4), _n++;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else {
            var _e4 = _i3.length - 1;

            var _iterator3 = _createForOfIteratorHelper(_i3),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _n2 = _step3.value;

                var _i5 = new s.Monom();

                _i5.coefficient = _n2.clone(), _i5.literalStr = "".concat(t, "^").concat(_e4), _this2.add(_i5), _e4--;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          return _this2;
        }

        return _this2.zero();
      }, this.shutingYardToReducedPolynom = function (t) {
        var e = new n.Shutingyard().parse(t),
            i = e.rpn,
            r = [];
        var o,
            l,
            a = null;

        var _iterator4 = _createForOfIteratorHelper(i),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _t2 = _step4.value;

            if (e.isOperation(_t2)) {
              switch (l = r.pop() || new h().zero(), "^" !== _t2[0] ? o = r.length > 0 && r.pop() || new h().zero() : a = Number(_t2.substr(1)), _t2) {
                case "+":
                  o.add(l);
                  break;

                case "-":
                  o.subtract(l);
                  break;

                case "*":
                  o.multiply(l);
                  break;

                default:
                  null !== a ? "^" === _t2[0] && (o = l.clone().pow(a)) : console.log("Token not recognized in shuting yard to reduce polynom: ", _t2);
              }

              r.push(o);
            } else r.push(new h().add(new s.Monom(_t2)));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        return _this2._monoms = r[0].monoms, _this2;
      }, this.clone = function () {
        var t = new h(),
            e = [];

        var _iterator5 = _createForOfIteratorHelper(_this2._monoms),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _t3 = _step5.value;
            e.push(_t3.clone());
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        return t.monoms = e, t;
      }, this.zero = function () {
        return _this2._monoms = [], _this2._monoms.push(new s.Monom().zero()), _this2._rawString = "0", _this2;
      }, this.one = function () {
        return _this2._monoms = [], _this2._monoms.push(new s.Monom().one()), _this2._rawString = "1", _this2;
      }, this.empty = function () {
        return _this2._monoms = [], _this2._rawString = "", _this2;
      }, this._randomizeDefaults = {
        degree: 2,
        unit: !0,
        fractions: !1,
        factorable: !1,
        letters: "x",
        allowNullMonom: !1,
        numberOfMonoms: !1
      }, this.randomize = function (t) {
        var e = new h();
        void 0 === t && (t = {});

        for (var _e5 in _this2._randomizeDefaults) {
          void 0 === t[_e5] && (t[_e5] = _this2._randomizeDefaults[_e5]);
        }

        return e;
      }, this.rndSimple = function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "x";

        var _h = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;

        var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : -1;
        var a;

        _this2.empty();

        for (var _r = t; _r >= 0; _r--) {
          a = new s.Monom().random(n, _r, i, _r !== t && _h), e && _r === t && (a.coefficient = new o.Fraction().one()), _this2.add(a);
        }

        if (l > 0 && l < _this2.length) for (_this2.reorder(); _this2.length > l;) {
          _this2._monoms.splice(r.Numeric.randomInt(1, _this2.length - 1), 1);
        }
        return _this2;
      }, this.rndFactorable = function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "x";
        _this2._factors = [];

        for (var _s4 = 0; _s4 < t; _s4++) {
          var _t4 = !0 === e || _s4 >= e,
              _n3 = new h().rndSimple(1, _t4, !1, i);

          _this2._factors.push(_n3);
        }

        _this2.empty().monoms = _this2._factors[0].monoms;

        for (var _t5 = 1; _t5 < _this2._factors.length; _t5++) {
          _this2.multiply(_this2._factors[_t5]);
        }

        return _this2;
      }, this.opposed = function () {
        return _this2._monoms = _this2._monoms.map(function (t) {
          return t.opposed();
        }), _this2;
      }, this.add = function () {
        for (var _len5 = arguments.length, t = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          t[_key5] = arguments[_key5];
        }

        for (var _i6 = 0, _t6 = t; _i6 < _t6.length; _i6++) {
          var _e6 = _t6[_i6];
          _e6.isPolynom ? _this2._monoms = _this2._monoms.concat(_e6.monoms) : _e6.isMonom ? _this2._monoms.push(_e6.clone()) : Number.isSafeInteger(_e6) ? _this2._monoms.push(new s.Monom(_e6.toString())) : _this2._monoms.push(new s.Monom(_e6));
        }

        return _this2.reduce();
      }, this.subtract = function () {
        for (var _len6 = arguments.length, t = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          t[_key6] = arguments[_key6];
        }

        for (var _i7 = 0, _t7 = t; _i7 < _t7.length; _i7++) {
          var _e7 = _t7[_i7];
          _e7.isPolynom ? _this2._monoms = _this2._monoms.concat(_e7.clone().opposed().monoms) : _e7.isMonom ? _this2._monoms.push(_e7.clone().opposed()) : Number.isSafeInteger(_e7) ? _this2._monoms.push(new s.Monom(_e7.toString()).opposed()) : _this2._monoms.push(new s.Monom(_e7).opposed());
        }

        return _this2.reduce();
      }, this.multiply = function (t) {
        return t.isPolynom ? _this2.multiplyByPolynom(t) : t.isFraction ? _this2.multiplyByFraction(t) : t.isMonom ? _this2.multiplyByMonom(t) : Number.isSafeInteger(t) ? _this2.multiplyByInteger(t) : _this2;
      }, this.multiplyByPolynom = function (t) {
        var e = [];

        var _iterator6 = _createForOfIteratorHelper(_this2._monoms),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _i8 = _step6.value;

            var _iterator7 = _createForOfIteratorHelper(t.monoms),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _n4 = _step7.value;
                e.push(s.Monom.xmultiply(_i8, _n4));
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        return _this2._monoms = e, _this2.reduce();
      }, this.multiplyByFraction = function (t) {
        var _iterator8 = _createForOfIteratorHelper(_this2._monoms),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _e8 = _step8.value;

            _e8.coefficient.multiply(t);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        return _this2.reduce();
      }, this.multiplyByInteger = function (t) {
        return _this2.multiplyByFraction(new o.Fraction(t));
      }, this.multiplyByMonom = function (t) {
        var _iterator9 = _createForOfIteratorHelper(_this2._monoms),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _e9 = _step9.value;

            _e9.multiply(t);
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        return _this2.reduce();
      }, this.euclidian = function (t) {
        var e = new h().zero(),
            i = _this2.clone(),
            s = t.monomByDegree();

        var n;

        for (; i.degree() >= t.degree() && (n = i.monomByDegree().clone().divide(s), !n.isZero());) {
          e.add(n), i.subtract(t.clone().multiply(n));
        }

        return {
          quotient: e,
          reminder: i
        };
      }, this.divide = function (t) {
        if (t.isFraction) _this2.divideByFraction(t);else if (Number.isSafeInteger(t)) return _this2.divideByInteger(t);
      }, this.divideByInteger = function (t) {
        var e = new o.Fraction(t);

        var _iterator10 = _createForOfIteratorHelper(_this2._monoms),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _t8 = _step10.value;

            _t8.coefficient.divide(e);
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }

        return _this2;
      }, this.divideByFraction = function (t) {
        var _iterator11 = _createForOfIteratorHelper(_this2._monoms),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var _e10 = _step11.value;

            _e10.coefficient.divide(t);
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        return _this2;
      }, this.pow = function (t) {
        if (!Number.isSafeInteger(t)) return _this2.zero();
        if (t < 0) return _this2.zero();
        if (0 === t) return new h();

        var e = _this2.clone();

        for (var _i9 = 1; _i9 < t; _i9++) {
          _this2.multiply(e);
        }

        return _this2.reduce();
      }, this.compare = function (t, e) {
        void 0 === e && (e = "=");

        var i = _this2.clone().reduce().reorder(),
            s = t.clone().reduce().reorder();

        switch (e) {
          case "=":
            if (i.length !== s.length || i.degree() !== s.degree()) return !1;

            for (var _t9 in i.monoms) {
              if (!i.monoms[_t9].isEqual(s.monoms[_t9])) return !1;
            }

            return !0;

          case "same":
            if (i.length !== s.length || i.degree() !== s.degree()) return !1;

            for (var _t10 in i.monoms) {
              if (!i.monoms[_t10].isSameAs(s.monoms[_t10])) return !1;
            }

            return !0;

          default:
            return !1;
        }
      }, this.isEqual = function (t) {
        return _this2.compare(t, "=");
      }, this.isSameAs = function (t) {
        return _this2.compare(t, "same");
      }, this.isOpposedAt = function (t) {
        return _this2.compare(t.clone().opposed(), "=");
      }, this.isFactorized = function (t) {
        var e = new h(t);
        if (!_this2.isEqual(e)) return !1;
        var i = t.replaceAll("*", ""),
            s = "" + i,
            n = [];

        var _iterator12 = _createForOfIteratorHelper(i.matchAll(/\(([a-z0-9+\-]+)\)(\^[0-9]*)?/g)),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var _t11 = _step12.value;
            if (void 0 !== _t11[2]) for (var _e11 = 0; _e11 < +_t11[2].substr(1); _e11++) {
              n.push(_t11[1]);
            } else n.push(_t11[1]);
            s = s.replaceAll(_t11[0], "");
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }

        "" !== s && n.push(s);
        var r = n.map(function (t) {
          return new h(t);
        });

        _this2.factorize();

        var o = 1;
        r.length;

        var _iterator13 = _createForOfIteratorHelper(_this2.factors),
            _step13;

        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var _t12 = _step13.value;

            for (var _e12 = 0; _e12 < r.length; _e12++) {
              if (_t12.isEqual(r[_e12])) {
                r.splice(_e12, 1);
                break;
              }

              if (_t12.isOpposedAt(r[_e12])) {
                r.splice(_e12, 1), o = -o;
                break;
              }
            }
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }

        return 0 === r.length && 1 === o;
      }, this.reduce = function () {
        for (var _t13 = 0; _t13 < _this2._monoms.length; _t13++) {
          for (var _e13 = _t13 + 1; _e13 < _this2._monoms.length; _e13++) {
            _this2._monoms[_t13].isSameAs(_this2.monoms[_e13]) && (_this2._monoms[_t13].add(_this2.monoms[_e13]), _this2._monoms.splice(_e13, 1));
          }
        }

        _this2._monoms = _this2._monoms.filter(function (t) {
          return 0 !== t.coefficient.value;
        });

        var _iterator14 = _createForOfIteratorHelper(_this2._monoms),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _t14 = _step14.value;

            _t14.coefficient.reduce();
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }

        return 0 === _this2.length ? new h().zero() : _this2;
      }, this.reorder = function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "x";
        return _this2._monoms.sort(function (e, i) {
          return i.degree(t) - e.degree(t);
        }), _this2.reduce();
      }, this.degree = function (t) {
        var e = 0;

        var _iterator15 = _createForOfIteratorHelper(_this2._monoms),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var _i10 = _step15.value;
            e = Math.max(_i10.degree(t), e);
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }

        return e;
      }, this.letters = function () {
        var t = new Set();

        var _iterator16 = _createForOfIteratorHelper(_this2._monoms),
            _step16;

        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var _e14 = _step16.value;
            t = new Set([].concat(_toConsumableArray(t), _toConsumableArray(_e14.variables)));
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }

        return _toConsumableArray(t);
      }, this.replaceBy = function (t, e) {
        var i;
        var s = new h().zero();

        var _iterator17 = _createForOfIteratorHelper(_this2.monoms),
            _step17;

        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var _n5 = _step17.value;
            void 0 === _n5.literal[t] || 0 === _n5.literal[t] ? s.add(_n5.clone()) : (i = +_n5.literal[t], delete _n5.literal[t], s.add(e.clone().pow(i).multiply(_n5)));
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }

        return _this2._monoms = s.reduce().reorder().monoms, _this2;
      }, this.evaluate = function (t) {
        var e = new o.Fraction().zero();
        return _this2._monoms.forEach(function (i) {
          e.add(i.evaluate(t));
        }), e;
      }, this.derivative = function (t) {
        var e = new h();

        var _iterator18 = _createForOfIteratorHelper(_this2._monoms),
            _step18;

        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
            var _i11 = _step18.value;
            e.add(_i11.derivative(t));
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }

        return e;
      }, this.factorize = function (t) {
        _this2._factors = [];

        var e = _this2.clone(),
            i = 0;

        e.monomByDegree().coefficient.numerator < 0 && _this2._factors.push(new h("-1"));
        var s = e.commonMonom();

        if (!s.isOne()) {
          var _t15 = new h();

          _t15.monoms = [s], 0 === _this2._factors.length ? _this2._factors.push(_t15) : (_this2._factors = [], _this2._factors.push(_t15.opposed())), e = e.euclidian(_t15).quotient, i = _t15.degree();
        }

        if (e.degree() <= 1) _this2._factors.push(e.clone());else {
          var _s5,
              _n6 = new o.Fraction(),
              _r2 = e.degree();

          t = void 0 === t ? 20 : t;

          for (var _o = 1; _o <= t; _o++) {
            for (var l = -t; l <= t; l++) {
              if (_n6.parse(-l, _o), e.evaluate({
                x: _n6
              })) for (_s5 = new h("".concat(_o, "x+").concat(l)); 0 === e.evaluate({
                x: _n6
              }).value;) {
                _this2._factors.push(_s5.clone()), i++, e = e.euclidian(_s5).quotient;
              }
              if (i > _r2) return _this2;
            }
          }

          if (e.degree() > 1) return _this2._factors.push(e.clone()), _this2;
        }
        return _this2;
      }, this.getZeroes = function () {
        switch (_this2.degree()) {
          case 0:
            return 0 === _this2._monoms[0].coefficient.value ? [!0] : [!1];

          case 1:
            if (1 === _this2._monoms.length) return [new o.Fraction().zero()];
            {
              var _t17 = _this2.clone().reduce().reorder();

              return [_t17.monoms[1].coefficient.opposed().divide(_t17.monoms[0].coefficient)];
            }

          default:
            0 === _this2._factors.length && _this2.factorize();
            var _t16 = [],
                _e15 = [];

            var _iterator19 = _createForOfIteratorHelper(_this2._factors),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var _i12 = _step19.value;
                if (_i12.degree() > 2) ;else if (2 === _i12.degree()) {
                  var _e16 = _i12.monomByDegree(2).coefficient,
                      _s6 = _i12.monomByDegree(1).coefficient,
                      _n7 = _i12.monomByDegree(0).coefficient,
                      _r3 = _s6.clone().pow(2).subtract(_e16.clone().multiply(_n7).multiply(4));

                  if (_r3.value > 0) {
                    var _i13 = (-_s6.value + Math.sqrt(_r3.value)) / (2 * _e16.value),
                        _n8 = (-_s6.value - Math.sqrt(_r3.value)) / (2 * _e16.value);

                    _t16.push(new o.Fraction(_i13.toFixed(3)).reduce()), _t16.push(new o.Fraction(_n8.toFixed(3)).reduce());
                  } else 0 === _r3.value || console.log("No zero for ", _i12.tex);
                } else {
                  var _iterator20 = _createForOfIteratorHelper(_i12.getZeroes()),
                      _step20;

                  try {
                    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                      var _s7 = _step20.value;
                      !1 !== _s7 && !0 !== _s7 && -1 === _e15.indexOf(_s7.frac) && (_t16.push(_s7), _e15.push(_s7.frac));
                    }
                  } catch (err) {
                    _iterator20.e(err);
                  } finally {
                    _iterator20.f();
                  }
                }
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }

            return _t16;
        }

        return [];
      }, this.monomByDegree = function (t, e) {
        if (void 0 === t) return _this2.monomByDegree(_this2.degree(e));

        var i = _this2.clone().reduce();

        var _iterator21 = _createForOfIteratorHelper(i._monoms),
            _step21;

        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var _s8 = _step21.value;
            if (_s8.degree(e) === t) return _s8.clone();
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }

        return new s.Monom().zero();
      }, this.monomByLetter = function (t) {
        var e = _this2.clone().reduce();

        var _iterator22 = _createForOfIteratorHelper(e._monoms),
            _step22;

        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
            var _i14 = _step22.value;
            if (_i14.hasLetter(t)) return _i14.clone();
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }

        return new s.Monom().zero();
      }, this.getDenominators = function () {
        var t = [];

        var _iterator23 = _createForOfIteratorHelper(_this2._monoms),
            _step23;

        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var _e17 = _step23.value;
            t.push(_e17.coefficient.denominator);
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }

        return t;
      }, this.getNumerators = function () {
        var t = [];

        var _iterator24 = _createForOfIteratorHelper(_this2._monoms),
            _step24;

        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _e18 = _step24.value;
            t.push(_e18.coefficient.numerator);
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }

        return t;
      }, this.lcmDenominator = function () {
        var _r$Numeric;

        return (_r$Numeric = r.Numeric).lcm.apply(_r$Numeric, _toConsumableArray(_this2.getDenominators()));
      }, this.gcdDenominator = function () {
        var _r$Numeric2;

        return (_r$Numeric2 = r.Numeric).gcd.apply(_r$Numeric2, _toConsumableArray(_this2.getDenominators()));
      }, this.lcmNumerator = function () {
        var _r$Numeric3;

        return (_r$Numeric3 = r.Numeric).lcm.apply(_r$Numeric3, _toConsumableArray(_this2.getNumerators()));
      }, this.gcdNumerator = function () {
        var _r$Numeric4;

        return (_r$Numeric4 = r.Numeric).gcd.apply(_r$Numeric4, _toConsumableArray(_this2.getNumerators()));
      }, this.commonMonom = function () {
        var t,
            e,
            i = new s.Monom().one(),
            n = _this2.degree();

        t = _this2.gcdNumerator(), e = _this2.gcdDenominator(), i.coefficient = new o.Fraction(t, e);

        var _iterator25 = _createForOfIteratorHelper(_this2.variables),
            _step25;

        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var _t18 = _step25.value;
            i.setLetter(_t18, n);

            var _iterator26 = _createForOfIteratorHelper(_this2._monoms),
                _step26;

            try {
              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                var _e19 = _step26.value;
                if (i.setLetter(_t18, Math.min(_e19.degree(_t18), i.degree(_t18))), 0 === i.degree(_t18)) break;
              }
            } catch (err) {
              _iterator26.e(err);
            } finally {
              _iterator26.f();
            }
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }

        return i;
      }, this.makeItComplicate = function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        if (_this2._texString = "", _this2.degree() < 1) return _this2;

        var e = r.Numeric.randomInt(0, _this2.degree() - 1),
            i = new h().rndSimple(e, !1, t > 1, "x", !1, t > 1 ? -1 : 1),
            s = new h().rndSimple(1, !1, t > 1),
            n = _this2.clone().subtract(i.clone().multiply(s));

        return n.factorizePartial(!0), _this2._texString = "".concat(i.genDisplay("tex", !1, !0), " \\cdot ").concat(s.genDisplay("tex", !1, !0), " ").concat(n.texString, " "), _this2;
      }, this.factorizePartial = function (t) {
        if (_this2._texString = "", _this2.length <= 1) return _this2;
        var e, i, n, o, l, a;

        for (var u = 0; u < _this2.length; u++) {
          e = _this2._monoms[u].clone();

          for (var c = u + 1; c < _this2.length; c++) {
            if (i = _this2._monoms[c].clone(), l = r.Numeric.gcd(e.coefficient.numerator, i.coefficient.numerator), 1 !== l) return n = s.Monom.lcm(e, i), a = 1 === e.coefficient.sign() ? "+" : "-", _this2._texString = "".concat(!0 === t ? a : "+" === a ? "" : a).concat(n.tex), o = new h().add(e.divide(n)).add(i.divide(n)), _this2._texString += o.genDisplay("tex", !1, !0), _this2._texString += _this2.clone().subtract(o.clone().multiply(n)).genDisplay("tex", !0, !1), _this2;
          }
        }

        return _this2._texString = _this2.genDisplay("tex", t), _this2;
      }, this.minify = function () {
        return _this2.multiply(_this2.lcmDenominator()).divide(_this2.gcdNumerator()).reduce(), _this2.reduce();
      }, this.canDivide = function (t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "x";
        var i = t.degree(),
            s = {};
        if (0 === i) return !t.isZero;

        if (1 === i) {
          var _i15 = t.getZeroes();

          return !0 !== _i15[0] && !1 !== _i15[0] && (s[e] = _i15[0], 0 === _this2.evaluate(s).value);
        }

        return i > 1 && (console.log("Currently, only first degree polynom are supported"), !1);
      }, this._monoms = [], this._factors = [], void 0 !== t && this.parse.apply(this, [t].concat(e)), this;
    }

    _createClass(h, [{
      key: "isPolynom",
      get: function get() {
        return !0;
      }
    }, {
      key: "monoms",
      get: function get() {
        return this._monoms;
      },
      set: function set(t) {
        this._monoms = t;
      }
    }, {
      key: "factors",
      get: function get() {
        return this._factors;
      },
      set: function set(t) {
        this._factors = t;
      }
    }, {
      key: "texString",
      get: function get() {
        return this._texString;
      }
    }, {
      key: "length",
      get: function get() {
        return this._monoms.length;
      }
    }, {
      key: "display",
      get: function get() {
        return this.genDisplay();
      }
    }, {
      key: "raw",
      get: function get() {
        return this._rawString;
      }
    }, {
      key: "tex",
      get: function get() {
        return this.genDisplay("tex");
      }
    }, {
      key: "isMultiVariable",
      get: function get() {
        var _iterator27 = _createForOfIteratorHelper(this._monoms),
            _step27;

        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var _t19 = _step27.value;
            if (_t19.variables.length > 1) return !0;
          }
        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }

        return !1;
      }
    }, {
      key: "variables",
      get: function get() {
        var t = [];

        var _iterator28 = _createForOfIteratorHelper(this._monoms),
            _step28;

        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var _e20 = _step28.value;
            t = t.concat(_e20.variables);
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }

        return t = _toConsumableArray(new Set(t)), t;
      }
    }, {
      key: "numberOfVars",
      get: function get() {
        return this.variables.length;
      }
    }, {
      key: "randomizeDefaults",
      get: function get() {
        return this._randomizeDefaults;
      },
      set: function set(t) {
        this._randomizeDefaults = t;
      }
    }, {
      key: "isZero",
      value: function isZero() {
        return 1 === this._monoms.length && this._monoms[0].coefficient.isZero() || 0 === this._monoms.length;
      }
    }, {
      key: "isOne",
      value: function isOne() {
        return 1 === this._monoms.length && this._monoms[0].coefficient.isOne();
      }
    }]);

    return h;
  }();

  e.Polynom = h;
}, function (t, e, i) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Equation = void 0;
  var s = i(2),
      n = i(0),
      r = i(6),
      o = i(1);

  var h = /*#__PURE__*/function () {
    function h() {
      var _this3 = this;

      _classCallCheck(this, h);

      for (var _len7 = arguments.length, t = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        t[_key7] = arguments[_key7];
      }

      if (this._varnothing = "\\varnothing", this._real = "\\mathbb{R}", this.parse = function (t) {
        var e, i;
        if (i = _this3._findSign(t), !1 !== i) return e = t.split(i), _this3.create(new s.Polynom(e[0]), new s.Polynom(e[1]), _this3._formatSign(i));
        console.log("The equation is not valid (no sign found)");
      }, this._findSign = function (t) {
        return t.includes("geq") ? t.includes("\\geq") ? "\\geq" : "geq" : t.includes("leq") ? t.includes("\\leq") ? "\\leq" : "leq" : t.includes(">=") ? ">=" : t.includes("=>") ? "=>" : t.includes(">") ? ">" : t.includes("<=") ? "<=" : t.includes("=<") ? "=<" : t.includes("<") ? "<" : t.includes("=") ? "=" : (console.log("Equation: parse string : sign not found"), !1);
      }, this._formatSign = function (t) {
        return void 0 === t ? "=" : t.includes("geq") || t.includes(">=") || t.includes("=>") ? ">=" : t.includes(">") ? ">" : t.includes("leq") || t.includes("<=") || t.includes("=<") ? "<=" : t.includes("<") ? "<" : "=";
      }, this._reverseSign = function () {
        return "=" === _this3._sign ? _this3 : _this3._sign.includes("<") ? (_this3._sign.replace("<", ">"), _this3) : _this3._sign.includes(">") ? (_this3._sign.replace(">", "<"), _this3) : _this3;
      }, this.create = function (t, e, i) {
        return _this3._left = t, _this3._right = e, _this3._sign = _this3._formatSign(i), _this3;
      }, this.clone = function () {
        return new h().create(_this3._left.clone(), _this3._right.clone(), _this3._sign + "");
      }, this._randomizeDefaults = {
        degree: 2
      }, this.randomize = function (t, e) {
        return new h().create(new s.Polynom(), new s.Polynom(), e);
      }, this.reorder = function (t) {
        if (_this3._left.subtract(_this3._right), _this3._right.zero(), t) return _this3;
        var e;

        var _iterator29 = _createForOfIteratorHelper(_this3._left.monoms),
            _step29;

        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var _t20 = _step29.value;
            0 === _t20.degree() && (e = _t20.clone(), _this3._left.subtract(e), _this3._right.subtract(e));
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }

        return _this3._left.reorder(), _this3._right.reorder(), _this3;
      }, this.simplify = function () {
        var _o$Numeric, _o$Numeric2;

        return _this3.multiply((_o$Numeric = o.Numeric).lcm.apply(_o$Numeric, _toConsumableArray(_this3._left.getDenominators()).concat(_toConsumableArray(_this3._right.getDenominators())))), _this3.divide((_o$Numeric2 = o.Numeric).gcd.apply(_o$Numeric2, _toConsumableArray(_this3._left.getNumerators()).concat(_toConsumableArray(_this3._right.getNumerators())))), _this3;
      }, this.isolate = function (t) {
        if (1 !== _this3.degree(t)) return !1;
        if (_this3.isMultiVariable()) return !1;
        var e, i;
        _this3._left.subtract(_this3._right), _this3._right.zero();

        var _iterator30 = _createForOfIteratorHelper(_this3._left.monoms),
            _step30;

        try {
          for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
            var _i16 = _step30.value;
            _i16.hasLetter(t) || (e = _i16.clone(), _this3._left.add(e.clone().opposed()), _this3._right.add(e.clone().opposed()));
          }
        } catch (err) {
          _iterator30.e(err);
        } finally {
          _iterator30.f();
        }

        return 1 === _this3._left.length && (i = _this3._left.monoms[0].coefficient.clone(), _this3._left.divide(i), _this3._right.divide(i), _this3);
      }, this.multiply = function (t) {
        var e = new n.Fraction(t);
        return _this3._left.multiply(e), _this3._right.multiply(e), "=" !== _this3._sign && -1 === e.sign() && _this3._reverseSign(), _this3;
      }, this.divide = function (t) {
        var e = new n.Fraction(t);
        return e.isZero() ? _this3 : _this3.multiply(e.invert());
      }, this.degree = function (t) {
        return Math.max(_this3._left.degree(t), _this3._right.degree(t));
      }, this.isMultiVariable = function () {
        return _this3._left.isMultiVariable || _this3._right.isMultiVariable;
      }, this.letters = function () {
        return _toConsumableArray(new Set([].concat(_toConsumableArray(_this3._left.letters()), _toConsumableArray(_this3._right.letters()))));
      }, this.solve = function (t) {
        switch (_this3._solutions = [], _this3._polynom = _this3._left.clone().subtract(_this3._right), _this3._polynom.degree(t)) {
          case 0:
          case 1:
            _this3._solveDegree1(t);

            break;

          case 2:
            _this3._solveDegree2(t);

            break;

          default:
            _this3._solveDegree3plus(t);

        }

        return _this3;
      }, this.isGreater = function () {
        return -1 !== _this3._sign.indexOf(">") || -1 !== _this3._sign.indexOf("geq");
      }, this.isStrictEqual = function () {
        return "=" === _this3._sign;
      }, this.isAlsoEqual = function () {
        return -1 !== _this3._sign.indexOf("=") || -1 !== _this3._sign.indexOf("geq") || -1 !== _this3._sign.indexOf("leq") || void 0;
      }, this._solveDegree1 = function (t) {
        var e = _this3._polynom.monomByDegree(1, t).coefficient,
            i = _this3._polynom.monomByDegree(0, t).coefficient,
            s = i.clone().opposed().divide(e).display;

        var n;
        return _this3.isStrictEqual() ? 0 === e.value ? 0 === i.value ? _this3._solutions = [_this3._real] : _this3._solutions = [_this3._varnothing] : _this3._solutions = [s] : (n = 0 === e.value ? 0 === i.value && _this3.isAlsoEqual() ? "\\mathbb{R}" : i.value > 0 ? _this3.isGreater() ? _this3._real : _this3._varnothing : _this3.isGreater() ? _this3._varnothing : _this3._real : _this3.isGreater() && 1 === e.sign() || !_this3.isGreater() && -1 === e.sign() ? "\\left".concat(_this3.isAlsoEqual() ? "\\[" : "\\]").concat(s, ";+\\infty\\right\\[") : "\\left\\]-\\infty;".concat(s, " \\right\\").concat(_this3.isAlsoEqual() ? "\\]" : "\\["), _this3._solutions = [n]), _this3._solutions;
      }, this._solveDegree2 = function (t) {
        var e,
            i,
            s,
            _h2,
            l,
            a,
            u = _this3._polynom.monomByDegree(2, t).coefficient,
            c = _this3._polynom.monomByDegree(1, t).coefficient,
            m = _this3._polynom.monomByDegree(0, t).coefficient,
            _ = o.Numeric.lcm(u.denominator, c.denominator, m.denominator),
            f = u.multiply(_).value,
            d = c.multiply(_).value;

        if (e = d * d - 4 * f * m.multiply(_).value, e > 0) {
          if (s = (-d - Math.sqrt(e)) / (2 * f), _h2 = (-d + Math.sqrt(e)) / (2 * f), e > 1e5) _this3._solutions = [((-d - Math.sqrt(e)) / (2 * f)).toFixed(5), ((-d + Math.sqrt(e)) / (2 * f)).toFixed(5)];else if (i = new r.Nthroot().parse(e).reduce(), i.hasRadical()) {
            var _t21 = o.Numeric.gcd(d, 2 * f, i.coefficient);

            i.coefficient = i.coefficient / _t21, _this3._solutions = 0 !== d ? 2 * f / _t21 == 1 ? ["".concat(-d / _t21, " - ").concat(i.tex), "".concat(-d / _t21, " + ").concat(i.tex)] : ["\\dfrac{".concat(-d / _t21, " - ").concat(i.tex, " }{ ").concat(2 * f / _t21, " }"), "\\dfrac{".concat(-d / _t21, " + ").concat(i.tex, " }{ ").concat(2 * f / _t21, " }")] : 2 * f / _t21 == 1 ? ["- " + i.tex, "" + i.tex] : ["\\dfrac{- ".concat(i.tex, " }{ ").concat(2 * f / _t21, " }"), "\\dfrac{".concat(i.tex, " }{ ").concat(2 * f / _t21, " }")];
          } else _this3._solutions = [new n.Fraction(-d - i.coefficient, 2 * f).reduce().dfrac, new n.Fraction(-d + i.coefficient, 2 * f).reduce().dfrac];
        } else _this3._solutions = 0 === e ? [new n.Fraction(-d, 2 * f).reduce().dfrac] : [_this3._varnothing];
        return _this3.isStrictEqual() || (2 === _this3._solutions.length ? (l = s < _h2 ? _this3._solutions[0] : _this3._solutions[1], a = s < _h2 ? _this3._solutions[1] : _this3._solutions[0], _this3.isGreater() && 1 === u.sign() || !_this3.isGreater() && -1 === u.sign() ? _this3._solutions = ["\\left]-\\infty ; ".concat(l, "\\right").concat(_this3.isAlsoEqual() ? "]" : "[", " \\cup \\left").concat(_this3.isAlsoEqual() ? "[" : "]").concat(a, ";+\\infty\\right[")] : _this3._solutions = ["\\left".concat(_this3.isAlsoEqual() ? "[" : "]").concat(l, " ; ").concat(a, "\\right").concat(_this3.isAlsoEqual() ? "]" : "[")]) : 1 === _this3._solutions.length && _this3._solutions[0] !== _this3._varnothing ? _this3.isAlsoEqual() ? (_this3.isGreater() && 1 === u.sign() || !_this3.isGreater() && -1 === u.sign()) && (_this3._solutions = [_this3._real]) : _this3.isGreater() && 1 === u.sign() || !_this3.isGreater() && -1 === u.sign() ? _this3._solutions = ["\\left]-\\infty ; ".concat(_this3._solutions[0], "\\right[ \\cup \\left]").concat(_this3._solutions[0], ";+\\infty\\right[")] : _this3._solutions = [_this3._varnothing] : _this3.isGreater() ? _this3._solutions = [1 === u.sign() ? _this3._real : _this3._varnothing] : _this3._solutions = [-1 === u.sign() ? _this3._real : _this3._varnothing]), _this3._solutions;
      }, this._solveDegree3plus = function (t) {
        return _this3._solutions = [t], _this3._solutions;
      }, this._left = new s.Polynom().zero(), this._right = new s.Polynom().zero(), this._sign = "=", 1 === t.length) {
        if (!0 === t[0].isEquation) return t[0].clone();
        this.parse(t[0]);
      } else {
        if (2 !== t.length) return this;
        this.left = t[0].isPolynom ? t[0].clone() : new s.Polynom(t[0]), this.right = t[1].isPolynom ? t[1].clone() : new s.Polynom(t[1]);
      }

      return this;
    }

    _createClass(h, [{
      key: "isEquation",
      get: function get() {
        return !0;
      }
    }, {
      key: "solutions",
      get: function get() {
        return this._solutions;
      }
    }, {
      key: "solution",
      get: function get() {
        return 1 !== this._solutions.length || this._solutions[0] !== this._real && this._solutions[0] !== this._varnothing && !this._solutions[0].includes("\\left") ? "S = \\left{ ".concat(this._solutions.join(";"), " \\right}") : "S = " + this._solutions[0];
      }
    }, {
      key: "isReal",
      get: function get() {
        return void 0 === this._solutions && this.solve(), this._solutions[0] === this._real;
      }
    }, {
      key: "isVarnothing",
      get: function get() {
        return void 0 === this._solutions && this.solve(), this._solutions[0] === this._varnothing;
      }
    }, {
      key: "signAsTex",
      get: function get() {
        return ">=" === this._sign || "=>" === this._sign || "geq" === this._sign ? "\\geq" : "<=" === this._sign || "=<" === this._sign || "leq" === this._sign ? "\\leq" : this._sign;
      }
    }, {
      key: "tex",
      get: function get() {
        return "".concat(this._left.tex).concat(this.signAsTex).concat(this._right.tex);
      }
    }, {
      key: "raw",
      get: function get() {
        return "".concat(this._left.raw).concat(this.signAsTex).concat(this._right.raw);
      }
    }, {
      key: "variables",
      get: function get() {
        return _toConsumableArray(new Set(this._right.variables.concat(this._left.variables)));
      }
    }, {
      key: "numberOfVars",
      get: function get() {
        return this.variables.length;
      }
    }, {
      key: "left",
      get: function get() {
        return this._left;
      },
      set: function set(t) {
        this._left = t;
      }
    }, {
      key: "right",
      get: function get() {
        return this._right;
      },
      set: function set(t) {
        this._right = t;
      }
    }, {
      key: "sign",
      get: function get() {
        return this._sign;
      },
      set: function set(t) {
        this._sign = this._formatSign(t);
      }
    }, {
      key: "randomizeDefaults",
      get: function get() {
        return this._randomizeDefaults;
      },
      set: function set(t) {
        this._randomizeDefaults = t;
      }
    }]);

    return h;
  }();

  e.Equation = h;
}, function (t, e, i) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Vector = void 0;
  var s = i(0),
      n = i(1);

  var r = /*#__PURE__*/function () {
    function r() {
      var _this4 = this;

      _classCallCheck(this, r);

      for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        t[_key8] = arguments[_key8];
      }

      this.parse = function () {
        for (var _len9 = arguments.length, t = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          t[_key9] = arguments[_key9];
        }

        if (_this4.zero(), 0 === t.length) return _this4;
        if (1 === t.length) return t[0].isVector ? t[0].clone() : _this4._parseString(t[0]);

        if (t.length >= 2) {
          if (t[0].isPoint && t[1].isPoint) return _this4._x = t[1].x.clone().subtract(t[0].x), _this4._y = t[1].y.clone().subtract(t[0].y), _this4;
          !t[0].isFraction && isNaN(t[0]) || (_this4._x = new s.Fraction(t[0])), !t[1].isFraction && isNaN(t[1]) || (_this4._y = new s.Fraction(t[1]));
        }

        return _this4;
      }, this.clone = function () {
        var t = new r();
        return null !== _this4._x && (t.x = _this4._x.clone()), null !== _this4._y && (t.y = _this4._y.clone()), t;
      }, this.reset = function () {
        return _this4._x = null, _this4._y = null, _this4;
      }, this.zero = function () {
        return _this4.reset(), _this4._x = new s.Fraction(null), _this4._y = new s.Fraction(null), _this4;
      }, this.one = function () {
        return _this4._x = new s.Fraction(), _this4._y = new s.Fraction(), _this4;
      }, this._parseString = function (t) {
        var e = t.split(/[,;\s]/g);
        return _this4.x = new s.Fraction(e[0] || null), _this4.y = new s.Fraction(e[1] || null), _this4;
      }, this.opposed = function () {
        return _this4._x.opposed(), _this4._y.opposed(), _this4;
      }, this.add = function (t) {
        return _this4._x.add(t.x), _this4._y.add(t.y), _this4;
      }, this.subtract = function (t) {
        return _this4.add(t.clone().opposed());
      }, this.scalarProductWithVector = function (t) {
        return _this4._x.clone().multiply(t.x).add(_this4._y.clone().multiply(t.y));
      }, this.normal = function () {
        var t = _this4.x.clone().opposed(),
            e = _this4.y.clone();

        return _this4._x = e, _this4._y = t, _this4;
      }, this.isNormalTo = function (t) {
        return _this4.scalarProductWithVector(t).isZero();
      }, this.multiplyByScalar = function (t) {
        var e = new s.Fraction(t);
        return _this4._x.multiply(e), _this4._y.multiply(e), _this4;
      }, this.divideByScalar = function (t) {
        return _this4.multiplyByScalar(new s.Fraction(t).invert());
      }, this.simplify = function () {
        return _this4.multiplyByScalar(n.Numeric.lcm(_this4._x.denominator, _this4._y.denominator)).divideByScalar(n.Numeric.gcd(_this4._x.numerator, _this4._y.numerator));
      }, this.angleWith = function (t, e, i) {
        var s = _this4.scalarProductWithVector(t).value,
            n = i ? 1 : 180 / Math.PI;

        return e && (s = Math.abs(s)), n * Math.acos(s / (_this4.norm * t.norm));
      }, this._x = new s.Fraction().zero(), this._y = new s.Fraction().zero(), void 0 !== t && this.parse.apply(this, t);
    }

    _createClass(r, [{
      key: "isVector",
      get: function get() {
        return !0;
      }
    }, {
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(t) {
        this._x = t;
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(t) {
        this._y = t;
      }
    }, {
      key: "normSquare",
      get: function get() {
        return this._x.clone().pow(2).add(this._y.clone().pow(2));
      }
    }, {
      key: "norm",
      get: function get() {
        return Math.sqrt(this.normSquare.value);
      }
    }, {
      key: "tex",
      get: function get() {
        return "\\begin{pmatrix}".concat(this._x.tex, " \\\\ ").concat(this._y.tex, " \\end{pmatrix}");
      }
    }]);

    return r;
  }();

  e.Vector = r, r.scalarProduct = function (t, e) {
    return t.x.value * e.x.value + t.y.value * e.y.value;
  };
}, function (t, e, i) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Point = void 0;
  var s = i(0);

  var n = /*#__PURE__*/function () {
    function n() {
      var _this5 = this;

      _classCallCheck(this, n);

      for (var _len10 = arguments.length, t = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        t[_key10] = arguments[_key10];
      }

      this.parse = function () {
        for (var _len11 = arguments.length, t = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
          t[_key11] = arguments[_key11];
        }

        if (_this5.zero(), 0 === t.length) return _this5;

        if (1 === t.length) {
          if (t[0].isPoint) return t.clone();
          if (void 0 === t[0].x || void 0 === t[0].y) return _this5.zero();
          _this5._x = new s.Fraction(t[0].x).reduce(), _this5._y = new s.Fraction(t[0].y).reduce();
        }

        return 2 === t.length && (_this5._x = new s.Fraction(t[0]).reduce(), _this5._y = new s.Fraction(t[1]).reduce()), _this5;
      }, this.clone = function () {
        var t = new n();
        return null !== _this5._x && (t.x = _this5._x.clone()), null !== _this5._y && (t.y = _this5._y.clone()), t;
      }, this.zero = function () {
        return _this5._x = new s.Fraction(null), _this5._y = new s.Fraction(null), _this5;
      }, this.origin = function () {
        return _this5.zero(), _this5;
      }, this.middleOf = function (t, e) {
        return _this5._x = t.x.clone().add(e.x).divide(2), _this5._y = t.y.clone().add(e.y).divide(2), _this5;
      }, this.texValues = function (t) {
        var e = [];
        return e.push(_this5._x.value.toFixed(void 0 === t ? 2 : t)), e.push(_this5._y.value.toFixed(void 0 === t ? 2 : t)), "\\left(".concat(e.join(";"), "\\right)");
      }, this._x = new s.Fraction().zero(), this._y = new s.Fraction().zero(), void 0 !== t && this.parse.apply(this, t);
    }

    _createClass(n, [{
      key: "isPoint",
      get: function get() {
        return !0;
      }
    }, {
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(t) {
        this._x = t;
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(t) {
        this._y = t;
      }
    }, {
      key: "tex",
      get: function get() {
        var t = [];
        return t.push(this._x.tex), t.push(this._y.tex), "\\left(".concat(t.join(";"), "\\right)");
      }
    }]);

    return n;
  }();

  e.Point = n, n.pmatrix = function (t, e, i) {
    return void 0 === i ? "\\begin{pmatrix} ".concat(t.tex ? t.tex : t, " \\\\ ").concat(e.tex ? e.tex : e, " \\end{pmatrix}") : "\\begin{pmatrix} ".concat(t.tex ? t.tex : t, " \\\\ ").concat(e.tex ? e.tex : e, " \\\\ ").concat(i.tex ? i.tex : i, " \\end{pmatrix}");
  };
}, function (t, e, i) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Nthroot = void 0;

  e.Nthroot = /*#__PURE__*/function () {
    function _class() {
      var _this6 = this;

      _classCallCheck(this, _class);

      this.parse = function (t, e, i) {
        return _this6._coefficient = void 0 === i ? 1 : i, _this6._nth = void 0 === e ? 2 : e, _this6._radical = void 0 === t ? 1 : t, _this6._nth % 2 == 0 && _this6._radical < 0 && (_this6._isValid = !1), _this6;
      }, this.reduce = function () {
        var t = Math.floor(Math.pow(_this6._radical, 1 / _this6._nth));

        for (; t > 1;) {
          _this6._radical % Math.pow(t, _this6._nth) != 0 ? t-- : (_this6._coefficient *= t, _this6._radical = _this6._radical / Math.pow(t, _this6._nth), t = Math.floor(Math.pow(_this6._radical, 1 / _this6._nth)));
        }

        return _this6;
      }, this.multiply = function (t) {
        return _this6._radical *= t.radical, _this6.reduce();
      }, this.hasRadical = function () {
        return !(1 === _this6._radical || 0 === _this6._radical || !1 === _this6._isValid);
      }, this._radical = 1, this._coefficient = 1, this._nth = 2, this._isValid = !0;
    }

    _createClass(_class, [{
      key: "radical",
      get: function get() {
        return this._radical;
      },
      set: function set(t) {
        this._radical = t;
      }
    }, {
      key: "nth",
      get: function get() {
        return this._nth;
      },
      set: function set(t) {
        Number.isSafeInteger(t) && t >= 2 ? this._nth = t : (console.log("Error setting the nth root"), this._nth = 2);
      }
    }, {
      key: "coefficient",
      get: function get() {
        return this._coefficient;
      },
      set: function set(t) {
        this._coefficient = t;
      }
    }, {
      key: "tex",
      get: function get() {
        var t;
        return t = 1 === this._coefficient ? "" : -1 === this._coefficient ? "-" : this._coefficient.toString(), 1 === this._radical ? "" + this._coefficient : 2 === this._nth ? "".concat(t, "\\sqrt{").concat(this._radical, "}") : "".concat(t, "\\sqrt[").concat(this._nth, "]{").concat(this._radical, "}");
      }
    }, {
      key: "value",
      get: function get() {
        return this._coefficient * Math.pow(this._radical, 1 / this._nth);
      }
    }]);

    return _class;
  }();
}, function (t, e, i) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Monom = void 0;
  var s = i(0),
      n = i(1);

  var r = /*#__PURE__*/function () {
    function r(t) {
      var _this7 = this;

      _classCallCheck(this, r);

      return this.parse = function (t) {
        _this7.literalStr = t, _this7._coefficient = new s.Fraction();

        for (var _i17 = 0, _arr = _toConsumableArray(t.replace(/([a-z])|(\^[+-]?[0-9]+)/g, ",").split(",")); _i17 < _arr.length; _i17++) {
          var _e21 = _arr[_i17];
          "" !== _e21.trim() && _this7._coefficient.multiply(new s.Fraction(_e21.trim()));
        }

        return _this7;
      }, this.clone = function () {
        var t = new r();
        t.coefficient = _this7._coefficient.clone();

        for (var _e22 in _this7._literal) {
          t.setLetter(_e22, _this7._literal[_e22]);
        }

        return t;
      }, this.zero = function () {
        return _this7._coefficient = new s.Fraction().zero(), _this7._literal = {}, _this7;
      }, this.one = function () {
        return _this7._coefficient = new s.Fraction().one(), _this7._literal = {}, _this7;
      }, this.clean = function () {
        for (var _t22 in _this7._literal) {
          0 === _this7._literal[_t22] && delete _this7._literal[_t22];
        }

        return _this7;
      }, this.random = function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "x";
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;

        _this7.coefficient.parse(n.Numeric.randomIntSym(10, s), i ? n.Numeric.randomInt(1, 10) : 1);

        var _iterator31 = _createForOfIteratorHelper(t.split("")),
            _step31;

        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var _i18 = _step31.value;

            _this7.setLetter(_i18, t.length > 1 ? n.Numeric.randomInt(e) : e);
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }

        return _this7;
      }, this.opposed = function () {
        return _this7._coefficient.opposed(), _this7;
      }, this.add = function () {
        for (var _len12 = arguments.length, t = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
          t[_key12] = arguments[_key12];
        }

        for (var _i19 = 0, _t23 = t; _i19 < _t23.length; _i19++) {
          var _e23 = _t23[_i19];
          _this7.isSameAs(_e23) ? _this7._coefficient.add(_e23.coefficient) : console.log("Add: Is not similar: ", _e23.display);
        }

        return _this7;
      }, this.subtract = function () {
        for (var _len13 = arguments.length, t = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
          t[_key13] = arguments[_key13];
        }

        for (var _i20 = 0, _t24 = t; _i20 < _t24.length; _i20++) {
          var _e24 = _t24[_i20];
          _this7.isSameAs(_e24) ? _this7._coefficient.add(_e24.coefficient.clone().opposed()) : console.log("Subtract: Is not similar: ", _e24.display);
        }

        return _this7;
      }, this.multiply = function () {
        for (var _len14 = arguments.length, t = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
          t[_key14] = arguments[_key14];
        }

        for (var _i21 = 0, _t25 = t; _i21 < _t25.length; _i21++) {
          var _e25 = _t25[_i21];

          _this7._coefficient.multiply(_e25.coefficient);

          for (var _t26 in _e25.literal) {
            _this7._literal[_t26] = void 0 === _this7._literal[_t26] ? _e25.literal[_t26] : _this7._literal[_t26] + _e25.literal[_t26];
          }
        }

        return _this7;
      }, this.divide = function () {
        for (var _len15 = arguments.length, t = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
          t[_key15] = arguments[_key15];
        }

        for (var _i22 = 0, _t27 = t; _i22 < _t27.length; _i22++) {
          var _e26 = _t27[_i22];

          _this7._coefficient.divide(_e26.coefficient);

          for (var _t28 in _e26.literal) {
            _this7._literal[_t28] = void 0 === _this7._literal[_t28] ? -_e26.literal[_t28] : _this7._literal[_t28] - _e26.literal[_t28], 0 === _this7._literal[_t28] && delete _this7._literal[_t28];
          }
        }

        return _this7;
      }, this.pow = function (t) {
        _this7._coefficient.pow(t);

        for (var _e27 in _this7._literal) {
          _this7._literal[_e27] *= t;
        }

        return _this7;
      }, this.root = function (t) {
        return _this7;
      }, this.sqrt = function () {
        return _this7.root(2);
      }, this.compare = function (t, e) {
        switch (void 0 === e && (e = "="), e) {
          case "=":
            return !!_this7.compare(t, "same") && _this7._coefficient.isEqual(t.coefficient);

          case "same":
            var _e28 = _this7.variables,
                _i23 = t.variables,
                _s9 = _e28.concat(_i23.filter(function (t) {
              return _e28.indexOf(t) < 0;
            }));

            var _iterator32 = _createForOfIteratorHelper(_s9),
                _step32;

            try {
              for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                var _e29 = _step32.value;
                if (void 0 === _this7._literal[_e29] || void 0 === t.literal[_e29]) return !1;
                if (_this7._literal[_e29] !== t.literal[_e29]) return !1;
              }
            } catch (err) {
              _iterator32.e(err);
            } finally {
              _iterator32.f();
            }

            return !0;

          default:
            return !1;
        }
      }, this.isEqual = function (t) {
        return _this7.compare(t, "=");
      }, this.isSameAs = function (t) {
        return _this7.compare(t, "same");
      }, this.hasLetter = function (t) {
        return _this7._literal[void 0 === t ? "x" : t] > 0;
      }, this.setLetter = function (t, e) {
        e <= 0 || !Number.isSafeInteger(e) ? void 0 !== _this7._literal[t] && delete _this7._literal[t] : _this7._literal[t] = e;
      }, this.degree = function (t) {
        return 0 === _this7.variables.length ? 0 : void 0 === t ? Object.values(_this7._literal).reduce(function (t, e) {
          return t + e;
        }) : void 0 === _this7._literal[t] ? 0 : _this7._literal[t];
      }, this.evaluate = function (t) {
        var e = _this7.coefficient.clone();

        for (var _i24 in _this7._literal) {
          if (void 0 === t[_i24]) return new s.Fraction().zero();
          e.multiply(t[_i24].clone().pow(_this7._literal[_i24]));
        }

        return e;
      }, this.derivative = function (t) {
        if (void 0 === t && (t = "x"), _this7.hasLetter(t)) {
          var _e30 = +_this7._literal[t],
              _i25 = _this7.clone();

          return _i25._literal[t] -= 1, _i25._coefficient.multiply(new s.Fraction("" + _e30)), _i25;
        }

        return new r().zero();
      }, this.areSameAs = function () {
        for (var _e31 = 0; _e31 < arguments.length; _e31++) {
          if (!_this7.isSameAs(_e31 < 0 || arguments.length <= _e31 ? undefined : arguments[_e31])) return !1;
        }

        return !0;
      }, this.areEquals = function () {
        for (var _len16 = arguments.length, t = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
          t[_key16] = arguments[_key16];
        }

        if (!_this7.areSameAs.apply(_this7, t)) return !1;

        for (var _i26 = 0, _t29 = t; _i26 < _t29.length; _i26++) {
          var _e32 = _t29[_i26];
          if (!_this7._coefficient.isEqual(_e32.coefficient)) return !1;
        }

        return !0;
      }, this.zero(), void 0 !== t && this.parse(t), this;
    }

    _createClass(r, [{
      key: "isMonom",
      get: function get() {
        return !0;
      }
    }, {
      key: "coefficient",
      get: function get() {
        return this._coefficient;
      },
      set: function set(t) {
        this._coefficient = t;
      }
    }, {
      key: "literal",
      get: function get() {
        return this._literal;
      },
      set: function set(t) {
        this._literal = t;
      }
    }, {
      key: "literalStr",
      set: function set(t) {
        for (var _i27 = 0, _arr2 = _toConsumableArray(t.matchAll(/([a-z])\^([+-]?[0-9]+)/g)); _i27 < _arr2.length; _i27++) {
          var _e33 = _arr2[_i27];
          _e33[1] in this._literal || (this._literal[_e33[1]] = 0), this._literal[_e33[1]] += +_e33[2];
        }

        for (var _i28 = 0, _arr3 = _toConsumableArray(t.matchAll(/([a-z](?!\^))/g)); _i28 < _arr3.length; _i28++) {
          var _e34 = _arr3[_i28];
          _e34[1] in this._literal || (this._literal[_e34[1]] = 0), this._literal[_e34[1]] += 1;
        }
      }
    }, {
      key: "variables",
      get: function get() {
        this.clone().clean();
        return Object.keys(this._literal);
      }
    }, {
      key: "display",
      get: function get() {
        var t = "";

        for (var _e35 in this._literal) {
          0 !== this._literal[_e35] && (t += "" + _e35, this._literal[_e35] > 1 && (t += "^" + this._literal[_e35]));
        }

        return "" === t ? 0 != this._coefficient.value ? "" + this._coefficient.display : "" : 1 === this._coefficient.value ? t : -1 === this._coefficient.value ? "-" + t : 0 === this._coefficient.value ? "0" : "".concat(this._coefficient.display).concat(t);
      }
    }, {
      key: "displayWithSign",
      get: function get() {
        var t = this.display;
        return ("-" !== t[0] ? "+" : "") + t;
      }
    }, {
      key: "tex",
      get: function get() {
        var t = "";

        for (var _e36 in this._literal) {
          0 !== this._literal[_e36] && (t += "" + _e36, this._literal[_e36] > 1 && (t += "^" + this._literal[_e36]));
        }

        return "" === t ? 0 != this._coefficient.value ? "" + this._coefficient.dfrac : "0" : 1 === this._coefficient.value ? t : -1 === this._coefficient.value ? "-" + t : 0 === this._coefficient.value ? "0" : "".concat(this._coefficient.dfrac).concat(t);
      }
    }, {
      key: "isZero",
      value: function isZero() {
        return 0 === this._coefficient.value;
      }
    }, {
      key: "isOne",
      value: function isOne() {
        return 1 === this._coefficient.value && 0 === this.variables.length;
      }
    }]);

    return r;
  }();

  e.Monom = r, r.lcm = function () {
    var _n$Numeric, _n$Numeric2;

    for (var _len17 = arguments.length, t = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
      t[_key17] = arguments[_key17];
    }

    var e = new r(),
        i = t.map(function (t) {
      return t.coefficient.numerator;
    }),
        o = t.map(function (t) {
      return t.coefficient.denominator;
    }),
        h = (_n$Numeric = n.Numeric).gcd.apply(_n$Numeric, _toConsumableArray(i)),
        l = (_n$Numeric2 = n.Numeric).lcm.apply(_n$Numeric2, _toConsumableArray(o));

    e.coefficient = new s.Fraction(h, l).reduce();

    for (var _i29 = 0, _t30 = t; _i29 < _t30.length; _i29++) {
      var _i30 = _t30[_i29];

      for (var _t31 in e.literal) {
        _t31 in _i30.literal || (e.literal[_t31] = 0);
      }

      for (var _t32 in _i30.literal) {
        void 0 === e.literal[_t32] && _i30.literal[_t32] > 0 ? e.literal[_t32] = _i30.literal[_t32] : e.literal[_t32] = Math.min(_i30.literal[_t32], e.literal[_t32]);
      }
    }

    return e;
  }, r.xmultiply = function () {
    var e = new r().one();

    for (var _len18 = arguments.length, t = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
      t[_key18] = arguments[_key18];
    }

    for (var _i31 = 0, _t33 = t; _i31 < _t33.length; _i31++) {
      var _i32 = _t33[_i31];
      e.multiply(_i32);
    }

    return e;
  };
}, function (t, e, i) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Line = void 0;
  var s = i(0),
      n = i(4),
      r = i(5),
      o = i(2),
      h = i(1),
      l = i(3);

  var a = /*#__PURE__*/function () {
    function a() {
      var _this8 = this;

      _classCallCheck(this, a);

      for (var _len19 = arguments.length, t = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
        t[_key19] = arguments[_key19];
      }

      return this.parse = function () {
        for (var _len20 = arguments.length, t = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
          t[_key20] = arguments[_key20];
        }

        if (_this8._exists = !1, 3 === t.length) return _this8.parseByCoefficient(t[0], t[1], t[2]);

        if (2 === t.length) {
          if (t[0].isPoint && t[1].isVector) return _this8.parseByPointAndVector(t[0], t[1]);
          if (t[0].isPoint && t[1].isPoint) return _this8.parseByPointAndVector(t[0], new n.Vector(t[0], t[1]));
        } else if (1 === t.length) {
          if (t[0].isLine) return t[0].clone();

          var _e37 = new l.Equation(t[0]);

          if (_e37.isEquation) {
            _e37.reorder(!0);

            var _t34 = new Set(_e37.letters());

            if (!_t34.has("x") && !_t34.has("y")) return;

            for (var _i33 = 0, _arr4 = ["x", "y"]; _i33 < _arr4.length; _i33++) {
              var _e38 = _arr4[_i33];
              _t34.has(_e38) && _t34["delete"](_e38);
            }

            return _t34.size > 0 ? (console.log("Extra variable in the equation."), _this8) : _this8.parseByCoefficient(_e37.left.monomByLetter("x").coefficient, _e37.left.monomByLetter("y").coefficient, _e37.left.monomByDegree(0).coefficient);
          }
        }

        return console.log("Someting wrong happend while creating the line"), _this8;
      }, this.parseByCoefficient = function (t, e, i) {
        return _this8._a = new s.Fraction(t), _this8._b = new s.Fraction(e), _this8._c = new s.Fraction(i), _this8._d = new n.Vector(_this8._b.clone(), _this8._a.clone().opposed()), _this8._OA = new r.Point(new s.Fraction().zero(), _this8._c.clone()), _this8._n = _this8._d.clone().normal(), _this8._exists = !0, _this8;
      }, this.parseByPointAndVector = function (t, e) {
        return _this8.parseByCoefficient(e.y, e.x.clone().opposed(), t.x.clone().multiply(e.y).subtract(t.y.clone().multiply(e.x)).opposed()), _this8._OA = t.clone(), _this8._d = e.clone(), _this8._n = _this8._d.clone().normal(), _this8._exists = !0, _this8;
      }, this.clone = function () {
        return _this8._a = _this8._a.clone(), _this8._b = _this8._b.clone(), _this8._c = _this8._c.clone(), _this8._d = _this8._d.clone(), _this8._OA = _this8._OA.clone(), _this8._n = _this8._n.clone(), _this8;
      }, this.isParellelTo = function (t) {
        return _this8.slope.isEqual(t.slope) && _this8.height.isDifferent(t.height);
      }, this.isSameAs = function (t) {
        return _this8.slope.isEqual(t.slope) && _this8.height.isEqual(t.height);
      }, this.simplifyDirection = function () {
        var t = h.Numeric.lcm(_this8._d.x.denominator, _this8._d.y.denominator),
            e = h.Numeric.gcd(_this8._d.x.numerator, _this8._d.y.numerator);
        return _this8._d.x.multiply(t).divide(e), _this8._d.y.multiply(t).divide(e), _this8;
      }, this.intersection = function (t) {
        var e = new r.Point(),
            i = !1,
            s = !1;
        return _this8._b.isZero() || t.b.isZero(), _this8.isParellelTo(t) ? (e.x = null, e.y = null, i = !0) : _this8.isSameAs(t) ? (e.x = null, e.y = null, s = !0) : (e.x = _this8._b.clone().multiply(t.c).subtract(_this8._c.clone().multiply(t.b)).divide(_this8._a.clone().multiply(t.b).subtract(_this8._b.clone().multiply(t.a))), e.y = _this8._a.clone().multiply(t.c).subtract(_this8._c.clone().multiply(t.a)).divide(_this8._b.clone().multiply(t.a).subtract(_this8._a.clone().multiply(t.b)))), {
          point: e,
          hasIntersection: !(i || s),
          isParallel: i,
          isSame: s
        };
      }, this._exists = !1, void 0 !== t && this.parse.apply(this, t), this;
    }

    _createClass(a, [{
      key: "isLine",
      get: function get() {
        return !0;
      }
    }, {
      key: "exists",
      get: function get() {
        return this._exists;
      }
    }, {
      key: "equation",
      get: function get() {
        return new l.Equation(new o.Polynom().parse("xy", this._a, this._b, this._c), new o.Polynom("0")).simplify();
      }
    }, {
      key: "tex",
      get: function get() {
        var t = this.equation;
        return this._a.isNegative() && t.multiply(-1), {
          canonical: t.tex,
          mxh: this.slope.isInfinity() ? "x=" + this.OA.x.tex : "y=" + new o.Polynom().parse("x", this.slope, this.height).tex,
          parametric: "".concat(r.Point.pmatrix("x", "y"), " = ").concat(r.Point.pmatrix(this._OA.x, this._OA.y), " + k\\cdot ").concat(r.Point.pmatrix(this._d.x, this._d.y))
        };
      }
    }, {
      key: "a",
      get: function get() {
        return this._a;
      },
      set: function set(t) {
        this._a = t;
      }
    }, {
      key: "b",
      get: function get() {
        return this._b;
      },
      set: function set(t) {
        this._b = t;
      }
    }, {
      key: "c",
      get: function get() {
        return this._c;
      },
      set: function set(t) {
        this._c = t;
      }
    }, {
      key: "OA",
      get: function get() {
        return this._OA;
      },
      set: function set(t) {
        this._OA = t;
      }
    }, {
      key: "d",
      get: function get() {
        return this._d;
      },
      set: function set(t) {
        this._d = t;
      }
    }, {
      key: "n",
      get: function get() {
        return this._n;
      }
    }, {
      key: "normal",
      get: function get() {
        return new n.Vector(this._a, this._b);
      }
    }, {
      key: "slope",
      get: function get() {
        return this._a.clone().opposed().divide(this._b);
      }
    }, {
      key: "height",
      get: function get() {
        return this._c.clone().opposed().divide(this._b);
      }
    }, {
      key: "distanceTo",
      value: function distanceTo(t) {
        var e = t.x.clone().multiply(this._a).add(t.y.clone().multiply(this._b)).add(this._c).abs(),
            i = this.normal.normSquare;
        if (i.isZero()) return {
          value: NaN,
          tex: "Not a line",
          fraction: new s.Fraction().infinite()
        };
        var n = e.value / Math.sqrt(i.value),
            r = e.clone().divide(i.clone().sqrt());
        return i.isSquare() ? {
          value: n,
          tex: r.tex,
          fraction: r
        } : {
          value: n,
          tex: "\\frac{".concat(e.tex, "}{\\sqrt{").concat(i.tex, "}}"),
          fraction: r
        };
      }
    }, {
      key: "hitSegment",
      value: function hitSegment(t, e) {
        var i = this.intersection(new a(t, e));
        return !!i.hasIntersection && i.point.x.value >= Math.min(t.x.value, e.x.value) && i.point.x.value <= Math.max(t.x.value, e.x.value) && i.point.y.value >= Math.min(t.y.value, e.y.value) && i.point.y.value <= Math.max(t.y.value, e.y.value);
      }
    }, {
      key: "canonicalAsFloatCoefficient",
      value: function canonicalAsFloatCoefficient(t) {
        void 0 === t && (t = 2);
        this._a.value, this._b.value, this._c.value;
        var e = "";
        return this._a.isZero() || (e = this._a.isOne() ? "x" : this._a.clone().opposed().isOne() ? "-x" : this._a.value.toFixed(t) + "x"), this._b.isZero() || (this._b.isPositive() && (e += "+"), e += this._b.value.toFixed(t) + "y"), this._c.isZero() || (this._c.isPositive() && (e += "+"), e += this._c.value.toFixed(t)), e + "=0";
      }
    }]);

    return a;
  }();

  e.Line = a;
}, function (t, e, i) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Pi = void 0;

  var s = i(0),
      n = i(1),
      r = i(6),
      o = i(7),
      h = i(2),
      l = i(3),
      a = i(11),
      u = i(12),
      c = i(4),
      m = i(8),
      _ = i(5),
      f = i(13);

  window.Pi = {
    Numeric: n.Numeric,
    Fraction: s.Fraction,
    Root: r.Nthroot,
    Monom: o.Monom,
    Polynom: h.Polynom,
    Equation: l.Equation,
    LinearSystem: a.LinearSystem,
    Rational: u.Rational,
    Geometry: {
      Vector: c.Vector,
      Point: _.Point,
      Line: m.Line,
      Triangle: f.Triangle
    }
  }, e.Pi = {
    Numeric: n.Numeric,
    Fraction: s.Fraction,
    Root: r.Nthroot,
    Monom: o.Monom,
    Polynom: h.Polynom,
    Equation: l.Equation,
    LinearSystem: a.LinearSystem,
    Rational: u.Rational,
    Geometry: {
      Vector: c.Vector,
      Point: _.Point,
      Line: m.Line,
      Triangle: f.Triangle
    }
  };
}, function (t, e, i) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Shutingyard = void 0;

  e.Shutingyard = /*#__PURE__*/function () {
    function _class2() {
      _classCallCheck(this, _class2);

      this._rpn = [];
    }

    _createClass(_class2, [{
      key: "isOperation",
      value: function isOperation(t) {
        return !!t[0].match(/[+\-*/^]/g) || !!t.match(/^sin|cos|tan/g);
      }
    }, {
      key: "NextToken",
      value: function NextToken(t, e) {
        var i, s, n;
        return i = t.substr(e).match(/^[0-9/a-z^]+/g) || [], i.length > 0 ? (s = i[0], n = "monom") : t[e].match(/[+\-*/^]/g) ? (s = t[e], n = "operation") : "(" === t[e] ? (s = "(", n = "(") : ")" === t[e] ? (s = ")", n = ")") : "," === t[e] ? (s = ",", n = "function-argument") : t.match(/^(sin|cos|tan)/g) ? (s = ")", n = ")") : (s = i[0], n = "monom", "" === s && (s = t[e], n = "monom", console.log("SHUTING YARD - NEXT TOKEN: error at ", e))), [s, e + s.length, n];
      }
    }, {
      key: "Uniformizer",
      value: function Uniformizer(t) {
        var e;
        return e = t.replace(/\)\(/g, ")*("), e = e.replace(/([\da-z])(\()/g, "$1*$2"), e = e.replace(/(\))([\da-z])/g, "$1*$2"), e;
      }
    }, {
      key: "parse",
      value: function parse(t) {
        var _this$NextToken, _this$NextToken2;

        var e = [],
            i = [],
            s = {
          "^": 4,
          "*": 3,
          "/": 3,
          "+": 2,
          "-": 2
        },
            n = {
          "^": "right",
          "*": "left",
          "/": "left",
          "+": "left",
          "-": "left"
        },
            r = "",
            o = 0,
            h = "";
        t = this.Uniformizer(t);
        var l,
            a = 50;

        for (; o < t.length;) {
          if (a--, 0 === a) {
            console.log("SECURITY LEVEL 1 EXIT");
            break;
          }

          switch ((_this$NextToken = this.NextToken(t, o), _this$NextToken2 = _slicedToArray(_this$NextToken, 3), r = _this$NextToken2[0], o = _this$NextToken2[1], h = _this$NextToken2[2], _this$NextToken), h) {
            case "monom":
              e.push(r);
              break;

            case "operation":
              if (i.length > 0) {
                var _t35 = i[i.length - 1];

                for (l = 50; _t35 in n && ("left" === n[r] && s[r] <= s[_t35] || "right" === n[r] && s[r] < s[_t35]);) {
                  if (l--, 0 === l) {
                    console.log("SECURITY LEVEL 2 OPERATION EXIT");
                    break;
                  }

                  e.push(i.pop() || ""), _t35 = i[i.length - 1];
                }
              }

              i.push(r);
              break;

            case "trigo":
              i.push(r);
              break;

            case "function-argument":
              for (l = 50; "(" !== i[i.length - 1] && i.length > 0;) {
                if (l--, 0 === l) {
                  console.log("SECURITY LEVEL 2 FUNCTION ARGUMENT EXIT");
                  break;
                }

                e.push(i.pop() || "");
              }

              break;

            case "(":
              i.push(r), "-" === t[o] && e.push("0");
              break;

            case ")":
              for (l = 50; "(" !== i[i.length - 1] && i.length > 1;) {
                if (l--, 0 === l) {
                  console.log("SECURITY LEVEL 2 CLOSING PARENTHESE EXIT");
                  break;
                }

                e.push(i.pop() || "");
              }

              i.pop();
              break;

            default:
              console.log("SHUTING YARD: ".concat(h, " : ").concat(r, " "));
          }
        }

        return this._rpn = e.concat(i.reverse()), this;
      }
    }, {
      key: "rpn",
      get: function get() {
        return this._rpn;
      }
    }]);

    return _class2;
  }();
}, function (t, e, i) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.LinearSystem = void 0;
  var s = i(0),
      n = i(3),
      r = i(1),
      o = i(2);

  var h = /*#__PURE__*/function () {
    function h() {
      var _this9 = this;

      _classCallCheck(this, h);

      for (var _len21 = arguments.length, t = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
        t[_key21] = arguments[_key21];
      }

      return this.parse = function () {
        for (var _len22 = arguments.length, t = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
          t[_key22] = arguments[_key22];
        }

        return _this9._equations = t.map(function (t) {
          return new n.Equation(t);
        }), _this9._findLetters(), _this9;
      }, this.setCoefficient = function () {
        _this9._equations = [];
        var e = 0;

        for (var _len23 = arguments.length, t = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
          t[_key23] = arguments[_key23];
        }

        for (; e < t.length - _this9._letters.length;) {
          var _o$Polynom;

          var _i34 = (_o$Polynom = new o.Polynom()).parse.apply(_o$Polynom, [_this9._letters.join("")].concat(_toConsumableArray(t.slice(e, e + _this9._letters.length)))),
              _s10 = new o.Polynom(t[e + _this9._letters.length].toString()),
              _r4 = new n.Equation().create(_i34, _s10);

          _this9._equations.push(_r4.clone()), e = e + _this9._letters.length + 1;
        }

        return _this9;
      }, this.clone = function () {
        var _h4;

        return (_h4 = new h()).parse.apply(_h4, _toConsumableArray(_this9._equations.map(function (t) {
          return t.clone();
        })));
      }, this.setLetters = function () {
        for (var _len24 = arguments.length, t = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
          t[_key24] = arguments[_key24];
        }

        return _this9._letters = t, _this9;
      }, this._findLetters = function () {
        var t = new Set();

        var _iterator33 = _createForOfIteratorHelper(_this9._equations),
            _step33;

        try {
          for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
            var _e39 = _step33.value;
            t = new Set([].concat(_toConsumableArray(t), _toConsumableArray(_e39.variables)));
          }
        } catch (err) {
          _iterator33.e(err);
        } finally {
          _iterator33.f();
        }

        return _this9._letters = _toConsumableArray(t), _this9;
      }, this.generate = function () {
        var e = [];

        for (var _len25 = arguments.length, t = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
          t[_key25] = arguments[_key25];
        }

        for (var _i35 = 0, _t36 = t; _i35 < _t36.length; _i35++) {
          var _i36 = _t36[_i35];
          "number" == typeof _i36 ? e.push(new s.Fraction(_i36.toString())) : e.push(_i36.clone());
        }

        _this9._equations = [];

        for (var _i37 = 0; _i37 < t.length; _i37++) {
          _this9._equations.push(_this9._generateOneEquation.apply(_this9, e));
        }

        return _this9;
      }, this._generateOneEquation = function () {
        var e,
            i = [],
            o = new s.Fraction().zero(),
            _h3 = ["x", "y", "z", "t", "u", "v", "w", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"],
            l = "";

        for (var _len26 = arguments.length, t = new Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
          t[_key26] = arguments[_key26];
        }

        for (var _e40 = 0; _e40 < t.length; _e40++) {
          i.push(r.Numeric.randomIntSym(5)), o.add(t[_e40].clone().multiply(i[_e40])), l += "".concat(i[_e40] < 0 ? i[_e40] : "+" + i[_e40]).concat(_h3[_e40]);
        }

        return e = new n.Equation("".concat(l, "=").concat(o.display)), 1 != e.right.monoms[0].coefficient.denominator && e.multiply(new s.Fraction(e.right.monoms[0].coefficient.denominator, 1)), _this9._checkIfLinerCombination(e) ? e : _this9._generateOneEquation.apply(_this9, t);
      }, this.mergeEquations = function (t, e, i, n) {
        var r = t.clone().multiply(new s.Fraction(i)),
            o = e.clone().multiply(new s.Fraction(n));
        return r.left.add(o.left), r.right.add(o.right), r;
      }, this.reorder = function () {
        var _iterator34 = _createForOfIteratorHelper(_this9._equations),
            _step34;

        try {
          for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
            var _t37 = _step34.value;

            _t37.reorder();
          }
        } catch (err) {
          _iterator34.e(err);
        } finally {
          _iterator34.f();
        }

        return _this9;
      }, this.solve = function () {
        _this9._solutions = {}, _this9._resolutionSteps = [], _this9.reorder();

        var t = _this9.variables.sort();

        var _iterator35 = _createForOfIteratorHelper(t),
            _step35;

        try {
          for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
            var _e41 = _step35.value;
            _this9._solutions[_e41] = _this9._solveOneLetter(_e41, t);
          }
        } catch (err) {
          _iterator35.e(err);
        } finally {
          _iterator35.f();
        }

        return _this9;
      }, this._checkIfLinerCombination = function (t) {
        return !0;
      }, this.log = function () {
        var t = "";

        var _iterator36 = _createForOfIteratorHelper(_this9._equations),
            _step36;

        try {
          for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
            var _e42 = _step36.value;
            console.log(_e42.tex), t += _e42.tex + "\\n}";
          }
        } catch (err) {
          _iterator36.e(err);
        } finally {
          _iterator36.f();
        }

        return t;
      }, this._equations = [], this._letters = "xy".split(""), void 0 !== t && t.length > 0 && this.parse.apply(this, t), this;
    }

    _createClass(h, [{
      key: "isLinerarSystem",
      get: function get() {
        return !0;
      }
    }, {
      key: "equations",
      get: function get() {
        return this._equations;
      },
      set: function set(t) {
        this._equations = t;
      }
    }, {
      key: "letters",
      get: function get() {
        return this._letters.join("");
      },
      set: function set(t) {
        this._letters = t.split("");
      }
    }, {
      key: "isSolvable",
      get: function get() {
        return this.variables.length === this._equations.length;
      }
    }, {
      key: "variables",
      get: function get() {
        var t = [];

        var _iterator37 = _createForOfIteratorHelper(this._equations),
            _step37;

        try {
          for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
            var _e43 = _step37.value;
            t = t.concat(_e43.variables);
          }
        } catch (err) {
          _iterator37.e(err);
        } finally {
          _iterator37.f();
        }

        return _toConsumableArray(new Set(t)).sort();
      }
    }, {
      key: "tex",
      get: function get() {
        var t,
            e,
            i = this.clone().reorder(),
            s = i.variables,
            n = [];

        var _iterator38 = _createForOfIteratorHelper(i.equations),
            _step38;

        try {
          for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
            var _r5 = _step38.value;
            t = [];

            var _iterator39 = _createForOfIteratorHelper(s),
                _step39;

            try {
              for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                var _i38 = _step39.value;
                e = _r5.left.monomByLetter(_i38), 0 === t.length ? t.push(e.isZero() ? "" : e.tex) : t.push(e.isZero() ? "" : (1 === e.coefficient.sign() ? "+" : "") + e.tex);
              }
            } catch (err) {
              _iterator39.e(err);
            } finally {
              _iterator39.f();
            }

            t.push("="), t.push(_r5.right.tex), n.push(t.join("&"));
          }
        } catch (err) {
          _iterator38.e(err);
        } finally {
          _iterator38.f();
        }

        return "\\left\\{\\begin{array}{".concat("r".repeat(s.length), "cl}").concat(n.join("\\\\ "), "\\end{array}\\right.");
      }
    }, {
      key: "texSolution",
      get: function get() {
        var t = [];
        void 0 === this._solutions && this.solve();

        for (var _e44 in this._solutions) {
          if (this._solutions[_e44].isReal) return void console.log("Undetermined (letter ".concat(_e44, ")"));
          if (this._solutions[_e44].isVarnothing) return void console.log("Undefined (letter ".concat(_e44, ")"));
          t.push(this._solutions[_e44].value.dfrac);
        }

        return "(".concat(t.join(";"), ")");
      }
    }, {
      key: "_linearReduction",
      value: function _linearReduction(t, e, i) {
        var s = t.left.monomByDegree(1, i).coefficient.clone(),
            n = e.left.monomByDegree(1, i).coefficient.clone().opposed();
        return this.mergeEquations(t, e, n, s);
      }
    }, {
      key: "_solveOneLetter",
      value: function _solveOneLetter(t, e) {
        var i = this.clone().equations,
            n = [];

        var _iterator40 = _createForOfIteratorHelper(e),
            _step40;

        try {
          for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
            var _s11 = _step40.value;

            if (_s11 !== t) {
              var _h5;

              for (var _t38 = 0; _t38 < i.length - 1; _t38++) {
                n.push(this._linearReduction(i[_t38], i[_t38 + 1], _s11));
              }

              this._resolutionSteps.push((_h5 = new h()).parse.apply(_h5, _toConsumableArray(n))), i = this._resolutionSteps[this._resolutionSteps.length - 1].clone().equations, n = [];
            }
          }
        } catch (err) {
          _iterator40.e(err);
        } finally {
          _iterator40.f();
        }

        var r = this._resolutionSteps[this._resolutionSteps.length - 1].equations[0];
        return r.solve(), {
          value: new s.Fraction(r.solutions[0]),
          isReal: r.isReal,
          isVarnothing: r.isVarnothing
        };
      }
    }]);

    return h;
  }();

  e.LinearSystem = h;
}, function (t, e, i) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Rational = void 0;
  var s = i(2);

  e.Rational = /*#__PURE__*/function () {
    function _class3(t, e) {
      _classCallCheck(this, _class3);

      this._numerator = t ? t.clone() : new s.Polynom(), this._denominator = e ? e.clone() : new s.Polynom();
    }

    _createClass(_class3, [{
      key: "tex",
      get: function get() {
        return "\\dfrac{ ".concat(this._numerator.tex, " }{ ").concat(this._denominator.tex, " }");
      }
    }]);

    return _class3;
  }();
}, function (t, e, i) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Triangle = void 0;
  var s = i(5),
      n = i(0),
      r = i(4),
      o = i(8),
      h = i(3);

  e.Triangle = /*#__PURE__*/function () {
    function _class4() {
      var _this10 = this;

      _classCallCheck(this, _class4);

      return this.parse = function () {
        for (var _len27 = arguments.length, t = new Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
          t[_key27] = arguments[_key27];
        }

        if (6 === t.length) {
          var _e45 = t.map(function (t) {
            return new n.Fraction(t);
          });

          return _this10.parse(new s.Point(_e45[0], _e45[1]), new s.Point(_e45[2], _e45[3]), new s.Point(_e45[4], _e45[5]));
        }

        if (3 === t.length) {
          if (3 === t.filter(function (t) {
            return "string" == typeof t;
          }).length) return _this10.parse.apply(_this10, _toConsumableArray(t.map(function (t) {
            return new o.Line(t);
          })));

          if (3 === t.filter(function (t) {
            return !0 === t.isLine;
          }).length) {
            _this10._lines = {
              AB: t[0],
              BC: t[1],
              AC: t[2]
            };

            var _e46 = t[0].intersection(t[1]);

            if (!_e46.hasIntersection) return _this10;
            if (_this10._B = _e46.point.clone(), _e46 = t[1].intersection(t[2]), !_e46.hasIntersection) return _this10;
            if (_this10._C = _e46.point.clone(), _e46 = t[2].intersection(t[0]), !_e46.hasIntersection) return _this10;
            _this10._A = _e46.point.clone();
          } else {
            if (t.filter(function (t) {
              return !0 === t.isPoint;
            }).length < 3) return _this10.parse(new s.Point(t[0]), new s.Point(t[1]), new s.Point(t[2]));
            _this10._A = t[0].clone(), _this10._B = t[1].clone(), _this10._C = t[2].clone(), _this10._lines = {
              AB: new o.Line(_this10._A, _this10._B),
              BC: new o.Line(_this10._B, _this10._C),
              AC: new o.Line(_this10._A, _this10._C)
            };
          }
        } else if (1 === t.length && !0 === t[0].isTriangle) return t[0].clone();

        return _this10._updateTriangle(), _this10;
      }, this.clone = function () {
        return _this10._A = _this10._A.clone(), _this10._B = _this10._B.clone(), _this10._C = _this10._C.clone(), _this10._lines = {
          AB: _this10._lines.AB.clone(),
          BC: _this10._lines.BC.clone(),
          AC: _this10._lines.AC.clone()
        }, _this10._updateTriangle(), _this10;
      }, this._updateTriangle = function () {
        _this10._middles = {
          AB: new s.Point().middleOf(_this10._A, _this10._B),
          AC: new s.Point().middleOf(_this10._A, _this10._C),
          BC: new s.Point().middleOf(_this10._B, _this10._C)
        }, _this10._remarquables = _this10._calculateRemarquableLines();
      }, this.getPointByName = function (t) {
        switch (t.toUpperCase()) {
          case "A":
            return _this10._A;

          case "B":
            return _this10._B;

          case "C":
            return _this10._C;
        }

        return _this10._A;
      }, this.getSegment = function (t, e) {
        return new r.Vector(_this10.getPointByName(t), _this10.getPointByName(e));
      }, this._calculateRemarquableLines = function () {
        var t = {
          medians: {
            A: new o.Line(_this10._A, _this10._middles.BC),
            B: new o.Line(_this10._B, _this10._middles.AC),
            C: new o.Line(_this10._C, _this10._middles.AB),
            intersection: null
          },
          mediators: {
            AB: new o.Line(_this10._middles.AB, new r.Vector(_this10._A, _this10._B).normal()),
            AC: new o.Line(_this10._middles.AC, new r.Vector(_this10._A, _this10._C).normal()),
            BC: new o.Line(_this10._middles.BC, new r.Vector(_this10._B, _this10._C).normal()),
            intersection: null
          },
          heights: {
            A: new o.Line(_this10._A, new r.Vector(_this10._B, _this10._C).normal()),
            B: new o.Line(_this10._B, new r.Vector(_this10._A, _this10._C).normal()),
            C: new o.Line(_this10._C, new r.Vector(_this10._A, _this10._B).normal()),
            intersection: null
          },
          bisectors: {
            A: _this10._calculateBisectors("A"),
            B: _this10._calculateBisectors("B"),
            C: _this10._calculateBisectors("C"),
            intersection: null
          }
        };
        return t.medians.intersection = t.medians.A.intersection(t.medians.B).point, t.mediators.intersection = t.mediators.AB.intersection(t.mediators.BC).point, t.heights.intersection = t.heights.A.intersection(t.heights.B).point, t.bisectors.intersection = t.bisectors.A.intersection(t.bisectors.B).point, t;
      }, this._calculateBisectors = function (t) {
        var e,
            i,
            s = _this10.lines;
        "A" === t ? (e = s.AB, i = s.AC) : "B" === t ? (e = s.AB, i = s.BC) : "C" === t && (e = s.BC, i = s.AC);
        var n = new o.Line(new h.Equation(e.equation.left.clone().multiply(i.n.simplify().norm), i.equation.left.clone().multiply(e.n.simplify().norm)).reorder(!0).simplify()),
            r = new o.Line(new h.Equation(e.equation.left.clone().multiply(i.n.simplify().norm), i.equation.left.clone().multiply(e.n.simplify().norm).opposed()).reorder(!0).simplify());
        return "A" === t ? n.hitSegment(_this10.B, _this10.C) ? n : r : "B" === t ? n.hitSegment(_this10.A, _this10.C) ? n : r : "C" === t ? n.hitSegment(_this10.B, _this10.A) ? n : r : n;
      }, arguments.length > 0 && this.parse.apply(this, arguments), this;
    }

    _createClass(_class4, [{
      key: "isTriangle",
      get: function get() {
        return !0;
      }
    }, {
      key: "A",
      get: function get() {
        return this._A;
      }
    }, {
      key: "B",
      get: function get() {
        return this._B;
      }
    }, {
      key: "C",
      get: function get() {
        return this._C;
      }
    }, {
      key: "AB",
      get: function get() {
        return this.getSegment("A", "B");
      }
    }, {
      key: "BA",
      get: function get() {
        return this.getSegment("B", "A");
      }
    }, {
      key: "BC",
      get: function get() {
        return this.getSegment("B", "C");
      }
    }, {
      key: "CB",
      get: function get() {
        return this.getSegment("C", "B");
      }
    }, {
      key: "AC",
      get: function get() {
        return this.getSegment("A", "C");
      }
    }, {
      key: "CA",
      get: function get() {
        return this.getSegment("C", "A");
      }
    }, {
      key: "isRectangle",
      get: function get() {
        return !!this.AB.isNormalTo(this.BC) || !!this.AB.isNormalTo(this.AC) || !!this.BC.isNormalTo(this.AC);
      }
    }, {
      key: "isEquilateral",
      get: function get() {
        return this.AB.normSquare.isEqual(this.BC.normSquare) && this.AB.normSquare.isEqual(this.AC.normSquare);
      }
    }, {
      key: "isIsocele",
      get: function get() {
        return this.AB.normSquare.isEqual(this.BC.normSquare) || this.AB.normSquare.isEqual(this.AC.normSquare) || this.BC.normSquare.isEqual(this.AC.normSquare);
      }
    }, {
      key: "lines",
      get: function get() {
        return this._lines;
      }
    }, {
      key: "remarquables",
      get: function get() {
        return this._remarquables;
      }
    }]);

    return _class4;
  }();
}]);
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!************************************!*\
  !*** ./resources/js/pigeometry.js ***!
  \************************************/
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e30) { throw _e30; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e31) { didErr = true; err = _e31; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function i(n) {
    if (e[n]) return e[n].exports;
    var r = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
  }

  i.m = t, i.c = e, i.d = function (t, e, n) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var r in t) {
      i.d(n, r, function (e) {
        return t[e];
      }.bind(null, r));
    }
    return n;
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return i.d(e, "a", e), e;
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, i.p = "", i(i.s = 2);
}([function (t, e, i) {
  "use strict";

  (function (t) {
    i.d(e, "a", function () {
      return xa;
    }), i.d(e, "b", function () {
      return La;
    }), i.d(e, "c", function () {
      return fh;
    }), i.d(e, "d", function () {
      return bh;
    }), i.d(e, "e", function () {
      return Dr;
    }), i.d(e, "f", function () {
      return ks;
    }), i.d(e, "g", function () {
      return xs;
    });
    var n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};

    function r(t, e) {
      return t(e = {
        exports: {}
      }, e.exports), e.exports;
    }

    var s,
        a,
        o,
        h = function h(t) {
      return t && t.Math == Math && t;
    },
        u = h("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) || h("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) || h("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) || h("object" == _typeof(n) && n) || Function("return this")(),
        l = function l(t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
        c = !l(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function get() {
          return 7;
        }
      }).a;
    }),
        f = {}.propertyIsEnumerable,
        d = Object.getOwnPropertyDescriptor,
        p = {
      f: d && !f.call({
        1: 2
      }, 1) ? function (t) {
        var e = d(this, t);
        return !!e && e.enumerable;
      } : f
    },
        y = function y(t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    },
        g = {}.toString,
        _ = function _(t) {
      return g.call(t).slice(8, -1);
    },
        v = "".split,
        m = l(function () {
      return !Object("z").propertyIsEnumerable(0);
    }) ? function (t) {
      return "String" == _(t) ? v.call(t, "") : Object(t);
    } : Object,
        b = function b(t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
        w = function w(t) {
      return m(b(t));
    },
        x = function x(t) {
      return "object" == _typeof(t) ? null !== t : "function" == typeof t;
    },
        k = function k(t, e) {
      if (!x(t)) return t;
      var i, n;
      if (e && "function" == typeof (i = t.toString) && !x(n = i.call(t))) return n;
      if ("function" == typeof (i = t.valueOf) && !x(n = i.call(t))) return n;
      if (!e && "function" == typeof (i = t.toString) && !x(n = i.call(t))) return n;
      throw TypeError("Can't convert object to primitive value");
    },
        P = {}.hasOwnProperty,
        A = function A(t, e) {
      return P.call(t, e);
    },
        M = u.document,
        O = x(M) && x(M.createElement),
        S = function S(t) {
      return O ? M.createElement(t) : {};
    },
        C = !c && !l(function () {
      return 7 != Object.defineProperty(S("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a;
    }),
        T = Object.getOwnPropertyDescriptor,
        j = {
      f: c ? T : function (t, e) {
        if (t = w(t), e = k(e, !0), C) try {
          return T(t, e);
        } catch (t) {}
        if (A(t, e)) return y(!p.f.call(t, e), t[e]);
      }
    },
        E = function E(t) {
      if (!x(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
        D = Object.defineProperty,
        I = {
      f: c ? D : function (t, e, i) {
        if (E(t), e = k(e, !0), E(i), C) try {
          return D(t, e, i);
        } catch (t) {}
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
        return "value" in i && (t[e] = i.value), t;
      }
    },
        N = c ? function (t, e, i) {
      return I.f(t, e, y(1, i));
    } : function (t, e, i) {
      return t[e] = i, t;
    },
        L = function L(t, e) {
      try {
        N(u, t, e);
      } catch (i) {
        u[t] = e;
      }

      return e;
    },
        R = u["__core-js_shared__"] || L("__core-js_shared__", {}),
        B = r(function (t) {
      (t.exports = function (t, e) {
        return R[t] || (R[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.3.6",
        mode: "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
      });
    }),
        F = B("native-function-to-string", Function.toString),
        z = u.WeakMap,
        q = "function" == typeof z && /native code/.test(F.call(z)),
        $ = 0,
        G = Math.random(),
        X = function X(t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++$ + G).toString(36);
    },
        V = B("keys"),
        Y = function Y(t) {
      return V[t] || (V[t] = X(t));
    },
        H = {},
        U = u.WeakMap;

    if (q) {
      var W = new U(),
          Q = W.get,
          J = W.has,
          K = W.set;
      s = function s(t, e) {
        return K.call(W, t, e), e;
      }, a = function a(t) {
        return Q.call(W, t) || {};
      }, o = function o(t) {
        return J.call(W, t);
      };
    } else {
      var Z = Y("state");
      H[Z] = !0, s = function s(t, e) {
        return N(t, Z, e), e;
      }, a = function a(t) {
        return A(t, Z) ? t[Z] : {};
      }, o = function o(t) {
        return A(t, Z);
      };
    }

    var tt,
        et,
        it = {
      set: s,
      get: a,
      has: o,
      enforce: function enforce(t) {
        return o(t) ? a(t) : s(t, {});
      },
      getterFor: function getterFor(t) {
        return function (e) {
          var i;
          if (!x(e) || (i = a(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
          return i;
        };
      }
    },
        nt = r(function (t) {
      var e = it.get,
          i = it.enforce,
          n = String(F).split("toString");
      B("inspectSource", function (t) {
        return F.call(t);
      }), (t.exports = function (t, e, r, s) {
        var a = !!s && !!s.unsafe,
            o = !!s && !!s.enumerable,
            h = !!s && !!s.noTargetGet;
        "function" == typeof r && ("string" != typeof e || A(r, "name") || N(r, "name", e), i(r).source = n.join("string" == typeof e ? e : "")), t !== u ? (a ? !h && t[e] && (o = !0) : delete t[e], o ? t[e] = r : N(t, e, r)) : o ? t[e] = r : L(e, r);
      })(Function.prototype, "toString", function () {
        return "function" == typeof this && e(this).source || F.call(this);
      });
    }),
        rt = u,
        st = function st(t) {
      return "function" == typeof t ? t : void 0;
    },
        at = function at(t, e) {
      return arguments.length < 2 ? st(rt[t]) || st(u[t]) : rt[t] && rt[t][e] || u[t] && u[t][e];
    },
        ot = Math.ceil,
        ht = Math.floor,
        ut = function ut(t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? ht : ot)(t);
    },
        lt = Math.min,
        ct = function ct(t) {
      return t > 0 ? lt(ut(t), 9007199254740991) : 0;
    },
        ft = Math.max,
        dt = Math.min,
        pt = function pt(t, e) {
      var i = ut(t);
      return i < 0 ? ft(i + e, 0) : dt(i, e);
    },
        yt = function yt(t) {
      return function (e, i, n) {
        var r,
            s = w(e),
            a = ct(s.length),
            o = pt(n, a);

        if (t && i != i) {
          for (; a > o;) {
            if ((r = s[o++]) != r) return !0;
          }
        } else for (; a > o; o++) {
          if ((t || o in s) && s[o] === i) return t || o || 0;
        }

        return !t && -1;
      };
    },
        gt = {
      includes: yt(!0),
      indexOf: yt(!1)
    },
        _t = gt.indexOf,
        vt = function vt(t, e) {
      var i,
          n = w(t),
          r = 0,
          s = [];

      for (i in n) {
        !A(H, i) && A(n, i) && s.push(i);
      }

      for (; e.length > r;) {
        A(n, i = e[r++]) && (~_t(s, i) || s.push(i));
      }

      return s;
    },
        mt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        bt = mt.concat("length", "prototype"),
        wt = {
      f: Object.getOwnPropertyNames || function (t) {
        return vt(t, bt);
      }
    },
        xt = {
      f: Object.getOwnPropertySymbols
    },
        kt = at("Reflect", "ownKeys") || function (t) {
      var e = wt.f(E(t)),
          i = xt.f;
      return i ? e.concat(i(t)) : e;
    },
        Pt = function Pt(t, e) {
      for (var i = kt(e), n = I.f, r = j.f, s = 0; s < i.length; s++) {
        var a = i[s];
        A(t, a) || n(t, a, r(e, a));
      }
    },
        At = /#|\.prototype\./,
        Mt = function Mt(t, e) {
      var i = St[Ot(t)];
      return i == Tt || i != Ct && ("function" == typeof e ? l(e) : !!e);
    },
        Ot = Mt.normalize = function (t) {
      return String(t).replace(At, ".").toLowerCase();
    },
        St = Mt.data = {},
        Ct = Mt.NATIVE = "N",
        Tt = Mt.POLYFILL = "P",
        jt = Mt,
        Et = j.f,
        Dt = function Dt(t, e) {
      var i,
          n,
          r,
          s,
          a,
          o = t.target,
          h = t.global,
          l = t.stat;
      if (i = h ? u : l ? u[o] || L(o, {}) : (u[o] || {}).prototype) for (n in e) {
        if (s = e[n], r = t.noTargetGet ? (a = Et(i, n)) && a.value : i[n], !jt(h ? n : o + (l ? "." : "#") + n, t.forced) && void 0 !== r) {
          if (_typeof(s) == _typeof(r)) continue;
          Pt(s, r);
        }

        (t.sham || r && r.sham) && N(s, "sham", !0), nt(i, n, s, t);
      }
    },
        It = Array.isArray || function (t) {
      return "Array" == _(t);
    },
        Nt = function Nt(t, e, i) {
      var n = k(e);
      n in t ? I.f(t, n, y(0, i)) : t[n] = i;
    },
        Lt = !!Object.getOwnPropertySymbols && !l(function () {
      return !String(Symbol());
    }),
        Rt = u.Symbol,
        Bt = B("wks"),
        Ft = function Ft(t) {
      return Bt[t] || (Bt[t] = Lt && Rt[t] || (Lt ? Rt : X)("Symbol." + t));
    },
        zt = at("navigator", "userAgent") || "",
        qt = u.process,
        $t = qt && qt.versions,
        Gt = $t && $t.v8;

    Gt ? et = (tt = Gt.split("."))[0] + tt[1] : zt && (!(tt = zt.match(/Edge\/(\d+)/)) || tt[1] >= 74) && (tt = zt.match(/Chrome\/(\d+)/)) && (et = tt[1]);

    var Xt = et && +et,
        Vt = Ft("species"),
        Yt = function Yt(t) {
      return Xt >= 51 || !l(function () {
        var e = [];
        return (e.constructor = {})[Vt] = function () {
          return {
            foo: 1
          };
        }, 1 !== e[t](Boolean).foo;
      });
    },
        Ht = Ft("species"),
        Ut = [].slice,
        Wt = Math.max;

    Dt({
      target: "Array",
      proto: !0,
      forced: !Yt("slice")
    }, {
      slice: function slice(t, e) {
        var i,
            n,
            r,
            s = w(this),
            a = ct(s.length),
            o = pt(t, a),
            h = pt(void 0 === e ? a : e, a);
        if (It(s) && ("function" != typeof (i = s.constructor) || i !== Array && !It(i.prototype) ? x(i) && null === (i = i[Ht]) && (i = void 0) : i = void 0, i === Array || void 0 === i)) return Ut.call(s, o, h);

        for (n = new (void 0 === i ? Array : i)(Wt(h - o, 0)), r = 0; o < h; o++, r++) {
          o in s && Nt(n, r, s[o]);
        }

        return n.length = r, n;
      }
    });
    var Qt = I.f,
        Jt = Function.prototype,
        Kt = Jt.toString,
        Zt = /^\s*function ([^ (]*)/;
    c && !("name" in Jt) && Qt(Jt, "name", {
      configurable: !0,
      get: function get() {
        try {
          return Kt.call(this).match(Zt)[1];
        } catch (t) {
          return "";
        }
      }
    });
    var te = wt.f,
        ee = {}.toString,
        ie = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        ne = {
      f: function f(t) {
        return ie && "[object Window]" == ee.call(t) ? function (t) {
          try {
            return te(t);
          } catch (t) {
            return ie.slice();
          }
        }(t) : te(w(t));
      }
    },
        re = ne.f,
        se = l(function () {
      return !Object.getOwnPropertyNames(1);
    });

    function ae(t) {
      return (ae = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function oe(t) {
      return (oe = "function" == typeof Symbol && "symbol" === ae(Symbol.iterator) ? function (t) {
        return ae(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : ae(t);
      })(t);
    }

    Dt({
      target: "Object",
      stat: !0,
      forced: se
    }, {
      getOwnPropertyNames: re
    });

    var he = function he(t) {
      return Object(b(t));
    },
        ue = Object.keys || function (t) {
      return vt(t, mt);
    },
        le = c ? Object.defineProperties : function (t, e) {
      E(t);

      for (var i, n = ue(e), r = n.length, s = 0; r > s;) {
        I.f(t, i = n[s++], e[i]);
      }

      return t;
    },
        ce = at("document", "documentElement"),
        fe = Y("IE_PROTO"),
        de = function de() {},
        _pe = function pe() {
      var t,
          e = S("iframe"),
          i = mt.length;

      for (e.style.display = "none", ce.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), _pe = t.F; i--;) {
        delete _pe.prototype[mt[i]];
      }

      return _pe();
    },
        ye = Object.create || function (t, e) {
      var i;
      return null !== t ? (de.prototype = E(t), i = new de(), de.prototype = null, i[fe] = t) : i = _pe(), void 0 === e ? i : le(i, e);
    };

    H[fe] = !0;

    var ge = {
      f: Ft
    },
        _e = I.f,
        ve = function ve(t) {
      var e = rt.Symbol || (rt.Symbol = {});
      A(e, t) || _e(e, t, {
        value: ge.f(t)
      });
    },
        me = I.f,
        be = Ft("toStringTag"),
        we = function we(t, e, i) {
      t && !A(t = i ? t : t.prototype, be) && me(t, be, {
        configurable: !0,
        value: e
      });
    },
        xe = function xe(t) {
      if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
      return t;
    },
        ke = function ke(t, e, i) {
      if (xe(t), void 0 === e) return t;

      switch (i) {
        case 0:
          return function () {
            return t.call(e);
          };

        case 1:
          return function (i) {
            return t.call(e, i);
          };

        case 2:
          return function (i, n) {
            return t.call(e, i, n);
          };

        case 3:
          return function (i, n, r) {
            return t.call(e, i, n, r);
          };
      }

      return function () {
        return t.apply(e, arguments);
      };
    },
        Pe = Ft("species"),
        Ae = function Ae(t, e) {
      var i;
      return It(t) && ("function" != typeof (i = t.constructor) || i !== Array && !It(i.prototype) ? x(i) && null === (i = i[Pe]) && (i = void 0) : i = void 0), new (void 0 === i ? Array : i)(0 === e ? 0 : e);
    },
        Me = [].push,
        Oe = function Oe(t) {
      var e = 1 == t,
          i = 2 == t,
          n = 3 == t,
          r = 4 == t,
          s = 6 == t,
          a = 5 == t || s;
      return function (o, h, u, l) {
        for (var c, f, d = he(o), p = m(d), y = ke(h, u, 3), g = ct(p.length), _ = 0, v = l || Ae, b = e ? v(o, g) : i ? v(o, 0) : void 0; g > _; _++) {
          if ((a || _ in p) && (f = y(c = p[_], _, d), t)) if (e) b[_] = f;else if (f) switch (t) {
            case 3:
              return !0;

            case 5:
              return c;

            case 6:
              return _;

            case 2:
              Me.call(b, c);
          } else if (r) return !1;
        }

        return s ? -1 : n || r ? r : b;
      };
    },
        Se = {
      forEach: Oe(0),
      map: Oe(1),
      filter: Oe(2),
      some: Oe(3),
      every: Oe(4),
      find: Oe(5),
      findIndex: Oe(6)
    },
        Ce = Se.forEach,
        Te = Y("hidden"),
        je = Ft("toPrimitive"),
        Ee = it.set,
        De = it.getterFor("Symbol"),
        Ie = Object.prototype,
        _Ne = u.Symbol,
        Le = u.JSON,
        Re = Le && Le.stringify,
        Be = j.f,
        Fe = I.f,
        ze = ne.f,
        qe = p.f,
        $e = B("symbols"),
        Ge = B("op-symbols"),
        Xe = B("string-to-symbol-registry"),
        Ve = B("symbol-to-string-registry"),
        Ye = B("wks"),
        He = u.QObject,
        Ue = !He || !He.prototype || !He.prototype.findChild,
        We = c && l(function () {
      return 7 != ye(Fe({}, "a", {
        get: function get() {
          return Fe(this, "a", {
            value: 7
          }).a;
        }
      })).a;
    }) ? function (t, e, i) {
      var n = Be(Ie, e);
      n && delete Ie[e], Fe(t, e, i), n && t !== Ie && Fe(Ie, e, n);
    } : Fe,
        Qe = function Qe(t, e) {
      var i = $e[t] = ye(_Ne.prototype);
      return Ee(i, {
        type: "Symbol",
        tag: t,
        description: e
      }), c || (i.description = e), i;
    },
        Je = Lt && "symbol" == _typeof(_Ne.iterator) ? function (t) {
      return "symbol" == _typeof(t);
    } : function (t) {
      return Object(t) instanceof _Ne;
    },
        Ke = function Ke(t, e, i) {
      t === Ie && Ke(Ge, e, i), E(t);
      var n = k(e, !0);
      return E(i), A($e, n) ? (i.enumerable ? (A(t, Te) && t[Te][n] && (t[Te][n] = !1), i = ye(i, {
        enumerable: y(0, !1)
      })) : (A(t, Te) || Fe(t, Te, y(1, {})), t[Te][n] = !0), We(t, n, i)) : Fe(t, n, i);
    },
        Ze = function Ze(t, e) {
      E(t);
      var i = w(e),
          n = ue(i).concat(ni(i));
      return Ce(n, function (e) {
        c && !ti.call(i, e) || Ke(t, e, i[e]);
      }), t;
    },
        ti = function ti(t) {
      var e = k(t, !0),
          i = qe.call(this, e);
      return !(this === Ie && A($e, e) && !A(Ge, e)) && (!(i || !A(this, e) || !A($e, e) || A(this, Te) && this[Te][e]) || i);
    },
        ei = function ei(t, e) {
      var i = w(t),
          n = k(e, !0);

      if (i !== Ie || !A($e, n) || A(Ge, n)) {
        var r = Be(i, n);
        return !r || !A($e, n) || A(i, Te) && i[Te][n] || (r.enumerable = !0), r;
      }
    },
        ii = function ii(t) {
      var e = ze(w(t)),
          i = [];
      return Ce(e, function (t) {
        A($e, t) || A(H, t) || i.push(t);
      }), i;
    },
        ni = function ni(t) {
      var e = t === Ie,
          i = ze(e ? Ge : w(t)),
          n = [];
      return Ce(i, function (t) {
        !A($e, t) || e && !A(Ie, t) || n.push($e[t]);
      }), n;
    };

    Lt || (nt((_Ne = function Ne() {
      if (this instanceof _Ne) throw TypeError("Symbol is not a constructor");

      var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
          e = X(t),
          i = function i(t) {
        this === Ie && i.call(Ge, t), A(this, Te) && A(this[Te], e) && (this[Te][e] = !1), We(this, e, y(1, t));
      };

      return c && Ue && We(Ie, e, {
        configurable: !0,
        set: i
      }), Qe(e, t);
    }).prototype, "toString", function () {
      return De(this).tag;
    }), p.f = ti, I.f = Ke, j.f = ei, wt.f = ne.f = ii, xt.f = ni, c && (Fe(_Ne.prototype, "description", {
      configurable: !0,
      get: function get() {
        return De(this).description;
      }
    }), nt(Ie, "propertyIsEnumerable", ti, {
      unsafe: !0
    })), ge.f = function (t) {
      return Qe(Ft(t), t);
    }), Dt({
      global: !0,
      wrap: !0,
      forced: !Lt,
      sham: !Lt
    }, {
      Symbol: _Ne
    }), Ce(ue(Ye), function (t) {
      ve(t);
    }), Dt({
      target: "Symbol",
      stat: !0,
      forced: !Lt
    }, {
      "for": function _for(t) {
        var e = String(t);
        if (A(Xe, e)) return Xe[e];

        var i = _Ne(e);

        return Xe[e] = i, Ve[i] = e, i;
      },
      keyFor: function keyFor(t) {
        if (!Je(t)) throw TypeError(t + " is not a symbol");
        if (A(Ve, t)) return Ve[t];
      },
      useSetter: function useSetter() {
        Ue = !0;
      },
      useSimple: function useSimple() {
        Ue = !1;
      }
    }), Dt({
      target: "Object",
      stat: !0,
      forced: !Lt,
      sham: !c
    }, {
      create: function create(t, e) {
        return void 0 === e ? ye(t) : Ze(ye(t), e);
      },
      defineProperty: Ke,
      defineProperties: Ze,
      getOwnPropertyDescriptor: ei
    }), Dt({
      target: "Object",
      stat: !0,
      forced: !Lt
    }, {
      getOwnPropertyNames: ii,
      getOwnPropertySymbols: ni
    }), Dt({
      target: "Object",
      stat: !0,
      forced: l(function () {
        xt.f(1);
      })
    }, {
      getOwnPropertySymbols: function getOwnPropertySymbols(t) {
        return xt.f(he(t));
      }
    }), Le && Dt({
      target: "JSON",
      stat: !0,
      forced: !Lt || l(function () {
        var t = _Ne();

        return "[null]" != Re([t]) || "{}" != Re({
          a: t
        }) || "{}" != Re(Object(t));
      })
    }, {
      stringify: function stringify(t) {
        for (var e, i, n = [t], r = 1; arguments.length > r;) {
          n.push(arguments[r++]);
        }

        if (i = e = n[1], (x(e) || void 0 !== t) && !Je(t)) return It(e) || (e = function e(t, _e2) {
          if ("function" == typeof i && (_e2 = i.call(this, t, _e2)), !Je(_e2)) return _e2;
        }), n[1] = e, Re.apply(Le, n);
      }
    }), _Ne.prototype[je] || N(_Ne.prototype, je, _Ne.prototype.valueOf), we(_Ne, "Symbol"), H[Te] = !0;
    var ri = I.f,
        si = u.Symbol;

    if (c && "function" == typeof si && (!("description" in si.prototype) || void 0 !== si().description)) {
      var ai = {},
          oi = function oi() {
        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
            e = this instanceof oi ? new si(t) : void 0 === t ? si() : si(t);
        return "" === t && (ai[e] = !0), e;
      };

      Pt(oi, si);
      var hi = oi.prototype = si.prototype;
      hi.constructor = oi;
      var ui = hi.toString,
          li = "Symbol(test)" == String(si("test")),
          ci = /^Symbol\((.*)\)[^)]+$/;
      ri(hi, "description", {
        configurable: !0,
        get: function get() {
          var t = x(this) ? this.valueOf() : this,
              e = ui.call(t);
          if (A(ai, t)) return "";
          var i = li ? e.slice(7, -1) : e.replace(ci, "$1");
          return "" === i ? void 0 : i;
        }
      }), Dt({
        global: !0,
        forced: !0
      }, {
        Symbol: oi
      });
    }

    ve("iterator");
    var fi = Ft("unscopables"),
        di = Array.prototype;
    null == di[fi] && N(di, fi, ye(null));

    var pi,
        yi,
        gi,
        _i = function _i(t) {
      di[fi][t] = !0;
    },
        vi = {},
        mi = !l(function () {
      function t() {}

      return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
    }),
        bi = Y("IE_PROTO"),
        wi = Object.prototype,
        xi = mi ? Object.getPrototypeOf : function (t) {
      return t = he(t), A(t, bi) ? t[bi] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? wi : null;
    },
        ki = Ft("iterator"),
        Pi = !1;

    [].keys && ("next" in (gi = [].keys()) ? (yi = xi(xi(gi))) !== Object.prototype && (pi = yi) : Pi = !0), null == pi && (pi = {}), A(pi, ki) || N(pi, ki, function () {
      return this;
    });

    var Ai = {
      IteratorPrototype: pi,
      BUGGY_SAFARI_ITERATORS: Pi
    },
        Mi = Ai.IteratorPrototype,
        Oi = function Oi() {
      return this;
    },
        Si = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var t,
          e = !1,
          i = {};

      try {
        (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []), e = i instanceof Array;
      } catch (t) {}

      return function (i, n) {
        return E(i), function (t) {
          if (!x(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
        }(n), e ? t.call(i, n) : i.__proto__ = n, i;
      };
    }() : void 0),
        Ci = Ai.IteratorPrototype,
        Ti = Ai.BUGGY_SAFARI_ITERATORS,
        ji = Ft("iterator"),
        Ei = function Ei() {
      return this;
    },
        Di = function Di(t, e, i, n, r, s, a) {
      !function (t, e, i) {
        var n = e + " Iterator";
        t.prototype = ye(Mi, {
          next: y(1, i)
        }), we(t, n, !1), vi[n] = Oi;
      }(i, e, n);

      var o,
          h,
          u,
          l = function l(t) {
        if (t === r && g) return g;
        if (!Ti && t in d) return d[t];

        switch (t) {
          case "keys":
          case "values":
          case "entries":
            return function () {
              return new i(this, t);
            };
        }

        return function () {
          return new i(this);
        };
      },
          c = e + " Iterator",
          f = !1,
          d = t.prototype,
          p = d[ji] || d["@@iterator"] || r && d[r],
          g = !Ti && p || l(r),
          _ = "Array" == e && d.entries || p;

      if (_ && (o = xi(_.call(new t())), Ci !== Object.prototype && o.next && (xi(o) !== Ci && (Si ? Si(o, Ci) : "function" != typeof o[ji] && N(o, ji, Ei)), we(o, c, !0))), "values" == r && p && "values" !== p.name && (f = !0, g = function g() {
        return p.call(this);
      }), d[ji] !== g && N(d, ji, g), vi[e] = g, r) if (h = {
        values: l("values"),
        keys: s ? g : l("keys"),
        entries: l("entries")
      }, a) for (u in h) {
        (Ti || f || !(u in d)) && nt(d, u, h[u]);
      } else Dt({
        target: e,
        proto: !0,
        forced: Ti || f
      }, h);
      return h;
    },
        Ii = it.set,
        Ni = it.getterFor("Array Iterator"),
        Li = Di(Array, "Array", function (t, e) {
      Ii(this, {
        type: "Array Iterator",
        target: w(t),
        index: 0,
        kind: e
      });
    }, function () {
      var t = Ni(this),
          e = t.target,
          i = t.kind,
          n = t.index++;
      return !e || n >= e.length ? (t.target = void 0, {
        value: void 0,
        done: !0
      }) : "keys" == i ? {
        value: n,
        done: !1
      } : "values" == i ? {
        value: e[n],
        done: !1
      } : {
        value: [n, e[n]],
        done: !1
      };
    }, "values");

    vi.Arguments = vi.Array, _i("keys"), _i("values"), _i("entries");
    var Ri = Object.assign,
        Bi = !Ri || l(function () {
      var t = {},
          e = {},
          i = Symbol();
      return t[i] = 7, "abcdefghijklmnopqrst".split("").forEach(function (t) {
        e[t] = t;
      }), 7 != Ri({}, t)[i] || "abcdefghijklmnopqrst" != ue(Ri({}, e)).join("");
    }) ? function (t, e) {
      for (var i = he(t), n = arguments.length, r = 1, s = xt.f, a = p.f; n > r;) {
        for (var o, h = m(arguments[r++]), u = s ? ue(h).concat(s(h)) : ue(h), l = u.length, f = 0; l > f;) {
          o = u[f++], c && !a.call(h, o) || (i[o] = h[o]);
        }
      }

      return i;
    } : Ri;
    Dt({
      target: "Object",
      stat: !0,
      forced: Object.assign !== Bi
    }, {
      assign: Bi
    });

    var Fi = Ft("toStringTag"),
        zi = "Arguments" == _(function () {
      return arguments;
    }()),
        qi = function qi(t) {
      var e, i, n;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = function (t, e) {
        try {
          return t[e];
        } catch (t) {}
      }(e = Object(t), Fi)) ? i : zi ? _(e) : "Object" == (n = _(e)) && "function" == typeof e.callee ? "Arguments" : n;
    },
        $i = {};

    $i[Ft("toStringTag")] = "z";
    var Gi = "[object z]" !== String($i) ? function () {
      return "[object " + qi(this) + "]";
    } : $i.toString,
        Xi = Object.prototype;
    Gi !== Xi.toString && nt(Xi, "toString", Gi, {
      unsafe: !0
    });

    var Vi = !l(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
        Yi = r(function (t) {
      var e = I.f,
          i = X("meta"),
          n = 0,
          r = Object.isExtensible || function () {
        return !0;
      },
          s = function s(t) {
        e(t, i, {
          value: {
            objectID: "O" + ++n,
            weakData: {}
          }
        });
      },
          a = t.exports = {
        REQUIRED: !1,
        fastKey: function fastKey(t, e) {
          if (!x(t)) return "symbol" == _typeof(t) ? t : ("string" == typeof t ? "S" : "P") + t;

          if (!A(t, i)) {
            if (!r(t)) return "F";
            if (!e) return "E";
            s(t);
          }

          return t[i].objectID;
        },
        getWeakData: function getWeakData(t, e) {
          if (!A(t, i)) {
            if (!r(t)) return !0;
            if (!e) return !1;
            s(t);
          }

          return t[i].weakData;
        },
        onFreeze: function onFreeze(t) {
          return Vi && a.REQUIRED && r(t) && !A(t, i) && s(t), t;
        }
      };

      H[i] = !0;
    }),
        Hi = Ft("iterator"),
        Ui = Array.prototype,
        Wi = Ft("iterator"),
        Qi = function Qi(t, e, i, n) {
      try {
        return n ? e(E(i)[0], i[1]) : e(i);
      } catch (e) {
        var r = t["return"];
        throw void 0 !== r && E(r.call(t)), e;
      }
    },
        Ji = r(function (t) {
      var e = function e(t, _e3) {
        this.stopped = t, this.result = _e3;
      };

      (t.exports = function (t, i, n, r, s) {
        var a,
            o,
            h,
            u,
            l,
            c,
            f,
            d,
            p = ke(i, n, r ? 2 : 1);
        if (s) a = t;else {
          if ("function" != typeof (o = function (t) {
            if (null != t) return t[Wi] || t["@@iterator"] || vi[qi(t)];
          }(t))) throw TypeError("Target is not iterable");

          if (void 0 !== (d = o) && (vi.Array === d || Ui[Hi] === d)) {
            for (h = 0, u = ct(t.length); u > h; h++) {
              if ((l = r ? p(E(f = t[h])[0], f[1]) : p(t[h])) && l instanceof e) return l;
            }

            return new e(!1);
          }

          a = o.call(t);
        }

        for (c = a.next; !(f = c.call(a)).done;) {
          if ("object" == _typeof(l = Qi(a, p, f.value, r)) && l && l instanceof e) return l;
        }

        return new e(!1);
      }).stop = function (t) {
        return new e(!0, t);
      };
    }),
        Ki = function Ki(t, e, i) {
      if (!(t instanceof e)) throw TypeError("Incorrect " + (i ? i + " " : "") + "invocation");
      return t;
    },
        Zi = Ft("iterator"),
        tn = !1;

    try {
      var en = 0,
          nn = {
        next: function next() {
          return {
            done: !!en++
          };
        },
        "return": function _return() {
          tn = !0;
        }
      };
      nn[Zi] = function () {
        return this;
      }, Array.from(nn, function () {
        throw 2;
      });
    } catch (t) {}

    var rn = function rn(t, e, i) {
      var n, r;
      return Si && "function" == typeof (n = e.constructor) && n !== i && x(r = n.prototype) && r !== i.prototype && Si(t, r), t;
    },
        sn = function sn(t, e, i) {
      for (var n in e) {
        nt(t, n, e[n], i);
      }

      return t;
    },
        an = Ft("species"),
        on = I.f,
        hn = Yi.fastKey,
        un = it.set,
        ln = it.getterFor,
        cn = (function (t, e, i, n, r) {
      var s = u[t],
          a = s && s.prototype,
          o = s,
          h = n ? "set" : "add",
          c = {},
          f = function f(t) {
        var e = a[t];
        nt(a, t, "add" == t ? function (t) {
          return e.call(this, 0 === t ? 0 : t), this;
        } : "delete" == t ? function (t) {
          return !(r && !x(t)) && e.call(this, 0 === t ? 0 : t);
        } : "get" == t ? function (t) {
          return r && !x(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
        } : "has" == t ? function (t) {
          return !(r && !x(t)) && e.call(this, 0 === t ? 0 : t);
        } : function (t, i) {
          return e.call(this, 0 === t ? 0 : t, i), this;
        });
      };

      if (jt(t, "function" != typeof s || !(r || a.forEach && !l(function () {
        new s().entries().next();
      })))) o = i.getConstructor(e, t, n, h), Yi.REQUIRED = !0;else if (jt(t, !0)) {
        var d = new o(),
            p = d[h](r ? {} : -0, 1) != d,
            y = l(function () {
          d.has(1);
        }),
            g = function (t, e) {
          if (!e && !tn) return !1;
          var i = !1;

          try {
            var n = {};
            n[Zi] = function () {
              return {
                next: function next() {
                  return {
                    done: i = !0
                  };
                }
              };
            }, t(n);
          } catch (t) {}

          return i;
        }(function (t) {
          new s(t);
        }),
            _ = !r && l(function () {
          for (var t = new s(), e = 5; e--;) {
            t[h](e, e);
          }

          return !t.has(-0);
        });

        g || ((o = e(function (e, i) {
          Ki(e, o, t);
          var r = rn(new s(), e, o);
          return null != i && Ji(i, r[h], r, n), r;
        })).prototype = a, a.constructor = o), (y || _) && (f("delete"), f("has"), n && f("get")), (_ || p) && f(h), r && a.clear && delete a.clear;
      }
      c[t] = o, Dt({
        global: !0,
        forced: o != s
      }, c), we(o, t), r || i.setStrong(o, t, n);
    }("Set", function (t) {
      return function () {
        return t(this, arguments.length ? arguments[0] : void 0);
      };
    }, {
      getConstructor: function getConstructor(t, e, i, n) {
        var r = t(function (t, s) {
          Ki(t, r, e), un(t, {
            type: e,
            index: ye(null),
            first: void 0,
            last: void 0,
            size: 0
          }), c || (t.size = 0), null != s && Ji(s, t[n], t, i);
        }),
            s = ln(e),
            a = function a(t, e, i) {
          var n,
              r,
              a = s(t),
              h = o(t, e);
          return h ? h.value = i : (a.last = h = {
            index: r = hn(e, !0),
            key: e,
            value: i,
            previous: n = a.last,
            next: void 0,
            removed: !1
          }, a.first || (a.first = h), n && (n.next = h), c ? a.size++ : t.size++, "F" !== r && (a.index[r] = h)), t;
        },
            o = function o(t, e) {
          var i,
              n = s(t),
              r = hn(e);
          if ("F" !== r) return n.index[r];

          for (i = n.first; i; i = i.next) {
            if (i.key == e) return i;
          }
        };

        return sn(r.prototype, {
          clear: function clear() {
            for (var t = s(this), e = t.index, i = t.first; i;) {
              i.removed = !0, i.previous && (i.previous = i.previous.next = void 0), delete e[i.index], i = i.next;
            }

            t.first = t.last = void 0, c ? t.size = 0 : this.size = 0;
          },
          "delete": function _delete(t) {
            var e = s(this),
                i = o(this, t);

            if (i) {
              var n = i.next,
                  r = i.previous;
              delete e.index[i.index], i.removed = !0, r && (r.next = n), n && (n.previous = r), e.first == i && (e.first = n), e.last == i && (e.last = r), c ? e.size-- : this.size--;
            }

            return !!i;
          },
          forEach: function forEach(t) {
            for (var e, i = s(this), n = ke(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.next : i.first;) {
              for (n(e.value, e.key, this); e && e.removed;) {
                e = e.previous;
              }
            }
          },
          has: function has(t) {
            return !!o(this, t);
          }
        }), sn(r.prototype, i ? {
          get: function get(t) {
            var e = o(this, t);
            return e && e.value;
          },
          set: function set(t, e) {
            return a(this, 0 === t ? 0 : t, e);
          }
        } : {
          add: function add(t) {
            return a(this, t = 0 === t ? 0 : t, t);
          }
        }), c && on(r.prototype, "size", {
          get: function get() {
            return s(this).size;
          }
        }), r;
      },
      setStrong: function setStrong(t, e, i) {
        var n = e + " Iterator",
            r = ln(e),
            s = ln(n);
        Di(t, e, function (t, e) {
          un(this, {
            type: n,
            target: t,
            state: r(t),
            kind: e,
            last: void 0
          });
        }, function () {
          for (var t = s(this), e = t.kind, i = t.last; i && i.removed;) {
            i = i.previous;
          }

          return t.target && (t.last = i = i ? i.next : t.state.first) ? "keys" == e ? {
            value: i.key,
            done: !1
          } : "values" == e ? {
            value: i.value,
            done: !1
          } : {
            value: [i.key, i.value],
            done: !1
          } : (t.target = void 0, {
            value: void 0,
            done: !0
          });
        }, i ? "entries" : "values", !i, !0), function (t) {
          var e = at(t),
              i = I.f;
          c && e && !e[an] && i(e, an, {
            configurable: !0,
            get: function get() {
              return this;
            }
          });
        }(e);
      }
    }), function (t) {
      return function (e, i) {
        var n,
            r,
            s = String(b(e)),
            a = ut(i),
            o = s.length;
        return a < 0 || a >= o ? t ? "" : void 0 : (n = s.charCodeAt(a)) < 55296 || n > 56319 || a + 1 === o || (r = s.charCodeAt(a + 1)) < 56320 || r > 57343 ? t ? s.charAt(a) : n : t ? s.slice(a, a + 2) : r - 56320 + (n - 55296 << 10) + 65536;
      };
    }),
        fn = {
      codeAt: cn(!1),
      charAt: cn(!0)
    },
        dn = fn.charAt,
        pn = it.set,
        yn = it.getterFor("String Iterator");

    Di(String, "String", function (t) {
      pn(this, {
        type: "String Iterator",
        string: String(t),
        index: 0
      });
    }, function () {
      var t,
          e = yn(this),
          i = e.string,
          n = e.index;
      return n >= i.length ? {
        value: void 0,
        done: !0
      } : (t = dn(i, n), e.index += t.length, {
        value: t,
        done: !1
      });
    });

    var gn = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    },
        _n = Ft("iterator"),
        vn = Ft("toStringTag"),
        mn = Li.values;

    for (var bn in gn) {
      var wn = u[bn],
          xn = wn && wn.prototype;

      if (xn) {
        if (xn[_n] !== mn) try {
          N(xn, _n, mn);
        } catch (t) {
          xn[_n] = mn;
        }
        if (xn[vn] || N(xn, vn, bn), gn[bn]) for (var kn in Li) {
          if (xn[kn] !== Li[kn]) try {
            N(xn, kn, Li[kn]);
          } catch (t) {
            xn[kn] = Li[kn];
          }
        }
      }
    }

    function Pn(t) {
      return function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, i = new Array(t.length); e < t.length; e++) {
            i[e] = t[e];
          }

          return i;
        }
      }(t) || function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }();
    }

    var An = {},
        Mn = [];

    function On(t, e) {
      if (Array.isArray(t)) {
        var i = !0,
            n = !1,
            r = void 0;

        try {
          for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done); i = !0) {
            On(s.value, e);
          }
        } catch (t) {
          n = !0, r = t;
        } finally {
          try {
            i || null == a["return"] || a["return"]();
          } finally {
            if (n) throw r;
          }
        }
      } else if ("object" !== oe(t)) Cn(Object.getOwnPropertyNames(e)), An[t] = Object.assign(An[t] || {}, e);else for (var o in t) {
        On(o, t[o]);
      }
    }

    function Sn(t) {
      return An[t] || {};
    }

    function Cn(t) {
      Mn.push.apply(Mn, Pn(t));
    }

    var Tn = gt.includes;
    Dt({
      target: "Array",
      proto: !0
    }, {
      includes: function includes(t) {
        return Tn(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), _i("includes");

    var jn,
        En,
        Dn = function Dn() {
      var t = E(this),
          e = "";
      return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
    },
        In = RegExp.prototype.exec,
        Nn = String.prototype.replace,
        Ln = In,
        Rn = (jn = /a/, En = /b*/g, In.call(jn, "a"), In.call(En, "a"), 0 !== jn.lastIndex || 0 !== En.lastIndex),
        Bn = void 0 !== /()??/.exec("")[1];

    (Rn || Bn) && (Ln = function Ln(t) {
      var e,
          i,
          n,
          r,
          s = this;
      return Bn && (i = new RegExp("^" + s.source + "$(?!\\s)", Dn.call(s))), Rn && (e = s.lastIndex), n = In.call(s, t), Rn && n && (s.lastIndex = s.global ? n.index + n[0].length : e), Bn && n && n.length > 1 && Nn.call(n[0], i, function () {
        for (r = 1; r < arguments.length - 2; r++) {
          void 0 === arguments[r] && (n[r] = void 0);
        }
      }), n;
    });
    var Fn = Ln;
    Dt({
      target: "RegExp",
      proto: !0,
      forced: /./.exec !== Fn
    }, {
      exec: Fn
    });

    var zn = Ft("match"),
        qn = function qn(t) {
      var e;
      return x(t) && (void 0 !== (e = t[zn]) ? !!e : "RegExp" == _(t));
    },
        $n = function $n(t) {
      if (qn(t)) throw TypeError("The method doesn't accept regular expressions");
      return t;
    },
        Gn = Ft("match");

    Dt({
      target: "String",
      proto: !0,
      forced: !function (t) {
        var e = /./;

        try {
          "/./"[t](e);
        } catch (i) {
          try {
            return e[Gn] = !1, "/./"[t](e);
          } catch (t) {}
        }

        return !1;
      }("includes")
    }, {
      includes: function includes(t) {
        return !!~String(b(this)).indexOf($n(t), arguments.length > 1 ? arguments[1] : void 0);
      }
    });

    var Xn = Ft("species"),
        Vn = !l(function () {
      var t = /./;
      return t.exec = function () {
        var t = [];
        return t.groups = {
          a: "7"
        }, t;
      }, "7" !== "".replace(t, "$<a>");
    }),
        Yn = !l(function () {
      var t = /(?:)/,
          e = t.exec;

      t.exec = function () {
        return e.apply(this, arguments);
      };

      var i = "ab".split(t);
      return 2 !== i.length || "a" !== i[0] || "b" !== i[1];
    }),
        Hn = function Hn(t, e, i, n) {
      var r = Ft(t),
          s = !l(function () {
        var e = {};
        return e[r] = function () {
          return 7;
        }, 7 != ""[t](e);
      }),
          a = s && !l(function () {
        var e = !1,
            i = /a/;
        return "split" === t && ((i = {}).constructor = {}, i.constructor[Xn] = function () {
          return i;
        }, i.flags = "", i[r] = /./[r]), i.exec = function () {
          return e = !0, null;
        }, i[r](""), !e;
      });

      if (!s || !a || "replace" === t && !Vn || "split" === t && !Yn) {
        var o = /./[r],
            h = i(r, ""[t], function (t, e, i, n, r) {
          return e.exec === Fn ? s && !r ? {
            done: !0,
            value: o.call(e, i, n)
          } : {
            done: !0,
            value: t.call(i, e, n)
          } : {
            done: !1
          };
        }),
            u = h[0],
            c = h[1];
        nt(String.prototype, t, u), nt(RegExp.prototype, r, 2 == e ? function (t, e) {
          return c.call(t, this, e);
        } : function (t) {
          return c.call(t, this);
        }), n && N(RegExp.prototype[r], "sham", !0);
      }
    },
        Un = fn.charAt,
        Wn = function Wn(t, e, i) {
      return e + (i ? Un(t, e).length : 1);
    },
        Qn = function Qn(t, e) {
      var i = t.exec;

      if ("function" == typeof i) {
        var n = i.call(t, e);
        if ("object" != _typeof(n)) throw TypeError("RegExp exec method returned something other than an Object or null");
        return n;
      }

      if ("RegExp" !== _(t)) throw TypeError("RegExp#exec called on incompatible receiver");
      return Fn.call(t, e);
    },
        Jn = Math.max,
        Kn = Math.min,
        Zn = Math.floor,
        tr = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        er = /\$([$&'`]|\d\d?)/g;

    Hn("replace", 2, function (t, e, i) {
      return [function (i, n) {
        var r = b(this),
            s = null == i ? void 0 : i[t];
        return void 0 !== s ? s.call(i, r, n) : e.call(String(r), i, n);
      }, function (t, r) {
        var s = i(e, t, this, r);
        if (s.done) return s.value;
        var a = E(t),
            o = String(this),
            h = "function" == typeof r;
        h || (r = String(r));
        var u = a.global;

        if (u) {
          var l = a.unicode;
          a.lastIndex = 0;
        }

        for (var c = [];;) {
          var f = Qn(a, o);
          if (null === f) break;
          if (c.push(f), !u) break;
          "" === String(f[0]) && (a.lastIndex = Wn(o, ct(a.lastIndex), l));
        }

        for (var d, p = "", y = 0, g = 0; g < c.length; g++) {
          f = c[g];

          for (var _ = String(f[0]), v = Jn(Kn(ut(f.index), o.length), 0), m = [], b = 1; b < f.length; b++) {
            m.push(void 0 === (d = f[b]) ? d : String(d));
          }

          var w = f.groups;

          if (h) {
            var x = [_].concat(m, v, o);
            void 0 !== w && x.push(w);
            var k = String(r.apply(void 0, x));
          } else k = n(_, o, v, m, w, r);

          v >= y && (p += o.slice(y, v) + k, y = v + _.length);
        }

        return p + o.slice(y);
      }];

      function n(t, i, n, r, s, a) {
        var o = n + t.length,
            h = r.length,
            u = er;
        return void 0 !== s && (s = he(s), u = tr), e.call(a, u, function (e, a) {
          var u;

          switch (a.charAt(0)) {
            case "$":
              return "$";

            case "&":
              return t;

            case "`":
              return i.slice(0, n);

            case "'":
              return i.slice(o);

            case "<":
              u = s[a.slice(1, -1)];
              break;

            default:
              var l = +a;
              if (0 === l) return e;

              if (l > h) {
                var c = Zn(l / 10);
                return 0 === c ? e : c <= h ? void 0 === r[c - 1] ? a.charAt(1) : r[c - 1] + a.charAt(1) : e;
              }

              u = r[l - 1];
          }

          return void 0 === u ? "" : u;
        });
      }
    });

    var ir = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF",
        nr = "[" + ir + "]",
        rr = RegExp("^" + nr + nr + "*"),
        sr = RegExp(nr + nr + "*$"),
        ar = function ar(t) {
      return function (e) {
        var i = String(b(e));
        return 1 & t && (i = i.replace(rr, "")), 2 & t && (i = i.replace(sr, "")), i;
      };
    },
        or = {
      start: ar(1),
      end: ar(2),
      trim: ar(3)
    },
        hr = or.trim;

    function ur(t, e) {
      var i,
          n = t.length,
          r = [];

      for (i = 0; i < n; i++) {
        r.push(e(t[i]));
      }

      return r;
    }

    function lr(t) {
      return t % 360 * Math.PI / 180;
    }

    function cr(t) {
      return t.toLowerCase().replace(/-(.)/g, function (t, e) {
        return e.toUpperCase();
      });
    }

    function fr(t) {
      return t.replace(/([A-Z])/g, function (t, e) {
        return "-" + e.toLowerCase();
      });
    }

    function dr(t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    }

    function pr(t, e, i, n) {
      return null != e && null != i || (n = n || t.bbox(), null == e ? e = n.width / n.height * i : null == i && (i = n.height / n.width * e)), {
        width: e,
        height: i
      };
    }

    function yr(t, e) {
      var i,
          n,
          r = t.origin;

      if ("string" == typeof r || null == r) {
        var s = (r || "center").toLowerCase().trim(),
            a = e.bbox(),
            o = a.height,
            h = a.width,
            u = a.x,
            l = a.y,
            c = s.includes("left") ? u : s.includes("right") ? u + h : u + h / 2,
            f = s.includes("top") ? l : s.includes("bottom") ? l + o : l + o / 2;
        i = null != t.ox ? t.ox : c, n = null != t.oy ? t.oy : f;
      } else i = r[0], n = r[1];

      return [i, n];
    }

    Dt({
      target: "String",
      proto: !0,
      forced: function (t) {
        return l(function () {
          return !!ir[t]() || "​᠎" != "​᠎"[t]() || ir[t].name !== t;
        });
      }("trim")
    }, {
      trim: function trim() {
        return hr(this);
      }
    });
    var gr = "http://www.w3.org/2000/svg",
        _r = "http://www.w3.org/2000/xmlns/",
        vr = "http://www.w3.org/1999/xlink",
        mr = "http://svgjs.com/svgjs",
        br = {
      window: "undefined" == typeof window ? null : window,
      document: "undefined" == typeof document ? null : document
    };

    function wr(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    var xr = function t() {
      wr(this, t);
    },
        kr = {},
        Pr = "___SYMBOL___ROOT___";

    function Ar(t) {
      return br.document.createElementNS(gr, t);
    }

    function Mr(t) {
      if (t instanceof xr) return t;
      if ("object" === oe(t)) return Cr(t);
      if (null == t) return new kr[Pr]();
      if ("string" == typeof t && "<" !== t.charAt(0)) return Cr(br.document.querySelector(t));
      var e = Ar("svg");
      return e.innerHTML = t, t = Cr(e.firstChild);
    }

    function Or(t, e) {
      return e instanceof br.window.Node ? e : Ar(t);
    }

    function Sr(t) {
      if (!t) return null;
      if (t.instance instanceof xr) return t.instance;
      var e = dr(t.nodeName || "Dom");
      return "LinearGradient" === e || "RadialGradient" === e ? e = "Gradient" : kr[e] || (e = "Dom"), new kr[e](t);
    }

    var Cr = Sr;

    function Tr(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.name,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return kr[e] = t, i && (kr[Pr] = t), Cn(Object.getOwnPropertyNames(t.prototype)), t;
    }

    var jr = 1e3;

    function Er(t) {
      return "Svgjs" + dr(t) + jr++;
    }

    function Dr(t, e, i) {
      var n, r;

      for (r = (t = Array.isArray(t) ? t : [t]).length - 1; r >= 0; r--) {
        for (n in e) {
          var s = e[n];
          i && (s = Ir(e[n])), t[r].prototype[n] = s;
        }
      }
    }

    function Ir(t) {
      return function () {
        for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++) {
          i[n] = arguments[n];
        }

        var r = i[i.length - 1];
        return !r || r.constructor !== Object || r instanceof Array ? t.apply(this, i) : t.apply(this, i.slice(0, -1)).attr(r);
      };
    }

    On("Dom", {
      siblings: function siblings() {
        return this.parent().children();
      },
      position: function position() {
        return this.parent().index(this);
      },
      next: function next() {
        return this.siblings()[this.position() + 1];
      },
      prev: function prev() {
        return this.siblings()[this.position() - 1];
      },
      forward: function forward() {
        var t = this.position() + 1,
            e = this.parent();
        return e.removeElement(this).add(this, t), "function" == typeof e.isRoot && e.isRoot() && e.node.appendChild(e.defs().node), this;
      },
      backward: function backward() {
        var t = this.position();
        return t > 0 && this.parent().removeElement(this).add(this, t - 1), this;
      },
      front: function front() {
        var t = this.parent();
        return t.node.appendChild(this.node), "function" == typeof t.isRoot && t.isRoot() && t.node.appendChild(t.defs().node), this;
      },
      back: function back() {
        return this.position() > 0 && this.parent().removeElement(this).add(this, 0), this;
      },
      before: function before(t) {
        (t = Mr(t)).remove();
        var e = this.position();
        return this.parent().add(t, e), this;
      },
      after: function after(t) {
        (t = Mr(t)).remove();
        var e = this.position();
        return this.parent().add(t, e + 1), this;
      },
      insertBefore: function insertBefore(t) {
        return (t = Mr(t)).before(this), this;
      },
      insertAfter: function insertAfter(t) {
        return (t = Mr(t)).after(this), this;
      }
    });
    var Nr = Se.filter;
    Dt({
      target: "Array",
      proto: !0,
      forced: !Yt("filter")
    }, {
      filter: function filter(t) {
        return Nr(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });

    var Lr = function Lr(t, e) {
      var i = [][t];
      return !i || !l(function () {
        i.call(null, e || function () {
          throw 1;
        }, 1);
      });
    },
        Rr = gt.indexOf,
        Br = [].indexOf,
        Fr = !!Br && 1 / [1].indexOf(1, -0) < 0,
        zr = Lr("indexOf");

    Dt({
      target: "Array",
      proto: !0,
      forced: Fr || zr
    }, {
      indexOf: function indexOf(t) {
        return Fr ? Br.apply(this, arguments) || 0 : Rr(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    var qr = [].join,
        $r = m != Object,
        Gr = Lr("join", ",");
    Dt({
      target: "Array",
      proto: !0,
      forced: $r || Gr
    }, {
      join: function join(t) {
        return qr.call(w(this), void 0 === t ? "," : t);
      }
    });
    var Xr = Ft("species"),
        Vr = [].push,
        Yr = Math.min,
        Hr = !l(function () {
      return !RegExp(4294967295, "y");
    });
    Hn("split", 2, function (t, e, i) {
      var n;
      return n = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, i) {
        var n = String(b(this)),
            r = void 0 === i ? 4294967295 : i >>> 0;
        if (0 === r) return [];
        if (void 0 === t) return [n];
        if (!qn(t)) return e.call(n, t, r);

        for (var s, a, o, h = [], u = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), l = 0, c = new RegExp(t.source, u + "g"); (s = Fn.call(c, n)) && !((a = c.lastIndex) > l && (h.push(n.slice(l, s.index)), s.length > 1 && s.index < n.length && Vr.apply(h, s.slice(1)), o = s[0].length, l = a, h.length >= r));) {
          c.lastIndex === s.index && c.lastIndex++;
        }

        return l === n.length ? !o && c.test("") || h.push("") : h.push(n.slice(l)), h.length > r ? h.slice(0, r) : h;
      } : "0".split(void 0, 0).length ? function (t, i) {
        return void 0 === t && 0 === i ? [] : e.call(this, t, i);
      } : e, [function (e, i) {
        var r = b(this),
            s = null == e ? void 0 : e[t];
        return void 0 !== s ? s.call(e, r, i) : n.call(String(r), e, i);
      }, function (t, r) {
        var s = i(n, t, this, r, n !== e);
        if (s.done) return s.value;

        var a = E(t),
            o = String(this),
            h = function (t, e) {
          var i,
              n = E(t).constructor;
          return void 0 === n || null == (i = E(n)[Xr]) ? e : xe(i);
        }(a, RegExp),
            u = a.unicode,
            l = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (Hr ? "y" : "g"),
            c = new h(Hr ? a : "^(?:" + a.source + ")", l),
            f = void 0 === r ? 4294967295 : r >>> 0;

        if (0 === f) return [];
        if (0 === o.length) return null === Qn(c, o) ? [o] : [];

        for (var d = 0, p = 0, y = []; p < o.length;) {
          c.lastIndex = Hr ? p : 0;

          var g,
              _ = Qn(c, Hr ? o : o.slice(p));

          if (null === _ || (g = Yr(ct(c.lastIndex + (Hr ? 0 : p)), o.length)) === d) p = Wn(o, p, u);else {
            if (y.push(o.slice(d, p)), y.length === f) return y;

            for (var v = 1; v <= _.length - 1; v++) {
              if (y.push(_[v]), y.length === f) return y;
            }

            p = d = g;
          }
        }

        return y.push(o.slice(d)), y;
      }];
    }, !Hr);
    var Ur = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
        Wr = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
        Qr = /rgb\((\d+),(\d+),(\d+)\)/,
        Jr = /(#[a-z0-9\-_]+)/i,
        Kr = /\)\s*,?\s*/,
        Zr = /\s/g,
        ts = /^#[a-f0-9]{3,6}$/i,
        es = /^rgb\(/,
        is = /^(\s+)?$/,
        ns = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        rs = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
        ss = /[\s,]+/,
        as = /([^e])-/gi,
        os = /[MLHVCSQTAZ]/gi,
        hs = /[MLHVCSQTAZ]/i,
        us = /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
        ls = /\./g;
    On("Dom", {
      classes: function classes() {
        var t = this.attr("class");
        return null == t ? [] : t.trim().split(ss);
      },
      hasClass: function hasClass(t) {
        return -1 !== this.classes().indexOf(t);
      },
      addClass: function addClass(t) {
        if (!this.hasClass(t)) {
          var e = this.classes();
          e.push(t), this.attr("class", e.join(" "));
        }

        return this;
      },
      removeClass: function removeClass(t) {
        return this.hasClass(t) && this.attr("class", this.classes().filter(function (e) {
          return e !== t;
        }).join(" ")), this;
      },
      toggleClass: function toggleClass(t) {
        return this.hasClass(t) ? this.removeClass(t) : this.addClass(t);
      }
    });
    var cs = Se.forEach,
        fs = Lr("forEach") ? function (t) {
      return cs(this, t, arguments.length > 1 ? arguments[1] : void 0);
    } : [].forEach;

    for (var ds in Dt({
      target: "Array",
      proto: !0,
      forced: [].forEach != fs
    }, {
      forEach: fs
    }), gn) {
      var ps = u[ds],
          ys = ps && ps.prototype;
      if (ys && ys.forEach !== fs) try {
        N(ys, "forEach", fs);
      } catch (t) {
        ys.forEach = fs;
      }
    }

    On("Dom", {
      css: function css(t, e) {
        var i = {};
        if (0 === arguments.length) return this.node.style.cssText.split(/\s*;\s*/).filter(function (t) {
          return !!t.length;
        }).forEach(function (t) {
          var e = t.split(/\s*:\s*/);
          i[e[0]] = e[1];
        }), i;

        if (arguments.length < 2) {
          if (Array.isArray(t)) {
            var n = !0,
                r = !1,
                s = void 0;

            try {
              for (var a, o = t[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                var h = a.value,
                    u = cr(h);
                i[u] = this.node.style[u];
              }
            } catch (t) {
              r = !0, s = t;
            } finally {
              try {
                n || null == o["return"] || o["return"]();
              } finally {
                if (r) throw s;
              }
            }

            return i;
          }

          if ("string" == typeof t) return this.node.style[cr(t)];
          if ("object" === oe(t)) for (var l in t) {
            this.node.style[cr(l)] = null == t[l] || is.test(t[l]) ? "" : t[l];
          }
        }

        return 2 === arguments.length && (this.node.style[cr(t)] = null == e || is.test(e) ? "" : e), this;
      },
      show: function show() {
        return this.css("display", "");
      },
      hide: function hide() {
        return this.css("display", "none");
      },
      visible: function visible() {
        return "none" !== this.css("display");
      }
    }), On("Dom", {
      data: function data(t, e, i) {
        if ("object" === oe(t)) for (e in t) {
          this.data(e, t[e]);
        } else if (arguments.length < 2) try {
          return JSON.parse(this.attr("data-" + t));
        } catch (e) {
          return this.attr("data-" + t);
        } else this.attr("data-" + t, null === e ? null : !0 === i || "string" == typeof e || "number" == typeof e ? e : JSON.stringify(e));
        return this;
      }
    }), On("Dom", {
      remember: function remember(t, e) {
        if ("object" === oe(arguments[0])) for (var i in t) {
          this.remember(i, t[i]);
        } else {
          if (1 === arguments.length) return this.memory()[t];
          this.memory()[t] = e;
        }
        return this;
      },
      forget: function forget() {
        if (0 === arguments.length) this._memory = {};else for (var t = arguments.length - 1; t >= 0; t--) {
          delete this.memory()[arguments[t]];
        }
        return this;
      },
      memory: function memory() {
        return this._memory = this._memory || {};
      }
    });

    var gs = function gs(t) {
      return function (e, i, n, r) {
        xe(i);
        var s = he(e),
            a = m(s),
            o = ct(s.length),
            h = t ? o - 1 : 0,
            u = t ? -1 : 1;
        if (n < 2) for (;;) {
          if (h in a) {
            r = a[h], h += u;
            break;
          }

          if (h += u, t ? h < 0 : o <= h) throw TypeError("Reduce of empty array with no initial value");
        }

        for (; t ? h >= 0 : o > h; h += u) {
          h in a && (r = i(r, a[h], h, s));
        }

        return r;
      };
    },
        _s = {
      left: gs(!1),
      right: gs(!0)
    }.left;

    Dt({
      target: "Array",
      proto: !0,
      forced: Lr("reduce")
    }, {
      reduce: function reduce(t) {
        return _s(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    var vs = 0,
        ms = {};

    function bs(t) {
      var e = t.getEventHolder();
      return e === br.window && (e = ms), e.events || (e.events = {}), e.events;
    }

    function ws(t) {
      return t.getEventTarget();
    }

    function xs(t, e, i, n, r) {
      var s = i.bind(n || t),
          a = Mr(t),
          o = bs(a),
          h = ws(a);
      e = Array.isArray(e) ? e : e.split(ss), i._svgjsListenerId || (i._svgjsListenerId = ++vs), e.forEach(function (t) {
        var e = t.split(".")[0],
            n = t.split(".")[1] || "*";
        o[e] = o[e] || {}, o[e][n] = o[e][n] || {}, o[e][n][i._svgjsListenerId] = s, h.addEventListener(e, s, r || !1);
      });
    }

    function ks(t, e, i, n) {
      var r = Mr(t),
          s = bs(r),
          a = ws(r);
      ("function" != typeof i || (i = i._svgjsListenerId)) && (e = Array.isArray(e) ? e : (e || "").split(ss)).forEach(function (t) {
        var e,
            o,
            h = t && t.split(".")[0],
            u = t && t.split(".")[1];
        if (i) s[h] && s[h][u || "*"] && (a.removeEventListener(h, s[h][u || "*"][i], n || !1), delete s[h][u || "*"][i]);else if (h && u) {
          if (s[h] && s[h][u]) {
            for (o in s[h][u]) {
              ks(a, [h, u].join("."), o);
            }

            delete s[h][u];
          }
        } else if (u) for (t in s) {
          for (e in s[t]) {
            u === e && ks(a, [t, u].join("."));
          }
        } else if (h) {
          if (s[h]) {
            for (e in s[h]) {
              ks(a, [h, e].join("."));
            }

            delete s[h];
          }
        } else {
          for (t in s) {
            ks(a, t);
          }

          !function (t) {
            var e = t.getEventHolder();
            e.events && (e.events = {});
          }(r);
        }
      });
    }

    var Ps = Ft("isConcatSpreadable"),
        As = Xt >= 51 || !l(function () {
      var t = [];
      return t[Ps] = !1, t.concat()[0] !== t;
    }),
        Ms = Yt("concat"),
        Os = function Os(t) {
      if (!x(t)) return !1;
      var e = t[Ps];
      return void 0 !== e ? !!e : It(t);
    };

    Dt({
      target: "Array",
      proto: !0,
      forced: !As || !Ms
    }, {
      concat: function concat(t) {
        var e,
            i,
            n,
            r,
            s,
            a = he(this),
            o = Ae(a, 0),
            h = 0;

        for (e = -1, n = arguments.length; e < n; e++) {
          if (Os(s = -1 === e ? a : arguments[e])) {
            if (h + (r = ct(s.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");

            for (i = 0; i < r; i++, h++) {
              i in s && Nt(o, h, s[i]);
            }
          } else {
            if (h >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
            Nt(o, h++, s);
          }
        }

        return o.length = h, o;
      }
    });
    var Ss = Se.map;
    Dt({
      target: "Array",
      proto: !0,
      forced: !Yt("map")
    }, {
      map: function map(t) {
        return Ss(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    var Cs = Date.prototype,
        Ts = Cs.toString,
        js = Cs.getTime;
    new Date(NaN) + "" != "Invalid Date" && nt(Cs, "toString", function () {
      var t = js.call(this);
      return t == t ? Ts.call(this) : "Invalid Date";
    });
    var Es = or.trim,
        Ds = u.parseInt,
        Is = /^[+-]?0[Xx]/,
        Ns = 8 !== Ds(ir + "08") || 22 !== Ds(ir + "0x16") ? function (t, e) {
      var i = Es(String(t));
      return Ds(i, e >>> 0 || (Is.test(i) ? 16 : 10));
    } : Ds;
    Dt({
      global: !0,
      forced: parseInt != Ns
    }, {
      parseInt: Ns
    });
    var Ls = RegExp.prototype,
        Rs = Ls.toString,
        Bs = l(function () {
      return "/a/b" != Rs.call({
        source: "a",
        flags: "b"
      });
    }),
        Fs = "toString" != Rs.name;

    function zs(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t;
      }(t) || function (t, e) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
          var i = [],
              n = !0,
              r = !1,
              s = void 0;

          try {
            for (var a, o = t[Symbol.iterator](); !(n = (a = o.next()).done) && (i.push(a.value), !e || i.length !== e); n = !0) {
              ;
            }
          } catch (t) {
            r = !0, s = t;
          } finally {
            try {
              n || null == o["return"] || o["return"]();
            } finally {
              if (r) throw s;
            }
          }

          return i;
        }
      }(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }();
    }

    function qs(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }

    function $s(t, e, i) {
      return e && qs(t.prototype, e), i && qs(t, i), t;
    }

    function Gs(t) {
      return 4 === t.length ? ["#", t.substring(1, 2), t.substring(1, 2), t.substring(2, 3), t.substring(2, 3), t.substring(3, 4), t.substring(3, 4)].join("") : t;
    }

    function Xs(t) {
      var e = Math.round(t),
          i = Math.max(0, Math.min(255, e)).toString(16);
      return 1 === i.length ? "0" + i : i;
    }

    function Vs(t, e) {
      for (var i = e.length; i--;) {
        if (null == t[e[i]]) return !1;
      }

      return !0;
    }

    function Ys(t, e) {
      var i = Vs(t, "rgb") ? {
        _a: t.r,
        _b: t.g,
        _c: t.b,
        space: "rgb"
      } : Vs(t, "xyz") ? {
        _a: t.x,
        _b: t.y,
        _c: t.z,
        _d: 0,
        space: "xyz"
      } : Vs(t, "hsl") ? {
        _a: t.h,
        _b: t.s,
        _c: t.l,
        _d: 0,
        space: "hsl"
      } : Vs(t, "lab") ? {
        _a: t.l,
        _b: t.a,
        _c: t.b,
        _d: 0,
        space: "lab"
      } : Vs(t, "lch") ? {
        _a: t.l,
        _b: t.c,
        _c: t.h,
        _d: 0,
        space: "lch"
      } : Vs(t, "cmyk") ? {
        _a: t.c,
        _b: t.m,
        _c: t.y,
        _d: t.k,
        space: "cmyk"
      } : {
        _a: 0,
        _b: 0,
        _c: 0,
        space: "rgb"
      };
      return i.space = e || i.space, i;
    }

    function Hs(t, e, i) {
      return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
    }

    (Bs || Fs) && nt(RegExp.prototype, "toString", function () {
      var t = E(this),
          e = String(t.source),
          i = t.flags;
      return "/" + e + "/" + String(void 0 === i && t instanceof RegExp && !("flags" in Ls) ? Dn.call(t) : i);
    }, {
      unsafe: !0
    });

    var Us = function () {
      function t() {
        wr(this, t), this.init.apply(this, arguments);
      }

      return $s(t, [{
        key: "init",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
              r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "rgb";
          if (t = t || 0, this.space) for (var s in this.space) {
            delete this[this.space[s]];
          }
          if ("number" == typeof t) r = "string" == typeof n ? n : r, n = "string" == typeof n ? 0 : n, Object.assign(this, {
            _a: t,
            _b: e,
            _c: i,
            _d: n,
            space: r
          });else if (t instanceof Array) this.space = e || ("string" == typeof t[3] ? t[3] : t[4]) || "rgb", Object.assign(this, {
            _a: t[0],
            _b: t[1],
            _c: t[2],
            _d: t[3] || 0
          });else if (t instanceof Object) {
            var a = Ys(t, e);
            Object.assign(this, a);
          } else if ("string" == typeof t) if (es.test(t)) {
            var o = t.replace(Zr, ""),
                h = Qr.exec(o).slice(1, 4).map(function (t) {
              return parseInt(t);
            }),
                u = zs(h, 3),
                l = u[0],
                c = u[1],
                f = u[2];
            Object.assign(this, {
              _a: l,
              _b: c,
              _c: f,
              _d: 0,
              space: "rgb"
            });
          } else {
            if (!ts.test(t)) throw Error("Unsupported string format, can't construct Color");

            var d = function d(t) {
              return parseInt(t, 16);
            },
                p = Wr.exec(Gs(t)).map(d),
                y = zs(p, 4),
                g = y[1],
                _ = y[2],
                v = y[3];

            Object.assign(this, {
              _a: g,
              _b: _,
              _c: v,
              _d: 0,
              space: "rgb"
            });
          }
          var m = this._a,
              b = this._b,
              w = this._c,
              x = this._d,
              k = "rgb" === this.space ? {
            r: m,
            g: b,
            b: w
          } : "xyz" === this.space ? {
            x: m,
            y: b,
            z: w
          } : "hsl" === this.space ? {
            h: m,
            s: b,
            l: w
          } : "lab" === this.space ? {
            l: m,
            a: b,
            b: w
          } : "lch" === this.space ? {
            l: m,
            c: b,
            h: w
          } : "cmyk" === this.space ? {
            c: m,
            m: b,
            y: w,
            k: x
          } : {};
          Object.assign(this, k);
        }
      }, {
        key: "rgb",
        value: function value() {
          if ("rgb" === this.space) return this;

          if ("lab" === (C = this.space) || "xyz" === C || "lch" === C) {
            var e = this.x,
                i = this.y,
                n = this.z;

            if ("lab" === this.space || "lch" === this.space) {
              var r = this.l,
                  s = this.a,
                  a = this.b;

              if ("lch" === this.space) {
                var o = this.c,
                    h = this.h,
                    u = Math.PI / 180;
                s = o * Math.cos(u * h), a = o * Math.sin(u * h);
              }

              var l = (r + 16) / 116,
                  c = s / 500 + l,
                  f = l - a / 200,
                  d = 16 / 116,
                  p = .008856;
              e = .95047 * (Math.pow(c, 3) > p ? Math.pow(c, 3) : (c - d) / 7.787), i = 1 * (Math.pow(l, 3) > p ? Math.pow(l, 3) : (l - d) / 7.787), n = 1.08883 * (Math.pow(f, 3) > p ? Math.pow(f, 3) : (f - d) / 7.787);
            }

            var y = 3.2406 * e + -1.5372 * i + -.4986 * n,
                g = -.9689 * e + 1.8758 * i + .0415 * n,
                _ = .0557 * e + -.204 * i + 1.057 * n,
                v = Math.pow,
                m = .0031308;

            return new t(255 * (y > m ? 1.055 * v(y, 1 / 2.4) - .055 : 12.92 * y), 255 * (g > m ? 1.055 * v(g, 1 / 2.4) - .055 : 12.92 * g), 255 * (_ > m ? 1.055 * v(_, 1 / 2.4) - .055 : 12.92 * _));
          }

          if ("hsl" === this.space) {
            var b = this.h,
                w = this.s,
                x = this.l;
            if (b /= 360, x /= 100, 0 === (w /= 100)) return new t(x *= 255, x, x);
            var k = x < .5 ? x * (1 + w) : x + w - x * w,
                P = 2 * x - k;
            return new t(255 * Hs(P, k, b + 1 / 3), 255 * Hs(P, k, b), 255 * Hs(P, k, b - 1 / 3));
          }

          if ("cmyk" === this.space) {
            var A = this.c,
                M = this.m,
                O = this.y,
                S = this.k;
            return new t(255 * (1 - Math.min(1, A * (1 - S) + S)), 255 * (1 - Math.min(1, M * (1 - S) + S)), 255 * (1 - Math.min(1, O * (1 - S) + S)));
          }

          return this;
          var C;
        }
      }, {
        key: "lab",
        value: function value() {
          var e = this.xyz(),
              i = e.x,
              n = e.y;
          return new t(116 * n - 16, 500 * (i - n), 200 * (n - e.z), "lab");
        }
      }, {
        key: "xyz",
        value: function value() {
          var e = this.rgb(),
              i = zs([e._a, e._b, e._c].map(function (t) {
            return t / 255;
          }), 3),
              n = i[0],
              r = i[1],
              s = i[2],
              a = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92,
              o = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92,
              h = s > .04045 ? Math.pow((s + .055) / 1.055, 2.4) : s / 12.92,
              u = (.4124 * a + .3576 * o + .1805 * h) / .95047,
              l = (.2126 * a + .7152 * o + .0722 * h) / 1,
              c = (.0193 * a + .1192 * o + .9505 * h) / 1.08883;
          return new t(u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116, l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, c > .008856 ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116, "xyz");
        }
      }, {
        key: "lch",
        value: function value() {
          var e = this.lab(),
              i = e.l,
              n = e.a,
              r = e.b,
              s = Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2)),
              a = 180 * Math.atan2(r, n) / Math.PI;
          return a < 0 && (a = 360 - (a *= -1)), new t(i, s, a, "lch");
        }
      }, {
        key: "hsl",
        value: function value() {
          var e = this.rgb(),
              i = zs([e._a, e._b, e._c].map(function (t) {
            return t / 255;
          }), 3),
              n = i[0],
              r = i[1],
              s = i[2],
              a = Math.max(n, r, s),
              o = Math.min(n, r, s),
              h = (a + o) / 2,
              u = a === o,
              l = a - o;
          return new t(360 * (u ? 0 : a === n ? ((r - s) / l + (r < s ? 6 : 0)) / 6 : a === r ? ((s - n) / l + 2) / 6 : a === s ? ((n - r) / l + 4) / 6 : 0), 100 * (u ? 0 : h > .5 ? l / (2 - a - o) : l / (a + o)), 100 * h, "hsl");
        }
      }, {
        key: "cmyk",
        value: function value() {
          var e = this.rgb(),
              i = zs([e._a, e._b, e._c].map(function (t) {
            return t / 255;
          }), 3),
              n = i[0],
              r = i[1],
              s = i[2],
              a = Math.min(1 - n, 1 - r, 1 - s);
          return 1 === a ? new t(0, 0, 0, 1, "cmyk") : new t((1 - n - a) / (1 - a), (1 - r - a) / (1 - a), (1 - s - a) / (1 - a), a, "cmyk");
        }
      }, {
        key: "_clamped",
        value: function value() {
          var t = this.rgb(),
              e = t._a,
              i = t._b,
              n = t._c,
              r = Math.max,
              s = Math.min,
              a = Math.round;
          return [e, i, n].map(function (t) {
            return r(0, s(a(t), 255));
          });
        }
      }, {
        key: "toHex",
        value: function value() {
          var t = zs(this._clamped().map(Xs), 3),
              e = t[0],
              i = t[1],
              n = t[2];
          return "#".concat(e).concat(i).concat(n);
        }
      }, {
        key: "toString",
        value: function value() {
          return this.toHex();
        }
      }, {
        key: "toRgb",
        value: function value() {
          var t = zs(this._clamped(), 3),
              e = t[0],
              i = t[1],
              n = t[2];
          return "rgb(".concat(e, ",").concat(i, ",").concat(n, ")");
        }
      }, {
        key: "toArray",
        value: function value() {
          return [this._a, this._b, this._c, this._d, this.space];
        }
      }], [{
        key: "random",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "vibrant",
              i = arguments.length > 1 ? arguments[1] : void 0,
              n = Math.random,
              r = Math.round,
              s = Math.sin,
              a = Math.PI;

          if ("vibrant" === e) {
            var o = 24 * n() + 57,
                h = 38 * n() + 45,
                u = 360 * n(),
                l = new t(o, h, u, "lch");
            return l;
          }

          if ("sine" === e) {
            var c = r(80 * s(2 * a * (i = null == i ? n() : i) / .5 + .01) + 150),
                f = r(50 * s(2 * a * i / .5 + 4.6) + 200),
                d = r(100 * s(2 * a * i / .5 + 2.3) + 150),
                p = new t(c, f, d);
            return p;
          }

          if ("pastel" === e) {
            var y = 8 * n() + 86,
                g = 17 * n() + 9,
                _ = 360 * n(),
                v = new t(y, g, _, "lch");

            return v;
          }

          if ("dark" === e) {
            var m = 10 + 10 * n(),
                b = 50 * n() + 86,
                w = 360 * n(),
                x = new t(m, b, w, "lch");
            return x;
          }

          if ("rgb" === e) {
            var k = 255 * n(),
                P = 255 * n(),
                A = 255 * n(),
                M = new t(k, P, A);
            return M;
          }

          if ("lab" === e) {
            var O = 100 * n(),
                S = 256 * n() - 128,
                C = 256 * n() - 128,
                T = new t(O, S, C, "lab");
            return T;
          }

          if ("grey" === e) {
            var j = 255 * n(),
                E = new t(j, j, j);
            return E;
          }
        }
      }, {
        key: "test",
        value: function value(t) {
          return "string" == typeof t && (ts.test(t) || es.test(t));
        }
      }, {
        key: "isRgb",
        value: function value(t) {
          return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b;
        }
      }, {
        key: "isColor",
        value: function value(e) {
          return e && (e instanceof t || this.isRgb(e) || this.test(e));
        }
      }]), t;
    }(),
        Ws = l(function () {
      ue(1);
    });

    function Qs(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function Js(t, e) {
      return !e || "object" !== oe(e) && "function" != typeof e ? Qs(t) : e;
    }

    function Ks(t) {
      return (Ks = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function Zs(t, e, i) {
      return (Zs = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, i) {
        var n = function (t, e) {
          for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Ks(t));) {
            ;
          }

          return t;
        }(t, e);

        if (n) {
          var r = Object.getOwnPropertyDescriptor(n, e);
          return r.get ? r.get.call(i) : r.value;
        }
      })(t, e, i || t);
    }

    function ta(t, e) {
      return (ta = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function ea(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && ta(t, e);
    }

    Dt({
      target: "Object",
      stat: !0,
      forced: Ws
    }, {
      keys: function keys(t) {
        return ue(he(t));
      }
    }), Hn("match", 1, function (t, e, i) {
      return [function (e) {
        var i = b(this),
            n = null == e ? void 0 : e[t];
        return void 0 !== n ? n.call(e, i) : new RegExp(e)[t](String(i));
      }, function (t) {
        var n = i(e, t, this);
        if (n.done) return n.value;
        var r = E(t),
            s = String(this);
        if (!r.global) return Qn(r, s);
        var a = r.unicode;
        r.lastIndex = 0;

        for (var o, h = [], u = 0; null !== (o = Qn(r, s));) {
          var l = String(o[0]);
          h[u] = l, "" === l && (r.lastIndex = Wn(s, ct(r.lastIndex), a)), u++;
        }

        return 0 === u ? null : h;
      }];
    });

    var ia = wt.f,
        na = j.f,
        ra = I.f,
        sa = or.trim,
        aa = u.Number,
        oa = aa.prototype,
        ha = "Number" == _(ye(oa)),
        ua = function ua(t) {
      var e,
          i,
          n,
          r,
          s,
          a,
          o,
          h,
          u = k(t, !1);
      if ("string" == typeof u && u.length > 2) if (43 === (e = (u = sa(u)).charCodeAt(0)) || 45 === e) {
        if (88 === (i = u.charCodeAt(2)) || 120 === i) return NaN;
      } else if (48 === e) {
        switch (u.charCodeAt(1)) {
          case 66:
          case 98:
            n = 2, r = 49;
            break;

          case 79:
          case 111:
            n = 8, r = 55;
            break;

          default:
            return +u;
        }

        for (a = (s = u.slice(2)).length, o = 0; o < a; o++) {
          if ((h = s.charCodeAt(o)) < 48 || h > r) return NaN;
        }

        return parseInt(s, n);
      }
      return +u;
    };

    if (jt("Number", !aa(" 0o1") || !aa("0b1") || aa("+0x1"))) {
      for (var la, ca = function ca(t) {
        var e = arguments.length < 1 ? 0 : t,
            i = this;
        return i instanceof ca && (ha ? l(function () {
          oa.valueOf.call(i);
        }) : "Number" != _(i)) ? rn(new aa(ua(e)), i, ca) : ua(e);
      }, fa = c ? ia(aa) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), da = 0; fa.length > da; da++) {
        A(aa, la = fa[da]) && !A(ca, la) && ra(ca, la, na(aa, la));
      }

      ca.prototype = oa, oa.constructor = ca, nt(u, "Number", ca);
    }

    var pa = or.trim,
        ya = u.parseFloat,
        ga = 1 / ya(ir + "-0") != -1 / 0 ? function (t) {
      var e = pa(String(t)),
          i = ya(e);
      return 0 === i && "-" == e.charAt(0) ? -0 : i;
    } : ya;
    Dt({
      global: !0,
      forced: parseFloat != ga
    }, {
      parseFloat: ga
    });

    var _a = function () {
      function t() {
        wr(this, t), this.init.apply(this, arguments);
      }

      return $s(t, [{
        key: "init",
        value: function value(t, e) {
          var i = 0,
              n = 0,
              r = Array.isArray(t) ? {
            x: t[0],
            y: t[1]
          } : "object" === oe(t) ? {
            x: t.x,
            y: t.y
          } : {
            x: t,
            y: e
          };
          return this.x = null == r.x ? i : r.x, this.y = null == r.y ? n : r.y, this;
        }
      }, {
        key: "clone",
        value: function value() {
          return new t(this);
        }
      }, {
        key: "transform",
        value: function value(t) {
          return this.clone().transformO(t);
        }
      }, {
        key: "transformO",
        value: function value(t) {
          ma.isMatrixLike(t) || (t = new ma(t));
          var e = this.x,
              i = this.y;
          return this.x = t.a * e + t.c * i + t.e, this.y = t.b * e + t.d * i + t.f, this;
        }
      }, {
        key: "toArray",
        value: function value() {
          return [this.x, this.y];
        }
      }]), t;
    }();

    function va(t, e, i) {
      return Math.abs(e - t) < (i || 1e-6);
    }

    var ma = function () {
      function t() {
        wr(this, t), this.init.apply(this, arguments);
      }

      return $s(t, [{
        key: "init",
        value: function value(e) {
          var i = t.fromArray([1, 0, 0, 1, 0, 0]);
          return e = e instanceof La ? e.matrixify() : "string" == typeof e ? t.fromArray(e.split(ss).map(parseFloat)) : Array.isArray(e) ? t.fromArray(e) : "object" === oe(e) && t.isMatrixLike(e) ? e : "object" === oe(e) ? new t().transform(e) : 6 === arguments.length ? t.fromArray([].slice.call(arguments)) : i, this.a = null != e.a ? e.a : i.a, this.b = null != e.b ? e.b : i.b, this.c = null != e.c ? e.c : i.c, this.d = null != e.d ? e.d : i.d, this.e = null != e.e ? e.e : i.e, this.f = null != e.f ? e.f : i.f, this;
        }
      }, {
        key: "clone",
        value: function value() {
          return new t(this);
        }
      }, {
        key: "transform",
        value: function value(e) {
          if (t.isMatrixLike(e)) return new t(e).multiplyO(this);
          var i = t.formatTransforms(e),
              n = new _a(i.ox, i.oy).transform(this),
              r = n.x,
              s = n.y,
              a = new t().translateO(i.rx, i.ry).lmultiplyO(this).translateO(-r, -s).scaleO(i.scaleX, i.scaleY).skewO(i.skewX, i.skewY).shearO(i.shear).rotateO(i.theta).translateO(r, s);

          if (isFinite(i.px) || isFinite(i.py)) {
            var o = new _a(r, s).transform(a),
                h = i.px ? i.px - o.x : 0,
                u = i.py ? i.py - o.y : 0;
            a.translateO(h, u);
          }

          return a.translateO(i.tx, i.ty), a;
        }
      }, {
        key: "compose",
        value: function value(e) {
          e.origin && (e.originX = e.origin[0], e.originY = e.origin[1]);
          var i = e.originX || 0,
              n = e.originY || 0,
              r = e.scaleX || 1,
              s = e.scaleY || 1,
              a = e.shear || 0,
              o = e.rotate || 0,
              h = e.translateX || 0,
              u = e.translateY || 0;
          return new t().translateO(-i, -n).scaleO(r, s).shearO(a).rotateO(o).translateO(h, u).lmultiplyO(this).translateO(i, n);
        }
      }, {
        key: "decompose",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = this.a,
              n = this.b,
              r = this.c,
              s = this.d,
              a = this.e,
              o = this.f,
              h = i * s - n * r,
              u = h > 0 ? 1 : -1,
              l = u * Math.sqrt(i * i + n * n),
              c = Math.atan2(u * n, u * i),
              f = 180 / Math.PI * c,
              d = Math.cos(c),
              p = Math.sin(c),
              y = (i * r + n * s) / h,
              g = r * l / (y * i - n) || s * l / (y * n + i),
              _ = a - t + t * d * l + e * (y * d * l - p * g),
              v = o - e + t * p * l + e * (y * p * l + d * g);

          return {
            scaleX: l,
            scaleY: g,
            shear: y,
            rotate: f,
            translateX: _,
            translateY: v,
            originX: t,
            originY: e,
            a: this.a,
            b: this.b,
            c: this.c,
            d: this.d,
            e: this.e,
            f: this.f
          };
        }
      }, {
        key: "multiply",
        value: function value(t) {
          return this.clone().multiplyO(t);
        }
      }, {
        key: "multiplyO",
        value: function value(e) {
          var i = e instanceof t ? e : new t(e);
          return t.matrixMultiply(this, i, this);
        }
      }, {
        key: "lmultiply",
        value: function value(t) {
          return this.clone().lmultiplyO(t);
        }
      }, {
        key: "lmultiplyO",
        value: function value(e) {
          var i = e instanceof t ? e : new t(e);
          return t.matrixMultiply(i, this, this);
        }
      }, {
        key: "inverseO",
        value: function value() {
          var t = this.a,
              e = this.b,
              i = this.c,
              n = this.d,
              r = this.e,
              s = this.f,
              a = t * n - e * i;
          if (!a) throw new Error("Cannot invert " + this);
          var o = n / a,
              h = -e / a,
              u = -i / a,
              l = t / a,
              c = -(o * r + u * s),
              f = -(h * r + l * s);
          return this.a = o, this.b = h, this.c = u, this.d = l, this.e = c, this.f = f, this;
        }
      }, {
        key: "inverse",
        value: function value() {
          return this.clone().inverseO();
        }
      }, {
        key: "translate",
        value: function value(t, e) {
          return this.clone().translateO(t, e);
        }
      }, {
        key: "translateO",
        value: function value(t, e) {
          return this.e += t || 0, this.f += e || 0, this;
        }
      }, {
        key: "scale",
        value: function value(t, e, i, n) {
          var r;
          return (r = this.clone()).scaleO.apply(r, arguments);
        }
      }, {
        key: "scaleO",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          3 === arguments.length && (n = i, i = e, e = t);
          var r = this.a,
              s = this.b,
              a = this.c,
              o = this.d,
              h = this.e,
              u = this.f;
          return this.a = r * t, this.b = s * e, this.c = a * t, this.d = o * e, this.e = h * t - i * t + i, this.f = u * e - n * e + n, this;
        }
      }, {
        key: "rotate",
        value: function value(t, e, i) {
          return this.clone().rotateO(t, e, i);
        }
      }, {
        key: "rotateO",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          t = lr(t);
          var n = Math.cos(t),
              r = Math.sin(t),
              s = this.a,
              a = this.b,
              o = this.c,
              h = this.d,
              u = this.e,
              l = this.f;
          return this.a = s * n - a * r, this.b = a * n + s * r, this.c = o * n - h * r, this.d = h * n + o * r, this.e = u * n - l * r + i * r - e * n + e, this.f = l * n + u * r - e * r - i * n + i, this;
        }
      }, {
        key: "flip",
        value: function value(t, e) {
          return this.clone().flipO(t, e);
        }
      }, {
        key: "flipO",
        value: function value(t, e) {
          return "x" === t ? this.scaleO(-1, 1, e, 0) : "y" === t ? this.scaleO(1, -1, 0, e) : this.scaleO(-1, -1, t, e || t);
        }
      }, {
        key: "shear",
        value: function value(t, e, i) {
          return this.clone().shearO(t, e, i);
        }
      }, {
        key: "shearO",
        value: function value(t) {
          var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              i = this.a,
              n = this.b,
              r = this.c,
              s = this.d,
              a = this.e,
              o = this.f;
          return this.a = i + n * t, this.c = r + s * t, this.e = a + o * t - e * t, this;
        }
      }, {
        key: "skew",
        value: function value(t, e, i, n) {
          var r;
          return (r = this.clone()).skewO.apply(r, arguments);
        }
      }, {
        key: "skewO",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          3 === arguments.length && (n = i, i = e, e = t), t = lr(t), e = lr(e);
          var r = Math.tan(t),
              s = Math.tan(e),
              a = this.a,
              o = this.b,
              h = this.c,
              u = this.d,
              l = this.e,
              c = this.f;
          return this.a = a + o * r, this.b = o + a * s, this.c = h + u * r, this.d = u + h * s, this.e = l + c * r - n * r, this.f = c + l * s - i * s, this;
        }
      }, {
        key: "skewX",
        value: function value(t, e, i) {
          return this.skew(t, 0, e, i);
        }
      }, {
        key: "skewXO",
        value: function value(t, e, i) {
          return this.skewO(t, 0, e, i);
        }
      }, {
        key: "skewY",
        value: function value(t, e, i) {
          return this.skew(0, t, e, i);
        }
      }, {
        key: "skewYO",
        value: function value(t, e, i) {
          return this.skewO(0, t, e, i);
        }
      }, {
        key: "aroundO",
        value: function value(t, e, i) {
          var n = t || 0,
              r = e || 0;
          return this.translateO(-n, -r).lmultiplyO(i).translateO(n, r);
        }
      }, {
        key: "around",
        value: function value(t, e, i) {
          return this.clone().aroundO(t, e, i);
        }
      }, {
        key: "equals",
        value: function value(e) {
          var i = new t(e);
          return va(this.a, i.a) && va(this.b, i.b) && va(this.c, i.c) && va(this.d, i.d) && va(this.e, i.e) && va(this.f, i.f);
        }
      }, {
        key: "toString",
        value: function value() {
          return "matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.e + "," + this.f + ")";
        }
      }, {
        key: "toArray",
        value: function value() {
          return [this.a, this.b, this.c, this.d, this.e, this.f];
        }
      }, {
        key: "valueOf",
        value: function value() {
          return {
            a: this.a,
            b: this.b,
            c: this.c,
            d: this.d,
            e: this.e,
            f: this.f
          };
        }
      }], [{
        key: "fromArray",
        value: function value(t) {
          return {
            a: t[0],
            b: t[1],
            c: t[2],
            d: t[3],
            e: t[4],
            f: t[5]
          };
        }
      }, {
        key: "isMatrixLike",
        value: function value(t) {
          return null != t.a || null != t.b || null != t.c || null != t.d || null != t.e || null != t.f;
        }
      }, {
        key: "formatTransforms",
        value: function value(t) {
          var e = "both" === t.flip || !0 === t.flip,
              i = t.flip && (e || "x" === t.flip) ? -1 : 1,
              n = t.flip && (e || "y" === t.flip) ? -1 : 1,
              r = t.skew && t.skew.length ? t.skew[0] : isFinite(t.skew) ? t.skew : isFinite(t.skewX) ? t.skewX : 0,
              s = t.skew && t.skew.length ? t.skew[1] : isFinite(t.skew) ? t.skew : isFinite(t.skewY) ? t.skewY : 0,
              a = t.scale && t.scale.length ? t.scale[0] * i : isFinite(t.scale) ? t.scale * i : isFinite(t.scaleX) ? t.scaleX * i : i,
              o = t.scale && t.scale.length ? t.scale[1] * n : isFinite(t.scale) ? t.scale * n : isFinite(t.scaleY) ? t.scaleY * n : n,
              h = t.shear || 0,
              u = t.rotate || t.theta || 0,
              l = new _a(t.origin || t.around || t.ox || t.originX, t.oy || t.originY),
              c = l.x,
              f = l.y,
              d = new _a(t.position || t.px || t.positionX, t.py || t.positionY),
              p = d.x,
              y = d.y,
              g = new _a(t.translate || t.tx || t.translateX, t.ty || t.translateY),
              _ = g.x,
              v = g.y,
              m = new _a(t.relative || t.rx || t.relativeX, t.ry || t.relativeY);
          return {
            scaleX: a,
            scaleY: o,
            skewX: r,
            skewY: s,
            shear: h,
            theta: u,
            rx: m.x,
            ry: m.y,
            tx: _,
            ty: v,
            ox: c,
            oy: f,
            px: p,
            py: y
          };
        }
      }, {
        key: "matrixMultiply",
        value: function value(t, e, i) {
          var n = t.a * e.a + t.c * e.b,
              r = t.b * e.a + t.d * e.b,
              s = t.a * e.c + t.c * e.d,
              a = t.b * e.c + t.d * e.d,
              o = t.e + t.a * e.e + t.c * e.f,
              h = t.f + t.b * e.e + t.d * e.f;
          return i.a = n, i.b = r, i.c = s, i.d = a, i.e = o, i.f = h, i;
        }
      }]), t;
    }();

    function ba() {
      if (!ba.nodes) {
        var t = Mr().size(2, 0);
        t.node.style.cssText = ["opacity: 0", "position: absolute", "left: -100%", "top: -100%", "overflow: hidden"].join(";"), t.attr("focusable", "false"), t.attr("aria-hidden", "true");
        var e = t.path().node;
        ba.nodes = {
          svg: t,
          path: e
        };
      }

      if (!ba.nodes.svg.node.parentNode) {
        var i = br.document.body || br.document.documentElement;
        ba.nodes.svg.addTo(i);
      }

      return ba.nodes;
    }

    function wa(t) {
      return !(t.width || t.height || t.x || t.y);
    }

    Tr(ma, "Matrix");

    var xa = function () {
      function t() {
        wr(this, t), this.init.apply(this, arguments);
      }

      return $s(t, [{
        key: "init",
        value: function value(t) {
          var e = [0, 0, 0, 0];
          return t = "string" == typeof t ? t.split(ss).map(parseFloat) : Array.isArray(t) ? t : "object" === oe(t) ? [null != t.left ? t.left : t.x, null != t.top ? t.top : t.y, t.width, t.height] : 4 === arguments.length ? [].slice.call(arguments) : e, this.x = t[0] || 0, this.y = t[1] || 0, this.width = this.w = t[2] || 0, this.height = this.h = t[3] || 0, this.x2 = this.x + this.w, this.y2 = this.y + this.h, this.cx = this.x + this.w / 2, this.cy = this.y + this.h / 2, this;
        }
      }, {
        key: "merge",
        value: function value(e) {
          var i = Math.min(this.x, e.x),
              n = Math.min(this.y, e.y);
          return new t(i, n, Math.max(this.x + this.width, e.x + e.width) - i, Math.max(this.y + this.height, e.y + e.height) - n);
        }
      }, {
        key: "transform",
        value: function value(e) {
          e instanceof ma || (e = new ma(e));
          var i = 1 / 0,
              n = -1 / 0,
              r = 1 / 0,
              s = -1 / 0;
          return [new _a(this.x, this.y), new _a(this.x2, this.y), new _a(this.x, this.y2), new _a(this.x2, this.y2)].forEach(function (t) {
            t = t.transform(e), i = Math.min(i, t.x), n = Math.max(n, t.x), r = Math.min(r, t.y), s = Math.max(s, t.y);
          }), new t(i, r, n - i, s - r);
        }
      }, {
        key: "addOffset",
        value: function value() {
          return this.x += br.window.pageXOffset, this.y += br.window.pageYOffset, this;
        }
      }, {
        key: "toString",
        value: function value() {
          return this.x + " " + this.y + " " + this.width + " " + this.height;
        }
      }, {
        key: "toArray",
        value: function value() {
          return [this.x, this.y, this.width, this.height];
        }
      }, {
        key: "isNulled",
        value: function value() {
          return wa(this);
        }
      }]), t;
    }();

    function ka(t, e) {
      var i, n;

      try {
        if (wa(i = t(this.node)) && (n = this.node) !== br.document && !(br.document.documentElement.contains || function (t) {
          for (; t.parentNode;) {
            t = t.parentNode;
          }

          return t === br.document;
        }).call(br.document.documentElement, n)) throw new Error("Element not in the dom");
      } catch (t) {
        i = e(this);
      }

      return i;
    }

    On({
      viewbox: {
        viewbox: function viewbox(t, e, i, n) {
          return null == t ? new xa(this.attr("viewBox")) : this.attr("viewBox", new xa(t, e, i, n));
        },
        zoom: function zoom(t, e) {
          var i = this.node.clientWidth,
              n = this.node.clientHeight,
              r = this.viewbox();

          if (!i && !n) {
            var s = window.getComputedStyle(this.node);
            i = parseFloat(s.getPropertyValue("width")), n = parseFloat(s.getPropertyValue("height"));
          }

          var a = i / r.width,
              o = n / r.height,
              h = Math.min(a, o);
          if (null == t) return h;
          var u = h / t;
          u === 1 / 0 && (u = Number.MIN_VALUE), e = e || new _a(i / 2 / a + r.x, n / 2 / o + r.y);
          var l = new xa(r).transform(new ma({
            scale: u,
            origin: e
          }));
          return this.viewbox(l);
        }
      }
    }), Tr(xa, "Box");

    var Pa = function () {
      try {
        return Function("name", "baseClass", "_constructor", ["baseClass = baseClass || Array", "return {", "  [name]: class extends baseClass {", "    constructor (...args) {", "      super(...args)", "      _constructor && _constructor.apply(this, args)", "    }", "  }", "}[name]"].join("\n"));
      } catch (t) {
        return function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Array,
              i = arguments.length > 2 ? arguments[2] : void 0,
              n = function n() {
            e.apply(this, arguments), i && i.apply(this, arguments);
          };

          return n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.prototype.map = function (t) {
            var e = new n();
            return e.push.apply(e, Array.prototype.map.call(this, t)), e;
          }, n;
        };
      }
    }(),
        Aa = Pa("List", Array, function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      if ("number" == typeof t) return this;
      this.length = 0, this.push.apply(this, Pn(t));
    });

    Dr(Aa, {
      each: function each(t) {
        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) {
          i[n - 1] = arguments[n];
        }

        return "function" == typeof t ? this.map(function (e) {
          return t.call(e, e);
        }) : this.map(function (e) {
          return e[t].apply(e, i);
        });
      },
      toArray: function toArray() {
        return Array.prototype.concat.apply([], this);
      }
    });
    var Ma = ["toArray", "constructor", "each"];

    function Oa(t, e) {
      return new Aa(ur((e || br.document).querySelectorAll(t), function (t) {
        return Sr(t);
      }));
    }

    Aa.extend = function (t) {
      t = t.reduce(function (t, e) {
        return Ma.includes(e) || "_" === e[0] || (t[e] = function () {
          for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) {
            i[n] = arguments[n];
          }

          return this.each.apply(this, [e].concat(i));
        }), t;
      }, {}), Dr(Aa, t);
    };

    var Sa = function (t) {
      function e() {
        var t,
            i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = i.events,
            r = void 0 === n ? {} : n;
        return wr(this, e), (t = Js(this, Ks(e).call(this))).events = r, t;
      }

      return ea(e, t), $s(e, [{
        key: "addEventListener",
        value: function value() {}
      }, {
        key: "dispatch",
        value: function value(t, e) {
          return function (t, e, i) {
            var n = ws(t);
            return e instanceof br.window.Event || (e = new br.window.CustomEvent(e, {
              detail: i,
              cancelable: !0
            })), n.dispatchEvent(e), e;
          }(this, t, e);
        }
      }, {
        key: "dispatchEvent",
        value: function value(t) {
          var e = this.getEventHolder().events;
          if (!e) return !0;
          var i = e[t.type];

          for (var n in i) {
            for (var r in i[n]) {
              i[n][r](t);
            }
          }

          return !t.defaultPrevented;
        }
      }, {
        key: "fire",
        value: function value(t, e) {
          return this.dispatch(t, e), this;
        }
      }, {
        key: "getEventHolder",
        value: function value() {
          return this;
        }
      }, {
        key: "getEventTarget",
        value: function value() {
          return this;
        }
      }, {
        key: "off",
        value: function value(t, e) {
          return ks(this, t, e), this;
        }
      }, {
        key: "on",
        value: function value(t, e, i, n) {
          return xs(this, t, e, i, n), this;
        }
      }, {
        key: "removeEventListener",
        value: function value() {}
      }]), e;
    }(xr);

    function Ca() {}

    Tr(Sa, "EventTarget");
    var Ta = {
      duration: 400,
      ease: ">",
      delay: 0
    },
        ja = {
      "fill-opacity": 1,
      "stroke-opacity": 1,
      "stroke-width": 0,
      "stroke-linejoin": "miter",
      "stroke-linecap": "butt",
      fill: "#000000",
      stroke: "#000000",
      opacity: 1,
      x: 0,
      y: 0,
      cx: 0,
      cy: 0,
      width: 0,
      height: 0,
      r: 0,
      rx: 0,
      ry: 0,
      offset: 0,
      "stop-opacity": 1,
      "stop-color": "#000000",
      "text-anchor": "start"
    },
        Ea = Pa("SVGArray", Array, function (t) {
      this.init(t);
    });
    Dr(Ea, {
      init: function init(t) {
        return "number" == typeof t || (this.length = 0, this.push.apply(this, Pn(this.parse(t)))), this;
      },
      toArray: function toArray() {
        return Array.prototype.concat.apply([], this);
      },
      toString: function toString() {
        return this.join(" ");
      },
      valueOf: function valueOf() {
        var t = [];
        return t.push.apply(t, Pn(this)), t;
      },
      parse: function parse() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return t instanceof Array ? t : t.trim().split(ss).map(parseFloat);
      },
      clone: function clone() {
        return new this.constructor(this);
      },
      toSet: function toSet() {
        return new Set(this);
      }
    });

    var Da = function () {
      function t() {
        wr(this, t), this.init.apply(this, arguments);
      }

      return $s(t, [{
        key: "init",
        value: function value(e, i) {
          return i = Array.isArray(e) ? e[1] : i, e = Array.isArray(e) ? e[0] : e, this.value = 0, this.unit = i || "", "number" == typeof e ? this.value = isNaN(e) ? 0 : isFinite(e) ? e : e < 0 ? -34e37 : 34e37 : "string" == typeof e ? (i = e.match(Ur)) && (this.value = parseFloat(i[1]), "%" === i[5] ? this.value /= 100 : "s" === i[5] && (this.value *= 1e3), this.unit = i[5]) : e instanceof t && (this.value = e.valueOf(), this.unit = e.unit), this;
        }
      }, {
        key: "toString",
        value: function value() {
          return ("%" === this.unit ? ~~(1e8 * this.value) / 1e6 : "s" === this.unit ? this.value / 1e3 : this.value) + this.unit;
        }
      }, {
        key: "toJSON",
        value: function value() {
          return this.toString();
        }
      }, {
        key: "toArray",
        value: function value() {
          return [this.value, this.unit];
        }
      }, {
        key: "valueOf",
        value: function value() {
          return this.value;
        }
      }, {
        key: "plus",
        value: function value(e) {
          return e = new t(e), new t(this + e, this.unit || e.unit);
        }
      }, {
        key: "minus",
        value: function value(e) {
          return e = new t(e), new t(this - e, this.unit || e.unit);
        }
      }, {
        key: "times",
        value: function value(e) {
          return e = new t(e), new t(this * e, this.unit || e.unit);
        }
      }, {
        key: "divide",
        value: function value(e) {
          return e = new t(e), new t(this / e, this.unit || e.unit);
        }
      }, {
        key: "convert",
        value: function value(e) {
          return new t(this.value, e);
        }
      }]), t;
    }(),
        Ia = [];

    var Na = function (t) {
      function e(t, i) {
        var n;
        return wr(this, e), (n = Js(this, Ks(e).call(this, t))).node = t, n.type = t.nodeName, i && t !== i && n.attr(i), n;
      }

      return ea(e, t), $s(e, [{
        key: "add",
        value: function value(t, e) {
          return t = Mr(t), null == e ? this.node.appendChild(t.node) : t.node !== this.node.childNodes[e] && this.node.insertBefore(t.node, this.node.childNodes[e]), this;
        }
      }, {
        key: "addTo",
        value: function value(t) {
          return Mr(t).put(this);
        }
      }, {
        key: "children",
        value: function value() {
          return new Aa(ur(this.node.children, function (t) {
            return Sr(t);
          }));
        }
      }, {
        key: "clear",
        value: function value() {
          for (; this.node.hasChildNodes();) {
            this.node.removeChild(this.node.lastChild);
          }

          return this;
        }
      }, {
        key: "clone",
        value: function value() {
          return this.writeDataToDom(), function t(e) {
            for (var i = e.children.length - 1; i >= 0; i--) {
              t(e.children[i]);
            }

            return e.id ? Sr(e).id(Er(e.nodeName)) : Sr(e);
          }(this.node.cloneNode(!0));
        }
      }, {
        key: "each",
        value: function value(t, e) {
          var i,
              n,
              r = this.children();

          for (i = 0, n = r.length; i < n; i++) {
            t.apply(r[i], [i, r]), e && r[i].each(t, e);
          }

          return this;
        }
      }, {
        key: "element",
        value: function value(t) {
          return this.put(new e(Ar(t)));
        }
      }, {
        key: "first",
        value: function value() {
          return Sr(this.node.firstChild);
        }
      }, {
        key: "get",
        value: function value(t) {
          return Sr(this.node.childNodes[t]);
        }
      }, {
        key: "getEventHolder",
        value: function value() {
          return this.node;
        }
      }, {
        key: "getEventTarget",
        value: function value() {
          return this.node;
        }
      }, {
        key: "has",
        value: function value(t) {
          return this.index(t) >= 0;
        }
      }, {
        key: "id",
        value: function value(t) {
          return void 0 !== t || this.node.id || (this.node.id = Er(this.type)), this.attr("id", t);
        }
      }, {
        key: "index",
        value: function value(t) {
          return [].slice.call(this.node.childNodes).indexOf(t.node);
        }
      }, {
        key: "last",
        value: function value() {
          return Sr(this.node.lastChild);
        }
      }, {
        key: "matches",
        value: function value(t) {
          var e = this.node;
          return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t);
        }
      }, {
        key: "parent",
        value: function value(t) {
          var e = this;
          if (!e.node.parentNode) return null;
          if (e = Sr(e.node.parentNode), !t) return e;

          for (; e;) {
            if ("string" == typeof t ? e.matches(t) : e instanceof t) return e;
            if (!e.node.parentNode || "#document" === e.node.parentNode.nodeName || "#document-fragment" === e.node.parentNode.nodeName) return null;
            e = Sr(e.node.parentNode);
          }
        }
      }, {
        key: "put",
        value: function value(t, e) {
          return this.add(t, e), t;
        }
      }, {
        key: "putIn",
        value: function value(t) {
          return Mr(t).add(this);
        }
      }, {
        key: "remove",
        value: function value() {
          return this.parent() && this.parent().removeElement(this), this;
        }
      }, {
        key: "removeElement",
        value: function value(t) {
          return this.node.removeChild(t.node), this;
        }
      }, {
        key: "replace",
        value: function value(t) {
          return t = Mr(t), this.node.parentNode.replaceChild(t.node, this.node), t;
        }
      }, {
        key: "round",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
              e = arguments.length > 1 ? arguments[1] : void 0,
              i = Math.pow(10, t),
              n = this.attr();
          e || (e = Object.keys(n));
          var r = {};
          return e.forEach(function (t) {
            r[t] = Math.round(n[t] * i) / i;
          }), this.attr(r), this;
        }
      }, {
        key: "toString",
        value: function value() {
          return this.id();
        }
      }, {
        key: "svg",
        value: function value(t, e) {
          var i, n, r;

          if (!1 === t && (e = !1, t = null), null == t || "function" == typeof t) {
            e = null == e || e, this.writeDataToDom();
            var s = this;

            if (null != t) {
              if (s = Sr(s.node.cloneNode(!0)), e) {
                var a = t(s);
                if (s = a || s, !1 === a) return "";
              }

              s.each(function () {
                var e = t(this),
                    i = e || this;
                !1 === e ? this.remove() : e && this !== i && this.replace(i);
              }, !0);
            }

            return e ? s.node.outerHTML : s.node.innerHTML;
          }

          for (e = null != e && e, i = br.document.createElementNS(gr, "svg"), r = br.document.createDocumentFragment(), i.innerHTML = t, n = i.children.length; n--;) {
            r.appendChild(i.firstElementChild);
          }

          var o = this.parent();
          return e ? this.replace(r) && o : this.add(r);
        }
      }, {
        key: "words",
        value: function value(t) {
          return this.node.textContent = t, this;
        }
      }, {
        key: "writeDataToDom",
        value: function value() {
          return this.each(function () {
            this.writeDataToDom();
          }), this;
        }
      }]), e;
    }(Sa);

    Dr(Na, {
      attr: function attr(t, e, i) {
        var n = this;

        if (null == t) {
          t = {}, e = this.node.attributes;
          var r = !0,
              s = !1,
              a = void 0;

          try {
            for (var o, h = e[Symbol.iterator](); !(r = (o = h.next()).done); r = !0) {
              var u = o.value;
              t[u.nodeName] = ns.test(u.nodeValue) ? parseFloat(u.nodeValue) : u.nodeValue;
            }
          } catch (t) {
            s = !0, a = t;
          } finally {
            try {
              r || null == h["return"] || h["return"]();
            } finally {
              if (s) throw a;
            }
          }

          return t;
        }

        if (t instanceof Array) return t.reduce(function (t, e) {
          return t[e] = n.attr(e), t;
        }, {});
        if ("object" === oe(t) && t.constructor === Object) for (e in t) {
          this.attr(e, t[e]);
        } else if (null === e) this.node.removeAttribute(t);else {
          if (null == e) return null == (e = this.node.getAttribute(t)) ? ja[t] : ns.test(e) ? parseFloat(e) : e;
          "number" == typeof (e = Ia.reduce(function (e, i) {
            return i(t, e, n);
          }, e)) ? e = new Da(e) : Us.isColor(e) ? e = new Us(e) : e.constructor === Array && (e = new Ea(e)), "leading" === t ? this.leading && this.leading(e) : "string" == typeof i ? this.node.setAttributeNS(i, t, e.toString()) : this.node.setAttribute(t, e.toString()), !this.rebuild || "font-size" !== t && "x" !== t || this.rebuild();
        }
        return this;
      },
      find: function find(t) {
        return Oa(t, this.node);
      },
      findOne: function findOne(t) {
        return Sr(this.node.querySelector(t));
      }
    }), Tr(Na, "Dom");

    var La = function (t) {
      function e(t, i) {
        var n;
        return wr(this, e), (n = Js(this, Ks(e).call(this, t, i))).dom = {}, n.node.instance = Qs(n), t.hasAttribute("svgjs:data") && n.setData(JSON.parse(t.getAttribute("svgjs:data")) || {}), n;
      }

      return ea(e, t), $s(e, [{
        key: "center",
        value: function value(t, e) {
          return this.cx(t).cy(e);
        }
      }, {
        key: "cx",
        value: function value(t) {
          return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2);
        }
      }, {
        key: "cy",
        value: function value(t) {
          return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2);
        }
      }, {
        key: "defs",
        value: function value() {
          return this.root().defs();
        }
      }, {
        key: "dmove",
        value: function value(t, e) {
          return this.dx(t).dy(e);
        }
      }, {
        key: "dx",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return this.x(new Da(t).plus(this.x()));
        }
      }, {
        key: "dy",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return this.y(new Da(t).plus(this.y()));
        }
      }, {
        key: "root",
        value: function value() {
          var t = this.parent(kr[Pr]);
          return t && t.root();
        }
      }, {
        key: "getEventHolder",
        value: function value() {
          return this;
        }
      }, {
        key: "height",
        value: function value(t) {
          return this.attr("height", t);
        }
      }, {
        key: "inside",
        value: function value(t, e) {
          var i = this.bbox();
          return t > i.x && e > i.y && t < i.x + i.width && e < i.y + i.height;
        }
      }, {
        key: "move",
        value: function value(t, e) {
          return this.x(t).y(e);
        }
      }, {
        key: "parents",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : br.document;
          t = Mr(t);

          for (var e = new Aa(), i = this; (i = i.parent()) && i.node !== t.node && i.node !== br.document;) {
            e.push(i);
          }

          return e;
        }
      }, {
        key: "reference",
        value: function value(t) {
          if (!(t = this.attr(t))) return null;
          var e = t.match(Jr);
          return e ? Mr(e[1]) : null;
        }
      }, {
        key: "setData",
        value: function value(t) {
          return this.dom = t, this;
        }
      }, {
        key: "size",
        value: function value(t, e) {
          var i = pr(this, t, e);
          return this.width(new Da(i.width)).height(new Da(i.height));
        }
      }, {
        key: "width",
        value: function value(t) {
          return this.attr("width", t);
        }
      }, {
        key: "writeDataToDom",
        value: function value() {
          return this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), Zs(Ks(e.prototype), "writeDataToDom", this).call(this);
        }
      }, {
        key: "x",
        value: function value(t) {
          return this.attr("x", t);
        }
      }, {
        key: "y",
        value: function value(t) {
          return this.attr("y", t);
        }
      }]), e;
    }(Na);

    Dr(La, {
      bbox: function bbox() {
        return new xa(ka.call(this, function (t) {
          return t.getBBox();
        }, function (t) {
          try {
            var e = t.clone().addTo(ba().svg).show(),
                i = e.node.getBBox();
            return e.remove(), i;
          } catch (e) {
            throw new Error('Getting bbox of element "' + t.node.nodeName + '" is not possible. ' + e.toString());
          }
        }));
      },
      rbox: function rbox(t) {
        var e = new xa(ka.call(this, function (t) {
          return t.getBoundingClientRect();
        }, function (t) {
          throw new Error('Getting rbox of element "' + t.node.nodeName + '" is not possible');
        }));
        return t ? e.transform(t.screenCTM().inverse()) : e.addOffset();
      },
      point: function point(t, e) {
        return new _a(t, e).transform(this.screenCTM().inverse());
      },
      ctm: function ctm() {
        return new ma(this.node.getCTM());
      },
      screenCTM: function screenCTM() {
        if ("function" == typeof this.isRoot && !this.isRoot()) {
          var t = this.rect(1, 1),
              e = t.node.getScreenCTM();
          return t.remove(), new ma(e);
        }

        return new ma(this.node.getScreenCTM());
      }
    }), Tr(La, "Element");
    var Ra = {
      stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
      fill: ["color", "opacity", "rule"],
      prefix: function prefix(t, e) {
        return "color" === e ? t : t + "-" + e;
      }
    };
    ["fill", "stroke"].forEach(function (t) {
      var e,
          i = {};
      i[t] = function (i) {
        if (void 0 === i) return this.attr(t);
        if ("string" == typeof i || i instanceof Us || Us.isRgb(i) || i instanceof La) this.attr(t, i);else for (e = Ra[t].length - 1; e >= 0; e--) {
          null != i[Ra[t][e]] && this.attr(Ra.prefix(t, Ra[t][e]), i[Ra[t][e]]);
        }
        return this;
      }, On(["Element", "Runner"], i);
    }), On(["Element", "Runner"], {
      matrix: function matrix(t, e, i, n, r, s) {
        return null == t ? new ma(this) : this.attr("transform", new ma(t, e, i, n, r, s));
      },
      rotate: function rotate(t, e, i) {
        return this.transform({
          rotate: t,
          ox: e,
          oy: i
        }, !0);
      },
      skew: function skew(t, e, i, n) {
        return 1 === arguments.length || 3 === arguments.length ? this.transform({
          skew: t,
          ox: e,
          oy: i
        }, !0) : this.transform({
          skew: [t, e],
          ox: i,
          oy: n
        }, !0);
      },
      shear: function shear(t, e, i) {
        return this.transform({
          shear: t,
          ox: e,
          oy: i
        }, !0);
      },
      scale: function scale(t, e, i, n) {
        return 1 === arguments.length || 3 === arguments.length ? this.transform({
          scale: t,
          ox: e,
          oy: i
        }, !0) : this.transform({
          scale: [t, e],
          ox: i,
          oy: n
        }, !0);
      },
      translate: function translate(t, e) {
        return this.transform({
          translate: [t, e]
        }, !0);
      },
      relative: function relative(t, e) {
        return this.transform({
          relative: [t, e]
        }, !0);
      },
      flip: function flip(t, e) {
        var i = "string" == typeof t ? t : (isFinite(t), "both"),
            n = "both" === t && isFinite(e) ? [e, e] : "x" === t ? [e, 0] : "y" === t ? [0, e] : isFinite(t) ? [t, t] : [0, 0];
        return this.transform({
          flip: i,
          origin: n
        }, !0);
      },
      opacity: function opacity(t) {
        return this.attr("opacity", t);
      }
    }), On("radius", {
      radius: function radius(t, e) {
        var i = (this._element || this).type;
        return "radialGradient" === i || "radialGradient" === i ? this.attr("r", new Da(t)) : this.rx(t).ry(null == e ? t : e);
      }
    }), On("Path", {
      length: function length() {
        return this.node.getTotalLength();
      },
      pointAt: function pointAt(t) {
        return new _a(this.node.getPointAtLength(t));
      }
    }), On(["Element", "Runner"], {
      font: function font(t, e) {
        if ("object" === oe(t)) {
          for (e in t) {
            this.font(e, t[e]);
          }

          return this;
        }

        return "leading" === t ? this.leading(e) : "anchor" === t ? this.attr("text-anchor", e) : "size" === t || "family" === t || "weight" === t || "stretch" === t || "variant" === t || "style" === t ? this.attr("font-" + t, e) : this.attr(t, e);
      }
    }), On("Text", {
      ax: function ax(t) {
        return this.attr("x", t);
      },
      ay: function ay(t) {
        return this.attr("y", t);
      },
      amove: function amove(t, e) {
        return this.ax(t).ay(e);
      }
    }), On("Element", ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].reduce(function (t, e) {
      return t[e] = function (t) {
        return null === t ? ks(this, e) : xs(this, e, t), this;
      }, t;
    }, {}));
    var Ba = [].reverse,
        Fa = [1, 2];
    Dt({
      target: "Array",
      proto: !0,
      forced: String(Fa) === String(Fa.reverse())
    }, {
      reverse: function reverse() {
        return It(this) && (this.length = this.length), Ba.call(this);
      }
    }), Dt({
      target: "Object",
      stat: !0,
      forced: !c,
      sham: !c
    }, {
      defineProperties: le
    }), Dt({
      target: "Object",
      stat: !0,
      forced: !c,
      sham: !c
    }, {
      defineProperty: I.f
    });
    var za = j.f,
        qa = l(function () {
      za(1);
    });

    function $a(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t;
    }

    function Ga(t, e) {
      var i = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), i.push.apply(i, n);
      }

      return i;
    }

    function Xa(t) {
      return this.attr("rx", t);
    }

    function Va(t) {
      return this.attr("ry", t);
    }

    function Ya(t) {
      return null == t ? this.cx() - this.rx() : this.cx(t + this.rx());
    }

    function Ha(t) {
      return null == t ? this.cy() - this.ry() : this.cy(t + this.ry());
    }

    function Ua(t) {
      return null == t ? this.attr("cx") : this.attr("cx", t);
    }

    function Wa(t) {
      return null == t ? this.attr("cy") : this.attr("cy", t);
    }

    function Qa(t) {
      return null == t ? 2 * this.rx() : this.rx(new Da(t).divide(2));
    }

    function Ja(t) {
      return null == t ? 2 * this.ry() : this.ry(new Da(t).divide(2));
    }

    Dt({
      target: "Object",
      stat: !0,
      forced: !c || qa,
      sham: !c
    }, {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
        return za(w(t), e);
      }
    }), Dt({
      target: "Object",
      stat: !0,
      sham: !c
    }, {
      getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
        for (var e, i, n = w(t), r = j.f, s = kt(n), a = {}, o = 0; s.length > o;) {
          void 0 !== (i = r(n, e = s[o++])) && Nt(a, e, i);
        }

        return a;
      }
    }), On("Element", {
      untransform: function untransform() {
        return this.attr("transform", null);
      },
      matrixify: function matrixify() {
        return (this.attr("transform") || "").split(Kr).slice(0, -1).map(function (t) {
          var e = t.trim().split("(");
          return [e[0], e[1].split(ss).map(function (t) {
            return parseFloat(t);
          })];
        }).reverse().reduce(function (t, e) {
          return "matrix" === e[0] ? t.lmultiply(ma.fromArray(e[1])) : t[e[0]].apply(t, e[1]);
        }, new ma());
      },
      toParent: function toParent(t) {
        if (this === t) return this;
        var e = this.screenCTM(),
            i = t.screenCTM().inverse();
        return this.addTo(t).untransform().transform(i.multiply(e)), this;
      },
      toRoot: function toRoot() {
        return this.toParent(this.root());
      },
      transform: function transform(t, e) {
        if (null == t || "string" == typeof t) {
          var i = new ma(this).decompose();
          return null == t ? i : i[t];
        }

        ma.isMatrixLike(t) || (t = function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Ga(i, !0).forEach(function (e) {
              $a(t, e, i[e]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ga(i).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
            });
          }

          return t;
        }({}, t, {
          origin: yr(t, this)
        }));
        var n = new ma(!0 === e ? this : e || !1).transform(t);
        return this.attr("transform", n);
      }
    });

    var Ka = {
      __proto__: null,
      rx: Xa,
      ry: Va,
      x: Ya,
      y: Ha,
      cx: Ua,
      cy: Wa,
      width: Qa,
      height: Ja
    },
        Za = function (t) {
      function e() {
        return wr(this, e), Js(this, Ks(e).apply(this, arguments));
      }

      return ea(e, t), e;
    }(La);

    Tr(Za, "Shape");

    var to = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("circle", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "radius",
        value: function value(t) {
          return this.attr("r", t);
        }
      }, {
        key: "rx",
        value: function value(t) {
          return this.attr("r", t);
        }
      }, {
        key: "ry",
        value: function value(t) {
          return this.rx(t);
        }
      }, {
        key: "size",
        value: function value(t) {
          return this.radius(new Da(t).divide(2));
        }
      }]), e;
    }(Za);

    Dr(to, {
      x: Ya,
      y: Ha,
      cx: Ua,
      cy: Wa,
      width: Qa,
      height: Ja
    }), On({
      Container: {
        circle: Ir(function (t) {
          return this.put(new to()).size(t).move(0, 0);
        })
      }
    }), Tr(to, "Circle");

    var eo = function (t) {
      function e() {
        return wr(this, e), Js(this, Ks(e).apply(this, arguments));
      }

      return ea(e, t), $s(e, [{
        key: "flatten",
        value: function value(t) {
          return this.each(function () {
            return this instanceof e ? this.flatten(t).ungroup(t) : this.toParent(t);
          }), this.node.firstElementChild || this.remove(), this;
        }
      }, {
        key: "ungroup",
        value: function value(t) {
          return t = t || this.parent(), this.each(function () {
            return this.toParent(t);
          }), this.remove(), this;
        }
      }]), e;
    }(La);

    Tr(eo, "Container");

    var io = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("defs", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "flatten",
        value: function value() {
          return this;
        }
      }, {
        key: "ungroup",
        value: function value() {
          return this;
        }
      }]), e;
    }(eo);

    Tr(io, "Defs");

    var no = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("ellipse", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "size",
        value: function value(t, e) {
          var i = pr(this, t, e);
          return this.rx(new Da(i.width).divide(2)).ry(new Da(i.height).divide(2));
        }
      }]), e;
    }(Za);

    Dr(no, Ka), On("Container", {
      ellipse: Ir(function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
        return this.put(new no()).size(t, e).move(0, 0);
      })
    }), Tr(no, "Ellipse");

    var ro = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("stop", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "update",
        value: function value(t) {
          return ("number" == typeof t || t instanceof Da) && (t = {
            offset: arguments[0],
            color: arguments[1],
            opacity: arguments[2]
          }), null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new Da(t.offset)), this;
        }
      }]), e;
    }(La);

    function so(t, e) {
      return "radialGradient" === (this._element || this).type ? this.attr({
        fx: new Da(t),
        fy: new Da(e)
      }) : this.attr({
        x1: new Da(t),
        y1: new Da(e)
      });
    }

    function ao(t, e) {
      return "radialGradient" === (this._element || this).type ? this.attr({
        cx: new Da(t),
        cy: new Da(e)
      }) : this.attr({
        x2: new Da(t),
        y2: new Da(e)
      });
    }

    Tr(ro, "Stop");

    var oo = {
      __proto__: null,
      from: so,
      to: ao
    },
        ho = function (t) {
      function e(t, i) {
        return wr(this, e), Js(this, Ks(e).call(this, Or(t + "Gradient", "string" == typeof t ? null : t), i));
      }

      return ea(e, t), $s(e, [{
        key: "stop",
        value: function value(t, e, i) {
          return this.put(new ro()).update(t, e, i);
        }
      }, {
        key: "update",
        value: function value(t) {
          return this.clear(), "function" == typeof t && t.call(this, this), this;
        }
      }, {
        key: "url",
        value: function value() {
          return "url(#" + this.id() + ")";
        }
      }, {
        key: "toString",
        value: function value() {
          return this.url();
        }
      }, {
        key: "attr",
        value: function value(t, i, n) {
          return "transform" === t && (t = "gradientTransform"), Zs(Ks(e.prototype), "attr", this).call(this, t, i, n);
        }
      }, {
        key: "targets",
        value: function value() {
          return Oa('svg [fill*="' + this.id() + '"]');
        }
      }, {
        key: "bbox",
        value: function value() {
          return new xa();
        }
      }]), e;
    }(eo);

    Dr(ho, oo), On({
      Container: {
        gradient: Ir(function (t, e) {
          return this.defs().gradient(t, e);
        })
      },
      Defs: {
        gradient: Ir(function (t, e) {
          return this.put(new ho(t)).update(e);
        })
      }
    }), Tr(ho, "Gradient");

    var uo = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("pattern", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "url",
        value: function value() {
          return "url(#" + this.id() + ")";
        }
      }, {
        key: "update",
        value: function value(t) {
          return this.clear(), "function" == typeof t && t.call(this, this), this;
        }
      }, {
        key: "toString",
        value: function value() {
          return this.url();
        }
      }, {
        key: "attr",
        value: function value(t, i, n) {
          return "transform" === t && (t = "patternTransform"), Zs(Ks(e.prototype), "attr", this).call(this, t, i, n);
        }
      }, {
        key: "targets",
        value: function value() {
          return Oa('svg [fill*="' + this.id() + '"]');
        }
      }, {
        key: "bbox",
        value: function value() {
          return new xa();
        }
      }]), e;
    }(eo);

    On({
      Container: {
        pattern: function pattern() {
          var t;
          return (t = this.defs()).pattern.apply(t, arguments);
        }
      },
      Defs: {
        pattern: Ir(function (t, e, i) {
          return this.put(new uo()).update(i).attr({
            x: 0,
            y: 0,
            width: t,
            height: e,
            patternUnits: "userSpaceOnUse"
          });
        })
      }
    }), Tr(uo, "Pattern");

    var lo,
        co = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("image", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "load",
        value: function value(t, e) {
          if (!t) return this;
          var i = new br.window.Image();
          return xs(i, "load", function (t) {
            var n = this.parent(uo);
            0 === this.width() && 0 === this.height() && this.size(i.width, i.height), n instanceof uo && 0 === n.width() && 0 === n.height() && n.size(this.width(), this.height()), "function" == typeof e && e.call(this, t);
          }, this), xs(i, "load error", function () {
            ks(i);
          }), this.attr("href", i.src = t, vr);
        }
      }]), e;
    }(Za);

    lo = function lo(t, e, i) {
      return "fill" !== t && "stroke" !== t || rs.test(e) && (e = i.root().defs().image(e)), e instanceof co && (e = i.root().defs().pattern(0, 0, function (t) {
        t.add(e);
      })), e;
    }, Ia.push(lo), On({
      Container: {
        image: Ir(function (t, e) {
          return this.put(new co()).size(0, 0).load(t, e);
        })
      }
    }), Tr(co, "Image");
    var fo = Pa("PointArray", Ea);
    Dr(fo, {
      toString: function toString() {
        for (var t = 0, e = this.length, i = []; t < e; t++) {
          i.push(this[t].join(","));
        }

        return i.join(" ");
      },
      toLine: function toLine() {
        return {
          x1: this[0][0],
          y1: this[0][1],
          x2: this[1][0],
          y2: this[1][1]
        };
      },
      at: function at(t) {
        if (!this.destination) return this;

        for (var e = 0, i = this.length, n = []; e < i; e++) {
          n.push([this[e][0] + (this.destination[e][0] - this[e][0]) * t, this[e][1] + (this.destination[e][1] - this[e][1]) * t]);
        }

        return new fo(n);
      },
      parse: function parse() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [[0, 0]],
            e = [];

        if (t instanceof Array) {
          if (t[0] instanceof Array) return t;
        } else t = t.trim().split(ss).map(parseFloat);

        t.length % 2 != 0 && t.pop();

        for (var i = 0, n = t.length; i < n; i += 2) {
          e.push([t[i], t[i + 1]]);
        }

        return e;
      },
      transform: function transform(t) {
        for (var e = [], i = 0; i < this.length; i++) {
          var n = this[i];
          e.push([t.a * n[0] + t.c * n[1] + t.e, t.b * n[0] + t.d * n[1] + t.f]);
        }

        return new fo(e);
      },
      move: function move(t, e) {
        var i = this.bbox();
        if (t -= i.x, e -= i.y, !isNaN(t) && !isNaN(e)) for (var n = this.length - 1; n >= 0; n--) {
          this[n] = [this[n][0] + t, this[n][1] + e];
        }
        return this;
      },
      size: function size(t, e) {
        var i,
            n = this.bbox();

        for (i = this.length - 1; i >= 0; i--) {
          n.width && (this[i][0] = (this[i][0] - n.x) * t / n.width + n.x), n.height && (this[i][1] = (this[i][1] - n.y) * e / n.height + n.y);
        }

        return this;
      },
      bbox: function bbox() {
        var t = -1 / 0,
            e = -1 / 0,
            i = 1 / 0,
            n = 1 / 0;
        return this.forEach(function (r) {
          t = Math.max(r[0], t), e = Math.max(r[1], e), i = Math.min(r[0], i), n = Math.min(r[1], n);
        }), {
          x: i,
          y: n,
          width: t - i,
          height: e - n
        };
      }
    });

    var po = {
      __proto__: null,
      MorphArray: fo,
      x: function x(t) {
        return null == t ? this.bbox().x : this.move(t, this.bbox().y);
      },
      y: function y(t) {
        return null == t ? this.bbox().y : this.move(this.bbox().x, t);
      },
      width: function width(t) {
        var e = this.bbox();
        return null == t ? e.width : this.size(t, e.height);
      },
      height: function height(t) {
        var e = this.bbox();
        return null == t ? e.height : this.size(e.width, t);
      }
    },
        yo = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("line", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "array",
        value: function value() {
          return new fo([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
        }
      }, {
        key: "plot",
        value: function value(t, e, i, n) {
          return null == t ? this.array() : (t = void 0 !== e ? {
            x1: t,
            y1: e,
            x2: i,
            y2: n
          } : new fo(t).toLine(), this.attr(t));
        }
      }, {
        key: "move",
        value: function value(t, e) {
          return this.attr(this.array().move(t, e).toLine());
        }
      }, {
        key: "size",
        value: function value(t, e) {
          var i = pr(this, t, e);
          return this.attr(this.array().size(i.width, i.height).toLine());
        }
      }]), e;
    }(Za);

    Dr(yo, po), On({
      Container: {
        line: Ir(function () {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
            e[i] = arguments[i];
          }

          return yo.prototype.plot.apply(this.put(new yo()), null != e[0] ? e : [0, 0, 0, 0]);
        })
      }
    }), Tr(yo, "Line");

    var go = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("marker", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "width",
        value: function value(t) {
          return this.attr("markerWidth", t);
        }
      }, {
        key: "height",
        value: function value(t) {
          return this.attr("markerHeight", t);
        }
      }, {
        key: "ref",
        value: function value(t, e) {
          return this.attr("refX", t).attr("refY", e);
        }
      }, {
        key: "update",
        value: function value(t) {
          return this.clear(), "function" == typeof t && t.call(this, this), this;
        }
      }, {
        key: "toString",
        value: function value() {
          return "url(#" + this.id() + ")";
        }
      }]), e;
    }(eo);

    On({
      Container: {
        marker: function marker() {
          var t;
          return (t = this.defs()).marker.apply(t, arguments);
        }
      },
      Defs: {
        marker: Ir(function (t, e, i) {
          return this.put(new go()).size(t, e).ref(t / 2, e / 2).viewbox(0, 0, t, e).attr("orient", "auto").update(i);
        })
      },
      marker: {
        marker: function marker(t, e, i, n) {
          var r = ["marker"];
          return "all" !== t && r.push(t), r = r.join("-"), t = arguments[1] instanceof go ? arguments[1] : this.defs().marker(e, i, n), this.attr(r, t);
        }
      }
    }), Tr(go, "Marker");
    var _o = [].sort,
        vo = [1, 2, 3],
        mo = l(function () {
      vo.sort(void 0);
    }),
        bo = l(function () {
      vo.sort(null);
    }),
        wo = Lr("sort");

    function xo(t, e) {
      return function (i) {
        return null == i ? this[i] : (this[t] = i, e && e.call(this), this);
      };
    }

    Dt({
      target: "Array",
      proto: !0,
      forced: mo || !bo || wo
    }, {
      sort: function sort(t) {
        return void 0 === t ? _o.call(he(this)) : _o.call(he(this), xe(t));
      }
    });

    var ko = {
      "-": function _(t) {
        return t;
      },
      "<>": function _(t) {
        return -Math.cos(t * Math.PI) / 2 + .5;
      },
      ">": function _(t) {
        return Math.sin(t * Math.PI / 2);
      },
      "<": function _(t) {
        return 1 - Math.cos(t * Math.PI / 2);
      },
      bezier: function bezier(t, e, i, n) {
        return function (r) {
          return r < 0 ? t > 0 ? e / t * r : i > 0 ? n / i * r : 0 : r > 1 ? i < 1 ? (1 - n) / (1 - i) * r + (n - i) / (1 - i) : t < 1 ? (1 - e) / (1 - t) * r + (e - t) / (1 - t) : 1 : 3 * r * Math.pow(1 - r, 2) * e + 3 * Math.pow(r, 2) * (1 - r) * n + Math.pow(r, 3);
        };
      },
      steps: function steps(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "end";
        e = e.split("-").reverse()[0];
        var i = t;
        return "none" === e ? --i : "both" === e && ++i, function (n) {
          var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              s = Math.floor(n * t),
              a = n * s % 1 == 0;
          return "start" !== e && "both" !== e || ++s, r && a && --s, n >= 0 && s < 0 && (s = 0), n <= 1 && s > i && (s = i), s / i;
        };
      }
    },
        Po = function () {
      function t() {
        wr(this, t);
      }

      return $s(t, [{
        key: "done",
        value: function value() {
          return !1;
        }
      }]), t;
    }(),
        Ao = function (t) {
      function e(t) {
        var i;
        return wr(this, e), (i = Js(this, Ks(e).call(this))).ease = ko[t || Ta.ease] || t, i;
      }

      return ea(e, t), $s(e, [{
        key: "step",
        value: function value(t, e, i) {
          return "number" != typeof t ? i < 1 ? t : e : t + (e - t) * this.ease(i);
        }
      }]), e;
    }(Po),
        Mo = function (t) {
      function e(t) {
        var i;
        return wr(this, e), (i = Js(this, Ks(e).call(this))).stepper = t, i;
      }

      return ea(e, t), $s(e, [{
        key: "step",
        value: function value(t, e, i, n) {
          return this.stepper(t, e, i, n);
        }
      }, {
        key: "done",
        value: function value(t) {
          return t.done;
        }
      }]), e;
    }(Po);

    function Oo() {
      var t = (this._duration || 500) / 1e3,
          e = this._overshoot || 0,
          i = Math.PI,
          n = Math.log(e / 100 + 1e-10),
          r = -n / Math.sqrt(i * i + n * n),
          s = 3.9 / (r * t);
      this.d = 2 * r * s, this.k = s * s;
    }

    Dr(function (t) {
      function e(t, i) {
        var n;
        return wr(this, e), (n = Js(this, Ks(e).call(this))).duration(t || 500).overshoot(i || 0), n;
      }

      return ea(e, t), $s(e, [{
        key: "step",
        value: function value(t, e, i, n) {
          if ("string" == typeof t) return t;
          if (n.done = i === 1 / 0, i === 1 / 0) return e;
          if (0 === i) return t;
          i > 100 && (i = 16), i /= 1e3;
          var r = n.velocity || 0,
              s = -this.d * r - this.k * (t - e),
              a = t + r * i + s * i * i / 2;
          return n.velocity = r + s * i, n.done = Math.abs(e - a) + Math.abs(r) < .002, n.done ? e : a;
        }
      }]), e;
    }(Mo), {
      duration: xo("_duration", Oo),
      overshoot: xo("_overshoot", Oo)
    }), Dr(function (t) {
      function e(t, i, n, r) {
        var s;
        return wr(this, e), t = null == t ? .1 : t, i = null == i ? .01 : i, n = null == n ? 0 : n, r = null == r ? 1e3 : r, (s = Js(this, Ks(e).call(this))).p(t).i(i).d(n).windup(r), s;
      }

      return ea(e, t), $s(e, [{
        key: "step",
        value: function value(t, e, i, n) {
          if ("string" == typeof t) return t;
          if (n.done = i === 1 / 0, i === 1 / 0) return e;
          if (0 === i) return t;
          var r = e - t,
              s = (n.integral || 0) + r * i,
              a = (r - (n.error || 0)) / i,
              o = this.windup;
          return !1 !== o && (s = Math.max(-o, Math.min(s, o))), n.error = r, n.integral = s, n.done = Math.abs(r) < .001, n.done ? e : t + (this.P * r + this.I * s + this.D * a);
        }
      }]), e;
    }(Mo), {
      windup: xo("windup"),
      p: xo("P"),
      i: xo("I"),
      d: xo("D")
    });
    var So = Pa("PathArray", Ea);

    function Co(t, e, i, n) {
      return i + n.replace(ls, " .");
    }

    for (var To = {
      M: function M(t, e, i) {
        return e.x = i.x = t[0], e.y = i.y = t[1], ["M", e.x, e.y];
      },
      L: function L(t, e) {
        return e.x = t[0], e.y = t[1], ["L", t[0], t[1]];
      },
      H: function H(t, e) {
        return e.x = t[0], ["H", t[0]];
      },
      V: function V(t, e) {
        return e.y = t[0], ["V", t[0]];
      },
      C: function C(t, e) {
        return e.x = t[4], e.y = t[5], ["C", t[0], t[1], t[2], t[3], t[4], t[5]];
      },
      S: function S(t, e) {
        return e.x = t[2], e.y = t[3], ["S", t[0], t[1], t[2], t[3]];
      },
      Q: function Q(t, e) {
        return e.x = t[2], e.y = t[3], ["Q", t[0], t[1], t[2], t[3]];
      },
      T: function T(t, e) {
        return e.x = t[0], e.y = t[1], ["T", t[0], t[1]];
      },
      Z: function Z(t, e, i) {
        return e.x = i.x, e.y = i.y, ["Z"];
      },
      A: function A(t, e) {
        return e.x = t[5], e.y = t[6], ["A", t[0], t[1], t[2], t[3], t[4], t[5], t[6]];
      }
    }, jo = "mlhvqtcsaz".split(""), Eo = 0, Do = jo.length; Eo < Do; ++Eo) {
      To[jo[Eo]] = function (t) {
        return function (e, i, n) {
          if ("H" === t) e[0] = e[0] + i.x;else if ("V" === t) e[0] = e[0] + i.y;else if ("A" === t) e[5] = e[5] + i.x, e[6] = e[6] + i.y;else for (var r = 0, s = e.length; r < s; ++r) {
            e[r] = e[r] + (r % 2 ? i.y : i.x);
          }
          return To[t](e, i, n);
        };
      }(jo[Eo].toUpperCase());
    }

    Dr(So, {
      toString: function toString() {
        return function (t) {
          for (var e = 0, i = t.length, n = ""; e < i; e++) {
            n += t[e][0], null != t[e][1] && (n += t[e][1], null != t[e][2] && (n += " ", n += t[e][2], null != t[e][3] && (n += " ", n += t[e][3], n += " ", n += t[e][4], null != t[e][5] && (n += " ", n += t[e][5], n += " ", n += t[e][6], null != t[e][7] && (n += " ", n += t[e][7])))));
          }

          return n + " ";
        }(this);
      },
      move: function move(t, e) {
        var i = this.bbox();
        if (t -= i.x, e -= i.y, !isNaN(t) && !isNaN(e)) for (var n, r = this.length - 1; r >= 0; r--) {
          "M" === (n = this[r][0]) || "L" === n || "T" === n ? (this[r][1] += t, this[r][2] += e) : "H" === n ? this[r][1] += t : "V" === n ? this[r][1] += e : "C" === n || "S" === n || "Q" === n ? (this[r][1] += t, this[r][2] += e, this[r][3] += t, this[r][4] += e, "C" === n && (this[r][5] += t, this[r][6] += e)) : "A" === n && (this[r][6] += t, this[r][7] += e);
        }
        return this;
      },
      size: function size(t, e) {
        var i,
            n,
            r = this.bbox();

        for (r.width = 0 === r.width ? 1 : r.width, r.height = 0 === r.height ? 1 : r.height, i = this.length - 1; i >= 0; i--) {
          "M" === (n = this[i][0]) || "L" === n || "T" === n ? (this[i][1] = (this[i][1] - r.x) * t / r.width + r.x, this[i][2] = (this[i][2] - r.y) * e / r.height + r.y) : "H" === n ? this[i][1] = (this[i][1] - r.x) * t / r.width + r.x : "V" === n ? this[i][1] = (this[i][1] - r.y) * e / r.height + r.y : "C" === n || "S" === n || "Q" === n ? (this[i][1] = (this[i][1] - r.x) * t / r.width + r.x, this[i][2] = (this[i][2] - r.y) * e / r.height + r.y, this[i][3] = (this[i][3] - r.x) * t / r.width + r.x, this[i][4] = (this[i][4] - r.y) * e / r.height + r.y, "C" === n && (this[i][5] = (this[i][5] - r.x) * t / r.width + r.x, this[i][6] = (this[i][6] - r.y) * e / r.height + r.y)) : "A" === n && (this[i][1] = this[i][1] * t / r.width, this[i][2] = this[i][2] * e / r.height, this[i][6] = (this[i][6] - r.x) * t / r.width + r.x, this[i][7] = (this[i][7] - r.y) * e / r.height + r.y);
        }

        return this;
      },
      equalCommands: function equalCommands(t) {
        var e, i, n;

        for (t = new So(t), n = this.length === t.length, e = 0, i = this.length; n && e < i; e++) {
          n = this[e][0] === t[e][0];
        }

        return n;
      },
      morph: function morph(t) {
        return t = new So(t), this.equalCommands(t) ? this.destination = t : this.destination = null, this;
      },
      at: function at(t) {
        if (!this.destination) return this;
        var e,
            i,
            n,
            r,
            s = this.destination.value,
            a = [],
            o = new So();

        for (e = 0, i = this.length; e < i; e++) {
          for (a[e] = [this[e][0]], n = 1, r = this[e].length; n < r; n++) {
            a[e][n] = this[e][n] + (s[e][n] - this[e][n]) * t;
          }

          "A" === a[e][0] && (a[e][4] = +(0 !== a[e][4]), a[e][5] = +(0 !== a[e][5]));
        }

        return o.value = a, o;
      },
      parse: function parse() {
        var t,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [["M", 0, 0]];
        if (e instanceof So) return e;
        var i = {
          M: 2,
          L: 2,
          H: 1,
          V: 1,
          C: 6,
          S: 4,
          Q: 4,
          T: 2,
          A: 7,
          Z: 0
        };
        e = "string" == typeof e ? e.replace(us, Co).replace(os, " $& ").replace(as, "$1 -").trim().split(ss) : e.reduce(function (t, e) {
          return [].concat.call(t, e);
        }, []);
        var n = [],
            r = new _a(),
            s = new _a(),
            a = 0,
            o = e.length;

        do {
          hs.test(e[a]) ? (t = e[a], ++a) : "M" === t ? t = "L" : "m" === t && (t = "l"), n.push(To[t].call(null, e.slice(a, a += i[t.toUpperCase()]).map(parseFloat), r, s));
        } while (o > a);

        return n;
      },
      bbox: function bbox() {
        return ba().path.setAttribute("d", this.toString()), ba.nodes.path.getBBox();
      }
    });

    var Io = function () {
      function t(e) {
        wr(this, t), this._stepper = e || new Ao("-"), this._from = null, this._to = null, this._type = null, this._context = null, this._morphObj = null;
      }

      return $s(t, [{
        key: "from",
        value: function value(t) {
          return null == t ? this._from : (this._from = this._set(t), this);
        }
      }, {
        key: "to",
        value: function value(t) {
          return null == t ? this._to : (this._to = this._set(t), this);
        }
      }, {
        key: "type",
        value: function value(t) {
          return null == t ? this._type : (this._type = t, this);
        }
      }, {
        key: "_set",
        value: function value(t) {
          if (!this._type) {
            var e = oe(t);
            "number" === e ? this.type(Da) : "string" === e ? Us.isColor(t) ? this.type(Us) : ss.test(t) ? this.type(os.test(t) ? So : Ea) : Ur.test(t) ? this.type(Da) : this.type(No) : Bo.indexOf(t.constructor) > -1 ? this.type(t.constructor) : Array.isArray(t) ? this.type(Ea) : "object" === e ? this.type(Ro) : this.type(No);
          }

          var i = new this._type(t);
          return this._type === Us && (i = this._to ? i[this._to[4]]() : this._from ? i[this._from[4]]() : i), i = i.toArray(), this._morphObj = this._morphObj || new this._type(), this._context = this._context || Array.apply(null, Array(i.length)).map(Object).map(function (t) {
            return t.done = !0, t;
          }), i;
        }
      }, {
        key: "stepper",
        value: function value(t) {
          return null == t ? this._stepper : (this._stepper = t, this);
        }
      }, {
        key: "done",
        value: function value() {
          return this._context.map(this._stepper.done).reduce(function (t, e) {
            return t && e;
          }, !0);
        }
      }, {
        key: "at",
        value: function value(t) {
          var e = this;
          return this._morphObj.fromArray(this._from.map(function (i, n) {
            return e._stepper.step(i, e._to[n], t, e._context[n], e._context);
          }));
        }
      }]), t;
    }(),
        No = function () {
      function t() {
        wr(this, t), this.init.apply(this, arguments);
      }

      return $s(t, [{
        key: "init",
        value: function value(t) {
          return t = Array.isArray(t) ? t[0] : t, this.value = t, this;
        }
      }, {
        key: "valueOf",
        value: function value() {
          return this.value;
        }
      }, {
        key: "toArray",
        value: function value() {
          return [this.value];
        }
      }]), t;
    }(),
        Lo = function () {
      function t() {
        wr(this, t), this.init.apply(this, arguments);
      }

      return $s(t, [{
        key: "init",
        value: function value(e) {
          return Array.isArray(e) && (e = {
            scaleX: e[0],
            scaleY: e[1],
            shear: e[2],
            rotate: e[3],
            translateX: e[4],
            translateY: e[5],
            originX: e[6],
            originY: e[7]
          }), Object.assign(this, t.defaults, e), this;
        }
      }, {
        key: "toArray",
        value: function value() {
          var t = this;
          return [t.scaleX, t.scaleY, t.shear, t.rotate, t.translateX, t.translateY, t.originX, t.originY];
        }
      }]), t;
    }();

    Lo.defaults = {
      scaleX: 1,
      scaleY: 1,
      shear: 0,
      rotate: 0,
      translateX: 0,
      translateY: 0,
      originX: 0,
      originY: 0
    };

    var Ro = function () {
      function t() {
        wr(this, t), this.init.apply(this, arguments);
      }

      return $s(t, [{
        key: "init",
        value: function value(t) {
          if (this.values = [], !Array.isArray(t)) {
            t = t || {};
            var e = [];

            for (var i in t) {
              e.push([i, t[i]]);
            }

            return e.sort(function (t, e) {
              return t[0] - e[0];
            }), this.values = e.reduce(function (t, e) {
              return t.concat(e);
            }, []), this;
          }

          this.values = t;
        }
      }, {
        key: "valueOf",
        value: function value() {
          for (var t = {}, e = this.values, i = 0, n = e.length; i < n; i += 2) {
            t[e[i]] = e[i + 1];
          }

          return t;
        }
      }, {
        key: "toArray",
        value: function value() {
          return this.values;
        }
      }]), t;
    }(),
        Bo = [No, Lo, Ro];

    var Fo = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("path", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "array",
        value: function value() {
          return this._array || (this._array = new So(this.attr("d")));
        }
      }, {
        key: "plot",
        value: function value(t) {
          return null == t ? this.array() : this.clear().attr("d", "string" == typeof t ? t : this._array = new So(t));
        }
      }, {
        key: "clear",
        value: function value() {
          return delete this._array, this;
        }
      }, {
        key: "move",
        value: function value(t, e) {
          return this.attr("d", this.array().move(t, e));
        }
      }, {
        key: "x",
        value: function value(t) {
          return null == t ? this.bbox().x : this.move(t, this.bbox().y);
        }
      }, {
        key: "y",
        value: function value(t) {
          return null == t ? this.bbox().y : this.move(this.bbox().x, t);
        }
      }, {
        key: "size",
        value: function value(t, e) {
          var i = pr(this, t, e);
          return this.attr("d", this.array().size(i.width, i.height));
        }
      }, {
        key: "width",
        value: function value(t) {
          return null == t ? this.bbox().width : this.size(t, this.bbox().height);
        }
      }, {
        key: "height",
        value: function value(t) {
          return null == t ? this.bbox().height : this.size(this.bbox().width, t);
        }
      }, {
        key: "targets",
        value: function value() {
          return Oa('svg textpath [href*="' + this.id() + '"]');
        }
      }]), e;
    }(Za);

    Fo.prototype.MorphArray = So, On({
      Container: {
        path: Ir(function (t) {
          return this.put(new Fo()).plot(t || new So());
        })
      }
    }), Tr(Fo, "Path");

    var zo = {
      __proto__: null,
      array: function array() {
        return this._array || (this._array = new fo(this.attr("points")));
      },
      plot: function plot(t) {
        return null == t ? this.array() : this.clear().attr("points", "string" == typeof t ? t : this._array = new fo(t));
      },
      clear: function clear() {
        return delete this._array, this;
      },
      move: function move(t, e) {
        return this.attr("points", this.array().move(t, e));
      },
      size: function size(t, e) {
        var i = pr(this, t, e);
        return this.attr("points", this.array().size(i.width, i.height));
      }
    },
        qo = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("polygon", t), t));
      }

      return ea(e, t), e;
    }(Za);

    On({
      Container: {
        polygon: Ir(function (t) {
          return this.put(new qo()).plot(t || new fo());
        })
      }
    }), Dr(qo, po), Dr(qo, zo), Tr(qo, "Polygon");

    var $o = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("polyline", t), t));
      }

      return ea(e, t), e;
    }(Za);

    On({
      Container: {
        polyline: Ir(function (t) {
          return this.put(new $o()).plot(t || new fo());
        })
      }
    }), Dr($o, po), Dr($o, zo), Tr($o, "Polyline");

    var Go = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("rect", t), t));
      }

      return ea(e, t), e;
    }(Za);

    Dr(Go, {
      rx: Xa,
      ry: Va
    }), On({
      Container: {
        rect: Ir(function (t, e) {
          return this.put(new Go()).size(t, e);
        })
      }
    }), Tr(Go, "Rect");
    var Xo = Math.max,
        Vo = Math.min;
    Dt({
      target: "Array",
      proto: !0,
      forced: !Yt("splice")
    }, {
      splice: function splice(t, e) {
        var i,
            n,
            r,
            s,
            a,
            o,
            h = he(this),
            u = ct(h.length),
            l = pt(t, u),
            c = arguments.length;
        if (0 === c ? i = n = 0 : 1 === c ? (i = 0, n = u - l) : (i = c - 2, n = Vo(Xo(ut(e), 0), u - l)), u + i - n > 9007199254740991) throw TypeError("Maximum allowed length exceeded");

        for (r = Ae(h, n), s = 0; s < n; s++) {
          (a = l + s) in h && Nt(r, s, h[a]);
        }

        if (r.length = n, i < n) {
          for (s = l; s < u - n; s++) {
            o = s + i, (a = s + n) in h ? h[o] = h[a] : delete h[o];
          }

          for (s = u; s > u - n + i; s--) {
            delete h[s - 1];
          }
        } else if (i > n) for (s = u - n; s > l; s--) {
          o = s + i - 1, (a = s + n - 1) in h ? h[o] = h[a] : delete h[o];
        }

        for (s = 0; s < i; s++) {
          h[s + l] = arguments[s + 2];
        }

        return h.length = u - n + i, r;
      }
    });

    var Yo = function () {
      function t() {
        wr(this, t), this._first = null, this._last = null;
      }

      return $s(t, [{
        key: "push",
        value: function value(t) {
          var e = t.next ? t : {
            value: t,
            next: null,
            prev: null
          };
          return this._last ? (e.prev = this._last, this._last.next = e, this._last = e) : (this._last = e, this._first = e), e;
        }
      }, {
        key: "shift",
        value: function value() {
          var t = this._first;
          return t ? (this._first = t.next, this._first && (this._first.prev = null), this._last = this._first ? this._last : null, t.value) : null;
        }
      }, {
        key: "first",
        value: function value() {
          return this._first && this._first.value;
        }
      }, {
        key: "last",
        value: function value() {
          return this._last && this._last.value;
        }
      }, {
        key: "remove",
        value: function value(t) {
          t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t === this._last && (this._last = t.prev), t === this._first && (this._first = t.next), t.prev = null, t.next = null;
        }
      }]), t;
    }(),
        Ho = {
      nextDraw: null,
      frames: new Yo(),
      timeouts: new Yo(),
      immediates: new Yo(),
      timer: function timer() {
        return br.window.performance || br.window.Date;
      },
      transforms: [],
      frame: function frame(t) {
        var e = Ho.frames.push({
          run: t
        });
        return null === Ho.nextDraw && (Ho.nextDraw = br.window.requestAnimationFrame(Ho._draw)), e;
      },
      timeout: function timeout(t, e) {
        e = e || 0;
        var i = Ho.timer().now() + e,
            n = Ho.timeouts.push({
          run: t,
          time: i
        });
        return null === Ho.nextDraw && (Ho.nextDraw = br.window.requestAnimationFrame(Ho._draw)), n;
      },
      immediate: function immediate(t) {
        var e = Ho.immediates.push(t);
        return null === Ho.nextDraw && (Ho.nextDraw = br.window.requestAnimationFrame(Ho._draw)), e;
      },
      cancelFrame: function cancelFrame(t) {
        null != t && Ho.frames.remove(t);
      },
      clearTimeout: function clearTimeout(t) {
        null != t && Ho.timeouts.remove(t);
      },
      cancelImmediate: function cancelImmediate(t) {
        null != t && Ho.immediates.remove(t);
      },
      _draw: function _draw(t) {
        for (var e = null, i = Ho.timeouts.last(); (e = Ho.timeouts.shift()) && (t >= e.time ? e.run() : Ho.timeouts.push(e), e !== i);) {
          ;
        }

        for (var n = null, r = Ho.frames.last(); n !== r && (n = Ho.frames.shift());) {
          n.run(t);
        }

        for (var s = null; s = Ho.immediates.shift();) {
          s();
        }

        Ho.nextDraw = Ho.timeouts.first() || Ho.frames.first() ? br.window.requestAnimationFrame(Ho._draw) : null;
      }
    },
        Uo = function Uo(t) {
      var e = t.start,
          i = t.runner.duration();
      return {
        start: e,
        duration: i,
        end: e + i,
        runner: t.runner
      };
    },
        Wo = function Wo() {
      var t = br.window;
      return (t.performance || t.Date).now();
    },
        Qo = function (t) {
      function e() {
        var t,
            i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wo;
        return wr(this, e), (t = Js(this, Ks(e).call(this)))._timeSource = i, t._startTime = 0, t._speed = 1, t._persist = 0, t._nextFrame = null, t._paused = !0, t._runners = [], t._runnerIds = [], t._lastRunnerId = -1, t._time = 0, t._lastSourceTime = 0, t._lastStepTime = 0, t._step = t._stepFn.bind(Qs(t), !1), t._stepImmediate = t._stepFn.bind(Qs(t), !0), t;
      }

      return ea(e, t), $s(e, [{
        key: "schedule",
        value: function value(t, e, i) {
          if (null == t) return this._runners.map(Uo);
          var n = 0,
              r = this.getEndTime();
          if (e = e || 0, null == i || "last" === i || "after" === i) n = r;else if ("absolute" === i || "start" === i) n = e, e = 0;else if ("now" === i) n = this._time;else {
            if ("relative" !== i) throw new Error('Invalid value for the "when" parameter');
            var s = this._runners[t.id];
            s && (n = s.start + e, e = 0);
          }
          t.unschedule(), t.timeline(this);
          var a = t.persist(),
              o = {
            persist: null === a ? this._persist : a,
            start: n + e,
            runner: t
          };
          return this._lastRunnerId = t.id, this._runners.push(o), this._runners.sort(function (t, e) {
            return t.start - e.start;
          }), this._runnerIds = this._runners.map(function (t) {
            return t.runner.id;
          }), this.updateTime()._continue(), this;
        }
      }, {
        key: "unschedule",
        value: function value(t) {
          var e = this._runnerIds.indexOf(t.id);

          return e < 0 || (this._runners.splice(e, 1), this._runnerIds.splice(e, 1), t.timeline(null)), this;
        }
      }, {
        key: "getEndTime",
        value: function value() {
          var t = this._runners[this._runnerIds.indexOf(this._lastRunnerId)],
              e = t ? t.runner.duration() : 0;

          return (t ? t.start : 0) + e;
        }
      }, {
        key: "getEndTimeOfTimeline",
        value: function value() {
          for (var t = 0, e = 0; e < this._runners.length; e++) {
            var i = this._runners[e],
                n = i ? i.runner.duration() : 0,
                r = (i ? i.start : 0) + n;
            r > t && (t = r);
          }

          return t;
        }
      }, {
        key: "updateTime",
        value: function value() {
          return this.active() || (this._lastSourceTime = this._timeSource()), this;
        }
      }, {
        key: "play",
        value: function value() {
          return this._paused = !1, this.updateTime()._continue();
        }
      }, {
        key: "pause",
        value: function value() {
          return this._paused = !0, this._continue();
        }
      }, {
        key: "stop",
        value: function value() {
          return this.time(0), this.pause();
        }
      }, {
        key: "finish",
        value: function value() {
          return this.time(this.getEndTimeOfTimeline() + 1), this.pause();
        }
      }, {
        key: "speed",
        value: function value(t) {
          return null == t ? this._speed : (this._speed = t, this);
        }
      }, {
        key: "reverse",
        value: function value(t) {
          var e = this.speed();
          if (null == t) return this.speed(-e);
          var i = Math.abs(e);
          return this.speed(t ? i : -i);
        }
      }, {
        key: "seek",
        value: function value(t) {
          return this.time(this._time + t);
        }
      }, {
        key: "time",
        value: function value(t) {
          return null == t ? this._time : (this._time = t, this._continue(!0));
        }
      }, {
        key: "persist",
        value: function value(t) {
          return null == t ? this._persist : (this._persist = t, this);
        }
      }, {
        key: "source",
        value: function value(t) {
          return null == t ? this._timeSource : (this._timeSource = t, this);
        }
      }, {
        key: "_stepFn",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              e = this._timeSource(),
              i = e - this._lastSourceTime;

          t && (i = 0);
          var n = this._speed * i + (this._time - this._lastStepTime);
          this._lastSourceTime = e, t || (this._time += n, this._time = this._time < 0 ? 0 : this._time), this._lastStepTime = this._time, this.fire("time", this._time);

          for (var r = this._runners.length; r--;) {
            var s = this._runners[r],
                a = s.runner,
                o = this._time - s.start;
            o <= 0 && a.reset();
          }

          for (var h = !1, u = 0, l = this._runners.length; u < l; u++) {
            var c = this._runners[u],
                f = c.runner,
                d = n,
                p = this._time - c.start;
            if (p <= 0) h = !0;else if (p < d && (d = p), f.active()) {
              var y = f.step(d).done;

              if (y) {
                if (!0 !== c.persist) {
                  var g = f.duration() - f.time() + this._time;

                  g + c.persist < this._time && (f.unschedule(), --u, --l);
                }
              } else h = !0;
            }
          }

          return h && !(this._speed < 0 && 0 === this._time) || this._runnerIds.length && this._speed < 0 && this._time > 0 ? this._continue() : (this.pause(), this.fire("finished")), this;
        }
      }, {
        key: "_continue",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return Ho.cancelFrame(this._nextFrame), this._nextFrame = null, t ? this._stepImmediate() : (this._paused || (this._nextFrame = Ho.frame(this._step)), this);
        }
      }, {
        key: "active",
        value: function value() {
          return !!this._nextFrame;
        }
      }]), e;
    }(Sa);

    function Jo(t, e) {
      var i = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), i.push.apply(i, n);
      }

      return i;
    }

    function Ko(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Jo(i, !0).forEach(function (e) {
          $a(t, e, i[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Jo(i).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
        });
      }

      return t;
    }

    On({
      Element: {
        timeline: function timeline(t) {
          return null == t ? (this._timeline = this._timeline || new Qo(), this._timeline) : (this._timeline = t, this);
        }
      }
    });

    var Zo = function (t) {
      function e(t) {
        var i;
        return wr(this, e), (i = Js(this, Ks(e).call(this))).id = e.id++, t = "function" == typeof (t = null == t ? Ta.duration : t) ? new Mo(t) : t, i._element = null, i._timeline = null, i.done = !1, i._queue = [], i._duration = "number" == typeof t && t, i._isDeclarative = t instanceof Mo, i._stepper = i._isDeclarative ? t : new Ao(), i._history = {}, i.enabled = !0, i._time = 0, i._lastTime = 0, i._reseted = !0, i.transforms = new ma(), i.transformId = 1, i._haveReversed = !1, i._reverse = !1, i._loopsDone = 0, i._swing = !1, i._wait = 0, i._times = 1, i._frameId = null, i._persist = !!i._isDeclarative || null, i;
      }

      return ea(e, t), $s(e, [{
        key: "element",
        value: function value(t) {
          return null == t ? this._element : (this._element = t, t._prepareRunner(), this);
        }
      }, {
        key: "timeline",
        value: function value(t) {
          return void 0 === t ? this._timeline : (this._timeline = t, this);
        }
      }, {
        key: "animate",
        value: function value(t, i, n) {
          var r = e.sanitise(t, i, n),
              s = new e(r.duration);
          return this._timeline && s.timeline(this._timeline), this._element && s.element(this._element), s.loop(r).schedule(r.delay, r.when);
        }
      }, {
        key: "schedule",
        value: function value(t, e, i) {
          if (t instanceof Qo || (i = e, e = t, t = this.timeline()), !t) throw Error("Runner cannot be scheduled without timeline");
          return t.schedule(this, e, i), this;
        }
      }, {
        key: "unschedule",
        value: function value() {
          var t = this.timeline();
          return t && t.unschedule(this), this;
        }
      }, {
        key: "loop",
        value: function value(t, e, i) {
          return "object" === oe(t) && (e = t.swing, i = t.wait, t = t.times), this._times = t || 1 / 0, this._swing = e || !1, this._wait = i || 0, !0 === this._times && (this._times = 1 / 0), this;
        }
      }, {
        key: "delay",
        value: function value(t) {
          return this.animate(0, t);
        }
      }, {
        key: "queue",
        value: function value(t, e, i, n) {
          return this._queue.push({
            initialiser: t || Ca,
            runner: e || Ca,
            retarget: i,
            isTransform: n,
            initialised: !1,
            finished: !1
          }), this.timeline() && this.timeline()._continue(), this;
        }
      }, {
        key: "during",
        value: function value(t) {
          return this.queue(null, t);
        }
      }, {
        key: "after",
        value: function value(t) {
          return this.on("finished", t);
        }
      }, {
        key: "time",
        value: function value(t) {
          if (null == t) return this._time;
          var e = t - this._time;
          return this.step(e), this;
        }
      }, {
        key: "duration",
        value: function value() {
          return this._times * (this._wait + this._duration) - this._wait;
        }
      }, {
        key: "loops",
        value: function value(t) {
          var e = this._duration + this._wait;

          if (null == t) {
            var i = Math.floor(this._time / e),
                n = (this._time - i * e) / this._duration;
            return Math.min(i + n, this._times);
          }

          var r = t % 1,
              s = e * Math.floor(t) + this._duration * r;
          return this.time(s);
        }
      }, {
        key: "persist",
        value: function value(t) {
          return null == t ? this._persist : (this._persist = t, this);
        }
      }, {
        key: "position",
        value: function value(t) {
          var e,
              i = this._time,
              n = this._duration,
              r = this._wait,
              s = this._times,
              a = this._swing,
              o = this._reverse;

          if (null == t) {
            var h = function h(t) {
              var e = a * Math.floor(t % (2 * (r + n)) / (r + n)),
                  i = e && !o || !e && o,
                  s = Math.pow(-1, i) * (t % (r + n)) / n + i;
              return Math.max(Math.min(s, 1), 0);
            },
                u = s * (r + n) - r;

            return e = i <= 0 ? Math.round(h(1e-5)) : i < u ? h(i) : Math.round(h(u - 1e-5)), e;
          }

          var l = Math.floor(this.loops()),
              c = a && l % 2 == 0;
          return e = l + (c && !o || o && c ? t : 1 - t), this.loops(e);
        }
      }, {
        key: "progress",
        value: function value(t) {
          return null == t ? Math.min(1, this._time / this.duration()) : this.time(t * this.duration());
        }
      }, {
        key: "step",
        value: function value(t) {
          if (!this.enabled) return this;
          t = null == t ? 16 : t, this._time += t;
          var e = this.position(),
              i = this._lastPosition !== e && this._time >= 0;
          this._lastPosition = e;
          var n = this.duration(),
              r = this._lastTime <= 0 && this._time > 0,
              s = this._lastTime < n && this._time >= n;
          this._lastTime = this._time, r && this.fire("start", this);
          var a = this._isDeclarative;

          if (this.done = !a && !s && this._time >= n, this._reseted = !1, i || a) {
            this._initialise(i), this.transforms = new ma();

            var o = this._run(a ? t : e);

            this.fire("step", this);
          }

          return this.done = this.done || o && a, s && this.fire("finished", this), this;
        }
      }, {
        key: "reset",
        value: function value() {
          return this._reseted || (this.time(0), this._reseted = !0), this;
        }
      }, {
        key: "finish",
        value: function value() {
          return this.step(1 / 0);
        }
      }, {
        key: "reverse",
        value: function value(t) {
          return this._reverse = null == t ? !this._reverse : t, this;
        }
      }, {
        key: "ease",
        value: function value(t) {
          return this._stepper = new Ao(t), this;
        }
      }, {
        key: "active",
        value: function value(t) {
          return null == t ? this.enabled : (this.enabled = t, this);
        }
      }, {
        key: "_rememberMorpher",
        value: function value(t, e) {
          if (this._history[t] = {
            morpher: e,
            caller: this._queue[this._queue.length - 1]
          }, this._isDeclarative) {
            var i = this.timeline();
            i && i.play();
          }
        }
      }, {
        key: "_tryRetarget",
        value: function value(t, e, i) {
          if (this._history[t]) {
            if (!this._history[t].caller.initialised) {
              var n = this._queue.indexOf(this._history[t].caller);

              return this._queue.splice(n, 1), !1;
            }

            this._history[t].caller.retarget ? this._history[t].caller.retarget(e, i) : this._history[t].morpher.to(e), this._history[t].caller.finished = !1;
            var r = this.timeline();
            return r && r.play(), !0;
          }

          return !1;
        }
      }, {
        key: "_initialise",
        value: function value(t) {
          if (t || this._isDeclarative) for (var e = 0, i = this._queue.length; e < i; ++e) {
            var n = this._queue[e],
                r = this._isDeclarative || !n.initialised && t;
            t = !n.finished, r && t && (n.initialiser.call(this), n.initialised = !0);
          }
        }
      }, {
        key: "_run",
        value: function value(t) {
          for (var e = !0, i = 0, n = this._queue.length; i < n; ++i) {
            var r = this._queue[i],
                s = r.runner.call(this, t);
            r.finished = r.finished || !0 === s, e = e && r.finished;
          }

          return e;
        }
      }, {
        key: "addTransform",
        value: function value(t, e) {
          return this.transforms.lmultiplyO(t), this;
        }
      }, {
        key: "clearTransform",
        value: function value() {
          return this.transforms = new ma(), this;
        }
      }, {
        key: "clearTransformsFromQueue",
        value: function value() {
          this.done && this._timeline && this._timeline._runnerIds.includes(this.id) || (this._queue = this._queue.filter(function (t) {
            return !t.isTransform;
          }));
        }
      }], [{
        key: "sanitise",
        value: function value(t, e, i) {
          var n = 1,
              r = !1,
              s = 0;
          return e = e || Ta.delay, i = i || "last", "object" !== oe(t = t || Ta.duration) || t instanceof Po || (e = t.delay || e, i = t.when || i, r = t.swing || r, n = t.times || n, s = t.wait || s, t = t.duration || Ta.duration), {
            duration: t,
            delay: e,
            swing: r,
            times: n,
            wait: s,
            when: i
          };
        }
      }]), e;
    }(Sa);

    Zo.id = 0;

    var th = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ma(),
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        wr(this, t), this.transforms = e, this.id = i, this.done = n;
      }

      return $s(t, [{
        key: "clearTransformsFromQueue",
        value: function value() {}
      }]), t;
    }();

    Dr([Zo, th], {
      mergeWith: function mergeWith(t) {
        return new th(t.transforms.lmultiply(this.transforms), t.id);
      }
    });

    var eh = function eh(t, e) {
      return t.lmultiplyO(e);
    },
        ih = function ih(t) {
      return t.transforms;
    };

    function nh() {
      var t = this._transformationRunners.runners.map(ih).reduce(eh, new ma());

      this.transform(t), this._transformationRunners.merge(), 1 === this._transformationRunners.length() && (this._frameId = null);
    }

    var rh = function () {
      function t() {
        wr(this, t), this.runners = [], this.ids = [];
      }

      return $s(t, [{
        key: "add",
        value: function value(t) {
          if (!this.runners.includes(t)) {
            var e = t.id + 1;
            return this.runners.push(t), this.ids.push(e), this;
          }
        }
      }, {
        key: "getByID",
        value: function value(t) {
          return this.runners[this.ids.indexOf(t + 1)];
        }
      }, {
        key: "remove",
        value: function value(t) {
          var e = this.ids.indexOf(t + 1);
          return this.ids.splice(e, 1), this.runners.splice(e, 1), this;
        }
      }, {
        key: "merge",
        value: function value() {
          var t = this,
              e = null;
          return this.runners.forEach(function (i, n) {
            e && i.done && e.done && (!i._timeline || !i._timeline._runnerIds.includes(i.id)) && (!e._timeline || !e._timeline._runnerIds.includes(e.id)) && (t.remove(i.id), t.edit(e.id, i.mergeWith(e))), e = i;
          }), this;
        }
      }, {
        key: "edit",
        value: function value(t, e) {
          var i = this.ids.indexOf(t + 1);
          return this.ids.splice(i, 1, t + 1), this.runners.splice(i, 1, e), this;
        }
      }, {
        key: "length",
        value: function value() {
          return this.ids.length;
        }
      }, {
        key: "clearBefore",
        value: function value(t) {
          var e = this.ids.indexOf(t + 1) || 1;
          return this.ids.splice(0, e, 0), this.runners.splice(0, e, new th()).forEach(function (t) {
            return t.clearTransformsFromQueue();
          }), this;
        }
      }]), t;
    }();

    On({
      Element: {
        animate: function animate(t, e, i) {
          var n = Zo.sanitise(t, e, i),
              r = this.timeline();
          return new Zo(n.duration).loop(n).element(this).timeline(r.play()).schedule(n.delay, n.when);
        },
        delay: function delay(t, e) {
          return this.animate(0, t, e);
        },
        _clearTransformRunnersBefore: function _clearTransformRunnersBefore(t) {
          this._transformationRunners.clearBefore(t.id);
        },
        _currentTransform: function _currentTransform(t) {
          return this._transformationRunners.runners.filter(function (e) {
            return e.id <= t.id;
          }).map(ih).reduce(eh, new ma());
        },
        _addRunner: function _addRunner(t) {
          this._transformationRunners.add(t), Ho.cancelImmediate(this._frameId), this._frameId = Ho.immediate(nh.bind(this));
        },
        _prepareRunner: function _prepareRunner() {
          null == this._frameId && (this._transformationRunners = new rh().add(new th(new ma(this))));
        }
      }
    }), Dr(Zo, {
      attr: function attr(t, e) {
        return this.styleAttr("attr", t, e);
      },
      css: function css(t, e) {
        return this.styleAttr("css", t, e);
      },
      styleAttr: function styleAttr(t, e, i) {
        if ("object" === oe(e)) {
          for (var n in e) {
            this.styleAttr(t, n, e[n]);
          }

          return this;
        }

        var r = new Io(this._stepper).to(i);
        return this.queue(function () {
          r = r.from(this.element()[t](e));
        }, function (i) {
          return this.element()[t](e, r.at(i)), r.done();
        }), this;
      },
      zoom: function zoom(t, e) {
        if (this._tryRetarget("zoom", ao, e)) return this;
        var i = new Io(this._stepper).to(new Da(t));
        return this.queue(function () {
          i = i.from(this.element().zoom());
        }, function (t) {
          return this.element().zoom(i.at(t), e), i.done();
        }, function (t, n) {
          e = n, i.to(t);
        }), this._rememberMorpher("zoom", i), this;
      },
      transform: function transform(t, e, i) {
        if (e = t.relative || e, this._isDeclarative && !e && this._tryRetarget("transform", t)) return this;
        var n = ma.isMatrixLike(t);
        i = null != t.affine ? t.affine : null != i ? i : !n;
        var r,
            s,
            a,
            o,
            h,
            u = new Io(this._stepper).type(i ? Lo : ma);
        return this.queue(function () {
          s = s || this.element(), r = r || yr(t, s), h = new ma(e ? void 0 : s), s._addRunner(this), e || s._clearTransformRunnersBefore(this);
        }, function (l) {
          e || this.clearTransform();
          var c = new _a(r).transform(s._currentTransform(this)),
              f = c.x,
              d = c.y,
              p = new ma(Ko({}, t, {
            origin: [f, d]
          })),
              y = this._isDeclarative && a ? a : h;

          if (i) {
            p = p.decompose(f, d), y = y.decompose(f, d);
            var g = p.rotate,
                _ = y.rotate,
                v = [g - 360, g, g + 360],
                m = v.map(function (t) {
              return Math.abs(t - _);
            }),
                b = Math.min.apply(Math, Pn(m)),
                w = m.indexOf(b);
            p.rotate = v[w];
          }

          e && (n || (p.rotate = t.rotate || 0), this._isDeclarative && o && (y.rotate = o)), u.from(y), u.to(p);
          var x = u.at(l);
          return o = x.rotate, a = new ma(x), this.addTransform(a), s._addRunner(this), u.done();
        }, function (e) {
          (e.origin || "center").toString() !== (t.origin || "center").toString() && (r = yr(t, s)), t = Ko({}, e, {
            origin: r
          });
        }, !0), this._isDeclarative && this._rememberMorpher("transform", u), this;
      },
      x: function x(t, e) {
        return this._queueNumber("x", t);
      },
      y: function y(t) {
        return this._queueNumber("y", t);
      },
      dx: function dx() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._queueNumberDelta("x", t);
      },
      dy: function dy() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._queueNumberDelta("y", t);
      },
      dmove: function dmove(t, e) {
        return this.dx(t).dy(e);
      },
      _queueNumberDelta: function _queueNumberDelta(t, e) {
        if (e = new Da(e), this._tryRetarget(t, e)) return this;
        var i = new Io(this._stepper).to(e),
            n = null;
        return this.queue(function () {
          n = this.element()[t](), i.from(n), i.to(n + e);
        }, function (e) {
          return this.element()[t](i.at(e)), i.done();
        }, function (t) {
          i.to(n + new Da(t));
        }), this._rememberMorpher(t, i), this;
      },
      _queueObject: function _queueObject(t, e) {
        if (this._tryRetarget(t, e)) return this;
        var i = new Io(this._stepper).to(e);
        return this.queue(function () {
          i.from(this.element()[t]());
        }, function (e) {
          return this.element()[t](i.at(e)), i.done();
        }), this._rememberMorpher(t, i), this;
      },
      _queueNumber: function _queueNumber(t, e) {
        return this._queueObject(t, new Da(e));
      },
      cx: function cx(t) {
        return this._queueNumber("cx", t);
      },
      cy: function cy(t) {
        return this._queueNumber("cy", t);
      },
      move: function move(t, e) {
        return this.x(t).y(e);
      },
      center: function center(t, e) {
        return this.cx(t).cy(e);
      },
      size: function size(t, e) {
        var i;
        return t && e || (i = this._element.bbox()), t || (t = i.width / i.height * e), e || (e = i.height / i.width * t), this.width(t).height(e);
      },
      width: function width(t) {
        return this._queueNumber("width", t);
      },
      height: function height(t) {
        return this._queueNumber("height", t);
      },
      plot: function plot(t, e, i, n) {
        if (4 === arguments.length) return this.plot([t, e, i, n]);
        if (this._tryRetarget("plot", t)) return this;
        var r = new Io(this._stepper).type(this._element.MorphArray).to(t);
        return this.queue(function () {
          r.from(this._element.array());
        }, function (t) {
          return this._element.plot(r.at(t)), r.done();
        }), this._rememberMorpher("plot", r), this;
      },
      leading: function leading(t) {
        return this._queueNumber("leading", t);
      },
      viewbox: function viewbox(t, e, i, n) {
        return this._queueObject("viewbox", new xa(t, e, i, n));
      },
      update: function update(t) {
        return "object" !== oe(t) ? this.update({
          offset: arguments[0],
          color: arguments[1],
          opacity: arguments[2]
        }) : (null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", t.offset), this);
      }
    }), Dr(Zo, {
      rx: Xa,
      ry: Va,
      from: so,
      to: ao
    }), Tr(Zo, "Runner");

    var sh = function (t) {
      function e(t) {
        var i;
        return wr(this, e), (i = Js(this, Ks(e).call(this, Or("svg", t), t))).namespace(), i;
      }

      return ea(e, t), $s(e, [{
        key: "isRoot",
        value: function value() {
          return !(this.node.parentNode && this.node.parentNode instanceof br.window.SVGElement && "#document" !== this.node.parentNode.nodeName);
        }
      }, {
        key: "root",
        value: function value() {
          return this.isRoot() ? this : Zs(Ks(e.prototype), "root", this).call(this);
        }
      }, {
        key: "namespace",
        value: function value() {
          return this.isRoot() ? this.attr({
            xmlns: gr,
            version: "1.1"
          }).attr("xmlns:xlink", vr, _r).attr("xmlns:svgjs", mr, _r) : this.root().namespace();
        }
      }, {
        key: "defs",
        value: function value() {
          return this.isRoot() ? Sr(this.node.querySelector("defs")) || this.put(new io()) : this.root().defs();
        }
      }, {
        key: "parent",
        value: function value(t) {
          return this.isRoot() ? "#document" === this.node.parentNode.nodeName ? null : Sr(this.node.parentNode) : Zs(Ks(e.prototype), "parent", this).call(this, t);
        }
      }, {
        key: "clear",
        value: function value() {
          for (; this.node.hasChildNodes();) {
            this.node.removeChild(this.node.lastChild);
          }

          return delete this._defs, this;
        }
      }]), e;
    }(eo);

    On({
      Container: {
        nested: Ir(function () {
          return this.put(new sh());
        })
      }
    }), Tr(sh, "Svg", !0);

    var ah = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("symbol", t), t));
      }

      return ea(e, t), e;
    }(eo);

    On({
      Container: {
        symbol: Ir(function () {
          return this.put(new ah());
        })
      }
    }), Tr(ah, "Symbol");

    var oh = {
      __proto__: null,
      plain: function plain(t) {
        return !1 === this._build && this.clear(), this.node.appendChild(br.document.createTextNode(t)), this;
      },
      length: function length() {
        return this.node.getComputedTextLength();
      }
    },
        hh = function (t) {
      function e(t) {
        var i;
        return wr(this, e), (i = Js(this, Ks(e).call(this, Or("text", t), t))).dom.leading = new Da(1.3), i._rebuild = !0, i._build = !1, i;
      }

      return ea(e, t), $s(e, [{
        key: "x",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bbox();
          return null == t ? e.x : this.attr("x", this.attr("x") + t - e.x);
        }
      }, {
        key: "y",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bbox();
          return null == t ? e.y : this.attr("y", this.attr("y") + t - e.y);
        }
      }, {
        key: "move",
        value: function value(t, e) {
          var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.bbox();
          return this.x(t, i).y(e, i);
        }
      }, {
        key: "cx",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bbox();
          return null == t ? e.cx : this.attr("x", this.attr("x") + t - e.cx);
        }
      }, {
        key: "cy",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bbox();
          return null == t ? e.cy : this.attr("y", this.attr("y") + t - e.cy);
        }
      }, {
        key: "center",
        value: function value(t, e) {
          var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.bbox();
          return this.cx(t, i).cy(e, i);
        }
      }, {
        key: "text",
        value: function value(t) {
          if (void 0 === t) {
            var e = this.node.childNodes,
                i = 0;
            t = "";

            for (var n = 0, r = e.length; n < r; ++n) {
              "textPath" !== e[n].nodeName ? (n !== i && 3 !== e[n].nodeType && !0 === Sr(e[n]).dom.newLined && (t += "\n"), t += e[n].textContent) : 0 === n && (i = 1);
            }

            return t;
          }

          if (this.clear().build(!0), "function" == typeof t) t.call(this, this);else for (var s = 0, a = (t = t.split("\n")).length; s < a; s++) {
            this.tspan(t[s]).newLine();
          }
          return this.build(!1).rebuild();
        }
      }, {
        key: "leading",
        value: function value(t) {
          return null == t ? this.dom.leading : (this.dom.leading = new Da(t), this.rebuild());
        }
      }, {
        key: "rebuild",
        value: function value(t) {
          if ("boolean" == typeof t && (this._rebuild = t), this._rebuild) {
            var e = this,
                i = 0,
                n = this.dom.leading;
            this.each(function () {
              var t = br.window.getComputedStyle(this.node).getPropertyValue("font-size"),
                  r = n * new Da(t);
              this.dom.newLined && (this.attr("x", e.attr("x")), "\n" === this.text() ? i += r : (this.attr("dy", r + i), i = 0));
            }), this.fire("rebuild");
          }

          return this;
        }
      }, {
        key: "build",
        value: function value(t) {
          return this._build = !!t, this;
        }
      }, {
        key: "setData",
        value: function value(t) {
          return this.dom = t, this.dom.leading = new Da(t.leading || 1.3), this;
        }
      }]), e;
    }(Za);

    Dr(hh, oh), On({
      Container: {
        text: Ir(function (t) {
          return this.put(new hh()).text(t);
        }),
        plain: Ir(function (t) {
          return this.put(new hh()).plain(t);
        })
      }
    }), Tr(hh, "Text");

    var uh = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("tspan", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "text",
        value: function value(t) {
          return null == t ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t ? t.call(this, this) : this.plain(t), this);
        }
      }, {
        key: "dx",
        value: function value(t) {
          return this.attr("dx", t);
        }
      }, {
        key: "dy",
        value: function value(t) {
          return this.attr("dy", t);
        }
      }, {
        key: "x",
        value: function value(t) {
          return this.attr("x", t);
        }
      }, {
        key: "y",
        value: function value(t) {
          return this.attr("x", t);
        }
      }, {
        key: "move",
        value: function value(t, e) {
          return this.x(t).y(e);
        }
      }, {
        key: "newLine",
        value: function value() {
          var t = this.parent(hh);
          this.dom.newLined = !0;
          var e = br.window.getComputedStyle(this.node).getPropertyValue("font-size"),
              i = t.dom.leading * new Da(e);
          return this.dy(i).attr("x", t.x());
        }
      }]), e;
    }(hh);

    Dr(uh, oh), On({
      Tspan: {
        tspan: Ir(function (t) {
          var e = new uh();
          return this._build || this.clear(), this.node.appendChild(e.node), e.text(t);
        })
      }
    }), Tr(uh, "Tspan");

    var lh = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("clipPath", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "remove",
        value: function value() {
          return this.targets().forEach(function (t) {
            t.unclip();
          }), Zs(Ks(e.prototype), "remove", this).call(this);
        }
      }, {
        key: "targets",
        value: function value() {
          return Oa('svg [clip-path*="' + this.id() + '"]');
        }
      }]), e;
    }(eo);

    On({
      Container: {
        clip: Ir(function () {
          return this.defs().put(new lh());
        })
      },
      Element: {
        clipWith: function clipWith(t) {
          var e = t instanceof lh ? t : this.parent().clip().add(t);
          return this.attr("clip-path", 'url("#' + e.id() + '")');
        },
        unclip: function unclip() {
          return this.attr("clip-path", null);
        },
        clipper: function clipper() {
          return this.reference("clip-path");
        }
      }
    }), Tr(lh, "ClipPath");

    var ch = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("foreignObject", t), t));
      }

      return ea(e, t), e;
    }(La);

    On({
      Container: {
        foreignObject: Ir(function (t, e) {
          return this.put(new ch()).size(t, e);
        })
      }
    }), Tr(ch, "ForeignObject");

    var fh = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("g", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "x",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bbox();
          return null == t ? e.x : this.move(t, e.y, e);
        }
      }, {
        key: "y",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bbox();
          return null == t ? e.y : this.move(e.x, t, e);
        }
      }, {
        key: "move",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.bbox(),
              n = t - i.x,
              r = e - i.y;
          return this.dmove(n, r);
        }
      }, {
        key: "dx",
        value: function value(t) {
          return this.dmove(t, 0);
        }
      }, {
        key: "dy",
        value: function value(t) {
          return this.dmove(0, t);
        }
      }, {
        key: "dmove",
        value: function value(t, e) {
          return this.children().forEach(function (i, n) {
            var r = i.bbox(),
                s = new ma(i),
                a = s.translate(t, e).transform(s.inverse()),
                o = new _a(r.x, r.y).transform(a);
            i.move(o.x, o.y);
          }), this;
        }
      }, {
        key: "width",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bbox();
          return null == t ? e.width : this.size(t, e.height, e);
        }
      }, {
        key: "height",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bbox();
          return null == t ? e.height : this.size(e.width, t, e);
        }
      }, {
        key: "size",
        value: function value(t, e) {
          var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.bbox(),
              n = pr(this, t, e, i),
              r = n.width / i.width,
              s = n.height / i.height;
          return this.children().forEach(function (t, e) {
            var n = new _a(i).transform(new ma(t).inverse());
            t.scale(r, s, n.x, n.y);
          }), this;
        }
      }]), e;
    }(eo);

    On({
      Container: {
        group: Ir(function () {
          return this.put(new fh());
        })
      }
    }), Tr(fh, "G");

    var dh = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("a", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "to",
        value: function value(t) {
          return this.attr("href", t, vr);
        }
      }, {
        key: "target",
        value: function value(t) {
          return this.attr("target", t);
        }
      }]), e;
    }(eo);

    On({
      Container: {
        link: Ir(function (t) {
          return this.put(new dh()).to(t);
        })
      },
      Element: {
        linkTo: function linkTo(t) {
          var e = new dh();
          return "function" == typeof t ? t.call(e, e) : e.to(t), this.parent().put(e).put(this);
        }
      }
    }), Tr(dh, "A");

    var ph = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("mask", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "remove",
        value: function value() {
          return this.targets().forEach(function (t) {
            t.unmask();
          }), Zs(Ks(e.prototype), "remove", this).call(this);
        }
      }, {
        key: "targets",
        value: function value() {
          return Oa('svg [mask*="' + this.id() + '"]');
        }
      }]), e;
    }(eo);

    function yh(t, e) {
      var i = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), i.push.apply(i, n);
      }

      return i;
    }

    function gh(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? yh(i, !0).forEach(function (e) {
          $a(t, e, i[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : yh(i).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
        });
      }

      return t;
    }

    On({
      Container: {
        mask: Ir(function () {
          return this.defs().put(new ph());
        })
      },
      Element: {
        maskWith: function maskWith(t) {
          var e = t instanceof ph ? t : this.parent().mask().add(t);
          return this.attr("mask", 'url("#' + e.id() + '")');
        },
        unmask: function unmask() {
          return this.attr("mask", null);
        },
        masker: function masker() {
          return this.reference("mask");
        }
      }
    }), Tr(ph, "Mask");

    var _h = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("style", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "addText",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return this.node.textContent += t, this;
        }
      }, {
        key: "font",
        value: function value(t, e) {
          var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return this.rule("@font-face", gh({
            fontFamily: t,
            src: e
          }, i));
        }
      }, {
        key: "rule",
        value: function value(t, e) {
          return this.addText(function (t, e) {
            if (!t) return "";
            if (!e) return t;
            var i = t + "{";

            for (var n in e) {
              i += fr(n) + ":" + e[n] + ";";
            }

            return i += "}";
          }(t, e));
        }
      }]), e;
    }(La);

    On("Dom", {
      style: Ir(function (t, e) {
        return this.put(new _h()).rule(t, e);
      }),
      fontface: Ir(function (t, e, i) {
        return this.put(new _h()).font(t, e, i);
      })
    }), Tr(_h, "Style");

    var vh = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("textPath", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "array",
        value: function value() {
          var t = this.track();
          return t ? t.array() : null;
        }
      }, {
        key: "plot",
        value: function value(t) {
          var e = this.track(),
              i = null;
          return e && (i = e.plot(t)), null == t ? i : this;
        }
      }, {
        key: "track",
        value: function value() {
          return this.reference("href");
        }
      }]), e;
    }(hh);

    On({
      Container: {
        textPath: Ir(function (t, e) {
          return t instanceof hh || (t = this.text(t)), t.path(e);
        })
      },
      Text: {
        path: Ir(function (t) {
          var e,
              i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              n = new vh();
          if (t instanceof Fo || (t = this.defs().path(t)), n.attr("href", "#" + t, vr), i) for (; e = this.node.firstChild;) {
            n.node.appendChild(e);
          }
          return this.put(n);
        }),
        textPath: function textPath() {
          return this.findOne("textPath");
        }
      },
      Path: {
        text: Ir(function (t) {
          return t instanceof hh || (t = new hh().addTo(this.parent()).text(t)), t.path(this);
        }),
        targets: function targets() {
          return Oa('svg [href*="' + this.id() + '"]');
        }
      }
    }), vh.prototype.MorphArray = So, Tr(vh, "TextPath");

    var mh = function (t) {
      function e(t) {
        return wr(this, e), Js(this, Ks(e).call(this, Or("use", t), t));
      }

      return ea(e, t), $s(e, [{
        key: "element",
        value: function value(t, e) {
          return this.attr("href", (e || "") + "#" + t, vr);
        }
      }]), e;
    }(Za);

    On({
      Container: {
        use: Ir(function (t, e) {
          return this.put(new mh()).element(t, e);
        })
      }
    }), Tr(mh, "Use");
    var bh = Mr;
    Dr([sh, ah, co, uo, go], Sn("viewbox")), Dr([yo, $o, qo, Fo], Sn("marker")), Dr(hh, Sn("Text")), Dr(Fo, Sn("Path")), Dr(io, Sn("Defs")), Dr([hh, uh], Sn("Tspan")), Dr([Go, no, to, ho], Sn("radius")), Dr(Sa, Sn("EventTarget")), Dr(Na, Sn("Dom")), Dr(La, Sn("Element")), Dr(Za, Sn("Shape")), Dr(eo, Sn("Container")), Dr(Zo, Sn("Runner")), Aa.extend(Pn(new Set(Mn))), function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      Bo.push.apply(Bo, Pn([].concat(t)));
    }([Da, Us, xa, ma, Ea, fo, So]), Dr(Bo, {
      to: function to(t) {
        return new Io().type(this.constructor).from(this.valueOf()).to(t);
      },
      fromArray: function fromArray(t) {
        return this.init(t), this;
      }
    });
  }).call(this, i(1));
}, function (t, e) {
  var i;

  i = function () {
    return this;
  }();

  try {
    i = i || new Function("return this")();
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (i = window);
  }

  t.exports = i;
}, function (t, e, i) {
  "use strict";

  i.r(e), i.d(e, "PiGeometry", function () {
    return w;
  });
  var n = i(0);

  var r = function r(t) {
    return t.changedTouches && (t = t.changedTouches[0]), {
      x: t.clientX,
      y: t.clientY
    };
  };

  var s = /*#__PURE__*/function () {
    function s(t) {
      _classCallCheck(this, s);

      t.remember("_draggable", this), this.el = t, this.drag = this.drag.bind(this), this.startDrag = this.startDrag.bind(this), this.endDrag = this.endDrag.bind(this);
    }

    _createClass(s, [{
      key: "init",
      value: function init(t) {
        t ? (this.el.on("mousedown.drag", this.startDrag), this.el.on("touchstart.drag", this.startDrag)) : (this.el.off("mousedown.drag"), this.el.off("touchstart.drag"));
      }
    }, {
      key: "startDrag",
      value: function startDrag(t) {
        var e = !t.type.indexOf("mouse");
        if (e && 1 !== (t.which || t.buttons)) return;
        if (this.el.dispatch("beforedrag", {
          event: t,
          handler: this
        }).defaultPrevented) return;
        t.preventDefault(), t.stopPropagation(), this.init(!1), this.box = this.el.bbox(), this.lastClick = this.el.point(r(t));

        var i = (e ? "mousemove" : "touchmove") + ".drag",
            _s2 = (e ? "mouseup" : "touchcancel.drag touchend") + ".drag";

        Object(n.g)(window, i, this.drag), Object(n.g)(window, _s2, this.endDrag), this.el.fire("dragstart", {
          event: t,
          handler: this,
          box: this.box
        });
      }
    }, {
      key: "drag",
      value: function drag(t) {
        var e = this.box,
            i = this.lastClick,
            _s3 = this.el.point(r(t)),
            a = e.x + (_s3.x - i.x),
            o = e.y + (_s3.y - i.y),
            h = new n.a(a, o, e.w, e.h);

        if (!this.el.dispatch("dragmove", {
          event: t,
          handler: this,
          box: h
        }).defaultPrevented) return this.move(a, o), h;
      }
    }, {
      key: "move",
      value: function move(t, e) {
        "svg" === this.el.type ? n.c.prototype.move.call(this.el, t, e) : this.el.move(t, e);
      }
    }, {
      key: "endDrag",
      value: function endDrag(t) {
        var e = this.drag(t);
        this.el.fire("dragend", {
          event: t,
          handler: this,
          box: e
        }), Object(n.f)(window, "mousemove.drag"), Object(n.f)(window, "touchmove.drag"), Object(n.f)(window, "mouseup.drag"), Object(n.f)(window, "touchend.drag"), this.init(!0);
      }
    }]);

    return s;
  }();

  Object(n.e)(n.b, {
    draggable: function draggable() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      return (this.remember("_draggable") || new s(this)).init(t), this;
    }
  });

  var a = /*#__PURE__*/function () {
    function a(t) {
      _classCallCheck(this, a);

      return this._geometryPi = t, this._grid = t.mainGrid, this._geometryPi.addPoint(this._grid.minX + .5, 0, "OxMin").setVirtual(), this._geometryPi.addPoint(this._grid.maxX - .5, 0, "OxMax").setVirtual(), this._geometryPi.addPoint(0, this._grid.minY + .5, "OyMin").setVirtual(), this._geometryPi.addPoint(0, this._grid.maxY - .5, "OyMax").setVirtual(), this._xAxis = this._geometryPi.vector("OxMin", "OxMax"), this._yAxis = this._geometryPi.vector("OyMin", "OyMax"), this;
    }

    _createClass(a, [{
      key: "show",
      value: function show() {
        return this._xAxis.show(), this._yAxis.show(), this;
      }
    }]);

    return a;
  }();

  var o = /*#__PURE__*/function () {
    function o(t) {
      var _this = this;

      _classCallCheck(this, o);

      return this.triangle = function (t) {
        var e = _this._geometryPi.width,
            i = _this._geometryPi.height,
            n = t * Math.sin(Math.PI / 3),
            r = 0;
        _this._gridData.type = 3, _this._gridData.width = +t, _this._gridData.height = +n, _this._intersections = [];

        for (var _s4 = -t; _s4 < e; _s4 += t) {
          r = 0;

          for (var _e4 = i; _e4 >= -n; _e4 -= n) {
            _this._group.add(_this._geometryPi.draw.polygon([_s4 + r % 2 * t / 2, _e4, _s4 + t + r % 2 * t / 2, _e4, _s4 + t / 2 + r % 2 * t / 2, _e4 + n])), _this._intersections.push({
              x: _s4 + r % 2 * t / 2,
              y: _e4
            }), _this._intersections.push({
              x: _s4 + t + r % 2 * t / 2,
              y: _e4
            }), r++;
          }
        }

        return _this._group.stroke({
          color: "green",
          width: 1
        }).fill("transparent"), _this;
      }, this.hexagonal = function (t) {
        var e = _this._geometryPi.width,
            i = _this._geometryPi.height,
            n = .5 * t,
            r = t * Math.sin(Math.PI / 3);
        _this._gridData.type = 6, _this._gridData.width = +t, _this._intersections = [];

        for (var _s5 = 0; _s5 < e; _s5 += 3 * t) {
          for (var _e5 = i; _e5 >= -r; _e5 -= 2 * r) {
            _this._group.add(_this._geometryPi.draw.line(_s5, _e5, _s5 + t, _e5)), _this._group.add(_this._geometryPi.draw.line(_s5, _e5, _s5 - n, _e5 - r)), _this._group.add(_this._geometryPi.draw.line(_s5 - n, _e5 - r, _s5, _e5 - 2 * r)), _this._group.add(_this._geometryPi.draw.line(_s5 + t, _e5, _s5 + t + n, _e5 - r)), _this._group.add(_this._geometryPi.draw.line(_s5 + t + n, _e5 - r, _s5 + t, _e5 - 2 * r)), _this._group.add(_this._geometryPi.draw.line(_s5 + t + n, _e5 - r, _s5 + 2 * t + n, _e5 - r)), _this._intersections.push({
              x: _s5,
              y: _e5
            }), _this._intersections.push({
              x: _s5 + t,
              y: _e5
            }), _this._intersections.push({
              x: _s5 + t + n,
              y: _e5 - r
            }), _this._intersections.push({
              x: _s5 + t,
              y: _e5 - 2 * r
            }), _this._intersections.push({
              x: _s5,
              y: _e5 - 2 * r
            }), _this._intersections.push({
              x: _s5 - n,
              y: _e5 - r
            });
          }
        }

        return _this._group.stroke({
          color: "green",
          width: 1
        }).fill("transparent"), _this;
      }, this.orthographic = function (t, e) {
        var i = _this._geometryPi.width,
            n = _this._geometryPi.height;
        void 0 === e && (e = +t), _this._gridData.type = 4, _this._gridData.width = +t, _this._gridData.height = +e;

        for (var _e6 = 0; _e6 <= i; _e6 += t) {
          _this._group.add(_this._geometryPi.draw.line(_e6, 0, _e6, n));
        }

        for (var _t2 = n; _t2 >= 0; _t2 -= e) {
          _this._group.add(_this._geometryPi.draw.line(0, _t2, i, _t2));
        }

        _this._intersections = [];

        for (var _r2 = 0; _r2 <= i; _r2 += t) {
          for (var _t3 = n; _t3 >= 0; _t3 -= e) {
            _this._intersections.push({
              x: _r2,
              y: _t3
            });
          }
        }

        return _this._group.stroke({
          color: "red",
          width: 1
        }), _this;
      }, this.getOrigin = function () {
        return void 0 === _this._origin ? {
          x: 0,
          y: _this._geometryPi.height
        } : _this._origin;
      }, this.setOrigin = function (t, e) {
        return _this._origin = _this.getPoint({
          x: t,
          y: e
        }, {
          x: 0,
          y: _this._geometryPi.height
        }), _this;
      }, this.getPoint = function (t, e) {
        return void 0 === e && (e = _this.getOrigin()), 3 === _this._gridData.type ? _this._getPointTriangle(t, e) : 4 === _this._gridData.type ? _this._getPointOrtho(t, e) : 6 === _this._gridData.type ? _this._getPointHex(t, e) : {
          x: 0,
          y: 0
        };
      }, this._getPointTriangle = function (t, e) {
        return {
          x: e.x + t.x * _this._gridData.width + Math.abs(t.y) % 2 * _this._gridData.width / 2,
          y: e.y - t.y * _this._gridData.height
        };
      }, this._getPointOrtho = function (t, e) {
        return {
          x: e.x + t.x * _this._gridData.width,
          y: e.y - t.y * _this._gridData.height
        };
      }, this._getPointHex = function (t, e) {
        return {
          x: e.x + t.x,
          y: e.x + t.x
        };
      }, this.getPointCoordinate = function (t, e) {
        if (4 === _this._gridData.type) {
          var _i2 = _this.getOrigin();

          return {
            x: (t - _i2.x) / _this._gridData.width,
            y: -(e - _i2.y) / _this._gridData.height
          };
        }

        return console.log("Getting coordinates does not work for alternatives grids !"), {
          x: 0,
          y: 0
        };
      }, this.nearestPoint = function (t) {
        var e = !1,
            i = 0,
            n = {
          x: +t.x,
          y: +t.y
        };

        var _iterator = _createForOfIteratorHelper(_this._intersections),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _r3 = _step.value;
            i = Math.pow(_r3.x - t.x, 2) + Math.pow(_r3.y - t.y, 2), (!1 === e || i < e) && (n = {
              x: +_r3.x,
              y: +_r3.y
            }, e = +i);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return n;
      }, this._geometryPi = t, this._group = this._geometryPi.draw.group(), this._gridData = {
        width: 0,
        height: 0,
        type: 0
      }, this._axis = null, this;
    }

    _createClass(o, [{
      key: "showIntersections",
      value: function showIntersections() {
        this._intersectionsPoints = this._geometryPi.draw.group();

        var _iterator2 = _createForOfIteratorHelper(this._intersections),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t4 = _step2.value;

            this._intersectionsPoints.add(this._geometryPi.draw.circle(3).cx(_t4.x).cy(_t4.y));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return this;
      }
    }, {
      key: "hideIntersections",
      value: function hideIntersections() {
        return this._intersectionsPoints.remove(), this;
      }
    }, {
      key: "showAxis",
      value: function showAxis() {
        return null === this._axis && (this._axis = new a(this._geometryPi)), this._axis.show(), this;
      }
    }, {
      key: "show",
      value: function show(t) {
        return void 0 === t || !0 === t ? this._group.show() : this.hide(), this;
      }
    }, {
      key: "hide",
      value: function hide() {
        return this._group.hide(), this;
      }
    }, {
      key: "color",
      value: function color(t) {
        return this._group.stroke(t), this;
      }
    }, {
      key: "width",
      value: function width(t) {
        return this._group.stroke({
          width: t
        }), this;
      }
    }, {
      key: "dash",
      value: function dash(t) {
        return "number" == typeof t ? this._group.stroke({
          dasharray: "".concat(t, " ").concat(t)
        }) : this._group.stroke({
          dasharray: t
        }), this;
      }
    }, {
      key: "intersections",
      get: function get() {
        return this._intersections;
      }
    }, {
      key: "grid",
      get: function get() {
        return this._group;
      }
    }, {
      key: "stroke",
      set: function set(t) {
        this._group.stroke(t);
      }
    }, {
      key: "maxX",
      get: function get() {
        return (this._geometryPi.width - this._origin.x) / this._gridData.width;
      }
    }, {
      key: "minX",
      get: function get() {
        return -this._origin.x / this._gridData.width;
      }
    }, {
      key: "maxY",
      get: function get() {
        return this._origin.y / this._gridData.height;
      }
    }, {
      key: "minY",
      get: function get() {
        return -(this._geometryPi.height - this._origin.y) / this._gridData.height;
      }
    }, {
      key: "gridX",
      get: function get() {
        return this._gridData.width;
      }
    }, {
      key: "gridY",
      get: function get() {
        return this._gridData.height;
      }
    }, {
      key: "gridType",
      get: function get() {
        return this._gridData.type;
      }
    }]);

    return o;
  }();

  var h = /*#__PURE__*/function () {
    function h(t, e, i) {
      _classCallCheck(this, h);

      return this._geometryPi = t, void 0 !== i && (this._refFigure = i), this._text = e, this._textPoint = null, this._textDistance = null, this._textFunction = null, this._textFunctionArgs = {}, this._position = {
        horizontal: "left",
        vertical: "bottom"
      }, this._offset = {
        dx: 0,
        dy: 0
      }, this._distance = 15, this._shape = this._geometryPi.draw.text(""), this._shape.leading(0), this._shape.font({
        size: this._geometryPi.defaults.font.size
      }), null !== this._geometryPi.defaults.font.family && this._shape.font({
        family: this._geometryPi.defaults.font.family
      }), this.updateText(), this;
    }

    _createClass(h, [{
      key: "update",
      value: function update() {
        return this.move(this._x, this._y), this;
      }
    }, {
      key: "updateText",
      value: function updateText() {
        var t = null === this._textFunction ? this._text : this._textFunction(this, this._textFunctionArgs),
            e = [],
            i = "",
            n = 0,
            r = !1,
            s = !1;

        var _iterator3 = _createForOfIteratorHelper(t),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _a2 = _step3.value;
            "_" !== _a2 ? "\\" !== _a2 ? " " !== _a2 ? i += _a2 : (e.push({
              text: i,
              dy: +n,
              indices: !0 === r,
              symbol: !0 === s
            }), n = r ? -5 : 0, s = !1, r = !1, i = "") : (e.push({
              text: i,
              dy: +n,
              indices: !0 === r,
              symbol: !0 === s
            }), s = !0, i = "") : (e.push({
              text: i,
              dy: +n,
              indices: !0 === r,
              symbol: !0 === s
            }), r = !0, i = "", n = 5);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        e.push({
          text: i,
          dy: +n,
          indices: !0 === r,
          symbol: !0 === s
        }), this._shape.text(""), this._shape.build(!0);

        for (var _i3 = 0, _e7 = e; _i3 < _e7.length; _i3++) {
          var _t5 = _e7[_i3];

          var _e8 = this._shape.tspan(_t5.symbol ? this.greekLetter(_t5.text) : _t5.text).dy(_t5.dy).font("font-size", _t5.indices ? "110%" : "150%");

          _t5.symbol && _e8.addClass("greek");
        }

        this._shape.build(!1);
      }
    }, {
      key: "greekLetter",
      value: function greekLetter(t) {
        switch (t) {
          case "a":
            return "α";

          case "b":
            return "β";

          case "c":
            return "γ";

          case "d":
            return "δ";

          case "e":
            return "ε";

          case "z":
            return "ζ";

          case "j":
            return "η";

          case "h":
            return "θ";

          case "i":
            return "ι";

          case "k":
            return "κ";

          case "l":
            return "λ";

          case "m":
            return "μ";

          case "n":
            return "ν";

          case "x":
            return "ξ";

          case "o":
            return "ο";

          case "p":
            return "π";

          case "r":
            return "ρ";

          case "s":
            return "σ";

          case "t":
            return "τ";

          case "u":
            return "υ";

          case "f":
            return "φ";

          case "q":
            return "χ";

          case "y":
            return "ψ";

          case "w":
            return "ω";
        }

        return t;
      }
    }, {
      key: "appendCoordinates",
      value: function appendCoordinates() {
        if (null !== this._textPoint) {
          var _t6 = this._textPoint.coord;
          this._shape.build(!0), this._shape.tspan("(".concat((_t6.x * this._textScale).toFixed(this._textRounding), ";").concat((_t6.y * this._textScale).toFixed(this._textRounding), ")")), this._shape.build(!1);
        }
      }
    }, {
      key: "appendDistance",
      value: function appendDistance() {
        if (null !== this._textDistance) {
          var _t7 = this._textDistance[0].coord,
              _e9 = this._textDistance[1].coord,
              _i4 = Math.sqrt(Math.pow(_e9.x - _t7.x, 2) + Math.pow(_e9.y - _t7.y, 2));

          this._shape.build(!0), this._shape.tspan((_i4 * this._textScale).toFixed(this._textRounding)), this._shape.build(!1);
        }
      }
    }, {
      key: "move",
      value: function move(t, e) {
        this._x = t, this._y = e, null === this._textPoint && null === this._textDistance && null === this._textFunction || this.updateText();
        var i = +t,
            n = +e;
        return "left" === this._position.horizontal ? i = i - this.w / 2 - this._distance : "right" === this._position.horizontal && (i = i + this.w / 2 + this._distance), "top" === this._position.vertical ? n = n - this.h / 2 - this._distance : "bottom" === this._position.vertical && (n = n + this.h / 2 + this._distance), i += this._offset.dx, n += this._offset.dy, this.shape.cx(i).cy(n), this;
      }
    }, {
      key: "show",
      value: function show() {
        return this.shape.show(), this;
      }
    }, {
      key: "hide",
      value: function hide() {
        return this.shape.hide(), this;
      }
    }, {
      key: "top",
      value: function top() {
        return this._position.vertical = "top", this.move(this._x, this._y), this;
      }
    }, {
      key: "bottom",
      value: function bottom() {
        return this._position.vertical = "bottom", this.move(this._x, this._y), this;
      }
    }, {
      key: "center",
      value: function center() {
        return this._position.vertical = "center", this.move(this._x, this._y), this;
      }
    }, {
      key: "left",
      value: function left() {
        return this._position.horizontal = "left", this.move(this._x, this._y), this;
      }
    }, {
      key: "right",
      value: function right() {
        return this._position.horizontal = "right", this.move(this._x, this._y), this;
      }
    }, {
      key: "middle",
      value: function middle() {
        return this._position.horizontal = "middle", this.move(this._x, this._y), this;
      }
    }, {
      key: "resetPos",
      value: function resetPos() {
        return this._offset.dx = 0, this._offset.dy = 0, this._position.horizontal = "middle", this._position.vertical = "center", this.move(this._x, this._y), this;
      }
    }, {
      key: "distance",
      value: function distance(t) {
        return this._distance = t, this.move(this._x, this._y), this;
      }
    }, {
      key: "font",
      value: function font(t) {
        return this._shape.font("family", t), this.update(), this;
      }
    }, {
      key: "fontSize",
      value: function fontSize(t) {
        return this._shape.font("size", t), this.update(), this;
      }
    }, {
      key: "offset",
      value: function offset(t, e) {
        return this._offset.dx = +t, this._offset.dy = +e, this.update(), this;
      }
    }, {
      key: "polar",
      value: function polar(t, e) {
        return this._offset.dx = Math.cos(e * Math.PI / 180) * t, this._offset.dy = -Math.sin(e * Math.PI / 180) * t, this.update(), this;
      }
    }, {
      key: "showCoordinates",
      value: function showCoordinates(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        return this._textPoint = t, this._textRounding = e, this._textScale = i, this.update(), this;
      }
    }, {
      key: "showDistance",
      value: function showDistance(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        return this._textDistance = [t, e], this._textRounding = i, this._textScale = n, this.update(), this;
      }
    }, {
      key: "showTextFunction",
      value: function showTextFunction(t, e) {
        return this._textFunction = t, this._textFunctionArgs = e, this.update(), this;
      }
    }, {
      key: "shape",
      get: function get() {
        return this._shape;
      }
    }, {
      key: "w",
      get: function get() {
        return this.shape.length();
      }
    }, {
      key: "h",
      get: function get() {
        return this.shape.bbox().h;
      }
    }, {
      key: "text",
      get: function get() {
        return this._text;
      },
      set: function set(t) {
        this._text = t;
      }
    }, {
      key: "figure",
      get: function get() {
        return this._refFigure;
      }
    }, {
      key: "labelDistance",
      get: function get() {
        return this._distance;
      }
    }]);

    return h;
  }();

  var u = /*#__PURE__*/function () {
    function u(t, e) {
      _classCallCheck(this, u);

      return this._geometryPi = t, this._name = e, this._label = new h(this._geometryPi, this.name, this).hide(), this._createMarker(10), this._isPoint = !1, this._isVirtual = !1, this;
    }

    _createClass(u, [{
      key: "_createMarker",
      value: function _createMarker(t) {
        this._marker = {
          start: null,
          end: null
        }, this._marker.start = this.geometryPi.draw.marker(t, t, function (e) {
          e.path("M1,0 L1,".concat(t, ", L").concat(1.2 * t, ",").concat(t / 2, " L1,0z")).rotate(180);
        }).ref(0, t / 2), this._marker.end = this.geometryPi.draw.marker(t, t, function (e) {
          e.path("M1,0 L1,".concat(t, ", L").concat(1.2 * t, ",").concat(t / 2, " L1,0z"));
        }).ref(t, t / 2);
      }
    }, {
      key: "draggable",
      value: function draggable() {
        return this;
      }
    }, {
      key: "update",
      value: function update() {
        return this.moveLabel(), this;
      }
    }, {
      key: "distance",
      value: function distance(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
    }, {
      key: "makeDraggable",
      value: function makeDraggable() {
        return this.geometryPi.touchDisable(), this;
      }
    }, {
      key: "moveLabel",
      value: function moveLabel() {
        return this;
      }
    }, {
      key: "show",
      value: function show() {
        return this.shape.show(), this;
      }
    }, {
      key: "hide",
      value: function hide() {
        return this.shape.hide(), this.hideLabel(), this;
      }
    }, {
      key: "showLabel",
      value: function showLabel(t) {
        return this.isVirtual ? this : !1 === t ? this.hideLabel() : (this.label.show(), this.moveLabel(), this);
      }
    }, {
      key: "hideLabel",
      value: function hideLabel() {
        return null !== this._label && this._label.hide(), this;
      }
    }, {
      key: "showShape",
      value: function showShape(t) {
        return !1 === t ? this.hideShape() : (this.shape.show(), this);
      }
    }, {
      key: "hideShape",
      value: function hideShape() {
        return this.shape.hide(), this;
      }
    }, {
      key: "labelText",
      value: function labelText(t, e) {
        return this._label.text = t, this._label.updateText(), !0 === e && this.showLabel(), this.update(), this;
      }
    }, {
      key: "labelFont",
      value: function labelFont(t) {
        return this._label.font(t), this;
      }
    }, {
      key: "labelFontSize",
      value: function labelFontSize(t) {
        return this._label.fontSize(t), this;
      }
    }, {
      key: "labelPos",
      value: function labelPos(t, e) {
        return "string" == typeof t && (-1 !== t.indexOf("l") && this.labelLeft(), -1 !== t.indexOf("m") && this.labelMiddle(), -1 !== t.indexOf("r") && this.labelRight(), -1 !== t.indexOf("t") && this.labelTop(), -1 !== t.indexOf("c") && this.labelCenter(), -1 !== t.indexOf("b") && this.labelBottom()), isNaN(Number(t)) || this.label.distance(Number(t)), null === e || isNaN(Number(e)) || this.label.distance(Number(e)), this;
      }
    }, {
      key: "labelTop",
      value: function labelTop() {
        return this._label.top(), this;
      }
    }, {
      key: "labelBottom",
      value: function labelBottom() {
        return this._label.bottom(), this;
      }
    }, {
      key: "labelCenter",
      value: function labelCenter() {
        return this._label.center(), this;
      }
    }, {
      key: "labelLeft",
      value: function labelLeft() {
        return this._label.left(), this;
      }
    }, {
      key: "labelRight",
      value: function labelRight() {
        return this._label.right(), this;
      }
    }, {
      key: "labelMiddle",
      value: function labelMiddle() {
        return this._label.middle(), this;
      }
    }, {
      key: "labelDistance",
      value: function labelDistance(t) {
        return this._label.distance(t), this;
      }
    }, {
      key: "labelReset",
      value: function labelReset() {
        return this._label.resetPos(), this;
      }
    }, {
      key: "labelOffset",
      value: function labelOffset(t, e) {
        return this._label.offset(t, e), this;
      }
    }, {
      key: "labelPolar",
      value: function labelPolar(t, e) {
        return this._label.polar(t, e), this;
      }
    }, {
      key: "labelFunction",
      value: function labelFunction(t, e) {
        return this._label.showTextFunction(t, e), this;
      }
    }, {
      key: "setVirtual",
      value: function setVirtual(t) {
        return this.isVirtual = void 0 === t || !0 === t, this.isVirtual ? this.hide() : this.show(), this;
      }
    }, {
      key: "color",
      value: function color(t) {
        return this.shape.stroke(t), this._marker.start.stroke(t).fill(t), this._marker.end.stroke(t).fill(t), this;
      }
    }, {
      key: "width",
      value: function width(t) {
        return this.shape.stroke({
          width: t
        }), this;
      }
    }, {
      key: "dash",
      value: function dash(t) {
        return "number" == typeof t ? this.shape.stroke({
          dasharray: "".concat(t, " ").concat(t)
        }) : this.shape.stroke({
          dasharray: t
        }), this;
      }
    }, {
      key: "nofill",
      value: function nofill() {
        return this.shape.fill("None"), this;
      }
    }, {
      key: "fill",
      value: function fill(t) {
        return this.shape.fill(t), this;
      }
    }, {
      key: "geometryPi",
      get: function get() {
        return this._geometryPi;
      }
    }, {
      key: "name",
      get: function get() {
        return this._name;
      },
      set: function set(t) {
        this._name = t;
      }
    }, {
      key: "shape",
      get: function get() {
        return this._shape;
      },
      set: function set(t) {
        this._shape = t;
      }
    }, {
      key: "markerEnd",
      get: function get() {
        return this._marker.end;
      }
    }, {
      key: "markerStart",
      get: function get() {
        return this._marker.start;
      }
    }, {
      key: "label",
      get: function get() {
        return this._label;
      }
    }, {
      key: "isPoint",
      get: function get() {
        return this._isPoint;
      },
      set: function set(t) {
        this._isPoint = t;
      }
    }, {
      key: "isVirtual",
      get: function get() {
        return this._isVirtual;
      },
      set: function set(t) {
        this._isVirtual = t;
      }
    }]);

    return u;
  }();

  var l = /*#__PURE__*/function (_u) {
    _inherits(l, _u);

    var _super = _createSuper(l);

    function l(t, e, i, n, r) {
      var _this2;

      _classCallCheck(this, l);

      return _possibleConstructorReturn(_this2, (_this2 = _super.call(this, t, e), _this2._p1 = i, _this2._p2 = n, _this2._conditionRule = {
        rule: null,
        through: null,
        k: null
      }, void 0 !== r && (_this2._conditionRule.rule = "rule" in r ? r.rule : "", _this2._conditionRule.through = "through" in r ? r.through : null, _this2._conditionRule.k = "k" in r ? r.k : ""), _this2.shape = t.draw.line(0, 0, 0, 0).stroke("black"), _this2.update(), _assertThisInitialized(_this2)));
    }

    _createClass(l, [{
      key: "_getCoordinates",
      value: function _getCoordinates() {
        var t,
            e,
            i = this.geometryPi.getPoint(this._p1),
            n = this.geometryPi.getPoint(this._p2);
        return this._calculateSlope(), "p" === this._conditionRule.rule && (this._calculateSlopePerpendicular(), null !== this._conditionRule.through && (i = this._conditionRule.through)), "" === this._conditionRule.k && (this.stopP2 = !1), t = this._stopP1 ? i : this.slope !== 1 / 0 ? this._getLinePosAtX(i.x < n.x ? 0 : this.geometryPi.width, i) : {
          x: i.x,
          y: 0
        }, e = this._stopP2 ? n : this.slope !== 1 / 0 ? this._getLinePosAtX(i.x < n.x ? this.geometryPi.width : 0, i) : {
          x: i.x,
          y: this.geometryPi.height
        }, {
          x1: t.x,
          y1: t.y,
          x2: e.x,
          y2: e.y
        };
      }
    }, {
      key: "_getLinePosAtX",
      value: function _getLinePosAtX(t, e) {
        return this.slope !== 1 / 0 ? {
          x: t,
          y: t * this.slope + (e.y - e.x * this.slope)
        } : {
          x: t,
          y: 0
        };
      }
    }, {
      key: "_calculateSlope",
      value: function _calculateSlope() {
        var t,
            e,
            i = this.geometryPi.getPoint(this._p1),
            n = this.geometryPi.getPoint(this._p2);
        return t = n.x - i.x, e = n.y - i.y, 0 === t && 0 === e && (this._slope = null), 0 === t && (this._slope = 1 / 0), 0 === e && (this._slope = 0), this._slope = e / t, this._slope;
      }
    }, {
      key: "_calculateSlopePerpendicular",
      value: function _calculateSlopePerpendicular() {
        return 0 === this._slope ? this._slope = 1 / 0 : this._slope === 1 / 0 ? this._slope = 0 : this._slope = -1 / this._slope, this._slope;
      }
    }, {
      key: "update",
      value: function update() {
        var _this$_getCoordinates = this._getCoordinates(),
            t = _this$_getCoordinates.x1,
            e = _this$_getCoordinates.y1,
            i = _this$_getCoordinates.x2,
            n = _this$_getCoordinates.y2;

        return this.shape.plot(t, e, i, n), this._arrowEnd && this.shape.marker("end", this.markerEnd), this._arrowStart && this.shape.marker("start", this.markerStart), _get(_getPrototypeOf(l.prototype), "update", this).call(this), this;
      }
    }, {
      key: "segment",
      value: function segment() {
        return this._stopP1 = !0, this._stopP2 = !0, this._arrowEnd = !1, this._arrowStart = !1, this.update(), this;
      }
    }, {
      key: "vector",
      value: function vector() {
        return this._stopP1 = !0, this._stopP2 = !0, this._arrowEnd = !0, this._arrowStart = !1, this.update(), this;
      }
    }, {
      key: "halfRule",
      value: function halfRule() {
        return this._stopP1 = !0, this._stopP2 = !1, this._arrowEnd = !1, this._arrowStart = !1, this.update(), this;
      }
    }, {
      key: "line",
      value: function line() {
        return this._stopP1 = !1, this._stopP2 = !1, this._arrowEnd = !1, this._arrowStart = !1, this.update(), this;
      }
    }, {
      key: "perpendicular",
      value: function perpendicular(t) {
        return "p" === this._conditionRule.rule && (this._conditionRule.rule = ""), this.line(), this._conditionRule.rule = "p", this._conditionRule.through = void 0 === t ? null : t, this._conditionRule.k = "", this.update(), this;
      }
    }, {
      key: "moveLabel",
      value: function moveLabel() {
        if (null === this.label) return this;
        var t = (this._p1.x + this._p2.x) / 2,
            e = (this._p1.y + this._p2.y) / 2;
        return t < 0 && (t = 0), t > _get(_getPrototypeOf(l.prototype), "geometryPi", this).width && (t = +_get(_getPrototypeOf(l.prototype), "geometryPi", this).width), e < 0 && (e = 0), e > _get(_getPrototypeOf(l.prototype), "geometryPi", this).height && (e = +_get(_getPrototypeOf(l.prototype), "geometryPi", this).height), this.label.move(t, e), this;
      }
    }, {
      key: "labelDistance",
      value: function labelDistance(t, e) {
        return this.label.showDistance(this._p1, this._p2, void 0 === t ? 0 : t, void 0 === e ? 1 : e), this;
      }
    }, {
      key: "isColinar",
      value: function isColinar(t) {
        return t.slope === this.slope;
      }
    }, {
      key: "isSame",
      value: function isSame(t) {
        return this.isColinar(t) && t.size === this.size && t.direction === this.direction;
      }
    }, {
      key: "isOpposed",
      value: function isOpposed(t) {
        return this.isColinar(t) && t.size === this.size && t.direction !== this.direction;
      }
    }, {
      key: "isPerpendicular",
      value: function isPerpendicular(t) {
        return this.slope === t.slopePerendicular;
      }
    }, {
      key: "p1",
      get: function get() {
        return this._p1;
      },
      set: function set(t) {
        this._p1 = t;
      }
    }, {
      key: "p2",
      get: function get() {
        return this._p2;
      },
      set: function set(t) {
        this._p2 = t;
      }
    }, {
      key: "stopP1",
      get: function get() {
        return this._stopP1;
      },
      set: function set(t) {
        this._stopP1 = t;
      }
    }, {
      key: "stopP2",
      get: function get() {
        return this._stopP2;
      },
      set: function set(t) {
        this._stopP2 = t;
      }
    }, {
      key: "arrowStart",
      get: function get() {
        return this._arrowStart;
      },
      set: function set(t) {
        this._arrowStart = t;
      }
    }, {
      key: "arrowEnd",
      get: function get() {
        return this._arrowEnd;
      },
      set: function set(t) {
        this._arrowEnd = t;
      }
    }, {
      key: "slopePerendicular",
      get: function get() {
        return 0 === this.slope ? 1 / 0 : Math.round(-1 / this.slope * 1e5) / 1e5;
      }
    }, {
      key: "slope",
      get: function get() {
        return Math.round(1e5 * this._slope) / 1e5;
      }
    }, {
      key: "size",
      get: function get() {
        return Math.round(10 * Math.sqrt(Math.pow(this._p2.x - this._p1.x, 2) + Math.pow(this._p2.y - this._p1.y, 2))) / 10;
      }
    }, {
      key: "direction",
      get: function get() {
        var t = this.p2.x - this.p1.x;
        return t > 0 ? 1 : t < 0 ? -1 : this.p2.y - this.p1.y > 0 ? 1 : -1;
      }
    }]);

    return l;
  }(u);

  var c = /*#__PURE__*/function (_u2) {
    _inherits(c, _u2);

    var _super2 = _createSuper(c);

    function c(t, e) {
      var _this3;

      _classCallCheck(this, c);

      return _possibleConstructorReturn(_this3, (_this3 = _super2.call(this, t, e), _this3._center = null, _this3._radius = 0, _this3.shape = t.draw.circle(_this3.diameter).stroke("black").fill("none"), _assertThisInitialized(_this3)));
    }

    _createClass(c, [{
      key: "center",
      value: function center(t) {
        return this._center = t, this.update(), this;
      }
    }, {
      key: "radius",
      value: function radius(t) {
        return this._radius = t, this.update(), this;
      }
    }, {
      key: "update",
      value: function update() {
        var t = this.geometryPi.getPoint(this._center),
            e = this.diameter;
        return null === t || (this.shape.center(t.x, t.y).width(e).height(e), _get(_getPrototypeOf(c.prototype), "update", this).call(this)), this;
      }
    }, {
      key: "getRadius",
      get: function get() {
        return Array.isArray(this._radius) ? this.distance(this._radius[0], this._radius[1]) : this._radius;
      }
    }, {
      key: "diameter",
      get: function get() {
        return 2 * this.getRadius;
      }
    }]);

    return c;
  }(u);

  var f = /*#__PURE__*/function () {
    function f(t, e) {
      _classCallCheck(this, f);

      return void 0 !== t && void 0 !== e ? (this._x = t, this._y = e) : (this._x = 0, this._y = 0), this;
    }

    _createClass(f, [{
      key: "from",
      value: function from(t, e) {
        return this._x = e.x - t.x, this._y = e.y - t.y, this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new f(this._x, this._y);
      }
    }, {
      key: "perpendicular",
      value: function perpendicular() {
        var t = +this._x,
            e = +this._y;
        return this._x = e, this._y = -t, this;
      }
    }, {
      key: "norme",
      value: function norme() {
        return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2));
      }
    }, {
      key: "unit",
      value: function unit() {
        var t = this.norme();
        return 0 === t ? this : this.multiply(1 / t);
      }
    }, {
      key: "isNull",
      value: function isNull() {
        return 0 === this.norme();
      }
    }, {
      key: "add",
      value: function add(t) {
        return this._x += t.x, this._y += t.y, this;
      }
    }, {
      key: "sub",
      value: function sub(t) {
        return this.add(t.clone().opposed());
      }
    }, {
      key: "multiply",
      value: function multiply(t) {
        return this._x *= t, this._y *= t, this;
      }
    }, {
      key: "opposed",
      value: function opposed() {
        return this._x = -this._x, this._y = -this._y, this;
      }
    }, {
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(t) {
        this._x = t;
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(t) {
        this._y = t;
      }
    }], [{
      key: "distance",
      value: function distance(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
    }, {
      key: "midPoint",
      value: function midPoint(t, e) {
        return {
          x: (t.x + e.x) / 2,
          y: (t.y + e.y) / 2
        };
      }
    }]);

    return f;
  }();

  var d = /*#__PURE__*/function (_u3) {
    _inherits(d, _u3);

    var _super3 = _createSuper(d);

    function d(t, e) {
      var _this4;

      _classCallCheck(this, d);

      return _possibleConstructorReturn(_this4, (_this4 = _super3.call(this, t, e), _this4.isPoint = !0, _this4._scale = 6, _this4.shape = t.draw.path("M".concat(-_this4._scale, ",").concat(-_this4._scale, "\n                L").concat(+_this4._scale, ",").concat(+_this4._scale, "\n                M").concat(+_this4._scale, ",").concat(-_this4._scale, "\n                L").concat(-_this4._scale, ",").concat(+_this4._scale)).stroke("black").center(0, 0), _assertThisInitialized(_this4)));
    }

    _createClass(d, [{
      key: "update",
      value: function update() {
        return this.shape.center(this._x, this._y), _get(_getPrototypeOf(d.prototype), "update", this).call(this), this;
      }
    }, {
      key: "moveLabel",
      value: function moveLabel() {
        return null === this.label || this.label.move(this._x, this._y), this;
      }
    }, {
      key: "labelCoordinate",
      value: function labelCoordinate(t, e) {
        return this.label.showCoordinates(this, void 0 === t ? 0 : t, void 0 === e ? 1 : e), this;
      }
    }, {
      key: "distanceTo",
      value: function distanceTo(t) {
        return this.distance(this, t);
      }
    }, {
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(t) {
        this._x = t;
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(t) {
        this._y = t;
      }
    }, {
      key: "coord",
      get: function get() {
        return this.geometryPi.mainGrid.getPointCoordinate(this._x, this._y);
      }
    }, {
      key: "xCoord",
      get: function get() {
        return this.coord.x;
      }
    }, {
      key: "yCoord",
      get: function get() {
        return this.coord.y;
      }
    }, {
      key: "scale",
      get: function get() {
        return this._scale;
      },
      set: function set(t) {
        this._scale = t;
      }
    }]);

    return d;
  }(u);

  var p = /*#__PURE__*/function (_d) {
    _inherits(p, _d);

    var _super4 = _createSuper(p);

    function p(t, e) {
      var _this5;

      _classCallCheck(this, p);

      return _possibleConstructorReturn(_this5, (_this5 = _super4.call(this, t, e), _this5._triangle = null, _assertThisInitialized(_this5)));
    }

    _createClass(p, [{
      key: "update",
      value: function update() {
        if ("middle" === this._rule.rule) {
          var _t8 = this.geometryPi.getPoint(this._rule.p1),
              _e10 = this.geometryPi.getPoint(this._rule.p2);

          if (null === _t8 || null === _e10) return console.log("Middle: one point was not found!"), this;
          this.x = (_t8.x + _e10.x) / 2, this.y = (_t8.y + _e10.y) / 2;
        } else if ("colinear" === this._rule.rule) {
          var _t9 = this.geometryPi.getPoint(this._rule.p1),
              _e11 = this.geometryPi.getPoint(this._rule.p2),
              _i5 = this.geometryPi.getPoint(this._rule.through),
              _n2 = 1;

          if (null === _t9 || null === _e11) return console.log("Colinear: one point was not found!"), this;
          isNaN(Number(this._rule.k)) || (_n2 = +this._rule.k), this.x = _i5.x + _n2 * (_e11.x - _t9.x), this.y = _i5.y + _n2 * (_e11.y - _t9.y);
        } else if ("perpendicular" === this._rule.rule) {
          var _t10 = this.geometryPi.getPoint(this._rule.p1),
              _e12 = this.geometryPi.getPoint(this._rule.p2),
              _i6 = this.geometryPi.getPoint(this._rule.through),
              _n3 = 1;

          if (null === _t10 || null === _e12) return console.log("Perpendicular: one point was not found!"), this;
          isNaN(Number(this._rule.k)) || (_n3 = +this._rule.k), this.x = _i6.x + _n3 * (_e12.y - _t10.y), this.y = _i6.y - _n3 * (_e12.x - _t10.x);
        } else if ("polar" === this._rule.rule) {
          var _t11 = this.geometryPi.getPoint(this._rule.origin),
              _e13 = this._rule.angle,
              _i7 = this._rule.distance,
              _n4 = 0;

          isNaN(_e13) ? "function" == typeof _e13 ? _n4 = _e13(this.geometryPi, this, this._rule.options) : "Arc" === _e13.constructor.name && (_n4 = _e13.angle) : _n4 = +_e13, this.x = _t11.x + Math.cos(+_n4 * Math.PI / 180) * +_i7, this.y = _t11.y - Math.sin(+_n4 * Math.PI / 180) * +_i7;
        } else if ("projection" === this._rule.rule) {
          var _t12 = this.geometryPi.getPoint(this._rule.p);

          if (null === _t12) return console.log("Projection: reference point not found"), this;

          if ("Ox" === this._rule.axis) {
            var _e14 = this.geometryPi.mainGrid.getOrigin();

            this.x = _t12.x, this.y = _e14.y;
          }

          if ("Oy" === this._rule.axis) {
            var _e15 = this.geometryPi.mainGrid.getOrigin();

            this.x = _e15.x, this.y = _t12.y;
          }
        } else if ("rectangle" === this._rule.rule) {
          var _t13 = +this._rule.k,
              _e16 = this.geometryPi.getPoint(this._rule.p1),
              _i8 = this.geometryPi.getPoint(this._rule.p2);

          if (null === _e16 || null === _i8) return console.log("Triangle rectangle: one point was not found!"), this;

          var _n5 = new f().from(_e16, _i8),
              _r4 = _n5.norme() / Math.sqrt(1 + _t13 * _t13),
              _s6 = Math.atan(_t13),
              _a3 = Math.sin(_s6) * _r4,
              _o2 = Math.cos(_s6) * _r4,
              _h2 = new f(_e16.x, _e16.y),
              _u4 = _n5.clone().perpendicular().unit().multiply(_a3),
              _l = _n5.clone().unit().multiply(_o2);

          _h2.add(_u4).add(_l), this.x = _h2.x, this.y = _h2.y;
        } else if ("triangle" === this._rule.rule) {
          var _t14;

          null === this._triangle && console.log("Triangle not found..."), "A" === this._rule.abc ? _t14 = this._triangle.coordinateA() : "B" === this._rule.abc ? _t14 = this._triangle.coordinateB() : "C" === this._rule.abc && (_t14 = this._triangle.coordinateC()), this.x = _t14.x, this.y = _t14.y;
        } else if ("function" === this._rule.rule) {
          var _this$_rule$fn = this._rule.fn(this, this._rule.options),
              _t15 = _this$_rule$fn.x,
              _e17 = _this$_rule$fn.y;

          this.x = _t15, this.y = _e17;
        }

        return this.shape.center(this.x, this.y), _get(_getPrototypeOf(p.prototype), "update", this).call(this), this;
      }
    }, {
      key: "fromFunction",
      value: function fromFunction(t, e) {
        return this._rule = {
          rule: "function",
          fn: t,
          options: e
        }, this.update(), this;
      }
    }, {
      key: "middle",
      value: function middle(t, e) {
        return this._rule = {
          rule: "middle",
          p1: t,
          p2: e
        }, this.update(), this;
      }
    }, {
      key: "colinear",
      value: function colinear(t, e, i, n) {
        return void 0 === n && (n = 1), this._rule = {
          rule: "colinear",
          p1: t,
          p2: e,
          through: i,
          k: n
        }, this.update(), this;
      }
    }, {
      key: "perpendicular",
      value: function perpendicular(t, e, i, n) {
        return void 0 === n && (n = 1), this._rule = {
          rule: "perpendicular",
          p1: t,
          p2: e,
          through: i,
          k: n
        }, this.update(), this;
      }
    }, {
      key: "polar",
      value: function polar(t, e, i) {
        return this._rule = {
          rule: "polar",
          origin: t,
          angle: e,
          distance: i
        }, this.update(), this;
      }
    }, {
      key: "projection",
      value: function projection(t, e, i) {
        return this._rule = {
          rule: "projection",
          p: t,
          p1: e,
          p2: i
        }, this.update(), this;
      }
    }, {
      key: "fromTriangle",
      value: function fromTriangle(t, e) {
        this._triangle = t;
        var i = t.name;
        return e = void 0 === e || -1 === ["A", "B", "C"].indexOf(e.toUpperCase()) ? "C" : e.toUpperCase(), this._rule = {
          rule: "triangle",
          triString: i,
          abc: e
        }, this.update(), this;
      }
    }, {
      key: "projectionAxis",
      value: function projectionAxis(t, e) {
        return this._rule = {
          rule: "projection",
          p: t,
          axis: e
        }, this.update(), this;
      }
    }, {
      key: "projectionX",
      value: function projectionX(t) {
        return this.projectionAxis(t, "Ox");
      }
    }, {
      key: "projectionY",
      value: function projectionY(t) {
        return this.projectionAxis(t, "Oy");
      }
    }, {
      key: "rectangle",
      value: function rectangle(t, e, i) {
        return this._rule = {
          rule: "rectangle",
          p1: t,
          p2: e,
          k: (void 0 === i ? 4 / 3 : i).toString()
        }, this.update(), this;
      }
    }]);

    return p;
  }(d);

  var y = /*#__PURE__*/function (_u5) {
    _inherits(y, _u5);

    var _super5 = _createSuper(y);

    function y(t, e) {
      var _this6;

      _classCallCheck(this, y);

      return _possibleConstructorReturn(_this6, (_this6 = _super5.call(this, t, e), _this6._center = null, _this6._radius = 40, _this6._angleCoordinates = null, _this6._markAngle = !1, _this6._square = !1, _this6._sector = !1, _this6.label.center().middle(), _this6._labelDistanceToCenter = 1.75, _this6.shape = t.draw.path(_this6.getPath()).stroke("black").fill("None"), _assertThisInitialized(_this6)));
    }

    _createClass(y, [{
      key: "center",
      value: function center(t) {
        return this._center = this.geometryPi.getPoint(t), this.update(), this;
      }
    }, {
      key: "radius",
      value: function radius(t) {
        return this._radius = t, this.update(), this;
      }
    }, {
      key: "angleABC",
      value: function angleABC(t) {
        return this._angleCoordinates = t, this._startAngle = null, this._endAngle = null, this.update(), this;
      }
    }, {
      key: "angleStartStop",
      value: function angleStartStop(t, e) {
        return this._angleCoordinates = null, this._startAngle = +t, this._endAngle = +e, this.update(), this;
      }
    }, {
      key: "markAngle",
      value: function markAngle() {
        return this._markAngle = !this._markAngle, this.update(), this;
      }
    }, {
      key: "marker",
      value: function marker() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "end";
        var e = arguments.length > 1 ? arguments[1] : undefined;
        return "end" === t ? !1 === e ? this.shape.marker("end", null) : this.shape.marker("end", this.markerEnd) : !1 === e ? this.shape.marker("start", null) : this.shape.marker("start", this.markerStart), this;
      }
    }, {
      key: "square",
      value: function square(t) {
        return this._square = !1 !== t, this.update(), this;
      }
    }, {
      key: "sector",
      value: function sector(t) {
        return this._sector = !1 !== t, this.update(), this;
      }
    }, {
      key: "moveLabel",
      value: function moveLabel() {
        if (null === this.label) return this;
        var t = (this._angle < 180 ? 1 : -1) * (this._startPoint.x + this._endPoint.x - 2 * this._center.x),
            e = -(this._angle < 180 ? 1 : -1) * (this._startPoint.y + this._endPoint.y - 2 * this._center.y);
        return this.label.move(this._center.x + t * (this._theRadius + this.label.labelDistance) / Math.sqrt(t * t + e * e), this._center.y - e * (this._theRadius + this.label.labelDistance) / Math.sqrt(t * t + e * e)), this;
      }
    }, {
      key: "polarToCartesian",
      value: function polarToCartesian(t, e, i, n) {
        var r = -n * Math.PI / 180;
        return {
          x: t + i * Math.cos(r),
          y: e + i * Math.sin(r)
        };
      }
    }, {
      key: "cartesianToAngle",
      value: function cartesianToAngle(t, e) {
        var i,
            n = e.x - t.x,
            r = -(e.y - t.y);
        if (i = e.x - t.x == 0 ? 90 : 180 * Math.atan(r / n) / Math.PI, n >= 0) {
          if (r >= 0) ;else for (; i < 270;) {
            i += 180;
          }
        } else if (r >= 0) for (; i < 90;) {
          i += 180;
        } else for (; i < 180;) {
          i += 180;
        }
        return i;
      }
    }, {
      key: "getAngles",
      value: function getAngles() {
        var t = 0,
            e = 0;
        return null === this._angleCoordinates ? {
          startAngle: +this._startAngle,
          endAngle: +this._endAngle
        } : (2 === this._angleCoordinates.length ? (t = +this._angleCoordinates[0], e = +this._angleCoordinates[1]) : 3 === this._angleCoordinates.length && (t = this.cartesianToAngle(this._angleCoordinates[1], this._angleCoordinates[0]), e = this.cartesianToAngle(this._angleCoordinates[1], this._angleCoordinates[2])), {
          startAngle: t,
          endAngle: e
        });
      }
    }, {
      key: "getPath",
      value: function getPath() {
        if (null === this.center) return "";
        if (null === this.radius) return "";
        if (null === this._angleCoordinates && (void 0 === this._startAngle || void 0 === this._endAngle)) return "";

        var _this$getAngles = this.getAngles(),
            t = _this$getAngles.startAngle,
            e = _this$getAngles.endAngle,
            i = this.isSquare && this._square ? this.getRadius / 2 : this.getRadius,
            n = this.polarToCartesian(this._center.x, this._center.y, i, t),
            r = this.polarToCartesian(this._center.x, this._center.y, i, e);

        return this._angle = e - t, this._startAngle = +t, this._endAngle = +e, this._startPoint = n, this._endPoint = r, this._theRadius = i, this._square && this.isSquare ? this._describeSquare() : this._describeArc();
      }
    }, {
      key: "_describeSquare",
      value: function _describeSquare() {
        return null === this._center || null === this._startAngle || null === this._endAngle ? "" : ["M", this._startPoint.x, this._startPoint.y, "l", this._endPoint.x - this._center.x, this._endPoint.y - this._center.y, "L", this._endPoint.x, this._endPoint.y].join(" ");
      }
    }, {
      key: "_describeArc",
      value: function _describeArc() {
        if (null === this._center) return "";
        if (null === this._theRadius || 0 === this._theRadius) return "";
        if (null === this._startAngle || null === this._endAngle) return "";
        var t = (this._angle + 360) % 360 <= 180 ? 0 : 1,
            e = 0;
        this._markAngle && this._startAngle > this._endAngle && (t = (t + 1) % 2, e = 1);
        var i = ["M", this._startPoint.x, this._startPoint.y, "A", this._theRadius, this._theRadius, 0, t, e, this._endPoint.x, this._endPoint.y];
        return this._sector && (i = i.concat(["L", this._center.x, this._center.y, "L", this._startPoint.x, this._startPoint.y])), i.join(" ");
      }
    }, {
      key: "update",
      value: function update() {
        return null === this._center ? this : null !== this._angleCoordinates || void 0 !== this._startAngle && void 0 !== this._endAngle ? (this.shape.plot(this.getPath()), _get(_getPrototypeOf(y.prototype), "update", this).call(this), this) : this;
      }
    }, {
      key: "getRadius",
      get: function get() {
        return Array.isArray(this._radius) ? this.distance(this._radius[0], this._radius[1]) : this._radius;
      }
    }, {
      key: "angle",
      get: function get() {
        return this._angle;
      }
    }, {
      key: "isSquare",
      get: function get() {
        return void 0 !== this._angle && "90.0000" === this._angle.toFixed(4);
      }
    }]);

    return y;
  }(u);

  var g = /*#__PURE__*/function (_u6) {
    _inherits(g, _u6);

    var _super6 = _createSuper(g);

    function g(t, e) {
      var _this7;

      _classCallCheck(this, g);

      return _possibleConstructorReturn(_this7, (_this7 = _super6.call(this, t, e), _this7._rectangleMark = !1, _this7._angleMark = !1, _this7.shape = t.draw.polygon([0, 0, 0, 0]).stroke("black").fill("none"), _this7._angleArcs = {}, _assertThisInitialized(_this7)));
    }

    _createClass(g, [{
      key: "setPoints",
      value: function setPoints() {
        return this._points = [], this.addPoints.apply(this, arguments), this;
      }
    }, {
      key: "addPoints",
      value: function addPoints() {
        for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
          t[_key] = arguments[_key];
        }

        for (var _i9 = 0, _t16 = t; _i9 < _t16.length; _i9++) {
          var _e18 = _t16[_i9];

          this._points.push(_e18);
        }

        return this.update(), this;
      }
    }, {
      key: "_getPath",
      value: function _getPath() {
        var t = [];

        var _iterator4 = _createForOfIteratorHelper(this._points),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _e19 = _step4.value;

            var _i10 = this.geometryPi.getPoint(_e19);

            null !== _i10 && (t.push(_i10.x), t.push(_i10.y));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        return t;
      }
    }, {
      key: "update",
      value: function update() {
        return this.shape.plot(this._getPath()), this.updateAngleMark(), _get(_getPrototypeOf(g.prototype), "update", this).call(this), this;
      }
    }, {
      key: "angleMark",
      value: function angleMark(t) {
        return this._angleMark = !1 !== t, this.updateAngleMark(), this;
      }
    }, {
      key: "updateAngleMark",
      value: function updateAngleMark() {
        if (!1 === this._angleMark && !1 === this._rectangleMark) {
          for (var _t17 in this._angleArcs) {
            this._angleArcs[_t17].hide();
          }

          return this;
        }

        var t = [];
        t.push(this.geometryPi.getPoint(this._points[this._points.length - 1]));

        var _iterator5 = _createForOfIteratorHelper(this._points),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _e21 = _step5.value;
            t.push(this.geometryPi.getPoint(_e21));
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        t.push(this.geometryPi.getPoint(this._points[0]));

        for (var _e20 = 1; _e20 < t.length - 1; _e20++) {
          var _i11 = t[_e20 - 1],
              _n6 = t[_e20],
              _r5 = t[_e20 + 1],
              _s7 = "".concat(_i11.name).concat(_n6.name).concat(_r5.name);

          _s7 in this._angleArcs ? this._angleArcs[_s7].square(this._rectangleMark).update() : this._angleArcs[_s7] = new y(this.geometryPi, _s7).center(_n6).radius(40).angleABC([_r5, _n6, _i11]).square(this._rectangleMark), !1 === this._angleMark ? this._angleArcs[_s7].isSquare ? this._angleArcs[_s7].show() : this._angleArcs[_s7].hide() : this._angleArcs[_s7].show();
        }

        return this;
      }
    }, {
      key: "rectangleMark",
      value: function rectangleMark(t) {
        return this._rectangleMark = !1 !== t, this.updateAngleMark(), this;
      }
    }, {
      key: "logAngles",
      value: function logAngles() {
        for (var _t18 in this._angleArcs) {
          console.log(_t18, this._angleArcs[_t18].angle);
        }
      }
    }, {
      key: "points",
      get: function get() {
        return this._points;
      }
    }]);

    return g;
  }(u);

  var _ = /*#__PURE__*/function (_d2) {
    _inherits(_, _d2);

    var _super7 = _createSuper(_);

    function _(t, e, i, n) {
      var _this8;

      _classCallCheck(this, _);

      return _possibleConstructorReturn(_this8, (_this8 = _super7.call(this, t, e), _this8._dragGrid = null, _this8._dragDistance = null, _this8._dragTick = null, _this8._afterDrag = null, _this8.x = i, _this8.y = n, _this8.update(), _assertThisInitialized(_this8)));
    }

    _createClass(_, [{
      key: "makeDraggable",
      value: function makeDraggable(t) {
        if (this._draggable) return _get(_getPrototypeOf(_.prototype), "makeDraggable", this).call(this), this;
        this._draggable = !0, this._dragShape = this.geometryPi.draw.circle(50).center(this.x, this.y).fill("rgba(8,255,103,0.1)").stroke("rgba(79,172,113,0.84)"), this._dragShape.draggable();
        var e = this.geometryPi,
            i = this;
        return this._dragShape.on("dragmove", function (n) {
          var _n$detail = n.detail,
              r = _n$detail.handler,
              s = _n$detail.box;
          var a = s.x,
              o = s.y;

          if (n.preventDefault(), !(a < 0 || a > e.width - s.width / 2 || o < 0 || o > e.height - s.width / 2)) {
            if (r.move(a, o), null !== i.dragGrid) {
              var _t19 = i.dragGrid.nearestPoint({
                x: a + s.width / 2,
                y: o + s.height / 2
              });

              r.move(_t19.x - s.width / 2, _t19.y - s.height / 2);
            }

            if (null !== i.dragCenter && null !== i.dragDistance && i.dragDistance > 0) {
              var _t20 = 180 * Math.atan(-(s.y - i.dragCenter.y) / (s.x - i.dragCenter.x)) / Math.PI;

              i.dragCenter.x > s.x && (_t20 = 180 + _t20), null !== i._dragTick && i._dragTick >= 0 && (_t20 = Math.round(_t20 / i._dragTick) * i._dragTick), r.move(i.dragCenter.x + Math.cos(_t20 * Math.PI / 180) * i.dragDistance - s.width / 2, i.dragCenter.y - Math.sin(_t20 * Math.PI / 180) * i.dragDistance - s.height / 2);
            }

            void 0 !== t && void 0 !== t.fn && t.fn(e, i, s, r, t.args), i.x = r.el.cx(), i.y = r.el.cy();

            var _iterator6 = _createForOfIteratorHelper(e.figures),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _t21 = _step6.value;

                _t21.update();
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            null !== i._afterDrag && i._afterDrag(e, i);
          }
        }), this._dragShape.front(), _get(_getPrototypeOf(_.prototype), "makeDraggable", this).call(this), this;
      }
    }, {
      key: "afterDrag",
      value: function afterDrag(t) {
        return this._afterDrag = t, this;
      }
    }, {
      key: "setDragGrid",
      value: function setDragGrid(t) {
        return this._dragGrid = t, this;
      }
    }, {
      key: "setDistanceTo",
      value: function setDistanceTo(t, e, i) {
        return this._dragCenter = t, this._dragDistance = null == e ? this.distance(this, t) : e, this._dragTick = void 0 === i ? null : i, this;
      }
    }, {
      key: "dragShape",
      get: function get() {
        return this._dragShape;
      },
      set: function set(t) {
        this._dragShape = t;
      }
    }, {
      key: "dragGrid",
      get: function get() {
        return this._dragGrid;
      }
    }, {
      key: "dragCenter",
      get: function get() {
        return this._dragCenter;
      }
    }, {
      key: "dragDistance",
      get: function get() {
        return this._dragDistance;
      }
    }]);

    return _;
  }(d);

  var v = /*#__PURE__*/function () {
    function v() {
      _classCallCheck(this, v);
    }

    _createClass(v, null, [{
      key: "round",
      value: function round(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        return Number(Math.round(Number(t + "e" + e)) + "e-" + e);
      }
    }]);

    return v;
  }();

  var m = /*#__PURE__*/function (_u7) {
    _inherits(m, _u7);

    var _super8 = _createSuper(m);

    function m(t, e) {
      var _this9;

      _classCallCheck(this, m);

      return _possibleConstructorReturn(_this9, (_this9 = _super8.call(this, t, e), _this9.shape = t.draw.polygon([0, 0, 0, 0]).stroke("black").fill("none"), _this9._A = new _(t, e + "-point-A", 0, 0), _this9._B = new _(t, e + "-point-B", 0, 0), _this9._C = new _(t, e + "-point-C", 0, 0), _this9._AB = new l(t, e + "-segment-AB", _this9._A, _this9._B).segment(), _this9._BC = new l(t, e + "-segment-BC", _this9._B, _this9._C).segment(), _this9._CA = new l(t, e + "-segment-CA", _this9._C, _this9._A).segment(), _this9._rectangleMark = !0, _this9._rectangleMarkOnly = !1, _this9._arcBAC = null, _this9._arcCBA = null, _this9._arcACB = null, _this9._createAngleMark(), _this9._internalFigures = [_this9._A, _this9._B, _this9._C, _this9._AB, _this9._BC, _this9._CA, _this9._arcBAC, _this9._arcACB, _this9._arcCBA], _this9.hideAll(), _this9.showAnglesMarks(), _this9._refA = null, _this9._refB = null, _this9._scale = null, _this9._resetData(), _assertThisInitialized(_this9)));
    }

    _createClass(m, [{
      key: "_resetData",
      value: function _resetData() {
        return this._a = null, this._b = null, this._c = null, this._alpha = null, this._beta = null, this._gamma = null, this._solution = null, this;
      }
    }, {
      key: "base",
      value: function base(t, e) {
        return null === this._solution || (this._refA = t, this._refB = void 0 !== e ? e : null, this.update()), this;
      }
    }, {
      key: "define",
      value: function define(t) {
        return this._resetData(), void 0 !== t.a && (this._a = t.a), void 0 !== t.b && (this._b = t.b), void 0 !== t.c && (this._c = t.c), void 0 !== t.alpha && (this._alpha = t.alpha), void 0 !== t.beta && (this._beta = t.beta), void 0 !== t.gamma && (this._gamma = t.gamma), void 0 !== t.solution && this.solution(t.solution, !1), this._calculated = this._calculateTriangle(this._a, this._b, this._c, this._alpha, this._beta, this._gamma, this._solution), this.update(), this;
      }
    }, {
      key: "solution",
      value: function solution(t, e) {
        return (void 0 === t || t < 1 || t > 2) && (t = 1), this._solution = +t, e && (this._calculated = this._calculateTriangle(this._a, this._b, this._c, this._alpha, this._beta, this._gamma, this._solution), this.update()), this;
      }
    }, {
      key: "_numberOfKnownAngles",
      value: function _numberOfKnownAngles(t, e, i) {
        return [t, e, i].filter(function (t) {
          return null !== t;
        }).length;
      }
    }, {
      key: "_numberOfKnownSides",
      value: function _numberOfKnownSides(t, e, i) {
        return [t, e, i].filter(function (t) {
          return null !== t;
        }).length;
      }
    }, {
      key: "_sidesAreAdjacent",
      value: function _sidesAreAdjacent(t, e, i, n, r, s) {
        return null === t ? null !== n : null === e ? null !== r : null === i && null !== s;
      }
    }, {
      key: "_calculateTriangle3Sides",
      value: function _calculateTriangle3Sides(t, e, i) {
        var n = {
          a: null,
          b: null,
          c: null,
          alpha: null,
          beta: null,
          gamma: null,
          solution: 1
        };
        return n.a = +t, n.b = +e, n.c = +i, n.alpha = 180 * Math.acos((Math.pow(i, 2) + Math.pow(e, 2) - Math.pow(t, 2)) / (2 * i * e)) / Math.PI, n.beta = 180 * Math.acos((Math.pow(i, 2) + Math.pow(t, 2) - Math.pow(e, 2)) / (2 * i * t)) / Math.PI, n.gamma = 180 * Math.acos((Math.pow(t, 2) + Math.pow(e, 2) - Math.pow(i, 2)) / (2 * t * e)) / Math.PI, n;
      }
    }, {
      key: "_calculateTriangleOneSideTwoAngles",
      value: function _calculateTriangleOneSideTwoAngles(t, e, i, n, r, s) {
        var a = {
          a: null,
          b: null,
          c: null,
          alpha: null,
          beta: null,
          gamma: null,
          solution: 1
        };
        return a.alpha = null === n ? 180 - r - s : +n, a.beta = null === r ? 180 - n - s : +r, a.gamma = null === s ? 180 - r - n : +s, null !== t ? (a.a = +t, a.b = t * Math.sin(a.beta * Math.PI / 180) / Math.sin(a.alpha * Math.PI / 180), a.c = t * Math.sin(a.gamma * Math.PI / 180) / Math.sin(a.alpha * Math.PI / 180)) : null !== e ? (a.a = e * Math.sin(a.alpha * Math.PI / 180) / Math.sin(a.beta * Math.PI / 180), a.b = +e, a.c = e * Math.sin(a.gamma * Math.PI / 180) / Math.sin(a.beta * Math.PI / 180)) : null !== i && (a.a = i * Math.sin(a.alpha * Math.PI / 180) / Math.sin(a.gamma * Math.PI / 180), a.b = i * Math.sin(a.beta * Math.PI / 180) / Math.sin(a.gamma * Math.PI / 180), a.c = +i), a;
      }
    }, {
      key: "_calculateThmSine",
      value: function _calculateThmSine(t, e, i, n) {
        return 1 === n ? 180 * Math.asin(Math.sin(e * Math.PI / 180) / t * i) / Math.PI : 180 - 180 * Math.asin(Math.sin(e * Math.PI / 180) / t * i) / Math.PI;
      }
    }, {
      key: "_calculateTriangle",
      value: function _calculateTriangle(t, e, i, n, r, s) {
        var a = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;

        var o = this._numberOfKnownSides(t, e, i),
            h = this._numberOfKnownAngles(n, r, s);

        if (0 !== o) {
          if (3 === o) return this._calculateTriangle3Sides(t, e, i);
          if (1 === o && 2 === h) return this._calculateTriangleOneSideTwoAngles(t, e, i, n, r, s);
          if (2 === o && 1 === h) if (this._sidesAreAdjacent(t, e, i, n, r, s)) {
            if (null !== n) return this._calculateTriangle3Sides(Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2) - 2 * e * i * Math.cos(n * Math.PI / 180)), e, i);
            if (null !== r) return this._calculateTriangle3Sides(t, Math.sqrt(Math.pow(t, 2) + Math.pow(i, 2) - 2 * t * i * Math.cos(r * Math.PI / 180)), i);
            if (null !== s) return this._calculateTriangle3Sides(t, e, Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2) - 2 * e * i * Math.cos(s * Math.PI / 180)));
          } else if (null !== n) {
            if (null !== e) return this._calculateTriangleOneSideTwoAngles(t, null, null, n, this._calculateThmSine(t, n, e, a), null);
            if (null !== i) return this._calculateTriangleOneSideTwoAngles(t, null, null, n, r, this._calculateThmSine(t, n, i, a));
          } else if (null !== r) {
            if (null !== t) return this._calculateTriangleOneSideTwoAngles(null, e, null, this._calculateThmSine(e, r, t, a), r, null);
            if (null !== i) return this._calculateTriangleOneSideTwoAngles(null, e, null, null, r, this._calculateThmSine(e, r, i, a));
          } else if (null !== s) {
            if (null !== t) return this._calculateTriangleOneSideTwoAngles(null, null, i, this._calculateThmSine(i, s, t, a), null, s);
            if (null !== e) return this._calculateTriangleOneSideTwoAngles(null, null, i, null, this._calculateThmSine(i, s, e, a), s);
          }
          return {
            a: null,
            b: null,
            c: null,
            alpha: null,
            beta: null,
            gamma: null,
            solution: 0
          };
        }
      }
    }, {
      key: "update",
      value: function update() {
        if (0 === this._calculated.solution) return this;
        var t, e, i;
        return null === this._refB && (t = null === this._scale ? this._calculated.beta < 90 ? Math.max((this.geometryPi.width - this._A.x - 50) / this._calculated.c, (this.geometryPi.height - this._A.y - 50) / (this._calculated.b * Math.asin(this._calculated.alpha * Math.PI / 180))) : Math.max((this.geometryPi.width - this._A.x - 50) / (this._calculated.b * Math.acos(this._calculated.alpha * Math.PI / 180)), (this.geometryPi.height - this._A.y - 50) / (this._calculated.b * Math.asin(this._calculated.alpha * Math.PI / 180))) : +this._scale), null === this._refA ? (this._A.x = 0, this._A.y = 0) : (this._A.x = +this._refA.x, this._A.y = +this._refA.y), null === this._refB ? (this._B.x = +this._A.x + this._calculated.c * t, this._B.y = +this._A.y, e = +this._calculated.c, i = 0) : (this._B.x = this._refB.x, this._B.y = this._refB.y, e = Math.sqrt(Math.pow(this._B.y - this._A.y, 2) + Math.pow(this._B.x - this._A.x, 2)), i = 180 * Math.acos((this._B.x - this._A.x) / e) / Math.PI, this._B.y - this._A.y > 0 && (i = 360 - i), t = e / this._calculated.c), this._C.x = this._A.x + this._calculated.b * t * Math.cos((this._calculated.alpha + i) * Math.PI / 180), this._C.y = this._A.y - this._calculated.b * t * Math.sin((this._calculated.alpha + i) * Math.PI / 180), this.shape.plot([this._A.x, this._A.y, this._B.x, this._B.y, this._C.x, this._C.y]), this._updateInternalPoints(), this;
      }
    }, {
      key: "_updateInternalPoints",
      value: function _updateInternalPoints() {
        this._A.update(), this._B.update(), this._C.update(), this._AB.update(), this._BC.update(), this._CA.update(), this._updateAngleMark();
      }
    }, {
      key: "_createAngleMark",
      value: function _createAngleMark() {
        null === this._arcBAC && (this._arcBAC = new y(this.geometryPi, this.name + "-angle-BAC").center(this._A).radius(40).angleABC([this._B, this._A, this._C]).square(this._rectangleMark)), null === this._arcACB && (this._arcACB = new y(this.geometryPi, this.name + "-angle-ACB").center(this._C).radius(40).angleABC([this._A, this._C, this._B]).square(this._rectangleMark)), null === this._arcCBA && (this._arcCBA = new y(this.geometryPi, this.name + "-angle-CBA").center(this._B).radius(40).angleABC([this._C, this._B, this._A]).square(this._rectangleMark));
      }
    }, {
      key: "_updateAngleMark",
      value: function _updateAngleMark() {
        this._arcBAC.square(this._rectangleMark).update(), this._arcCBA.square(this._rectangleMark).update(), this._arcACB.square(this._rectangleMark).update(), this._rectangleMarkOnly && (this._arcBAC.isSquare ? this._arcBAC.show() : this._arcBAC.hide(), this._arcACB.isSquare ? this._arcACB.show() : this._arcACB.hide(), this._arcCBA.isSquare ? this._arcCBA.show() : this._arcCBA.hide());
      }
    }, {
      key: "rectangleMark",
      value: function rectangleMark(t) {
        return this._rectangleMark = !1 !== t, this._updateAngleMark(), this;
      }
    }, {
      key: "rectangleMarkOnly",
      value: function rectangleMarkOnly(t) {
        return this._rectangleMarkOnly = !1 !== t, this._updateAngleMark(), this;
      }
    }, {
      key: "log",
      value: function log() {
        return console.log("Donnée:"), console.log({
          a: this._a,
          b: this._b,
          c: this._c,
          alpha: this._alpha,
          beta: this._beta,
          gamma: this._gamma
        }), console.log("Calculés:"), console.log(this._calculated), this;
      }
    }, {
      key: "hideAll",
      value: function hideAll() {
        var _iterator7 = _createForOfIteratorHelper(this._internalFigures),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _t22 = _step7.value;

            _t22.hide();
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        return this;
      }
    }, {
      key: "hideAllLabel",
      value: function hideAllLabel(t) {
        var _iterator8 = _createForOfIteratorHelper(this._internalFigures),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _t23 = _step8.value;

            _t23.hideLabel();
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        return this;
      }
    }, {
      key: "showAnglesMarks",
      value: function showAnglesMarks() {
        return this._arcBAC.show(), this._arcCBA.show(), this._arcACB.show(), this;
      }
    }, {
      key: "A",
      value: function A() {
        return this._A;
      }
    }, {
      key: "B",
      value: function B() {
        return this._B;
      }
    }, {
      key: "C",
      value: function C() {
        return this._C;
      }
    }, {
      key: "BAC",
      value: function BAC() {
        return this._arcBAC;
      }
    }, {
      key: "ACB",
      value: function ACB() {
        return this._arcACB;
      }
    }, {
      key: "CBA",
      value: function CBA() {
        return this._arcCBA;
      }
    }, {
      key: "AB",
      value: function AB() {
        return this._AB;
      }
    }, {
      key: "BC",
      value: function BC() {
        return this._BC;
      }
    }, {
      key: "CA",
      value: function CA() {
        return this._CA;
      }
    }, {
      key: "showLabelData",
      value: function showLabelData(t) {
        return void 0 === t && (t = !0), t && this.hideAllLabel(), null !== this._a && this._BC.labelText(this._a.toString()).showLabel(), null !== this._b && this._CA.labelText(this._b.toString()).showLabel(), null !== this._c && this._AB.labelText(this._c.toString()).showLabel(), null === this._alpha || this._arcBAC.isSquare || this._arcBAC.labelText(this._alpha.toString()).showLabel(), null === this._beta || this._arcCBA.isSquare || this._arcCBA.labelText(this._beta.toString()).showLabel(), null === this._gamma || this._arcACB.isSquare || this._arcACB.labelText(this._gamma.toString()).showLabel(), this;
      }
    }, {
      key: "showCalculated",
      value: function showCalculated() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var e = arguments.length > 1 ? arguments[1] : undefined;
        return void 0 === e && (e = t), null === this._a && this._BC.labelText(v.round(this._calculated.a, t).toFixed(t)).showLabel(), null === this._b && this._CA.labelText(v.round(this._calculated.b, t).toFixed(t)).showLabel(), null === this._c && this._AB.labelText(v.round(this._calculated.c, t).toFixed(t)).showLabel(), null !== this._alpha || this._arcBAC.isSquare || this._arcBAC.labelText(v.round(this._calculated.alpha, e).toFixed(e)).showLabel(), null !== this._beta || this._arcCBA.isSquare || this._arcCBA.labelText(v.round(this._calculated.beta, e).toFixed(e)).showLabel(), null !== this._gamma || this._arcACB.isSquare || this._arcACB.labelText(v.round(this._calculated.gamma, e).toFixed(e)).showLabel(), this;
      }
    }, {
      key: "getDimensions",
      value: function getDimensions() {
        return this._calculateTriangle(this._a, this._b, this._c, this._alpha, this._beta, this._gamma, this._solution);
      }
    }, {
      key: "coordinateA",
      value: function coordinateA(t, e) {
        return {
          x: this._A.x,
          y: this._A.y
        };
      }
    }, {
      key: "coordinateB",
      value: function coordinateB(t, e) {
        return {
          x: this._B.x,
          y: this._B.y
        };
      }
    }, {
      key: "coordinateC",
      value: function coordinateC(t, e) {
        return {
          x: this._C.x,
          y: this._C.y
        };
      }
    }]);

    return m;
  }(u);

  var b = /*#__PURE__*/function () {
    function b(t, e, i) {
      _classCallCheck(this, b);

      return this._container = "string" == typeof t ? document.getElementById(t) : t, this._svgWrapper = document.createElement("DIV"), this._svgWrapper.style.position = "relative", this._svgWrapper.style.width = "100%", this._svgWrapper.style.height = "100%", this._container.appendChild(this._svgWrapper), this._width = e, this._height = i, this._draw = Object(n.d)().addTo(this._svgWrapper).size("100%", "100%"), this._draw.viewbox(0, 0, this._width, this._height), this._grids = [], this._points = {}, this._figures = [], this._defaults = {
        font: {
          size: "150%",
          family: null
        }
      }, this;
    }

    _createClass(b, [{
      key: "dev",
      value: function dev() {
        this._draw.circle(80).move(100, 150).stroke({
          width: 1,
          color: "black"
        }).fill("rgba(200,200,0,0.5)");

        return this._grids[0].showIntersections(), this;
      }
    }, {
      key: "update",
      value: function update() {
        var _iterator9 = _createForOfIteratorHelper(this._figures),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _t24 = _step9.value;

            _t24.update();
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        return this;
      }
    }, {
      key: "touchDisable",
      value: function touchDisable(t) {
        return this._container.style.touchAction = !0 === t ? "none" : "pinch-zoom", this;
      }
    }, {
      key: "touchEnable",
      value: function touchEnable() {
        return this._container.style.touchAction = "auto", this;
      }
    }, {
      key: "showGridOrtho",
      value: function showGridOrtho(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        return this._grids.push(new o(this).orthographic(t, e).show(i)), this;
      }
    }, {
      key: "showGridOrthoN",
      value: function showGridOrthoN(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        return void 0 === e ? this._grids.push(new o(this).orthographic(this._width / t)) : this._grids.push(new o(this).orthographic(this._width / t, this._height / e)), this;
      }
    }, {
      key: "showGridTri",
      value: function showGridTri(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        return this._grids.push(new o(this).triangle(t)), this;
      }
    }, {
      key: "showGridHex",
      value: function showGridHex(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        return this._grids.push(new o(this).hexagonal(t)), this;
      }
    }, {
      key: "setLabelSize",
      value: function setLabelSize(t) {
        return this.defaultFontSize = t, this;
      }
    }, {
      key: "setLabelFamily",
      value: function setLabelFamily(t) {
        return this.defaultFontFamily = t, this;
      }
    }, {
      key: "showPointsLabel",
      value: function showPointsLabel(t) {
        var _iterator10 = _createForOfIteratorHelper(this._figures),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _e22 = _step10.value;
            _e22.isPoint && (!1 === t ? _e22.hideLabel() : _e22.showLabel());
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }

        return this;
      }
    }, {
      key: "showLabels",
      value: function showLabels(t) {
        var _iterator11 = _createForOfIteratorHelper(this._figures),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var _e23 = _step11.value;
            !1 === t ? _e23.hideLabel() : _e23.showLabel();
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        return this;
      }
    }, {
      key: "showPointsShape",
      value: function showPointsShape(t) {
        var _iterator12 = _createForOfIteratorHelper(this._figures),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var _e24 = _step12.value;
            _e24.isPoint && (!1 === t ? _e24.shape.hide() : _e24.shape.show());
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }

        return this;
      }
    }, {
      key: "_checkPointName",
      value: function _checkPointName(t) {
        if (void 0 !== t) {
          if (!(t in this._points)) return t;

          var _e25 = t.split("_");

          return 1 === _e25.length ? t + "_1" : this._getNextPointNameIndex(_e25[0], +_e25[1]);
        }

        return this._getNextPointName(), "";
      }
    }, {
      key: "_getNextPointName",
      value: function _getNextPointName() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        var _iterator13 = _createForOfIteratorHelper("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            _step13;

        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var _e26 = _step13.value;

            var _i12 = "".concat(_e26).concat(null === t ? "" : "_" + t);

            if (!(_i12 in this._points)) return _i12;
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }

        return this._getNextPointName(null === t ? 1 : t + 1);
      }
    }, {
      key: "_getNextPointNameIndex",
      value: function _getNextPointNameIndex(t, e) {
        var i,
            n = +e + 1;

        for (; n < 100;) {
          if (i = "".concat(t, "_").concat(e), !(i in this._points)) return i;
          n++, n++;
        }

        return i + "OVERRIDE";
      }
    }, {
      key: "addPoint",
      value: function addPoint(t, e, i) {
        return i = "string" == typeof t ? this._checkPointName(t) : this._checkPointName(i), void 0 === e ? this.addCPoint(i) : this.addSPoint(i, +t, e);
      }
    }, {
      key: "addSPoint",
      value: function addSPoint(t, e, i) {
        var n = this._grids[0].getPoint({
          x: e,
          y: i
        });

        return this._points[t] = new _(this, t, n.x, n.y), this._figures.push(this._points[t]), this._points[t];
      }
    }, {
      key: "addCPoint",
      value: function addCPoint(t) {
        return this._points[t] = new p(this, t), this._figures.push(this._points[t]), this._points[t];
      }
    }, {
      key: "getPoint",
      value: function getPoint(t) {
        if ("string" != typeof t) return t;
        var e = t in this._points ? this._points[t] : null;

        if (null === e) {
          var _iterator14 = _createForOfIteratorHelper(this._figures),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var _e27 = _step14.value;
              if (_e27.name === t) return _e27;
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }
        }

        return e;
      }
    }, {
      key: "getFigure",
      value: function getFigure(t) {
        var _iterator15 = _createForOfIteratorHelper(this._figures),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var _e28 = _step15.value;
            if (_e28.name === t) return _e28;
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }

        return null;
      }
    }, {
      key: "rule",
      value: function rule(t, e) {
        var i = this.getPoint(t),
            n = this.getPoint(e),
            r = new l(this, "".concat(i.name).concat(n.name), i, n).line();
        return this._figures.push(r), r;
      }
    }, {
      key: "halfRule",
      value: function halfRule(t, e) {
        var i = this.getPoint(t),
            n = this.getPoint(e),
            r = new l(this, "".concat(i.name).concat(n.name), i, n).halfRule();
        return this._figures.push(r), r;
      }
    }, {
      key: "segment",
      value: function segment(t, e) {
        var i = this.getPoint(t),
            n = this.getPoint(e),
            r = new l(this, "".concat(i.name).concat(n.name), i, n).segment();
        return this._figures.push(r), r;
      }
    }, {
      key: "vector",
      value: function vector(t, e) {
        var i = this.getPoint(t),
            n = this.getPoint(e),
            r = new l(this, "v".concat(i.name).concat(n.name), i, n).vector();
        return this._figures.push(r), r;
      }
    }, {
      key: "perpendicular",
      value: function perpendicular(t, e, i) {
        var n = this.getPoint(t),
            r = this.getPoint(e),
            s = this.getPoint(i),
            a = new l(this, "p".concat(n.name).concat(r.name), n, r).perpendicular(s);
        return this._figures.push(a), a;
      }
    }, {
      key: "circle",
      value: function circle(t, e, i) {
        var n = this.getPoint(t),
            r = new c(this, void 0 === i ? "c(".concat(n.name, ";rayon)") : i).center(n);

        if (Array.isArray(e)) {
          var _t25 = [];

          var _iterator16 = _createForOfIteratorHelper(e),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var _i13 = _step16.value;

              _t25.push(this.getPoint(_i13));
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }

          r.radius(_t25);
        } else r.radius(e);

        return this._figures.push(r), r;
      }
    }, {
      key: "arc",
      value: function arc(t, e, i, n) {
        var r = this.getPoint(t),
            s = new y(this, void 0 === n ? "a(".concat(r.name, ";rayon)") : n).center(r);

        if (Array.isArray(e)) {
          var _t26 = [];

          var _iterator17 = _createForOfIteratorHelper(e),
              _step17;

          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var _i14 = _step17.value;

              _t26.push(this.getPoint(_i14));
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }

          s.radius(_t26);
        } else s.radius(e);

        if (3 === i.length) {
          var _t27 = [];

          var _iterator18 = _createForOfIteratorHelper(i),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var _e29 = _step18.value;
              "number" != typeof _e29 && _t27.push(this.getPoint(_e29));
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }

          s.angleABC(_t27);
        } else s.angleStartStop(Number(i[0]), Number(i[1]));

        return this._figures.push(s), s;
      }
    }, {
      key: "triangle",
      value: function triangle(t) {
        var e = new m(this, t);
        return this._figures.push(e), e;
      }
    }, {
      key: "polygon",
      value: function polygon() {
        var _g;

        var e = [],
            i = "";

        for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          t[_key2] = arguments[_key2];
        }

        for (var _i15 = 0, _t28 = t; _i15 < _t28.length; _i15++) {
          var _n7 = _t28[_i15];
          e.push(this.getPoint(_n7)), i += e[e.length - 1].name;
        }

        var n = (_g = new g(this, i)).setPoints.apply(_g, e);

        return this._figures.push(n), n;
      }
    }, {
      key: "get",
      value: function get() {
        return this._figures[this._figures.length - 1];
      }
    }, {
      key: "distance",
      value: function distance(t, e) {
        if (isNaN(t)) return 0;
        var i = void 0 === e ? 0 : +e;
        return 0 === this.grids.length || void 0 === this.grids[i] ? t : t * this.grids[i].gridX;
      }
    }, {
      key: "draw",
      get: function get() {
        return this._draw;
      }
    }, {
      key: "width",
      get: function get() {
        return this._width;
      }
    }, {
      key: "height",
      get: function get() {
        return this._height;
      }
    }, {
      key: "grids",
      get: function get() {
        return this._grids;
      }
    }, {
      key: "mainGrid",
      get: function get() {
        return this._grids[0];
      }
    }, {
      key: "secondaryGrid",
      get: function get() {
        return this._grids[1];
      }
    }, {
      key: "figures",
      get: function get() {
        return this._figures;
      }
    }, {
      key: "defaults",
      get: function get() {
        return this._defaults;
      }
    }, {
      key: "defaultFontSize",
      set: function set(t) {
        this._defaults.font.size = t;
      }
    }, {
      key: "defaultFontFamily",
      set: function set(t) {
        this._defaults.font.family = t;
      }
    }]);

    return b;
  }();

  window.PiGeometry = b;
  var w = {
    draw: b,
    v: f
  };
}]);
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*********************************!*\
  !*** ./resources/js/pigraph.js ***!
  \*********************************/
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports;}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==_typeof(e)&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e){r.d(n,i,function(t){return e[t];}.bind(null,i));}return n;},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"];}:function(){return e;};return r.d(t,"a",t),t;},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t);},r.p="",r(r.s=22);}([,function(e,t,r){var n;/**
 * @license Complex.js v2.0.11 11/02/2016
 *
 * Copyright (c) 2016, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/!function(r){"use strict";var i=function i(e){return .5*(Math.exp(e)+Math.exp(-e));},a=function a(e){return .5*(Math.exp(e)-Math.exp(-e));},o=function o(){throw SyntaxError("Invalid Param");};function s(e,t){var r=Math.abs(e),n=Math.abs(t);return 0===e?Math.log(n):0===t?Math.log(r):r<3e3&&n<3e3?.5*Math.log(e*e+t*t):Math.log(e/Math.cos(Math.atan2(t,e)));}function u(e,t){if(!(this instanceof u))return new u(e,t);var r=function(e,t){var r={re:0,im:0};if(null==e)r.re=r.im=0;else if(void 0!==t)r.re=e,r.im=t;else switch(_typeof(e)){case"object":if("im"in e&&"re"in e)r.re=e.re,r.im=e.im;else if("abs"in e&&"arg"in e){if(!Number.isFinite(e.abs)&&Number.isFinite(e.arg))return u.INFINITY;r.re=e.abs*Math.cos(e.arg),r.im=e.abs*Math.sin(e.arg);}else if("r"in e&&"phi"in e){if(!Number.isFinite(e.r)&&Number.isFinite(e.phi))return u.INFINITY;r.re=e.r*Math.cos(e.phi),r.im=e.r*Math.sin(e.phi);}else 2===e.length?(r.re=e[0],r.im=e[1]):o();break;case"string":r.im=r.re=0;var n=e.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),i=1,a=0;null===n&&o();for(var s=0;s<n.length;s++){var c=n[s];" "===c||"\t"===c||"\n"===c||("+"===c?i++:"-"===c?a++:"i"===c||"I"===c?(i+a===0&&o()," "===n[s+1]||isNaN(n[s+1])?r.im+=parseFloat((a%2?"-":"")+"1"):(r.im+=parseFloat((a%2?"-":"")+n[s+1]),s++),i=a=0):((i+a===0||isNaN(c))&&o(),"i"===n[s+1]||"I"===n[s+1]?(r.im+=parseFloat((a%2?"-":"")+c),s++):r.re+=parseFloat((a%2?"-":"")+c),i=a=0));}i+a>0&&o();break;case"number":r.im=0,r.re=e;break;default:o();}return isNaN(r.re)||isNaN(r.im),r;}(e,t);this.re=r.re,this.im=r.im;}u.prototype={re:0,im:0,sign:function sign(){var e=this.abs();return new u(this.re/e,this.im/e);},add:function add(e,t){var r=new u(e,t);return this.isInfinite()&&r.isInfinite()?u.NAN:this.isInfinite()||r.isInfinite()?u.INFINITY:new u(this.re+r.re,this.im+r.im);},sub:function sub(e,t){var r=new u(e,t);return this.isInfinite()&&r.isInfinite()?u.NAN:this.isInfinite()||r.isInfinite()?u.INFINITY:new u(this.re-r.re,this.im-r.im);},mul:function mul(e,t){var r=new u(e,t);return this.isInfinite()&&r.isZero()||this.isZero()&&r.isInfinite()?u.NAN:this.isInfinite()||r.isInfinite()?u.INFINITY:0===r.im&&0===this.im?new u(this.re*r.re,0):new u(this.re*r.re-this.im*r.im,this.re*r.im+this.im*r.re);},div:function div(e,t){var r=new u(e,t);if(this.isZero()&&r.isZero()||this.isInfinite()&&r.isInfinite())return u.NAN;if(this.isInfinite()||r.isZero())return u.INFINITY;if(this.isZero()||r.isInfinite())return u.ZERO;e=this.re,t=this.im;var n,i,a=r.re,o=r.im;return 0===o?new u(e/a,t/a):Math.abs(a)<Math.abs(o)?new u((e*(i=a/o)+t)/(n=a*i+o),(t*i-e)/n):new u((e+t*(i=o/a))/(n=o*i+a),(t-e*i)/n);},pow:function pow(e,t){var r=new u(e,t);if(e=this.re,t=this.im,r.isZero())return u.ONE;if(0===r.im){if(0===t&&e>=0)return new u(Math.pow(e,r.re),0);if(0===e)switch((r.re%4+4)%4){case 0:return new u(Math.pow(t,r.re),0);case 1:return new u(0,Math.pow(t,r.re));case 2:return new u(-Math.pow(t,r.re),0);case 3:return new u(0,-Math.pow(t,r.re));}}if(0===e&&0===t&&r.re>0&&r.im>=0)return u.ZERO;var n=Math.atan2(t,e),i=s(e,t);return e=Math.exp(r.re*i-r.im*n),t=r.im*i+r.re*n,new u(e*Math.cos(t),e*Math.sin(t));},sqrt:function sqrt(){var e,t,r=this.re,n=this.im,i=this.abs();if(r>=0){if(0===n)return new u(Math.sqrt(r),0);e=.5*Math.sqrt(2*(i+r));}else e=Math.abs(n)/Math.sqrt(2*(i-r));return t=r<=0?.5*Math.sqrt(2*(i-r)):Math.abs(n)/Math.sqrt(2*(i+r)),new u(e,n<0?-t:t);},exp:function exp(){var e=Math.exp(this.re);return this.im,new u(e*Math.cos(this.im),e*Math.sin(this.im));},expm1:function expm1(){var e=this.re,t=this.im;return new u(Math.expm1(e)*Math.cos(t)+function(e){var t=Math.PI/4;if(e<-t||e>t)return Math.cos(e)-1;var r=e*e;return r*(r*(1/24+r*(-1/720+r*(1/40320+r*(-1/3628800+r*(1/4790014600+r*(-1/87178291200+r*(1/20922789888e3)))))))-.5);}(t),Math.exp(e)*Math.sin(t));},log:function log(){var e=this.re,t=this.im;return new u(s(e,t),Math.atan2(t,e));},abs:function abs(){return e=this.re,t=this.im,r=Math.abs(e),n=Math.abs(t),r<3e3&&n<3e3?Math.sqrt(r*r+n*n):(r<n?(r=n,n=e/t):n=t/e,r*Math.sqrt(1+n*n));var e,t,r,n;},arg:function arg(){return Math.atan2(this.im,this.re);},sin:function sin(){var e=this.re,t=this.im;return new u(Math.sin(e)*i(t),Math.cos(e)*a(t));},cos:function cos(){var e=this.re,t=this.im;return new u(Math.cos(e)*i(t),-Math.sin(e)*a(t));},tan:function tan(){var e=2*this.re,t=2*this.im,r=Math.cos(e)+i(t);return new u(Math.sin(e)/r,a(t)/r);},cot:function cot(){var e=2*this.re,t=2*this.im,r=Math.cos(e)-i(t);return new u(-Math.sin(e)/r,a(t)/r);},sec:function sec(){var e=this.re,t=this.im,r=.5*i(2*t)+.5*Math.cos(2*e);return new u(Math.cos(e)*i(t)/r,Math.sin(e)*a(t)/r);},csc:function csc(){var e=this.re,t=this.im,r=.5*i(2*t)-.5*Math.cos(2*e);return new u(Math.sin(e)*i(t)/r,-Math.cos(e)*a(t)/r);},asin:function asin(){var e=this.re,t=this.im,r=new u(t*t-e*e+1,-2*e*t).sqrt(),n=new u(r.re-t,r.im+e).log();return new u(n.im,-n.re);},acos:function acos(){var e=this.re,t=this.im,r=new u(t*t-e*e+1,-2*e*t).sqrt(),n=new u(r.re-t,r.im+e).log();return new u(Math.PI/2-n.im,n.re);},atan:function atan(){var e=this.re,t=this.im;if(0===e){if(1===t)return new u(0,1/0);if(-1===t)return new u(0,-1/0);}var r=e*e+(1-t)*(1-t),n=new u((1-t*t-e*e)/r,-2*e/r).log();return new u(-.5*n.im,.5*n.re);},acot:function acot(){var e=this.re,t=this.im;if(0===t)return new u(Math.atan2(1,e),0);var r=e*e+t*t;return 0!==r?new u(e/r,-t/r).atan():new u(0!==e?e/0:0,0!==t?-t/0:0).atan();},asec:function asec(){var e=this.re,t=this.im;if(0===e&&0===t)return new u(0,1/0);var r=e*e+t*t;return 0!==r?new u(e/r,-t/r).acos():new u(0!==e?e/0:0,0!==t?-t/0:0).acos();},acsc:function acsc(){var e=this.re,t=this.im;if(0===e&&0===t)return new u(Math.PI/2,1/0);var r=e*e+t*t;return 0!==r?new u(e/r,-t/r).asin():new u(0!==e?e/0:0,0!==t?-t/0:0).asin();},sinh:function sinh(){var e=this.re,t=this.im;return new u(a(e)*Math.cos(t),i(e)*Math.sin(t));},cosh:function cosh(){var e=this.re,t=this.im;return new u(i(e)*Math.cos(t),a(e)*Math.sin(t));},tanh:function tanh(){var e=2*this.re,t=2*this.im,r=i(e)+Math.cos(t);return new u(a(e)/r,Math.sin(t)/r);},coth:function coth(){var e=2*this.re,t=2*this.im,r=i(e)-Math.cos(t);return new u(a(e)/r,-Math.sin(t)/r);},csch:function csch(){var e=this.re,t=this.im,r=Math.cos(2*t)-i(2*e);return new u(-2*a(e)*Math.cos(t)/r,2*i(e)*Math.sin(t)/r);},sech:function sech(){var e=this.re,t=this.im,r=Math.cos(2*t)+i(2*e);return new u(2*i(e)*Math.cos(t)/r,-2*a(e)*Math.sin(t)/r);},asinh:function asinh(){var e=this.im;this.im=-this.re,this.re=e;var t=this.asin();return this.re=-this.im,this.im=e,e=t.re,t.re=-t.im,t.im=e,t;},acosh:function acosh(){var e=this.acos();if(e.im<=0){var t=e.re;e.re=-e.im,e.im=t;}else{t=e.im;e.im=-e.re,e.re=t;}return e;},atanh:function atanh(){var e=this.re,t=this.im,r=e>1&&0===t,n=1-e,i=1+e,a=n*n+t*t,o=0!==a?new u((i*n-t*t)/a,(t*n+i*t)/a):new u(-1!==e?e/0:0,0!==t?t/0:0),c=o.re;return o.re=s(o.re,o.im)/2,o.im=Math.atan2(o.im,c)/2,r&&(o.im=-o.im),o;},acoth:function acoth(){var e=this.re,t=this.im;if(0===e&&0===t)return new u(0,Math.PI/2);var r=e*e+t*t;return 0!==r?new u(e/r,-t/r).atanh():new u(0!==e?e/0:0,0!==t?-t/0:0).atanh();},acsch:function acsch(){var e=this.re,t=this.im;if(0===t)return new u(0!==e?Math.log(e+Math.sqrt(e*e+1)):1/0,0);var r=e*e+t*t;return 0!==r?new u(e/r,-t/r).asinh():new u(0!==e?e/0:0,0!==t?-t/0:0).asinh();},asech:function asech(){var e=this.re,t=this.im;if(this.isZero())return u.INFINITY;var r=e*e+t*t;return 0!==r?new u(e/r,-t/r).acosh():new u(0!==e?e/0:0,0!==t?-t/0:0).acosh();},inverse:function inverse(){if(this.isZero())return u.INFINITY;if(this.isInfinite())return u.ZERO;var e=this.re,t=this.im,r=e*e+t*t;return new u(e/r,-t/r);},conjugate:function conjugate(){return new u(this.re,-this.im);},neg:function neg(){return new u(-this.re,-this.im);},ceil:function ceil(e){return e=Math.pow(10,e||0),new u(Math.ceil(this.re*e)/e,Math.ceil(this.im*e)/e);},floor:function floor(e){return e=Math.pow(10,e||0),new u(Math.floor(this.re*e)/e,Math.floor(this.im*e)/e);},round:function round(e){return e=Math.pow(10,e||0),new u(Math.round(this.re*e)/e,Math.round(this.im*e)/e);},equals:function equals(e,t){var r=new u(e,t);return Math.abs(r.re-this.re)<=u.EPSILON&&Math.abs(r.im-this.im)<=u.EPSILON;},clone:function clone(){return new u(this.re,this.im);},toString:function toString(){var e=this.re,t=this.im,r="";return this.isNaN()?"NaN":this.isZero()?"0":this.isInfinite()?"Infinity":(0!==e&&(r+=e),0!==t&&(0!==e?r+=t<0?" - ":" + ":t<0&&(r+="-"),1!==(t=Math.abs(t))&&(r+=t),r+="i"),r||"0");},toVector:function toVector(){return[this.re,this.im];},valueOf:function valueOf(){return 0===this.im?this.re:null;},isNaN:function(_isNaN){function isNaN(){return _isNaN.apply(this,arguments);}isNaN.toString=function(){return _isNaN.toString();};return isNaN;}(function(){return isNaN(this.re)||isNaN(this.im);}),isZero:function isZero(){return!(0!==this.re&&-0!==this.re||0!==this.im&&-0!==this.im);},isFinite:function(_isFinite){function isFinite(){return _isFinite.apply(this,arguments);}isFinite.toString=function(){return _isFinite.toString();};return isFinite;}(function(){return isFinite(this.re)&&isFinite(this.im);}),isInfinite:function isInfinite(){return!(this.isNaN()||this.isFinite());}},u.ZERO=new u(0,0),u.ONE=new u(1,0),u.I=new u(0,1),u.PI=new u(Math.PI,0),u.E=new u(Math.E,0),u.INFINITY=new u(1/0,1/0),u.NAN=new u(NaN,NaN),u.EPSILON=1e-16,void 0===(n=function(){return u;}.apply(t,[]))||(e.exports=n);}();},function(e,t){e.exports=function(){throw new Error("define cannot be used indirect");};},function(e,t,r){var n;/**
 * @license Fraction.js v4.0.12 09/09/2015
 * http://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2015, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
})();

/******/ })()
;