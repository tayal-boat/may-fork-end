/*! js-cookie v3.0.1 | MIT */ ! function(e, t) {
    var n, o;
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self, n = e.Cookies, (o = e.Cookies = t()).noConflict = function() {
        return e.Cookies = n, o
    })
}(this, (function() {
    "use strict";

    function e(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) e[o] = n[o]
        }
        return e
    }
    return function t(n, o) {
        function r(t, r, i) {
            if ("undefined" != typeof document) {
                "number" == typeof(i = e({}, o, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var c = "";
                for (var u in i) i[u] && (c += "; " + u, !0 !== i[u] && (c += "=" + i[u].split(";")[0]));
                return document.cookie = t + "=" + n.write(r, t) + c
            }
        }
        return Object.create({
            set: r,
            get: function(e) {
                if ("undefined" != typeof document && (!arguments.length || e)) {
                    for (var t = document.cookie ? document.cookie.split("; ") : [], o = {}, r = 0; r < t.length; r++) {
                        var i = t[r].split("="),
                            c = i.slice(1).join("=");
                        try {
                            var u = decodeURIComponent(i[0]);
                            if (o[u] = n.read(c, u), e === u) break
                        } catch (e) {}
                    }
                    return e ? o[e] : o
                }
            },
            remove: function(t, n) {
                r(t, "", e({}, n, {
                    expires: -1
                }))
            },
            withAttributes: function(n) {
                return t(this.converter, e({}, this.attributes, n))
            },
            withConverter: function(n) {
                return t(e({}, this.converter, n), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(o)
            },
            converter: {
                value: Object.freeze(n)
            }
        })
    }({
        read: function(e) {
            return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(e) {
            return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
    }, {
        path: "/"
    })
}));

// vendor.js

(() => {
    var t, e;
    ! function() {
        "use strict";
        var t = "function" == typeof Promise ? Promise : function(t) {
                var e, n = [],
                    r = 0;
                return t((function(t) {
                    e = t, r = 1, n.splice(0).forEach(i)
                })), {
                    then: i
                };

                function i(t) {
                    return r ? setTimeout(t, 0, e) : n.push(t), this
                }
            },
            e = function(t, e) {
                var n = function(t) {
                        for (var e = 0, n = t.length; e < n; e++) r(t[e])
                    },
                    r = function(t) {
                        var e = t.target,
                            n = t.attributeName,
                            r = t.oldValue;
                        e.attributeChangedCallback(n, r, e.getAttribute(n))
                    };
                return function(i, o) {
                    var a = i.constructor.observedAttributes;
                    return a && t(o).then((function() {
                        new e(n).observe(i, {
                            attributes: !0,
                            attributeOldValue: !0,
                            attributeFilter: a
                        });
                        for (var t = 0, o = a.length; t < o; t++) i.hasAttribute(a[t]) && r({
                            target: i,
                            attributeName: a[t],
                            oldValue: null
                        })
                    })), i
                }
            },
            n = !0,
            r = "querySelectorAll";

        function i(t) {
            this.observe(t, {
                subtree: n,
                childList: n
            })
        }
        var o = "querySelectorAll",
            a = self,
            s = a.document,
            u = a.Element,
            l = a.MutationObserver,
            c = a.Set,
            f = a.WeakMap,
            d = function(t) {
                return o in t
            },
            h = [].filter,
            p = function(t) {
                var e = new f,
                    a = function(n, r) {
                        var i;
                        if (r)
                            for (var o, a = function(t) {
                                    return t.matches || t.webkitMatchesSelector || t.msMatchesSelector
                                }(n), s = 0, u = m.length; s < u; s++) a.call(n, o = m[s]) && (e.has(n) || e.set(n, new c), (i = e.get(n)).has(o) || (i.add(o), t.handle(n, r, o)));
                        else e.has(n) && (i = e.get(n), e.delete(n), i.forEach((function(e) {
                            t.handle(n, r, e)
                        })))
                    },
                    p = function(t) {
                        for (var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = 0, r = t.length; n < r; n++) a(t[n], e)
                    },
                    m = t.query,
                    g = t.root || s,
                    v = function(t, e, o) {
                        var a = function e(i, o, a, s, u) {
                                for (var l = 0, c = i.length; l < c; l++) {
                                    var f = i[l];
                                    (u || r in f) && (s ? o.has(f) || (o.add(f), a.delete(f), t(f, s)) : a.has(f) || (a.add(f), o.delete(f), t(f, s)), u || e(f[r]("*"), o, a, s, n))
                                }
                            },
                            s = new(o || MutationObserver)((function(t) {
                                for (var e = new Set, r = new Set, i = 0, o = t.length; i < o; i++) {
                                    var s = t[i],
                                        u = s.addedNodes,
                                        l = s.removedNodes;
                                    a(l, e, r, !1, !1), a(u, e, r, n, !1)
                                }
                            }));
                        return s.add = i, s.add(e || document), s
                    }(a, g, l),
                    b = u.prototype.attachShadow;
                return b && (u.prototype.attachShadow = function(t) {
                    var e = b.call(this, t);
                    return v.add(e), e
                }), m.length && p(g[o](m)), {
                    drop: function(t) {
                        for (var n = 0, r = t.length; n < r; n++) e.delete(t[n])
                    },
                    flush: function() {
                        for (var t = v.takeRecords(), e = 0, n = t.length; e < n; e++) p(h.call(t[e].removedNodes, d), !1), p(h.call(t[e].addedNodes, d), !0)
                    },
                    observer: v,
                    parse: p
                }
            },
            m = self,
            g = m.document,
            v = m.Map,
            b = m.MutationObserver,
            y = m.Object,
            _ = m.Set,
            w = m.WeakMap,
            T = m.Element,
            x = m.HTMLElement,
            E = m.Node,
            S = m.Error,
            P = m.TypeError,
            k = m.Reflect,
            N = self.Promise || t,
            A = y.defineProperty,
            R = y.keys,
            M = y.getOwnPropertyNames,
            L = y.setPrototypeOf,
            D = !self.customElements,
            O = function(t) {
                for (var e = R(t), n = [], r = e.length, i = 0; i < r; i++) n[i] = t[e[i]], delete t[e[i]];
                return function() {
                    for (var i = 0; i < r; i++) t[e[i]] = n[i]
                }
            };
        if (D) {
            var I = function() {
                    var t = this.constructor;
                    if (!H.has(t)) throw new P("Illegal constructor");
                    var e = H.get(t);
                    if (j) return U(j, e);
                    var n = C.call(g, e);
                    return U(L(n, t.prototype), e)
                },
                C = g.createElement,
                H = new v,
                W = new v,
                F = new v,
                B = new v,
                q = [],
                z = p({
                    query: q,
                    handle: function(t, e, n) {
                        var r = F.get(n);
                        if (e && !r.isPrototypeOf(t)) {
                            var i = O(t);
                            j = L(t, r);
                            try {
                                new r.constructor
                            } finally {
                                j = null, i()
                            }
                        }
                        var o = "".concat(e ? "" : "dis", "connectedCallback");
                        o in r && t[o]()
                    }
                }).parse,
                j = null,
                V = function(e) {
                    if (!W.has(e)) {
                        var n, r = new t((function(t) {
                            n = t
                        }));
                        W.set(e, {
                            $: r,
                            _: n
                        })
                    }
                    return W.get(e).$
                },
                U = e(V, b);
            A(self, "customElements", {
                configurable: !0,
                value: {
                    define: function(t, e) {
                        if (B.has(t)) throw new S('the name "'.concat(t, '" has already been used with this registry'));
                        H.set(e, t), F.set(t, e.prototype), B.set(t, e), q.push(t), V(t).then((function() {
                            z(g.querySelectorAll(t))
                        })), W.get(t)._(e)
                    },
                    get: function(t) {
                        return B.get(t)
                    },
                    whenDefined: V
                }
            }), A(I.prototype = x.prototype, "constructor", {
                value: I
            }), A(self, "HTMLElement", {
                configurable: !0,
                value: I
            }), A(g, "createElement", {
                configurable: !0,
                value: function(t, e) {
                    var n = e && e.is,
                        r = n ? B.get(n) : B.get(t);
                    return r ? new r : C.call(g, t)
                }
            }), "isConnected" in E.prototype || A(E.prototype, "isConnected", {
                configurable: !0,
                get: function() {
                    return !(this.ownerDocument.compareDocumentPosition(this) & this.DOCUMENT_POSITION_DISCONNECTED)
                }
            })
        } else try {
            var $ = function t() {
                return self.Reflect.construct(HTMLLIElement, [], t)
            };
            $.prototype = HTMLLIElement.prototype;
            var K = "extends-li";
            self.customElements.define("extends-li", $, {
                extends: "li"
            }), D = g.createElement("li", {
                is: K
            }).outerHTML.indexOf(K) < 0;
            var X = self.customElements,
                Y = X.get,
                G = X.whenDefined;
            A(self.customElements, "whenDefined", {
                configurable: !0,
                value: function(t) {
                    var e = this;
                    return G.call(this, t).then((function(n) {
                        return n || Y.call(e, t)
                    }))
                }
            })
        } catch (t) {
            D = !D
        }
        if (D) {
            var Q = function(t) {
                    var e = it.get(t);
                    ht(e.querySelectorAll(this), t.isConnected)
                },
                J = self.customElements,
                Z = T.prototype.attachShadow,
                tt = g.createElement,
                et = J.define,
                nt = J.get,
                rt = (k || {
                    construct: function(t) {
                        return t.call(this)
                    }
                }).construct,
                it = new w,
                ot = new _,
                at = new v,
                st = new v,
                ut = new v,
                lt = new v,
                ct = [],
                ft = [],
                dt = function(t) {
                    return lt.get(t) || nt.call(J, t)
                },
                ht = p({
                    query: ft,
                    handle: function(t, e, n) {
                        var r = ut.get(n);
                        if (e && !r.isPrototypeOf(t)) {
                            var i = O(t);
                            vt = L(t, r);
                            try {
                                new r.constructor
                            } finally {
                                vt = null, i()
                            }
                        }
                        var o = "".concat(e ? "" : "dis", "connectedCallback");
                        o in r && t[o]()
                    }
                }).parse,
                pt = p({
                    query: ct,
                    handle: function(t, e) {
                        it.has(t) && (e ? ot.add(t) : ot.delete(t), ft.length && Q.call(ft, t))
                    }
                }).parse,
                mt = function(t) {
                    if (!st.has(t)) {
                        var e, n = new N((function(t) {
                            e = t
                        }));
                        st.set(t, {
                            $: n,
                            _: e
                        })
                    }
                    return st.get(t).$
                },
                gt = e(mt, b),
                vt = null;
            M(self).filter((function(t) {
                return /^HTML/.test(t)
            })).forEach((function(t) {
                var e = self[t];

                function n() {
                    var t = this.constructor;
                    if (!at.has(t)) throw new P("Illegal constructor");
                    var n = at.get(t),
                        r = n.is,
                        i = n.tag;
                    if (r) {
                        if (vt) return gt(vt, r);
                        var o = tt.call(g, i);
                        return o.setAttribute("is", r), gt(L(o, t.prototype), r)
                    }
                    return rt.call(this, e, [], t)
                }
                A(n.prototype = e.prototype, "constructor", {
                    value: n
                }), A(self, t, {
                    value: n
                })
            })), A(g, "createElement", {
                configurable: !0,
                value: function(t, e) {
                    var n = e && e.is;
                    if (n) {
                        var r = lt.get(n);
                        if (r && at.get(r).tag === t) return new r
                    }
                    var i = tt.call(g, t);
                    return n && i.setAttribute("is", n), i
                }
            }), Z && (T.prototype.attachShadow = function(t) {
                var e = Z.call(this, t);
                return it.set(this, e), e
            }), A(J, "get", {
                configurable: !0,
                value: dt
            }), A(J, "whenDefined", {
                configurable: !0,
                value: mt
            }), A(J, "define", {
                configurable: !0,
                value: function(t, e, n) {
                    if (dt(t)) throw new S("'".concat(t, "' has already been defined as a custom element"));
                    var r, i = n && n.extends;
                    at.set(e, i ? {
                        is: t,
                        tag: i
                    } : {
                        is: "",
                        tag: t
                    }), i ? (r = "".concat(i, '[is="').concat(t, '"]'), ut.set(r, e.prototype), lt.set(t, e), ft.push(r)) : (et.apply(J, arguments), ct.push(r = t)), mt(t).then((function() {
                        i ? (ht(g.querySelectorAll(r)), ot.forEach(Q, [r])) : pt(g.querySelectorAll(r))
                    })), st.get(t)._(e)
                }
            })
        }
    }(),
    function() {
        var t, e, n = {},
            r = {};
        ! function(t, e) {
            function n() {
                this._delay = 0, this._endDelay = 0, this._fill = "none", this._iterationStart = 0, this._iterations = 1, this._duration = 0, this._playbackRate = 1, this._direction = "normal", this._easing = "linear", this._easingFunction = d
            }

            function r() {
                return t.isDeprecated("Invalid timing inputs", "2016-03-02", "TypeError exceptions will be thrown instead.", !0)
            }

            function i(e, r, i) {
                var o = new n;
                return r && (o.fill = "both", o.duration = "auto"), "number" != typeof e || isNaN(e) ? void 0 !== e && Object.getOwnPropertyNames(e).forEach((function(n) {
                    if ("auto" != e[n]) {
                        if (("number" == typeof o[n] || "duration" == n) && ("number" != typeof e[n] || isNaN(e[n]))) return;
                        if ("fill" == n && -1 == c.indexOf(e[n])) return;
                        if ("direction" == n && -1 == f.indexOf(e[n])) return;
                        if ("playbackRate" == n && 1 !== e[n] && t.isDeprecated("AnimationEffectTiming.playbackRate", "2014-11-28", "Use Animation.playbackRate instead.")) return;
                        o[n] = e[n]
                    }
                })) : o.duration = e, o
            }

            function o(t, e, n, r) {
                return t < 0 || t > 1 || n < 0 || n > 1 ? d : function(i) {
                    function o(t, e, n) {
                        return 3 * t * (1 - n) * (1 - n) * n + 3 * e * (1 - n) * n * n + n * n * n
                    }
                    if (i <= 0) {
                        var a = 0;
                        return t > 0 ? a = e / t : !e && n > 0 && (a = r / n), a * i
                    }
                    if (i >= 1) {
                        var s = 0;
                        return n < 1 ? s = (r - 1) / (n - 1) : 1 == n && t < 1 && (s = (e - 1) / (t - 1)), 1 + s * (i - 1)
                    }
                    for (var u = 0, l = 1; u < l;) {
                        var c = (u + l) / 2,
                            f = o(t, n, c);
                        if (Math.abs(i - f) < 1e-5) return o(e, r, c);
                        f < i ? u = c : l = c
                    }
                    return o(e, r, c)
                }
            }

            function a(t, e) {
                return function(n) {
                    if (n >= 1) return 1;
                    var r = 1 / t;
                    return (n += e * r) - n % r
                }
            }

            function s(t) {
                v || (v = document.createElement("div").style), v.animationTimingFunction = "", v.animationTimingFunction = t;
                var e = v.animationTimingFunction;
                if ("" == e && r()) throw new TypeError(t + " is not a valid value for easing");
                return e
            }

            function u(t) {
                if ("linear" == t) return d;
                var e = y.exec(t);
                if (e) return o.apply(this, e.slice(1).map(Number));
                var n = _.exec(t);
                if (n) return a(Number(n[1]), m);
                var r = w.exec(t);
                return r ? a(Number(r[1]), {
                    start: h,
                    middle: p,
                    end: m
                } [r[2]]) : g[t] || d
            }

            function l(t, e, n) {
                if (null == e) return T;
                var r = n.delay + t + n.endDelay;
                return e < Math.min(n.delay, r) ? x : e >= Math.min(n.delay + t, r) ? E : S
            }
            var c = "backwards|forwards|both|none".split("|"),
                f = "reverse|alternate|alternate-reverse".split("|"),
                d = function(t) {
                    return t
                };
            n.prototype = {
                _setMember: function(e, n) {
                    this["_" + e] = n, this._effect && (this._effect._timingInput[e] = n, this._effect._timing = t.normalizeTimingInput(this._effect._timingInput), this._effect.activeDuration = t.calculateActiveDuration(this._effect._timing), this._effect._animation && this._effect._animation._rebuildUnderlyingAnimation())
                },
                get playbackRate() {
                    return this._playbackRate
                },
                set delay(t) {
                    this._setMember("delay", t)
                },
                get delay() {
                    return this._delay
                },
                set endDelay(t) {
                    this._setMember("endDelay", t)
                },
                get endDelay() {
                    return this._endDelay
                },
                set fill(t) {
                    this._setMember("fill", t)
                },
                get fill() {
                    return this._fill
                },
                set iterationStart(t) {
                    if ((isNaN(t) || t < 0) && r()) throw new TypeError("iterationStart must be a non-negative number, received: " + t);
                    this._setMember("iterationStart", t)
                },
                get iterationStart() {
                    return this._iterationStart
                },
                set duration(t) {
                    if ("auto" != t && (isNaN(t) || t < 0) && r()) throw new TypeError("duration must be non-negative or auto, received: " + t);
                    this._setMember("duration", t)
                },
                get duration() {
                    return this._duration
                },
                set direction(t) {
                    this._setMember("direction", t)
                },
                get direction() {
                    return this._direction
                },
                set easing(t) {
                    this._easingFunction = u(s(t)), this._setMember("easing", t)
                },
                get easing() {
                    return this._easing
                },
                set iterations(t) {
                    if ((isNaN(t) || t < 0) && r()) throw new TypeError("iterations must be non-negative, received: " + t);
                    this._setMember("iterations", t)
                },
                get iterations() {
                    return this._iterations
                }
            };
            var h = 1,
                p = .5,
                m = 0,
                g = {
                    ease: o(.25, .1, .25, 1),
                    "ease-in": o(.42, 0, 1, 1),
                    "ease-out": o(0, 0, .58, 1),
                    "ease-in-out": o(.42, 0, .58, 1),
                    "step-start": a(1, h),
                    "step-middle": a(1, p),
                    "step-end": a(1, m)
                },
                v = null,
                b = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",
                y = new RegExp("cubic-bezier\\(" + b + "," + b + "," + b + "," + b + "\\)"),
                _ = /steps\(\s*(\d+)\s*\)/,
                w = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,
                T = 0,
                x = 1,
                E = 2,
                S = 3;
            t.cloneTimingInput = function(t) {
                if ("number" == typeof t) return t;
                var e = {};
                for (var n in t) e[n] = t[n];
                return e
            }, t.makeTiming = i, t.numericTimingToObject = function(t) {
                return "number" == typeof t && (t = isNaN(t) ? {
                    duration: 0
                } : {
                    duration: t
                }), t
            }, t.normalizeTimingInput = function(e, n) {
                return i(e = t.numericTimingToObject(e), n)
            }, t.calculateActiveDuration = function(t) {
                return Math.abs(function(t) {
                    return 0 === t.duration || 0 === t.iterations ? 0 : t.duration * t.iterations
                }(t) / t.playbackRate)
            }, t.calculateIterationProgress = function(t, e, n) {
                var r = l(t, e, n),
                    i = function(t, e, n, r, i) {
                        switch (r) {
                            case x:
                                return "backwards" == e || "both" == e ? 0 : null;
                            case S:
                                return n - i;
                            case E:
                                return "forwards" == e || "both" == e ? t : null;
                            case T:
                                return null
                        }
                    }(t, n.fill, e, r, n.delay);
                if (null === i) return null;
                var o = function(t, e, n, r, i) {
                        var o = i;
                        return 0 === t ? e !== x && (o += n) : o += r / t, o
                    }(n.duration, r, n.iterations, i, n.iterationStart),
                    a = function(t, e, n, r, i, o) {
                        var a = t === 1 / 0 ? e % 1 : t % 1;
                        return 0 !== a || n !== E || 0 === r || 0 === i && 0 !== o || (a = 1), a
                    }(o, n.iterationStart, r, n.iterations, i, n.duration),
                    s = function(t, e, n, r) {
                        return t === E && e === 1 / 0 ? 1 / 0 : 1 === n ? Math.floor(r) - 1 : Math.floor(r)
                    }(r, n.iterations, a, o),
                    u = function(t, e, n) {
                        var r = t;
                        if ("normal" !== t && "reverse" !== t) {
                            var i = e;
                            "alternate-reverse" === t && (i += 1), r = "normal", i !== 1 / 0 && i % 2 != 0 && (r = "reverse")
                        }
                        return "normal" === r ? n : 1 - n
                    }(n.direction, s, a);
                return n._easingFunction(u)
            }, t.calculatePhase = l, t.normalizeEasing = s, t.parseEasingFunction = u
        }(n),
        function(t, e) {
            function n(t, e) {
                return t in u && u[t][e] || e
            }

            function r(t, e, r) {
                if (! function(t) {
                        return "display" === t || 0 === t.lastIndexOf("animation", 0) || 0 === t.lastIndexOf("transition", 0)
                    }(t)) {
                    var i = o[t];
                    if (i)
                        for (var s in a.style[t] = e, i) {
                            var u = i[s],
                                l = a.style[u];
                            r[u] = n(u, l)
                        } else r[t] = n(t, e)
                }
            }

            function i(t) {
                var e = [];
                for (var n in t)
                    if (!(n in ["easing", "offset", "composite"])) {
                        var r = t[n];
                        Array.isArray(r) || (r = [r]);
                        for (var i, o = r.length, a = 0; a < o; a++)(i = {}).offset = "offset" in t ? t.offset : 1 == o ? 1 : a / (o - 1), "easing" in t && (i.easing = t.easing), "composite" in t && (i.composite = t.composite), i[n] = r[a], e.push(i)
                    } return e.sort((function(t, e) {
                    return t.offset - e.offset
                })), e
            }
            var o = {
                    background: ["backgroundImage", "backgroundPosition", "backgroundSize", "backgroundRepeat", "backgroundAttachment", "backgroundOrigin", "backgroundClip", "backgroundColor"],
                    border: ["borderTopColor", "borderTopStyle", "borderTopWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
                    borderBottom: ["borderBottomWidth", "borderBottomStyle", "borderBottomColor"],
                    borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
                    borderLeft: ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"],
                    borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    borderRight: ["borderRightWidth", "borderRightStyle", "borderRightColor"],
                    borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
                    borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
                    flex: ["flexGrow", "flexShrink", "flexBasis"],
                    font: ["fontFamily", "fontSize", "fontStyle", "fontVariant", "fontWeight", "lineHeight"],
                    margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
                    outline: ["outlineColor", "outlineStyle", "outlineWidth"],
                    padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]
                },
                a = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
                s = {
                    thin: "1px",
                    medium: "3px",
                    thick: "5px"
                },
                u = {
                    borderBottomWidth: s,
                    borderLeftWidth: s,
                    borderRightWidth: s,
                    borderTopWidth: s,
                    fontSize: {
                        "xx-small": "60%",
                        "x-small": "75%",
                        small: "89%",
                        medium: "100%",
                        large: "120%",
                        "x-large": "150%",
                        "xx-large": "200%"
                    },
                    fontWeight: {
                        normal: "400",
                        bold: "700"
                    },
                    outlineWidth: s,
                    textShadow: {
                        none: "0px 0px 0px transparent"
                    },
                    boxShadow: {
                        none: "0px 0px 0px 0px transparent"
                    }
                };
            t.convertToArrayForm = i, t.normalizeKeyframes = function(e) {
                if (null == e) return [];
                window.Symbol && Symbol.iterator && Array.prototype.from && e[Symbol.iterator] && (e = Array.from(e)), Array.isArray(e) || (e = i(e));
                for (var n = e.map((function(e) {
                        var n = {};
                        for (var i in e) {
                            var o = e[i];
                            if ("offset" == i) {
                                if (null != o) {
                                    if (o = Number(o), !isFinite(o)) throw new TypeError("Keyframe offsets must be numbers.");
                                    if (o < 0 || o > 1) throw new TypeError("Keyframe offsets must be between 0 and 1.")
                                }
                            } else if ("composite" == i) {
                                if ("add" == o || "accumulate" == o) throw {
                                    type: DOMException.NOT_SUPPORTED_ERR,
                                    name: "NotSupportedError",
                                    message: "add compositing is not supported"
                                };
                                if ("replace" != o) throw new TypeError("Invalid composite mode " + o + ".")
                            } else o = "easing" == i ? t.normalizeEasing(o) : "" + o;
                            r(i, o, n)
                        }
                        return null == n.offset && (n.offset = null), null == n.easing && (n.easing = "linear"), n
                    })), o = !0, a = -1 / 0, s = 0; s < n.length; s++) {
                    var u = n[s].offset;
                    if (null != u) {
                        if (u < a) throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");
                        a = u
                    } else o = !1
                }
                return n = n.filter((function(t) {
                    return t.offset >= 0 && t.offset <= 1
                })), o || function() {
                    var t = n.length;
                    null == n[t - 1].offset && (n[t - 1].offset = 1), t > 1 && null == n[0].offset && (n[0].offset = 0);
                    for (var e = 0, r = n[0].offset, i = 1; i < t; i++) {
                        var o = n[i].offset;
                        if (null != o) {
                            for (var a = 1; a < i - e; a++) n[e + a].offset = r + (o - r) * a / (i - e);
                            e = i, r = o
                        }
                    }
                }(), n
            }
        }(n), e = {}, (t = n).isDeprecated = function(t, n, r, i) {
                var o = i ? "are" : "is",
                    a = new Date,
                    s = new Date(n);
                return s.setMonth(s.getMonth() + 3), !(a < s && (t in e || console.warn("Web Animations: " + t + " " + o + " deprecated and will stop working on " + s.toDateString() + ". " + r), e[t] = !0, 1))
            }, t.deprecated = function(e, n, r, i) {
                var o = i ? "are" : "is";
                if (t.isDeprecated(e, n, r, i)) throw new Error(e + " " + o + " no longer supported. " + r)
            },
            function() {
                if (document.documentElement.animate) {
                    var t = document.documentElement.animate([], 0),
                        e = !0;
                    if (t && (e = !1, "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach((function(n) {
                            void 0 === t[n] && (e = !0)
                        }))), !e) return
                }
                var i;
                ! function(t, e, n) {
                    e.convertEffectInput = function(n) {
                        var r = function(t) {
                                for (var e = {}, n = 0; n < t.length; n++)
                                    for (var r in t[n])
                                        if ("offset" != r && "easing" != r && "composite" != r) {
                                            var i = {
                                                offset: t[n].offset,
                                                easing: t[n].easing,
                                                value: t[n][r]
                                            };
                                            e[r] = e[r] || [], e[r].push(i)
                                        } for (var o in e) {
                                    var a = e[o];
                                    if (0 != a[0].offset || 1 != a[a.length - 1].offset) throw {
                                        type: DOMException.NOT_SUPPORTED_ERR,
                                        name: "NotSupportedError",
                                        message: "Partial keyframes are not supported"
                                    }
                                }
                                return e
                            }(t.normalizeKeyframes(n)),
                            i = function(n) {
                                var r = [];
                                for (var i in n)
                                    for (var o = n[i], a = 0; a < o.length - 1; a++) {
                                        var s = a,
                                            u = a + 1,
                                            l = o[s].offset,
                                            c = o[u].offset,
                                            f = l,
                                            d = c;
                                        0 == a && (f = -1 / 0, 0 == c && (u = s)), a == o.length - 2 && (d = 1 / 0, 1 == l && (s = u)), r.push({
                                            applyFrom: f,
                                            applyTo: d,
                                            startOffset: o[s].offset,
                                            endOffset: o[u].offset,
                                            easingFunction: t.parseEasingFunction(o[s].easing),
                                            property: i,
                                            interpolation: e.propertyInterpolation(i, o[s].value, o[u].value)
                                        })
                                    }
                                return r.sort((function(t, e) {
                                    return t.startOffset - e.startOffset
                                })), r
                            }(r);
                        return function(t, n) {
                            if (null != n) i.filter((function(t) {
                                return n >= t.applyFrom && n < t.applyTo
                            })).forEach((function(r) {
                                var i = n - r.startOffset,
                                    o = r.endOffset - r.startOffset,
                                    a = 0 == o ? 0 : r.easingFunction(i / o);
                                e.apply(t, r.property, r.interpolation(a))
                            }));
                            else
                                for (var o in r) "offset" != o && "easing" != o && "composite" != o && e.clear(t, o)
                        }
                    }
                }(n, r),
                function(t, e, n) {
                    function r(t) {
                        return t.replace(/-(.)/g, (function(t, e) {
                            return e.toUpperCase()
                        }))
                    }

                    function i(t, e, n) {
                        o[n] = o[n] || [], o[n].push([t, e])
                    }
                    var o = {};
                    e.addPropertiesHandler = function(t, e, n) {
                        for (var o = 0; o < n.length; o++) i(t, e, r(n[o]))
                    };
                    var a = {
                        backgroundColor: "transparent",
                        backgroundPosition: "0% 0%",
                        borderBottomColor: "currentColor",
                        borderBottomLeftRadius: "0px",
                        borderBottomRightRadius: "0px",
                        borderBottomWidth: "3px",
                        borderLeftColor: "currentColor",
                        borderLeftWidth: "3px",
                        borderRightColor: "currentColor",
                        borderRightWidth: "3px",
                        borderSpacing: "2px",
                        borderTopColor: "currentColor",
                        borderTopLeftRadius: "0px",
                        borderTopRightRadius: "0px",
                        borderTopWidth: "3px",
                        bottom: "auto",
                        clip: "rect(0px, 0px, 0px, 0px)",
                        color: "black",
                        fontSize: "100%",
                        fontWeight: "400",
                        height: "auto",
                        left: "auto",
                        letterSpacing: "normal",
                        lineHeight: "120%",
                        marginBottom: "0px",
                        marginLeft: "0px",
                        marginRight: "0px",
                        marginTop: "0px",
                        maxHeight: "none",
                        maxWidth: "none",
                        minHeight: "0px",
                        minWidth: "0px",
                        opacity: "1.0",
                        outlineColor: "invert",
                        outlineOffset: "0px",
                        outlineWidth: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        paddingTop: "0px",
                        right: "auto",
                        strokeDasharray: "none",
                        strokeDashoffset: "0px",
                        textIndent: "0px",
                        textShadow: "0px 0px 0px transparent",
                        top: "auto",
                        transform: "",
                        verticalAlign: "0px",
                        visibility: "visible",
                        width: "auto",
                        wordSpacing: "normal",
                        zIndex: "auto"
                    };
                    e.propertyInterpolation = function(n, i, s) {
                        var u = n;
                        /-/.test(n) && !t.isDeprecated("Hyphenated property names", "2016-03-22", "Use camelCase instead.", !0) && (u = r(n)), "initial" != i && "initial" != s || ("initial" == i && (i = a[u]), "initial" == s && (s = a[u]));
                        for (var l = i == s ? [] : o[u], c = 0; l && c < l.length; c++) {
                            var f = l[c][0](i),
                                d = l[c][0](s);
                            if (void 0 !== f && void 0 !== d) {
                                var h = l[c][1](f, d);
                                if (h) {
                                    var p = e.Interpolation.apply(null, h);
                                    return function(t) {
                                        return 0 == t ? i : 1 == t ? s : p(t)
                                    }
                                }
                            }
                        }
                        return e.Interpolation(!1, !0, (function(t) {
                            return t ? s : i
                        }))
                    }
                }(n, r),
                function(t, e, n) {
                    e.KeyframeEffect = function(n, r, i, o) {
                        var a, s = function(e) {
                                var n = t.calculateActiveDuration(e),
                                    r = function(r) {
                                        return t.calculateIterationProgress(n, r, e)
                                    };
                                return r._totalDuration = e.delay + n + e.endDelay, r
                            }(t.normalizeTimingInput(i)),
                            u = e.convertEffectInput(r),
                            l = function() {
                                u(n, a)
                            };
                        return l._update = function(t) {
                            return null !== (a = s(t))
                        }, l._clear = function() {
                            u(n, null)
                        }, l._hasSameTarget = function(t) {
                            return n === t
                        }, l._target = n, l._totalDuration = s._totalDuration, l._id = o, l
                    }
                }(n, r),
                function(t, e) {
                    function n(t, e, n) {
                        n.enumerable = !0, n.configurable = !0, Object.defineProperty(t, e, n)
                    }

                    function r(t) {
                        this._element = t, this._surrogateStyle = document.createElementNS("http://www.w3.org/1999/xhtml", "div").style, this._style = t.style, this._length = 0, this._isAnimatedProperty = {}, this._updateSvgTransformAttr = function(t, e) {
                            return !(!e.namespaceURI || -1 == e.namespaceURI.indexOf("/svg")) && (i in t || (t[i] = /Trident|MSIE|IEMobile|Edge|Android 4/i.test(t.navigator.userAgent)), t[i])
                        }(window, t), this._savedTransformAttr = null;
                        for (var e = 0; e < this._style.length; e++) {
                            var n = this._style[e];
                            this._surrogateStyle[n] = this._style[n]
                        }
                        this._updateIndices()
                    }
                    var i = "_webAnimationsUpdateSvgTransformAttr",
                        o = {
                            cssText: 1,
                            length: 1,
                            parentRule: 1
                        },
                        a = {
                            getPropertyCSSValue: 1,
                            getPropertyPriority: 1,
                            getPropertyValue: 1,
                            item: 1,
                            removeProperty: 1,
                            setProperty: 1
                        },
                        s = {
                            removeProperty: 1,
                            setProperty: 1
                        };
                    for (var u in r.prototype = {
                            get cssText() {
                                return this._surrogateStyle.cssText
                            },
                            set cssText(t) {
                                for (var e = {}, n = 0; n < this._surrogateStyle.length; n++) e[this._surrogateStyle[n]] = !0;
                                for (this._surrogateStyle.cssText = t, this._updateIndices(), n = 0; n < this._surrogateStyle.length; n++) e[this._surrogateStyle[n]] = !0;
                                for (var r in e) this._isAnimatedProperty[r] || this._style.setProperty(r, this._surrogateStyle.getPropertyValue(r))
                            },
                            get length() {
                                return this._surrogateStyle.length
                            },
                            get parentRule() {
                                return this._style.parentRule
                            },
                            _updateIndices: function() {
                                for (; this._length < this._surrogateStyle.length;) Object.defineProperty(this, this._length, {
                                    configurable: !0,
                                    enumerable: !1,
                                    get: function(t) {
                                        return function() {
                                            return this._surrogateStyle[t]
                                        }
                                    }(this._length)
                                }), this._length++;
                                for (; this._length > this._surrogateStyle.length;) this._length--, Object.defineProperty(this, this._length, {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: void 0
                                })
                            },
                            _set: function(e, n) {
                                this._style[e] = n, this._isAnimatedProperty[e] = !0, this._updateSvgTransformAttr && "transform" == t.unprefixedPropertyName(e) && (null == this._savedTransformAttr && (this._savedTransformAttr = this._element.getAttribute("transform")), this._element.setAttribute("transform", t.transformToSvgMatrix(n)))
                            },
                            _clear: function(e) {
                                this._style[e] = this._surrogateStyle[e], this._updateSvgTransformAttr && "transform" == t.unprefixedPropertyName(e) && (this._savedTransformAttr ? this._element.setAttribute("transform", this._savedTransformAttr) : this._element.removeAttribute("transform"), this._savedTransformAttr = null), delete this._isAnimatedProperty[e]
                            }
                        }, a) r.prototype[u] = function(t, e) {
                        return function() {
                            var n = this._surrogateStyle[t].apply(this._surrogateStyle, arguments);
                            return e && (this._isAnimatedProperty[arguments[0]] || this._style[t].apply(this._style, arguments), this._updateIndices()), n
                        }
                    }(u, u in s);
                    for (var l in document.documentElement.style) l in o || l in a || function(t) {
                        n(r.prototype, t, {
                            get: function() {
                                return this._surrogateStyle[t]
                            },
                            set: function(e) {
                                this._surrogateStyle[t] = e, this._updateIndices(), this._isAnimatedProperty[t] || (this._style[t] = e)
                            }
                        })
                    }(l);
                    t.apply = function(e, i, o) {
                        (function(t) {
                            if (!t._webAnimationsPatchedStyle) {
                                var e = new r(t);
                                try {
                                    n(t, "style", {
                                        get: function() {
                                            return e
                                        }
                                    })
                                } catch (e) {
                                    t.style._set = function(e, n) {
                                        t.style[e] = n
                                    }, t.style._clear = function(e) {
                                        t.style[e] = ""
                                    }
                                }
                                t._webAnimationsPatchedStyle = t.style
                            }
                        })(e), e.style._set(t.propertyName(i), o)
                    }, t.clear = function(e, n) {
                        e._webAnimationsPatchedStyle && e.style._clear(t.propertyName(n))
                    }
                }(r), i = r, window.Element.prototype.animate = function(t, e) {
                        var n = "";
                        return e && e.id && (n = e.id), i.timeline._play(i.KeyframeEffect(this, t, e, n))
                    }, r.Interpolation = function(t, e, n) {
                        return function(r) {
                            return n(function t(e, n, r) {
                                if ("number" == typeof e && "number" == typeof n) return e * (1 - r) + n * r;
                                if ("boolean" == typeof e && "boolean" == typeof n) return r < .5 ? e : n;
                                if (e.length == n.length) {
                                    for (var i = [], o = 0; o < e.length; o++) i.push(t(e[o], n[o], r));
                                    return i
                                }
                                throw "Mismatched interpolation arguments " + e + ":" + n
                            }(t, e, r))
                        }
                    },
                    function(t, e) {
                        var n = function() {
                            function t(t, e) {
                                for (var n = [
                                        [0, 0, 0, 0],
                                        [0, 0, 0, 0],
                                        [0, 0, 0, 0],
                                        [0, 0, 0, 0]
                                    ], r = 0; r < 4; r++)
                                    for (var i = 0; i < 4; i++)
                                        for (var o = 0; o < 4; o++) n[r][i] += e[r][o] * t[o][i];
                                return n
                            }
                            return function(e, n, r, i, o) {
                                for (var a = [
                                        [1, 0, 0, 0],
                                        [0, 1, 0, 0],
                                        [0, 0, 1, 0],
                                        [0, 0, 0, 1]
                                    ], s = 0; s < 4; s++) a[s][3] = o[s];
                                for (s = 0; s < 3; s++)
                                    for (var u = 0; u < 3; u++) a[3][s] += e[u] * a[u][s];
                                var l = i[0],
                                    c = i[1],
                                    f = i[2],
                                    d = i[3],
                                    h = [
                                        [1, 0, 0, 0],
                                        [0, 1, 0, 0],
                                        [0, 0, 1, 0],
                                        [0, 0, 0, 1]
                                    ];
                                h[0][0] = 1 - 2 * (c * c + f * f), h[0][1] = 2 * (l * c - f * d), h[0][2] = 2 * (l * f + c * d), h[1][0] = 2 * (l * c + f * d), h[1][1] = 1 - 2 * (l * l + f * f), h[1][2] = 2 * (c * f - l * d), h[2][0] = 2 * (l * f - c * d), h[2][1] = 2 * (c * f + l * d), h[2][2] = 1 - 2 * (l * l + c * c), a = t(a, h);
                                var p, m = [
                                    [1, 0, 0, 0],
                                    [0, 1, 0, 0],
                                    [0, 0, 1, 0],
                                    [0, 0, 0, 1]
                                ];
                                for (r[2] && (m[2][1] = r[2], a = t(a, m)), r[1] && (m[2][1] = 0, m[2][0] = r[0], a = t(a, m)), r[0] && (m[2][0] = 0, m[1][0] = r[0], a = t(a, m)), s = 0; s < 3; s++)
                                    for (u = 0; u < 3; u++) a[s][u] *= n[s];
                                return 0 == (p = a)[0][2] && 0 == p[0][3] && 0 == p[1][2] && 0 == p[1][3] && 0 == p[2][0] && 0 == p[2][1] && 1 == p[2][2] && 0 == p[2][3] && 0 == p[3][2] && 1 == p[3][3] ? [a[0][0], a[0][1], a[1][0], a[1][1], a[3][0], a[3][1]] : a[0].concat(a[1], a[2], a[3])
                            }
                        }();
                        t.composeMatrix = n, t.quat = function(e, n, r) {
                            var i = t.dot(e, n),
                                o = [];
                            if (1 === (i = function(t, e, n) {
                                    return Math.max(Math.min(t, 1), -1)
                                }(i))) o = e;
                            else
                                for (var a = Math.acos(i), s = 1 * Math.sin(r * a) / Math.sqrt(1 - i * i), u = 0; u < 4; u++) o.push(e[u] * (Math.cos(r * a) - i * s) + n[u] * s);
                            return o
                        }
                    }(r),
                    function(t, e, n) {
                        t.sequenceNumber = 0;
                        var r = function(t, e, n) {
                            this.target = t, this.currentTime = e, this.timelineTime = n, this.type = "finish", this.bubbles = !1, this.cancelable = !1, this.currentTarget = t, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now()
                        };
                        e.Animation = function(e) {
                            this.id = "", e && e._id && (this.id = e._id), this._sequenceNumber = t.sequenceNumber++, this._currentTime = 0, this._startTime = null, this._paused = !1, this._playbackRate = 1, this._inTimeline = !0, this._finishedFlag = !0, this.onfinish = null, this._finishHandlers = [], this._effect = e, this._inEffect = this._effect._update(0), this._idle = !0, this._currentTimePending = !1
                        }, e.Animation.prototype = {
                            _ensureAlive: function() {
                                this.playbackRate < 0 && 0 === this.currentTime ? this._inEffect = this._effect._update(-1) : this._inEffect = this._effect._update(this.currentTime), this._inTimeline || !this._inEffect && this._finishedFlag || (this._inTimeline = !0, e.timeline._animations.push(this))
                            },
                            _tickCurrentTime: function(t, e) {
                                t != this._currentTime && (this._currentTime = t, this._isFinished && !e && (this._currentTime = this._playbackRate > 0 ? this._totalDuration : 0), this._ensureAlive())
                            },
                            get currentTime() {
                                return this._idle || this._currentTimePending ? null : this._currentTime
                            },
                            set currentTime(t) {
                                t = +t, isNaN(t) || (e.restart(), this._paused || null == this._startTime || (this._startTime = this._timeline.currentTime - t / this._playbackRate), this._currentTimePending = !1, this._currentTime != t && (this._idle && (this._idle = !1, this._paused = !0), this._tickCurrentTime(t, !0), e.applyDirtiedAnimation(this)))
                            },
                            get startTime() {
                                return this._startTime
                            },
                            set startTime(t) {
                                t = +t, isNaN(t) || this._paused || this._idle || (this._startTime = t, this._tickCurrentTime((this._timeline.currentTime - this._startTime) * this.playbackRate), e.applyDirtiedAnimation(this))
                            },
                            get playbackRate() {
                                return this._playbackRate
                            },
                            set playbackRate(t) {
                                if (t != this._playbackRate) {
                                    var n = this.currentTime;
                                    this._playbackRate = t, this._startTime = null, "paused" != this.playState && "idle" != this.playState && (this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), e.applyDirtiedAnimation(this)), null != n && (this.currentTime = n)
                                }
                            },
                            get _isFinished() {
                                return !this._idle && (this._playbackRate > 0 && this._currentTime >= this._totalDuration || this._playbackRate < 0 && this._currentTime <= 0)
                            },
                            get _totalDuration() {
                                return this._effect._totalDuration
                            },
                            get playState() {
                                return this._idle ? "idle" : null == this._startTime && !this._paused && 0 != this.playbackRate || this._currentTimePending ? "pending" : this._paused ? "paused" : this._isFinished ? "finished" : "running"
                            },
                            _rewind: function() {
                                if (this._playbackRate >= 0) this._currentTime = 0;
                                else {
                                    if (!(this._totalDuration < 1 / 0)) throw new DOMException("Unable to rewind negative playback rate animation with infinite duration", "InvalidStateError");
                                    this._currentTime = this._totalDuration
                                }
                            },
                            play: function() {
                                this._paused = !1, (this._isFinished || this._idle) && (this._rewind(), this._startTime = null), this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), e.applyDirtiedAnimation(this)
                            },
                            pause: function() {
                                this._isFinished || this._paused || this._idle ? this._idle && (this._rewind(), this._idle = !1) : this._currentTimePending = !0, this._startTime = null, this._paused = !0
                            },
                            finish: function() {
                                this._idle || (this.currentTime = this._playbackRate > 0 ? this._totalDuration : 0, this._startTime = this._totalDuration - this.currentTime, this._currentTimePending = !1, e.applyDirtiedAnimation(this))
                            },
                            cancel: function() {
                                this._inEffect && (this._inEffect = !1, this._idle = !0, this._paused = !1, this._finishedFlag = !0, this._currentTime = 0, this._startTime = null, this._effect._update(null), e.applyDirtiedAnimation(this))
                            },
                            reverse: function() {
                                this.playbackRate *= -1, this.play()
                            },
                            addEventListener: function(t, e) {
                                "function" == typeof e && "finish" == t && this._finishHandlers.push(e)
                            },
                            removeEventListener: function(t, e) {
                                if ("finish" == t) {
                                    var n = this._finishHandlers.indexOf(e);
                                    n >= 0 && this._finishHandlers.splice(n, 1)
                                }
                            },
                            _fireEvents: function(t) {
                                if (this._isFinished) {
                                    if (!this._finishedFlag) {
                                        var e = new r(this, this._currentTime, t),
                                            n = this._finishHandlers.concat(this.onfinish ? [this.onfinish] : []);
                                        setTimeout((function() {
                                            n.forEach((function(t) {
                                                t.call(e.target, e)
                                            }))
                                        }), 0), this._finishedFlag = !0
                                    }
                                } else this._finishedFlag = !1
                            },
                            _tick: function(t, e) {
                                this._idle || this._paused || (null == this._startTime ? e && (this.startTime = t - this._currentTime / this.playbackRate) : this._isFinished || this._tickCurrentTime((t - this._startTime) * this.playbackRate)), e && (this._currentTimePending = !1, this._fireEvents(t))
                            },
                            get _needsTick() {
                                return this.playState in {
                                    pending: 1,
                                    running: 1
                                } || !this._finishedFlag
                            },
                            _targetAnimations: function() {
                                var t = this._effect._target;
                                return t._activeAnimations || (t._activeAnimations = []), t._activeAnimations
                            },
                            _markTarget: function() {
                                var t = this._targetAnimations(); - 1 === t.indexOf(this) && t.push(this)
                            },
                            _unmarkTarget: function() {
                                var t = this._targetAnimations(),
                                    e = t.indexOf(this); - 1 !== e && t.splice(e, 1)
                            }
                        }
                    }(n, r),
                    function(t, e, n) {
                        function r(t) {
                            var e = l;
                            l = [], t < m.currentTime && (t = m.currentTime), m._animations.sort(i), m._animations = s(t, !0, m._animations)[0], e.forEach((function(e) {
                                e[1](t)
                            })), a()
                        }

                        function i(t, e) {
                            return t._sequenceNumber - e._sequenceNumber
                        }

                        function o() {
                            this._animations = [], this.currentTime = window.performance && performance.now ? performance.now() : 0
                        }

                        function a() {
                            h.forEach((function(t) {
                                t()
                            })), h.length = 0
                        }

                        function s(t, n, r) {
                            p = !0, d = !1, e.timeline.currentTime = t, f = !1;
                            var i = [],
                                o = [],
                                a = [],
                                s = [];
                            return r.forEach((function(e) {
                                e._tick(t, n), e._inEffect ? (o.push(e._effect), e._markTarget()) : (i.push(e._effect), e._unmarkTarget()), e._needsTick && (f = !0);
                                var r = e._inEffect || e._needsTick;
                                e._inTimeline = r, r ? a.push(e) : s.push(e)
                            })), h.push.apply(h, i), h.push.apply(h, o), f && requestAnimationFrame((function() {})), p = !1, [a, s]
                        }
                        var u = window.requestAnimationFrame,
                            l = [],
                            c = 0;
                        window.requestAnimationFrame = function(t) {
                            var e = c++;
                            return 0 == l.length && u(r), l.push([e, t]), e
                        }, window.cancelAnimationFrame = function(t) {
                            l.forEach((function(e) {
                                e[0] == t && (e[1] = function() {})
                            }))
                        }, o.prototype = {
                            _play: function(n) {
                                n._timing = t.normalizeTimingInput(n.timing);
                                var r = new e.Animation(n);
                                return r._idle = !1, r._timeline = this, this._animations.push(r), e.restart(), e.applyDirtiedAnimation(r), r
                            }
                        };
                        var f = !1,
                            d = !1;
                        e.restart = function() {
                            return f || (f = !0, requestAnimationFrame((function() {})), d = !0), d
                        }, e.applyDirtiedAnimation = function(t) {
                            if (!p) {
                                t._markTarget();
                                var n = t._targetAnimations();
                                n.sort(i), s(e.timeline.currentTime, !1, n.slice())[1].forEach((function(t) {
                                    var e = m._animations.indexOf(t); - 1 !== e && m._animations.splice(e, 1)
                                })), a()
                            }
                        };
                        var h = [],
                            p = !1,
                            m = new o;
                        e.timeline = m
                    }(n, r),
                    function(t, e) {
                        function n(t, e) {
                            for (var n = 0, r = 0; r < t.length; r++) n += t[r] * e[r];
                            return n
                        }

                        function r(t, e) {
                            return [t[0] * e[0] + t[4] * e[1] + t[8] * e[2] + t[12] * e[3], t[1] * e[0] + t[5] * e[1] + t[9] * e[2] + t[13] * e[3], t[2] * e[0] + t[6] * e[1] + t[10] * e[2] + t[14] * e[3], t[3] * e[0] + t[7] * e[1] + t[11] * e[2] + t[15] * e[3], t[0] * e[4] + t[4] * e[5] + t[8] * e[6] + t[12] * e[7], t[1] * e[4] + t[5] * e[5] + t[9] * e[6] + t[13] * e[7], t[2] * e[4] + t[6] * e[5] + t[10] * e[6] + t[14] * e[7], t[3] * e[4] + t[7] * e[5] + t[11] * e[6] + t[15] * e[7], t[0] * e[8] + t[4] * e[9] + t[8] * e[10] + t[12] * e[11], t[1] * e[8] + t[5] * e[9] + t[9] * e[10] + t[13] * e[11], t[2] * e[8] + t[6] * e[9] + t[10] * e[10] + t[14] * e[11], t[3] * e[8] + t[7] * e[9] + t[11] * e[10] + t[15] * e[11], t[0] * e[12] + t[4] * e[13] + t[8] * e[14] + t[12] * e[15], t[1] * e[12] + t[5] * e[13] + t[9] * e[14] + t[13] * e[15], t[2] * e[12] + t[6] * e[13] + t[10] * e[14] + t[14] * e[15], t[3] * e[12] + t[7] * e[13] + t[11] * e[14] + t[15] * e[15]]
                        }

                        function i(t) {
                            var e = t.rad || 0;
                            return ((t.deg || 0) / 360 + (t.grad || 0) / 400 + (t.turn || 0)) * (2 * Math.PI) + e
                        }

                        function o(t) {
                            switch (t.t) {
                                case "rotatex":
                                    var e = i(t.d[0]);
                                    return [1, 0, 0, 0, 0, Math.cos(e), Math.sin(e), 0, 0, -Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1];
                                case "rotatey":
                                    return e = i(t.d[0]), [Math.cos(e), 0, -Math.sin(e), 0, 0, 1, 0, 0, Math.sin(e), 0, Math.cos(e), 0, 0, 0, 0, 1];
                                case "rotate":
                                case "rotatez":
                                    return e = i(t.d[0]), [Math.cos(e), Math.sin(e), 0, 0, -Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                                case "rotate3d":
                                    var n = t.d[0],
                                        r = t.d[1],
                                        o = t.d[2],
                                        a = (e = i(t.d[3]), n * n + r * r + o * o);
                                    if (0 === a) n = 1, r = 0, o = 0;
                                    else if (1 !== a) {
                                        var s = Math.sqrt(a);
                                        n /= s, r /= s, o /= s
                                    }
                                    var u = Math.sin(e / 2),
                                        l = u * Math.cos(e / 2),
                                        c = u * u;
                                    return [1 - 2 * (r * r + o * o) * c, 2 * (n * r * c + o * l), 2 * (n * o * c - r * l), 0, 2 * (n * r * c - o * l), 1 - 2 * (n * n + o * o) * c, 2 * (r * o * c + n * l), 0, 2 * (n * o * c + r * l), 2 * (r * o * c - n * l), 1 - 2 * (n * n + r * r) * c, 0, 0, 0, 0, 1];
                                case "scale":
                                    return [t.d[0], 0, 0, 0, 0, t.d[1], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                                case "scalex":
                                    return [t.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                                case "scaley":
                                    return [1, 0, 0, 0, 0, t.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                                case "scalez":
                                    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, t.d[0], 0, 0, 0, 0, 1];
                                case "scale3d":
                                    return [t.d[0], 0, 0, 0, 0, t.d[1], 0, 0, 0, 0, t.d[2], 0, 0, 0, 0, 1];
                                case "skew":
                                    var f = i(t.d[0]),
                                        d = i(t.d[1]);
                                    return [1, Math.tan(d), 0, 0, Math.tan(f), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                                case "skewx":
                                    return e = i(t.d[0]), [1, 0, 0, 0, Math.tan(e), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                                case "skewy":
                                    return e = i(t.d[0]), [1, Math.tan(e), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                                case "translate":
                                    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n = t.d[0].px || 0, r = t.d[1].px || 0, 0, 1];
                                case "translatex":
                                    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n = t.d[0].px || 0, 0, 0, 1];
                                case "translatey":
                                    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, r = t.d[0].px || 0, 0, 1];
                                case "translatez":
                                    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, o = t.d[0].px || 0, 1];
                                case "translate3d":
                                    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n = t.d[0].px || 0, r = t.d[1].px || 0, o = t.d[2].px || 0, 1];
                                case "perspective":
                                    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, t.d[0].px ? -1 / t.d[0].px : 0, 0, 0, 0, 1];
                                case "matrix":
                                    return [t.d[0], t.d[1], 0, 0, t.d[2], t.d[3], 0, 0, 0, 0, 1, 0, t.d[4], t.d[5], 0, 1];
                                case "matrix3d":
                                    return t.d
                            }
                        }

                        function a(t) {
                            return 0 === t.length ? [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] : t.map(o).reduce(r)
                        }
                        var s = function() {
                            function t(t) {
                                return t[0][0] * t[1][1] * t[2][2] + t[1][0] * t[2][1] * t[0][2] + t[2][0] * t[0][1] * t[1][2] - t[0][2] * t[1][1] * t[2][0] - t[1][2] * t[2][1] * t[0][0] - t[2][2] * t[0][1] * t[1][0]
                            }

                            function e(t) {
                                var e = r(t);
                                return [t[0] / e, t[1] / e, t[2] / e]
                            }

                            function r(t) {
                                return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2])
                            }

                            function i(t, e, n, r) {
                                return [n * t[0] + r * e[0], n * t[1] + r * e[1], n * t[2] + r * e[2]]
                            }
                            return function(o) {
                                var a = [o.slice(0, 4), o.slice(4, 8), o.slice(8, 12), o.slice(12, 16)];
                                if (1 !== a[3][3]) return null;
                                for (var s = [], u = 0; u < 4; u++) s.push(a[u].slice());
                                for (u = 0; u < 3; u++) s[u][3] = 0;
                                if (0 === t(s)) return null;
                                var l, c, f = [];
                                a[0][3] || a[1][3] || a[2][3] ? (f.push(a[0][3]), f.push(a[1][3]), f.push(a[2][3]), f.push(a[3][3]), l = function(t, e) {
                                    for (var n = [], r = 0; r < 4; r++) {
                                        for (var i = 0, o = 0; o < 4; o++) i += t[o] * e[o][r];
                                        n.push(i)
                                    }
                                    return n
                                }(f, [
                                    [(c = function(e) {
                                        for (var n = 1 / t(e), r = e[0][0], i = e[0][1], o = e[0][2], a = e[1][0], s = e[1][1], u = e[1][2], l = e[2][0], c = e[2][1], f = e[2][2], d = [
                                                [(s * f - u * c) * n, (o * c - i * f) * n, (i * u - o * s) * n, 0],
                                                [(u * l - a * f) * n, (r * f - o * l) * n, (o * a - r * u) * n, 0],
                                                [(a * c - s * l) * n, (l * i - r * c) * n, (r * s - i * a) * n, 0]
                                            ], h = [], p = 0; p < 3; p++) {
                                            for (var m = 0, g = 0; g < 3; g++) m += e[3][g] * d[g][p];
                                            h.push(m)
                                        }
                                        return h.push(1), d.push(h), d
                                    }(s))[0][0], c[1][0], c[2][0], c[3][0]],
                                    [c[0][1], c[1][1], c[2][1], c[3][1]],
                                    [c[0][2], c[1][2], c[2][2], c[3][2]],
                                    [c[0][3], c[1][3], c[2][3], c[3][3]]
                                ])) : l = [0, 0, 0, 1];
                                var d = a[3].slice(0, 3),
                                    h = [];
                                h.push(a[0].slice(0, 3));
                                var p = [];
                                p.push(r(h[0])), h[0] = e(h[0]);
                                var m = [];
                                h.push(a[1].slice(0, 3)), m.push(n(h[0], h[1])), h[1] = i(h[1], h[0], 1, -m[0]), p.push(r(h[1])), h[1] = e(h[1]), m[0] /= p[1], h.push(a[2].slice(0, 3)), m.push(n(h[0], h[2])), h[2] = i(h[2], h[0], 1, -m[1]), m.push(n(h[1], h[2])), h[2] = i(h[2], h[1], 1, -m[2]), p.push(r(h[2])), h[2] = e(h[2]), m[1] /= p[2], m[2] /= p[2];
                                var g = function(t, e) {
                                    return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
                                }(h[1], h[2]);
                                if (n(h[0], g) < 0)
                                    for (u = 0; u < 3; u++) p[u] *= -1, h[u][0] *= -1, h[u][1] *= -1, h[u][2] *= -1;
                                var v, b, y = h[0][0] + h[1][1] + h[2][2] + 1;
                                return y > 1e-4 ? (v = .5 / Math.sqrt(y), b = [(h[2][1] - h[1][2]) * v, (h[0][2] - h[2][0]) * v, (h[1][0] - h[0][1]) * v, .25 / v]) : h[0][0] > h[1][1] && h[0][0] > h[2][2] ? b = [.25 * (v = 2 * Math.sqrt(1 + h[0][0] - h[1][1] - h[2][2])), (h[0][1] + h[1][0]) / v, (h[0][2] + h[2][0]) / v, (h[2][1] - h[1][2]) / v] : h[1][1] > h[2][2] ? (v = 2 * Math.sqrt(1 + h[1][1] - h[0][0] - h[2][2]), b = [(h[0][1] + h[1][0]) / v, .25 * v, (h[1][2] + h[2][1]) / v, (h[0][2] - h[2][0]) / v]) : (v = 2 * Math.sqrt(1 + h[2][2] - h[0][0] - h[1][1]), b = [(h[0][2] + h[2][0]) / v, (h[1][2] + h[2][1]) / v, .25 * v, (h[1][0] - h[0][1]) / v]), [d, p, m, b, l]
                            }
                        }();
                        t.dot = n, t.makeMatrixDecomposition = function(t) {
                            return [s(a(t))]
                        }, t.transformListToMatrix = a
                    }(r),
                    function(t) {
                        function e(t, e) {
                            var n = t.exec(e);
                            if (n) return [n = t.ignoreCase ? n[0].toLowerCase() : n[0], e.substr(n.length)]
                        }

                        function n(t, e) {
                            var n = t(e = e.replace(/^\s*/, ""));
                            if (n) return [n[0], n[1].replace(/^\s*/, "")]
                        }

                        function r(t, e, n, r, i) {
                            for (var o = [], a = [], s = [], u = function(t, e) {
                                    for (var n = t, r = e; n && r;) n > r ? n %= r : r %= n;
                                    return t * e / (n + r)
                                }(r.length, i.length), l = 0; l < u; l++) {
                                var c = e(r[l % r.length], i[l % i.length]);
                                if (!c) return;
                                o.push(c[0]), a.push(c[1]), s.push(c[2])
                            }
                            return [o, a, function(e) {
                                var r = e.map((function(t, e) {
                                    return s[e](t)
                                })).join(n);
                                return t ? t(r) : r
                            }]
                        }
                        t.consumeToken = e, t.consumeTrimmed = n, t.consumeRepeated = function(t, r, i) {
                            t = n.bind(null, t);
                            for (var o = [];;) {
                                var a = t(i);
                                if (!a) return [o, i];
                                if (o.push(a[0]), !(a = e(r, i = a[1])) || "" == a[1]) return [o, i];
                                i = a[1]
                            }
                        }, t.consumeParenthesised = function(t, e) {
                            for (var n = 0, r = 0; r < e.length && (!/\s|,/.test(e[r]) || 0 != n); r++)
                                if ("(" == e[r]) n++;
                                else if (")" == e[r] && (0 == --n && r++, n <= 0)) break;
                            var i = t(e.substr(0, r));
                            return null == i ? void 0 : [i, e.substr(r)]
                        }, t.ignore = function(t) {
                            return function(e) {
                                var n = t(e);
                                return n && (n[0] = void 0), n
                            }
                        }, t.optional = function(t, e) {
                            return function(n) {
                                return t(n) || [e, n]
                            }
                        }, t.consumeList = function(e, n) {
                            for (var r = [], i = 0; i < e.length; i++) {
                                var o = t.consumeTrimmed(e[i], n);
                                if (!o || "" == o[0]) return;
                                void 0 !== o[0] && r.push(o[0]), n = o[1]
                            }
                            if ("" == n) return r
                        }, t.mergeNestedRepeated = r.bind(null, null), t.mergeWrappedNestedRepeated = r, t.mergeList = function(t, e, n) {
                            for (var r = [], i = [], o = [], a = 0, s = 0; s < n.length; s++)
                                if ("function" == typeof n[s]) {
                                    var u = n[s](t[a], e[a++]);
                                    r.push(u[0]), i.push(u[1]), o.push(u[2])
                                } else ! function(t) {
                                    r.push(!1), i.push(!1), o.push((function() {
                                        return n[t]
                                    }))
                                }(s);
                            return [r, i, function(t) {
                                for (var e = "", n = 0; n < t.length; n++) e += o[n](t[n]);
                                return e
                            }]
                        }
                    }(r),
                    function(t) {
                        function e(e) {
                            var n = {
                                    inset: !1,
                                    lengths: [],
                                    color: null
                                },
                                r = t.consumeRepeated((function(e) {
                                    var r = t.consumeToken(/^inset/i, e);
                                    return r ? (n.inset = !0, r) : (r = t.consumeLengthOrPercent(e)) ? (n.lengths.push(r[0]), r) : (r = t.consumeColor(e)) ? (n.color = r[0], r) : void 0
                                }), /^/, e);
                            if (r && r[0].length) return [n, r[1]]
                        }
                        var n = function(e, n, r, i) {
                            function o(t) {
                                return {
                                    inset: t,
                                    color: [0, 0, 0, 0],
                                    lengths: [{
                                        px: 0
                                    }, {
                                        px: 0
                                    }, {
                                        px: 0
                                    }, {
                                        px: 0
                                    }]
                                }
                            }
                            for (var a = [], s = [], u = 0; u < r.length || u < i.length; u++) {
                                var l = r[u] || o(i[u].inset),
                                    c = i[u] || o(r[u].inset);
                                a.push(l), s.push(c)
                            }
                            return t.mergeNestedRepeated(e, n, a, s)
                        }.bind(null, (function(e, n) {
                            for (; e.lengths.length < Math.max(e.lengths.length, n.lengths.length);) e.lengths.push({
                                px: 0
                            });
                            for (; n.lengths.length < Math.max(e.lengths.length, n.lengths.length);) n.lengths.push({
                                px: 0
                            });
                            if (e.inset == n.inset && !!e.color == !!n.color) {
                                for (var r, i = [], o = [
                                        [], 0
                                    ], a = [
                                        [], 0
                                    ], s = 0; s < e.lengths.length; s++) {
                                    var u = t.mergeDimensions(e.lengths[s], n.lengths[s], 2 == s);
                                    o[0].push(u[0]), a[0].push(u[1]), i.push(u[2])
                                }
                                if (e.color && n.color) {
                                    var l = t.mergeColors(e.color, n.color);
                                    o[1] = l[0], a[1] = l[1], r = l[2]
                                }
                                return [o, a, function(t) {
                                    for (var n = e.inset ? "inset " : " ", o = 0; o < i.length; o++) n += i[o](t[0][o]) + " ";
                                    return r && (n += r(t[1])), n
                                }]
                            }
                        }), ", ");
                        t.addPropertiesHandler((function(n) {
                            var r = t.consumeRepeated(e, /^,/, n);
                            if (r && "" == r[1]) return r[0]
                        }), n, ["box-shadow", "text-shadow"])
                    }(r),
                    function(t, e) {
                        function n(t) {
                            return t.toFixed(3).replace(/0+$/, "").replace(/\.$/, "")
                        }

                        function r(t, e, n) {
                            return Math.min(e, Math.max(t, n))
                        }

                        function i(t) {
                            if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(t)) return Number(t)
                        }

                        function o(t, e) {
                            return function(i, o) {
                                return [i, o, function(i) {
                                    return n(r(t, e, i))
                                }]
                            }
                        }

                        function a(t) {
                            var e = t.trim().split(/\s*[\s,]\s*/);
                            if (0 !== e.length) {
                                for (var n = [], r = 0; r < e.length; r++) {
                                    var o = i(e[r]);
                                    if (void 0 === o) return;
                                    n.push(o)
                                }
                                return n
                            }
                        }
                        t.clamp = r, t.addPropertiesHandler(a, (function(t, e) {
                            if (t.length == e.length) return [t, e, function(t) {
                                return t.map(n).join(" ")
                            }]
                        }), ["stroke-dasharray"]), t.addPropertiesHandler(i, o(0, 1 / 0), ["border-image-width", "line-height"]), t.addPropertiesHandler(i, o(0, 1), ["opacity", "shape-image-threshold"]), t.addPropertiesHandler(i, (function(t, e) {
                            if (0 != t) return o(0, 1 / 0)(t, e)
                        }), ["flex-grow", "flex-shrink"]), t.addPropertiesHandler(i, (function(t, e) {
                            return [t, e, function(t) {
                                return Math.round(r(1, 1 / 0, t))
                            }]
                        }), ["orphans", "widows"]), t.addPropertiesHandler(i, (function(t, e) {
                            return [t, e, Math.round]
                        }), ["z-index"]), t.parseNumber = i, t.parseNumberList = a, t.mergeNumbers = function(t, e) {
                            return [t, e, n]
                        }, t.numberToString = n
                    }(r), r.addPropertiesHandler(String, (function(t, e) {
                        if ("visible" == t || "visible" == e) return [0, 1, function(n) {
                            return n <= 0 ? t : n >= 1 ? e : "visible"
                        }]
                    }), ["visibility"]),
                    function(t, e) {
                        function n(t) {
                            t = t.trim(), o.fillStyle = "#000", o.fillStyle = t;
                            var e = o.fillStyle;
                            if (o.fillStyle = "#fff", o.fillStyle = t, e == o.fillStyle) {
                                o.fillRect(0, 0, 1, 1);
                                var n = o.getImageData(0, 0, 1, 1).data;
                                o.clearRect(0, 0, 1, 1);
                                var r = n[3] / 255;
                                return [n[0] * r, n[1] * r, n[2] * r, r]
                            }
                        }

                        function r(e, n) {
                            return [e, n, function(e) {
                                if (e[3])
                                    for (var n = 0; n < 3; n++) e[n] = Math.round((r = e[n] / e[3], Math.max(0, Math.min(255, r))));
                                var r;
                                return e[3] = t.numberToString(t.clamp(0, 1, e[3])), "rgba(" + e.join(",") + ")"
                            }]
                        }
                        var i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                        i.width = i.height = 1;
                        var o = i.getContext("2d");
                        t.addPropertiesHandler(n, r, ["background-color", "border-bottom-color", "border-left-color", "border-right-color", "border-top-color", "color", "fill", "flood-color", "lighting-color", "outline-color", "stop-color", "stroke", "text-decoration-color"]), t.consumeColor = t.consumeParenthesised.bind(null, n), t.mergeColors = r
                    }(r),
                    function(t, e) {
                        function n(t) {
                            function e() {
                                var e = a.exec(t);
                                o = e ? e[0] : void 0
                            }

                            function n() {
                                if ("(" !== o) return function() {
                                    var t = Number(o);
                                    return e(), t
                                }();
                                e();
                                var t = i();
                                return ")" !== o ? NaN : (e(), t)
                            }

                            function r() {
                                for (var t = n();
                                    "*" === o || "/" === o;) {
                                    var r = o;
                                    e();
                                    var i = n();
                                    "*" === r ? t *= i : t /= i
                                }
                                return t
                            }

                            function i() {
                                for (var t = r();
                                    "+" === o || "-" === o;) {
                                    var n = o;
                                    e();
                                    var i = r();
                                    "+" === n ? t += i : t -= i
                                }
                                return t
                            }
                            var o, a = /([\+\-\w\.]+|[\(\)\*\/])/g;
                            return e(), i()
                        }

                        function r(t, e) {
                            if ("0" == (e = e.trim().toLowerCase()) && "px".search(t) >= 0) return {
                                px: 0
                            };
                            if (/^[^(]*$|^calc/.test(e)) {
                                e = e.replace(/calc\(/g, "(");
                                var r = {};
                                e = e.replace(t, (function(t) {
                                    return r[t] = null, "U" + t
                                }));
                                for (var i = "U(" + t.source + ")", o = e.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g, "N").replace(new RegExp("N" + i, "g"), "D").replace(/\s[+-]\s/g, "O").replace(/\s/g, ""), a = [/N\*(D)/g, /(N|D)[*\/]N/g, /(N|D)O\1/g, /\((N|D)\)/g], s = 0; s < a.length;) a[s].test(o) ? (o = o.replace(a[s], "$1"), s = 0) : s++;
                                if ("D" == o) {
                                    for (var u in r) {
                                        var l = n(e.replace(new RegExp("U" + u, "g"), "").replace(new RegExp(i, "g"), "*0"));
                                        if (!isFinite(l)) return;
                                        r[u] = l
                                    }
                                    return r
                                }
                            }
                        }

                        function i(t, e) {
                            return o(t, e, !0)
                        }

                        function o(e, n, r) {
                            var i, o = [];
                            for (i in e) o.push(i);
                            for (i in n) o.indexOf(i) < 0 && o.push(i);
                            return e = o.map((function(t) {
                                return e[t] || 0
                            })), n = o.map((function(t) {
                                return n[t] || 0
                            })), [e, n, function(e) {
                                var n = e.map((function(n, i) {
                                    return 1 == e.length && r && (n = Math.max(n, 0)), t.numberToString(n) + o[i]
                                })).join(" + ");
                                return e.length > 1 ? "calc(" + n + ")" : n
                            }]
                        }
                        var a = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",
                            s = r.bind(null, new RegExp(a, "g")),
                            u = r.bind(null, new RegExp(a + "|%", "g")),
                            l = r.bind(null, /deg|rad|grad|turn/g);
                        t.parseLength = s, t.parseLengthOrPercent = u, t.consumeLengthOrPercent = t.consumeParenthesised.bind(null, u), t.parseAngle = l, t.mergeDimensions = o;
                        var c = t.consumeParenthesised.bind(null, s),
                            f = t.consumeRepeated.bind(void 0, c, /^/),
                            d = t.consumeRepeated.bind(void 0, f, /^,/);
                        t.consumeSizePairList = d;
                        var h = t.mergeNestedRepeated.bind(void 0, i, " "),
                            p = t.mergeNestedRepeated.bind(void 0, h, ",");
                        t.mergeNonNegativeSizePair = h, t.addPropertiesHandler((function(t) {
                            var e = d(t);
                            if (e && "" == e[1]) return e[0]
                        }), p, ["background-size"]), t.addPropertiesHandler(u, i, ["border-bottom-width", "border-image-width", "border-left-width", "border-right-width", "border-top-width", "flex-basis", "font-size", "height", "line-height", "max-height", "max-width", "outline-width", "width"]), t.addPropertiesHandler(u, o, ["border-bottom-left-radius", "border-bottom-right-radius", "border-top-left-radius", "border-top-right-radius", "bottom", "left", "letter-spacing", "margin-bottom", "margin-left", "margin-right", "margin-top", "min-height", "min-width", "outline-offset", "padding-bottom", "padding-left", "padding-right", "padding-top", "perspective", "right", "shape-margin", "stroke-dashoffset", "text-indent", "top", "vertical-align", "word-spacing"])
                    }(r),
                    function(t, e) {
                        function n(e) {
                            return t.consumeLengthOrPercent(e) || t.consumeToken(/^auto/, e)
                        }

                        function r(e) {
                            var r = t.consumeList([t.ignore(t.consumeToken.bind(null, /^rect/)), t.ignore(t.consumeToken.bind(null, /^\(/)), t.consumeRepeated.bind(null, n, /^,/), t.ignore(t.consumeToken.bind(null, /^\)/))], e);
                            if (r && 4 == r[0].length) return r[0]
                        }
                        var i = t.mergeWrappedNestedRepeated.bind(null, (function(t) {
                            return "rect(" + t + ")"
                        }), (function(e, n) {
                            return "auto" == e || "auto" == n ? [!0, !1, function(r) {
                                var i = r ? e : n;
                                if ("auto" == i) return "auto";
                                var o = t.mergeDimensions(i, i);
                                return o[2](o[0])
                            }] : t.mergeDimensions(e, n)
                        }), ", ");
                        t.parseBox = r, t.mergeBoxes = i, t.addPropertiesHandler(r, i, ["clip"])
                    }(r),
                    function(t, e) {
                        function n(t) {
                            return function(e) {
                                var n = 0;
                                return t.map((function(t) {
                                    return t === l ? e[n++] : t
                                }))
                            }
                        }

                        function r(t) {
                            return t
                        }

                        function i(e) {
                            if ("none" == (e = e.toLowerCase().trim())) return [];
                            for (var n, r = /\s*(\w+)\(([^)]*)\)/g, i = [], o = 0; n = r.exec(e);) {
                                if (n.index != o) return;
                                o = n.index + n[0].length;
                                var a = n[1],
                                    s = d[a];
                                if (!s) return;
                                var u = n[2].split(","),
                                    l = s[0];
                                if (l.length < u.length) return;
                                for (var h = [], p = 0; p < l.length; p++) {
                                    var m, g = u[p],
                                        v = l[p];
                                    if (void 0 === (m = g ? {
                                            A: function(e) {
                                                return "0" == e.trim() ? f : t.parseAngle(e)
                                            },
                                            N: t.parseNumber,
                                            T: t.parseLengthOrPercent,
                                            L: t.parseLength
                                        } [v.toUpperCase()](g) : {
                                            a: f,
                                            n: h[0],
                                            t: c
                                        } [v])) return;
                                    h.push(m)
                                }
                                if (i.push({
                                        t: a,
                                        d: h
                                    }), r.lastIndex == e.length) return i
                            }
                        }

                        function o(t) {
                            return t.toFixed(6).replace(".000000", "")
                        }

                        function a(e, n) {
                            if (e.decompositionPair !== n) {
                                e.decompositionPair = n;
                                var r = t.makeMatrixDecomposition(e)
                            }
                            if (n.decompositionPair !== e) {
                                n.decompositionPair = e;
                                var i = t.makeMatrixDecomposition(n)
                            }
                            return null == r[0] || null == i[0] ? [
                                [!1],
                                [!0],
                                function(t) {
                                    return t ? n[0].d : e[0].d
                                }
                            ] : (r[0].push(0), i[0].push(1), [r, i, function(e) {
                                var n = t.quat(r[0][3], i[0][3], e[5]);
                                return t.composeMatrix(e[0], e[1], e[2], n, e[4]).map(o).join(",")
                            }])
                        }

                        function s(t) {
                            return t.replace(/[xy]/, "")
                        }

                        function u(t) {
                            return t.replace(/(x|y|z|3d)?$/, "3d")
                        }
                        var l = null,
                            c = {
                                px: 0
                            },
                            f = {
                                deg: 0
                            },
                            d = {
                                matrix: ["NNNNNN", [l, l, 0, 0, l, l, 0, 0, 0, 0, 1, 0, l, l, 0, 1], r],
                                matrix3d: ["NNNNNNNNNNNNNNNN", r],
                                rotate: ["A"],
                                rotatex: ["A"],
                                rotatey: ["A"],
                                rotatez: ["A"],
                                rotate3d: ["NNNA"],
                                perspective: ["L"],
                                scale: ["Nn", n([l, l, 1]), r],
                                scalex: ["N", n([l, 1, 1]), n([l, 1])],
                                scaley: ["N", n([1, l, 1]), n([1, l])],
                                scalez: ["N", n([1, 1, l])],
                                scale3d: ["NNN", r],
                                skew: ["Aa", null, r],
                                skewx: ["A", null, n([l, f])],
                                skewy: ["A", null, n([f, l])],
                                translate: ["Tt", n([l, l, c]), r],
                                translatex: ["T", n([l, c, c]), n([l, c])],
                                translatey: ["T", n([c, l, c]), n([c, l])],
                                translatez: ["L", n([c, c, l])],
                                translate3d: ["TTL", r]
                            };
                        t.addPropertiesHandler(i, (function(e, n) {
                            var r = t.makeMatrixDecomposition && !0,
                                i = !1;
                            if (!e.length || !n.length) {
                                e.length || (i = !0, e = n, n = []);
                                for (var o = 0; o < e.length; o++) {
                                    var l = e[o].t,
                                        c = e[o].d,
                                        f = "scale" == l.substr(0, 5) ? 1 : 0;
                                    n.push({
                                        t: l,
                                        d: c.map((function(t) {
                                            if ("number" == typeof t) return f;
                                            var e = {};
                                            for (var n in t) e[n] = f;
                                            return e
                                        }))
                                    })
                                }
                            }
                            var h, p, m = [],
                                g = [],
                                v = [];
                            if (e.length != n.length) {
                                if (!r) return;
                                m = [(E = a(e, n))[0]], g = [E[1]], v = [
                                    ["matrix", [E[2]]]
                                ]
                            } else
                                for (o = 0; o < e.length; o++) {
                                    var b = e[o].t,
                                        y = n[o].t,
                                        _ = e[o].d,
                                        w = n[o].d,
                                        T = d[b],
                                        x = d[y];
                                    if (p = y, "perspective" == (h = b) && "perspective" == p || ("matrix" == h || "matrix3d" == h) && ("matrix" == p || "matrix3d" == p)) {
                                        if (!r) return;
                                        var E = a([e[o]], [n[o]]);
                                        m.push(E[0]), g.push(E[1]), v.push(["matrix", [E[2]]])
                                    } else {
                                        if (b == y) l = b;
                                        else if (T[2] && x[2] && s(b) == s(y)) l = s(b), _ = T[2](_), w = x[2](w);
                                        else {
                                            if (!T[1] || !x[1] || u(b) != u(y)) {
                                                if (!r) return;
                                                m = [(E = a(e, n))[0]], g = [E[1]], v = [
                                                    ["matrix", [E[2]]]
                                                ];
                                                break
                                            }
                                            l = u(b), _ = T[1](_), w = x[1](w)
                                        }
                                        for (var S = [], P = [], k = [], N = 0; N < _.length; N++) E = ("number" == typeof _[N] ? t.mergeNumbers : t.mergeDimensions)(_[N], w[N]), S[N] = E[0], P[N] = E[1], k.push(E[2]);
                                        m.push(S), g.push(P), v.push([l, k])
                                    }
                                }
                            if (i) {
                                var A = m;
                                m = g, g = A
                            }
                            return [m, g, function(t) {
                                return t.map((function(t, e) {
                                    var n = t.map((function(t, n) {
                                        return v[e][1][n](t)
                                    })).join(",");
                                    return "matrix" == v[e][0] && 16 == n.split(",").length && (v[e][0] = "matrix3d"), v[e][0] + "(" + n + ")"
                                })).join(" ")
                            }]
                        }), ["transform"]), t.transformToSvgMatrix = function(e) {
                            var n = t.transformListToMatrix(i(e));
                            return "matrix(" + o(n[0]) + " " + o(n[1]) + " " + o(n[4]) + " " + o(n[5]) + " " + o(n[12]) + " " + o(n[13]) + ")"
                        }
                    }(r),
                    function(t) {
                        function e(e) {
                            return e = 100 * Math.round(e / 100), 400 === (e = t.clamp(100, 900, e)) ? "normal" : 700 === e ? "bold" : String(e)
                        }
                        t.addPropertiesHandler((function(t) {
                            var e = Number(t);
                            if (!(isNaN(e) || e < 100 || e > 900 || e % 100 != 0)) return e
                        }), (function(t, n) {
                            return [t, n, e]
                        }), ["font-weight"])
                    }(r),
                    function(t) {
                        function e(t) {
                            var e = {};
                            for (var n in t) e[n] = -t[n];
                            return e
                        }

                        function n(e) {
                            return t.consumeToken(/^(left|center|right|top|bottom)\b/i, e) || t.consumeLengthOrPercent(e)
                        }

                        function r(e, r) {
                            var i = t.consumeRepeated(n, /^/, r);
                            if (i && "" == i[1]) {
                                var a = i[0];
                                if (a[0] = a[0] || "center", a[1] = a[1] || "center", 3 == e && (a[2] = a[2] || {
                                        px: 0
                                    }), a.length == e) {
                                    if (/top|bottom/.test(a[0]) || /left|right/.test(a[1])) {
                                        var s = a[0];
                                        a[0] = a[1], a[1] = s
                                    }
                                    if (/left|right|center|Object/.test(a[0]) && /top|bottom|center|Object/.test(a[1])) return a.map((function(t) {
                                        return "object" == typeof t ? t : o[t]
                                    }))
                                }
                            }
                        }

                        function i(r) {
                            var i = t.consumeRepeated(n, /^/, r);
                            if (i) {
                                for (var a = i[0], s = [{
                                        "%": 50
                                    }, {
                                        "%": 50
                                    }], u = 0, l = !1, c = 0; c < a.length; c++) {
                                    var f = a[c];
                                    "string" == typeof f ? (l = /bottom|right/.test(f), s[u = {
                                        left: 0,
                                        right: 0,
                                        center: u,
                                        top: 1,
                                        bottom: 1
                                    } [f]] = o[f], "center" == f && u++) : (l && ((f = e(f))["%"] = (f["%"] || 0) + 100), s[u] = f, u++, l = !1)
                                }
                                return [s, i[1]]
                            }
                        }
                        var o = {
                                left: {
                                    "%": 0
                                },
                                center: {
                                    "%": 50
                                },
                                right: {
                                    "%": 100
                                },
                                top: {
                                    "%": 0
                                },
                                bottom: {
                                    "%": 100
                                }
                            },
                            a = t.mergeNestedRepeated.bind(null, t.mergeDimensions, " ");
                        t.addPropertiesHandler(r.bind(null, 3), a, ["transform-origin"]), t.addPropertiesHandler(r.bind(null, 2), a, ["perspective-origin"]), t.consumePosition = i, t.mergeOffsetList = a;
                        var s = t.mergeNestedRepeated.bind(null, a, ", ");
                        t.addPropertiesHandler((function(e) {
                            var n = t.consumeRepeated(i, /^,/, e);
                            if (n && "" == n[1]) return n[0]
                        }), s, ["background-position", "object-position"])
                    }(r),
                    function(t) {
                        var e = t.consumeParenthesised.bind(null, t.parseLengthOrPercent),
                            n = t.consumeRepeated.bind(void 0, e, /^/),
                            r = t.mergeNestedRepeated.bind(void 0, t.mergeDimensions, " "),
                            i = t.mergeNestedRepeated.bind(void 0, r, ",");
                        t.addPropertiesHandler((function(r) {
                            var i = t.consumeToken(/^circle/, r);
                            if (i && i[0]) return ["circle"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0, /^\(/)), e, t.ignore(t.consumeToken.bind(void 0, /^at/)), t.consumePosition, t.ignore(t.consumeToken.bind(void 0, /^\)/))], i[1]));
                            var o = t.consumeToken(/^ellipse/, r);
                            if (o && o[0]) return ["ellipse"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0, /^\(/)), n, t.ignore(t.consumeToken.bind(void 0, /^at/)), t.consumePosition, t.ignore(t.consumeToken.bind(void 0, /^\)/))], o[1]));
                            var a = t.consumeToken(/^polygon/, r);
                            return a && a[0] ? ["polygon"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0, /^\(/)), t.optional(t.consumeToken.bind(void 0, /^nonzero\s*,|^evenodd\s*,/), "nonzero,"), t.consumeSizePairList, t.ignore(t.consumeToken.bind(void 0, /^\)/))], a[1])) : void 0
                        }), (function(e, n) {
                            if (e[0] === n[0]) return "circle" == e[0] ? t.mergeList(e.slice(1), n.slice(1), ["circle(", t.mergeDimensions, " at ", t.mergeOffsetList, ")"]) : "ellipse" == e[0] ? t.mergeList(e.slice(1), n.slice(1), ["ellipse(", t.mergeNonNegativeSizePair, " at ", t.mergeOffsetList, ")"]) : "polygon" == e[0] && e[1] == n[1] ? t.mergeList(e.slice(2), n.slice(2), ["polygon(", e[1], i, ")"]) : void 0
                        }), ["shape-outside"])
                    }(r),
                    function(t, e) {
                        function n(t, e) {
                            e.concat([t]).forEach((function(e) {
                                e in document.documentElement.style && (r[t] = e), i[e] = t
                            }))
                        }
                        var r = {},
                            i = {};
                        n("transform", ["webkitTransform", "msTransform"]), n("transformOrigin", ["webkitTransformOrigin"]), n("perspective", ["webkitPerspective"]), n("perspectiveOrigin", ["webkitPerspectiveOrigin"]), t.propertyName = function(t) {
                            return r[t] || t
                        }, t.unprefixedPropertyName = function(t) {
                            return i[t] || t
                        }
                    }(r)
            }(),
            function() {
                if (void 0 === document.createElement("div").animate([]).oncancel) {
                    if (window.performance && performance.now) var t = function() {
                        return performance.now()
                    };
                    else t = function() {
                        return Date.now()
                    };
                    var e = function(t, e, n) {
                            this.target = t, this.currentTime = e, this.timelineTime = n, this.type = "cancel", this.bubbles = !1, this.cancelable = !1, this.currentTarget = t, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now()
                        },
                        n = window.Element.prototype.animate;
                    window.Element.prototype.animate = function(r, i) {
                        var o = n.call(this, r, i);
                        o._cancelHandlers = [], o.oncancel = null;
                        var a = o.cancel;
                        o.cancel = function() {
                            a.call(this);
                            var n = new e(this, null, t()),
                                r = this._cancelHandlers.concat(this.oncancel ? [this.oncancel] : []);
                            setTimeout((function() {
                                r.forEach((function(t) {
                                    t.call(n.target, n)
                                }))
                            }), 0)
                        };
                        var s = o.addEventListener;
                        o.addEventListener = function(t, e) {
                            "function" == typeof e && "cancel" == t ? this._cancelHandlers.push(e) : s.call(this, t, e)
                        };
                        var u = o.removeEventListener;
                        return o.removeEventListener = function(t, e) {
                            if ("cancel" == t) {
                                var n = this._cancelHandlers.indexOf(e);
                                n >= 0 && this._cancelHandlers.splice(n, 1)
                            } else u.call(this, t, e)
                        }, o
                    }
                }
            }(),
            function(t) {
                var e = document.documentElement,
                    n = null,
                    r = !1;
                try {
                    var i = "0" == getComputedStyle(e).getPropertyValue("opacity") ? "1" : "0";
                    (n = e.animate({
                        opacity: [i, i]
                    }, {
                        duration: 1
                    })).currentTime = 0, r = getComputedStyle(e).getPropertyValue("opacity") == i
                } catch (t) {} finally {
                    n && n.cancel()
                }
                if (!r) {
                    var o = window.Element.prototype.animate;
                    window.Element.prototype.animate = function(e, n) {
                        return window.Symbol && Symbol.iterator && Array.prototype.from && e[Symbol.iterator] && (e = Array.from(e)), Array.isArray(e) || null === e || (e = t.convertToArrayForm(e)), o.call(this, e, n)
                    }
                }
            }(n)
    }(),
    function(t, e) {
        if ("function" != typeof t.createEvent) return !1;
        var n, r, i, o, a, s, u, l, c, f = function(t) {
                var e = t.toLowerCase(),
                    n = "MS" + t;
                return navigator.msPointerEnabled ? n : !!window.PointerEvent && e
            },
            d = function(t) {
                return "on" + t in window && t
            },
            h = {
                useJquery: !e.IGNORE_JQUERY && "undefined" != typeof jQuery,
                swipeThreshold: e.SWIPE_THRESHOLD || 100,
                tapThreshold: e.TAP_THRESHOLD || 150,
                dbltapThreshold: e.DBL_TAP_THRESHOLD || 200,
                longtapThreshold: e.LONG_TAP_THRESHOLD || 1e3,
                tapPrecision: e.TAP_PRECISION / 2 || 30,
                justTouchEvents: e.JUST_ON_TOUCH_DEVICES
            },
            p = !1,
            m = d("touchstart") || f("PointerDown"),
            g = d("touchend") || f("PointerUp"),
            v = d("touchmove") || f("PointerMove"),
            b = function(t) {
                return !t.pointerId || void 0 === n || t.pointerId === n
            },
            y = function(t, e, n) {
                for (var r = e.split(" "), i = r.length; i--;) t.addEventListener(r[i], n, !1)
            },
            _ = function(t) {
                var e = Boolean(t.targetTouches && t.targetTouches.length);
                switch (!0) {
                    case Boolean(t.target.touches):
                        return t.target.touches[0];
                    case e && void 0 !== t.targetTouches[0].pageX:
                        return t.targetTouches[0];
                    case e && Boolean(t.targetTouches[0].touches):
                        return t.targetTouches[0].touches[0];
                    default:
                        return t
                }
            },
            w = function(t) {
                return (t.targetTouches || t.target.touches || []).length > 1
            },
            T = function() {
                return (new Date).getTime()
            },
            x = function(e, n, o, a) {
                var s = t.createEvent("Event");
                if (s.originalEvent = o, (a = a || {}).x = r, a.y = i, h.useJquery && (s = jQuery.Event(n, {
                        originalEvent: o
                    }), jQuery(e).trigger(s, a)), s.initEvent) {
                    for (var u in a) s[u] = a[u];
                    s.initEvent(n, !0, !0), e.dispatchEvent(s)
                }
                for (; e;) e["on" + n] && e["on" + n](s), e = e.parentNode
            },
            E = 0;
        y(t, m + (h.justTouchEvents ? "" : " mousedown"), (function(t) {
            if (b(t) && !w(t) && (n = t.pointerId, "mousedown" !== t.type && (p = !0), "mousedown" !== t.type || !p)) {
                var e = _(t);
                o = r = e.pageX, a = i = e.pageY, c = setTimeout((function() {
                    x(t.target, "longtap", t), u = t.target
                }), h.longtapThreshold), s = T(), E++
            }
        })), y(t, g + (h.justTouchEvents ? "" : " mouseup"), (function(t) {
            if (b(t) && !w(t))
                if (n = void 0, "mouseup" === t.type && p) p = !1;
                else {
                    var e = [],
                        f = T(),
                        d = a - i,
                        m = o - r;
                    if (clearTimeout(l), clearTimeout(c), m <= -h.swipeThreshold && e.push("swiperight"), m >= h.swipeThreshold && e.push("swipeleft"), d <= -h.swipeThreshold && e.push("swipedown"), d >= h.swipeThreshold && e.push("swipeup"), e.length) {
                        for (var g = 0; g < e.length; g++) {
                            var v = e[g];
                            x(t.target, v, t, {
                                distance: {
                                    x: Math.abs(m),
                                    y: Math.abs(d)
                                }
                            })
                        }
                        E = 0
                    } else o >= r - h.tapPrecision && o <= r + h.tapPrecision && a >= i - h.tapPrecision && a <= i + h.tapPrecision && s + h.tapThreshold - f >= 0 && (x(t.target, E >= 2 && u === t.target ? "dbltap" : "tap", t), u = t.target), l = setTimeout((function() {
                        E = 0
                    }), h.dbltapThreshold)
                }
        })), y(t, v + (h.justTouchEvents ? "" : " mousemove"), (function(t) {
            if (b(t) && ("mousemove" !== t.type || !p)) {
                var e = _(t);
                r = e.pageX, i = e.pageY
            }
        })), e.tocca = function(t) {
            for (var e in t) h[e] = t[e];
            return h
        }
    }(document, window);
    var n = new Set,
        r = document.createElement("link"),
        i = r.relList && r.relList.supports && r.relList.supports("prefetch") && window.IntersectionObserver && "isIntersecting" in IntersectionObserverEntry.prototype,
        o = "instantAllowQueryString" in document.body.dataset,
        a = "instantAllowExternalLinks" in document.body.dataset,
        s = "instantWhitelist" in document.body.dataset,
        u = "instantMousedownShortcut" in document.body.dataset,
        l = 65,
        c = !1,
        f = !1,
        d = !1;
    if ("instantIntensity" in document.body.dataset) {
        const t = document.body.dataset.instantIntensity;
        if ("mousedown" == t.substr(0, "mousedown".length)) c = !0, "mousedown-only" == t && (f = !0);
        else if ("viewport" == t.substr(0, "viewport".length)) navigator.connection && (navigator.connection.saveData || navigator.connection.effectiveType && navigator.connection.effectiveType.includes("2g")) || ("viewport" == t ? document.documentElement.clientWidth * document.documentElement.clientHeight < 45e4 && (d = !0) : "viewport-all" == t && (d = !0));
        else {
            const e = parseInt(t);
            isNaN(e) || (l = e)
        }
    }
    if (i) {
        const n = {
            capture: !0,
            passive: !0
        };
        if (f || document.addEventListener("touchstart", (function(t) {
                e = performance.now();
                const n = t.target.closest("a");
                p(n) && m(n.href)
            }), n), c ? u || document.addEventListener("mousedown", (function(t) {
                const e = t.target.closest("a");
                p(e) && m(e.href)
            }), n) : document.addEventListener("mouseover", (function(n) {
                if (performance.now() - e < 1111) return;
                const r = n.target.closest("a");
                p(r) && (r.addEventListener("mouseout", h, {
                    passive: !0
                }), t = setTimeout((() => {
                    m(r.href), t = void 0
                }), l))
            }), n), u && document.addEventListener("mousedown", (function(t) {
                if (performance.now() - e < 1111) return;
                const n = t.target.closest("a");
                if (t.which > 1 || t.metaKey || t.ctrlKey) return;
                if (!n) return;
                n.addEventListener("click", (function(t) {
                    1337 != t.detail && t.preventDefault()
                }), {
                    capture: !0,
                    passive: !1,
                    once: !0
                });
                const r = new MouseEvent("click", {
                    view: window,
                    bubbles: !0,
                    cancelable: !1,
                    detail: 1337
                });
                n.dispatchEvent(r)
            }), n), d) {
            let t;
            (t = window.requestIdleCallback ? t => {
                requestIdleCallback(t, {
                    timeout: 1500
                })
            } : t => {
                t()
            })((() => {
                const t = new IntersectionObserver((e => {
                    e.forEach((e => {
                        if (e.isIntersecting) {
                            const n = e.target;
                            t.unobserve(n), m(n.href)
                        }
                    }))
                }));
                document.querySelectorAll("a").forEach((e => {
                    p(e) && t.observe(e)
                }))
            }))
        }
    }

    function h(e) {
        e.relatedTarget && e.target.closest("a") == e.relatedTarget.closest("a") || t && (clearTimeout(t), t = void 0)
    }

    function p(t) {
        if (t && t.href && (!s || "instant" in t.dataset) && (a || t.origin == location.origin || "instant" in t.dataset) && ["http:", "https:"].includes(t.protocol) && ("http:" != t.protocol || "https:" != location.protocol) && (o || !t.search || "instant" in t.dataset) && !(t.hash && t.pathname + t.search == location.pathname + location.search || "noInstant" in t.dataset)) return !0
    }

    function m(t) {
        if (n.has(t)) return;
        const e = document.createElement("link");
        e.rel = "prefetch", e.href = t, document.head.appendChild(e), n.add(t)
    }
    var g = t => void 0 === t || "auto" === t || "instant" === t || "smooth" === t;

    function v(t, e) {
        this.scrollLeft = t, this.scrollTop = e
    }
    var b = (t, e, n = "cannot convert to dictionary.") => `Failed to execute '${t}' on '${e}': ${n}`,
        y = (t, e, n) => b(t, e, `The provided value '${n}' is not a valid enum value of type ScrollBehavior.`),
        _ = (t, e, n) => {
            var r;
            const i = `__SEAMLESS.BACKUP$${e}`;
            return t[i] || !t[e] || (null == (r = t[e]) ? void 0 : r.__isPolyfill) || (t[i] = t[e]), t[i] || n
        },
        w = t => {
            const e = typeof t;
            return null !== t && ("object" === e || "function" === e)
        },
        T = () => "scrollBehavior" in window.document.documentElement.style,
        x = t => {
            Object.defineProperty(t, "__isPolyfill", {
                value: !0
            })
        },
        E = (t, e) => {
            x(e), [HTMLElement.prototype, SVGElement.prototype, Element.prototype].forEach((n => {
                _(n, t), n[t] = e
            }))
        },
        S = t => t.ownerDocument.scrollingElement || t.ownerDocument.documentElement,
        P = () => {
            var t, e, n;
            return null != (n = null == (e = null == (t = window.performance) ? void 0 : t.now) ? void 0 : e.call(t)) ? n : window.Date.now()
        },
        k = t => {
            const e = (P() - t.timeStamp) / (t.duration || 500);
            if (e > 1) return t.method(t.targetX, t.targetY), void t.callback();
            const n = (t.timingFunc || (t => .5 * (1 - Math.cos(Math.PI * t))))(e),
                r = t.startX + (t.targetX - t.startX) * n,
                i = t.startY + (t.targetY - t.startY) * n;
            t.method(r, i), t.rafId = window.requestAnimationFrame((() => {
                k(t)
            }))
        },
        N = t => isFinite(t) ? Number(t) : 0,
        A = t => (e, n, r) => {
            const [i, o] = (t => t.window === t)(e) ? [S(e.document.documentElement), "Window"] : [e, "Element"], a = null != n ? n : {};
            if (!w(a)) throw new TypeError(b(t, o));
            if (!g(a.behavior)) throw new TypeError(y(t, o, a.behavior));
            "scrollBy" === t && (a.left = N(a.left) + i.scrollLeft, a.top = N(a.top) + i.scrollTop), ((t, e, n) => {
                var r, i;
                if (!(t => {
                        var e;
                        return null != (e = t.isConnected) ? e : !(t.ownerDocument && 1 & t.ownerDocument.compareDocumentPosition(t))
                    })(t)) return;
                const o = t.scrollLeft,
                    a = t.scrollTop,
                    s = N(null != (r = e.left) ? r : o),
                    u = N(null != (i = e.top) ? i : a);
                if (s === o && u === a) return;
                const l = _(HTMLElement.prototype, "scroll", v),
                    c = _(Object.getPrototypeOf(t), "scroll", l).bind(t);
                if ("smooth" !== e.behavior) return void c(s, u);
                const f = () => {
                        window.removeEventListener("wheel", h), window.removeEventListener("touchmove", h)
                    },
                    d = {
                        ...n,
                        timeStamp: P(),
                        startX: o,
                        startY: a,
                        targetX: s,
                        targetY: u,
                        rafId: 0,
                        method: c,
                        callback: f
                    },
                    h = () => {
                        window.cancelAnimationFrame(d.rafId), f()
                    };
                window.addEventListener("wheel", h, {
                    passive: !0,
                    once: !0
                }), window.addEventListener("touchmove", h, {
                    passive: !0,
                    once: !0
                }), k(d)
            })(i, a, r)
        },
        R = A("scroll"),
        M = A("scrollTo"),
        L = A("scrollBy"),
        D = R,
        O = t => {
            switch (t) {
                case "horizontal-tb":
                case "lr":
                case "lr-tb":
                case "rl":
                case "rl-tb":
                    return 0;
                case "vertical-rl":
                case "tb":
                case "tb-rl":
                    return 1;
                case "vertical-lr":
                case "tb-lr":
                    return 2;
                case "sideways-rl":
                    return 3;
                case "sideways-lr":
                    return 4
            }
            return 0
        },
        I = (t, e, n, r) => {
            let i = 0;
            switch (e || (i ^= 2), t) {
                case 0:
                    i = i >> 1 | (1 & i) << 1, [n, r] = [r, n];
                    break;
                case 1:
                case 3:
                    i ^= 1;
                    break;
                case 4:
                    i ^= 2
            }
            return [i, n, r]
        },
        C = t => 1 == (1 & I(O(t.writingMode), "rtl" !== t.direction, void 0, void 0)[0]),
        H = (t, e, n, r, i, o, a) => 0 !== t ? t : i < e && o > n || i > e && o < n ? null : i <= e && a <= r || o >= n && a >= r ? 2 : o > n && a < r || i < e && a > r ? 3 : null,
        W = t => "visible" !== t && "clip" !== t,
        F = (t, e) => (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) && (W(e.overflowY) || W(e.overflowX) || t === S(t)),
        B = t => {
            const e = t.parentNode,
                n = t.parentElement;
            if (null === n && null !== e) {
                if (11 === e.nodeType) return e.host;
                if (9 === e.nodeType) return (t => {
                    var e;
                    try {
                        return (null == (e = t.ownerDocument.defaultView) ? void 0 : e.frameElement) || null
                    } catch {
                        return null
                    }
                })(t)
            }
            return n
        },
        q = (t, e, n) => t < e ? e : t > n ? n : t,
        z = (t, e, n) => {
            switch (t) {
                case 1:
                    return (e + n) / 2;
                case 3:
                    return n;
                case 2:
                case 0:
                    return e
            }
        },
        j = (t, e) => {
            var n, r, i;
            const o = null == (n = t.ownerDocument.defaultView) ? void 0 : n.visualViewport,
                [a, s, u, l] = t === S(t) ? [0, 0, null != (r = null == o ? void 0 : o.width) ? r : t.clientWidth, null != (i = null == o ? void 0 : o.height) ? i : t.clientHeight] : [e.left, e.top, t.clientWidth, t.clientHeight],
                c = a + t.clientLeft,
                f = s + t.clientTop;
            return [f, c + u, f + l, c]
        },
        V = (t, e, n) => {
            const r = e || {};
            if (!g(r.behavior)) throw new TypeError(y("scrollIntoView", "Element", r.behavior));
            ((t, e) => {
                const n = [];
                let r = t.ownerDocument,
                    i = r.defaultView;
                if (!i) return n;
                const o = window.getComputedStyle(t),
                    a = "rtl" !== o.direction,
                    s = O(o.writingMode || o.getPropertyValue("-webkit-writing-mode") || o.getPropertyValue("-ms-writing-mode")),
                    [u, l] = ((t, e, n) => {
                        const [r, i, o] = I(e, n, t.block || "start", t.inline || "nearest");
                        return [i, o].map(((t, e) => {
                            switch (t) {
                                case "center":
                                    return 1;
                                case "nearest":
                                    return 0;
                                default:
                                    return "start" === t == !(r >> e & 1) ? 2 : 3
                            }
                        }))
                    })(e, s, a);
                let [c, f, d, h] = ((t, e, n) => {
                    const {
                        top: r,
                        right: i,
                        bottom: o,
                        left: a
                    } = e, s = (t => ["scroll-margin", "scroll-snap-margin"].filter((e => e in t.documentElement.style))[0])(t.ownerDocument);
                    if (!s) return [r, i, o, a];
                    const u = t => {
                        const e = n.getPropertyValue(`${s}-${t}`);
                        return parseInt(e, 10) || 0
                    };
                    return [r - u("top"), i + u("right"), o + u("bottom"), a - u("left")]
                })(t, t.getBoundingClientRect(), o);
                for (let o = B(t); null !== o; o = B(o)) {
                    if (r !== o.ownerDocument) {
                        if (!(i = (r = o.ownerDocument).defaultView)) break;
                        const {
                            left: t,
                            top: e
                        } = o.getBoundingClientRect();
                        c += e, f += t, d += e, h += t
                    }
                    const t = i.getComputedStyle(o);
                    if ("fixed" === t.position) break;
                    if (!F(o, t)) continue;
                    const a = o.getBoundingClientRect(),
                        [s, p, m, g] = j(o, a),
                        v = H(u, g, p, o.clientWidth, h, f, f - h),
                        b = H(l, s, m, o.clientHeight, c, d, d - c),
                        y = null === v ? 0 : z(v, h, f) - z(v, g, p),
                        _ = null === b ? 0 : z(b, c, d) - z(b, s, m),
                        w = C(t) ? q(y, -o.scrollWidth + o.clientWidth - o.scrollLeft, -o.scrollLeft) : q(y, -o.scrollLeft, o.scrollWidth - o.clientWidth - o.scrollLeft),
                        T = q(_, -o.scrollTop, o.scrollHeight - o.clientHeight - o.scrollTop);
                    n.push([o, {
                        left: o.scrollLeft + w,
                        top: o.scrollTop + T,
                        behavior: e.behavior
                    }]), c = Math.max(c - T, s), f = Math.min(f - w, p), d = Math.min(d - T, m), h = Math.max(h - w, g)
                }
                return n
            })(t, r).forEach((([t, e]) => {
                D(t, e, n)
            }))
        },
        U = (t, e) => n => {
            if (T()) return;
            const r = {
                scroll: R,
                scrollTo: M,
                scrollBy: L
            } [t];
            e(t, (function() {
                const t = arguments;
                if (1 === arguments.length) return void r(this, t[0], n);
                const e = t[0],
                    i = t[1];
                r(this, {
                    left: e,
                    top: i
                })
            }))
        },
        $ = (U("scroll", E), U("scrollTo", E)),
        K = U("scrollBy", E),
        X = (t, e) => {
            x(e), _(window, t), window[t] = e
        };

    function Y(t) {
        V(this, {
            block: null == t || t ? "start" : "end",
            inline: "nearest"
        })
    }
    U("scroll", X), U("scrollTo", X), U("scrollBy", X), (t => {
        if (T()) return;
        const e = _(window.HTMLElement.prototype, "scrollIntoView", Y);
        E("scrollIntoView", (function() {
            const n = arguments,
                r = n[0];
            1 === n.length && w(r) ? V(this, r, t) : e.apply(this, n)
        }))
    })(), $(), K()
})();

// theme.js
(() => {
    var e = Object.defineProperty,
        t = (t, i, s) => i in t ? e(t, i, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : t[i] = s,
        i = (e, i, s) => (t(e, "symbol" != typeof i ? i + "" : i, s), s);

    function s(e) {
        this.listenerMap = [{}, {}], e && this.root(e), this.handle = s.prototype.handle.bind(this), this._removedListeners = []
    }

    function n(e, t) {
        return e.toLowerCase() === t.tagName.toLowerCase()
    }

    function a(e, t) {
        return this.rootElement === window ? t === document || t === document.documentElement || t === window : this.rootElement === t
    }

    function r(e, t) {
        return e === t.id
    }
    s.prototype.root = function(e) {
        let t, i = this.listenerMap;
        if (this.rootElement) {
            for (t in i[1]) i[1].hasOwnProperty(t) && this.rootElement.removeEventListener(t, this.handle, !0);
            for (t in i[0]) i[0].hasOwnProperty(t) && this.rootElement.removeEventListener(t, this.handle, !1)
        }
        if (!e || !e.addEventListener) return this.rootElement && delete this.rootElement, this;
        for (t in this.rootElement = e, i[1]) i[1].hasOwnProperty(t) && this.rootElement.addEventListener(t, this.handle, !0);
        for (t in i[0]) i[0].hasOwnProperty(t) && this.rootElement.addEventListener(t, this.handle, !1);
        return this
    }, s.prototype.captureForType = function(e) {
        return -1 !== ["blur", "error", "focus", "load", "resize", "scroll"].indexOf(e)
    }, s.prototype.on = function(e, t, i, s) {
        let o, l, d, c;
        if (!e) throw TypeError("Invalid event type: " + e);
        if ("function" == typeof t && (s = i, i = t, t = null), void 0 === s && (s = this.captureForType(e)), "function" != typeof i) throw TypeError("Handler must be a type of Function");
        return o = this.rootElement, (l = this.listenerMap[s ? 1 : 0])[e] || (o && o.addEventListener(e, this.handle, s), l[e] = []), t ? /^[a-z]+$/i.test(t) ? (c = t, d = n) : /^#[a-z0-9\-_]+$/i.test(t) ? (c = t.slice(1), d = r) : (c = t, d = Element.prototype.matches) : (c = null, d = a.bind(this)), l[e].push({
            selector: t,
            handler: i,
            matcher: d,
            matcherParam: c
        }), this
    }, s.prototype.off = function(e, t, i, s) {
        let n, a, r, o, l;
        if ("function" == typeof t && (s = i, i = t, t = null), void 0 === s) return this.off(e, t, i, !0), this.off(e, t, i, !1), this;
        if (r = this.listenerMap[s ? 1 : 0], !e) {
            for (l in r) r.hasOwnProperty(l) && this.off(l, t, i);
            return this
        }
        if (!(o = r[e]) || !o.length) return this;
        for (n = o.length - 1; n >= 0; n--) a = o[n], t && t !== a.selector || i && i !== a.handler || (this._removedListeners.push(a), o.splice(n, 1));
        return !o.length && (delete r[e], this.rootElement && this.rootElement.removeEventListener(e, this.handle, s)), this
    }, s.prototype.handle = function(e) {
        let t, i, s, n, a, r = e.type,
            o = [],
            l = "ftLabsDelegateIgnore";
        if (!0 === e[l]) return;
        switch (3 === (a = e.target).nodeType && (a = a.parentNode), a.correspondingUseElement && (a = a.correspondingUseElement), s = this.rootElement, e.eventPhase || (e.target !== e.currentTarget ? 3 : 2)) {
            case 1:
                o = this.listenerMap[1][r];
                break;
            case 2:
                this.listenerMap[0] && this.listenerMap[0][r] && (o = o.concat(this.listenerMap[0][r])), this.listenerMap[1] && this.listenerMap[1][r] && (o = o.concat(this.listenerMap[1][r]));
                break;
            case 3:
                o = this.listenerMap[0][r]
        }
        let d, c = [];
        for (i = o.length; a && i;) {
            for (t = 0; t < i && (n = o[t]); t++) a.tagName && ["button", "input", "select", "textarea"].indexOf(a.tagName.toLowerCase()) > -1 && a.hasAttribute("disabled") ? c = [] : n.matcher.call(a, n.matcherParam, a) && c.push([e, a, n]);
            if (a === s || (i = o.length, (a = a.parentElement || a.parentNode) instanceof HTMLDocument)) break
        }
        for (t = 0; t < c.length; t++)
            if (!(this._removedListeners.indexOf(c[t][2]) > -1) && !1 === this.fire.apply(this, c[t])) {
                c[t][0][l] = !0, c[t][0].preventDefault(), d = !1;
                break
            } return d
    }, s.prototype.fire = function(e, t, i) {
        return i.handler.call(t, e, t)
    }, s.prototype.destroy = function() {
        this.off(), this.root()
    };
    var o = s;

    function l(e, t, i = {}) {
        e.dispatchEvent(new CustomEvent(t, {
            bubbles: !0,
            detail: i
        }))
    }

    function d(e, t, i = {}) {
        e.dispatchEvent(new CustomEvent(t, {
            bubbles: !1,
            detail: i
        }))
    }
    var c = class extends HTMLElement {
            constructor() {
                super(), this._hasSectionReloaded = !1, Shopify.designMode && this.rootDelegate.on("shopify:section:select", (e => {
                    let t = this.closest(".shopify-section");
                    e.target === t && e.detail.load && (this._hasSectionReloaded = !0)
                }))
            }
            get rootDelegate() {
                return this._rootDelegate = this._rootDelegate || new o(document.documentElement)
            }
            get delegate() {
                return this._delegate = this._delegate || new o(this)
            }
            showLoadingBar() {
                l(document.documentElement, "theme:loading:start")
            }
            hideLoadingBar() {
                l(document.documentElement, "theme:loading:end")
            }
            untilVisible(e = {
                rootMargin: "30px 0px",
                threshold: 0
            }) {
                let t = () => {
                    this.classList.add("became-visible"), this.style.opacity = "1"
                };
                return new Promise((i => {
                    window.IntersectionObserver ? (this.intersectionObserver = new IntersectionObserver((e => {
                        e[0].isIntersecting && (this.intersectionObserver.disconnect(), requestAnimationFrame((() => {
                            i(), t()
                        })))
                    }), e), this.intersectionObserver.observe(this)) : (i(), t())
                }))
            }
            disconnectedCallback() {
                var e;
                this.delegate.destroy(), this.rootDelegate.destroy(), null == (e = this.intersectionObserver) || e.disconnect(), delete this._delegate, delete this._rootDelegate
            }
        },
        h = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"],
        u = h.join(","),
        p = "undefined" == typeof Element ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
        m = function(e) {
            var t = parseInt(e.getAttribute("tabindex"), 10);
            return isNaN(t) ? function(e) {
                return "true" === e.contentEditable
            }(e) || ("AUDIO" === e.nodeName || "VIDEO" === e.nodeName || "DETAILS" === e.nodeName) && null === e.getAttribute("tabindex") ? 0 : e.tabIndex : t
        },
        b = function(e, t) {
            return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
        },
        g = function(e) {
            return "INPUT" === e.tagName
        },
        f = function(e) {
            return function(e) {
                return g(e) && "radio" === e.type
            }(e) && ! function(e) {
                if (!e.name) return !0;
                var t, i = e.form || e.ownerDocument,
                    s = function(e) {
                        return i.querySelectorAll('input[type="radio"][name="' + e + '"]')
                    };
                if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = s(window.CSS.escape(e.name));
                else try {
                    t = s(e.name)
                } catch (e) {
                    return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1
                }
                var n = function(e, t) {
                    for (var i = 0; i < e.length; i++)
                        if (e[i].checked && e[i].form === t) return e[i]
                }(t, e.form);
                return !n || n === e
            }(e)
        },
        y = function(e, t) {
            return !(t.disabled || function(e) {
                return g(e) && "hidden" === e.type
            }(t) || function(e, t) {
                if ("hidden" === getComputedStyle(e).visibility) return !0;
                var i = p.call(e, "details>summary:first-of-type") ? e.parentElement : e;
                if (p.call(i, "details:not([open]) *")) return !0;
                if (t && "full" !== t) {
                    if ("non-zero-area" === t) {
                        var s = e.getBoundingClientRect(),
                            n = s.width,
                            a = s.height;
                        return 0 === n && 0 === a
                    }
                } else
                    for (; e;) {
                        if ("none" === getComputedStyle(e).display) return !0;
                        e = e.parentElement
                    }
                return !1
            }(t, e.displayCheck) || function(e) {
                return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some((function(e) {
                    return "SUMMARY" === e.tagName
                }))
            }(t) || function(e) {
                if (g(e) || "SELECT" === e.tagName || "TEXTAREA" === e.tagName || "BUTTON" === e.tagName)
                    for (var t = e.parentElement; t;) {
                        if ("FIELDSET" === t.tagName && t.disabled) {
                            for (var i = 0; i < t.children.length; i++) {
                                var s = t.children.item(i);
                                if ("LEGEND" === s.tagName) {
                                    if (s.contains(e)) return !1;
                                    break
                                }
                            }
                            return !0
                        }
                        t = t.parentElement
                    }
                return !1
            }(t))
        },
        w = function(e, t) {
            return !(!y(e, t) || f(t) || 0 > m(t))
        },
        v = function(e, t) {
            var i = [],
                s = [];
            return function(e, t, i) {
                var s = Array.prototype.slice.apply(e.querySelectorAll(u));
                return t && p.call(e, u) && s.unshift(e), s.filter(i)
            }(e, (t = t || {}).includeContainer, w.bind(null, t)).forEach((function(e, t) {
                var n = m(e);
                0 === n ? i.push(e) : s.push({
                    documentOrder: t,
                    tabIndex: n,
                    node: e
                })
            })), s.sort(b).map((function(e) {
                return e.node
            })).concat(i)
        },
        _ = h.concat("iframe").join(","),
        E = function(e, t) {
            if (t = t || {}, !e) throw Error("No node provided");
            return !1 !== p.call(e, _) && y(t, e)
        };

    function S(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            t && (s = s.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), i.push.apply(i, s)
        }
        return i
    }

    function x(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    var k = function() {
            var e = [];
            return {
                activateTrap: function(t) {
                    if (e.length > 0) {
                        var i = e[e.length - 1];
                        i !== t && i.pause()
                    }
                    var s = e.indexOf(t); - 1 === s || e.splice(s, 1), e.push(t)
                },
                deactivateTrap: function(t) {
                    var i = e.indexOf(t); - 1 !== i && e.splice(i, 1), e.length > 0 && e[e.length - 1].unpause()
                }
            }
        }(),
        L = function(e) {
            return setTimeout(e, 0)
        },
        A = function(e, t) {
            var i = -1;
            return e.every((function(e, s) {
                return !t(e) || (i = s, !1)
            })), i
        },
        C = function(e) {
            for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
            return "function" == typeof e ? e.apply(void 0, i) : e
        },
        I = function(e) {
            return e.target.shadowRoot && "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
        },
        T = function(e, t) {
            var i, s = (null == t ? void 0 : t.document) || document,
                n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? S(Object(i), !0).forEach((function(t) {
                            x(e, t, i[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : S(Object(i)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                        }))
                    }
                    return e
                }({
                    returnFocusOnDeactivate: !0,
                    escapeDeactivates: !0,
                    delayInitialFocus: !0
                }, t),
                a = {
                    containers: [],
                    tabbableGroups: [],
                    nodeFocusedBeforeActivation: null,
                    mostRecentlyFocusedNode: null,
                    active: !1,
                    paused: !1,
                    delayInitialFocusTimer: void 0
                },
                r = function(e, t, i) {
                    return e && void 0 !== e[t] ? e[t] : n[i || t]
                },
                o = function(e) {
                    return !(!e || !a.containers.some((function(t) {
                        return t.contains(e)
                    })))
                },
                l = function(e) {
                    var t = n[e];
                    if ("function" == typeof t) {
                        for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) a[r - 1] = arguments[r];
                        t = t.apply(void 0, a)
                    }
                    if (!t) {
                        if (void 0 === t || !1 === t) return t;
                        throw Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
                    }
                    var o = t;
                    if ("string" == typeof t && !(o = s.querySelector(t))) throw Error("`".concat(e, "` as selector refers to no known node"));
                    return o
                },
                d = function() {
                    var e = l("initialFocus");
                    if (!1 === e) return !1;
                    if (void 0 === e)
                        if (o(s.activeElement)) e = s.activeElement;
                        else {
                            var t = a.tabbableGroups[0];
                            e = t && t.firstTabbableNode || l("fallbackFocus")
                        } if (!e) throw Error("Your focus-trap needs to have at least one focusable element");
                    return e
                },
                c = function() {
                    if (a.tabbableGroups = a.containers.map((function(e) {
                            var t = v(e);
                            if (t.length > 0) return {
                                container: e,
                                firstTabbableNode: t[0],
                                lastTabbableNode: t[t.length - 1]
                            }
                        })).filter((function(e) {
                            return !!e
                        })), a.tabbableGroups.length <= 0 && !l("fallbackFocus")) throw Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")
                },
                h = function e(t) {
                    if (!1 !== t && t !== s.activeElement) {
                        if (!t || !t.focus) return void e(d());
                        t.focus({
                                preventScroll: !!n.preventScroll
                            }), a.mostRecentlyFocusedNode = t,
                            function(e) {
                                return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select
                            }(t) && t.select()
                    }
                },
                u = function(e) {
                    var t = l("setReturnFocus", e);
                    return t || !1 !== t && e
                },
                p = function(e) {
                    var t = I(e);
                    if (!o(t)) {
                        if (C(n.clickOutsideDeactivates, e)) return void i.deactivate({
                            returnFocus: n.returnFocusOnDeactivate && !E(t)
                        });
                        C(n.allowOutsideClick, e) || e.preventDefault()
                    }
                },
                m = function(e) {
                    var t = I(e),
                        i = o(t);
                    i || t instanceof Document ? i && (a.mostRecentlyFocusedNode = t) : (e.stopImmediatePropagation(), h(a.mostRecentlyFocusedNode || d()))
                },
                b = function(e) {
                    if (function(e) {
                            return "Escape" === e.key || "Esc" === e.key || 27 === e.keyCode
                        }(e) && !1 !== C(n.escapeDeactivates, e)) return e.preventDefault(), void i.deactivate();
                    (function(e) {
                        return "Tab" === e.key || 9 === e.keyCode
                    })(e) && function(e) {
                        var t = I(e);
                        c();
                        var i = null;
                        if (a.tabbableGroups.length > 0) {
                            var s = A(a.tabbableGroups, (function(e) {
                                return e.container.contains(t)
                            }));
                            if (s < 0) i = e.shiftKey ? a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : a.tabbableGroups[0].firstTabbableNode;
                            else if (e.shiftKey) {
                                var n = A(a.tabbableGroups, (function(e) {
                                    return t === e.firstTabbableNode
                                }));
                                if (n < 0 && a.tabbableGroups[s].container === t && (n = s), n >= 0) {
                                    var r = 0 === n ? a.tabbableGroups.length - 1 : n - 1;
                                    i = a.tabbableGroups[r].lastTabbableNode
                                }
                            } else {
                                var o = A(a.tabbableGroups, (function(e) {
                                    return t === e.lastTabbableNode
                                }));
                                if (o < 0 && a.tabbableGroups[s].container === t && (o = s), o >= 0) {
                                    var d = o === a.tabbableGroups.length - 1 ? 0 : o + 1;
                                    i = a.tabbableGroups[d].firstTabbableNode
                                }
                            }
                        } else i = l("fallbackFocus");
                        i && (e.preventDefault(), h(i))
                    }(e)
                },
                g = function(e) {
                    if (!C(n.clickOutsideDeactivates, e)) {
                        var t = I(e);
                        o(t) || C(n.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
                    }
                },
                f = function() {
                    if (a.active) return k.activateTrap(i), a.delayInitialFocusTimer = n.delayInitialFocus ? L((function() {
                        h(d())
                    })) : h(d()), s.addEventListener("focusin", m, !0), s.addEventListener("mousedown", p, {
                        capture: !0,
                        passive: !1
                    }), s.addEventListener("touchstart", p, {
                        capture: !0,
                        passive: !1
                    }), s.addEventListener("click", g, {
                        capture: !0,
                        passive: !1
                    }), s.addEventListener("keydown", b, {
                        capture: !0,
                        passive: !1
                    }), i
                },
                y = function() {
                    if (a.active) return s.removeEventListener("focusin", m, !0), s.removeEventListener("mousedown", p, !0), s.removeEventListener("touchstart", p, !0), s.removeEventListener("click", g, !0), s.removeEventListener("keydown", b, !0), i
                };
            return (i = {
                activate: function(e) {
                    if (a.active) return this;
                    var t = r(e, "onActivate"),
                        i = r(e, "onPostActivate"),
                        n = r(e, "checkCanFocusTrap");
                    n || c(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = s.activeElement, t && t();
                    var o = function() {
                        n && c(), f(), i && i()
                    };
                    return n ? (n(a.containers.concat()).then(o, o), this) : (o(), this)
                },
                deactivate: function(e) {
                    if (!a.active) return this;
                    clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, y(), a.active = !1, a.paused = !1, k.deactivateTrap(i);
                    var t = r(e, "onDeactivate"),
                        s = r(e, "onPostDeactivate"),
                        n = r(e, "checkCanReturnFocus");
                    t && t();
                    var o = r(e, "returnFocus", "returnFocusOnDeactivate"),
                        l = function() {
                            L((function() {
                                o && h(u(a.nodeFocusedBeforeActivation)), s && s()
                            }))
                        };
                    return o && n ? (n(u(a.nodeFocusedBeforeActivation)).then(l, l), this) : (l(), this)
                },
                pause: function() {
                    return a.paused || !a.active || (a.paused = !0, y()), this
                },
                unpause: function() {
                    return a.paused && a.active && (a.paused = !1, c(), f()), this
                },
                updateContainerElements: function(e) {
                    var t = [].concat(e).filter(Boolean);
                    return a.containers = t.map((function(e) {
                        return "string" == typeof e ? s.querySelector(e) : e
                    })), a.active && c(), this
                }
            }).updateContainerElements(e), i
        };

    function P(e, t, i) {
        let s = !1;
        e.type.includes("shopify:section") ? t.hasAttribute("section") && t.getAttribute("section") === e.detail.sectionId && (s = !0) : e.type.includes("shopify:block") && e.target === t && (s = !0), s && i(e)
    }
    var M = class extends c {
        static get observedAttributes() {
            return ["open"]
        }
        constructor() {
            if (super(), Shopify.designMode && (this.rootDelegate.on("shopify:section:select", (e => P(e, this, (() => this.open = !0)))), this.rootDelegate.on("shopify:section:deselect", (e => P(e, this, (() => this.open = !1))))), this.hasAttribute("append-body")) {
                let e = document.getElementById(this.id);
                this.removeAttribute("append-body"), e && e !== this ? (e.replaceWith(this.cloneNode(!0)), this.remove()) : document.body.appendChild(this)
            }
        }
        connectedCallback() {
            this.delegate.on("click", ".openable__overlay", (() => this.open = !1)), this.delegate.on("click", '[data-action="close"]', (e => {
                e.stopPropagation(), this.open = !1
            }))
        }
        get requiresLoading() {
            return this.hasAttribute("href")
        }
        get open() {
            return this.hasAttribute("open")
        }
        set open(e) {
            e ? (async () => {
                await this._load(), this.clientWidth, this.setAttribute("open", "")
            })() : this.removeAttribute("open")
        }
        get shouldTrapFocus() {
            return !0
        }
        get returnFocusOnDeactivate() {
            return !this.hasAttribute("return-focus") || "true" === this.getAttribute("return-focus")
        }
        get focusTrap() {
            return this._focusTrap = this._focusTrap || T(this, {
                fallbackFocus: this,
                initialFocus: this.hasAttribute("initial-focus-selector") ? this.getAttribute("initial-focus-selector") : void 0,
                clickOutsideDeactivates: e => !(e.target.hasAttribute("aria-controls") && e.target.getAttribute("aria-controls") === this.id),
                allowOutsideClick: e => e.target.hasAttribute("aria-controls") && e.target.getAttribute("aria-controls") === this.id,
                returnFocusOnDeactivate: this.returnFocusOnDeactivate,
                onDeactivate: () => this.open = !1,
                preventScroll: !0
            })
        }
        attributeChangedCallback(e, t, i) {
            "open" === e && (null === t && "" === i ? (this.shouldTrapFocus && setTimeout((() => this.focusTrap.activate()), 150), l(this, "openable-element:open")) : null === i && (this.shouldTrapFocus && this.focusTrap.deactivate(), l(this, "openable-element:close")))
        }
        async _load() {
            if (!this.requiresLoading) return;
            d(this, "openable-element:load:start");
            let e = await fetch(this.getAttribute("href")),
                t = document.createElement("div");
            t.innerHTML = await e.text(), this.innerHTML = t.querySelector(this.tagName.toLowerCase()).innerHTML, this.removeAttribute("href"), d(this, "openable-element:load:end")
        }
    };
    window.customElements.define("openable-element", M);
    window.customElements.define("collapsible-content", class extends M {
        constructor() {
            super(), this.ignoreNextTransition = this.open, this.addEventListener("shopify:block:select", (() => this.open = !0)), this.addEventListener("shopify:block:deselect", (() => this.open = !1))
        }
        get animateItems() {
            return this.hasAttribute("animate-items")
        }
        attributeChangedCallback(e) {
            if (this.ignoreNextTransition) return this.ignoreNextTransition = !1;
            if ("open" === e) {
                this.style.overflow = "hidden";
                let e = {
                    height: ["0px", `${this.scrollHeight}px`],
                    visibility: ["hidden", "visible"]
                };
                this.animateItems && (e.opacity = this.open ? [0, 0] : [0, 1]), this.animate(e, {
                    duration: 500,
                    direction: this.open ? "normal" : "reverse",
                    easing: "cubic-bezier(0.75, 0, 0.175, 1)"
                }).onfinish = () => {
                    this.style.overflow = this.open ? "visible" : "hidden"
                }, this.animateItems && this.open && this.animate({
                    opacity: [0, 1],
                    transform: ["translateY(10px)", "translateY(0)"]
                }, {
                    duration: 250,
                    delay: 250,
                    easing: "cubic-bezier(0.75, 0, 0.175, 1)"
                }), l(this, this.open ? "openable-element:open" : "openable-element:close")
            }
        }
    });
    var q = class extends HTMLButtonElement {
        connectedCallback() {
            this.addEventListener("click", (e => {
                window.confirm(this.getAttribute("data-message") || "Are you sure you wish to do this?") || e.preventDefault()
            }))
        }
    };
    window.customElements.define("confirm-button", q, {
        extends: "button"
    });
    var V = {
            _prepareButton() {
                this.originalContent = this.innerHTML, this._startTransitionPromise = null, this.innerHTML = `      <span class="loader-button__text">${this.innerHTML}</span>      <span class="loader-button__loader" hidden>        <div class="spinner">          <svg focusable="false" width="24" height="24" class="icon icon--spinner" viewBox="25 25 50 50">            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5"></circle>          </svg>        </div>      </span>    `, this.textElement = this.firstElementChild, this.spinnerElement = this.lastElementChild, window.addEventListener("pagehide", (() => this.removeAttribute("aria-busy")))
            },
            _startTransition() {
                let e = this.textElement.animate({
                    opacity: [1, 0],
                    transform: ["translateY(0)", "translateY(-10px)"]
                }, {
                    duration: 75,
                    easing: "ease",
                    fill: "forwards"
                });
                this.spinnerElement.hidden = !1;
                let t = this.spinnerElement.animate({
                    opacity: [0, 1],
                    transform: ["translate(-50%, 0%)", "translate(-50%, -50%)"]
                }, {
                    duration: 75,
                    delay: 75,
                    easing: "ease",
                    fill: "forwards"
                });
                this._startTransitionPromise = Promise.all([new Promise((t => e.onfinish = () => t())), new Promise((e => t.onfinish = () => e()))])
            },
            async _endTransition() {
                this._startTransitionPromise && (await this._startTransitionPromise, this.spinnerElement.animate({
                    opacity: [1, 0],
                    transform: ["translate(-50%, -50%)", "translate(-50%, -100%)"]
                }, {
                    duration: 75,
                    delay: 100,
                    easing: "ease",
                    fill: "forwards"
                }).onfinish = () => this.spinnerElement.hidden = !0, this.textElement.animate({
                    opacity: [0, 1],
                    transform: ["translateY(10px)", "translateY(0)"]
                }, {
                    duration: 75,
                    delay: 175,
                    easing: "ease",
                    fill: "forwards"
                }), this._startTransitionPromise = null)
            }
        },
        O = class extends HTMLButtonElement {
            static get observedAttributes() {
                return ["aria-busy"]
            }
            constructor() {
                super(), this.addEventListener("click", (e => {
                    "submit" === this.type && this.form && this.form.checkValidity() && !this.form.hasAttribute("is") && (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (e.preventDefault(), this.setAttribute("aria-busy", "true"), setTimeout((() => this.form.submit()), 250)) : this.setAttribute("aria-busy", "true"))
                }))
            }
            connectedCallback() {
                this._prepareButton()
            }
            disconnectedCallback() {
                this.innerHTML = this.originalContent
            }
            attributeChangedCallback(e, t, i) {
                "aria-busy" === e && ("true" === i ? this._startTransition() : this._endTransition())
            }
        };
    Object.assign(O.prototype, V), window.customElements.define("loader-button", O, {
        extends: "button"
    });

    function B(e, t) {
        if (void 0 !== t && (e = e[t]), null !== e) {
            let t = e.getAttribute("data-price");
            t = parseInt(t);
            let i = e.parentElement.className;
            if (Shopify.enable_namagoo && i.includes("custom-product-card_namogoo") && localStorage.getItem("Namogoo")) {
                t -= t / 100 * JSON.parse(localStorage.getItem("Namogoo")).discountValue, e.className.includes("product-card-price-varies") ? e.innerHTML = "From " + Shopify.formatMoney(t, Shopify.money_format) : e.innerHTML = Shopify.formatMoney(t, Shopify.money_format)
            }
        }
    }
    window.customElements.define("page-pagination", class extends c {
        connectedCallback() {
            this.hasAttribute("ajax") && this.delegate.on("click", "a", this._onLinkClicked.bind(this))
        }
        _onLinkClicked(e, t) {
            e.preventDefault();
            let i = new URL(window.location.href);
            i.searchParams.set("page", t.getAttribute("data-page")), l(this, "pagination:page-changed", {
                url: i.toString()
            })
        }
    });
    var H = class extends HTMLButtonElement {
        static get observedAttributes() {
            return ["aria-expanded", "aria-busy"]
        }
        constructor() {
            super(), this.hasAttribute("loader") && this._prepareButton(), this.addEventListener("click", this._onButtonClick.bind(this)), this.rootDelegate = new o(document.documentElement)
        }
        _onButtonClick() {
            this.isExpanded = !this.isExpanded, setTimeout((function() {
                B(document.querySelector(".quick_product-price"))
            }), 1e3)
        }
        connectedCallback() {
            document.addEventListener("openable-element:close", (e => {
                this.controlledElement === e.target && (this.isExpanded = !1, e.stopPropagation())
            })), document.addEventListener("openable-element:open", (e => {
                this.controlledElement === e.target && (this.isExpanded = !0, e.stopPropagation())
            })), this.rootDelegate.on("openable-element:load:start", `#${this.getAttribute("aria-controls")}`, (() => {
                this.classList.contains("button") ? this.setAttribute("aria-busy", "true") : null !== this.offsetParent && l(document.documentElement, "theme:loading:start")
            }), !0), this.rootDelegate.on("openable-element:load:end", `#${this.getAttribute("aria-controls")}`, (() => {
                this.classList.contains("button") ? this.removeAttribute("aria-busy") : null !== this.offsetParent && l(document.documentElement, "theme:loading:end")
            }), !0)
        }
        disconnectedCallback() {
            this.rootDelegate.destroy()
        }
        get isExpanded() {
            return "true" === this.getAttribute("aria-expanded")
        }
        set isExpanded(e) {
            this.setAttribute("aria-expanded", e ? "true" : "false")
        }
        get controlledElement() {
            return document.getElementById(this.getAttribute("aria-controls"))
        }
        attributeChangedCallback(e, t, i) {
            switch (e) {
                case "aria-expanded":
                    "false" === t && "true" === i ? this.controlledElement.open = !0 : "true" === t && "false" === i && (this.controlledElement.open = !1);
                    break;
                case "aria-busy":
                    this.hasAttribute("loader") && ("true" === i ? this._startTransition() : this._endTransition())
            }
        }
    };
    Object.assign(H.prototype, V), window.customElements.define("toggle-button", H, {
        extends: "button"
    });
    var D = class extends HTMLAnchorElement {
        static get observedAttributes() {
            return ["aria-expanded"]
        }
        constructor() {
            super(), this.addEventListener("click", (e => {
                e.preventDefault(), this.isExpanded = !this.isExpanded
            })), this.rootDelegate = new o(document.documentElement)
        }
        connectedCallback() {
            this.rootDelegate.on("openable-element:close", `#${this.getAttribute("aria-controls")}`, (e => {
                this.controlledElement === e.target && (this.isExpanded = !1)
            }), !0), this.rootDelegate.on("openable-element:open", `#${this.getAttribute("aria-controls")}`, (e => {
                this.controlledElement === e.target && (this.isExpanded = !0)
            }), !0)
        }
        disconnectedCallback() {
            this.rootDelegate.destroy()
        }
        get isExpanded() {
            return "true" === this.getAttribute("aria-expanded")
        }
        set isExpanded(e) {
            this.setAttribute("aria-expanded", e ? "true" : "false")
        }
        get controlledElement() {
            return document.querySelector(`#${this.getAttribute("aria-controls")}`)
        }
        attributeChangedCallback(e, t, i) {
            "aria-expanded" === e && ("false" === t && "true" === i ? this.controlledElement.open = !0 : "true" === t && "false" === i && (this.controlledElement.open = !1))
        }
    };
    window.customElements.define("toggle-link", D, {
        extends: "a"
    });
    window.customElements.define("page-dots", class extends c {
        connectedCallback() {
            this.buttons = Array.from(this.querySelectorAll("button")), this.delegate.on("click", "button", ((e, t) => {
                this._dispatchEvent(this.buttons.indexOf(t))
            })), this.hasAttribute("animation-timer") && this.delegate.on("animationend", (e => {
                e.elapsedTime > 0 && this._dispatchEvent((this.selectedIndex + 1 + this.buttons.length) % this.buttons.length)
            }))
        }
        get selectedIndex() {
            return this.buttons.findIndex((e => "true" === e.getAttribute("aria-current")))
        }
        set selectedIndex(e) {
            if (this.buttons.forEach(((t, i) => t.setAttribute("aria-current", e === i ? "true" : "false"))), this.hasAttribute("align-selected")) {
                let t = this.buttons[e],
                    i = window.innerWidth / 2,
                    s = t.getBoundingClientRect(),
                    n = this._findFirstScrollableElement(this.parentElement);
                n && n.scrollTo({
                    behavior: "smooth",
                    left: n.scrollLeft + (s.left - i) + s.width / 2
                })
            }
        }
        _dispatchEvent(e) {
            e !== this.selectedIndex && this.dispatchEvent(new CustomEvent("page-dots:changed", {
                bubbles: !0,
                detail: {
                    index: e
                }
            }))
        }
        _findFirstScrollableElement(e, t = 0) {
            return null === e || t > 3 ? null : e.scrollWidth > e.clientWidth ? e : this._findFirstScrollableElement(e.parentElement, t + 1)
        }
    });
    var N = class extends HTMLElement {
            connectedCallback() {
                this.prevButton = this.querySelector("button:first-of-type"), this.nextButton = this.querySelector("button:last-of-type"), this.prevButton.addEventListener("click", (() => this.prevButton.dispatchEvent(new CustomEvent("prev-next:prev", {
                    bubbles: !0
                })))), this.nextButton.addEventListener("click", (() => this.nextButton.dispatchEvent(new CustomEvent("prev-next:next", {
                    bubbles: !0
                }))))
            }
            set isPrevDisabled(e) {
                this.prevButton.disabled = e
            }
            set isNextDisabled(e) {
                this.nextButton.disabled = e
            }
        },
        R = class extends HTMLButtonElement {
            connectedCallback() {
                this.addEventListener("click", (() => this.dispatchEvent(new CustomEvent("prev-next:prev", {
                    bubbles: !0
                }))))
            }
        },
        F = class extends HTMLButtonElement {
            connectedCallback() {
                this.addEventListener("click", (() => this.dispatchEvent(new CustomEvent("prev-next:next", {
                    bubbles: !0
                }))))
            }
        };

    function z() {
        let e = getComputedStyle(document.documentElement);
        return parseInt(e.getPropertyValue("--header-height") || 0) * parseInt(e.getPropertyValue("--enable-sticky-header") || 0) + parseInt(e.getPropertyValue("--announcement-bar-height") || 0) * parseInt(e.getPropertyValue("--enable-sticky-announcement-bar") || 0)
    }
    window.customElements.define("prev-next-buttons", N), window.customElements.define("prev-button", R, {
        extends: "button"
    }), window.customElements.define("next-button", F, {
        extends: "button"
    });
    var W = class extends HTMLElement {
        connectedCallback() {
            this.lastKnownY = window.scrollY, this.currentTop = 0, this.hasPendingRaf = !1, window.addEventListener("scroll", this._checkPosition.bind(this))
        }
        get initialTopOffset() {
            return z() + (parseInt(this.getAttribute("offset")) || 0)
        }
        _checkPosition() {
            this.hasPendingRaf || (this.hasPendingRaf = !0, requestAnimationFrame((() => {
                let e = this.getBoundingClientRect().top + window.scrollY - this.offsetTop + this.initialTopOffset,
                    t = this.clientHeight - window.innerHeight;
                window.scrollY < this.lastKnownY ? this.currentTop -= window.scrollY - this.lastKnownY : this.currentTop += this.lastKnownY - window.scrollY, this.currentTop = Math.min(Math.max(this.currentTop, -t), e, this.initialTopOffset), this.lastKnownY = window.scrollY, this.style.top = `${this.currentTop}px`, this.hasPendingRaf = !1
            })))
        }
    };

    function Y(e, t = 15) {
        let i = null,
            s = null,
            n = a => {
                s = a, i || (e(s), s = null, i = setTimeout((() => {
                    i = null, s && n(s)
                }), t))
            };
        return n
    }
    window.customElements.define("safe-sticky", W);
    var j = class extends HTMLElement {
        connectedCallback() {
            this._createSvg(), this.elementsToObserve = Array.from(this.querySelectorAll("a")).map((e => document.querySelector(e.getAttribute("href")))), this.navListItems = Array.from(this.querySelectorAll("li")), this.navItems = this.navListItems.map((e => {
                let t = e.firstElementChild,
                    i = t && t.getAttribute("href").slice(1);
                return {
                    listItem: e,
                    anchor: t,
                    target: document.getElementById(i)
                }
            })).filter((e => e.target)), this.drawPath(), window.addEventListener("scroll", Y(this.markVisibleSection.bind(this), 25)), window.addEventListener("orientationchange", (() => {
                window.addEventListener("resize", (() => {
                    this.drawPath(), this.markVisibleSection()
                }), {
                    once: !0
                })
            })), this.markVisibleSection()
        }
        _createSvg() {
            this.navPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            let e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            e.insertAdjacentElement("beforeend", this.navPath), this.insertAdjacentElement("beforeend", e), this.lastPathStart = this.lastPathEnd = null
        }
        drawPath() {
            let e, t = [];
            this.navItems.forEach(((i, s) => {
                let n = i.anchor.offsetLeft - 5,
                    a = i.anchor.offsetTop,
                    r = i.anchor.offsetHeight;
                0 === s ? (t.push("M", n, a, "L", n, a + r), i.pathStart = 0) : (e !== n && t.push("L", e, a), t.push("L", n, a), this.navPath.setAttribute("d", t.join(" ")), i.pathStart = this.navPath.getTotalLength() || 0, t.push("L", n, a + r)), e = n, this.navPath.setAttribute("d", t.join(" ")), i.pathEnd = this.navPath.getTotalLength()
            }))
        }
        syncPath() {
            let e = this.navPath.getTotalLength(),
                t = e,
                i = 0;
            if (this.navItems.forEach((e => {
                    (e => e.classList.contains("is-visible"))(e.listItem) && (t = Math.min(e.pathStart, t), i = Math.max(e.pathEnd, i))
                })), this.querySelectorAll(".is-visible").length > 0 && t < i) {
                if (t !== this.lastPathStart || i !== this.lastPathEnd) {
                    let s = `1 ${t} ${i-t} ${e}`;
                    this.navPath.style.setProperty("stroke-dashoffset", "1"), this.navPath.style.setProperty("stroke-dasharray", s), this.navPath.style.setProperty("opacity", "1")
                }
            } else this.navPath.style.setProperty("opacity", "0");
            this.lastPathStart = t, this.lastPathEnd = i
        }
        markVisibleSection() {
            for (let [e, t] of(this.navListItems.forEach((e => e.classList.remove("is-visible"))), this.elementsToObserve.entries()))
                if (t.getBoundingClientRect().top > z() || e === this.elementsToObserve.length - 1) {
                    this.querySelector(`a[href="#${t.id}"]`).parentElement.classList.add("is-visible");
                    break
                } this.syncPath()
        }
    };
    window.customElements.define("scroll-spy", j);
    var U = class extends HTMLElement {
        constructor() {
            super(), this.attachShadow({
                mode: "open"
            }).innerHTML = "  <style>    :host {      display: inline-block;      contain: layout;      position: relative;    }        :host([hidden]) {      display: none;    }    s {      position: absolute;      top: 0;      bottom: 0;      left: 0;      right: 0;      pointer-events: none;      background-image:        var(--scroll-shadow-top, radial-gradient(farthest-side at 50% 0%, rgba(0,0,0,.2), rgba(0,0,0,0))),        var(--scroll-shadow-bottom, radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,.2), rgba(0,0,0,0))),        var(--scroll-shadow-left, radial-gradient(farthest-side at 0%, rgba(0,0,0,.2), rgba(0,0,0,0))),        var(--scroll-shadow-right, radial-gradient(farthest-side at 100%, rgba(0,0,0,.2), rgba(0,0,0,0)));      background-position: top, bottom, left, right;      background-repeat: no-repeat;      background-size: 100% var(--top, 0), 100% var(--bottom, 0), var(--left, 0) 100%, var(--right, 0) 100%;    }  </style>  <slot></slot>  <s></s>", this.updater = new class {
                constructor(e) {
                    this.scheduleUpdate = Y((() => this.update(e, getComputedStyle(e)))), this.resizeObserver = new ResizeObserver(this.scheduleUpdate.bind(this))
                }
                start(e) {
                    this.element && this.stop(), e && (e.addEventListener("scroll", this.scheduleUpdate), this.resizeObserver.observe(e), this.element = e)
                }
                stop() {
                    this.element && (this.element.removeEventListener("scroll", this.scheduleUpdate), this.resizeObserver.unobserve(this.element), this.element = null)
                }
                update(e, t) {
                    if (!this.element) return;
                    let i = t.getPropertyValue("--scroll-shadow-size") ? parseInt(t.getPropertyValue("--scroll-shadow-size")) : 0,
                        s = {
                            top: Math.max(this.element.scrollTop, 0),
                            bottom: Math.max(this.element.scrollHeight - this.element.offsetHeight - this.element.scrollTop, 0),
                            left: Math.max(this.element.scrollLeft, 0),
                            right: Math.max(this.element.scrollWidth - this.element.offsetWidth - this.element.scrollLeft, 0)
                        };
                    requestAnimationFrame((() => {
                        for (let t of ["top", "bottom", "left", "right"]) e.style.setProperty(`--${t}`, `${s[t]>i?i:s[t]}px`)
                    }))
                }
            }(this.shadowRoot.lastElementChild)
        }
        connectedCallback() {
            this.shadowRoot.querySelector("slot").addEventListener("slotchange", (() => this.start())), this.start()
        }
        disconnectedCallback() {
            this.updater.stop()
        }
        start() {
            this.updater.start(this.firstElementChild)
        }
    };
    "ResizeObserver" in window && window.customElements.define("scroll-shadow", U);
    window.customElements.define("share-toggle-button", class extends H {
        _onButtonClick() {
            window.matchMedia(window.themeVariables.breakpoints.phone).matches && navigator.share ? navigator.share({
                title: this.hasAttribute("share-title") ? this.getAttribute("share-title") : document.title,
                url: this.hasAttribute("share-url") ? this.getAttribute("share-url") : window.location.href
            }) : super._onButtonClick()
        }
    }, {
        extends: "button"
    });
    window.customElements.define("native-carousel-item", class extends c {
        static get observedAttributes() {
            return ["hidden"]
        }
        get index() {
            return [...this.parentNode.children].indexOf(this)
        }
        get selected() {
            return !this.hasAttribute("hidden")
        }
        set selected(e) {
            this.hidden = !e
        }
    }), window.customElements.define("native-carousel", class extends c {
        connectedCallback() {
            this.items = Array.from(this.querySelectorAll("native-carousel-item")), this.pageDotsElements = Array.from(this.querySelectorAll("page-dots")), this.prevNextButtonsElements = Array.from(this.querySelectorAll("prev-next-buttons")), this.items.length > 1 && (this.addEventListener("prev-next:prev", this.prev.bind(this)), this.addEventListener("prev-next:next", this.next.bind(this)), this.addEventListener("page-dots:changed", (e => this.select(e.detail.index, !0))), Shopify.designMode && this.addEventListener("shopify:block:select", (e => this.select(e.target.index, !e.detail.load))));
            let e = this.items[0].parentElement;
            this.intersectionObserver = new IntersectionObserver(this._onVisibilityChanged.bind(this), {
                root: e,
                rootMargin: `${e.clientHeight}px 0px`,
                threshold: .8
            }), this.items.forEach((e => this.intersectionObserver.observe(e)))
        }
        disconnectedCallback() {
            super.disconnectedCallback(), this.intersectionObserver.disconnect()
        }
        get selectedIndex() {
            return this.items.findIndex((e => e.selected))
        }
        prev(e = !0) {
            this.select(Math.max(this.selectedIndex - 1, 0), e)
        }
        next(e = !0) {
            this.select(Math.min(this.selectedIndex + 1, this.items.length - 1), e)
        }
        select(e, t = !0) {
            let i = Math.max(0, Math.min(e, this.items.length)),
                s = this.items[i];
            this._adjustNavigationForElement(s), t && (this.items.forEach((e => this.intersectionObserver.unobserve(e))), setInterval((() => {
                this.items.forEach((e => this.intersectionObserver.observe(e)))
            }), 800)), this.items.forEach(((e, t) => e.selected = t === i));
            let n = "ltr" === window.themeVariables.settings.direction ? 1 : -1;
            s.parentElement.scrollTo({
                left: n * (s.clientWidth * i),
                behavior: t ? "smooth" : "auto"
            })
        }
        _adjustNavigationForElement(e) {
            this.items.forEach((t => t.selected = e === t)), this.pageDotsElements.forEach((t => t.selectedIndex = e.index)), this.prevNextButtonsElements.forEach((t => {
                t.isPrevDisabled = 0 === e.index, t.isNextDisabled = e.index === this.items.length - 1
            }))
        }
        _onVisibilityChanged(e) {
            for (let t of e)
                if (t.isIntersecting) {
                    this._adjustNavigationForElement(t.target);
                    break
                }
        }
    });
    var X = class extends HTMLElement {
        connectedCallback() {
            this.scrollableElement = this.parentElement, this.scrollableElement.addEventListener("mouseenter", this._onMouseEnter.bind(this)), this.scrollableElement.addEventListener("mousemove", this._onMouseMove.bind(this)), this.scrollableElement.addEventListener("mouseleave", this._onMouseLeave.bind(this)), this.innerHTML = '      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">        <path d="M0 60C0 26.863 26.863 0 60 0s60 26.863 60 60-26.863 60-60 60S0 93.137 0 60z" fill="rgb(var(--text-color))"/>       <path d="M46 50L36 60l10 10M74 50l10 10-10 10" stroke="rgb(var(--section-background))" stroke-width="4"/>      </svg>  '
        }
        _onMouseEnter(e) {
            this.removeAttribute("hidden"), this._positionCursor(e)
        }
        _onMouseLeave() {
            this.setAttribute("hidden", "")
        }
        _onMouseMove(e) {
            this.toggleAttribute("hidden", "BUTTON" === e.target.tagName || "A" === e.target.tagName), this._positionCursor(e)
        }
        _positionCursor(e) {
            let t = this.scrollableElement.getBoundingClientRect(),
                i = e.clientX - t.x,
                s = e.clientY - t.y;
            this.style.transform = `translate(${i-this.clientWidth/2}px, ${s-this.clientHeight/2}px)`
        }
    };
    window.customElements.define("drag-cursor", X);
    window.customElements.define("scrollable-content", class extends c {
        connectedCallback() {
            this.draggable && this._setupDraggability(), this._checkScrollability(), window.addEventListener("resize", this._checkScrollability.bind(this)), this.addEventListener("scroll", Y(this._calculateProgress.bind(this), 15))
        }
        get draggable() {
            return this.hasAttribute("draggable")
        }
        _setupDraggability() {
            this.insertAdjacentHTML("afterend", '<drag-cursor hidden class="custom-drag-cursor"></drag-cursor>');
            let e = matchMedia("(hover: none)");
            e.addListener(this._onMediaChanges.bind(this)), e.matches || this._attachDraggableListeners()
        }
        _attachDraggableListeners() {
            this.delegate.on("mousedown", this._onMouseDown.bind(this)), this.delegate.on("mousemove", this._onMouseMove.bind(this)), this.delegate.on("mouseup", this._onMouseUp.bind(this))
        }
        _removeDraggableListeners() {
            this.delegate.off("mousedown"), this.delegate.off("mousemove"), this.delegate.off("mouseup")
        }
        _checkScrollability() {
            this.classList.toggle("is-scrollable", this.scrollWidth > this.offsetWidth)
        }
        _calculateProgress() {
            l(this, "scrollable-content:progress", {
                progress: 100 * Math.max(0, Math.min(1, this.scrollLeft * ("ltr" === window.themeVariables.settings.direction ? 1 : -1) / (this.scrollWidth - this.clientWidth)))
            })
        }
        _onMediaChanges(e) {
            e.matches ? this._removeDraggableListeners() : this._attachDraggableListeners()
        }
        _onMouseDown(e) {
            e.target && "IMG" === e.target.nodeName && e.preventDefault(), this.startX = e.clientX + this.scrollLeft, this.diffX = 0, this.drag = !0
        }
        _onMouseMove(e) {
            this.drag && (this.diffX = this.startX - (e.clientX + this.scrollLeft), this.scrollLeft += this.diffX)
        }
        _onMouseUp() {
            this.drag = !1;
            let e = 1,
                t = () => {
                    let i = Math.sinh(e);
                    i <= 0 ? window.cancelAnimationFrame(t) : (this.scrollLeft += this.diffX * i, e -= .03, window.requestAnimationFrame(t))
                };
            t()
        }
    });
    window.customElements.define("loading-bar", class extends c {
        constructor() {
            super(), this.rootDelegate.on("theme:loading:start", this.show.bind(this)), this.rootDelegate.on("theme:loading:end", this.hide.bind(this)), this.delegate.on("transitionend", this._onTransitionEnd.bind(this))
        }
        show() {
            this.classList.add("is-visible"), this.style.transform = "scaleX(0.4)"
        }
        hide() {
            this.style.transform = "scaleX(1)", this.classList.add("is-finished")
        }
        _onTransitionEnd(e) {
            "transform" === e.propertyName && this.classList.contains("is-finished") && (this.classList.remove("is-visible"), this.classList.remove("is-finished"), this.style.transform = "scaleX(0)")
        }
    });
    var G = class extends HTMLElement {
        connectedCallback() {
            this.originalContent = this.textContent, this.lastWidth = window.innerWidth, this.hasBeenSplitted = !1, window.addEventListener("resize", this._onResize.bind(this))
        } [Symbol.asyncIterator]() {
            return {
                splitPromise: this.split.bind(this),
                index: 0,
                async next() {
                    let e = await this.splitPromise();
                    return this.index !== e.length ? {
                        done: !1,
                        value: e[this.index++]
                    } : {
                        done: !0
                    }
                }
            }
        }
        split(e = !1) {
            return this.childElementCount > 0 && !e ? Promise.resolve(Array.from(this.children)) : (this.hasBeenSplitted = !0, new Promise((t => {
                requestAnimationFrame((() => {
                    this.innerHTML = this.originalContent.replace(/./g, "<span>$&</span>").replace(/\s/g, " ");
                    let i = {};
                    Array.from(this.children).forEach((e => {
                        let t = parseInt(e.getBoundingClientRect().top);
                        i[t] = (i[t] || "") + e.textContent
                    })), this.innerHTML = Object.values(i).map((t => `<span ${this.hasAttribute("reveal")&&!e?"reveal":""} ${this.hasAttribute("reveal-visibility")&&!e?"reveal-visibility":""} style="display: block">${t.trim()}</span>`)).join(""), this.style.opacity = this.hasAttribute("reveal") ? 1 : null, this.style.visibility = this.hasAttribute("reveal-visibility") ? "visible" : null, t(Array.from(this.children))
                }))
            })))
        }
        async _onResize() {
            this.lastWidth !== window.innerWidth && this.hasBeenSplitted && (await this.split(!0), this.dispatchEvent(new CustomEvent("split-lines:re-split", {
                bubbles: !0
            })), this.lastWidth = window.innerWidth)
        }
    };
    window.customElements.define("split-lines", G);
    var Z = class extends M {
        connectedCallback() {
            super.connectedCallback(), this.delegate.on("click", ".popover__overlay", (() => this.open = !1))
        }
        attributeChangedCallback(e, t, i) {
            super.attributeChangedCallback(e, t, i), "open" === e && document.documentElement.classList.toggle("lock-mobile", this.open)
        }
    };
    window.customElements.define("popover-content", Z);
    var J = class extends HTMLElement {
        connectedCallback() {
            this.buttons = Array.from(this.querySelectorAll("button[aria-controls]")), this.scrollerElement = this.querySelector(".tabs-nav__scroller"), this.buttons.forEach((e => e.addEventListener("click", (() => this.selectButton(e))))), this.addEventListener("shopify:block:select", (e => this.selectButton(e.target, !e.detail.load))), this.positionElement = document.createElement("span"), this.positionElement.classList.add("tabs-nav__position"), this.buttons[0].parentElement.insertAdjacentElement("afterend", this.positionElement), window.addEventListener("resize", this._onWindowResized.bind(this)), this._adjustNavigationPosition(), this.hasArrows && this._handleArrows()
        }
        get hasArrows() {
            return this.hasAttribute("arrows")
        }
        get selectedTabIndex() {
            return this.buttons.findIndex((e => "true" === e.getAttribute("aria-expanded")))
        }
        get selectedButton() {
            return this.buttons.find((e => "true" === e.getAttribute("aria-expanded")))
        }
        selectButton(e, t = !0) {
            if (!this.buttons.includes(e) || this.selectedButton === e) return;
            let i = document.getElementById(this.selectedButton.getAttribute("aria-controls")),
                s = document.getElementById(e.getAttribute("aria-controls"));
            t ? this._transitionContent(i, s) : (i.hidden = !0, s.hidden = !1), this.selectedButton.setAttribute("aria-expanded", "false"), e.setAttribute("aria-expanded", "true"), l(this, "tabs-nav:changed", {
                button: e
            }), this._adjustNavigationPosition()
        }
        addButton(e) {
            e.addEventListener("click", (() => this.selectButton(e))), e.setAttribute("aria-expanded", "false"), this.buttons[this.buttons.length - 1].insertAdjacentElement("afterend", e), this.buttons.push(e), this._adjustNavigationPosition(!1)
        }
        _transitionContent(e, t) {
            e.animate({
                opacity: [1, 0]
            }, {
                duration: 250,
                easing: "ease"
            }).onfinish = () => {
                e.hidden = !0, t.hidden = !1, t.animate({
                    opacity: [0, 1]
                }, {
                    duration: 250,
                    easing: "ease"
                })
            }
        }
        _onWindowResized() {
            this._adjustNavigationPosition()
        }
        _adjustNavigationPosition(e = !0) {
            let t = this.selectedButton.clientWidth / this.positionElement.parentElement.clientWidth,
                i = this.selectedButton.offsetLeft / this.positionElement.parentElement.clientWidth / t,
                s = this.scrollerElement.clientWidth / 2;
            this.scrollerElement.scrollTo({
                behavior: e ? "smooth" : "auto",
                left: this.selectedButton.offsetLeft - s + this.selectedButton.clientWidth / 2
            }), e || (this.positionElement.style.transition = "none"), this.positionElement.style.setProperty("--scale", t), this.positionElement.style.setProperty("--translate", 100 * i + "%"), this.positionElement.clientWidth, requestAnimationFrame((() => {
                this.positionElement.classList.add("is-initialized"), this.positionElement.style.transition = null
            }))
        }
        _handleArrows() {
            let e = this.querySelector(".tabs-nav__arrows");
            e.firstElementChild.addEventListener("click", (() => {
                this.selectButton(this.buttons[Math.max(this.selectedTabIndex - 1, 0)])
            })), e.lastElementChild.addEventListener("click", (() => {
                this.selectButton(this.buttons[Math.min(this.selectedTabIndex + 1, this.buttons.length - 1)])
            }))
        }
    };
    window.customElements.define("tabs-nav", J);
    var Q = class {
        static load(e) {
            let t, i = "requested",
                s = "loaded",
                n = this.libraries[e];
            if (n) return n.status === i ? n.promise : n.status === s ? Promise.resolve() : (t = new Promise("script" === n.type ? (e, t) => {
                let i = document.createElement("script");
                i.id = n.tagId, i.src = n.src, i.onerror = t, i.onload = () => {
                    n.status = s, e()
                }, document.body.appendChild(i)
            } : (e, t) => {
                let i = document.createElement("link");
                i.id = n.tagId, i.href = n.src, i.rel = "stylesheet", i.type = "text/css", i.onerror = t, i.onload = () => {
                    n.status = s, e()
                }, document.body.appendChild(i)
            }), n.promise = t, n.status = i, t)
        }
    };
    i(Q, "libraries", {
        flickity: {
            tagId: "flickity",
            src: window.themeVariables.libs.flickity,
            type: "script"
        },
        photoswipe: {
            tagId: "photoswipe",
            src: window.themeVariables.libs.photoswipe,
            type: "script"
        },
        qrCode: {
            tagId: "qrCode",
            src: window.themeVariables.libs.qrCode,
            type: "script"
        },
        modelViewerUiStyles: {
            tagId: "shopify-model-viewer-ui-styles",
            src: "https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css",
            type: "link"
        }
    });
    var K = class extends HTMLElement {
        async connectedCallback() {
            await Q.load("qrCode"), new window.QRCode(this, {
                text: this.getAttribute("identifier"),
                width: 200,
                height: 200
            })
        }
    };
    window.customElements.define("qr-code", K);
    var ee = class extends HTMLSelectElement {
        connectedCallback() {
            if (this.provinceElement = document.getElementById(this.getAttribute("aria-owns")), this.addEventListener("change", this._updateProvinceVisibility.bind(this)), this.hasAttribute("data-default"))
                for (let e = 0; e !== this.options.length; ++e)
                    if (this.options[e].text === this.getAttribute("data-default")) {
                        this.selectedIndex = e;
                        break
                    } this._updateProvinceVisibility();
            let e = "SELECT" === this.provinceElement.tagName ? this.provinceElement : this.provinceElement.querySelector("select");
            if (e.hasAttribute("data-default"))
                for (let t = 0; t !== e.options.length; ++t)
                    if (e.options[t].text === e.getAttribute("data-default")) {
                        e.selectedIndex = t;
                        break
                    }
        }
        _updateProvinceVisibility() {
            let e = this.options[this.selectedIndex];
            if (!e) return;
            let t = JSON.parse(e.getAttribute("data-provinces") || "[]"),
                i = "SELECT" === this.provinceElement.tagName ? this.provinceElement : this.provinceElement.querySelector("select");
            i.innerHTML = "", 0 !== t.length ? (t.forEach((e => {
                i.options.add(new Option(e[1], e[0]))
            })), this.provinceElement.hidden = !1) : this.provinceElement.hidden = !0
        }
    };
    window.customElements.define("country-selector", ee, {
        extends: "select"
    });
    window.customElements.define("modal-content", class extends M {
        connectedCallback() {
            super.connectedCallback(), this.appearAfterDelay && !(this.onlyOnce && this.hasAppearedOnce) && setTimeout((() => this.open = !0), this.apparitionDelay), this.delegate.on("click", ".modal__overlay", (() => this.open = !1))
        }
        get appearAfterDelay() {
            return this.hasAttribute("apparition-delay")
        }
        get apparitionDelay() {
            return 1e3 * parseInt(this.getAttribute("apparition-delay") || 0)
        }
        get onlyOnce() {
            return this.hasAttribute("only-once")
        }
        get hasAppearedOnce() {
            return null !== localStorage.getItem("theme:popup-appeared")
        }
        attributeChangedCallback(e, t, i) {
            super.attributeChangedCallback(e, t, i), "open" === e && (document.documentElement.classList.toggle("lock-all", this.open), this.open && localStorage.setItem("theme:popup-appeared", !0))
        }
    });
    var te = class extends HTMLElement {
        connectedCallback() {
            this.rangeLowerBound = this.querySelector(".price-range__range-group input:first-child"), this.rangeHigherBound = this.querySelector(".price-range__range-group input:last-child"), this.textInputLowerBound = this.querySelector(".price-range__input:first-child input"), this.textInputHigherBound = this.querySelector(".price-range__input:last-child input"), this.textInputLowerBound.addEventListener("focus", (() => this.textInputLowerBound.select())), this.textInputHigherBound.addEventListener("focus", (() => this.textInputHigherBound.select())), this.textInputLowerBound.addEventListener("change", (e => {
                e.target.value = Math.max(Math.min(parseInt(e.target.value), parseInt(this.textInputHigherBound.value || e.target.max) - 1), e.target.min), this.rangeLowerBound.value = e.target.value, this.rangeLowerBound.parentElement.style.setProperty("--range-min", parseInt(this.rangeLowerBound.value) / parseInt(this.rangeLowerBound.max) * 100 + "%")
            })), this.textInputHigherBound.addEventListener("change", (e => {
                e.target.value = Math.min(Math.max(parseInt(e.target.value), parseInt(this.textInputLowerBound.value || e.target.min) + 1), e.target.max), this.rangeHigherBound.value = e.target.value, this.rangeHigherBound.parentElement.style.setProperty("--range-max", parseInt(this.rangeHigherBound.value) / parseInt(this.rangeHigherBound.max) * 100 + "%")
            })), this.rangeLowerBound.addEventListener("change", (e => {
                this.textInputLowerBound.value = e.target.value, this.textInputLowerBound.dispatchEvent(new Event("change", {
                    bubbles: !0
                }))
            })), this.rangeHigherBound.addEventListener("change", (e => {
                this.textInputHigherBound.value = e.target.value, this.textInputHigherBound.dispatchEvent(new Event("change", {
                    bubbles: !0
                }))
            })), this.rangeLowerBound.addEventListener("input", (e => {
                l(this, "facet:abort-loading"), e.target.value = Math.min(parseInt(e.target.value), parseInt(this.textInputHigherBound.value || e.target.max) - 1), e.target.parentElement.style.setProperty("--range-min", parseInt(e.target.value) / parseInt(e.target.max) * 100 + "%"), this.textInputLowerBound.value = e.target.value
            })), this.rangeHigherBound.addEventListener("input", (e => {
                l(this, "facet:abort-loading"), e.target.value = Math.max(parseInt(e.target.value), parseInt(this.textInputLowerBound.value || e.target.min) + 1), e.target.parentElement.style.setProperty("--range-max", parseInt(e.target.value) / parseInt(e.target.max) * 100 + "%"), this.textInputHigherBound.value = e.target.value
            }))
        }
    };
    window.customElements.define("price-range", te);
    var ie = class extends HTMLElement {
        connectedCallback() {
            let e = this.querySelector(".link-bar__link-item--selected");
            e && requestAnimationFrame((() => {
                e.style.scrollSnapAlign = "none"
            }))
        }
    };
    window.customElements.define("link-bar", ie);
    var se = class {
        static prefersReducedMotion() {
            return window.matchMedia("(prefers-reduced-motion: reduce)").matches
        }
        static supportsHover() {
            return window.matchMedia("(pointer: fine)").matches
        }
    };

    function ne(e, t, i = !1) {
        let s = [],
            n = e;
        for (; n = n.previousElementSibling;)(!t || n.matches(t)) && s.push(n);
        for (i && s.push(e), n = e; n = n.nextElementSibling;)(!t || n.matches(t)) && s.push(n);
        return s
    }
    async function ae(e) {
        let t = [];
        for (let i of (null != e && "function" == typeof e[Symbol.iterator] || (e = [e]), e))
            if ("function" == typeof i[Symbol.asyncIterator])
                for await (let e of i) t.push(e);
            else t.push(i);
        return t
    }
    window.customElements.define("flickity-carousel", class extends c {
        constructor() {
            super(), 1 !== this.childElementCount && (this.addEventListener("flickity:ready", this._preloadNextImage.bind(this)), this.addEventListener("flickity:slide-changed", this._preloadNextImage.bind(this)), this._createFlickity())
        }
        async disconnectedCallback() {
            this.flickity && (await this.flickity).destroy()
        }
        get flickityConfig() {
            return JSON.parse(this.getAttribute("flickity-config"))
        }
        get flickityInstance() {
            return this.flickity
        }
        async next() {
            (await this.flickityInstance).next()
        }
        async previous() {
            (await this.flickityInstance).previous()
        }
        async select(e) {
            (await this.flickityInstance).selectCell(e)
        }
        async setDraggable(e) {
            let t = await this.flickity;
            t.options.draggable = e, t.updateDraggable()
        }
        async reload() {
            (await this.flickity).destroy(), this.flickityConfig.cellSelector && Array.from(this.children).sort(((e, t) => parseInt(e.getAttribute("data-original-position")) > parseInt(t.getAttribute("data-original-position")) ? 1 : -1)).forEach((e => this.appendChild(e))), this._createFlickity()
        }
        async _createFlickity() {
            this.flickity = new Promise((async e => {
                await Q.load("flickity"), await this.untilVisible({
                    rootMargin: "400px",
                    threshold: 0
                });
                let t = new window.ThemeFlickity(this, {
                    ...this.flickityConfig,
                    rightToLeft: "rtl" === window.themeVariables.settings.direction,
                    accessibility: se.supportsHover(),
                    on: {
                        ready: e => l(this, "flickity:ready", e),
                        change: e => l(this, "flickity:slide-changed", e),
                        settle: e => l(this, "flickity:slide-settled", e)
                    }
                });
                e(t)
            })), this.hasAttribute("click-nav") && ((await this.flickityInstance).on("staticClick", this._onStaticClick.bind(this)), this.addEventListener("mousemove", this._onMouseMove.bind(this)))
        }
        async _onStaticClick(e, t, i) {
            let s = await this.flickityInstance,
                n = s.selectedElement.hasAttribute("data-media-type") && ["video", "external_video", "model"].includes(s.selectedElement.getAttribute("data-media-type"));
            if (!i || n || window.matchMedia(window.themeVariables.breakpoints.phone).matches) return;
            let a = s.viewport.getBoundingClientRect(),
                r = Math.floor(a.right - a.width / 2);
            t.clientX > r ? s.next() : s.previous()
        }
        async _onMouseMove(e) {
            let t = await this.flickityInstance,
                i = t.selectedElement.hasAttribute("data-media-type") && ["video", "external_video", "model"].includes(t.selectedElement.getAttribute("data-media-type"));
            this.classList.toggle("is-hovering-right", e.offsetX > this.clientWidth / 2 && !i), this.classList.toggle("is-hovering-left", e.offsetX <= this.clientWidth / 2 && !i)
        }
        async _preloadNextImage() {
            var e;
            let t = await this.flickity;
            t.selectedElement.nextElementSibling && (null == (e = t.selectedElement.nextElementSibling.querySelector("img")) || e.setAttribute("loading", "eager"))
        }
    });
    window.customElements.define("flickity-controls", class extends c {
        async connectedCallback() {
            this.flickityCarousel.addEventListener("flickity:ready", this._onSlideChanged.bind(this, !1)), this.flickityCarousel.addEventListener("flickity:slide-changed", this._onSlideChanged.bind(this, !0)), this.delegate.on("click", '[data-action="prev"]', (() => this.flickityCarousel.previous())), this.delegate.on("click", '[data-action="next"]', (() => this.flickityCarousel.next())), this.delegate.on("click", '[data-action="select"]', ((e, t) => this.flickityCarousel.select(`#${t.getAttribute("aria-controls")}`)))
        }
        get flickityCarousel() {
            return this._flickityCarousel = this._flickityCarousel || document.getElementById(this.getAttribute("controls"))
        }
        async _onSlideChanged(e = !0) {
            let t = await this.flickityCarousel.flickityInstance;
            Array.from(this.querySelectorAll(`[aria-controls="${t.selectedElement.id}"]`)).forEach((t => {
                t.setAttribute("aria-current", "true"), ne(t).forEach((e => e.removeAttribute("aria-current"))), requestAnimationFrame((() => {
                    if (t.offsetParent && t.offsetParent !== this) {
                        let i = t.offsetParent.clientHeight / 2,
                            s = t.offsetParent.clientWidth / 2;
                        t.offsetParent.scrollTo({
                            behavior: e ? "smooth" : "auto",
                            top: t.offsetTop - i + t.clientHeight / 2,
                            left: t.offsetLeft - s + t.clientWidth / 2
                        })
                    }
                }))
            }))
        }
    });
    window.customElements.define("external-video", class extends c {
        constructor() {
            super(), this.hasLoaded = !1, (async () => {
                this.autoPlay ? (await this.untilVisible({
                    rootMargin: "300px",
                    threshold: 0
                }), this.play()) : this.addEventListener("click", this.play.bind(this), {
                    once: !0
                })
            })()
        }
        get autoPlay() {
            return this.hasAttribute("autoplay")
        }
        get provider() {
            return this.getAttribute("provider")
        }
        async play() {
            this.hasLoaded || await this._setupPlayer(), "youtube" === this.provider ? this.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
                event: "command",
                func: "playVideo",
                args: ""
            }), "*") : "vimeo" === this.provider && this.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
                method: "play"
            }), "*")
        }
        pause() {
            this.hasLoaded && ("youtube" === this.provider ? this.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
                event: "command",
                func: "pauseVideo",
                args: ""
            }), "*") : "vimeo" === this.provider && this.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
                method: "pause"
            }), "*"))
        }
        _setupPlayer() {
            return this._setupPromise ? this._setupPromise : this._setupPromise = new Promise((e => {
                let t = this.querySelector("template"),
                    i = t.content.firstElementChild.cloneNode(!0);
                i.onload = () => {
                    this.hasLoaded = !0, e()
                }, this.autoPlay ? t.replaceWith(i) : (this.innerHTML = "", this.appendChild(i))
            }))
        }
    });
    var re = class {
        static load(e) {
            return e ? (this.loadedProducts[e] || (this.loadedProducts[e] = new Promise((async t => {
                t(await (await fetch(`${window.themeVariables.routes.rootUrlWithoutSlash}/products/${e}.js`)).json())
            }))), this.loadedProducts[e]) : void 0
        }
    };
    i(re, "loadedProducts", {});
    var oe = class extends HTMLElement {
        constructor() {
            super(), Q.load("modelViewerUiStyles"), window.Shopify.loadFeatures([{
                name: "shopify-xr",
                version: "1.0",
                onLoad: this._setupShopifyXr.bind(this)
            }, {
                name: "model-viewer-ui",
                version: "1.0",
                onLoad: () => {
                    this.modelUi = new window.Shopify.ModelViewerUI(this.firstElementChild, {
                        focusOnPlay: !1
                    });
                    let e = this.querySelector("model-viewer");
                    e.addEventListener("shopify_model_viewer_ui_toggle_play", (() => {
                        e.dispatchEvent(new CustomEvent("model:played", {
                            bubbles: !0
                        }))
                    })), e.addEventListener("shopify_model_viewer_ui_toggle_pause", (() => {
                        e.dispatchEvent(new CustomEvent("model:paused", {
                            bubbles: !0
                        }))
                    }))
                }
            }])
        }
        disconnectedCallback() {
            var e;
            null == (e = this.modelUi) || e.destroy()
        }
        play() {
            this.modelUi && this.modelUi.play()
        }
        pause() {
            this.modelUi && this.modelUi.pause()
        }
        async _setupShopifyXr() {
            if (window.ShopifyXR) {
                let e = (await re.load(this.getAttribute("product-handle"))).media.filter((e => "model" === e.media_type));
                window.ShopifyXR.addModels(e), window.ShopifyXR.setupXRElements()
            } else document.addEventListener("shopify_xr_initialized", this._setupShopifyXr.bind(this))
        }
    };
    window.customElements.define("model-media", oe);
    var le = class extends HTMLElement {
        constructor() {
            super(), this.hasLoaded = !1, this.autoPlay ? this.play() : this.addEventListener("click", this.play.bind(this), {
                once: !0
            })
        }
        get autoPlay() {
            return this.hasAttribute("autoplay")
        }
        play() {
            this.hasLoaded || this._replaceContent(), this.querySelector("video").play()
        }
        pause() {
            this.hasLoaded && this.querySelector("video").pause()
        }
        _replaceContent() {
            let e = this.querySelector("template").content.firstElementChild.cloneNode(!0);
            this.innerHTML = "", this.appendChild(e), this.firstElementChild.addEventListener("play", (() => {
                this.dispatchEvent(new CustomEvent("video:played", {
                    bubbles: !0
                }))
            })), this.firstElementChild.addEventListener("pause", (() => {
                this.dispatchEvent(new CustomEvent("video:paused", {
                    bubbles: !0
                }))
            })), this.hasLoaded = !0
        }
    };
    window.customElements.define("native-video", le);
    window.customElements.define("combo-box", class extends M {
        connectedCallback() {
            if (super.connectedCallback(), this.options = Array.from(this.querySelectorAll('[role="option"]')), this.delegate.on("click", '[role="option"]', this._onValueClicked.bind(this)), this.delegate.on("keydown", '[role="listbox"]', this._onKeyDown.bind(this)), this.delegate.on("change", "select", this._onValueChanged.bind(this)), this.delegate.on("click", ".combo-box__overlay", (() => this.open = !1)), this.hasAttribute("fit-toggle")) {
                let e = Math.max(...this.options.map((e => e.clientWidth))),
                    t = document.querySelector(`[aria-controls="${this.id}"]`);
                t && t.style.setProperty("--largest-option-width", `${e+2}px`)
            }
        }
        get nativeSelect() {
            return this.querySelector("select")
        }
        set selectedValue(e) {
            this.options.forEach((t => {
                t.setAttribute("aria-selected", t.getAttribute("value") === e ? "true" : "false")
            }))
        }
        attributeChangedCallback(e, t, i) {
            if (super.attributeChangedCallback(e, t, i), "open" === e) {
                if (this.open) {
                    let e = this.getBoundingClientRect();
                    this.classList.toggle("combo-box--top", e.top >= window.innerHeight / 2 * 1.5), setTimeout((() => this.focusTrap.activate()), 150)
                } else this.focusTrap.deactivate(), setTimeout((() => this.classList.remove("combo-box--top")), 200);
                document.documentElement.classList.toggle("lock-mobile", this.open)
            }
        }
        _onValueClicked(e, t) {
            this.selectedValue = t.value, this.nativeSelect.value = t.value, this.nativeSelect.dispatchEvent(new Event("change", {
                bubbles: !0
            })), this.open = !1
        }
        _onValueChanged(e, t) {
            Array.from(this.nativeSelect.options).forEach((e => e.toggleAttribute("selected", t.value === e.value))), this.selectedValue = t.value
        }
        _onKeyDown(e) {
            var t, i;
            ("ArrowDown" === e.key || "ArrowUp" === e.key) && (e.preventDefault(), "ArrowDown" === e.key ? null == (t = document.activeElement.nextElementSibling) || t.focus() : null == (i = document.activeElement.previousElementSibling) || i.focus())
        }
    });
    window.customElements.define("quantity-selector", class extends c {
        connectedCallback() {
            this.inputElement = this.querySelector("input"), this.delegate.on("click", "button:first-child", (() => this.inputElement.quantity = this.inputElement.quantity - 1)), this.delegate.on("click", "button:last-child", (() => this.inputElement.quantity = this.inputElement.quantity + 1))
        }
    });
    var de = class extends HTMLInputElement {
        connectedCallback() {
            this.addEventListener("input", this._onValueInput.bind(this)), this.addEventListener("change", this._onValueChanged.bind(this)), this.addEventListener("keydown", this._onKeyDown.bind(this))
        }
        get quantity() {
            return parseInt(this.value)
        }
        set quantity(e) {
            let t = ("number" == typeof e || "string" == typeof e && "" !== e.trim()) && !isNaN(e);
            "" !== e && ((!t || e < 0) && (e = parseInt(e) || 1), this.value = Math.max(this.min || 1, Math.min(e, this.max || Number.MAX_VALUE)).toString(), this.size = Math.max(this.value.length + 1, 2))
        }
        _onValueInput() {
            this.quantity = this.value
        }
        _onValueChanged() {
            "" === this.value && (this.quantity = 1)
        }
        _onKeyDown(e) {
            e.stopPropagation(), "ArrowUp" === e.key ? this.quantity = this.quantity + 1 : "ArrowDown" === e.key && (this.quantity = this.quantity - 1)
        }
    };
    window.customElements.define("input-number", de, {
        extends: "input"
    });
    window.customElements.define("announcement-bar", class extends c {
        async connectedCallback() {
            await customElements.whenDefined("announcement-bar-item"), this.items = Array.from(this.querySelectorAll("announcement-bar-item")), this.hasPendingTransition = !1, this.delegate.on("click", '[data-action="prev"]', this.previous.bind(this)), this.delegate.on("click", '[data-action="next"]', this.next.bind(this)), this.autoPlay && (this.delegate.on("announcement-bar:content:open", this._pausePlayer.bind(this)), this.delegate.on("announcement-bar:content:close", this._startPlayer.bind(this))), window.ResizeObserver && (this.resizeObserver = new ResizeObserver(this._updateCustomProperties.bind(this)), this.resizeObserver.observe(this)), this.autoPlay && this._startPlayer(), Shopify.designMode && this.delegate.on("shopify:block:select", (e => this.select(e.target.index, !1)))
        }
        get autoPlay() {
            return this.hasAttribute("auto-play")
        }
        get selectedIndex() {
            return this.items.findIndex((e => e.selected))
        }
        previous() {
            this.select((this.selectedIndex - 1 + this.items.length) % this.items.length)
        }
        next() {
            this.select((this.selectedIndex + 1 + this.items.length) % this.items.length)
        }
        async select(e, t = !0) {
            this.selectedIndex !== e && !this.hasPendingTransition && (this.autoPlay && this._pausePlayer(), this.hasPendingTransition = !0, await this.items[this.selectedIndex].deselect(t), await this.items[e].select(t), this.hasPendingTransition = !1, this.autoPlay && this._startPlayer())
        }
        _pausePlayer() {
            clearInterval(this._interval)
        }
        _startPlayer() {
            this._interval = setInterval(this.next.bind(this), 1e3 * parseInt(this.getAttribute("cycle-speed")))
        }
        _updateCustomProperties(e) {
            e.forEach((e => {
                if (e.target === this) {
                    let t = e.borderBoxSize ? e.borderBoxSize.length > 0 ? e.borderBoxSize[0].blockSize : e.borderBoxSize.blockSize : e.target.clientHeight;
                    document.documentElement.style.setProperty("--announcement-bar-height", `${t}px`)
                }
            }))
        }
    });
    window.customElements.define("announcement-bar-item", class extends c {
        connectedCallback() {
            this.hasContent && (this.contentElement = this.querySelector(".announcement-bar__content"), this.delegate.on("click", '[data-action="open-content"]', this.openContent.bind(this)), this.delegate.on("click", '[data-action="close-content"]', this.closeContent.bind(this)), Shopify.designMode && (this.addEventListener("shopify:block:select", this.openContent.bind(this)), this.addEventListener("shopify:block:deselect", this.closeContent.bind(this))))
        }
        get index() {
            return [...this.parentNode.children].indexOf(this)
        }
        get hasContent() {
            return this.hasAttribute("has-content")
        }
        get selected() {
            return !this.hasAttribute("hidden")
        }
        get focusTrap() {
            return this._trapFocus = this._trapFocus || T(this.contentElement.querySelector(".announcement-bar__content-inner"), {
                fallbackFocus: this,
                clickOutsideDeactivates: e => "BUTTON" !== e.target.tagName,
                allowOutsideClick: e => "BUTTON" === e.target.tagName,
                onDeactivate: this.closeContent.bind(this),
                preventScroll: !0
            })
        }
        async select(e = !0) {
            this.removeAttribute("hidden"), await new Promise((t => {
                this.animate({
                    transform: ["translateY(8px)", "translateY(0)"],
                    opacity: [0, 1]
                }, {
                    duration: e ? 150 : 0,
                    easing: "ease-in-out"
                }).onfinish = t
            }))
        }
        async deselect(e = !0) {
            await this.closeContent(), await new Promise((t => {
                this.animate({
                    transform: ["translateY(0)", "translateY(-8px)"],
                    opacity: [1, 0]
                }, {
                    duration: e ? 150 : 0,
                    easing: "ease-in-out"
                }).onfinish = t
            })), this.setAttribute("hidden", "")
        }
        async openContent() {
            this.hasContent && (this.contentElement.addEventListener("transitionend", (() => this.focusTrap.activate()), {
                once: !0
            }), this.contentElement.removeAttribute("hidden"), document.documentElement.classList.add("lock-all"), this.dispatchEvent(new CustomEvent("announcement-bar:content:open", {
                bubbles: !0
            })))
        }
        async closeContent() {
            if (!this.hasContent || this.contentElement.hasAttribute("hidden")) return Promise.resolve();
            await new Promise((e => {
                this.contentElement.addEventListener("transitionend", (() => e()), {
                    once: !0
                }), this.contentElement.setAttribute("hidden", ""), this.focusTrap.deactivate(), document.documentElement.classList.remove("lock-all"), this.dispatchEvent(new CustomEvent("announcement-bar:content:close", {
                    bubbles: !0
                }))
            }))
        }
    });
    var ce = class extends HTMLElement {
        connectedCallback() {
            this.facetToolbar = document.getElementById("mobile-facet-toolbar"), this.tabsNav = document.getElementById("search-tabs-nav"), this.tabsNav.addEventListener("tabs-nav:changed", this._onCategoryChanged.bind(this)), this._completeSearch()
        }
        get terms() {
            return this.getAttribute("terms")
        }
        get completeFor() {
            return JSON.parse(this.getAttribute("complete-for")).filter((e => "" !== e))
        }
        async _completeSearch() {
            let e = [];
            this.completeFor.forEach((t => {
                e.push(fetch(`${window.themeVariables.routes.searchUrl}?section_id=${this.getAttribute("section-id")}&q=${this.terms}&type=${t}&options[prefix]=last&options[unavailable_products]=${window.themeVariables.settings.searchUnavailableProducts}`))
            })), await Promise.all((await Promise.all(e)).map((async e => {
                let t = document.createElement("div");
                t.innerHTML = await e.text();
                let i = t.querySelector(".main-search__category-result"),
                    s = t.querySelector("#search-tabs-nav .tabs-nav__item");
                i && (i.setAttribute("hidden", ""), this.insertAdjacentElement("beforeend", i), this.tabsNav.addButton(s))
            })))
        }
        _onCategoryChanged(e) {
            let t = e.detail.button;
            this.facetToolbar.classList.toggle("is-collapsed", "product" !== t.getAttribute("data-type"))
        }
    };
    window.customElements.define("search-page", ce);
    window.customElements.define("cookie-bar", class extends c {
        connectedCallback() {
            window.Shopify && window.Shopify.designMode && (this.rootDelegate.on("shopify:section:select", (e => P(e, this, (() => this.open = !0)))), this.rootDelegate.on("shopify:section:deselect", (e => P(e, this, (() => this.open = !1))))), this.delegate.on("click", '[data-action~="accept-policy"]', this._acceptPolicy.bind(this)), this.delegate.on("click", '[data-action~="decline-policy"]', this._declinePolicy.bind(this)), window.Shopify.loadFeatures([{
                name: "consent-tracking-api",
                version: "0.1",
                onLoad: this._onCookieBarSetup.bind(this)
            }])
        }
        set open(e) {
            this.toggleAttribute("hidden", !e)
        }
        _onCookieBarSetup() {
            window.Shopify.customerPrivacy.shouldShowGDPRBanner() && (this.open = !0)
        }
        _acceptPolicy() {
            window.Shopify.customerPrivacy.setTrackingConsent(!0, (() => this.open = !1))
        }
        _declinePolicy() {
            window.Shopify.customerPrivacy.setTrackingConsent(!1, (() => this.open = !1))
        }
    });
    var he = class extends HTMLElement {
        async connectedCallback() {
            if (!this.hasAttribute("use-automatic-recommendations")) return;
            let e = await fetch(`${window.themeVariables.routes.productRecommendationsUrl}?product_id=${this.productId}&limit=${this.recommendationsCount}&section_id=${this.sectionId}`),
                t = document.createElement("div");
            t.innerHTML = await e.text();
            let i = t.querySelector("product-recommendations");
            if (i.hasChildNodes() && (this.innerHTML = i.innerHTML, Shopify.enable_flash_sale || Shopify.enable_namagoo)) {
                let e = $(".product-card-price");
                for (let t = 0; t < e.length; t++) B(e, t)
            }
        }
        get productId() {
            return this.getAttribute("product-id")
        }
        get sectionId() {
            return this.getAttribute("section-id")
        }
        get recommendationsCount() {
            return parseInt(this.getAttribute("recommendations-count") || 4)
        }
    };
    window.customElements.define("product-recommendations", he);
    var ue = class extends HTMLElement {
        async connectedCallback() {
            if ("" === this.searchQueryString) return;
            let e = await fetch(`${window.themeVariables.routes.searchUrl}?type=product&q=${this.searchQueryString}&section_id=${this.sectionId}`),
                t = document.createElement("div");
            t.innerHTML = await e.text();
            let i = t.querySelector("recently-viewed-products");
            i.hasChildNodes() && (this.innerHTML = i.innerHTML)
        }
        get searchQueryString() {
            let e = JSON.parse(localStorage.getItem("theme:recently-viewed-products") || "[]");
            return this.hasAttribute("exclude-product-id") && e.includes(parseInt(this.getAttribute("exclude-product-id"))) && e.splice(e.indexOf(parseInt(this.getAttribute("exclude-product-id"))), 1), e.map((e => "id:" + e)).slice(0, this.productsCount).join(" OR ")
        }
        get sectionId() {
            return this.getAttribute("section-id")
        }
        get productsCount() {
            return this.getAttribute("products-count") || 4
        }
    };

    function pe(e, t) {
        let i = "string" == typeof e ? e : e.preview_image ? e.preview_image.src : e.url;
        if (null === t) return i;
        if ("master" === t) return i.replace(/http(s)?:/, "");
        let s = i.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
        if (!s) return null; {
            let e = i.split(s[0]),
                n = s[0];
            return (e[0] + "_" + t + n).replace(/http(s)?:/, "")
        }
    }

    function me(e, t) {
        let i = [];
        return ("string" == typeof e ? t : be(e, t)).forEach((t => {
            i.push(`${pe(e,t+"x")} ${t}w`)
        })), i.join(",")
    }

    function be(e, t) {
        let i = [],
            s = e.preview_image.width;
        return t.forEach((e => {
            s >= e && i.push(e)
        })), i
    }

    function ge(e) {
        return new Promise((t => {
            !e || "IMG" !== e.tagName || e.complete ? t() : e.onload = () => t()
        }))
    }
    window.customElements.define("recently-viewed-products", ue);
    var fe = class {
            constructor(e) {
                this._effect = e, this._playState = "idle", this._finished = Promise.resolve()
            }
            get finished() {
                return this._finished
            }
            get animationEffects() {
                return this._effect instanceof ye ? [this._effect] : this._effect.animationEffects
            }
            cancel() {
                this.animationEffects.forEach((e => e.cancel()))
            }
            finish() {
                this.animationEffects.forEach((e => e.finish()))
            }
            play() {
                this._playState = "running", this._effect.play(), this._finished = this._effect.finished, this._finished.then((() => {
                    this._playState = "finished"
                }), (e => {
                    this._playState = "idle"
                }))
            }
        },
        ye = class {
            constructor(e, t, i = {}) {
                e && ("Animation" in window ? this._animation = new Animation(new KeyframeEffect(e, t, i)) : (i.fill = "forwards", this._animation = e.animate(t, i), this._animation.pause()), this._animation.addEventListener("finish", (() => {
                    e.style.opacity = t.hasOwnProperty("opacity") ? t.opacity[t.opacity.length - 1] : null, e.style.visibility = t.hasOwnProperty("visibility") ? t.visibility[t.visibility.length - 1] : null
                })))
            }
            get finished() {
                return this._animation ? this._animation.finished ? this._animation.finished : new Promise((e => this._animation.onfinish = e)) : Promise.resolve()
            }
            play() {
                this._animation && (this._animation.startTime = null, this._animation.play())
            }
            cancel() {
                this._animation && this._animation.cancel()
            }
            finish() {
                this._animation && this._animation.finish()
            }
        },
        we = class {
            constructor(e) {
                this._childrenEffects = e, this._finished = Promise.resolve()
            }
            get finished() {
                return this._finished
            }
            get animationEffects() {
                return this._childrenEffects.flatMap((e => e instanceof ye ? e : e.animationEffects))
            }
        },
        ve = class extends we {
            play() {
                let e = [];
                for (let t of this._childrenEffects) t.play(), e.push(t.finished);
                this._finished = Promise.all(e)
            }
        },
        _e = class extends we {
            play() {
                this._finished = new Promise((async (e, t) => {
                    try {
                        for (let e of this._childrenEffects) e.play(), await e.finished;
                        e()
                    } catch (e) {
                        t()
                    }
                }))
            }
        },
        Ee = class extends HTMLElement {
            async connectedCallback() {
                this._pendingAnimations = [], this.addEventListener("split-lines:re-split", (e => {
                    Array.from(e.target.children).forEach((e => e.style.visibility = this.selected ? "visible" : "hidden"))
                })), se.prefersReducedMotion() && (this.setAttribute("reveal-visibility", ""), Array.from(this.querySelectorAll("[reveal], [reveal-visibility]")).forEach((e => {
                    e.removeAttribute("reveal"), e.removeAttribute("reveal-visibility")
                })))
            }
            get index() {
                return [...this.parentNode.children].indexOf(this)
            }
            get selected() {
                return !this.hasAttribute("hidden")
            }
            async transitionToLeave(e, t = !0) {
                "reveal" !== e && this.setAttribute("hidden", ""), this._pendingAnimations.forEach((e => e.cancel())), this._pendingAnimations = [];
                let i = null,
                    s = await ae(this.querySelectorAll("split-lines, .button-group, .button-wrapper")),
                    n = Array.from(this.querySelectorAll(".slideshow__image-wrapper"));
                switch (e) {
                    case "sweep":
                        i = new fe(new _e([new ye(this, {
                            visibility: ["visible", "hidden"]
                        }, {
                            duration: 500
                        }), new ve(s.map((e => new ye(e, {
                            opacity: [1, 0],
                            visibility: ["visible", "hidden"]
                        }))))]));
                        break;
                    case "fade":
                        i = new fe(new ye(this, {
                            opacity: [1, 0],
                            visibility: ["visible", "hidden"]
                        }, {
                            duration: 250,
                            easing: "ease-in-out"
                        }));
                        break;
                    case "reveal":
                        i = new fe(new _e([new ve(s.reverse().map((e => new ye(e, {
                            opacity: [1, 0],
                            visibility: ["visible", "hidden"]
                        }, {
                            duration: 250,
                            easing: "ease-in-out"
                        })))), new ve(n.map((e => e.classList.contains("slideshow__image-wrapper--secondary") ? new ye(e, {
                            visibility: ["visible", "hidden"],
                            clipPath: ["inset(0 0 0 0)", "inset(100% 0 0 0)"]
                        }, {
                            duration: 450,
                            easing: "cubic-bezier(0.99, 0.01, 0.50, 0.94)"
                        }) : new ye(e, {
                            visibility: ["visible", "hidden"],
                            clipPath: ["inset(0 0 0 0)", "inset(0 0 100% 0)"]
                        }, {
                            duration: 450,
                            easing: "cubic-bezier(0.99, 0.01, 0.50, 0.94)"
                        }))))]))
                }
                await this._executeAnimation(i, t), "reveal" === e && this.setAttribute("hidden", "")
            }
            async transitionToEnter(e, t = !0, i = !1) {
                this.removeAttribute("hidden"), await this._untilReady();
                let s = null,
                    n = await ae(this.querySelectorAll("split-lines, .button-group, .button-wrapper")),
                    a = Array.from(this.querySelectorAll(".slideshow__image-wrapper"));
                switch (e) {
                    case "sweep":
                        s = new fe(new _e([new ye(this, {
                            visibility: ["hidden", "visible"],
                            clipPath: i ? ["inset(0 100% 0 0)", "inset(0 0 0 0)"] : ["inset(0 0 0 100%)", "inset(0 0 0 0)"]
                        }, {
                            duration: 500,
                            easing: "cubic-bezier(1, 0, 0, 1)"
                        }), new ve(n.map(((e, t) => new ye(e, {
                            opacity: [0, 1],
                            visibility: ["hidden", "visible"],
                            clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"],
                            transform: ["translateY(100%)", "translateY(0)"]
                        }, {
                            duration: 450,
                            delay: 100 * t,
                            easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)"
                        }))))]));
                        break;
                    case "fade":
                        s = new fe(new ye(this, {
                            opacity: [0, 1],
                            visibility: ["hidden", "visible"]
                        }, {
                            duration: 250,
                            easing: "ease-in-out"
                        }));
                        break;
                    case "reveal":
                        s = new fe(new _e([new ve(a.map((e => e.classList.contains("slideshow__image-wrapper--secondary") ? new ye(e, {
                            visibility: ["hidden", "visible"],
                            clipPath: ["inset(100% 0 0 0)", "inset(0 0 0 0)"]
                        }, {
                            duration: 450,
                            delay: 100,
                            easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)"
                        }) : new ye(e, {
                            visibility: ["hidden", "visible"],
                            clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"]
                        }, {
                            duration: 450,
                            delay: 100,
                            easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)"
                        })))), new ve(n.map(((e, t) => new ye(e, {
                            opacity: [0, 1],
                            visibility: ["hidden", "visible"],
                            clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"],
                            transform: ["translateY(100%)", "translateY(0)"]
                        }, {
                            duration: 450,
                            delay: 100 * t,
                            easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)"
                        }))))]))
                }
                return this._executeAnimation(s, t)
            }
            async _executeAnimation(e, t) {
                return this._pendingAnimations.push(e), t ? e.play() : e.finish(), e.finished
            }
            async _untilReady() {
                return Promise.all(this._getVisibleImages().map((e => ge(e))))
            }
            _preloadImages() {
                this._getVisibleImages().forEach((e => {
                    e.setAttribute("loading", "eager")
                }))
            }
            _getVisibleImages() {
                return Array.from(this.querySelectorAll("img")).filter((e => "none" !== getComputedStyle(e.parentElement).display))
            }
        };
    window.customElements.define("slide-show-item", Ee);
    var Se = {
            _blockVerticalScroll(e = 18) {
                this.addEventListener("touchstart", (e => {
                    this.firstTouchClientX = e.touches[0].clientX
                })), this.addEventListener("touchmove", (t => {
                    Math.abs(t.touches[0].clientX - this.firstTouchClientX) > e && t.preventDefault()
                }), {
                    passive: !1
                })
            }
        },
        xe = class extends c {
            connectedCallback() {
                this.items = Array.from(this.querySelectorAll("slide-show-item")), this.pageDots = this.querySelector("page-dots"), this.isTransitioning = !1, this.items.length > 1 && (Shopify.designMode && (this.addEventListener("shopify:block:deselect", this.startPlayer.bind(this)), this.addEventListener("shopify:block:select", (e => {
                    this.pausePlayer(), this.intersectionObserver.disconnect(), !e.detail.load && e.target.selected || this.select(e.target.index, !e.detail.load)
                }))), this.addEventListener("swiperight", this.previous.bind(this)), this.addEventListener("swipeleft", this.next.bind(this)), this.addEventListener("page-dots:changed", (e => this.select(e.detail.index))), this._blockVerticalScroll()), this._setupVisibility()
            }
            get selectedIndex() {
                return this.items.findIndex((e => e.selected))
            }
            get transitionType() {
                return se.prefersReducedMotion() ? "fade" : this.getAttribute("transition-type")
            }
            async _setupVisibility() {
                await this.untilVisible(), await this.items[this.selectedIndex].transitionToEnter(this.transitionType).catch((e => {})), this.startPlayer()
            }
            previous() {
                this.select((this.selectedIndex - 1 + this.items.length) % this.items.length, !0, !0)
            }
            next() {
                this.select((this.selectedIndex + 1 + this.items.length) % this.items.length, !0, !1)
            }
            async select(e, t = !0, i = !1) {
                if ("reveal" === this.transitionType && this.isTransitioning) return;
                this.isTransitioning = !0;
                let s = this.items[this.selectedIndex],
                    n = this.items[e];
                this.items[(n.index + 1) % this.items.length]._preloadImages(), s && s !== n && ("reveal" !== this.transitionType ? s.transitionToLeave(this.transitionType, t) : await s.transitionToLeave(this.transitionType, t)), this.pageDots && (this.pageDots.selectedIndex = n.index), await n.transitionToEnter(this.transitionType, t, i).catch((e => {})), this.isTransitioning = !1
            }
            pausePlayer() {
                this.style.setProperty("--section-animation-play-state", "paused")
            }
            startPlayer() {
                this.hasAttribute("auto-play") && this.style.setProperty("--section-animation-play-state", "running")
            }
        };
    Object.assign(xe.prototype, Se), window.customElements.define("slide-show", xe);
    var ke = class extends HTMLElement {
        get index() {
            return [...this.parentNode.children].indexOf(this)
        }
        get selected() {
            return !this.hasAttribute("hidden")
        }
        get hasAttachedImage() {
            return this.hasAttribute("attached-image")
        }
        async transitionToEnter(e = !0) {
            this.removeAttribute("hidden");
            let t = this.querySelector(".image-with-text__text-wrapper"),
                i = await ae(this.querySelectorAll(".image-with-text__content split-lines")),
                s = new fe(new _e([new ve(i.map(((e, t) => new ye(e, {
                    opacity: [0, .2, 1],
                    transform: ["translateY(100%)", "translateY(0)"],
                    clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"]
                }, {
                    duration: 350,
                    delay: 120 * t,
                    easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)"
                })))), new ye(t, {
                    opacity: [0, 1]
                }, {
                    duration: 300
                })]));
            return e ? s.play() : s.finish(), s.finished
        }
        async transitionToLeave(e = !0) {
            let t = await ae(this.querySelectorAll(".image-with-text__text-wrapper, .image-with-text__content split-lines")),
                i = new fe(new ve(t.map((e => new ye(e, {
                    opacity: [1, 0]
                }, {
                    duration: 200
                })))));
            e ? i.play() : i.finish(), await i.finished, this.setAttribute("hidden", "")
        }
    };
    window.customElements.define("image-with-text-item", ke);
    window.customElements.define("image-with-text", class extends c {
        connectedCallback() {
            this.items = Array.from(this.querySelectorAll("image-with-text-item")), this.imageItems = Array.from(this.querySelectorAll(".image-with-text__image")), this.pageDots = this.querySelector("page-dots"), this.hasPendingTransition = !1, this.items.length > 1 && (this.addEventListener("page-dots:changed", (e => this.select(e.detail.index))), Shopify.designMode && (this.addEventListener("shopify:block:deselect", this.startPlayer.bind(this)), this.addEventListener("shopify:block:select", (e => {
                this.intersectionObserver.disconnect(), this.pausePlayer(), this.select(e.target.index, !e.detail.load)
            })))), this._setupVisibility()
        }
        async _setupVisibility() {
            await this.untilVisible(), this.hasAttribute("reveal-on-scroll") && (await this.transitionImage(this.selectedIndex), this.select(this.selectedIndex)), this.startPlayer()
        }
        get selectedIndex() {
            return this.items.findIndex((e => e.selected))
        }
        async select(e, t = !0) {
            this.hasPendingTransition || (this.hasPendingTransition = !0, (this.items[e].hasAttachedImage || !t) && await this.transitionImage(e, t), this.selectedIndex !== e && await this.items[this.selectedIndex].transitionToLeave(t), this.pageDots && (this.pageDots.selectedIndex = e), await this.items[e].transitionToEnter(t), this.hasPendingTransition = !1)
        }
        async transitionImage(e, t = !0) {
            let i = this.imageItems.find((e => !e.hasAttribute("hidden"))),
                s = this.imageItems.find((t => t.id === this.items[e].getAttribute("attached-image"))) || i;
            i.setAttribute("hidden", ""), s.removeAttribute("hidden"), await ge(s);
            let n = new fe(new ye(s, {
                visibility: ["hidden", "visible"],
                clipPath: ["inset(0 0 0 100%)", "inset(0 0 0 0)"]
            }, {
                duration: 600,
                easing: "cubic-bezier(1, 0, 0, 1)"
            }));
            t ? n.play() : n.finish()
        }
        pausePlayer() {
            this.style.setProperty("--section-animation-play-state", "paused")
        }
        startPlayer() {
            this.style.setProperty("--section-animation-play-state", "running")
        }
    });
    window.customElements.define("testimonial-item", class extends c {
        connectedCallback() {
            this.addEventListener("split-lines:re-split", (e => {
                Array.from(e.target.children).forEach((e => e.style.visibility = this.selected ? "visible" : "hidden"))
            }))
        }
        get index() {
            return [...this.parentNode.children].indexOf(this)
        }
        get selected() {
            return !this.hasAttribute("hidden")
        }
        async transitionToLeave(e = !0) {
            let t = await ae(this.querySelectorAll("split-lines, .testimonial__author")),
                i = new fe(new ve(t.reverse().map(((e, t) => new ye(e, {
                    visibility: ["visible", "hidden"],
                    clipPath: ["inset(0 0 0 0)", "inset(0 0 100% 0)"],
                    transform: ["translateY(0)", "translateY(100%)"]
                }, {
                    duration: 350,
                    delay: 60 * t,
                    easing: "cubic-bezier(0.68, 0.00, 0.77, 0.00)"
                })))));
            e ? i.play() : i.finish(), await i.finished, this.setAttribute("hidden", "")
        }
        async transitionToEnter(e = !0) {
            let t = await ae(this.querySelectorAll("split-lines, .testimonial__author")),
                i = new fe(new ve(t.map(((e, t) => new ye(e, {
                    visibility: ["hidden", "visible"],
                    clipPath: ["inset(0 0 100% 0)", "inset(0 0 0px 0)"],
                    transform: ["translateY(100%)", "translateY(0)"]
                }, {
                    duration: 550,
                    delay: 120 * t,
                    easing: "cubic-bezier(0.23, 1, 0.32, 1)"
                })))));
            return this.removeAttribute("hidden"), e ? i.play() : i.finish(), i.finished
        }
    });
    var Le = class extends c {
        connectedCallback() {
            this.items = Array.from(this.querySelectorAll("testimonial-item")), this.pageDots = this.querySelector("page-dots"), this.hasPendingTransition = !1, this.items.length > 1 && (this.addEventListener("swiperight", this.previous.bind(this)), this.addEventListener("swipeleft", this.next.bind(this)), this.addEventListener("prev-next:prev", this.previous.bind(this)), this.addEventListener("prev-next:next", this.next.bind(this)), this.addEventListener("page-dots:changed", (e => this.select(e.detail.index))), Shopify.designMode && this.addEventListener("shopify:block:select", (e => {
                var t;
                null == (t = this.intersectionObserver) || t.disconnect(), (e.detail.load || !e.target.selected) && this.select(e.target.index, !e.detail.load)
            })), this._blockVerticalScroll()), this.hasAttribute("reveal-on-scroll") && this._setupVisibility()
        }
        get selectedIndex() {
            return this.items.findIndex((e => e.selected))
        }
        async _setupVisibility() {
            await this.untilVisible(), this.items[this.selectedIndex].transitionToEnter()
        }
        previous() {
            this.select((this.selectedIndex - 1 + this.items.length) % this.items.length)
        }
        next() {
            this.select((this.selectedIndex + 1 + this.items.length) % this.items.length)
        }
        async select(e, t = !0) {
            this.hasPendingTransition || (this.hasPendingTransition = !0, await this.items[this.selectedIndex].transitionToLeave(t), this.pageDots && (this.pageDots.selectedIndex = e), await this.items[e].transitionToEnter(t), this.hasPendingTransition = !1)
        }
    };
    Object.assign(Le.prototype, Se), window.customElements.define("testimonial-list", Le);
    var Ae = class extends HTMLElement {
        get index() {
            return [...this.parentNode.children].indexOf(this)
        }
        get selected() {
            return !this.hasAttribute("hidden")
        }
        async transitionToLeave(e = !0) {
            this.setAttribute("hidden", "");
            let t = new fe(new ye(this, {
                visibility: ["visible", "hidden"]
            }, {
                duration: 500
            }));
            return e ? t.play() : t.finish(), t.finished
        }
        async transitionToEnter(e = !0) {
            this.removeAttribute("hidden");
            let t = Array.from(this.querySelectorAll(".shop-the-look__dot"));
            t.forEach((e => e.style.opacity = 0));
            let i = new fe(new _e([new ve(Array.from(this.querySelectorAll(".shop-the-look__image")).map((e => new ye(e, {
                opacity: [1, 1]
            }, {
                duration: 0
            })))), new ye(this, {
                visibility: ["hidden", "visible"],
                zIndex: [0, 1],
                clipPath: ["inset(0 0 0 100%)", "inset(0 0 0 0)"]
            }, {
                duration: 500,
                easing: "cubic-bezier(1, 0, 0, 1)"
            }), new ve(t.map(((e, t) => new ye(e, {
                opacity: [0, 1],
                transform: ["scale(0)", "scale(1)"]
            }, {
                duration: 120,
                delay: 75 * t,
                easing: "ease-in-out"
            }))))]));
            if (e ? i.play() : i.finish(), await i.finished, window.matchMedia(window.themeVariables.breakpoints.tabletAndUp).matches) {
                let e = this.querySelector(".shop-the-look__product-wrapper .shop-the-look__dot");
                null == e || e.setAttribute("aria-expanded", "true")
            }
        }
    };
    window.customElements.define("shop-the-look-item", Ae);
    window.customElements.define("shop-the-look-nav", class extends c {
        connectedCallback() {
            this.shopTheLook = this.closest("shop-the-look"), this.delegate.on("click", '[data-action="prev"]', (() => this.shopTheLook.previous())), this.delegate.on("click", '[data-action="next"]', (() => this.shopTheLook.next()))
        }
        transitionToIndex(e, t = !0) {
            let i = Array.from(this.querySelectorAll(".shop-the-look__counter-page-transition")),
                s = i.find((e => !e.hasAttribute("hidden"))),
                n = i[e];
            s.animate({
                transform: ["translateY(0)", "translateY(-100%)"]
            }, {
                duration: t ? 1e3 : 0,
                easing: "cubic-bezier(1, 0, 0, 1)"
            }).onfinish = () => s.setAttribute("hidden", ""), n.removeAttribute("hidden"), n.animate({
                transform: ["translateY(100%)", "translateY(0)"]
            }, {
                duration: t ? 1e3 : 0,
                easing: "cubic-bezier(1, 0, 0, 1)"
            })
        }
    });
    window.customElements.define("shop-the-look", class extends c {
        connectedCallback() {
            this.lookItems = Array.from(this.querySelectorAll("shop-the-look-item")), this.nav = this.querySelector("shop-the-look-nav"), this.hasPendingTransition = !1, this.hasAttribute("reveal-on-scroll") && this._setupVisibility(), this.lookItems.length > 1 && Shopify.designMode && this.addEventListener("shopify:block:select", (async e => {
                this.intersectionObserver.disconnect(), await this.select(e.target.index, !e.detail.load), this.nav.animate({
                    opacity: [0, 1],
                    transform: ["translateY(30px)", "translateY(0)"]
                }, {
                    duration: 0,
                    fill: "forwards",
                    easing: "ease-in-out"
                })
            }))
        }
        get selectedIndex() {
            return this.lookItems.findIndex((e => e.selected))
        }
        async _setupVisibility() {
            await this.untilVisible();
            let e = Array.from(this.lookItems[this.selectedIndex].querySelectorAll(".shop-the-look__image"));
            for (let t of e) null !== t.offsetParent && await ge(t);
            await this.lookItems[this.selectedIndex].transitionToEnter(), this.nav && this.nav.animate({
                opacity: [0, 1],
                transform: ["translateY(30px)", "translateY(0)"]
            }, {
                duration: 150,
                fill: "forwards",
                easing: "ease-in-out"
            })
        }
        previous() {
            this.select((this.selectedIndex - 1 + this.lookItems.length) % this.lookItems.length)
        }
        next() {
            this.select((this.selectedIndex + 1 + this.lookItems.length) % this.lookItems.length)
        }
        async select(e, t = !0) {
            let i = this.lookItems[this.selectedIndex],
                s = this.lookItems[e];
            this.hasPendingTransition || (this.hasPendingTransition = !0, i !== s && (this.nav.transitionToIndex(e, t), i.transitionToLeave()), s.transitionToEnter(t), this.hasPendingTransition = !1)
        }
    });
    window.customElements.define("collection-list", class extends c {
        async connectedCallback() {
            this.items = Array.from(this.querySelectorAll(".list-collections__item")), this.hasAttribute("scrollable") && (this.scroller = this.querySelector(".list-collections__scroller"), this.addEventListener("prev-next:prev", this.previous.bind(this)), this.addEventListener("prev-next:next", this.next.bind(this)), this.addEventListener("shopify:block:select", (e => e.target.scrollIntoView({
                block: "nearest",
                inline: "center",
                behavior: e.detail.load ? "auto" : "smooth"
            })))), this.hasAttribute("reveal-on-scroll") && this._setupVisibility()
        }
        async _setupVisibility() {
            await this.untilVisible();
            let e = se.prefersReducedMotion(),
                t = new fe(new ve(this.items.map(((t, i) => new _e([new ye(t.querySelector(".list-collections__item-image"), {
                    opacity: [0, 1],
                    transform: [`scale(${e?1:1.1})`, "scale(1)"]
                }, {
                    duration: 250,
                    delay: e ? 0 : 150 * i,
                    easing: "cubic-bezier(0.65, 0, 0.35, 1)"
                }), new ve(Array.from(t.querySelectorAll(".list-collections__item-info [reveal]")).map(((t, s) => new ye(t, {
                    opacity: [0, 1],
                    clipPath: [`inset(${e?"0 0 0 0":"0 0 100% 0"})`, "inset(0 0 0 0)"],
                    transform: [`translateY(${e?0:"100%"})`, "translateY(0)"]
                }, {
                    duration: 200,
                    delay: e ? 0 : 150 * i + 150 * s,
                    easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)"
                }))))])))));
            this._hasSectionReloaded ? t.finish() : t.play()
        }
        previous() {
            let e = "ltr" === window.themeVariables.settings.direction ? 1 : -1;
            this.scroller.scrollBy({
                left: -this.items[0].clientWidth * e,
                behavior: "smooth"
            })
        }
        next() {
            let e = "ltr" === window.themeVariables.settings.direction ? 1 : -1;
            this.scroller.scrollBy({
                left: this.items[0].clientWidth * e,
                behavior: "smooth"
            })
        }
    });
    var Ce = class extends c {
        constructor() {
            super(), this.productListInner = this.querySelector(".product-list__inner"), this.productItems = Array.from(this.querySelectorAll("product-item"))
        }
        connectedCallback() {
            this.addEventListener("prev-next:prev", this.previous.bind(this)), this.addEventListener("prev-next:next", this.next.bind(this)), !this.hidden && this.staggerApparition && this._staggerProductsApparition()
        }
        get staggerApparition() {
            return this.hasAttribute("stagger-apparition")
        }
        get apparitionAnimation() {
            return this._animation = this._animation || new fe(new ve(this.productItems.map(((e, t) => new ye(e, {
                opacity: [0, 1],
                transform: [`translateY(${se.prefersReducedMotion()?0:window.innerWidth<1e3?35:60}px)`, "translateY(0)"]
            }, {
                duration: 600,
                delay: se.prefersReducedMotion() ? 0 : 100 * t - Math.min(3 * t * t, 100 * t),
                easing: "ease"
            })))))
        }
        previous(e) {
            let t = "ltr" === window.themeVariables.settings.direction ? 1 : -1,
                i = parseInt(getComputedStyle(this).getPropertyValue("--product-list-column-gap"));
            e.target.nextElementSibling.removeAttribute("disabled"), e.target.toggleAttribute("disabled", this.productListInner.scrollLeft * t - (this.productListInner.clientWidth + i) <= 0), this.productListInner.scrollBy({
                left: -(this.productListInner.clientWidth + i) * t,
                behavior: "smooth"
            })
        }
        next(e) {
            let t = "ltr" === window.themeVariables.settings.direction ? 1 : -1,
                i = parseInt(getComputedStyle(this).getPropertyValue("--product-list-column-gap"));
            e.target.previousElementSibling.removeAttribute("disabled"), e.target.toggleAttribute("disabled", this.productListInner.scrollLeft * t + 2 * (this.productListInner.clientWidth + i) >= this.productListInner.scrollWidth), this.productListInner.scrollBy({
                left: (this.productListInner.clientWidth + i) * t,
                behavior: "smooth"
            })
        }
        attributeChangedCallback(e) {
            var t, i;
            this.staggerApparition && "hidden" === e && (this.hidden ? this.apparitionAnimation.finish() : (this.productListInner.scrollLeft = 0, this.productListInner.parentElement.scrollLeft = 0, null == (t = this.querySelector(".prev-next-button--prev")) || t.setAttribute("disabled", ""), null == (i = this.querySelector(".prev-next-button--next")) || i.removeAttribute("disabled"), this._staggerProductsApparition()))
        }
        async _staggerProductsApparition() {
            this.productItems.forEach((e => e.style.opacity = 0)), await this.untilVisible({
                threshold: this.clientHeight > 0 ? Math.min(50 / this.clientHeight, 1) : 0
            }), this.apparitionAnimation.play()
        }
    };
    i(Ce, "observedAttributes", ["hidden"]), window.customElements.define("product-list", Ce);
    window.customElements.define("logo-list", class extends c {
        async connectedCallback() {
            this.items = Array.from(this.querySelectorAll(".logo-list__item")), this.logoListScrollable = this.querySelector(".logo-list__list"), this.items.length > 1 && (this.addEventListener("prev-next:prev", this.previous.bind(this)), this.addEventListener("prev-next:next", this.next.bind(this))), this.hasAttribute("reveal-on-scroll") && this._setupVisibility()
        }
        async _setupVisibility() {
            await this.untilVisible({
                rootMargin: "50px 0px",
                threshold: 0
            });
            let e = new fe(new ve(this.items.map(((e, t) => new ye(e, {
                opacity: [0, 1],
                transform: [`translateY(${se.prefersReducedMotion()?0:"30px"})`, "translateY(0)"]
            }, {
                duration: 300,
                delay: se.prefersReducedMotion() ? 0 : 100 * t,
                easing: "ease"
            })))));
            this._hasSectionReloaded ? e.finish() : e.play()
        }
        previous(e) {
            let t = "ltr" === window.themeVariables.settings.direction ? 1 : -1;
            e.target.nextElementSibling.removeAttribute("disabled"), e.target.toggleAttribute("disabled", this.logoListScrollable.scrollLeft * t - (this.logoListScrollable.clientWidth + 24) <= 0), this.logoListScrollable.scrollBy({
                left: -(this.logoListScrollable.clientWidth + 24) * t,
                behavior: "smooth"
            })
        }
        next(e) {
            let t = "ltr" === window.themeVariables.settings.direction ? 1 : -1;
            e.target.previousElementSibling.removeAttribute("disabled"), e.target.toggleAttribute("disabled", this.logoListScrollable.scrollLeft * t + 2 * (this.logoListScrollable.clientWidth + 24) >= this.logoListScrollable.scrollWidth), this.logoListScrollable.scrollBy({
                left: (this.logoListScrollable.clientWidth + 24) * t,
                behavior: "smooth"
            })
        }
    });
    var Ie = class extends HTMLElement {
        connectedCallback() {
            window.addEventListener("scroll", Y(this._updateProgressBar.bind(this), 15))
        }
        get hasNextArticle() {
            return this.hasAttribute("has-next-article")
        }
        _updateProgressBar() {
            let e = z(),
                t = window.matchMedia(window.themeVariables.breakpoints.pocket).matches ? 40 : 80,
                i = this.getBoundingClientRect(),
                s = this.parentElement.getBoundingClientRect(),
                n = Math.max(-1 * ((s.bottom - (i.bottom - t)) / (s.height + t) - 1), 0);
            this.classList.toggle("is-visible", s.top < e && s.bottom > e + this.clientHeight - t), this.hasNextArticle && (n > .8 ? this.classList.add("article__nav--show-next") : this.classList.remove("article__nav--show-next")), this.style.setProperty("--transform", `${n}`)
        }
    };
    window.customElements.define("blog-post-navigation", Ie);
    window.customElements.define("multi-column", class extends c {
        connectedCallback() {
            !this.hasAttribute("stack") && (this.multiColumnInner = this.querySelector(".multi-column__inner"), this.addEventListener("prev-next:prev", this.previous.bind(this)), this.addEventListener("prev-next:next", this.next.bind(this)), Shopify.designMode && this.addEventListener("shopify:block:select", (e => {
                e.target.scrollIntoView({
                    inline: "center",
                    block: "nearest",
                    behavior: e.detail.load ? "auto" : "smooth"
                })
            }))), this.hasAttribute("stagger-apparition") && this._setupVisibility()
        }
        async _setupVisibility() {
            await this.untilVisible({
                threshold: Math.min(50 / this.clientHeight, 1)
            });
            let e = se.prefersReducedMotion(),
                t = new fe(new ve(Array.from(this.querySelectorAll(".multi-column__item")).map(((t, i) => new ye(t, {
                    opacity: [0, 1],
                    transform: [`translateY(${se.prefersReducedMotion()?0:window.innerWidth<1e3?35:60}px)`, "translateY(0)"]
                }, {
                    duration: 600,
                    delay: e ? 0 : 100 * i,
                    easing: "ease"
                })))));
            this._hasSectionReloaded ? t.finish() : t.play()
        }
        previous(e) {
            let t = "ltr" === window.themeVariables.settings.direction ? 1 : -1,
                i = parseInt(getComputedStyle(this).getPropertyValue("--multi-column-column-gap"));
            e.target.nextElementSibling.removeAttribute("disabled"), e.target.toggleAttribute("disabled", this.multiColumnInner.scrollLeft * t - (this.multiColumnInner.clientWidth + i) <= 0), this.multiColumnInner.scrollBy({
                left: -(this.multiColumnInner.clientWidth + i) * t,
                behavior: "smooth"
            })
        }
        next(e) {
            let t = "ltr" === window.themeVariables.settings.direction ? 1 : -1,
                i = parseInt(getComputedStyle(this).getPropertyValue("--multi-column-column-gap"));
            e.target.previousElementSibling.removeAttribute("disabled"), e.target.toggleAttribute("disabled", this.multiColumnInner.scrollLeft * t + 2 * (this.multiColumnInner.clientWidth + i) >= this.multiColumnInner.scrollWidth), this.multiColumnInner.scrollBy({
                left: (this.multiColumnInner.clientWidth + i) * t,
                behavior: "smooth"
            })
        }
    });
    var Te = class extends HTMLElement {
        connectedCallback() {
            this.listItems = Array.from(this.querySelectorAll("gallery-item")), this.scrollBarElement = this.querySelector(".gallery__progress-bar"), this.listWrapperElement = this.querySelector(".gallery__list-wrapper"), this.listItems.length > 1 && (this.addEventListener("scrollable-content:progress", this._updateProgressBar.bind(this)), this.addEventListener("prev-next:prev", this.previous.bind(this)), this.addEventListener("prev-next:next", this.next.bind(this)), Shopify.designMode && this.addEventListener("shopify:block:select", (e => this.select(e.target.index, !e.detail.load))))
        }
        previous() {
            this.select([...this.listItems].reverse().find((e => e.isOnLeftHalfPartOfScreen)).index)
        }
        next() {
            this.select(this.listItems.findIndex((e => e.isOnRightHalfPartOfScreen)))
        }
        select(e, t = !0) {
            let i = this.listItems[e].getBoundingClientRect();
            this.listWrapperElement.scrollBy({
                behavior: t ? "smooth" : "auto",
                left: Math.floor(i.left - window.innerWidth / 2 + i.width / 2)
            })
        }
        _updateProgressBar(e) {
            var t;
            null == (t = this.scrollBarElement) || t.style.setProperty("--transform", `${e.detail.progress}%`)
        }
    };
    window.customElements.define("gallery-list", Te);
    var Pe = class extends HTMLElement {
        get index() {
            return [...this.parentNode.children].indexOf(this)
        }
        get isOnRightHalfPartOfScreen() {
            return "ltr" === window.themeVariables.settings.direction ? this.getBoundingClientRect().left > window.innerWidth / 2 : this.getBoundingClientRect().right < window.innerWidth / 2
        }
        get isOnLeftHalfPartOfScreen() {
            return "ltr" === window.themeVariables.settings.direction ? this.getBoundingClientRect().right < window.innerWidth / 2 : this.getBoundingClientRect().left > window.innerWidth / 2
        }
    };
    window.customElements.define("gallery-item", Pe);
    window.customElements.define("image-with-text-overlay", class extends c {
        connectedCallback() {
            this.hasAttribute("parallax") && !se.prefersReducedMotion() && (this._hasPendingRaF = !1, this._onScrollListener = this._onScroll.bind(this), window.addEventListener("scroll", this._onScrollListener)), this.hasAttribute("reveal-on-scroll") && this._setupVisibility()
        }
        disconnectedCallback() {
            super.disconnectedCallback(), this._onScrollListener && window.removeEventListener("scroll", this._onScrollListener)
        }
        async _setupVisibility() {
            await this.untilVisible();
            let e = this.querySelector(".image-overlay__image"),
                t = await ae(this.querySelectorAll("split-lines")),
                i = se.prefersReducedMotion();
            await ge(e);
            let s = [new ye(e, {
                    opacity: [0, 1],
                    transform: [`scale(${i?1:1.1})`, "scale(1)"]
                }, {
                    duration: 500,
                    easing: "cubic-bezier(0.65, 0, 0.35, 1)"
                }), new ve(t.map(((e, t) => new ye(e, {
                    opacity: [0, .2, 1],
                    transform: [`translateY(${i?0:"100%"})`, "translateY(0)"],
                    clipPath: [`inset(${i?"0 0 0 0":"0 0 100% 0"})`, "inset(0 0 0 0)"]
                }, {
                    duration: 300,
                    delay: i ? 0 : 120 * t,
                    easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)"
                })))), new ye(this.querySelector(".image-overlay__text-container"), {
                    opacity: [0, 1]
                }, {
                    duration: 300
                })],
                n = new fe(i ? new ve(s) : new _e(s));
            this._hasSectionReloaded ? n.finish() : n.play()
        }
        _onScroll() {
            this._hasPendingRaF || (this._hasPendingRaF = !0, requestAnimationFrame((() => {
                let e = this.getBoundingClientRect(),
                    t = this.querySelector(".image-overlay__content-wrapper"),
                    i = this.querySelector(".image-overlay__image"),
                    s = e.bottom,
                    n = e.height,
                    a = z();
                t && (t.style.opacity = Math.max(1 - 3 * (1 - Math.min(s / n, 1)), 0).toString()), i && (i.style.transform = `translateY(${100-100*Math.max(1-(1-Math.min(s/(n+a),1)),0)}px)`), this._hasPendingRaF = !1
            })))
        }
    });
    window.customElements.define("image-with-text-block", class extends c {
        async connectedCallback() {
            this.hasAttribute("reveal-on-scroll") && this._setupVisibility()
        }
        async _setupVisibility() {
            await this.untilVisible();
            let e = Array.from(this.querySelectorAll(".image-with-text-block__image[reveal]")),
                t = await ae(this.querySelectorAll("split-lines")),
                i = se.prefersReducedMotion();
            for (let t of e) null !== t.offsetParent && await ge(t);
            let s = [new ve(e.map((e => new ye(e, {
                    opacity: [0, 1],
                    transform: [`scale(${i?1:1.1})`, "scale(1)"]
                }, {
                    duration: 500,
                    easing: "cubic-bezier(0.65, 0, 0.35, 1)"
                })))), new ye(this.querySelector(".image-with-text-block__content"), {
                    opacity: [0, 1],
                    transform: [`translateY(${i?0:"60px"})`, "translateY(0)"]
                }, {
                    duration: 150,
                    easing: "ease-in-out"
                }), new ve(t.map(((e, t) => new ye(e, {
                    opacity: [0, .2, 1],
                    transform: [`translateY(${i?0:"100%"})`, "translateY(0)"],
                    clipPath: [`inset(${i?"0 0 0 0":"0 0 100% 0"})`, "inset(0 0 0 0)"]
                }, {
                    duration: 300,
                    delay: i ? 0 : 120 * t,
                    easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)"
                })))), new ye(this.querySelector(".image-with-text-block__text-container"), {
                    opacity: [0, 1]
                }, {
                    duration: 300
                })],
                n = new fe(i ? new ve(s) : new _e(s));
            this._hasSectionReloaded ? n.finish() : n.play()
        }
    });
    window.customElements.define("article-list", class extends c {
        async connectedCallback() {
            if (this.articleItems = Array.from(this.querySelectorAll(".article-item")), this.staggerApparition) {
                await this.untilVisible({
                    threshold: this.clientHeight > 0 ? Math.min(50 / this.clientHeight, 1) : 0
                });
                let e = new fe(new ve(this.articleItems.map(((e, t) => new ye(e, {
                    opacity: [0, 1],
                    transform: [`translateY(${se.prefersReducedMotion()?0:window.innerWidth<1e3?35:60}px)`, "translateY(0)"]
                }, {
                    duration: 600,
                    delay: se.prefersReducedMotion() ? 0 : 100 * t - Math.min(3 * t * t, 100 * t),
                    easing: "ease"
                })))));
                this._hasSectionReloaded ? e.finish() : e.play()
            }
        }
        get staggerApparition() {
            return this.hasAttribute("stagger-apparition")
        }
    });
    var Me = class extends HTMLElement {
        async connectedCallback() {
            let e = this.querySelector(".article__image");
            se.prefersReducedMotion() ? e.removeAttribute("reveal") : (await ge(e), e.animate({
                opacity: [0, 1],
                transform: ["scale(1.1)", "scale(1)"]
            }, {
                duration: 500,
                fill: "forwards",
                easing: "cubic-bezier(0.65, 0, 0.35, 1)"
            }))
        }
    };
    window.customElements.define("blog-post-header", Me);
    var qe = class extends HTMLInputElement {
        connectedCallback() {
            this.addEventListener("click", (() => document.getElementById(this.getAttribute("aria-controls")).open = !0))
        }
    };
    window.customElements.define("predictive-search-input", qe, {
        extends: "input"
    });
    var Ve = class extends M {
        connectedCallback() {
            if (super.connectedCallback(), this.hasAttribute("reverse-breakpoint")) {
                this.originalDirection = this.classList.contains("drawer--from-left") ? "left" : "right";
                let e = window.matchMedia(this.getAttribute("reverse-breakpoint"));
                e.addListener(this._checkReverseOpeningDirection.bind(this)), this._checkReverseOpeningDirection(e)
            }
            this.delegate.on("click", ".drawer__overlay", (() => this.open = !1))
        }
        attributeChangedCallback(e, t, i) {
            super.attributeChangedCallback(e, t, i), "open" === e && document.documentElement.classList.toggle("lock-all", this.open)
        }
        _checkReverseOpeningDirection(e) {
            this.classList.remove("drawer--from-left"), ("left" === this.originalDirection && !e.matches || "left" !== this.originalDirection && e.matches) && this.classList.add("drawer--from-left")
        }
    };
    window.customElements.define("drawer-content", Ve);
    window.customElements.define("predictive-search-drawer", class extends Ve {
        connectedCallback() {
            super.connectedCallback(), this.inputElement = this.querySelector('[name="q"]'), this.drawerContentElement = this.querySelector(".drawer__content"), this.drawerFooterElement = this.querySelector(".drawer__footer"), this.loadingStateElement = this.querySelector(".predictive-search__loading-state"), this.resultsElement = this.querySelector(".predictive-search__results"), this.menuListElement = this.querySelector(".predictive-search__menu-list"), this.delegate.on("input", '[name="q"]', this._debounce(this._onSearch.bind(this), 200)), this.delegate.on("click", '[data-action="reset-search"]', this._startNewSearch.bind(this))
        }
        async _onSearch(e, t) {
            if ("Enter" !== e.key)
                if (this.abortController && this.abortController.abort(), this.drawerContentElement.classList.remove("drawer__content--center"), this.drawerFooterElement.hidden = !0, "" === t.value) this.loadingStateElement.hidden = !0, this.resultsElement.hidden = !0, this.menuListElement && (this.menuListElement.hidden = !1);
                else {
                    this.drawerContentElement.classList.add("drawer__content--center"), this.loadingStateElement.hidden = !1, this.resultsElement.hidden = !0, this.menuListElement && (this.menuListElement.hidden = !0);
                    let e = {};
                    try {
                        this.abortController = new AbortController, e = this._supportPredictiveApi() ? await this._doPredictiveSearch(t.value) : await this._doLiquidSearch(t.value)
                    } catch (e) {
                        if ("AbortError" === e.name) return
                    }
                    this.loadingStateElement.hidden = !0, this.resultsElement.hidden = !1, this.menuListElement && (this.menuListElement.hidden = !0), e.hasResults && (this.drawerFooterElement.hidden = !1, this.drawerContentElement.classList.remove("drawer__content--center")), this.resultsElement.innerHTML = e.html
                }
        }
        async _doPredictiveSearch(e) {
            let t = await fetch(`${window.themeVariables.routes.predictiveSearchUrl}?q=${e}&resources[limit]=10&resources[type]=${window.themeVariables.settings.searchMode}&resources[options[unavailable_products]]=${window.themeVariables.settings.searchUnavailableProducts}&resources[options[fields]]=title,body,product_type,variants.title,variants.sku,vendor&section_id=predictive-search`, {
                    signal: this.abortController.signal
                }),
                i = document.createElement("div");
            return i.innerHTML = await t.text(), {
                hasResults: null !== i.querySelector(".predictive-search__results-categories"),
                html: i.firstElementChild.innerHTML
            }
        }
        async _doLiquidSearch(e) {
            let t = [],
                i = window.themeVariables.settings.searchMode.split(",").filter((e => "collection" !== e));
            i.forEach((i => {
                t.push(fetch(`${window.themeVariables.routes.searchUrl}?section_id=predictive-search-compatibility&q=${e}&type=${i}&options[unavailable_products]=${window.themeVariables.settings.searchUnavailableProducts}&options[prefix]=last`, {
                    signal: this.abortController.signal
                }))
            }));
            let s = await Promise.all(t),
                n = {};
            for (let [e, t] of s.entries()) {
                let s = await t.text(),
                    a = document.createElement("div");
                a.innerHTML = s, a.innerHTML = a.firstElementChild.innerHTML, a.childElementCount > 0 && (n[i[e]] = a.innerHTML)
            }
            if (!(Object.keys(n).length > 0)) return {
                hasResults: !1,
                html: `        <p class="text--large">${window.themeVariables.strings.searchNoResults}</p>          <div class="button-wrapper">            <button type="button" data-action="reset-search" class="button button--primary">${window.themeVariables.strings.searchNewSearch}</button>          </div>       `
            }; {
                let e = Object.entries(n),
                    t = Object.keys(n),
                    i = '        <tabs-nav class="tabs-nav tabs-nav--edge2edge tabs-nav--narrow tabs-nav--no-border">          <scrollable-content class="tabs-nav__scroller hide-scrollbar">            <div class="tabs-nav__scroller-inner">             <div class="tabs-nav__item-list">      ';
                for (let [s, n] of e) i += `          <button type="button" class="tabs-nav__item heading heading--small" aria-expanded="${s===t[0]?"true":"false"}" aria-controls="predictive-search-${s}">           ${window.themeVariables.strings["search"+s.charAt(0).toUpperCase()+s.slice(1)+"s"]}          </button>        `;
                for (let [s, n] of(i += "              </div>            </div>         </scrollable-content>        </tabs-nav>      ", i += '<div class="predictive-search__results-categories">', e)) i += `          <div class="predictive-search__results-categories-item" ${s!==t[0]?"hidden":""} id="predictive-search-${s}">            ${n}         </div>      `;
                return {
                    hasResults: !0,
                    html: i += "</div>"
                }
            }
        }
        _startNewSearch() {
            this.inputElement.value = "", this.inputElement.focus();
            let e = new Event("input", {
                bubbles: !0,
                cancelable: !0
            });
            this.inputElement.dispatchEvent(e)
        }
        _supportPredictiveApi() {
            return JSON.parse(document.getElementById("shopify-features").innerHTML).predictiveSearch
        }
        _debounce(e, t) {
            let i = null;
            return (...s) => {
                clearTimeout(i), i = setTimeout((() => {
                    e.apply(this, s)
                }), t)
            }
        }
    });
    var $e = class extends HTMLElement {
        connectedCallback() {
            if (this.prevNextButtons = this.querySelector("prev-next-buttons"), this.pageDots = this.querySelector("page-dots"), this.scrollBarElement = this.querySelector(".timeline__progress-bar"), this.listWrapperElement = this.querySelector(".timeline__list-wrapper"), this.listItemElements = Array.from(this.querySelectorAll(".timeline__item")), this.isScrolling = !1, this.listItemElements.length > 1) {
                this.addEventListener("prev-next:prev", this.previous.bind(this)), this.addEventListener("prev-next:next", this.next.bind(this)), this.addEventListener("page-dots:changed", (e => this.select(e.detail.index))), Shopify.designMode && this.addEventListener("shopify:block:select", (e => {
                    this.select([...e.target.parentNode.children].indexOf(e.target), !e.detail.load)
                })), this.itemIntersectionObserver = new IntersectionObserver(this._onItemObserved.bind(this), {
                    threshold: .4
                });
                let e = window.matchMedia(window.themeVariables.breakpoints.pocket);
                e.addListener(this._onMediaChanged.bind(this)), this._onMediaChanged(e)
            }
        }
        get selectedIndex() {
            return this.listItemElements.findIndex((e => !e.hasAttribute("hidden")))
        }
        previous() {
            this.select(Math.max(0, this.selectedIndex - 1))
        }
        next() {
            this.select(Math.min(this.selectedIndex + 1, this.listItemElements.length - 1))
        }
        select(e, t = !0) {
            let i = this.listItemElements[e].getBoundingClientRect();
            t && (this.isScrolling = !0, setTimeout((() => this.isScrolling = !1), 800)), window.matchMedia(window.themeVariables.breakpoints.pocket).matches ? this.listWrapperElement.scrollTo({
                behavior: t ? "smooth" : "auto",
                left: this.listItemElements[0].clientWidth * e
            }) : this.listWrapperElement.scrollBy({
                behavior: t ? "smooth" : "auto",
                left: Math.floor(i.left - window.innerWidth / 2 + i.width / 2)
            }), this._onItemSelected(e)
        }
        _onItemSelected(e) {
            var t;
            let i = this.listItemElements[e];
            i.removeAttribute("hidden", "false"), ne(i).forEach((e => e.setAttribute("hidden", ""))), this.prevNextButtons.isPrevDisabled = 0 === e, this.prevNextButtons.isNextDisabled = e === this.listItemElements.length - 1, this.pageDots.selectedIndex = e, null == (t = this.scrollBarElement) || t.style.setProperty("--transform", 100 / (this.listItemElements.length - 1) * e + "%")
        }
        _onItemObserved(e) {
            this.isScrolling || e.forEach((e => {
                e.isIntersecting && this._onItemSelected([...e.target.parentNode.children].indexOf(e.target))
            }))
        }
        _onMediaChanged(e) {
            e.matches ? this.listItemElements.forEach((e => this.itemIntersectionObserver.observe(e))) : this.listItemElements.forEach((e => this.itemIntersectionObserver.unobserve(e)))
        }
    };
    window.customElements.define("time-line", $e);
    var Oe = class extends c {
        connectedCallback() {
            this.pressItemsWrapper = this.querySelector(".press-list__wrapper"), this.pressItems = Array.from(this.querySelectorAll("press-item")), this.pageDots = this.querySelector("page-dots"), this.pressItems.length > 1 && (Shopify.designMode && this.addEventListener("shopify:block:select", (e => {
                var t;
                null == (t = this.intersectionObserver) || t.disconnect(), (e.detail.load || !e.target.selected) && this.select(e.target.index, !e.detail.load)
            })), this.pressItemsWrapper.addEventListener("swiperight", this.previous.bind(this)), this.pressItemsWrapper.addEventListener("swipeleft", this.next.bind(this)), this.addEventListener("page-dots:changed", (e => this.select(e.detail.index))), this._blockVerticalScroll()), this.hasAttribute("reveal-on-scroll") && this._setupVisibility()
        }
        async _setupVisibility() {
            await this.untilVisible(), this.pressItems[this.selectedIndex].transitionToEnter()
        }
        get selectedIndex() {
            return this.pressItems.findIndex((e => e.selected))
        }
        previous() {
            this.select((this.selectedIndex - 1 + this.pressItems.length) % this.pressItems.length)
        }
        next() {
            this.select((this.selectedIndex + 1 + this.pressItems.length) % this.pressItems.length)
        }
        async select(e, t = !0) {
            let i = this.pressItems[this.selectedIndex],
                s = this.pressItems[e];
            await i.transitionToLeave(t), this.pageDots.selectedIndex = e, await s.transitionToEnter(t)
        }
    };
    Object.assign(Oe.prototype, Se), window.customElements.define("press-list", Oe);
    var Be = class extends HTMLElement {
        connectedCallback() {
            this.addEventListener("split-lines:re-split", (e => {
                Array.from(e.target.children).forEach((e => e.style.visibility = this.selected ? "visible" : "hidden"))
            }))
        }
        get index() {
            return [...this.parentNode.children].indexOf(this)
        }
        get selected() {
            return !this.hasAttribute("hidden")
        }
        async transitionToLeave(e = !0) {
            let t = await ae(this.querySelectorAll("split-lines")),
                i = new fe(new ve(t.reverse().map(((e, t) => new ye(e, {
                    visibility: ["visible", "hidden"],
                    clipPath: ["inset(0 0 0 0)", "inset(0 0 100% 0)"],
                    transform: ["translateY(0)", "translateY(100%)"]
                }, {
                    duration: 350,
                    delay: 60 * t,
                    easing: "cubic-bezier(0.68, 0.00, 0.77, 0.00)"
                })))));
            e ? i.play() : i.finish(), await i.finished, this.setAttribute("hidden", "")
        }
        async transitionToEnter(e = !0) {
            this.removeAttribute("hidden");
            let t = await ae(this.querySelectorAll("split-lines, .testimonial__author")),
                i = new fe(new ve(t.map(((e, t) => new ye(e, {
                    visibility: ["hidden", "visible"],
                    clipPath: ["inset(0 0 100% 0)", "inset(0 0 0px 0)"],
                    transform: ["translateY(100%)", "translateY(0)"]
                }, {
                    duration: 550,
                    delay: 120 * t,
                    easing: "cubic-bezier(0.23, 1, 0.32, 1)"
                })))));
            return e ? i.play() : i.finish(), i.finished
        }
    };
    window.customElements.define("press-item", Be);
    window.customElements.define("desktop-navigation", class extends c {
        connectedCallback() {
            this.openingTimeout = null, this.currentMegaMenu = null, this.delegate.on("mouseenter", ".has-dropdown", ((e, t) => {
                e.target === t && null !== e.relatedTarget && this.openDropdown(t)
            }), !0), this.delegate.on("click", ".header__linklist-link[aria-expanded], .nav-dropdown__link[aria-expanded]", ((e, t) => {
                window.matchMedia("(hover: hover)").matches || "true" === t.getAttribute("aria-expanded") || (e.preventDefault(), this.openDropdown(t.parentElement))
            })), this.delegate.on("shopify:block:select", (e => this.openDropdown(e.target.parentElement))), this.delegate.on("shopify:block:deselect", (e => this.closeDropdown(e.target.parentElement)))
        }
        openDropdown(e) {
            let t = e.querySelector("[aria-controls]"),
                i = e.querySelector(`#${t.getAttribute("aria-controls")}`);
            this.currentMegaMenu = i.classList.contains("mega-menu") ? i : null;
            let s = setTimeout((() => {
                if ("true" === t.getAttribute("aria-expanded")) return;
                if (t.setAttribute("aria-expanded", "true"), i.removeAttribute("hidden"), i.classList.contains("mega-menu") && !se.prefersReducedMotion()) {
                    let e = Array.from(i.querySelectorAll(".mega-menu__column, .mega-menu__image-push"));
                    e.forEach((e => {
                        e.getAnimations().forEach((e => e.cancel())), e.style.opacity = 0
                    })), new fe(new ve(e.map(((e, t) => new ye(e, {
                        opacity: [0, 1],
                        transform: ["translateY(20px)", "translateY(0)"]
                    }, {
                        duration: 250,
                        delay: 100 + 60 * t,
                        easing: "cubic-bezier(0.65, 0, 0.35, 1)"
                    }))))).play()
                }
                let n = t => {
                    null !== t.relatedTarget && (this.closeDropdown(e), e.removeEventListener("mouseleave", n))
                };
                e.addEventListener("mouseleave", n), s = null, this.dispatchEvent(new CustomEvent("desktop-nav:dropdown:open", {
                    bubbles: !0
                }))
            }), 100);
            e.addEventListener("mouseleave", (() => {
                s && clearTimeout(s)
            }), {
                once: !0
            })
        }
        closeDropdown(e) {
            let t = e.querySelector("[aria-controls]"),
                i = e.querySelector(`#${t.getAttribute("aria-controls")}`);
            requestAnimationFrame((() => {
                i.classList.add("is-closing"), t.setAttribute("aria-expanded", "false"), setTimeout((() => {
                    i.setAttribute("hidden", ""), clearTimeout(this.openingTimeout), i.classList.remove("is-closing")
                }), i.classList.contains("mega-menu") && this.currentMegaMenu !== i ? 250 : 0), this.dispatchEvent(new CustomEvent("desktop-nav:dropdown:close", {
                    bubbles: !0
                }))
            }))
        }
    });
    window.customElements.define("mobile-navigation", class extends Ve {
        get apparitionAnimation() {
            if (this._apparitionAnimation) return this._apparitionAnimation;
            if (!se.prefersReducedMotion()) {
                let e = Array.from(this.querySelectorAll('.mobile-nav__item[data-level="1"]')),
                    t = [];
                t.push(new ve(e.map(((e, t) => new ye(e, {
                    opacity: [0, 1],
                    transform: ["translateX(-40px)", "translateX(0)"]
                }, {
                    duration: 300,
                    delay: 300 + 120 * t - Math.min(2 * t * t, 120 * t),
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)"
                })))));
                let i = this.querySelector(".drawer__footer");
                return i && t.push(new ye(i, {
                    opacity: [0, 1],
                    transform: ["translateY(100%)", "translateY(0)"]
                }, {
                    duration: 300,
                    delay: 500 + Math.max(125 * e.length - 25 * e.length, 25),
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)"
                })), this._apparitionAnimation = new fe(new ve(t))
            }
        }
        attributeChangedCallback(e, t, i) {
            super.attributeChangedCallback(e, t, i), "open" === e && (this.open && this.apparitionAnimation && (Array.from(this.querySelectorAll('.mobile-nav__item[data-level="1"], .drawer__footer')).forEach((e => e.style.opacity = 0)), this.apparitionAnimation.play()), l(this, this.open ? "mobile-nav:open" : "mobile-nav:close"))
        }
    });
    window.customElements.define("store-header", class extends c {
        connectedCallback() {
            window.ResizeObserver && (this.resizeObserver = new ResizeObserver(this._updateCustomProperties.bind(this)), this.resizeObserver.observe(this), this.resizeObserver.observe(this.querySelector(".header__wrapper"))), this.isTransparent && (this.isTransparencyDetectionLocked = !1, this.delegate.on("desktop-nav:dropdown:open", (() => this.lockTransparency = !0)), this.delegate.on("desktop-nav:dropdown:close", (() => this.lockTransparency = !1)), this.rootDelegate.on("mobile-nav:open", (() => this.lockTransparency = !0)), this.rootDelegate.on("mobile-nav:close", (() => this.lockTransparency = !1)), this.delegate.on("mouseenter", this._checkTransparentHeader.bind(this), !0), this.delegate.on("mouseleave", this._checkTransparentHeader.bind(this)), this.isSticky && (this._checkTransparentHeader(), this._onWindowScrollListener = Y(this._checkTransparentHeader.bind(this), 100), window.addEventListener("scroll", this._onWindowScrollListener)))
        }
        disconnectedCallback() {
            super.disconnectedCallback(), window.ResizeObserver && this.resizeObserver.disconnect(), this.isTransparent && this.isSticky && window.removeEventListener("scroll", this._onWindowScrollListener)
        }
        get isSticky() {
            return this.hasAttribute("sticky")
        }
        get isTransparent() {
            return this.hasAttribute("transparent")
        }
        get transparentHeaderThreshold() {
            return 25
        }
        set lockTransparency(e) {
            this.isTransparencyDetectionLocked = e, this._checkTransparentHeader()
        }
        _updateCustomProperties(e) {
            e.forEach((e => {
                if (e.target === this) {
                    let t = e.borderBoxSize ? e.borderBoxSize.length > 0 ? e.borderBoxSize[0].blockSize : e.borderBoxSize.blockSize : e.target.clientHeight;
                    document.documentElement.style.setProperty("--header-height", `${t}px`)
                }
                if (e.target.classList.contains("header__wrapper")) {
                    let t = e.borderBoxSize ? e.borderBoxSize.length > 0 ? e.borderBoxSize[0].blockSize : e.borderBoxSize.blockSize : e.target.clientHeight;
                    document.documentElement.style.setProperty("--header-height-without-bottom-nav", `${t}px`)
                }
            }))
        }
        _checkTransparentHeader(e) {
            this.isTransparencyDetectionLocked || window.scrollY > this.transparentHeaderThreshold || e && "mouseenter" === e.type ? this.classList.remove("header--transparent") : this.classList.add("header--transparent")
        }
    });
    window.customElements.define("product-image-zoom", class extends M {
        connectedCallback() {
            super.connectedCallback(), this.mediaElement = this.closest(".product__media"), this.maxSpreadZoom = window.themeVariables.settings.mobileZoomFactor || 2, Q.load("photoswipe")
        }
        disconnectedCallback() {
            var e;
            super.disconnectedCallback(), null == (e = this.photoSwipeInstance) || e.destroy()
        }
        async attributeChangedCallback(e, t, i) {
            super.attributeChangedCallback(e, t, i), "open" === e && this.open && (await Q.load("photoswipe"), this._openPhotoSwipe())
        }
        async _openPhotoSwipe() {
            let e = await this._buildItems();
            this.photoSwipeInstance = new window.ThemePhotoSwipe(this, class {
                constructor(e) {
                    this.photoSwipeInstance = e, this.delegate = new o(this.photoSwipeInstance.scrollWrap), this.maxSpreadZoom = window.themeVariables.settings.mobileZoomFactor || 2, this.pswpUi = this.photoSwipeInstance.scrollWrap.querySelector(".pswp__ui"), this.delegate.on("click", '[data-action="pswp-close"]', this._close.bind(this)), this.delegate.on("click", '[data-action="pswp-prev"]', this._goToPrev.bind(this)), this.delegate.on("click", '[data-action="pswp-next"]', this._goToNext.bind(this)), this.delegate.on("click", '[data-action="pswp-move-to"]', this._moveTo.bind(this)), this.photoSwipeInstance.listen("close", this._onPswpClosed.bind(this)), this.photoSwipeInstance.listen("doubleTap", this._onPswpDoubleTap.bind(this)), this.photoSwipeInstance.listen("beforeChange", this._onPswpBeforeChange.bind(this)), this.photoSwipeInstance.listen("initialZoomInEnd", this._onPswpInitialZoomInEnd.bind(this)), this.photoSwipeInstance.listen("initialZoomOut", this._onPswpInitialZoomOut.bind(this)), this.photoSwipeInstance.listen("parseVerticalMargin", this._onPswpParseVerticalMargin.bind(this)), this.delegate.on("pswpTap", ".pswp__img", this._onPswpTap.bind(this))
                }
                init() {
                    let e = this.pswpUi.querySelector(".pswp__prev-next-buttons"),
                        t = this.pswpUi.querySelector(".pswp__dots-nav-wrapper");
                    if (this.photoSwipeInstance.items.length <= 1) return e.style.display = "none", void(t.style.display = "none");
                    e.style.display = "", t.style.display = "";
                    let i = "";
                    this.photoSwipeInstance.items.forEach(((e, t) => {
                        i += `        <button class="dots-nav__item tap-area" ${0===t?'aria-current="true"':""} data-action="pswp-move-to">          <span class="visually-hidden">Go to slide ${t}</span>        </button>    `
                    })), t.querySelector(".pswp__dots-nav-wrapper .dots-nav").innerHTML = i
                }
                _close() {
                    this.photoSwipeInstance.close()
                }
                _goToPrev() {
                    this.photoSwipeInstance.prev()
                }
                _goToNext() {
                    this.photoSwipeInstance.next()
                }
                _moveTo(e, t) {
                    this.photoSwipeInstance.goTo([...t.parentNode.children].indexOf(t))
                }
                _onPswpClosed() {
                    this.delegate.off("pswpTap")
                }
                _onPswpDoubleTap(e) {
                    let t = this.photoSwipeInstance.currItem.initialZoomLevel;
                    this.photoSwipeInstance.getZoomLevel() !== t ? this.photoSwipeInstance.zoomTo(t, e, 333) : this.photoSwipeInstance.zoomTo(t < .7 ? 1 : this.maxSpreadZoom, e, 333)
                }
                _onPswpTap(e) {
                    "mouse" === e.detail.pointerType && this.photoSwipeInstance.toggleDesktopZoom(e.detail.releasePoint)
                }
                _onPswpBeforeChange() {
                    if (this.photoSwipeInstance.items.length <= 1) return;
                    let e = this.photoSwipeInstance.scrollWrap.querySelector(`.dots-nav__item:nth-child(${this.photoSwipeInstance.getCurrentIndex()+1})`);
                    e.setAttribute("aria-current", "true"), ne(e).forEach((e => e.removeAttribute("aria-current")))
                }
                _onPswpInitialZoomInEnd() {
                    var e;
                    null == (e = this.pswpUi) || e.classList.remove("pswp__ui--hidden")
                }
                _onPswpInitialZoomOut() {
                    var e;
                    null == (e = this.pswpUi) || e.classList.add("pswp__ui--hidden")
                }
                _onPswpParseVerticalMargin(e) {
                    e.vGap.bottom = this.photoSwipeInstance.items.length <= 1 || window.matchMedia(window.themeVariables.breakpoints.lapAndUp).matches ? 0 : 60
                }
            }, e, {
                index: e.findIndex((e => e.selected)),
                maxSpreadZoom: this.maxSpreadZoom,
                loop: !1,
                allowPanToNext: !1,
                closeOnScroll: !1,
                closeOnVerticalDrag: se.supportsHover(),
                showHideOpacity: !0,
                arrowKeys: !0,
                history: !1,
                getThumbBoundsFn: () => {
                    let e = this.mediaElement.querySelector(".product__media-item.is-selected"),
                        t = window.pageYOffset || document.documentElement.scrollTop,
                        i = e.getBoundingClientRect();
                    return {
                        x: i.left,
                        y: i.top + t,
                        w: i.width
                    }
                },
                getDoubleTapZoom: (e, t) => e ? t.w > t.h ? 1.6 : 1 : t.initialZoomLevel < .7 ? 1 : 1.33
            });
            let t = null;
            this.photoSwipeInstance.updateSize = new Proxy(this.photoSwipeInstance.updateSize, {
                apply(e, i, s) {
                    t !== window.innerWidth && (e(arguments), t = window.innerWidth)
                }
            }), this.photoSwipeInstance.listen("close", (() => {
                this.open = !1
            })), this.photoSwipeInstance.init()
        }
        async _buildItems() {
            let e = Array.from(this.mediaElement.querySelectorAll('.product__media-item[data-media-type="image"]:not(.is-filtered)')),
                t = await re.load(this.getAttribute("product-handle"));
            return Promise.resolve(e.map((e => {
                let i = t.media.find((t => t.id === parseInt(e.getAttribute("data-media-id")))),
                    s = be(i, [200, 300, 400, 500, 600, 700, 800, 1e3, 1200, 1400, 1600, 1800, 2e3, 2200, 2400, 2600, 2800, 3e3]),
                    n = Math.min(s[s.length - 1], window.innerWidth);
                return {
                    selected: e.classList.contains("is-selected"),
                    src: pe(i, `${Math.ceil(Math.min(n*window.devicePixelRatio*this.maxSpreadZoom,3e3))}x`),
                    msrc: e.firstElementChild.currentSrc,
                    originalMedia: i,
                    w: n,
                    h: parseInt(n / i.aspect_ratio)
                }
            })))
        }
    });
    var He = class extends HTMLElement {
        connectedCallback() {
            var e;
            let t = this.querySelector("script");
            t && (this.inventories = JSON.parse(t.innerHTML), null == (e = document.getElementById(this.getAttribute("form-id"))) || e.addEventListener("variant:changed", this._onVariantChanged.bind(this)))
        }
        _onVariantChanged(e) {
            var t;
            null == (t = this.querySelector("span")) || t.remove(), e.detail.variant && "" !== this.inventories[e.detail.variant.id] ? (this.hidden = !1, this.insertAdjacentHTML("afterbegin", this.inventories[e.detail.variant.id])) : this.hidden = !0
        }
    };
    window.customElements.define("product-inventory", He);
    var De = class extends HTMLElement {
        connectedCallback() {
            var e;
            null == (e = document.getElementById(this.getAttribute("form-id"))) || e.addEventListener("variant:changed", this._onVariantChanged.bind(this)), Shopify.designMode && Shopify.PaymentButton && Shopify.PaymentButton.init()
        }
        _onVariantChanged(e) {
            this._updateAddToCartButton(e.detail.variant), this._updateDynamicCheckoutButton(e.detail.variant)
        }
        _updateAddToCartButton(e) {
            let t = this.querySelector("[data-product-add-to-cart-button]");
            if (!t) return;
            let i = "";
            t.classList.remove("button--primary", "button--secondary", "button--ternary"), e ? e.available ? (t.removeAttribute("disabled"), t.classList.add(t.hasAttribute("data-use-primary") ? "button--primary" : "button--secondary"), i = t.getAttribute("data-button-content")) : (t.setAttribute("disabled", "disabled"), t.classList.add("button--ternary"), i = window.themeVariables.strings.productFormSoldOut) : (t.setAttribute("disabled", "disabled"), t.classList.add("button--ternary"), i = window.themeVariables.strings.productFormUnavailable), "loader-button" === t.getAttribute("is") ? t.firstElementChild.innerHTML = i : t.innerHTML = i
        }
        _updateDynamicCheckoutButton(e) {
            let t = this.querySelector(".shopify-payment-button");
            t && (t.style.display = e && e.available ? "block" : "none")
        }
    };
    window.customElements.define("product-payment-container", De);
    window.customElements.define("product-payment-terms", class extends c {
        connectedCallback() {
            var e;
            null == (e = document.getElementById(this.getAttribute("form-id"))) || e.addEventListener("variant:changed", this._onVariantChanged.bind(this))
        }
        _onVariantChanged(e) {
            let t = e.detail.variant;
            if (t) {
                let e = this.querySelector('[name="id"]');
                e.value = t.id, e.dispatchEvent(new Event("change", {
                    bubbles: !0
                }))
            }
        }
    });
    var Ne = class extends HTMLFormElement {
        connectedCallback() {
            this.id.disabled = !1, "page" !== window.themeVariables.settings.cartType && "cart" !== window.themeVariables.settings.pageType && this.addEventListener("submit", this._onSubmit.bind(this))
        }
        async _onSubmit(e) {
            if (e.preventDefault(), !this.checkValidity()) return void this.reportValidity();
            let t = Array.from(this.elements).filter((e => "submit" === e.type));
            t.forEach((e => {
                e.setAttribute("disabled", "disabled"), e.setAttribute("aria-busy", "true")
            }));
            let i = new FormData(this);
            i.append("sections", ["mini-cart"]), i.delete("option1"), i.delete("option2"), i.delete("option3");
            let s = await fetch(`${window.themeVariables.routes.cartAddUrl}.js`, {
                body: i,
                method: "POST",
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            });
            t.forEach((e => {
                e.removeAttribute("disabled"), e.removeAttribute("aria-busy")
            }));
            let n = await s.json();
            s.ok && (this.dispatchEvent(new CustomEvent("variant:added", {
                bubbles: !0,
                detail: {
                    variant: n.hasOwnProperty("items") ? n.items[0] : n
                }
            })), fetch(`${window.themeVariables.routes.cartUrl}.js`).then((async e => {
                let t = await e.json();
                document.documentElement.dispatchEvent(new CustomEvent("cart:updated", {
                    bubbles: !0,
                    detail: {
                        cart: t
                    }
                })), t.sections = n.sections, document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", {
                    bubbles: !0,
                    detail: {
                        cart: t,
                        openMiniCart: "drawer" === window.themeVariables.settings.cartType && null === this.closest(".drawer")
                    }
                }))
            }))), this.dispatchEvent(new CustomEvent("cart-notification:show", {
                bubbles: !0,
                cancelable: !0,
                detail: {
                    status: s.ok ? "success" : "error",
                    error: n.description || ""
                }
            }))
        }
    };
    window.customElements.define("product-form", Ne, {
        extends: "form"
    });

    function Re(e, t = "") {
        "string" == typeof e && (e = e.replace(".", ""));
        let i = /\{\{\s*(\w+)\s*\}\}/,
            s = t || window.themeVariables.settings.moneyFormat;

        function n(e, t) {
            return null == e || e != e ? t : e
        }

        function a(e, t, i, s) {
            if (t = n(t, 2), i = n(i, ","), s = n(s, "."), isNaN(e) || null == e) return 0;
            let a = (e = (e / 100).toFixed(t)).split(".");
            return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i) + (a[1] ? s + a[1] : "")
        }
        let r = "";
        switch (s.match(i)[1]) {
            case "amount":
                r = a(e, 2);
                break;
            case "amount_no_decimals":
                r = a(e, 0);
                break;
            case "amount_with_space_separator":
                r = a(e, 2, " ", ".");
                break;
            case "amount_with_comma_separator":
                r = a(e, 2, ".", ",");
                break;
            case "amount_with_apostrophe_separator":
                r = a(e, 2, "'", ".");
                break;
            case "amount_no_decimals_with_comma_separator":
                r = a(e, 0, ",", ".");
                break;
            case "amount_no_decimals_with_space_separator":
                r = a(e, 0, " ");
                break;
            case "amount_no_decimals_with_apostrophe_separator":
                r = a(e, 0, "'")
        }
        return s.indexOf("with_comma_separator"), s.replace(i, r)
    }
    window.customElements.define("product-media", class extends c {
        async connectedCallback() {
            var e;
            this.mainCarousel = this.querySelector("flickity-carousel"), this.hasAttribute("reveal-on-scroll") && this._setupVisibility(), 1 !== this.mainCarousel.childElementCount && (this.selectedVariantMediaId = null, this.viewInSpaceElement = this.querySelector("[data-shopify-model3d-id]"), this.zoomButton = this.querySelector(".product__zoom-button"), this.product = await re.load(this.getAttribute("product-handle")), null == (e = document.getElementById(this.getAttribute("form-id"))) || e.addEventListener("variant:changed", this._onVariantChanged.bind(this)), this.mainCarousel.addEventListener("model:played", (() => this.mainCarousel.setDraggable(!1))), this.mainCarousel.addEventListener("model:paused", (() => this.mainCarousel.setDraggable(!0))), this.mainCarousel.addEventListener("video:played", (() => this.mainCarousel.setDraggable(!1))), this.mainCarousel.addEventListener("video:paused", (() => this.mainCarousel.setDraggable(!0))), this.mainCarousel.addEventListener("flickity:ready", this._onFlickityReady.bind(this)), this.mainCarousel.addEventListener("flickity:slide-changed", this._onFlickityChanged.bind(this)), this.mainCarousel.addEventListener("flickity:slide-settled", this._onFlickitySettled.bind(this)), this._onFlickityReady())
        }
        get thumbnailsPosition() {
            return window.matchMedia(window.themeVariables.breakpoints.pocket).matches ? "bottom" : this.getAttribute("thumbnails-position")
        }
        async _setupVisibility() {
            await this.untilVisible();
            let e = await this.mainCarousel.flickityInstance,
                t = e ? e.selectedElement.querySelector("img") : this.querySelector(".product__media-image-wrapper img"),
                i = se.prefersReducedMotion();
            await ge(t);
            let s = new fe(new ve([new ye(t, {
                opacity: [0, 1],
                transform: [`scale(${i?1:1.1})`, "scale(1)"]
            }, {
                duration: 500,
                easing: "cubic-bezier(0.65, 0, 0.35, 1)"
            }), new ve(Array.from(this.querySelectorAll(".product__thumbnail-item:not(.is-filtered)")).map(((e, t) => new ye(e, {
                opacity: [0, 1],
                transform: "left" === this.thumbnailsPosition ? [`translateY(${i?0:"40px"})`, "translateY(0)"] : [`translateX(${i?0:"50px"})`, "translateX(0)"]
            }, {
                duration: 250,
                delay: i ? 0 : 100 * t,
                easing: "cubic-bezier(0.75, 0, 0.175, 1)"
            }))))]));
            this._hasSectionReloaded ? s.finish() : s.play()
        }
        async _onVariantChanged(e) {
            let t = e.detail.variant,
                i = [];
            if (this.product.media.forEach((e => {
                    var s;
                    let n = t.featured_media && e.id === t.featured_media.id;
                    if ((null == (s = e.alt) ? void 0 : s.includes("#")) && !n) {
                        let s = e.alt.split("#").pop().split("_");
                        this.product.options.forEach((n => {
                            n.name.toLowerCase() === s[0].toLowerCase() && t.options[n.position - 1].toLowerCase() !== s[1].trim().toLowerCase() && i.push(e.id)
                        }))
                    }
                })), [...new Set(Array.from(this.querySelectorAll(".is-filtered[data-media-id]")).map((e => parseInt(e.getAttribute("data-media-id")))))].some((e => !i.includes(e)))) {
                let e = t.featured_media ? t.featured_media.id : this.product.media.map((e => e.id)).filter((e => !i.includes(e)))[0];
                Array.from(this.querySelectorAll("[data-media-id]")).forEach((t => {
                    t.classList.toggle("is-filtered", i.includes(parseInt(t.getAttribute("data-media-id")))), t.classList.toggle("is-selected", e === parseInt(t.getAttribute("data-media-id"))), t.classList.toggle("is-initial-selected", e === parseInt(t.getAttribute("data-media-id")))
                })), this.mainCarousel.reload()
            } else {
                if (!e.detail.variant.featured_media || this.selectedVariantMediaId === e.detail.variant.featured_media.id) return;
                this.mainCarousel.select(`[data-media-id="${e.detail.variant.featured_media.id}"]`)
            }
            this.selectedVariantMediaId = e.detail.variant.featured_media ? e.detail.variant.featured_media.id : null
        }
        async _onFlickityReady() {
            let e = await this.mainCarousel.flickityInstance;
            ["video", "external_video"].includes(e.selectedElement.getAttribute("data-media-type")) && this.hasAttribute("autoplay-video") && e.selectedElement.firstElementChild.play()
        }
        async _onFlickityChanged() {
            (await this.mainCarousel.flickityInstance).cells.forEach((e => {
                ["external_video", "video", "model"].includes(e.element.getAttribute("data-media-type")) && e.element.firstElementChild.pause()
            }))
        }
        async _onFlickitySettled() {
            let e = (await this.mainCarousel.flickityInstance).selectedElement;
            switch (this.zoomButton && (this.zoomButton.hidden = "image" !== e.getAttribute("data-media-type")), this.viewInSpaceElement && this.viewInSpaceElement.setAttribute("data-shopify-model3d-id", this.viewInSpaceElement.getAttribute("data-shopify-model3d-default-id")), e.getAttribute("data-media-type")) {
                case "model":
                    this.viewInSpaceElement.setAttribute("data-shopify-model3d-id", e.getAttribute("data-media-id")), e.firstElementChild.play();
                    break;
                case "external_video":
                case "video":
                    this.hasAttribute("autoplay-video") && e.firstElementChild.play()
            }
        }
    });
    var Fe = class extends HTMLElement {
        connectedCallback() {
            var e;
            null == (e = document.getElementById(this.getAttribute("form-id"))) || e.addEventListener("variant:changed", this._onVariantChanged.bind(this))
        }
        get priceClass() {
            return this.getAttribute("price-class") || ""
        }
        get unitPriceClass() {
            return this.getAttribute("unit-price-class") || ""
        }
        _onVariantChanged(e) {
            this._updateLabels(e.detail.variant), this._updatePrices(e.detail.variant), this._updateSku(e.detail.variant)
        }
        _updateLabels(e) {
            let t = this.querySelector("[data-product-label-list]");
            if (t)
                if (e) {
                    if (t.innerHTML = "", e.compare_at_price > e.price) {
                        let i = "";
                        i = "percentage" === window.themeVariables.settings.discountMode ? `${Math.round(100*(e.compare_at_price-e.price)/e.compare_at_price)}%` : Re(e.compare_at_price - e.price), t.innerHTML = `<span class="label label--highlight">${window.themeVariables.strings.collectionDiscount.replace("@savings@",i)}</span>`
                    }
                } else t.innerHTML = ""
        }
        _updatePrices(e) {
            Shopify.variantChange(e), sessionStorage.setItem("varientID", e.id), sessionStorage.setItem("varientSku", e.sku), sessionStorage.pincode && "" !== sessionStorage.pincode && Shopify.pincodeCheckerApi(sessionStorage.product_id, e.sku, e.id, sessionStorage.pincode);
            let t = this.querySelector("[data-product-price-list]"),
                i = window.themeVariables.settings.currencyCodeEnabled ? window.themeVariables.settings.moneyWithCurrencyFormat : Shopify.money_format2;
            if (!t) {
                if (!document.querySelector(".custom-product-price")) return;
                t = window.innerWidth > 990 ? document.querySelector(".custom-product-price [data-product-price-list]") : document.querySelector(".custom-product-price-mobile [data-product-price-list]"), i = window.themeVariables.settings.currencyCodeEnabled ? window.themeVariables.settings.moneyWithCurrencyFormat : Shopify.money_format
            }
            if (e) {
                if (t.innerHTML = "", e.compare_at_price > e.price) {
                    let s = We(e.price, t);
                    t.innerHTML += `<span class="price price--highlight ${this.priceClass}"><span class="visually-hidden">${window.themeVariables.strings.productSalePrice}</span>${Shopify.formatMoney(s,i)}</span>`, t.innerHTML += `<span class="price price--compare line-through"><span class="visually-hidden">${window.themeVariables.strings.productRegularPrice}</span>${Shopify.formatMoney(e.compare_at_price,i)}</span>`
                } else {
                    let s = We(e.price, t);
                    t.innerHTML += `<span class="price ${this.priceClass}"><span class="visually-hidden">${window.themeVariables.strings.productSalePrice}</span>${Shopify.formatMoney(s,i)}</span>`
                }
                if (e.unit_price_measurement) {
                    We(e.unit_price_measurement, t);
                    let i = "";
                    1 !== e.unit_price_measurement.reference_value && (i = `<span class="unit-price-measurement__reference-value">${e.unit_price_measurement.reference_value}</span>`), t.innerHTML += `          <div class="price text--subdued ${this.unitPriceClass}">            <div class="unit-price-measurement">              <span class="unit-price-measurement__price">${Re(e.unit_price)}</span>              <span class="unit-price-measurement__separator">/</span>              ${i}             <span class="unit-price-measurement__reference-unit">${e.unit_price_measurement.reference_unit}</span>           </div>         </div>        `
                }
                t.style.display = ""
            } else t.style.display = "none"
        }
        _updateSku(e) {
            let t = this.querySelector("[data-product-sku-container]");
            if (!t) return;
            let i = t.querySelector("[data-product-sku-number]");
            e && e.sku ? (i.innerHTML = e.sku, t.style.display = "") : t.style.display = "none"
        }
    };
    window.customElements.define("product-meta", Fe);
    window.customElements.define("quick-buy-drawer", class extends Ve {
        connectedCallback() {
            super.connectedCallback(), this.delegate.on("variant:changed", this._onVariantChanged.bind(this))
        }
        async _load() {
            await super._load(), this.imageElement = this.querySelector(".quick-buy-product__image"), window.Shopify && window.Shopify.PaymentButton && window.Shopify.PaymentButton.init()
        }
        _onVariantChanged(e) {
            let t = e.detail.variant;
            if (t && Array.from(this.querySelectorAll('[href*="/products"]')).forEach((e => {
                    let i = new URL(e.href);
                    i.searchParams.set("variant", t.id), e.setAttribute("href", i.toString())
                })), !this.imageElement || !t || !t.featured_media) return;
            let i = t.featured_media;
            i.alt && this.imageElement.setAttribute("alt", i.alt), this.imageElement.setAttribute("width", i.preview_image.width), this.imageElement.setAttribute("height", i.preview_image.height), this.imageElement.setAttribute("src", pe(i, "342x")), this.imageElement.setAttribute("srcset", me(i, [114, 228, 342]))
        }
    });
    window.customElements.define("quick-buy-popover", class extends Z {
        connectedCallback() {
            super.connectedCallback(), this.delegate.on("variant:changed", this._onVariantChanged.bind(this)), this.delegate.on("variant:added", (() => this.open = !1))
        }
        async _load() {
            await super._load(), this.imageElement = this.querySelector(".quick-buy-product__image")
        }
        _onVariantChanged(e) {
            let t = e.detail.variant;
            if (t && Array.from(this.querySelectorAll('[href*="/products"]')).forEach((e => {
                    let i = new URL(e.href);
                    i.searchParams.set("variant", t.id), e.setAttribute("href", i.toString())
                })), !this.imageElement || !t || !t.featured_media) return;
            let i = t.featured_media;
            i.alt && this.imageElement.setAttribute("alt", i.alt), this.imageElement.setAttribute("width", i.preview_image.width), this.imageElement.setAttribute("height", i.preview_image.height), this.imageElement.setAttribute("src", pe(i, "195x")), this.imageElement.setAttribute("srcset", me(i, [65, 130, 195]))
        }
    });
    var ze = class extends HTMLElement {
        connectedCallback() {
            var e;
            null == (e = document.getElementById(this.getAttribute("form-id"))) || e.addEventListener("variant:changed", this._onVariantChanged.bind(this))
        }
        _onVariantChanged(e) {
            e.detail.variant ? this._renderForVariant(e.detail.variant.id) : this.innerHTML = ""
        }
        async _renderForVariant(e) {
            let t = await fetch(`${window.themeVariables.routes.rootUrlWithoutSlash}/variants/${e}?section_id=store-availability`),
                i = document.createElement("div");
            i.innerHTML = await t.text(), this.innerHTML = i.firstElementChild.innerHTML.trim()
        }
    };
    window.customElements.define("store-pickup", ze);
    let We = (e, t) => {
        if (document.querySelector(".quick_product-price"), Shopify.enable_flash_sale && t.className.includes("custom-product_flash-sale")) {
            e -= e / 100 * Shopify.flash_discount
        } else if (Shopify.enable_namagoo && t.className.includes("custom-product_namogoo") && localStorage.getItem("Namogoo")) {
            e -= e / 100 * JSON.parse(localStorage.getItem("Namogoo")).discountValue
        }
        return e
    };
    window.customElements.define("product-variants", class extends c {
        async connectedCallback() {
            this.masterSelector = document.getElementById(this.getAttribute("form-id")).id, this.optionSelectors = Array.from(this.querySelectorAll("[data-selector-type]")), this.masterSelector ? (this.product = await re.load(this.productHandle), this.delegate.on("change", '[name^="option"]', this._onOptionChanged.bind(this)), this.masterSelector.addEventListener("change", this._onMasterSelectorChanged.bind(this)), this._updateDisableSelectors(), this.selectVariant(this.selectedVariant.id)) : console.warn(`The variant selector for product with handle ${this.productHandle} is not linked to any product form.`)
        }
        get selectedVariant() {
            return this._getVariantById(parseInt(this.masterSelector.value))
        }
        get productHandle() {
            return this.getAttribute("handle")
        }
        get hideSoldOutVariants() {
            return this.hasAttribute("hide-sold-out-variants")
        }
        get updateUrl() {
            return this.hasAttribute("update-url")
        }
        selectVariant(e) {
            var t;
            if (this._isVariantSelectable(this._getVariantById(e)) || (e = this._getFirstMatchingAvailableOrSelectableVariant().id), (null == (t = this.selectedVariant) ? void 0 : t.id) !== e) {
                if (this.masterSelector.value = e, this.masterSelector.dispatchEvent(new Event("change", {
                        bubbles: !0
                    })), this.updateUrl && history.replaceState) {
                    let t = new URL(window.location.href);
                    e ? t.searchParams.set("variant", e) : t.searchParams.delete("variant"), window.history.replaceState({
                        path: t.toString()
                    }, "", t.toString())
                }
                this._updateDisableSelectors(), l(this.masterSelector.form, "variant:changed", {
                    variant: this.selectedVariant
                })
            }
        }
        _onOptionChanged() {
            var e;
            this.selectVariant(null == (e = this._getVariantFromOptions()) ? void 0 : e.id)
        }
        _onMasterSelectorChanged() {
            var e;
            ((null == (e = this.selectedVariant) ? void 0 : e.options) || []).forEach(((e, t) => {
                let i = this.querySelector(`input[name="option${t+1}"][value="${CSS.escape(e)}"], select[name="option${t+1}"]`),
                    s = !1;
                "SELECT" === i.tagName ? (s = i.value !== e, i.value = e) : "INPUT" === i.tagName && (s = !i.checked && i.value === e, i.checked = i.value === e), s && i.dispatchEvent(new Event("change", {
                    bubbles: !0
                }))
            }))
        }
        _getVariantById(e) {
            return this.product.variants.find((t => t.id === e))
        }
        _getVariantFromOptions() {
            let e = this._getSelectedOptionValues();
            return this.product.variants.find((t => t.options.every(((t, i) => t === e[i]))))
        }
        _isVariantSelectable(e) {
            return !!e && (e.available || !this.hideSoldOutVariants && !e.available)
        }
        _getFirstMatchingAvailableOrSelectableVariant() {
            let e = this._getSelectedOptionValues(),
                t = null,
                i = 0;
            do {
                e.pop(), i += 1, t = this.product.variants.find((t => this.hideSoldOutVariants ? t.available && t.options.slice(0, t.options.length - i).every(((t, i) => t === e[i])) : t.options.slice(0, t.options.length - i).every(((t, i) => t === e[i]))))
            } while (!t && e.length > 0);
            return t
        }
        _getSelectedOptionValues() {
            let e = [];
            return Array.from(this.querySelectorAll('input[name^="option"]:checked, select[name^="option"]')).forEach((t => e.push(t.value))), e
        }
        _updateDisableSelectors() {
            let e = this.selectedVariant;
            if (!e) return;
            let t = (e, t, i, s) => {
                let n = "";
                console.log(e);
                console.log(t);
                console.log(i);
                console.log(s);
                switch (e.getAttribute("data-selector-type")) {
                    case "color":
                        n = `.color-swatch:nth-child(${t+1})`;
                        break;
                    case "variant-image":
                        n = `.variant-swatch:nth-child(${t+1})`;
                        break;
                    case "block":
                        n = `.block-swatch:nth-child(${t+1})`;
                        break;
                    case "dropdown":
                        n = `.combo-box__option-item:nth-child(${t+1})`
                }
                console.log(e.querySelector(n));
                e.querySelector(n).toggleAttribute("hidden", !s), this.hideSoldOutVariants ? e.querySelector(n).toggleAttribute("hidden", !i) : e.querySelector(n).classList.toggle("is-disabled", !i)
            };
            this.optionSelectors && this.optionSelectors[0] && this.product.options[0].values.forEach(((i, s) => {
                let n = this.product.variants.some((e => e.option1 === i && e)),
                    a = this.product.variants.some((e => e.option1 === i && e.available));
                t(this.optionSelectors[0], s, a, n), this.optionSelectors[1] && this.product.options[1].values.forEach(((i, s) => {
                    let n = this.product.variants.some((t => t.option2 === i && t.option1 === e.option1 && t)),
                        a = this.product.variants.some((t => t.option2 === i && t.option1 === e.option1 && t.available));
                    t(this.optionSelectors[1], s, a, n), this.optionSelectors[2] && this.product.options[2].values.forEach(((i, s) => {
                        let n = this.product.variants.some((t => t.option3 === i && t.option1 === e.option1 && t.option2 === e.option2 && t)),
                            a = this.product.variants.some((t => t.option3 === i && t.option1 === e.option1 && t.option2 === e.option2 && t.available));
                        t(this.optionSelectors[2], s, a, n)
                    }))
                }))
            }))
        }
    });
    window.customElements.define("product-item", class extends c {
        connectedCallback() {
            this.primaryImageList = Array.from(this.querySelectorAll(".product-item__primary-image")), this.delegate.on("change", ".product-item-meta__swatch-list .color-swatch__radio", this._onColorSwatchChanged.bind(this)), this.delegate.on("mouseenter", ".product-item-meta__swatch-list .color-swatch__item", this._onColorSwatchHovered.bind(this), !0)
        }
        async _onColorSwatchChanged(e, t) {
            if (Array.from(this.querySelectorAll('[href*="/products"]')).forEach((e => {
                    let i;
                    (i = "A" === e.tagName ? new URL(e.href) : new URL(e.getAttribute("href"), `https://${window.themeVariables.routes.host}`)).searchParams.set("variant", t.getAttribute("data-variant-id")), e.setAttribute("href", i.toString())
                })), t.hasAttribute("data-variant-featured-media")) {
                let e = this.primaryImageList.find((e => e.getAttribute("data-media-id") === t.getAttribute("data-variant-featured-media")));
                e.setAttribute("loading", "eager"), await (e.complete ? Promise.resolve() : new Promise((t => e.onload = t))), e.removeAttribute("hidden");
                await e.animate(Array.from(e.parentElement.classList).some((e => ["aspect-ratio--short", "aspect-ratio--tall", "aspect-ratio--square"].includes(e))) ? [{
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                    transform: "translate(calc(-50% - 20px), -50%)",
                    zIndex: 1,
                    offset: 0
                }, {
                    clipPath: "polygon(0 0, 20% 0, 5% 100%, 0 100%)",
                    transform: "translate(calc(-50% - 20px), -50%)",
                    zIndex: 1,
                    offset: .3
                }, {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                    offset: 1
                }] : [{
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                    transform: "translateX(-20px)",
                    zIndex: 1,
                    offset: 0
                }, {
                    clipPath: "polygon(0 0, 20% 0, 5% 100%, 0 100%)",
                    transform: "translateX(-20px)",
                    zIndex: 1,
                    offset: .3
                }, {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    transform: "translateX(0px)",
                    zIndex: 1,
                    offset: 1
                }], {
                    duration: 500,
                    easing: "ease-in-out"
                }).finished, this.primaryImageList.filter((t => t.classList.contains("product-item__primary-image") && t !== e)).forEach((e => e.setAttribute("hidden", "")))
            }
        }
        _onColorSwatchHovered(e, t) {
            let i = t.previousElementSibling;
            i.hasAttribute("data-variant-featured-media") && this.primaryImageList.find((e => e.getAttribute("data-media-id") === i.getAttribute("data-variant-featured-media"))).setAttribute("loading", "eager")
        }
    });

    function Ye() {
        let e = document.querySelector(".js-load-more");
        var t = new IntersectionObserver((function(e) {
            !0 === e[0].isIntersecting && sessionStorage.setItem("Load_More", "true"),
                function() {
                    if ("true" === sessionStorage.getItem("Load_More")) {
                        sessionStorage.setItem("Load_More", "false");
                        var e = $(".load-more-icon"),
                            t = parseInt($("[data-total-pages]").val()),
                            i = parseInt($("[data-current-page]").val());
                        i += 1;
                        var s = $("[data-next-url]").val().replace(/page=[0-9]+/, "page=" + i);
                        $("[data-current-page]").val(i), $.ajax({
                            url: s,
                            type: "GET",
                            dataType: "html",
                            success: function(e) {
                                $(".load-more__inner").append($(e).find(".load-more__inner").html()), Shopify.customLazy(), labelsPriority()
                            },
                            complete: function() {
                                i >= t && e.addClass("hide")
                            }
                        })
                    }
                }()
        }), {
            threshold: [1]
        });
        null !== e && t.observe(e)
    }
    sessionStorage.setItem("Load_More", "false"), Ye(), window.customElements.define("product-facet", class extends c {
        connectedCallback() {
            this.delegate.on("pagination:page-changed", this._rerender.bind(this)), this.delegate.on("facet:criteria-changed", this._rerender.bind(this)), this.delegate.on("facet:abort-loading", this._abort.bind(this))
        }
        async _rerender(e) {
            history.replaceState({}, "", e.detail.url), this._abort(), this.showLoadingBar();
            let t = new URL(window.location);
            t.searchParams.set("section_id", this.getAttribute("section-id"));
            try {
                this.abortController = new AbortController;
                let e = await (await fetch(t.toString(), {
                        signal: this.abortController.signal
                    })).text(),
                    i = document.createElement("div");
                i.innerHTML = e, this.querySelector("#facet-main").innerHTML = i.querySelector("#facet-main").innerHTML;
                let s = Array.from(i.querySelectorAll(".product-facet__active-list")),
                    n = document.querySelector(".mobile-toolbar__item--filters");
                n && n.classList.toggle("has-filters", s.length > 0);
                let a = i.querySelector("#facet-filters");
                if (a) {
                    let e = this.querySelector("#facet-filters .drawer__content").scrollTop;
                    Array.from(this.querySelectorAll("#facet-filters-form .collapsible-toggle")).forEach((e => {
                        let t = a.querySelector(`[aria-controls="${e.getAttribute("aria-controls")}"]`),
                            i = "true" === e.getAttribute("aria-expanded");
                        t.setAttribute("aria-expanded", i ? "true" : "false"), t.nextElementSibling.toggleAttribute("open", i), t.nextElementSibling.style.overflow = i ? "visible" : ""
                    })), this.querySelector("#facet-filters").innerHTML = a.innerHTML, this.querySelector("#facet-filters .drawer__content").scrollTop = e
                }
                let r = this.querySelector(".product-facet__meta-bar") || this.querySelector(".product-facet__product-list") || this.querySelector(".product-facet__main");
                requestAnimationFrame((() => {
                    r.scrollIntoView({
                        block: "start",
                        behavior: "smooth"
                    })
                })), this.hideLoadingBar()
            } catch (e) {
                if ("AbortError" === e.name) return
            }
        }
        _abort() {
            this.abortController && this.abortController.abort()
        }
    });
    window.customElements.define("facet-filters", class extends Ve {
        connectedCallback() {
            super.connectedCallback(), this.delegate.on("change", '[name^="filter."]', this._onFilterChanged.bind(this)), this.rootDelegate.on("click", '[data-action="clear-filters"]', this._onFiltersCleared.bind(this)), this.alwaysVisible && (this.matchMedia = window.matchMedia(window.themeVariables.breakpoints.pocket), this.matchMedia.addListener(this._adjustDrawer.bind(this)), this._adjustDrawer(this.matchMedia))
        }
        get alwaysVisible() {
            return this.hasAttribute("always-visible")
        }
        _onFiltersCleared(e, t) {
            e.preventDefault(), l(this, "facet:criteria-changed", {
                url: t.href
            }), setTimeout((function() {
                Ye()
            }), 1e3)
        }
        _onFilterChanged() {
            let e = new FormData(this.querySelector("#facet-filters-form")),
                t = new URLSearchParams(e).toString();
            l(this, "facet:criteria-changed", {
                url: `${window.location.pathname}?${t}`
            }), setTimeout((function() {
                Ye()
            }), 1e3)
        }
        _adjustDrawer(e) {
            this.classList.toggle("drawer", e.matches), this.classList.toggle("drawer--from-left", e.matches)
        }
    });
    window.customElements.define("sort-by-popover", class extends Z {
        connectedCallback() {
            super.connectedCallback(), this.delegate.on("change", '[name="sort_by"]', this._onSortChanged.bind(this))
        }
        _onSortChanged(e, t) {
            let i = new URL(location.href);
            i.searchParams.set("sort_by", t.value), i.searchParams.delete("page"), this.open = !1, this.dispatchEvent(new CustomEvent("facet:criteria-changed", {
                bubbles: !0,
                detail: {
                    url: i.toString()
                }
            })), setTimeout((function() {
                Ye()
            }), 1e3)
        }
    });
    window.customElements.define("cart-count", class extends c {
        connectedCallback() {
            this.rootDelegate.on("cart:updated", (e => this.innerText = e.detail.cart.item_count)), this.rootDelegate.on("cart:refresh", (e => this.innerText = e.detail.cart.item_count))
        }
    }), Shopify.cartNamogooPrice = function(e) {
        if (Shopify.enable_namagoo) {
            let t = JSON.parse(localStorage.getItem("Namogoo")).discountValue,
                i = e.total_price;
            i -= i / 100 * t, $(".mini-cart__drawer-footer .cart-total-text b").html(Shopify.formatMoney(i, Shopify.money_format2));
            for (let i = 0; i < e.items.length; i++)
                if (Object.keys(e.items[i].properties).includes("namogoo")) {
                    let s = e.items[i].line_price;
                    s -= s / 100 * t, $("#mini-cart-form [data-product_id=" + e.items[i].product_id + "]").siblings(".product-item-meta__price-list-container").children(".price-list").children(".price.price--highlight").html(Shopify.formatMoney(s, Shopify.money_format2))
                }
        }
    }, Shopify.cartGst = function() {
        0 == $(".main-checkout-btn").length && ($(".mini-cart_footer").append('<button is="loader-button" onclick="shopifyCheckout()" form="mini-cart-form" type="submit" class="main-checkout-btn checkout-button hide button button--primary button--full" name="checkout">PLACE ORDER</button>'), document.querySelector(".gst-container input") && document.querySelector(".gst-container input").checked && ($(".mini-cart__gst_details").show(), $(".main-checkout-btn").show(), $(".checkout-buttons-div").hide()), Shopify.gst_added && ($(".mini-cart__gst").append(`<div class="mini-cart__gst_details"><p> ${sessionStorage.gst_billing_name} </p><p> ${sessionStorage.gst_billing_address} ${sessionStorage.gst_billing_city} ${sessionStorage.gst_billing_state} ${sessionStorage.gst_billing_pincode} </p></div>`), document.querySelector(".gst-container input").checked = !0, $(".mini-cart__gst_details").show(), $(".main-checkout-btn").show(), $(".checkout-buttons-div").hide()), $(".gst-container input").click((function() {
            this.checked ? ($(".main-checkout-btn").show(), $(".checkout-buttons-div").hide(), Shopify.gst_added && $(".mini-cart__gst_details").show()) : ($(".main-checkout-btn").hide(), $(".checkout-buttons-div").show(), Shopify.gst_added && $(".mini-cart__gst_details").hide())
        })))
    };
    window.customElements.define("cart-drawer", class extends Ve {
        connectedCallback() {
            super.connectedCallback(), this.nextReplacementDelay = 0, this.rootDelegate.on("cart:refresh", this._rerenderCart.bind(this)), this.addEventListener("variant:added", (() => this.nextReplacementDelay = 600))
        }
        async _rerenderCart(e) {
            var t;
            let i = null,
                s = "";
            e.detail && e.detail.cart ? (i = e.detail.cart, s = e.detail.cart.sections["mini-cart"]) : s = await (await fetch(`${window.themeVariables.routes.cartUrl}?section_id=${this.getAttribute("section")}`)).text();
            let n = document.createElement("div");
            n.innerHTML = s, setTimeout((async () => {
                var t;
                let s = this.querySelector(".drawer__content").scrollTop;
                if (i && 0 === i.item_count) {
                    let e = new fe(new ve(Array.from(this.querySelectorAll(".drawer__content, .drawer__footer")).map((e => new ye(e, {
                        opacity: [1, 0]
                    }, {
                        duration: 250,
                        easing: "ease-in"
                    })))));
                    e.play(), await e.finished
                }
                this.innerHTML = n.querySelector("cart-drawer").innerHTML, Shopify.cartGst(), Shopify.cartNamogooPrice(i), i && 0 === i.item_count ? this.querySelector(".drawer__content").animate({
                    opacity: [0, 1],
                    transform: ["translateY(40px)", "translateY(0)"]
                }, {
                    duration: 450,
                    easing: "cubic-bezier(0.33, 1, 0.68, 1)"
                }) : this.querySelector(".drawer__content").scrollTop = s, (null == (t = null == e ? void 0 : e.detail) ? void 0 : t.openMiniCart) && (this.clientWidth, this.open = !0)
            }), (null == (t = null == e ? void 0 : e.detail) ? void 0 : t.replacementDelay) || this.nextReplacementDelay), this.nextReplacementDelay = 0
        }
        async attributeChangedCallback(e, t, i) {
            if (super.attributeChangedCallback(e, t, i), "open" === e && this.open && (this.querySelector(".drawer__content").scrollTop = 0, !se.prefersReducedMotion())) {
                let e = Array.from(this.querySelectorAll(".line-item")),
                    t = this.querySelector(".mini-cart__recommendations-inner"),
                    i = this.querySelector(".drawer__footer"),
                    s = [];
                t && window.matchMedia(window.themeVariables.breakpoints.pocket).matches && e.push(t), e.forEach((e => e.style.opacity = 0)), t && (t.style.opacity = 0), i && (i.style.opacity = 0), s.push(new ve(e.map(((e, t) => new ye(e, {
                    opacity: [0, 1],
                    transform: ["translateX(40px)", "translateX(0)"]
                }, {
                    duration: 400,
                    delay: 400 + 120 * t - Math.min(2 * t * t, 120 * t),
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)"
                }))))), i && s.push(new ye(i, {
                    opacity: [0, 1],
                    transform: ["translateY(100%)", "translateY(0)"]
                }, {
                    duration: 300,
                    delay: 400,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)"
                })), t && !window.matchMedia(window.themeVariables.breakpoints.pocket).matches && s.push(new ye(t, {
                    opacity: [0, 1],
                    transform: ["translateX(100%)", "translateX(0)"]
                }, {
                    duration: 250,
                    delay: 400 + Math.max(120 * e.length - 25 * e.length, 25),
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)"
                })), new fe(new ve(s)).play()
            }
            Shopify.cartGst(), fetch(`${window.themeVariables.routes.cartUrl}.js`).then((async e => {
                let t = await e.json();
                Shopify.cartNamogooPrice(t)
            }))
        }
    });
    var je = class extends HTMLElement {
            async connectedCallback() {
                je.recommendationsCache[this.productId] || (je.recommendationsCache[this.productId] = fetch(`${window.themeVariables.routes.productRecommendationsUrl}?product_id=${this.productId}&limit=10&section_id=${this.sectionId}`));
                let e = await je.recommendationsCache[this.productId],
                    t = document.createElement("div");
                t.innerHTML = await e.clone().text();
                let i = t.querySelector("cart-drawer-recommendations");
                i && i.hasChildNodes() ? this.innerHTML = i.innerHTML : this.hidden = !0
            }
            get productId() {
                return this.getAttribute("product-id")
            }
            get sectionId() {
                return this.getAttribute("section-id")
            }
        },
        Ue = je;
    i(Ue, "recommendationsCache", {}), window.customElements.define("cart-drawer-recommendations", Ue);
    var Xe = class extends HTMLTextAreaElement {
        connectedCallback() {
            this.addEventListener("change", this._onNoteChanged.bind(this))
        }
        get ownedToggle() {
            return this.hasAttribute("aria-owns") ? document.getElementById(this.getAttribute("aria-owns")) : null
        }
        async _onNoteChanged() {
            this.ownedToggle && (this.ownedToggle.innerHTML = "" === this.value ? window.themeVariables.strings.cartAddOrderNote : window.themeVariables.strings.cartEditOrderNote);
            let e = await (await fetch(`${window.themeVariables.routes.cartUrl}/update.js`, {
                body: JSON.stringify({
                    note: this.value
                }),
                credentials: "same-origin",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })).json();
            document.documentElement.dispatchEvent(new CustomEvent("cart:updated", {
                bubbles: !0,
                detail: {
                    cart: e
                }
            }))
        }
    };
    window.customElements.define("cart-note", Xe, {
        extends: "textarea"
    });
    var Ge = class extends HTMLElement {
        connectedCallback() {
            document.documentElement.addEventListener("cart:updated", this._onCartUpdated.bind(this))
        }
        get threshold() {
            return parseFloat(this.getAttribute("threshold"))
        }
        _onCartUpdated(e) {
            this.style.setProperty("--progress", Math.min(parseFloat(e.detail.cart.total_price) / this.threshold, 1))
        }
    };
    window.customElements.define("free-shipping-bar", Ge);
    window.customElements.define("line-item-quantity", class extends c {
        connectedCallback() {
            this.delegate.on("click", "a", this._onQuantityLinkClicked.bind(this)), this.delegate.on("change", "input", this._onQuantityChanged.bind(this))
        }
        _onQuantityLinkClicked(e, t) {
            e.preventDefault(), this._updateFromLink(t.href)
        }
        _onQuantityChanged(e, t) {
            this._updateFromLink(`${window.themeVariables.routes.cartChangeUrl}?quantity=${t.value}&line=${t.getAttribute("data-line")}`)
        }
        async _updateFromLink(e) {
            if ("cart" === window.themeVariables.settings.pageType) return void(window.location.href = e);
            let t = new URL(e, `https://${window.themeVariables.routes.host}`).searchParams,
                i = t.get("line"),
                s = t.get("id"),
                n = parseInt(t.get("quantity"));
            this.dispatchEvent(new CustomEvent("line-item-quantity:change:start", {
                bubbles: !0,
                detail: {
                    newLineQuantity: n
                }
            }));
            let a = await (await fetch(`${window.themeVariables.routes.cartChangeUrl}.js`, {
                body: JSON.stringify({
                    line: i,
                    id: s,
                    quantity: n,
                    sections: ["mini-cart"]
                }),
                credentials: "same-origin",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })).json();
            this.dispatchEvent(new CustomEvent("line-item-quantity:change:end", {
                bubbles: !0,
                detail: {
                    cart: a,
                    newLineQuantity: n
                }
            })), document.documentElement.dispatchEvent(new CustomEvent("cart:updated", {
                bubbles: !0,
                detail: {
                    cart: a
                }
            })), document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", {
                bubbles: !0,
                detail: {
                    cart: a,
                    replacementDelay: 0 === n ? 600 : 750
                }
            }))
        }
    });
    var Ze = class extends HTMLElement {
        connectedCallback() {
            this.lineItemLoader = this.querySelector(".line-item__loader"), this.addEventListener("line-item-quantity:change:start", this._onQuantityStart.bind(this)), this.addEventListener("line-item-quantity:change:end", this._onQuantityEnd.bind(this))
        }
        _onQuantityStart() {
            this.lineItemLoader && (this.lineItemLoader.hidden = !1, this.lineItemLoader.firstElementChild.hidden = !1, this.lineItemLoader.lastElementChild.hidden = !0)
        }
        async _onQuantityEnd(e) {
            0 !== e.detail.cart.item_count && this.lineItemLoader && (await this.lineItemLoader.firstElementChild.animate({
                opacity: [1, 0],
                transform: ["translateY(0)", "translateY(-10px)"]
            }, 75).finished, this.lineItemLoader.firstElementChild.hidden = !0, 0 === e.detail.newLineQuantity ? (await this.animate({
                opacity: [1, 0],
                height: [`${this.clientHeight}px`, 0]
            }, {
                duration: 300,
                easing: "ease"
            }).finished, this.remove()) : (this.lineItemLoader.lastElementChild.hidden = !1, await this.lineItemLoader.lastElementChild.animate({
                opacity: [0, 1],
                transform: ["translateY(10px)", "translateY(0)"]
            }, {
                duration: 75,
                endDelay: 300
            }).finished, this.lineItemLoader.hidden = !0))
        }
    };
    window.customElements.define("line-item", Ze);
    window.customElements.define("cart-notification", class extends c {
        connectedCallback() {
            this.rootDelegate.on("cart-notification:show", this._onShow.bind(this), !this.hasAttribute("global")), this.delegate.on("click", '[data-action="close"]', (e => {
                e.stopPropagation(), this.hidden = !0
            })), this.addEventListener("mouseenter", this.stopTimer.bind(this)), this.addEventListener("mouseleave", this.startTimer.bind(this)), window.addEventListener("pagehide", (() => this.hidden = !0))
        }
        set hidden(e) {
            e ? this.stopTimer() : this.startTimer(), this.toggleAttribute("hidden", e)
        }
        get isInsideDrawer() {
            return this.classList.contains("cart-notification--drawer")
        }
        stopTimer() {
            clearTimeout(this._timeout)
        }
        startTimer() {
            this._timeout = setTimeout((() => this.hidden = !0), 3e3)
        }
        _onShow(e) {
            if (this.isInsideDrawer && !this.closest(".drawer").open || this.hasAttribute("global") && "success" === e.detail.status && "drawer" === window.themeVariables.settings.cartType) return;
            e.stopPropagation();
            let t = "";
            this.isInsideDrawer || (t = `        <button class="cart-notification__close tap-area hidden-phone" data-action="close">          <span class="visually-hidden">${window.themeVariables.strings.accessibilityClose}</span>         <svg focusable="false" width="14" height="14" class="icon icon--close icon--inline" viewBox="0 0 14 14">            <path d="M13 13L1 1M13 1L1 13" stroke="currentColor" stroke-width="2" fill="none"></path>         </svg>        </button>      `), "success" === e.detail.status ? (this.classList.remove("cart-notification--error"), this.innerHTML = `        <div class="cart-notification__overflow">          <div class="container">            <div class="cart-notification__wrapper">              <svg focusable="false" width="20" height="20" class="icon icon--cart-notification" viewBox="0 0 20 20">                <rect width="20" height="20" rx="10" fill="currentColor"></rect>               <path d="M6 10L9 13L14 7" fill="none" stroke="rgb(var(--success-color))" stroke-width="2"></path>             </svg>              <div class="cart-notification__text-wrapper">                <span class="cart-notification__heading heading hidden-phone">${window.themeVariables.strings.cartItemAdded}</span>                <span class="cart-notification__heading heading hidden-tablet-and-up">${window.themeVariables.strings.cartItemAddedShort}</span>\t\t\t\t<a href="" class="noti-view">View Cart</a>              </div>              ${t}            </div>          </div>        </div>      `, $(".noti-view").click((function(e) {
                e.preventDefault(), $(".drawer--quick-buy").attr("open", !1), $(".header__cart").attr("aria-expanded", !0)
            }))) : (this.classList.add("cart-notification--error"), this.innerHTML = `       <div class="cart-notification__overflow">          <div class="container">            <div class="cart-notification__wrapper">             <svg focusable="false" width="20" height="20" class="icon icon--cart-notification" viewBox="0 0 20 20">                <rect width="20" height="20" rx="10" fill="currentColor"></rect>               <path d="M9.6748 13.2798C9.90332 13.0555 10.1763 12.9434 10.4937 12.9434C10.811 12.9434 11.0819 13.0555 11.3062 13.2798C11.5347 13.5041 11.6489 13.7749 11.6489 14.0923C11.6489 14.4097 11.5347 14.6847 11.3062 14.9175C11.0819 15.146 10.811 15.2603 10.4937 15.2603C10.1763 15.2603 9.90332 15.146 9.6748 14.9175C9.45052 14.6847 9.33838 14.4097 9.33838 14.0923C9.33838 13.7749 9.45052 13.5041 9.6748 13.2798ZM9.56689 12.1816V5.19922H11.4141V12.1816H9.56689Z" fill="rgb(var(--error-color))"></path>             </svg>              <div class="cart-notification__text-wrapper">                <span class="cart-notification__heading heading">${e.detail.error}</span>             </div>                          ${t}            </div>          </div>        </div>      `), this.clientHeight, this.hidden = !1
        }
    });
    var Je = class extends HTMLElement {
        connectedCallback() {
            this.submitButton = this.querySelector('[type="button"]'), this.submitButton.addEventListener("click", this._estimateShipping.bind(this))
        }
        async _estimateShipping() {
            let e = this.querySelector('[name="shipping-estimator[zip]"]').value,
                t = this.querySelector('[name="shipping-estimator[country]"]').value,
                i = this.querySelector('[name="shipping-estimator[province]"]').value;
            this.submitButton.setAttribute("aria-busy", "true");
            let s = await fetch(`${window.themeVariables.routes.cartUrl}/prepare_shipping_rates.json?shipping_address[zip]=${e}&shipping_address[country]=${t}&shipping_address[province]=${i}`, {
                method: "POST"
            });
            if (s.ok) {
                let s = await this._getAsyncShippingRates(e, t, i);
                this._formatShippingRates(s)
            } else {
                let e = await s.json();
                this._formatError(e)
            }
            this.submitButton.removeAttribute("aria-busy")
        }
        async _getAsyncShippingRates(e, t, i) {
            let s = await (await fetch(`${window.themeVariables.routes.cartUrl}/async_shipping_rates.json?shipping_address[zip]=${e}&shipping_address[country]=${t}&shipping_address[province]=${i}`)).text();
            return "null" === s ? this._getAsyncShippingRates(e, t, i) : JSON.parse(s).shipping_rates
        }
        _formatShippingRates(e) {
            var t;
            null == (t = this.querySelector(".shipping-estimator__results")) || t.remove();
            let i = "";
            e.forEach((e => {
                i += `<li>${e.presentment_name}: ${Re(100*parseFloat(e.price))}</li>`
            }));
            let s = `      <div class="shipping-estimator__results">        <p>${0===e.length?window.themeVariables.strings.shippingEstimatorNoResults:1===e.length?window.themeVariables.strings.shippingEstimatorOneResult:window.themeVariables.strings.shippingEstimatorMultipleResults}</p>        ${""===i?"":`<ul class="unordered-list">${i}</ul>`}      </div>    `;
            this.insertAdjacentHTML("beforeend", s)
        }
        _formatError(e) {
            var t;
            null == (t = this.querySelector(".shipping-estimator__results")) || t.remove();
            let i = "";
            Object.keys(e).forEach((t => {
                i += `<li>${t} ${e[t]}</li>`
            }));
            let s = `      <div class="shipping-estimator__results">        <p>${window.themeVariables.strings.shippingEstimatorError}</p>        <ul class="unordered-list">${i}</ul>      </div>    `;
            this.insertAdjacentHTML("beforeend", s)
        }
    };
    window.customElements.define("shipping-estimator", Je);
    var Qe = class extends HTMLAnchorElement {
        constructor() {
            super(), this.addEventListener("click", this._onClick.bind(this))
        }
        _onClick() {
            let e = document.getElementById("shopify-product-reviews");
            e && (window.matchMedia(window.themeVariables.breakpoints.pocket).matches ? e.closest("collapsible-content").open = !0 : document.querySelector(`[aria-controls="${e.closest(".product-tabs__tab-item-wrapper").id}"]`).click())
        }
    };
    window.customElements.define("review-link", Qe, {
        extends: "a"
    });
    var Ke = class extends HTMLElement {
        connectedCallback() {
            var e;
            null == (e = document.getElementById(this.getAttribute("form-id"))) || e.addEventListener("variant:changed", this._onVariantChanged.bind(this)), this.imageElement = this.querySelector(".product-sticky-form__image"), this.priceElement = this.querySelector(".product-sticky-form__price"), this.unitPriceElement = this.querySelector(".product-sticky-form__unit-price"), this._setupVisibilityObservers()
        }
        disconnectedCallback() {
            this.intersectionObserver.disconnect()
        }
        set hidden(e) {
            this.toggleAttribute("hidden", e), e ? document.documentElement.style.removeProperty("--cart-notification-offset") : document.documentElement.style.setProperty("--cart-notification-offset", `${this.clientHeight}px`)
        }
        _onVariantChanged(e) {
            let t = e.detail.variant,
                i = window.themeVariables.settings.currencyCodeEnabled ? window.themeVariables.settings.moneyWithCurrencyFormat : window.themeVariables.settings.moneyFormat;
            if (!t) return;
            if (this.priceElement && (this.priceElement.innerHTML = Re(t.price, i)), this.unitPriceElement && (this.unitPriceElement.style.display = t.unit_price_measurement ? "block" : "none", t.unit_price_measurement)) {
                let e = "";
                1 !== t.unit_price_measurement.reference_value && (e = `<span class="unit-price-measurement__reference-value">${t.unit_price_measurement.reference_value}</span>`), this.unitPriceElement.innerHTML = `          <div class="unit-price-measurement">            <span class="unit-price-measurement__price">${Re(t.unit_price)}</span>            <span class="unit-price-measurement__separator">/</span>            ${e}            <span class="unit-price-measurement__reference-unit">${t.unit_price_measurement.reference_unit}</span>          </div>        `
            }
            if (!this.imageElement || !t || !t.featured_media) return;
            let s = t.featured_media;
            s.alt && this.imageElement.setAttribute("alt", s.alt), this.imageElement.setAttribute("width", s.preview_image.width), this.imageElement.setAttribute("height", s.preview_image.height), this.imageElement.setAttribute("src", pe(s, "165x")), this.imageElement.setAttribute("srcset", me(s, [55, 110, 165]))
        }
        _setupVisibilityObservers() {
            let e = document.getElementById("MainPaymentContainer"),
                t = document.querySelector(".shopify-section--footer"),
                i = z();
            this._isFooterVisible = this._isPaymentContainerPassed = !1, this.intersectionObserver = new IntersectionObserver((s => {
                s.forEach((s => {
                    if (s.target === t && (this._isFooterVisible = s.intersectionRatio > 0), s.target === e) {
                        let t = e.getBoundingClientRect();
                        this._isPaymentContainerPassed = 0 === s.intersectionRatio && t.top + t.height <= i
                    }
                })), window.matchMedia(window.themeVariables.breakpoints.pocket).matches ? this.hidden = !this._isPaymentContainerPassed || this._isFooterVisible : this.hidden = !this._isPaymentContainerPassed
            }), {
                rootMargin: `-${i}px 0px 0px 0px`
            }), this.intersectionObserver.observe(e), this.intersectionObserver.observe(t)
        }
    };
    window.customElements.define("product-sticky-form", Ke), new class {
        constructor() {
            this.delegateElement = new o(document.body), this.delegateElement.on("change", "[data-bind-value]", this._onValueChanged.bind(this))
        }
        _onValueChanged(e, t) {
            let i = document.getElementById(t.getAttribute("data-bind-value"));
            i && ("SELECT" === t.tagName && (t = t.options[t.selectedIndex]), i.innerHTML = t.hasAttribute("title") ? t.getAttribute("title") : t.value)
        }
    }, Shopify.designMode && document.addEventListener("shopify:section:load", (() => {
        window.SPR && (window.SPR.initDomEls(), window.SPR.loadProducts())
    })), window.SPRCallbacks = {
        onFormSuccess(e, t) {
            document.getElementById(`form_${t.id}`).classList.add("spr-form--success")
        }
    }, (() => {
        let e = window.visualViewport ? window.visualViewport.width : document.documentElement.clientWidth,
            t = () => {
                let t = window.visualViewport ? window.visualViewport.width : document.documentElement.clientWidth,
                    i = window.visualViewport ? window.visualViewport.height : document.documentElement.clientHeight;
                t !== e && requestAnimationFrame((() => {
                    document.documentElement.style.setProperty("--window-height", i + "px"), e = t
                }))
            };
        t(), window.visualViewport ? window.visualViewport.addEventListener("resize", t) : window.addEventListener("resize", t)
    })(), (() => {
        let e = new o(document.body);
        e.on("keyup", 'input:not([type="checkbox"]):not([type="radio"]), textarea', ((e, t) => {
            t.classList.toggle("is-filled", "" !== t.value)
        })), e.on("change", "select", ((e, t) => {
            t.parentNode.classList.toggle("is-filled", "" !== t.value)
        }))
    })(), document.querySelectorAll(".rte table").forEach((e => {
        e.outerHTML = '<div class="table-wrapper">' + e.outerHTML + "</div>"
    })), document.querySelectorAll(".rte iframe").forEach((e => {
        (-1 !== e.src.indexOf("youtube") || -1 !== e.src.indexOf("youtu.be") || -1 !== e.src.indexOf("vimeo")) && (e.outerHTML = '<div class="video-wrapper">' + e.outerHTML + "</div>")
    })), new o(document.documentElement).on("click", "[data-smooth-scroll]", ((e, t) => {
        let i = document.querySelector(t.getAttribute("href"));
        i && (e.preventDefault(), i.scrollIntoView({
            behavior: "smooth",
            block: "start"
        }))
    })), document.addEventListener("keyup", (function(e) {
        "Tab" === e.key && (document.body.classList.remove("no-focus-outline"), document.body.classList.add("focus-outline"))
    }))
})(), Shopify.money_format = "₹ {{amount_no_decimals}}", Shopify.money_format2 = "Rs. {{amount}}", Shopify.formatMoney = function(e, t) {
    "string" == typeof e && (e = e.replace(".", ""));
    var i = "",
        s = /\{\{\s*(\w+)\s*\}\}/,
        n = t || this.money_format;

    function a(e, t) {
        return void 0 === e ? t : e
    }

    function r(e, t, i, s) {
        if (t = a(t, 2), i = a(i, ","), s = a(s, "."), isNaN(e) || null == e) return 0;
        var n = (e = (e / 100).toFixed(t)).split(".");
        return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i) + (n[1] ? s + n[1] : "")
    }
    switch (n.match(s)[1]) {
        case "amount":
            i = r(e, 2);
            break;
        case "amount_no_decimals":
            i = r(e, 0);
            break;
        case "amount_with_comma_separator":
            i = r(e, 2, ".", ",");
            break;
        case "amount_no_decimals_with_comma_separator":
            i = r(e, 0, ".", ",")
    }
    return n.replace(s, i)
};

// Bootstrap v4.4.1 (https://getbootstrap.com/)
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, (function(t, e, n) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function o(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(n), !0).forEach((function(e) {
                var i, o, r;
                i = t, r = n[o = e], o in i ? Object.defineProperty(i, o, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[o] = r
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
    var a = "transitionend";
    var l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t) return 0;
            var n = e(t).css("transition-duration"),
                i = e(t).css("transition-delay"),
                o = parseFloat(n),
                r = parseFloat(i);
            return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            e(t).trigger(a)
        },
        supportsTransitionEnd: function() {
            return Boolean(a)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        s = r && l.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                } var a
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? l.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        },
        jQueryDetection: function() {
            if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = e.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    l.jQueryDetection(), e.fn.emulateTransitionEnd = function(t) {
        var n = this,
            i = !1;
        return e(this).one(l.TRANSITION_END, (function() {
            i = !0
        })), setTimeout((function() {
            i || l.triggerTransitionEnd(n)
        }), t), this
    }, e.event.special[l.TRANSITION_END] = {
        bindType: a,
        delegateType: a,
        handle: function(t) {
            if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
    };
    var c = "alert",
        h = "bs.alert",
        u = "." + h,
        f = e.fn[c],
        d = {
            CLOSE: "close" + u,
            CLOSED: "closed" + u,
            CLICK_DATA_API: "click" + u + ".data-api"
        },
        g = function() {
            function t(t) {
                this._element = t
            }
            var n = t.prototype;
            return n.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, n.dispose = function() {
                e.removeData(this._element, h), this._element = null
            }, n._getRootElement = function(t) {
                var n = l.getSelectorFromElement(t),
                    i = !1;
                return n && (i = document.querySelector(n)), i || e(t).closest(".alert")[0]
            }, n._triggerCloseEvent = function(t) {
                var n = e.Event(d.CLOSE);
                return e(t).trigger(n), n
            }, n._removeElement = function(t) {
                var n = this;
                if (e(t).removeClass("show"), e(t).hasClass("fade")) {
                    var i = l.getTransitionDurationFromElement(t);
                    e(t).one(l.TRANSITION_END, (function(e) {
                        return n._destroyElement(t, e)
                    })).emulateTransitionEnd(i)
                } else this._destroyElement(t)
            }, n._destroyElement = function(t) {
                e(t).detach().trigger(d.CLOSED).remove()
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this),
                        o = i.data(h);
                    o || (o = new t(this), i.data(h, o)), "close" === n && o[n](this)
                }))
            }, t._handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }]), t
        }();
    e(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), e.fn[c] = g._jQueryInterface, e.fn[c].Constructor = g, e.fn[c].noConflict = function() {
        return e.fn[c] = f, g._jQueryInterface
    };
    var _ = "button",
        m = "bs.button",
        p = "." + m,
        v = ".data-api",
        E = e.fn[_],
        y = "active",
        C = '[data-toggle^="button"]',
        T = 'input:not([type="hidden"])',
        b = ".btn",
        S = {
            CLICK_DATA_API: "click" + p + v,
            FOCUS_BLUR_DATA_API: "focus" + p + v + " blur" + p + v,
            LOAD_DATA_API: "load" + p + v
        },
        D = function() {
            function t(t) {
                this._element = t
            }
            var n = t.prototype;
            return n.toggle = function() {
                var t = !0,
                    n = !0,
                    i = e(this._element).closest('[data-toggle="buttons"]')[0];
                if (i) {
                    var o = this._element.querySelector(T);
                    if (o) {
                        if ("radio" === o.type)
                            if (o.checked && this._element.classList.contains(y)) t = !1;
                            else {
                                var r = i.querySelector(".active");
                                r && e(r).removeClass(y)
                            }
                        else "checkbox" === o.type ? "LABEL" === this._element.tagName && o.checked === this._element.classList.contains(y) && (t = !1) : t = !1;
                        t && (o.checked = !this._element.classList.contains(y), e(o).trigger("change")), o.focus(), n = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(y)), t && e(this._element).toggleClass(y))
            }, n.dispose = function() {
                e.removeData(this._element, m), this._element = null
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this).data(m);
                    i || (i = new t(this), e(this).data(m, i)), "toggle" === n && i[n]()
                }))
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }]), t
        }();
    e(document).on(S.CLICK_DATA_API, C, (function(t) {
        var n = t.target;
        if (e(n).hasClass("btn") || (n = e(n).closest(b)[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) t.preventDefault();
        else {
            var i = n.querySelector(T);
            if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void t.preventDefault();
            D._jQueryInterface.call(e(n), "toggle")
        }
    })).on(S.FOCUS_BLUR_DATA_API, C, (function(t) {
        var n = e(t.target).closest(b)[0];
        e(n).toggleClass("focus", /^focus(in)?$/.test(t.type))
    })), e(window).on(S.LOAD_DATA_API, (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
            var i = t[e],
                o = i.querySelector(T);
            o.checked || o.hasAttribute("checked") ? i.classList.add(y) : i.classList.remove(y)
        }
        for (var r = 0, s = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < s; r++) {
            var a = t[r];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add(y) : a.classList.remove(y)
        }
    })), e.fn[_] = D._jQueryInterface, e.fn[_].Constructor = D, e.fn[_].noConflict = function() {
        return e.fn[_] = E, D._jQueryInterface
    };
    var I = "carousel",
        w = "bs.carousel",
        A = "." + w,
        N = ".data-api",
        O = e.fn[I],
        k = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        P = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        L = "next",
        j = "prev",
        H = {
            SLIDE: "slide" + A,
            SLID: "slid" + A,
            KEYDOWN: "keydown" + A,
            MOUSEENTER: "mouseenter" + A,
            MOUSELEAVE: "mouseleave" + A,
            TOUCHSTART: "touchstart" + A,
            TOUCHMOVE: "touchmove" + A,
            TOUCHEND: "touchend" + A,
            POINTERDOWN: "pointerdown" + A,
            POINTERUP: "pointerup" + A,
            DRAG_START: "dragstart" + A,
            LOAD_DATA_API: "load" + A + N,
            CLICK_DATA_API: "click" + A + N
        },
        R = "active",
        x = ".active.carousel-item",
        F = {
            TOUCH: "touch",
            PEN: "pen"
        },
        U = function() {
            function t(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var n = t.prototype;
            return n.next = function() {
                this._isSliding || this._slide(L)
            }, n.nextWhenVisible = function() {
                !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
            }, n.prev = function() {
                this._isSliding || this._slide(j)
            }, n.pause = function(t) {
                t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (l.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, n.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function(t) {
                var n = this;
                this._activeElement = this._element.querySelector(x);
                var i = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) e(this._element).one(H.SLID, (function() {
                        return n.to(t)
                    }));
                    else {
                        if (i === t) return this.pause(), void this.cycle();
                        var o = i < t ? L : j;
                        this._slide(o, this._items[t])
                    }
            }, n.dispose = function() {
                e(this._element).off(A), e.removeData(this._element, w), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, n._getConfig = function(t) {
                return t = s({}, k, {}, t), l.typeCheckConfig(I, t, P), t
            }, n._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    (this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next()
                }
            }, n._addEventListeners = function() {
                var t = this;
                this._config.keyboard && e(this._element).on(H.KEYDOWN, (function(e) {
                    return t._keydown(e)
                })), "hover" === this._config.pause && e(this._element).on(H.MOUSEENTER, (function(e) {
                    return t.pause(e)
                })).on(H.MOUSELEAVE, (function(e) {
                    return t.cycle(e)
                })), this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function() {
                var t = this;
                if (this._touchSupported) {
                    var n = function(e) {
                            t._pointerEvent && F[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                        },
                        i = function(e) {
                            t._pointerEvent && F[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function(e) {
                                return t.cycle(e)
                            }), 500 + t._config.interval))
                        };
                    e(this._element.querySelectorAll(".carousel-item img")).on(H.DRAG_START, (function(t) {
                        return t.preventDefault()
                    })), this._pointerEvent ? (e(this._element).on(H.POINTERDOWN, (function(t) {
                        return n(t)
                    })), e(this._element).on(H.POINTERUP, (function(t) {
                        return i(t)
                    })), this._element.classList.add("pointer-event")) : (e(this._element).on(H.TOUCHSTART, (function(t) {
                        return n(t)
                    })), e(this._element).on(H.TOUCHMOVE, (function(e) {
                        return function(e) {
                            e.originalEvent.touches && 1 < e.originalEvent.touches.length ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX
                        }(e)
                    })), e(this._element).on(H.TOUCHEND, (function(t) {
                        return i(t)
                    })))
                }
            }, n._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, n._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t)
            }, n._getItemByDirection = function(t, e) {
                var n = t === L,
                    i = t === j,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + (t === j ? -1 : 1)) % this._items.length;
                return -1 == s ? this._items[this._items.length - 1] : this._items[s]
            }, n._triggerSlideEvent = function(t, n) {
                var i = this._getItemIndex(t),
                    o = this._getItemIndex(this._element.querySelector(x)),
                    r = e.Event(H.SLIDE, {
                        relatedTarget: t,
                        direction: n,
                        from: o,
                        to: i
                    });
                return e(this._element).trigger(r), r
            }, n._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    e(n).removeClass(R);
                    var i = this._indicatorsElement.children[this._getItemIndex(t)];
                    i && e(i).addClass(R)
                }
            }, n._slide = function(t, n) {
                var i, o, r, s = this,
                    a = this._element.querySelector(x),
                    c = this._getItemIndex(a),
                    h = n || a && this._getItemByDirection(t, a),
                    u = this._getItemIndex(h),
                    f = Boolean(this._interval);
                if (r = t === L ? (i = "carousel-item-left", o = "carousel-item-next", "left") : (i = "carousel-item-right", o = "carousel-item-prev", "right"), h && e(h).hasClass(R)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(h, r).isDefaultPrevented() && a && h) {
                    this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(h);
                    var d = e.Event(H.SLID, {
                        relatedTarget: h,
                        direction: r,
                        from: c,
                        to: u
                    });
                    if (e(this._element).hasClass("slide")) {
                        e(h).addClass(o), l.reflow(h), e(a).addClass(i), e(h).addClass(i);
                        var g = parseInt(h.getAttribute("data-interval"), 10);
                        g ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = g) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var _ = l.getTransitionDurationFromElement(a);
                        e(a).one(l.TRANSITION_END, (function() {
                            e(h).removeClass(i + " " + o).addClass(R), e(a).removeClass(R + " " + o + " " + i), s._isSliding = !1, setTimeout((function() {
                                return e(s._element).trigger(d)
                            }), 0)
                        })).emulateTransitionEnd(_)
                    } else e(a).removeClass(R), e(h).addClass(R), this._isSliding = !1, e(this._element).trigger(d);
                    f && this.cycle()
                }
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this).data(w),
                        o = s({}, k, {}, e(this).data());
                    "object" == typeof n && (o = s({}, o, {}, n));
                    var r = "string" == typeof n ? n : o.slide;
                    if (i || (i = new t(this, o), e(this).data(w, i)), "number" == typeof n) i.to(n);
                    else if ("string" == typeof r) {
                        if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
                        i[r]()
                    } else o.interval && o.ride && (i.pause(), i.cycle())
                }))
            }, t._dataApiClickHandler = function(n) {
                var i = l.getSelectorFromElement(this);
                if (i) {
                    var o = e(i)[0];
                    if (o && e(o).hasClass("carousel")) {
                        var r = s({}, e(o).data(), {}, e(this).data()),
                            a = this.getAttribute("data-slide-to");
                        a && (r.interval = !1), t._jQueryInterface.call(e(o), r), a && e(o).data(w).to(a), n.preventDefault()
                    }
                }
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return k
                }
            }]), t
        }();
    e(document).on(H.CLICK_DATA_API, "[data-slide], [data-slide-to]", U._dataApiClickHandler), e(window).on(H.LOAD_DATA_API, (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = t.length; n < i; n++) {
            var o = e(t[n]);
            U._jQueryInterface.call(o, o.data())
        }
    })), e.fn[I] = U._jQueryInterface, e.fn[I].Constructor = U, e.fn[I].noConflict = function() {
        return e.fn[I] = O, U._jQueryInterface
    };
    var W = "collapse",
        q = "bs.collapse",
        M = "." + q,
        K = e.fn[W],
        Q = {
            toggle: !0,
            parent: ""
        },
        B = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        V = {
            SHOW: "show" + M,
            SHOWN: "shown" + M,
            HIDE: "hide" + M,
            HIDDEN: "hidden" + M,
            CLICK_DATA_API: "click" + M + ".data-api"
        },
        Y = "show",
        z = "collapse",
        X = "collapsing",
        $ = "collapsed",
        G = "width",
        J = '[data-toggle="collapse"]',
        Z = function() {
            function t(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(J)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = l.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter((function(e) {
                            return e === t
                        }));
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var n = t.prototype;
            return n.toggle = function() {
                e(this._element).hasClass(Y) ? this.hide() : this.show()
            }, n.show = function() {
                var n, i, o = this;
                if (!(this._isTransitioning || e(this._element).hasClass(Y) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t) {
                        return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains(z)
                    }))).length && (n = null), n && (i = e(n).not(this._selector).data(q)) && i._isTransitioning))) {
                    var r = e.Event(V.SHOW);
                    if (e(this._element).trigger(r), !r.isDefaultPrevented()) {
                        n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"), i || e(n).data(q, null));
                        var s = this._getDimension();
                        e(this._element).removeClass(z).addClass(X), this._element.style[s] = 0, this._triggerArray.length && e(this._triggerArray).removeClass($).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            c = l.getTransitionDurationFromElement(this._element);
                        e(this._element).one(l.TRANSITION_END, (function() {
                            e(o._element).removeClass(X).addClass(z).addClass(Y), o._element.style[s] = "", o.setTransitioning(!1), e(o._element).trigger(V.SHOWN)
                        })).emulateTransitionEnd(c), this._element.style[s] = this._element[a] + "px"
                    }
                }
            }, n.hide = function() {
                var t = this;
                if (!this._isTransitioning && e(this._element).hasClass(Y)) {
                    var n = e.Event(V.HIDE);
                    if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", l.reflow(this._element), e(this._element).addClass(X).removeClass(z).removeClass(Y);
                        var o = this._triggerArray.length;
                        if (0 < o)
                            for (var r = 0; r < o; r++) {
                                var s = this._triggerArray[r],
                                    a = l.getSelectorFromElement(s);
                                null !== a && (e([].slice.call(document.querySelectorAll(a))).hasClass(Y) || e(s).addClass($).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[i] = "";
                        var c = l.getTransitionDurationFromElement(this._element);
                        e(this._element).one(l.TRANSITION_END, (function() {
                            t.setTransitioning(!1), e(t._element).removeClass(X).addClass(z).trigger(V.HIDDEN)
                        })).emulateTransitionEnd(c)
                    }
                }
            }, n.setTransitioning = function(t) {
                this._isTransitioning = t
            }, n.dispose = function() {
                e.removeData(this._element, q), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, n._getConfig = function(t) {
                return (t = s({}, Q, {}, t)).toggle = Boolean(t.toggle), l.typeCheckConfig(W, t, B), t
            }, n._getDimension = function() {
                return e(this._element).hasClass(G) ? G : "height"
            }, n._getParent = function() {
                var n, i = this;
                l.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    r = [].slice.call(n.querySelectorAll(o));
                return e(r).each((function(e, n) {
                    i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
                })), n
            }, n._addAriaAndCollapsedClass = function(t, n) {
                var i = e(t).hasClass(Y);
                n.length && e(n).toggleClass($, !i).attr("aria-expanded", i)
            }, t._getTargetFromElement = function(t) {
                var e = l.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this),
                        o = i.data(q),
                        r = s({}, Q, {}, i.data(), {}, "object" == typeof n && n ? n : {});
                    if (!o && r.toggle && /show|hide/.test(n) && (r.toggle = !1), o || (o = new t(this, r), i.data(q, o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n]()
                    }
                }))
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Q
                }
            }]), t
        }();
    e(document).on(V.CLICK_DATA_API, J, (function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = e(this),
            i = l.getSelectorFromElement(this),
            o = [].slice.call(document.querySelectorAll(i));
        e(o).each((function() {
            var t = e(this),
                i = t.data(q) ? "toggle" : n.data();
            Z._jQueryInterface.call(t, i)
        }))
    })), e.fn[W] = Z._jQueryInterface, e.fn[W].Constructor = Z, e.fn[W].noConflict = function() {
        return e.fn[W] = K, Z._jQueryInterface
    };
    var tt = "dropdown",
        et = "bs.dropdown",
        nt = "." + et,
        it = ".data-api",
        ot = e.fn[tt],
        rt = new RegExp("38|40|27"),
        st = {
            HIDE: "hide" + nt,
            HIDDEN: "hidden" + nt,
            SHOW: "show" + nt,
            SHOWN: "shown" + nt,
            CLICK: "click" + nt,
            CLICK_DATA_API: "click" + nt + it,
            KEYDOWN_DATA_API: "keydown" + nt + it,
            KEYUP_DATA_API: "keyup" + nt + it
        },
        at = "disabled",
        lt = "show",
        ct = "dropdown-menu-right",
        ht = '[data-toggle="dropdown"]',
        ut = ".dropdown-menu",
        ft = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        dt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        gt = function() {
            function t(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var i = t.prototype;
            return i.toggle = function() {
                if (!this._element.disabled && !e(this._element).hasClass(at)) {
                    var n = e(this._menu).hasClass(lt);
                    t._clearMenus(), n || this.show(!0)
                }
            }, i.show = function(i) {
                if (void 0 === i && (i = !1), !(this._element.disabled || e(this._element).hasClass(at) || e(this._menu).hasClass(lt))) {
                    var o = {
                            relatedTarget: this._element
                        },
                        r = e.Event(st.SHOW, o),
                        s = t._getParentFromElement(this._element);
                    if (e(s).trigger(r), !r.isDefaultPrevented()) {
                        if (!this._inNavbar && i) {
                            if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var a = this._element;
                            "parent" === this._config.reference ? a = s : l.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(s).addClass("position-static"), this._popper = new n(a, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === e(s).closest(".navbar-nav").length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(lt), e(s).toggleClass(lt).trigger(e.Event(st.SHOWN, o))
                    }
                }
            }, i.hide = function() {
                if (!this._element.disabled && !e(this._element).hasClass(at) && e(this._menu).hasClass(lt)) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = e.Event(st.HIDE, n),
                        o = t._getParentFromElement(this._element);
                    e(o).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), e(this._menu).toggleClass(lt), e(o).toggleClass(lt).trigger(e.Event(st.HIDDEN, n)))
                }
            }, i.dispose = function() {
                e.removeData(this._element, et), e(this._element).off(nt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, i.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, i._addEventListeners = function() {
                var t = this;
                e(this._element).on(st.CLICK, (function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                }))
            }, i._getConfig = function(t) {
                return t = s({}, this.constructor.Default, {}, e(this._element).data(), {}, t), l.typeCheckConfig(tt, t, this.constructor.DefaultType), t
            }, i._getMenuElement = function() {
                if (!this._menu) {
                    var e = t._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(ut))
                }
                return this._menu
            }, i._getPlacement = function() {
                var t = e(this._element.parentNode),
                    n = "bottom-start";
                return t.hasClass("dropup") ? (n = "top-start", e(this._menu).hasClass(ct) && (n = "top-end")) : t.hasClass("dropright") ? n = "right-start" : t.hasClass("dropleft") ? n = "left-start" : e(this._menu).hasClass(ct) && (n = "bottom-end"), n
            }, i._detectNavbar = function() {
                return 0 < e(this._element).closest(".navbar").length
            }, i._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = s({}, e.offsets, {}, t._config.offset(e.offsets, t._element) || {}), e
                } : e.offset = this._config.offset, e
            }, i._getPopperConfig = function() {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (t.modifiers.applyStyle = {
                    enabled: !1
                }), s({}, t, {}, this._config.popperConfig)
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this).data(et);
                    if (i || (i = new t(this, "object" == typeof n ? n : null), e(this).data(et, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                }))
            }, t._clearMenus = function(n) {
                if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                    for (var i = [].slice.call(document.querySelectorAll(ht)), o = 0, r = i.length; o < r; o++) {
                        var s = t._getParentFromElement(i[o]),
                            a = e(i[o]).data(et),
                            l = {
                                relatedTarget: i[o]
                            };
                        if (n && "click" === n.type && (l.clickEvent = n), a) {
                            var c = a._menu;
                            if (e(s).hasClass(lt) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && e.contains(s, n.target))) {
                                var h = e.Event(st.HIDE, l);
                                e(s).trigger(h), h.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), i[o].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), e(c).removeClass(lt), e(s).removeClass(lt).trigger(e.Event(st.HIDDEN, l)))
                            }
                        }
                    }
            }, t._getParentFromElement = function(t) {
                var e, n = l.getSelectorFromElement(t);
                return n && (e = document.querySelector(n)), e || t.parentNode
            }, t._dataApiKeydownHandler = function(n) {
                if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || e(n.target).closest(ut).length)) : rt.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !e(this).hasClass(at))) {
                    var i = t._getParentFromElement(this),
                        o = e(i).hasClass(lt);
                    if (o || 27 !== n.which)
                        if (o && (!o || 27 !== n.which && 32 !== n.which)) {
                            var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t) {
                                return e(t).is(":visible")
                            }));
                            if (0 !== r.length) {
                                var s = r.indexOf(n.target);
                                38 === n.which && 0 < s && s--, 40 === n.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
                            }
                        } else {
                            if (27 === n.which) {
                                var a = i.querySelector(ht);
                                e(a).trigger("focus")
                            }
                            e(this).trigger("click")
                        }
                }
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ft
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return dt
                }
            }]), t
        }();
    e(document).on(st.KEYDOWN_DATA_API, ht, gt._dataApiKeydownHandler).on(st.KEYDOWN_DATA_API, ut, gt._dataApiKeydownHandler).on(st.CLICK_DATA_API + " " + st.KEYUP_DATA_API, gt._clearMenus).on(st.CLICK_DATA_API, ht, (function(t) {
        t.preventDefault(), t.stopPropagation(), gt._jQueryInterface.call(e(this), "toggle")
    })).on(st.CLICK_DATA_API, ".dropdown form", (function(t) {
        t.stopPropagation()
    })), e.fn[tt] = gt._jQueryInterface, e.fn[tt].Constructor = gt, e.fn[tt].noConflict = function() {
        return e.fn[tt] = ot, gt._jQueryInterface
    };
    var _t = "modal",
        mt = "bs.modal",
        pt = "." + mt,
        vt = e.fn[_t],
        Et = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        yt = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        Ct = {
            HIDE: "hide" + pt,
            HIDE_PREVENTED: "hidePrevented" + pt,
            HIDDEN: "hidden" + pt,
            SHOW: "show" + pt,
            SHOWN: "shown" + pt,
            FOCUSIN: "focusin" + pt,
            RESIZE: "resize" + pt,
            CLICK_DISMISS: "click.dismiss" + pt,
            KEYDOWN_DISMISS: "keydown.dismiss" + pt,
            MOUSEUP_DISMISS: "mouseup.dismiss" + pt,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + pt,
            CLICK_DATA_API: "click" + pt + ".data-api"
        },
        Tt = "modal-open",
        bt = "fade",
        St = "show",
        Dt = "modal-static",
        It = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        wt = ".sticky-top",
        At = function() {
            function t(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var n = t.prototype;
            return n.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, n.show = function(t) {
                var n = this;
                if (!this._isShown && !this._isTransitioning) {
                    e(this._element).hasClass(bt) && (this._isTransitioning = !0);
                    var i = e.Event(Ct.SHOW, {
                        relatedTarget: t
                    });
                    e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(Ct.CLICK_DISMISS, '[data-dismiss="modal"]', (function(t) {
                        return n.hide(t)
                    })), e(this._dialog).on(Ct.MOUSEDOWN_DISMISS, (function() {
                        e(n._element).one(Ct.MOUSEUP_DISMISS, (function(t) {
                            e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((function() {
                        return n._showElement(t)
                    })))
                }
            }, n.hide = function(t) {
                var n = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                    var i = e.Event(Ct.HIDE);
                    if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var o = e(this._element).hasClass(bt);
                        if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(Ct.FOCUSIN), e(this._element).removeClass(St), e(this._element).off(Ct.CLICK_DISMISS), e(this._dialog).off(Ct.MOUSEDOWN_DISMISS), o) {
                            var r = l.getTransitionDurationFromElement(this._element);
                            e(this._element).one(l.TRANSITION_END, (function(t) {
                                return n._hideModal(t)
                            })).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, n.dispose = function() {
                [window, this._element, this._dialog].forEach((function(t) {
                    return e(t).off(pt)
                })), e(document).off(Ct.FOCUSIN), e.removeData(this._element, mt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, n.handleUpdate = function() {
                this._adjustDialog()
            }, n._getConfig = function(t) {
                return t = s({}, Et, {}, t), l.typeCheckConfig(_t, t, yt), t
            }, n._triggerBackdropTransition = function() {
                var t = this;
                if ("static" === this._config.backdrop) {
                    var n = e.Event(Ct.HIDE_PREVENTED);
                    if (e(this._element).trigger(n), n.defaultPrevented) return;
                    this._element.classList.add(Dt);
                    var i = l.getTransitionDurationFromElement(this._element);
                    e(this._element).one(l.TRANSITION_END, (function() {
                        t._element.classList.remove(Dt)
                    })).emulateTransitionEnd(i), this._element.focus()
                } else this.hide()
            }, n._showElement = function(t) {
                var n = this,
                    i = e(this._element).hasClass(bt),
                    o = this._dialog ? this._dialog.querySelector(".modal-body") : null;

                function r() {
                    n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(s)
                }
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), e(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0, i && l.reflow(this._element), e(this._element).addClass(St), this._config.focus && this._enforceFocus();
                var s = e.Event(Ct.SHOWN, {
                    relatedTarget: t
                });
                if (i) {
                    var a = l.getTransitionDurationFromElement(this._dialog);
                    e(this._dialog).one(l.TRANSITION_END, r).emulateTransitionEnd(a)
                } else r()
            }, n._enforceFocus = function() {
                var t = this;
                e(document).off(Ct.FOCUSIN).on(Ct.FOCUSIN, (function(n) {
                    document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                }))
            }, n._setEscapeEvent = function() {
                var t = this;
                this._isShown && this._config.keyboard ? e(this._element).on(Ct.KEYDOWN_DISMISS, (function(e) {
                    27 === e.which && t._triggerBackdropTransition()
                })) : this._isShown || e(this._element).off(Ct.KEYDOWN_DISMISS)
            }, n._setResizeEvent = function() {
                var t = this;
                this._isShown ? e(window).on(Ct.RESIZE, (function(e) {
                    return t.handleUpdate(e)
                })) : e(window).off(Ct.RESIZE)
            }, n._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function() {
                    e(document.body).removeClass(Tt), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(Ct.HIDDEN)
                }))
            }, n._removeBackdrop = function() {
                this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
            }, n._showBackdrop = function(t) {
                var n = this,
                    i = e(this._element).hasClass(bt) ? bt : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on(Ct.CLICK_DISMISS, (function(t) {
                            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && n._triggerBackdropTransition()
                        })), i && l.reflow(this._backdrop), e(this._backdrop).addClass(St), !t) return;
                    if (!i) return void t();
                    var o = l.getTransitionDurationFromElement(this._backdrop);
                    e(this._backdrop).one(l.TRANSITION_END, t).emulateTransitionEnd(o)
                } else if (!this._isShown && this._backdrop) {
                    e(this._backdrop).removeClass(St);
                    var r = function() {
                        n._removeBackdrop(), t && t()
                    };
                    if (e(this._element).hasClass(bt)) {
                        var s = l.getTransitionDurationFromElement(this._backdrop);
                        e(this._backdrop).one(l.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r()
                } else t && t()
            }, n._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, n._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function() {
                var t = this;
                if (this._isBodyOverflowing) {
                    var n = [].slice.call(document.querySelectorAll(It)),
                        i = [].slice.call(document.querySelectorAll(wt));
                    e(n).each((function(n, i) {
                        var o = i.style.paddingRight,
                            r = e(i).css("padding-right");
                        e(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
                    })), e(i).each((function(n, i) {
                        var o = i.style.marginRight,
                            r = e(i).css("margin-right");
                        e(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
                    }));
                    var o = document.body.style.paddingRight,
                        r = e(document.body).css("padding-right");
                    e(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                }
                e(document.body).addClass(Tt)
            }, n._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(It));
                e(t).each((function(t, n) {
                    var i = e(n).data("padding-right");
                    e(n).removeData("padding-right"), n.style.paddingRight = i || ""
                }));
                var n = [].slice.call(document.querySelectorAll("" + wt));
                e(n).each((function(t, n) {
                    var i = e(n).data("margin-right");
                    void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                }));
                var i = e(document.body).data("padding-right");
                e(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
            }, n._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, t._jQueryInterface = function(n, i) {
                return this.each((function() {
                    var o = e(this).data(mt),
                        r = s({}, Et, {}, e(this).data(), {}, "object" == typeof n && n ? n : {});
                    if (o || (o = new t(this, r), e(this).data(mt, o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n](i)
                    } else r.show && o.show(i)
                }))
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Et
                }
            }]), t
        }();
    e(document).on(Ct.CLICK_DATA_API, '[data-toggle="modal"]', (function(t) {
        var n, i = this,
            o = l.getSelectorFromElement(this);
        o && (n = document.querySelector(o));
        var r = e(n).data(mt) ? "toggle" : s({}, e(n).data(), {}, e(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var a = e(n).one(Ct.SHOW, (function(t) {
            t.isDefaultPrevented() || a.one(Ct.HIDDEN, (function() {
                e(i).is(":visible") && i.focus()
            }))
        }));
        At._jQueryInterface.call(e(n), r, this)
    })), e.fn[_t] = At._jQueryInterface, e.fn[_t].Constructor = At, e.fn[_t].noConflict = function() {
        return e.fn[_t] = vt, At._jQueryInterface
    };
    var Nt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Ot = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        kt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function Pt(t, e, n) {
        if (0 === t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (var i = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), r = [].slice.call(i.body.querySelectorAll("*")), s = function(t) {
                var n = r[t],
                    i = n.nodeName.toLowerCase();
                if (-1 === o.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                var s = [].slice.call(n.attributes),
                    a = [].concat(e["*"] || [], e[i] || []);
                s.forEach((function(t) {
                    ! function(t, e) {
                        var n = t.nodeName.toLowerCase();
                        if (-1 !== e.indexOf(n)) return -1 === Nt.indexOf(n) || Boolean(t.nodeValue.match(Ot) || t.nodeValue.match(kt));
                        for (var i = e.filter((function(t) {
                                return t instanceof RegExp
                            })), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1
                    }(t, a) && n.removeAttribute(t.nodeName)
                }))
            }, a = 0, l = r.length; a < l; a++) s(a);
        return i.body.innerHTML
    }
    var Lt = "tooltip",
        jt = "bs.tooltip",
        Ht = "." + jt,
        Rt = e.fn[Lt],
        xt = "bs-tooltip",
        Ft = new RegExp("(^|\\s)" + xt + "\\S+", "g"),
        Ut = ["sanitize", "whiteList", "sanitizeFn"],
        Wt = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        qt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Mt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        Kt = "show",
        Qt = "out",
        Bt = {
            HIDE: "hide" + Ht,
            HIDDEN: "hidden" + Ht,
            SHOW: "show" + Ht,
            SHOWN: "shown" + Ht,
            INSERTED: "inserted" + Ht,
            CLICK: "click" + Ht,
            FOCUSIN: "focusin" + Ht,
            FOCUSOUT: "focusout" + Ht,
            MOUSEENTER: "mouseenter" + Ht,
            MOUSELEAVE: "mouseleave" + Ht
        },
        Vt = "fade",
        Yt = "show",
        zt = "hover",
        Xt = "focus",
        $t = function() {
            function t(t, e) {
                if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var i = t.prototype;
            return i.enable = function() {
                this._isEnabled = !0
            }, i.disable = function() {
                this._isEnabled = !1
            }, i.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, i.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var n = this.constructor.DATA_KEY,
                            i = e(t.currentTarget).data(n);
                        i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (e(this.getTipElement()).hasClass(Yt)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, i.dispose = function() {
                clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, i.show = function() {
                var t = this;
                if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                var i = e.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    e(this.element).trigger(i);
                    var o = l.findShadowRoot(this.element),
                        r = e.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !r) return;
                    var s = this.getTipElement(),
                        a = l.getUID(this.constructor.NAME);
                    s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(s).addClass(Vt);
                    var c = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                        h = this._getAttachment(c);
                    this.addAttachmentClass(h);
                    var u = this._getContainer();
                    e(s).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(s).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, this._getPopperConfig(h)), e(s).addClass(Yt), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                    var f = function() {
                        t.config.animation && t._fixTransition();
                        var n = t._hoverState;
                        t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === Qt && t._leave(null, t)
                    };
                    if (e(this.tip).hasClass(Vt)) {
                        var d = l.getTransitionDurationFromElement(this.tip);
                        e(this.tip).one(l.TRANSITION_END, f).emulateTransitionEnd(d)
                    } else f()
                }
            }, i.hide = function(t) {
                function n() {
                    i._hoverState !== Kt && o.parentNode && o.parentNode.removeChild(o), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), e(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), t && t()
                }
                var i = this,
                    o = this.getTipElement(),
                    r = e.Event(this.constructor.Event.HIDE);
                if (e(this.element).trigger(r), !r.isDefaultPrevented()) {
                    if (e(o).removeClass(Yt), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger[Xt] = !1, this._activeTrigger[zt] = !1, e(this.tip).hasClass(Vt)) {
                        var s = l.getTransitionDurationFromElement(o);
                        e(o).one(l.TRANSITION_END, n).emulateTransitionEnd(s)
                    } else n();
                    this._hoverState = ""
                }
            }, i.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, i.isWithContent = function() {
                return Boolean(this.getTitle())
            }, i.addAttachmentClass = function(t) {
                e(this.getTipElement()).addClass(xt + "-" + t)
            }, i.getTipElement = function() {
                return this.tip = this.tip || e(this.config.template)[0], this.tip
            }, i.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()), e(t).removeClass(Vt + " " + Yt)
            }, i.setElementContent = function(t, n) {
                "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Pt(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())
            }, i.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
            }, i._getPopperConfig = function(t) {
                var e = this;
                return s({}, {
                    placement: t,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function(t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }, {}, this.config.popperConfig)
            }, i._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this.config.offset ? e.fn = function(e) {
                    return e.offsets = s({}, e.offsets, {}, t.config.offset(e.offsets, t.element) || {}), e
                } : e.offset = this.config.offset, e
            }, i._getContainer = function() {
                return !1 === this.config.container ? document.body : l.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
            }, i._getAttachment = function(t) {
                return qt[t.toUpperCase()]
            }, i._setListeners = function() {
                var t = this;
                this.config.trigger.split(" ").forEach((function(n) {
                    if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function(e) {
                        return t.toggle(e)
                    }));
                    else if ("manual" !== n) {
                        var i = n === zt ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            o = n === zt ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        e(t.element).on(i, t.config.selector, (function(e) {
                            return t._enter(e)
                        })).on(o, t.config.selector, (function(e) {
                            return t._leave(e)
                        }))
                    }
                })), this._hideModalHandler = function() {
                    t.element && t.hide()
                }, e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, i._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                !this.element.getAttribute("title") && "string" == t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, i._enter = function(t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? Xt : zt] = !0), e(n.getTipElement()).hasClass(Yt) || n._hoverState === Kt ? n._hoverState = Kt : (clearTimeout(n._timeout), n._hoverState = Kt, n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function() {
                    n._hoverState === Kt && n.show()
                }), n.config.delay.show) : n.show())
            }, i._leave = function(t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? Xt : zt] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = Qt, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function() {
                    n._hoverState === Qt && n.hide()
                }), n.config.delay.hide) : n.hide())
            }, i._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, i._getConfig = function(t) {
                var n = e(this.element).data();
                return Object.keys(n).forEach((function(t) {
                    -1 !== Ut.indexOf(t) && delete n[t]
                })), "number" == typeof(t = s({}, this.constructor.Default, {}, n, {}, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l.typeCheckConfig(Lt, t, this.constructor.DefaultType), t.sanitize && (t.template = Pt(t.template, t.whiteList, t.sanitizeFn)), t
            }, i._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, i._cleanTipClass = function() {
                var t = e(this.getTipElement()),
                    n = t.attr("class").match(Ft);
                null !== n && n.length && t.removeClass(n.join(""))
            }, i._handlePopperPlacementChange = function(t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, i._fixTransition = function() {
                var t = this.getTipElement(),
                    n = this.config.animation;
                null === t.getAttribute("x-placement") && (e(t).removeClass(Vt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this).data(jt),
                        o = "object" == typeof n && n;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new t(this, o), e(this).data(jt, i)), "string" == typeof n)) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                }))
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Mt
                }
            }, {
                key: "NAME",
                get: function() {
                    return Lt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return jt
                }
            }, {
                key: "Event",
                get: function() {
                    return Bt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Ht
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Wt
                }
            }]), t
        }();
    e.fn[Lt] = $t._jQueryInterface, e.fn[Lt].Constructor = $t, e.fn[Lt].noConflict = function() {
        return e.fn[Lt] = Rt, $t._jQueryInterface
    };
    var Gt = "popover",
        Jt = "bs.popover",
        Zt = "." + Jt,
        te = e.fn[Gt],
        ee = "bs-popover",
        ne = new RegExp("(^|\\s)" + ee + "\\S+", "g"),
        ie = s({}, $t.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        oe = s({}, $t.DefaultType, {
            content: "(string|element|function)"
        }),
        re = {
            HIDE: "hide" + Zt,
            HIDDEN: "hidden" + Zt,
            SHOW: "show" + Zt,
            SHOWN: "shown" + Zt,
            INSERTED: "inserted" + Zt,
            CLICK: "click" + Zt,
            FOCUSIN: "focusin" + Zt,
            FOCUSOUT: "focusout" + Zt,
            MOUSEENTER: "mouseenter" + Zt,
            MOUSELEAVE: "mouseleave" + Zt
        },
        se = function(t) {
            function n() {
                return t.apply(this, arguments) || this
            }! function(t, e) {
                t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
            }(n, t);
            var i = n.prototype;
            return i.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, i.addAttachmentClass = function(t) {
                e(this.getTipElement()).addClass(ee + "-" + t)
            }, i.getTipElement = function() {
                return this.tip = this.tip || e(this.config.template)[0], this.tip
            }, i.setContent = function() {
                var t = e(this.getTipElement());
                this.setElementContent(t.find(".popover-header"), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show")
            }, i._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, i._cleanTipClass = function() {
                var t = e(this.getTipElement()),
                    n = t.attr("class").match(ne);
                null !== n && 0 < n.length && t.removeClass(n.join(""))
            }, n._jQueryInterface = function(t) {
                return this.each((function() {
                    var i = e(this).data(Jt),
                        o = "object" == typeof t ? t : null;
                    if ((i || !/dispose|hide/.test(t)) && (i || (i = new n(this, o), e(this).data(Jt, i)), "string" == typeof t)) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                }))
            }, o(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ie
                }
            }, {
                key: "NAME",
                get: function() {
                    return Gt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Jt
                }
            }, {
                key: "Event",
                get: function() {
                    return re
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Zt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return oe
                }
            }]), n
        }($t);
    e.fn[Gt] = se._jQueryInterface, e.fn[Gt].Constructor = se, e.fn[Gt].noConflict = function() {
        return e.fn[Gt] = te, se._jQueryInterface
    };
    var ae = "scrollspy",
        le = "bs.scrollspy",
        ce = "." + le,
        he = e.fn[ae],
        ue = {
            offset: 10,
            method: "auto",
            target: ""
        },
        fe = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        de = {
            ACTIVATE: "activate" + ce,
            SCROLL: "scroll" + ce,
            LOAD_DATA_API: "load" + ce + ".data-api"
        },
        ge = "active",
        _e = ".nav, .list-group",
        me = ".nav-link",
        pe = ".list-group-item",
        ve = "position",
        Ee = function() {
            function t(t, n) {
                var i = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + me + "," + this._config.target + " " + pe + "," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(de.SCROLL, (function(t) {
                    return i._process(t)
                })), this.refresh(), this._process()
            }
            var n = t.prototype;
            return n.refresh = function() {
                var t = this,
                    n = this._scrollElement === this._scrollElement.window ? "offset" : ve,
                    i = "auto" === this._config.method ? n : this._config.method,
                    o = i === ve ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(t) {
                    var n, r = l.getSelectorFromElement(t);
                    if (r && (n = document.querySelector(r)), n) {
                        var s = n.getBoundingClientRect();
                        if (s.width || s.height) return [e(n)[i]().top + o, r]
                    }
                    return null
                })).filter((function(t) {
                    return t
                })).sort((function(t, e) {
                    return t[0] - e[0]
                })).forEach((function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                }))
            }, n.dispose = function() {
                e.removeData(this._element, le), e(this._scrollElement).off(ce), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, n._getConfig = function(t) {
                if ("string" != typeof(t = s({}, ue, {}, "object" == typeof t && t ? t : {})).target) {
                    var n = e(t.target).attr("id");
                    n || (n = l.getUID(ae), e(t.target).attr("id", n)), t.target = "#" + n
                }
                return l.typeCheckConfig(ae, t, fe), t
            }, n._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }, n._activate = function(t) {
                this._activeTarget = t, this._clear();
                var n = this._selector.split(",").map((function(e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    })),
                    i = e([].slice.call(document.querySelectorAll(n.join(","))));
                i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(ge), i.addClass(ge)) : (i.addClass(ge), i.parents(_e).prev(me + ", " + pe).addClass(ge), i.parents(_e).prev(".nav-item").children(me).addClass(ge)), e(this._scrollElement).trigger(de.ACTIVATE, {
                    relatedTarget: t
                })
            }, n._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter((function(t) {
                    return t.classList.contains(ge)
                })).forEach((function(t) {
                    return t.classList.remove(ge)
                }))
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this).data(le);
                    if (i || (i = new t(this, "object" == typeof n && n), e(this).data(le, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                }))
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ue
                }
            }]), t
        }();
    e(window).on(de.LOAD_DATA_API, (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = t.length; n--;) {
            var i = e(t[n]);
            Ee._jQueryInterface.call(i, i.data())
        }
    })), e.fn[ae] = Ee._jQueryInterface, e.fn[ae].Constructor = Ee, e.fn[ae].noConflict = function() {
        return e.fn[ae] = he, Ee._jQueryInterface
    };
    var ye = "bs.tab",
        Ce = "." + ye,
        Te = e.fn.tab,
        be = {
            HIDE: "hide" + Ce,
            HIDDEN: "hidden" + Ce,
            SHOW: "show" + Ce,
            SHOWN: "shown" + Ce,
            CLICK_DATA_API: "click" + Ce + ".data-api"
        },
        Se = "active",
        De = "fade",
        Ie = "show",
        we = ".active",
        Ae = "> li > .active",
        Ne = function() {
            function t(t) {
                this._element = t
            }
            var n = t.prototype;
            return n.show = function() {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(Se) || e(this._element).hasClass("disabled"))) {
                    var n, i, o = e(this._element).closest(".nav, .list-group")[0],
                        r = l.getSelectorFromElement(this._element);
                    if (o) {
                        var s = "UL" === o.nodeName || "OL" === o.nodeName ? Ae : we;
                        i = (i = e.makeArray(e(o).find(s)))[i.length - 1]
                    }
                    var a = e.Event(be.HIDE, {
                            relatedTarget: this._element
                        }),
                        c = e.Event(be.SHOW, {
                            relatedTarget: i
                        });
                    if (i && e(i).trigger(a), e(this._element).trigger(c), !c.isDefaultPrevented() && !a.isDefaultPrevented()) {
                        r && (n = document.querySelector(r)), this._activate(this._element, o);
                        var h = function() {
                            var n = e.Event(be.HIDDEN, {
                                    relatedTarget: t._element
                                }),
                                o = e.Event(be.SHOWN, {
                                    relatedTarget: i
                                });
                            e(i).trigger(n), e(t._element).trigger(o)
                        };
                        n ? this._activate(n, n.parentNode, h) : h()
                    }
                }
            }, n.dispose = function() {
                e.removeData(this._element, ye), this._element = null
            }, n._activate = function(t, n, i) {
                function o() {
                    return r._transitionComplete(t, s, i)
                }
                var r = this,
                    s = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? e(n).children(we) : e(n).find(Ae))[0],
                    a = i && s && e(s).hasClass(De);
                if (s && a) {
                    var c = l.getTransitionDurationFromElement(s);
                    e(s).removeClass(Ie).one(l.TRANSITION_END, o).emulateTransitionEnd(c)
                } else o()
            }, n._transitionComplete = function(t, n, i) {
                if (n) {
                    e(n).removeClass(Se);
                    var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
                    o && e(o).removeClass(Se), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (e(t).addClass(Se), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), l.reflow(t), t.classList.contains(De) && t.classList.add(Ie), t.parentNode && e(t.parentNode).hasClass("dropdown-menu")) {
                    var r = e(t).closest(".dropdown")[0];
                    if (r) {
                        var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                        e(s).addClass(Se)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this),
                        o = i.data(ye);
                    if (o || (o = new t(this), i.data(ye, o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n]()
                    }
                }))
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }]), t
        }();
    e(document).on(be.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(t) {
        t.preventDefault(), Ne._jQueryInterface.call(e(this), "show")
    })), e.fn.tab = Ne._jQueryInterface, e.fn.tab.Constructor = Ne, e.fn.tab.noConflict = function() {
        return e.fn.tab = Te, Ne._jQueryInterface
    };
    var Oe = "toast",
        ke = "bs.toast",
        Pe = "." + ke,
        Le = e.fn[Oe],
        je = {
            CLICK_DISMISS: "click.dismiss" + Pe,
            HIDE: "hide" + Pe,
            HIDDEN: "hidden" + Pe,
            SHOW: "show" + Pe,
            SHOWN: "shown" + Pe
        },
        He = "hide",
        Re = "show",
        xe = "showing",
        Fe = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Ue = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        We = function() {
            function t(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
            }
            var n = t.prototype;
            return n.show = function() {
                var t = this,
                    n = e.Event(je.SHOW);
                if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                    this._config.animation && this._element.classList.add("fade");
                    var i = function() {
                        t._element.classList.remove(xe), t._element.classList.add(Re), e(t._element).trigger(je.SHOWN), t._config.autohide && (t._timeout = setTimeout((function() {
                            t.hide()
                        }), t._config.delay))
                    };
                    if (this._element.classList.remove(He), l.reflow(this._element), this._element.classList.add(xe), this._config.animation) {
                        var o = l.getTransitionDurationFromElement(this._element);
                        e(this._element).one(l.TRANSITION_END, i).emulateTransitionEnd(o)
                    } else i()
                }
            }, n.hide = function() {
                if (this._element.classList.contains(Re)) {
                    var t = e.Event(je.HIDE);
                    e(this._element).trigger(t), t.isDefaultPrevented() || this._close()
                }
            }, n.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Re) && this._element.classList.remove(Re), e(this._element).off(je.CLICK_DISMISS), e.removeData(this._element, ke), this._element = null, this._config = null
            }, n._getConfig = function(t) {
                return t = s({}, Ue, {}, e(this._element).data(), {}, "object" == typeof t && t ? t : {}), l.typeCheckConfig(Oe, t, this.constructor.DefaultType), t
            }, n._setListeners = function() {
                var t = this;
                e(this._element).on(je.CLICK_DISMISS, '[data-dismiss="toast"]', (function() {
                    return t.hide()
                }))
            }, n._close = function() {
                function t() {
                    n._element.classList.add(He), e(n._element).trigger(je.HIDDEN)
                }
                var n = this;
                if (this._element.classList.remove(Re), this._config.animation) {
                    var i = l.getTransitionDurationFromElement(this._element);
                    e(this._element).one(l.TRANSITION_END, t).emulateTransitionEnd(i)
                } else t()
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this),
                        o = i.data(ke);
                    if (o || (o = new t(this, "object" == typeof n && n), i.data(ke, o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n](this)
                    }
                }))
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Fe
                }
            }, {
                key: "Default",
                get: function() {
                    return Ue
                }
            }]), t
        }();
    e.fn[Oe] = We._jQueryInterface, e.fn[Oe].Constructor = We, e.fn[Oe].noConflict = function() {
        return e.fn[Oe] = Le, We._jQueryInterface
    }, t.Alert = g, t.Button = D, t.Carousel = U, t.Collapse = Z, t.Dropdown = gt, t.Modal = At, t.Popover = se, t.Scrollspy = Ee, t.Tab = Ne, t.Toast = We, t.Tooltip = $t, t.Util = l, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}));

// Owl Carousel v2.3.4
! function(t, e, i, s) {
    function n(e, i) {
        this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, t.each(["onResize", "onThrottledResize"], t.proxy((function(e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        }), this)), t.each(n.Plugins, t.proxy((function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }), this)), t.each(n.Workers, t.proxy((function(e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        }), this)), this.setup(), this.initialize()
    }
    n.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, n.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, n.Type = {
        Event: "event",
        State: "state"
    }, n.Plugins = {}, n.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                s = this.settings.rtl,
                n = {
                    width: "auto",
                    "margin-left": s ? e : "",
                    "margin-right": s ? "" : e
                };
            !i && this.$stage.children().css(n), t.css = n
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                s = this._items.length,
                n = !this.settings.autoWidth,
                o = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; s--;) i = this._mergers[s], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[s] = n ? e * i : this._items[s].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
                i = this._items,
                s = this.settings,
                n = Math.max(2 * s.items, 4),
                o = 2 * Math.ceil(i.length / 2),
                r = s.loop && i.length ? s.rewind ? n : Math.max(n, o) : 0,
                a = "",
                h = "";
            for (r /= 2; r > 0;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), h = i[e[e.length - 1]][0].outerHTML + h, r -= 1;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(h).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, n = 0, o = []; ++i < e;) s = o[i - 1] || 0, n = this._widths[this.relative(i)] + this.settings.margin, o.push(s + n * t);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                s = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], s.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, s.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, s, n = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o,
                a = r + this.width() * n,
                h = [];
            for (i = 0, s = this._coordinates.length; i < s; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], n.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(t("<div/>", {
            class: this.settings.stageOuterClass
        })), this.$element.append(this.$stage.parent()))
    }, n.prototype.initializeItems = function() {
        var e = this.$element.find(".owl-item");
        if (e.length) return this._items = e.get().map((function(e) {
            return t(e)
        })), this._mergers = this._items.map((function() {
            return 1
        })), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, n.prototype.initialize = function() {
        var t, e, i;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, n.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, n.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            s = -1,
            n = null;
        i ? (t.each(i, (function(t) {
            t <= e && t > s && (s = Number(t))
        })), "function" == typeof(n = t.extend({}, this.options, i[s])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + s))) : n = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: n
            }
        }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, n.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, n.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, n.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, s = t.proxy((function(t) {
                return this[t]
            }), this._invalidated), n = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, n.prototype.width = function(t) {
        switch (t = t || n.Width.Default) {
            case n.Width.Inner:
            case n.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, n.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, n.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, n.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, n.prototype.registerEventHandlers = function() {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", (function() {
            return !1
        }))), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, n.prototype.onDragStart = function(e) {
        var s = null;
        3 !== e.which && (t.support.transform ? s = {
            x: (s = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === s.length ? 12 : 4],
            y: s[16 === s.length ? 13 : 5]
        } : (s = this.$stage.position(), s = {
            x: this.settings.rtl ? s.left + this.$stage.width() - this.width() + this.settings.margin : s.left,
            y: s.top
        }), this.is("animating") && (t.support.transform ? this.animate(s.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = s, this._drag.stage.current = s, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy((function(e) {
            var s = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(s.x) < Math.abs(s.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }), this)))
    }, n.prototype.onDragMove = function(t) {
        var e = null,
            i = null,
            s = null,
            n = this.difference(this._drag.pointer, this.pointer(t)),
            o = this.difference(this._drag.stage.start, n);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), s = this.settings.pullDrag ? -1 * n.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + s), i + s)), this._drag.stage.current = o, this.animate(o.x))
    }, n.prototype.onDragEnd = function(e) {
        var s = this.difference(this._drag.pointer, this.pointer(e)),
            n = this._drag.stage.current,
            o = s.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== s.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== s.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(s.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", (function() {
            return !1
        }))), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, n.prototype.closest = function(e, i) {
        var n = -1,
            o = this.width(),
            r = this.coordinates();
        return this.settings.freeDrag || t.each(r, t.proxy((function(t, a) {
            return "left" === i && e > a - 30 && e < a + 30 ? n = t : "right" === i && e > a - o - 30 && e < a - o + 30 ? n = t + 1 : this.op(e, "<", a) && this.op(e, ">", r[t + 1] !== s ? r[t + 1] : a - o) && (n = "left" === i ? t + 1 : t), -1 === n
        }), this)), this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (n = e = this.maximum())), n
    }, n.prototype.animate = function(e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : i ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, n.prototype.is = function(t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, n.prototype.current = function(t) {
        if (t === s) return this._current;
        if (0 === this._items.length) return s;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, n.prototype.invalidate = function(e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, (function(t, e) {
            return e
        }))
    }, n.prototype.reset = function(t) {
        (t = this.normalize(t)) !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, n.prototype.normalize = function(t, e) {
        var i = this._items.length,
            n = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = s : (t < 0 || t >= i + n) && (t = ((t - n / 2) % i + i) % i + n / 2), t
    }, n.prototype.relative = function(t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, n.prototype.maximum = function(t) {
        var e, i, s, n = this.settings,
            o = this._coordinates.length;
        if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
        else if (n.autoWidth || n.merge) {
            if (e = this._items.length)
                for (i = this._items[--e].width(), s = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > s););
            o = e + 1
        } else o = n.center ? this._items.length - 1 : this._items.length - n.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0)
    }, n.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, n.prototype.items = function(t) {
        return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, n.prototype.mergers = function(t) {
        return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, n.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            n = i + this._items.length,
            o = function(t) {
                return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2
            };
        return e === s ? t.map(this._clones, (function(t, e) {
            return o(e)
        })) : t.map(this._clones, (function(t, i) {
            return t === e ? o(i) : null
        }))
    }, n.prototype.speed = function(t) {
        return t !== s && (this._speed = t), this._speed
    }, n.prototype.coordinates = function(e) {
        var i, n = 1,
            o = e - 1;
        return e === s ? t.map(this._coordinates, t.proxy((function(t, e) {
            return this.coordinates(e)
        }), this)) : (this.settings.center ? (this.settings.rtl && (n = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * n) : i = this._coordinates[o] || 0, i = Math.ceil(i))
    }, n.prototype.duration = function(t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, n.prototype.to = function(t, e) {
        var i = this.current(),
            s = null,
            n = t - this.relative(i),
            o = (n > 0) - (n < 0),
            r = this._items.length,
            a = this.minimum(),
            h = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r), (s = (((t = i + n) - a) % r + r) % r + a) !== t && s - n <= h && s - n > 0 && (i = s - n, t = s, this.reset(i))) : this.settings.rewind ? t = (t % (h += 1) + h) % h : t = Math.max(a, Math.min(h, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
    }, n.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, n.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, n.prototype.onTransitionEnd = function(t) {
        if (t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, n.prototype.viewport = function() {
        var s;
        return this.options.responsiveBaseElement !== e ? s = t(this.options.responsiveBaseElement).width() : e.innerWidth ? s = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? s = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), s
    }, n.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter((function() {
            return 1 === this.nodeType
        })).each(t.proxy((function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }), this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, n.prototype.add = function(e, i) {
        var n = this.relative(this._current);
        i = i === s ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: i
        }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: i
        })
    }, n.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== s && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, n.prototype.preloadAutoWidthImages = function(e) {
        e.each(t.proxy((function(e, i) {
            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy((function(t) {
                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }), this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }), this))
    }, n.prototype.destroy = function() {
        for (var s in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[s].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, n.prototype.op = function(t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
            case "<":
                return s ? t > i : t < i;
            case ">":
                return s ? t < i : t > i;
            case ">=":
                return s ? t <= i : t >= i;
            case "<=":
                return s ? t >= i : t <= i
        }
    }, n.prototype.on = function(t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, n.prototype.off = function(t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, n.prototype.trigger = function(e, i, s, o, r) {
        var a = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            h = t.camelCase(t.grep(["on", e, s], (function(t) {
                return t
            })).join("-").toLowerCase()),
            l = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, a, i));
        return this._supress[e] || (t.each(this._plugins, (function(t, e) {
            e.onTrigger && e.onTrigger(l)
        })), this.register({
            type: n.Type.Event,
            name: e
        }), this.$element.trigger(l), this.settings && "function" == typeof this.settings[h] && this.settings[h].call(this, l)), l
    }, n.prototype.enter = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy((function(t, e) {
            this._states.current[e] === s && (this._states.current[e] = 0), this._states.current[e]++
        }), this))
    }, n.prototype.leave = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy((function(t, e) {
            this._states.current[e]--
        }), this))
    }, n.prototype.register = function(e) {
        if (e.type === n.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function(t) {
                    return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === n.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy((function(i, s) {
            return t.inArray(i, this._states.tags[e.name]) === s
        }), this)))
    }, n.prototype.suppress = function(e) {
        t.each(e, t.proxy((function(t, e) {
            this._supress[e] = !0
        }), this))
    }, n.prototype.release = function(e) {
        t.each(e, t.proxy((function(t, e) {
            delete this._supress[e]
        }), this))
    }, n.prototype.pointer = function(t) {
        var i = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, n.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }, n.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, t.fn.owlCarousel = function(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each((function() {
            var s = t(this),
                o = s.data("owl.carousel");
            o || (o = new n(this, "object" == typeof e && e), s.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], (function(e, i) {
                o.register({
                    type: n.Type.Event,
                    name: i
                }), o.$element.on(i + ".owl.carousel.core", t.proxy((function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }), o))
            }))), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i)
        }))
    }, t.fn.owlCarousel.Constructor = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }), this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, n.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, n.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, n.prototype.destroy = function() {
        var t, i;
        for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy((function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                    var i = this._core.settings,
                        s = i.center && Math.ceil(i.items / 2) || i.items,
                        n = i.center && -1 * s || 0,
                        o = (e.property && undefined !== e.property.value ? e.property.value : this._core.current()) + n,
                        r = this._core.clones().length,
                        a = t.proxy((function(t, e) {
                            this.load(e)
                        }), this);
                    for (i.lazyLoadEager > 0 && (s += i.lazyLoadEager, i.loop && (o -= i.lazyLoadEager, s++)); n++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o)), a), o++
                }
            }), this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }, n.prototype.load = function(i) {
        var s = this._core.$stage.children().eq(i),
            n = s && s.find(".owl-lazy");
        !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy((function(i, s) {
            var n, o = t(s),
                r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src") || o.attr("data-srcset");
            this._core.trigger("load", {
                element: o,
                url: r
            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy((function() {
                o.css("opacity", 1), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }), this)).attr("src", r) : o.is("source") ? o.one("load.owl.lazy", t.proxy((function() {
                this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }), this)).attr("srcset", r) : ((n = new Image).onload = t.proxy((function() {
                o.css({
                    "background-image": 'url("' + r + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }), this), n.src = r)
        }), this)), this._loaded.push(s.get(0)))
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(i) {
        this._core = i, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }), this),
            "changed.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }), this),
            "loaded.owl.lazy": t.proxy((function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }), this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var s = this;
        t(e).on("load", (function() {
            s._core.settings.autoHeight && s.update()
        })), t(e).resize((function() {
            s._core.settings.autoHeight && (null != s._intervalId && clearTimeout(s._intervalId), s._intervalId = setTimeout((function() {
                s.update()
            }), 250))
        }))
    };
    n.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, n.prototype.update = function() {
        var e = this._core._current,
            i = e + this._core.settings.items,
            s = this._core.settings.lazyLoad,
            n = this._core.$stage.children().toArray().slice(e, i),
            o = [],
            r = 0;
        t.each(n, (function(e, i) {
            o.push(t(i).height())
        })), (r = Math.max.apply(null, o)) <= 1 && s && this._previousHeight && (r = this._previousHeight), this._previousHeight = r, this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }), this),
            "resize.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }), this),
            "refreshed.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }), this),
            "changed.owl.carousel": t.proxy((function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }), this),
            "prepared.owl.carousel": t.proxy((function(e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            }), this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy((function(t) {
            this.play(t)
        }), this))
    };
    n.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, n.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            n = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if ((s = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
        else if (s[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
            if (!(s[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        s = s[6], this._videos[r] = {
            type: i,
            id: s,
            width: n,
            height: o
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, n.prototype.thumbnail = function(e, i) {
        var s, n, o = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
            r = e.find("img"),
            a = "src",
            h = "",
            l = this._core.settings,
            c = function(i) {
                '<div class="owl-video-play-icon"></div>',
                s = l.lazyLoad ? t("<div/>", {
                    class: "owl-video-tn " + h,
                    srcType: i
                }) : t("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + i + ")"
                }),
                e.after(s),
                e.after('<div class="owl-video-play-icon"></div>')
            };
        if (e.wrap(t("<div/>", {
                class: "owl-video-wrapper",
                style: o
            })), this._core.settings.lazyLoad && (a = "data-src", h = "owl-lazy"), r.length) return c(r.attr(a)), r.remove(), !1;
        "youtube" === i.type ? (n = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", c(n)) : "vimeo" === i.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                n = t[0].thumbnail_large, c(n)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                n = t.framegrab_url, c(n)
            }
        })
    }, n.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, n.prototype.play = function(e) {
        var i, s = t(e.target).closest("." + this._core.settings.itemClass),
            n = this._videos[s.attr("data-video")],
            o = n.width || "100%",
            r = n.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), s = this._core.items(this._core.relative(s.index())), this._core.reset(s.index()), (i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", r), i.attr("width", o), "youtube" === n.type ? i.attr("src", "//www.youtube.com/embed/" + n.id + "?autoplay=1&rel=0&v=" + n.id) : "vimeo" === n.type ? i.attr("src", "//player.vimeo.com/video/" + n.id + "?autoplay=1") : "vzaar" === n.type && i.attr("src", "//view.vzaar.com/" + n.id + "/player?autoplay=true"), t(i).wrap('<div class="owl-video-frame" />').insertAfter(s.find(".owl-video")), this._playing = s.addClass("owl-video-playing"))
    }, n.prototype.isInFullScreen = function() {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = {
            "change.owl.carousel": t.proxy((function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }), this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy((function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }), this),
            "translate.owl.carousel": t.proxy((function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }), this)
        }, this.core.$element.on(this.handlers)
    };
    n.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, n.prototype.swap = function() {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                s = this.core.$stage.children().eq(this.previous),
                n = this.core.$stage.children().eq(this.next),
                o = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.one(t.support.animation.end, i).css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(r)), o && n.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
        }
    }, n.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": t.proxy((function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }), this),
            "initialized.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }), this),
            "play.owl.autoplay": t.proxy((function(t, e, i) {
                t.namespace && this.play(e, i)
            }), this),
            "stop.owl.autoplay": t.proxy((function(t) {
                t.namespace && this.stop()
            }), this),
            "mouseover.owl.autoplay": t.proxy((function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }), this),
            "mouseleave.owl.autoplay": t.proxy((function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }), this),
            "touchstart.owl.core": t.proxy((function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }), this),
            "touchend.owl.core": t.proxy((function() {
                this._core.settings.autoplayHoverPause && this.play()
            }), this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, n.Defaults, this._core.options)
    };
    n.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, n.prototype._next = function(s) {
        this._call = e.setTimeout(t.proxy(this._next, this, s), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(s || this._core.settings.autoplaySpeed)
    }, n.prototype.read = function() {
        return (new Date).getTime() - this._time
    }, n.prototype.play = function(i, s) {
        var n;
        this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, n = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - n, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, s), i - n)
    }, n.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
    }, n.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    "use strict";
    var n = function(e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy((function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }), this),
            "added.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }), this),
            "remove.owl.carousel": t.proxy((function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }), this),
            "changed.owl.carousel": t.proxy((function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }), this),
            "initialized.owl.carousel": t.proxy((function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }), this),
            "refreshed.owl.carousel": t.proxy((function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }), this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    n.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, n.prototype.initialize = function() {
        var e, i = this._core.settings;
        for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy((function(t) {
                this.prev(i.navSpeed)
            }), this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy((function(t) {
                this.next(i.navSpeed)
            }), this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy((function(e) {
                var s = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(s, i.dotsSpeed)
            }), this)), this._overrides) this._core[e] = t.proxy(this[e], this)
    }, n.prototype.destroy = function() {
        var t, e, i, s, n;
        for (t in n = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) "$relative" === e && n.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, n.prototype.update = function() {
        var t, e, i = this._core.clones().length / 2,
            s = i + this._core.items().length,
            n = this._core.maximum(!0),
            o = this._core.settings,
            r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
            for (this._pages = [], t = i, e = 0, 0; t < s; t++) {
                if (e >= r || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(n, t - i),
                            end: t - i + r - 1
                        }), Math.min(n, t - i) === n) break;
                    e = 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, n.prototype.draw = function() {
        var e, i = this._core.settings,
            s = this._core.items().length <= i.items,
            n = this._core.relative(this._core.current()),
            o = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || s), i.nav && (this._controls.$previous.toggleClass("disabled", !o && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || s), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, n.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, n.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy((function(t, i) {
            return t.start <= e && t.end >= e
        }), this)).pop()
    }, n.prototype.getPosition = function(e) {
        var i, s, n = this._core.settings;
        return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
    }, n.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, n.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, n.prototype.to = function(e, i, s) {
        var n;
        !s && this._pages.length ? (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    "use strict";
    var n = function(i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy((function(i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }), this),
            "prepared.owl.carousel": t.proxy((function(e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = e.content
                }
            }), this),
            "changed.owl.carousel": t.proxy((function(i) {
                if (i.namespace && "position" === i.property.name) {
                    var s = this._core.items(this._core.relative(this._core.current())),
                        n = t.map(this._hashes, (function(t, e) {
                            return t === s ? e : null
                        })).join();
                    if (!n || e.location.hash.slice(1) === n) return;
                    e.location.hash = n
                }
            }), this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy((function(t) {
            var i = e.location.hash.substring(1),
                s = this._core.$stage.children(),
                n = this._hashes[i] && s.index(this._hashes[i]);
            undefined !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
        }), this))
    };
    n.Defaults = {
        URLhashListener: !1
    }, n.prototype.destroy = function() {
        var i, s;
        for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    function n(e, i) {
        var s = !1,
            n = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(n + " ") + n).split(" "), (function(t, e) {
            if (undefined !== r[e]) return s = !i || e, !1
        })), s
    }

    function o(t) {
        return n(t, !0)
    }
    var r = t("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        h = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        l = function() {
            return !!n("transform")
        },
        c = function() {
            return !!n("perspective")
        },
        p = function() {
            return !!n("animation")
        };
    (function() {
        return !!n("transition")
    })() && (t.support.transition = new String(o("transition")), t.support.transition.end = h.transition.end[t.support.transition]), p() && (t.support.animation = new String(o("animation")), t.support.animation.end = h.animation.end[t.support.animation]), l() && (t.support.transform = new String(o("transform")), t.support.transform3d = c())
}(window.Zepto || window.jQuery, window, document);