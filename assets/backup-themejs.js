// # theme.js created on 24.02.23

(() => {
    var e = Object.defineProperty,
        t = (t, i, s) => (i in t ? e(t, i, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (t[i] = s)),
        i = (e, i, s) => (t(e, "symbol" != typeof i ? i + "" : i, s), s);
    function s(e) {
        (this.listenerMap = [{}, {}]), e && this.root(e), (this.handle = s.prototype.handle.bind(this)), (this._removedListeners = []);
    }
    function n(e, t) {
        return e.toLowerCase() === t.tagName.toLowerCase();
    }
    function a(e, t) {
        return this.rootElement === window ? t === document || t === document.documentElement || t === window : this.rootElement === t;
    }
    function r(e, t) {
        return e === t.id;
    }
    (s.prototype.root = function (e) {
        let t,
            i = this.listenerMap;
        if (this.rootElement) {
            for (t in i[1]) i[1].hasOwnProperty(t) && this.rootElement.removeEventListener(t, this.handle, !0);
            for (t in i[0]) i[0].hasOwnProperty(t) && this.rootElement.removeEventListener(t, this.handle, !1);
        }
        if (!e || !e.addEventListener) return this.rootElement && delete this.rootElement, this;
        for (t in ((this.rootElement = e), i[1])) i[1].hasOwnProperty(t) && this.rootElement.addEventListener(t, this.handle, !0);
        for (t in i[0]) i[0].hasOwnProperty(t) && this.rootElement.addEventListener(t, this.handle, !1);
        return this;
    }),
        (s.prototype.captureForType = function (e) {
            return -1 !== ["blur", "error", "focus", "load", "resize", "scroll"].indexOf(e);
        }),
        (s.prototype.on = function (e, t, i, s) {
            let o, l, d, c;
            if (!e) throw TypeError("Invalid event type: " + e);
            if (("function" == typeof t && ((s = i), (i = t), (t = null)), void 0 === s && (s = this.captureForType(e)), "function" != typeof i)) throw TypeError("Handler must be a type of Function");
            return (
                (o = this.rootElement),
                (l = this.listenerMap[s ? 1 : 0])[e] || (o && o.addEventListener(e, this.handle, s), (l[e] = [])),
                t ? (/^[a-z]+$/i.test(t) ? ((c = t), (d = n)) : /^#[a-z0-9\-_]+$/i.test(t) ? ((c = t.slice(1)), (d = r)) : ((c = t), (d = Element.prototype.matches))) : ((c = null), (d = a.bind(this))),
                l[e].push({ selector: t, handler: i, matcher: d, matcherParam: c }),
                this
            );
        }),
        (s.prototype.off = function (e, t, i, s) {
            let n, a, r, o, l;
            if (("function" == typeof t && ((s = i), (i = t), (t = null)), void 0 === s)) return this.off(e, t, i, !0), this.off(e, t, i, !1), this;
            if (((r = this.listenerMap[s ? 1 : 0]), !e)) {
                for (l in r) r.hasOwnProperty(l) && this.off(l, t, i);
                return this;
            }
            if (!(o = r[e]) || !o.length) return this;
            for (n = o.length - 1; n >= 0; n--) (a = o[n]), (t && t !== a.selector) || (i && i !== a.handler) || (this._removedListeners.push(a), o.splice(n, 1));
            return !o.length && (delete r[e], this.rootElement && this.rootElement.removeEventListener(e, this.handle, s)), this;
        }),
        (s.prototype.handle = function (e) {
            let t,
                i,
                s,
                n,
                a,
                r = e.type,
                o = [],
                l = "ftLabsDelegateIgnore";
            if (!0 === e[l]) return;
            switch ((3 === (a = e.target).nodeType && (a = a.parentNode), a.correspondingUseElement && (a = a.correspondingUseElement), (s = this.rootElement), e.eventPhase || (e.target !== e.currentTarget ? 3 : 2))) {
                case 1:
                    o = this.listenerMap[1][r];
                    break;
                case 2:
                    this.listenerMap[0] && this.listenerMap[0][r] && (o = o.concat(this.listenerMap[0][r])), this.listenerMap[1] && this.listenerMap[1][r] && (o = o.concat(this.listenerMap[1][r]));
                    break;
                case 3:
                    o = this.listenerMap[0][r];
            }
            let d,
                c = [];
            for (i = o.length; a && i; ) {
                for (t = 0; t < i && (n = o[t]); t++)
                    a.tagName && ["button", "input", "select", "textarea"].indexOf(a.tagName.toLowerCase()) > -1 && a.hasAttribute("disabled") ? (c = []) : n.matcher.call(a, n.matcherParam, a) && c.push([e, a, n]);
                if (a === s || ((i = o.length), (a = a.parentElement || a.parentNode) instanceof HTMLDocument)) break;
            }
            for (t = 0; t < c.length; t++)
                if (!(this._removedListeners.indexOf(c[t][2]) > -1) && !1 === this.fire.apply(this, c[t])) {
                    (c[t][0][l] = !0), c[t][0].preventDefault(), (d = !1);
                    break;
                }
            return d;
        }),
        (s.prototype.fire = function (e, t, i) {
            return i.handler.call(t, e, t);
        }),
        (s.prototype.destroy = function () {
            this.off(), this.root();
        });
    var o = s;
    function l(e, t, i = {}) {
        e.dispatchEvent(new CustomEvent(t, { bubbles: !0, detail: i }));
    }
    function d(e, t, i = {}) {
        e.dispatchEvent(new CustomEvent(t, { bubbles: !1, detail: i }));
    }
    var c = class extends HTMLElement {
            constructor() {
                super(),
                    (this._hasSectionReloaded = !1),
                    Shopify.designMode &&
                        this.rootDelegate.on("shopify:section:select", (e) => {
                            let t = this.closest(".shopify-section");
                            e.target === t && e.detail.load && (this._hasSectionReloaded = !0);
                        });
            }
            get rootDelegate() {
                return (this._rootDelegate = this._rootDelegate || new o(document.documentElement));
            }
            get delegate() {
                return (this._delegate = this._delegate || new o(this));
            }
            showLoadingBar() {
                l(document.documentElement, "theme:loading:start");
            }
            hideLoadingBar() {
                l(document.documentElement, "theme:loading:end");
            }
            untilVisible(e = { rootMargin: "30px 0px", threshold: 0 }) {
                let t = () => {
                    this.classList.add("became-visible"), (this.style.opacity = "1");
                };
                return new Promise((i) => {
                    window.IntersectionObserver
                        ? ((this.intersectionObserver = new IntersectionObserver((e) => {
                              e[0].isIntersecting &&
                                  (this.intersectionObserver.disconnect(),
                                  requestAnimationFrame(() => {
                                      i(), t();
                                  }));
                          }, e)),
                          this.intersectionObserver.observe(this))
                        : (i(), t());
                });
            }
            disconnectedCallback() {
                var e;
                this.delegate.destroy(), this.rootDelegate.destroy(), null == (e = this.intersectionObserver) || e.disconnect(), delete this._delegate, delete this._rootDelegate;
            }
        },
        h = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"],
        u = h.join(","),
        p = "undefined" == typeof Element ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
        m = function (e) {
            var t = parseInt(e.getAttribute("tabindex"), 10);
            return isNaN(t)
                ? (function (e) {
                      return "true" === e.contentEditable;
                  })(e) ||
                  (("AUDIO" === e.nodeName || "VIDEO" === e.nodeName || "DETAILS" === e.nodeName) && null === e.getAttribute("tabindex"))
                    ? 0
                    : e.tabIndex
                : t;
        },
        b = function (e, t) {
            return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
        },
        g = function (e) {
            return "INPUT" === e.tagName;
        },
        f = function (e) {
            return (
                (function (e) {
                    return g(e) && "radio" === e.type;
                })(e) &&
                !(function (e) {
                    if (!e.name) return !0;
                    var t,
                        i = e.form || e.ownerDocument,
                        s = function (e) {
                            return i.querySelectorAll('input[type="radio"][name="' + e + '"]');
                        };
                    if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = s(window.CSS.escape(e.name));
                    else
                        try {
                            t = s(e.name);
                        } catch (e) {
                            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
                        }
                    var n = (function (e, t) {
                        for (var i = 0; i < e.length; i++) if (e[i].checked && e[i].form === t) return e[i];
                    })(t, e.form);
                    return !n || n === e;
                })(e)
            );
        },
        y = function (e, t) {
            return !(
                t.disabled ||
                (function (e) {
                    return g(e) && "hidden" === e.type;
                })(t) ||
                (function (e, t) {
                    if ("hidden" === getComputedStyle(e).visibility) return !0;
                    var i = p.call(e, "details>summary:first-of-type") ? e.parentElement : e;
                    if (p.call(i, "details:not([open]) *")) return !0;
                    if (t && "full" !== t) {
                        if ("non-zero-area" === t) {
                            var s = e.getBoundingClientRect(),
                                n = s.width,
                                a = s.height;
                            return 0 === n && 0 === a;
                        }
                    } else
                        for (; e; ) {
                            if ("none" === getComputedStyle(e).display) return !0;
                            e = e.parentElement;
                        }
                    return !1;
                })(t, e.displayCheck) ||
                (function (e) {
                    return (
                        "DETAILS" === e.tagName &&
                        Array.prototype.slice.apply(e.children).some(function (e) {
                            return "SUMMARY" === e.tagName;
                        })
                    );
                })(t) ||
                (function (e) {
                    if (g(e) || "SELECT" === e.tagName || "TEXTAREA" === e.tagName || "BUTTON" === e.tagName)
                        for (var t = e.parentElement; t; ) {
                            if ("FIELDSET" === t.tagName && t.disabled) {
                                for (var i = 0; i < t.children.length; i++) {
                                    var s = t.children.item(i);
                                    if ("LEGEND" === s.tagName) {
                                        if (s.contains(e)) return !1;
                                        break;
                                    }
                                }
                                return !0;
                            }
                            t = t.parentElement;
                        }
                    return !1;
                })(t)
            );
        },
        w = function (e, t) {
            return !(!y(e, t) || f(t) || 0 > m(t));
        },
        v = function (e, t) {
            var i = [],
                s = [];
            return (
                (function (e, t, i) {
                    var s = Array.prototype.slice.apply(e.querySelectorAll(u));
                    return t && p.call(e, u) && s.unshift(e), s.filter(i);
                })(e, (t = t || {}).includeContainer, w.bind(null, t)).forEach(function (e, t) {
                    var n = m(e);
                    0 === n ? i.push(e) : s.push({ documentOrder: t, tabIndex: n, node: e });
                }),
                s
                    .sort(b)
                    .map(function (e) {
                        return e.node;
                    })
                    .concat(i)
            );
        },
        _ = h.concat("iframe").join(","),
        E = function (e, t) {
            if (((t = t || {}), !e)) throw Error("No node provided");
            return !1 !== p.call(e, _) && y(t, e);
        };
    function S(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            t &&
                (s = s.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                i.push.apply(i, s);
        }
        return i;
    }
    function x(e, t, i) {
        return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
    }
    var k = (function () {
            var e = [];
            return {
                activateTrap: function (t) {
                    if (e.length > 0) {
                        var i = e[e.length - 1];
                        i !== t && i.pause();
                    }
                    var s = e.indexOf(t);
                    -1 === s || e.splice(s, 1), e.push(t);
                },
                deactivateTrap: function (t) {
                    var i = e.indexOf(t);
                    -1 !== i && e.splice(i, 1), e.length > 0 && e[e.length - 1].unpause();
                },
            };
        })(),
        L = function (e) {
            return setTimeout(e, 0);
        },
        A = function (e, t) {
            var i = -1;
            return (
                e.every(function (e, s) {
                    return !t(e) || ((i = s), !1);
                }),
                i
            );
        },
        C = function (e) {
            for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
            return "function" == typeof e ? e.apply(void 0, i) : e;
        },
        I = function (e) {
            return e.target.shadowRoot && "function" == typeof e.composedPath ? e.composedPath()[0] : e.target;
        },
        T = function (e, t) {
            var i,
                s = (null == t ? void 0 : t.document) || document,
                n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2
                            ? S(Object(i), !0).forEach(function (t) {
                                  x(e, t, i[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                            : S(Object(i)).forEach(function (t) {
                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                              });
                    }
                    return e;
                })({ returnFocusOnDeactivate: !0, escapeDeactivates: !0, delayInitialFocus: !0 }, t),
                a = { containers: [], tabbableGroups: [], nodeFocusedBeforeActivation: null, mostRecentlyFocusedNode: null, active: !1, paused: !1, delayInitialFocusTimer: void 0 },
                r = function (e, t, i) {
                    return e && void 0 !== e[t] ? e[t] : n[i || t];
                },
                o = function (e) {
                    return !(
                        !e ||
                        !a.containers.some(function (t) {
                            return t.contains(e);
                        })
                    );
                },
                l = function (e) {
                    var t = n[e];
                    if ("function" == typeof t) {
                        for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) a[r - 1] = arguments[r];
                        t = t.apply(void 0, a);
                    }
                    if (!t) {
                        if (void 0 === t || !1 === t) return t;
                        throw Error("`".concat(e, "` was specified but was not a node, or did not return a node"));
                    }
                    var o = t;
                    if ("string" == typeof t && !(o = s.querySelector(t))) throw Error("`".concat(e, "` as selector refers to no known node"));
                    return o;
                },
                d = function () {
                    var e = l("initialFocus");
                    if (!1 === e) return !1;
                    if (void 0 === e)
                        if (o(s.activeElement)) e = s.activeElement;
                        else {
                            var t = a.tabbableGroups[0];
                            e = (t && t.firstTabbableNode) || l("fallbackFocus");
                        }
                    if (!e) throw Error("Your focus-trap needs to have at least one focusable element");
                    return e;
                },
                c = function () {
                    if (
                        ((a.tabbableGroups = a.containers
                            .map(function (e) {
                                var t = v(e);
                                if (t.length > 0) return { container: e, firstTabbableNode: t[0], lastTabbableNode: t[t.length - 1] };
                            })
                            .filter(function (e) {
                                return !!e;
                            })),
                        a.tabbableGroups.length <= 0 && !l("fallbackFocus"))
                    )
                        throw Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
                },
                h = function e(t) {
                    if (!1 !== t && t !== s.activeElement) {
                        if (!t || !t.focus) return void e(d());
                        t.focus({ preventScroll: !!n.preventScroll }),
                            (a.mostRecentlyFocusedNode = t),
                            (function (e) {
                                return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select;
                            })(t) && t.select();
                    }
                },
                u = function (e) {
                    var t = l("setReturnFocus", e);
                    return t || (!1 !== t && e);
                },
                p = function (e) {
                    var t = I(e);
                    if (!o(t)) {
                        if (C(n.clickOutsideDeactivates, e)) return void i.deactivate({ returnFocus: n.returnFocusOnDeactivate && !E(t) });
                        C(n.allowOutsideClick, e) || e.preventDefault();
                    }
                },
                m = function (e) {
                    var t = I(e),
                        i = o(t);
                    i || t instanceof Document ? i && (a.mostRecentlyFocusedNode = t) : (e.stopImmediatePropagation(), h(a.mostRecentlyFocusedNode || d()));
                },
                b = function (e) {
                    if (
                        (function (e) {
                            return "Escape" === e.key || "Esc" === e.key || 27 === e.keyCode;
                        })(e) &&
                        !1 !== C(n.escapeDeactivates, e)
                    )
                        return e.preventDefault(), void i.deactivate();
                    (function (e) {
                        return "Tab" === e.key || 9 === e.keyCode;
                    })(e) &&
                        (function (e) {
                            var t = I(e);
                            c();
                            var i = null;
                            if (a.tabbableGroups.length > 0) {
                                var s = A(a.tabbableGroups, function (e) {
                                    return e.container.contains(t);
                                });
                                if (s < 0) i = e.shiftKey ? a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : a.tabbableGroups[0].firstTabbableNode;
                                else if (e.shiftKey) {
                                    var n = A(a.tabbableGroups, function (e) {
                                        return t === e.firstTabbableNode;
                                    });
                                    if ((n < 0 && a.tabbableGroups[s].container === t && (n = s), n >= 0)) {
                                        var r = 0 === n ? a.tabbableGroups.length - 1 : n - 1;
                                        i = a.tabbableGroups[r].lastTabbableNode;
                                    }
                                } else {
                                    var o = A(a.tabbableGroups, function (e) {
                                        return t === e.lastTabbableNode;
                                    });
                                    if ((o < 0 && a.tabbableGroups[s].container === t && (o = s), o >= 0)) {
                                        var d = o === a.tabbableGroups.length - 1 ? 0 : o + 1;
                                        i = a.tabbableGroups[d].firstTabbableNode;
                                    }
                                }
                            } else i = l("fallbackFocus");
                            i && (e.preventDefault(), h(i));
                        })(e);
                },
                g = function (e) {
                    if (!C(n.clickOutsideDeactivates, e)) {
                        var t = I(e);
                        o(t) || C(n.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation());
                    }
                },
                f = function () {
                    if (a.active)
                        return (
                            k.activateTrap(i),
                            (a.delayInitialFocusTimer = n.delayInitialFocus
                                ? L(function () {
                                      h(d());
                                  })
                                : h(d())),
                            s.addEventListener("focusin", m, !0),
                            s.addEventListener("mousedown", p, { capture: !0, passive: !1 }),
                            s.addEventListener("touchstart", p, { capture: !0, passive: !1 }),
                            s.addEventListener("click", g, { capture: !0, passive: !1 }),
                            s.addEventListener("keydown", b, { capture: !0, passive: !1 }),
                            i
                        );
                },
                y = function () {
                    if (a.active)
                        return (
                            s.removeEventListener("focusin", m, !0), s.removeEventListener("mousedown", p, !0), s.removeEventListener("touchstart", p, !0), s.removeEventListener("click", g, !0), s.removeEventListener("keydown", b, !0), i
                        );
                };
            return (
                (i = {
                    activate: function (e) {
                        if (a.active) return this;
                        var t = r(e, "onActivate"),
                            i = r(e, "onPostActivate"),
                            n = r(e, "checkCanFocusTrap");
                        n || c(), (a.active = !0), (a.paused = !1), (a.nodeFocusedBeforeActivation = s.activeElement), t && t();
                        var o = function () {
                            n && c(), f(), i && i();
                        };
                        return n ? (n(a.containers.concat()).then(o, o), this) : (o(), this);
                    },
                    deactivate: function (e) {
                        if (!a.active) return this;
                        clearTimeout(a.delayInitialFocusTimer), (a.delayInitialFocusTimer = void 0), y(), (a.active = !1), (a.paused = !1), k.deactivateTrap(i);
                        var t = r(e, "onDeactivate"),
                            s = r(e, "onPostDeactivate"),
                            n = r(e, "checkCanReturnFocus");
                        t && t();
                        var o = r(e, "returnFocus", "returnFocusOnDeactivate"),
                            l = function () {
                                L(function () {
                                    o && h(u(a.nodeFocusedBeforeActivation)), s && s();
                                });
                            };
                        return o && n ? (n(u(a.nodeFocusedBeforeActivation)).then(l, l), this) : (l(), this);
                    },
                    pause: function () {
                        return a.paused || !a.active || ((a.paused = !0), y()), this;
                    },
                    unpause: function () {
                        return a.paused && a.active && ((a.paused = !1), c(), f()), this;
                    },
                    updateContainerElements: function (e) {
                        var t = [].concat(e).filter(Boolean);
                        return (
                            (a.containers = t.map(function (e) {
                                return "string" == typeof e ? s.querySelector(e) : e;
                            })),
                            a.active && c(),
                            this
                        );
                    },
                }).updateContainerElements(e),
                i
            );
        };
    function P(e, t, i) {
        let s = !1;
        e.type.includes("shopify:section") ? t.hasAttribute("section") && t.getAttribute("section") === e.detail.sectionId && (s = !0) : e.type.includes("shopify:block") && e.target === t && (s = !0), s && i(e);
    }
    var M = class extends c {
        static get observedAttributes() {
            return ["open"];
        }
        constructor() {
            if (
                (super(),
                Shopify.designMode && (this.rootDelegate.on("shopify:section:select", (e) => P(e, this, () => (this.open = !0))), this.rootDelegate.on("shopify:section:deselect", (e) => P(e, this, () => (this.open = !1)))),
                this.hasAttribute("append-body"))
            ) {
                let e = document.getElementById(this.id);
                this.removeAttribute("append-body"), e && e !== this ? (e.replaceWith(this.cloneNode(!0)), this.remove()) : document.body.appendChild(this);
            }
        }
        connectedCallback() {
            this.delegate.on("click", ".openable__overlay", () => (this.open = !1)),
                this.delegate.on("click", '[data-action="close"]', (e) => {
                    e.stopPropagation(), (this.open = !1);
                });
        }
        get requiresLoading() {
            return this.hasAttribute("href");
        }
        get open() {
            return this.hasAttribute("open");
        }
        set open(e) {
            e
                ? (async () => {
                      await this._load(), this.clientWidth, this.setAttribute("open", "");
                  })()
                : this.removeAttribute("open");
        }
        get shouldTrapFocus() {
            return !0;
        }
        get returnFocusOnDeactivate() {
            return !this.hasAttribute("return-focus") || "true" === this.getAttribute("return-focus");
        }
        get focusTrap() {
            return (this._focusTrap =
                this._focusTrap ||
                T(this, {
                    fallbackFocus: this,
                    initialFocus: this.hasAttribute("initial-focus-selector") ? this.getAttribute("initial-focus-selector") : void 0,
                    clickOutsideDeactivates: (e) => !(e.target.hasAttribute("aria-controls") && e.target.getAttribute("aria-controls") === this.id),
                    allowOutsideClick: (e) => e.target.hasAttribute("aria-controls") && e.target.getAttribute("aria-controls") === this.id,
                    returnFocusOnDeactivate: this.returnFocusOnDeactivate,
                    onDeactivate: () => (this.open = !1),
                    preventScroll: !0,
                }));
        }
        attributeChangedCallback(e, t, i) {
            "open" === e &&
                (null === t && "" === i
                    ? (this.shouldTrapFocus && setTimeout(() => this.focusTrap.activate(), 150), l(this, "openable-element:open"))
                    : null === i && (this.shouldTrapFocus && this.focusTrap.deactivate(), l(this, "openable-element:close")));
        }
        async _load() {
            if (!this.requiresLoading) return;
            d(this, "openable-element:load:start");
            let e = await fetch(this.getAttribute("href")),
                t = document.createElement("div");
            (t.innerHTML = await e.text()), (this.innerHTML = t.querySelector(this.tagName.toLowerCase()).innerHTML), this.removeAttribute("href"), d(this, "openable-element:load:end");
        }
    };
    window.customElements.define("openable-element", M);
    window.customElements.define(
        "collapsible-content",
        class extends M {
            constructor() {
                super(), (this.ignoreNextTransition = this.open), this.addEventListener("shopify:block:select", () => (this.open = !0)), this.addEventListener("shopify:block:deselect", () => (this.open = !1));
            }
            get animateItems() {
                return this.hasAttribute("animate-items");
            }
            attributeChangedCallback(e) {
                if (this.ignoreNextTransition) return (this.ignoreNextTransition = !1);
                if ("open" === e) {
                    this.style.overflow = "hidden";
                    let e = { height: ["0px", `${this.scrollHeight}px`], visibility: ["hidden", "visible"] };
                    this.animateItems && (e.opacity = this.open ? [0, 0] : [0, 1]),
                        (this.animate(e, { duration: 500, direction: this.open ? "normal" : "reverse", easing: "cubic-bezier(0.75, 0, 0.175, 1)" }).onfinish = () => {
                            this.style.overflow = this.open ? "visible" : "hidden";
                        }),
                        this.animateItems && this.open && this.animate({ opacity: [0, 1], transform: ["translateY(10px)", "translateY(0)"] }, { duration: 250, delay: 250, easing: "cubic-bezier(0.75, 0, 0.175, 1)" }),
                        l(this, this.open ? "openable-element:open" : "openable-element:close");
                }
            }
        }
    );
    var q = class extends HTMLButtonElement {
        connectedCallback() {
            this.addEventListener("click", (e) => {
                window.confirm(this.getAttribute("data-message") || "Are you sure you wish to do this?") || e.preventDefault();
            });
        }
    };
    window.customElements.define("confirm-button", q, { extends: "button" });
    var V = {
            _prepareButton() {
                (this.originalContent = this.innerHTML),
                    (this._startTransitionPromise = null),
                    (this.innerHTML = `      <span class="loader-button__text">${this.innerHTML}</span>      <span class="loader-button__loader" hidden>        <div class="spinner">          <svg focusable="false" width="24" height="24" class="icon icon--spinner" viewBox="25 25 50 50">            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5"></circle>          </svg>        </div>      </span>    `),
                    (this.textElement = this.firstElementChild),
                    (this.spinnerElement = this.lastElementChild),
                    window.addEventListener("pagehide", () => this.removeAttribute("aria-busy"));
            },
            _startTransition() {
                let e = this.textElement.animate({ opacity: [1, 0], transform: ["translateY(0)", "translateY(-10px)"] }, { duration: 75, easing: "ease", fill: "forwards" });
                this.spinnerElement.hidden = !1;
                let t = this.spinnerElement.animate({ opacity: [0, 1], transform: ["translate(-50%, 0%)", "translate(-50%, -50%)"] }, { duration: 75, delay: 75, easing: "ease", fill: "forwards" });
                this._startTransitionPromise = Promise.all([new Promise((t) => (e.onfinish = () => t())), new Promise((e) => (t.onfinish = () => e()))]);
            },
            async _endTransition() {
                this._startTransitionPromise &&
                    (await this._startTransitionPromise,
                    (this.spinnerElement.animate({ opacity: [1, 0], transform: ["translate(-50%, -50%)", "translate(-50%, -100%)"] }, { duration: 75, delay: 100, easing: "ease", fill: "forwards" }).onfinish = () =>
                        (this.spinnerElement.hidden = !0)),
                    this.textElement.animate({ opacity: [0, 1], transform: ["translateY(10px)", "translateY(0)"] }, { duration: 75, delay: 175, easing: "ease", fill: "forwards" }),
                    (this._startTransitionPromise = null));
            },
        },
        O = class extends HTMLButtonElement {
            static get observedAttributes() {
                return ["aria-busy"];
            }
            constructor() {
                super(),
                    this.addEventListener("click", (e) => {
                        "submit" === this.type &&
                            this.form &&
                            this.form.checkValidity() &&
                            !this.form.hasAttribute("is") &&
                            (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (e.preventDefault(), this.setAttribute("aria-busy", "true"), setTimeout(() => this.form.submit(), 250)) : this.setAttribute("aria-busy", "true"));
                    });
            }
            connectedCallback() {
                this._prepareButton();
            }
            disconnectedCallback() {
                this.innerHTML = this.originalContent;
            }
            attributeChangedCallback(e, t, i) {
                "aria-busy" === e && ("true" === i ? this._startTransition() : this._endTransition());
            }
        };
    Object.assign(O.prototype, V), window.customElements.define("loader-button", O, { extends: "button" });
    function B(e, t) {
        if ((void 0 !== t && (e = e[t]), null !== e)) {
            let t = e.getAttribute("data-price");
            t = parseInt(t);
            let i = e.parentElement.className;
            if (Shopify.enable_namagoo && i.includes("custom-product-card_namogoo") && localStorage.getItem("Namogoo")) {
                (t -= (t / 100) * JSON.parse(localStorage.getItem("Namogoo")).discountValue),
                    e.className.includes("product-card-price-varies") ? (e.innerHTML = "From " + Shopify.formatMoney(t, Shopify.money_format)) : (e.innerHTML = Shopify.formatMoney(t, Shopify.money_format));
            }
        }
    }
    window.customElements.define(
        "page-pagination",
        class extends c {
            connectedCallback() {
                this.hasAttribute("ajax") && this.delegate.on("click", "a", this._onLinkClicked.bind(this));
            }
            _onLinkClicked(e, t) {
                e.preventDefault();
                let i = new URL(window.location.href);
                i.searchParams.set("page", t.getAttribute("data-page")), l(this, "pagination:page-changed", { url: i.toString() });
            }
        }
    );
    var H = class extends HTMLButtonElement {
        static get observedAttributes() {
            return ["aria-expanded", "aria-busy"];
        }
        constructor() {
            super(), this.hasAttribute("loader") && this._prepareButton(), this.addEventListener("click", this._onButtonClick.bind(this)), (this.rootDelegate = new o(document.documentElement));
        }
        _onButtonClick() {
            (this.isExpanded = !this.isExpanded),
                setTimeout(function () {
                    B(document.querySelector(".quick_product-price"));
                }, 1e3);
        }
        connectedCallback() {
            document.addEventListener("openable-element:close", (e) => {
                this.controlledElement === e.target && ((this.isExpanded = !1), e.stopPropagation());
            }),
                document.addEventListener("openable-element:open", (e) => {
                    this.controlledElement === e.target && ((this.isExpanded = !0), e.stopPropagation());
                }),
                this.rootDelegate.on(
                    "openable-element:load:start",
                    `#${this.getAttribute("aria-controls")}`,
                    () => {
                        this.classList.contains("button") ? this.setAttribute("aria-busy", "true") : null !== this.offsetParent && l(document.documentElement, "theme:loading:start");
                    },
                    !0
                ),
                this.rootDelegate.on(
                    "openable-element:load:end",
                    `#${this.getAttribute("aria-controls")}`,
                    () => {
                        this.classList.contains("button") ? this.removeAttribute("aria-busy") : null !== this.offsetParent && l(document.documentElement, "theme:loading:end");
                    },
                    !0
                );
        }
        disconnectedCallback() {
            this.rootDelegate.destroy();
        }
        get isExpanded() {
            return "true" === this.getAttribute("aria-expanded");
        }
        set isExpanded(e) {
            this.setAttribute("aria-expanded", e ? "true" : "false");
        }
        get controlledElement() {
            return document.getElementById(this.getAttribute("aria-controls"));
        }
        attributeChangedCallback(e, t, i) {
            switch (e) {
                case "aria-expanded":
                    "false" === t && "true" === i ? (this.controlledElement.open = !0) : "true" === t && "false" === i && (this.controlledElement.open = !1);
                    break;
                case "aria-busy":
                    this.hasAttribute("loader") && ("true" === i ? this._startTransition() : this._endTransition());
            }
        }
    };
    Object.assign(H.prototype, V), window.customElements.define("toggle-button", H, { extends: "button" });
    var D = class extends HTMLAnchorElement {
        static get observedAttributes() {
            return ["aria-expanded"];
        }
        constructor() {
            super(),
                this.addEventListener("click", (e) => {
                    e.preventDefault(), (this.isExpanded = !this.isExpanded);
                }),
                (this.rootDelegate = new o(document.documentElement));
        }
        connectedCallback() {
            this.rootDelegate.on(
                "openable-element:close",
                `#${this.getAttribute("aria-controls")}`,
                (e) => {
                    this.controlledElement === e.target && (this.isExpanded = !1);
                },
                !0
            ),
                this.rootDelegate.on(
                    "openable-element:open",
                    `#${this.getAttribute("aria-controls")}`,
                    (e) => {
                        this.controlledElement === e.target && (this.isExpanded = !0);
                    },
                    !0
                );
        }
        disconnectedCallback() {
            this.rootDelegate.destroy();
        }
        get isExpanded() {
            return "true" === this.getAttribute("aria-expanded");
        }
        set isExpanded(e) {
            this.setAttribute("aria-expanded", e ? "true" : "false");
        }
        get controlledElement() {
            return document.querySelector(`#${this.getAttribute("aria-controls")}`);
        }
        attributeChangedCallback(e, t, i) {
            "aria-expanded" === e && ("false" === t && "true" === i ? (this.controlledElement.open = !0) : "true" === t && "false" === i && (this.controlledElement.open = !1));
        }
    };
    window.customElements.define("toggle-link", D, { extends: "a" });
    window.customElements.define(
        "page-dots",
        class extends c {
            connectedCallback() {
                (this.buttons = Array.from(this.querySelectorAll("button"))),
                    this.delegate.on("click", "button", (e, t) => {
                        this._dispatchEvent(this.buttons.indexOf(t));
                    }),
                    this.hasAttribute("animation-timer") &&
                        this.delegate.on("animationend", (e) => {
                            e.elapsedTime > 0 && this._dispatchEvent((this.selectedIndex + 1 + this.buttons.length) % this.buttons.length);
                        });
            }
            get selectedIndex() {
                return this.buttons.findIndex((e) => "true" === e.getAttribute("aria-current"));
            }
            set selectedIndex(e) {
                if ((this.buttons.forEach((t, i) => t.setAttribute("aria-current", e === i ? "true" : "false")), this.hasAttribute("align-selected"))) {
                    let t = this.buttons[e],
                        i = window.innerWidth / 2,
                        s = t.getBoundingClientRect(),
                        n = this._findFirstScrollableElement(this.parentElement);
                    n && n.scrollTo({ behavior: "smooth", left: n.scrollLeft + (s.left - i) + s.width / 2 });
                }
            }
            _dispatchEvent(e) {
                e !== this.selectedIndex && this.dispatchEvent(new CustomEvent("page-dots:changed", { bubbles: !0, detail: { index: e } }));
            }
            _findFirstScrollableElement(e, t = 0) {
                return null === e || t > 3 ? null : e.scrollWidth > e.clientWidth ? e : this._findFirstScrollableElement(e.parentElement, t + 1);
            }
        }
    );
    var N = class extends HTMLElement {
            connectedCallback() {
                (this.prevButton = this.querySelector("button:first-of-type")),
                    (this.nextButton = this.querySelector("button:last-of-type")),
                    this.prevButton.addEventListener("click", () => this.prevButton.dispatchEvent(new CustomEvent("prev-next:prev", { bubbles: !0 }))),
                    this.nextButton.addEventListener("click", () => this.nextButton.dispatchEvent(new CustomEvent("prev-next:next", { bubbles: !0 })));
            }
            set isPrevDisabled(e) {
                this.prevButton.disabled = e;
            }
            set isNextDisabled(e) {
                this.nextButton.disabled = e;
            }
        },
        R = class extends HTMLButtonElement {
            connectedCallback() {
                this.addEventListener("click", () => this.dispatchEvent(new CustomEvent("prev-next:prev", { bubbles: !0 })));
            }
        },
        F = class extends HTMLButtonElement {
            connectedCallback() {
                this.addEventListener("click", () => this.dispatchEvent(new CustomEvent("prev-next:next", { bubbles: !0 })));
            }
        };
    function z() {
        let e = getComputedStyle(document.documentElement);
        return (
            parseInt(e.getPropertyValue("--header-height") || 0) * parseInt(e.getPropertyValue("--enable-sticky-header") || 0) +
            parseInt(e.getPropertyValue("--announcement-bar-height") || 0) * parseInt(e.getPropertyValue("--enable-sticky-announcement-bar") || 0)
        );
    }
    window.customElements.define("prev-next-buttons", N), window.customElements.define("prev-button", R, { extends: "button" }), window.customElements.define("next-button", F, { extends: "button" });
    var W = class extends HTMLElement {
        connectedCallback() {
            (this.lastKnownY = window.scrollY), (this.currentTop = 0), (this.hasPendingRaf = !1), window.addEventListener("scroll", this._checkPosition.bind(this));
        }
        get initialTopOffset() {
            return z() + (parseInt(this.getAttribute("offset")) || 0);
        }
        _checkPosition() {
            this.hasPendingRaf ||
                ((this.hasPendingRaf = !0),
                requestAnimationFrame(() => {
                    let e = this.getBoundingClientRect().top + window.scrollY - this.offsetTop + this.initialTopOffset,
                        t = this.clientHeight - window.innerHeight;
                    window.scrollY < this.lastKnownY ? (this.currentTop -= window.scrollY - this.lastKnownY) : (this.currentTop += this.lastKnownY - window.scrollY),
                        (this.currentTop = Math.min(Math.max(this.currentTop, -t), e, this.initialTopOffset)),
                        (this.lastKnownY = window.scrollY),
                        (this.style.top = `${this.currentTop}px`),
                        (this.hasPendingRaf = !1);
                }));
        }
    };
    function Y(e, t = 15) {
        let i = null,
            s = null,
            n = (a) => {
                (s = a),
                    i ||
                        (e(s),
                        (s = null),
                        (i = setTimeout(() => {
                            (i = null), s && n(s);
                        }, t)));
            };
        return n;
    }
    window.customElements.define("safe-sticky", W);
    var j = class extends HTMLElement {
        connectedCallback() {
            this._createSvg(),
                (this.elementsToObserve = Array.from(this.querySelectorAll("a")).map((e) => document.querySelector(e.getAttribute("href")))),
                (this.navListItems = Array.from(this.querySelectorAll("li"))),
                (this.navItems = this.navListItems
                    .map((e) => {
                        let t = e.firstElementChild,
                            i = t && t.getAttribute("href").slice(1);
                        return { listItem: e, anchor: t, target: document.getElementById(i) };
                    })
                    .filter((e) => e.target)),
                this.drawPath(),
                window.addEventListener("scroll", Y(this.markVisibleSection.bind(this), 25)),
                window.addEventListener("orientationchange", () => {
                    window.addEventListener(
                        "resize",
                        () => {
                            this.drawPath(), this.markVisibleSection();
                        },
                        { once: !0 }
                    );
                }),
                this.markVisibleSection();
        }
        _createSvg() {
            this.navPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            let e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            e.insertAdjacentElement("beforeend", this.navPath), this.insertAdjacentElement("beforeend", e), (this.lastPathStart = this.lastPathEnd = null);
        }
        drawPath() {
            let e,
                t = [];
            this.navItems.forEach((i, s) => {
                let n = i.anchor.offsetLeft - 5,
                    a = i.anchor.offsetTop,
                    r = i.anchor.offsetHeight;
                0 === s
                    ? (t.push("M", n, a, "L", n, a + r), (i.pathStart = 0))
                    : (e !== n && t.push("L", e, a), t.push("L", n, a), this.navPath.setAttribute("d", t.join(" ")), (i.pathStart = this.navPath.getTotalLength() || 0), t.push("L", n, a + r)),
                    (e = n),
                    this.navPath.setAttribute("d", t.join(" ")),
                    (i.pathEnd = this.navPath.getTotalLength());
            });
        }
        syncPath() {
            let e = this.navPath.getTotalLength(),
                t = e,
                i = 0;
            if (
                (this.navItems.forEach((e) => {
                    ((e) => e.classList.contains("is-visible"))(e.listItem) && ((t = Math.min(e.pathStart, t)), (i = Math.max(e.pathEnd, i)));
                }),
                this.querySelectorAll(".is-visible").length > 0 && t < i)
            ) {
                if (t !== this.lastPathStart || i !== this.lastPathEnd) {
                    let s = `1 ${t} ${i - t} ${e}`;
                    this.navPath.style.setProperty("stroke-dashoffset", "1"), this.navPath.style.setProperty("stroke-dasharray", s), this.navPath.style.setProperty("opacity", "1");
                }
            } else this.navPath.style.setProperty("opacity", "0");
            (this.lastPathStart = t), (this.lastPathEnd = i);
        }
        markVisibleSection() {
            for (let [e, t] of (this.navListItems.forEach((e) => e.classList.remove("is-visible")), this.elementsToObserve.entries()))
                if (t.getBoundingClientRect().top > z() || e === this.elementsToObserve.length - 1) {
                    this.querySelector(`a[href="#${t.id}"]`).parentElement.classList.add("is-visible");
                    break;
                }
            this.syncPath();
        }
    };
    window.customElements.define("scroll-spy", j);
    var U = class extends HTMLElement {
        constructor() {
            super(),
                (this.attachShadow({ mode: "open" }).innerHTML =
                    "  <style>    :host {      display: inline-block;      contain: layout;      position: relative;    }        :host([hidden]) {      display: none;    }    s {      position: absolute;      top: 0;      bottom: 0;      left: 0;      right: 0;      pointer-events: none;      background-image:        var(--scroll-shadow-top, radial-gradient(farthest-side at 50% 0%, rgba(0,0,0,.2), rgba(0,0,0,0))),        var(--scroll-shadow-bottom, radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,.2), rgba(0,0,0,0))),        var(--scroll-shadow-left, radial-gradient(farthest-side at 0%, rgba(0,0,0,.2), rgba(0,0,0,0))),        var(--scroll-shadow-right, radial-gradient(farthest-side at 100%, rgba(0,0,0,.2), rgba(0,0,0,0)));      background-position: top, bottom, left, right;      background-repeat: no-repeat;      background-size: 100% var(--top, 0), 100% var(--bottom, 0), var(--left, 0) 100%, var(--right, 0) 100%;    }  </style>  <slot></slot>  <s></s>"),
                (this.updater = new (class {
                    constructor(e) {
                        (this.scheduleUpdate = Y(() => this.update(e, getComputedStyle(e)))), (this.resizeObserver = new ResizeObserver(this.scheduleUpdate.bind(this)));
                    }
                    start(e) {
                        this.element && this.stop(), e && (e.addEventListener("scroll", this.scheduleUpdate), this.resizeObserver.observe(e), (this.element = e));
                    }
                    stop() {
                        this.element && (this.element.removeEventListener("scroll", this.scheduleUpdate), this.resizeObserver.unobserve(this.element), (this.element = null));
                    }
                    update(e, t) {
                        if (!this.element) return;
                        let i = t.getPropertyValue("--scroll-shadow-size") ? parseInt(t.getPropertyValue("--scroll-shadow-size")) : 0,
                            s = {
                                top: Math.max(this.element.scrollTop, 0),
                                bottom: Math.max(this.element.scrollHeight - this.element.offsetHeight - this.element.scrollTop, 0),
                                left: Math.max(this.element.scrollLeft, 0),
                                right: Math.max(this.element.scrollWidth - this.element.offsetWidth - this.element.scrollLeft, 0),
                            };
                        requestAnimationFrame(() => {
                            for (let t of ["top", "bottom", "left", "right"]) e.style.setProperty(`--${t}`, `${s[t] > i ? i : s[t]}px`);
                        });
                    }
                })(this.shadowRoot.lastElementChild));
        }
        connectedCallback() {
            this.shadowRoot.querySelector("slot").addEventListener("slotchange", () => this.start()), this.start();
        }
        disconnectedCallback() {
            this.updater.stop();
        }
        start() {
            this.updater.start(this.firstElementChild);
        }
    };
    "ResizeObserver" in window && window.customElements.define("scroll-shadow", U);
    window.customElements.define(
        "share-toggle-button",
        class extends H {
            _onButtonClick() {
                window.matchMedia(window.themeVariables.breakpoints.phone).matches && navigator.share
                    ? navigator.share({ title: this.hasAttribute("share-title") ? this.getAttribute("share-title") : document.title, url: this.hasAttribute("share-url") ? this.getAttribute("share-url") : window.location.href })
                    : super._onButtonClick();
            }
        },
        { extends: "button" }
    );
    window.customElements.define(
        "native-carousel-item",
        class extends c {
            static get observedAttributes() {
                return ["hidden"];
            }
            get index() {
                return [...this.parentNode.children].indexOf(this);
            }
            get selected() {
                return !this.hasAttribute("hidden");
            }
            set selected(e) {
                this.hidden = !e;
            }
        }
    ),
        window.customElements.define(
            "native-carousel",
            class extends c {
                connectedCallback() {
                    (this.items = Array.from(this.querySelectorAll("native-carousel-item"))),
                        (this.pageDotsElements = Array.from(this.querySelectorAll("page-dots"))),
                        (this.prevNextButtonsElements = Array.from(this.querySelectorAll("prev-next-buttons"))),
                        this.items.length > 1 &&
                            (this.addEventListener("prev-next:prev", this.prev.bind(this)),
                            this.addEventListener("prev-next:next", this.next.bind(this)),
                            this.addEventListener("page-dots:changed", (e) => this.select(e.detail.index, !0)),
                            Shopify.designMode && this.addEventListener("shopify:block:select", (e) => this.select(e.target.index, !e.detail.load)));
                    let e = this.items[0].parentElement;
                    (this.intersectionObserver = new IntersectionObserver(this._onVisibilityChanged.bind(this), { root: e, rootMargin: `${e.clientHeight}px 0px`, threshold: 0.8 })),
                        this.items.forEach((e) => this.intersectionObserver.observe(e));
                }
                disconnectedCallback() {
                    super.disconnectedCallback(), this.intersectionObserver.disconnect();
                }
                get selectedIndex() {
                    return this.items.findIndex((e) => e.selected);
                }
                prev(e = !0) {
                    this.select(Math.max(this.selectedIndex - 1, 0), e);
                }
                next(e = !0) {
                    this.select(Math.min(this.selectedIndex + 1, this.items.length - 1), e);
                }
                select(e, t = !0) {
                    let i = Math.max(0, Math.min(e, this.items.length)),
                        s = this.items[i];
                    this._adjustNavigationForElement(s),
                        t &&
                            (this.items.forEach((e) => this.intersectionObserver.unobserve(e)),
                            setInterval(() => {
                                this.items.forEach((e) => this.intersectionObserver.observe(e));
                            }, 800)),
                        this.items.forEach((e, t) => (e.selected = t === i));
                    let n = "ltr" === window.themeVariables.settings.direction ? 1 : -1;
                    s.parentElement.scrollTo({ left: n * (s.clientWidth * i), behavior: t ? "smooth" : "auto" });
                }
                _adjustNavigationForElement(e) {
                    this.items.forEach((t) => (t.selected = e === t)),
                        this.pageDotsElements.forEach((t) => (t.selectedIndex = e.index)),
                        this.prevNextButtonsElements.forEach((t) => {
                            (t.isPrevDisabled = 0 === e.index), (t.isNextDisabled = e.index === this.items.length - 1);
                        });
                }
                _onVisibilityChanged(e) {
                    for (let t of e)
                        if (t.isIntersecting) {
                            this._adjustNavigationForElement(t.target);
                            break;
                        }
                }
            }
        );
    var X = class extends HTMLElement {
        connectedCallback() {
            (this.scrollableElement = this.parentElement),
                this.scrollableElement.addEventListener("mouseenter", this._onMouseEnter.bind(this)),
                this.scrollableElement.addEventListener("mousemove", this._onMouseMove.bind(this)),
                this.scrollableElement.addEventListener("mouseleave", this._onMouseLeave.bind(this)),
                (this.innerHTML =
                    '      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">        <path d="M0 60C0 26.863 26.863 0 60 0s60 26.863 60 60-26.863 60-60 60S0 93.137 0 60z" fill="rgb(var(--text-color))"/>       <path d="M46 50L36 60l10 10M74 50l10 10-10 10" stroke="rgb(var(--section-background))" stroke-width="4"/>      </svg>  ');
        }
        _onMouseEnter(e) {
            this.removeAttribute("hidden"), this._positionCursor(e);
        }
        _onMouseLeave() {
            this.setAttribute("hidden", "");
        }
        _onMouseMove(e) {
            this.toggleAttribute("hidden", "BUTTON" === e.target.tagName || "A" === e.target.tagName), this._positionCursor(e);
        }
        _positionCursor(e) {
            let t = this.scrollableElement.getBoundingClientRect(),
                i = e.clientX - t.x,
                s = e.clientY - t.y;
            this.style.transform = `translate(${i - this.clientWidth / 2}px, ${s - this.clientHeight / 2}px)`;
        }
    };
    window.customElements.define("drag-cursor", X);
    window.customElements.define(
        "scrollable-content",
        class extends c {
            connectedCallback() {
                this.draggable && this._setupDraggability(), this._checkScrollability(), window.addEventListener("resize", this._checkScrollability.bind(this)), this.addEventListener("scroll", Y(this._calculateProgress.bind(this), 15));
            }
            get draggable() {
                return this.hasAttribute("draggable");
            }
            _setupDraggability() {
                this.insertAdjacentHTML("afterend", '<drag-cursor hidden class="custom-drag-cursor"></drag-cursor>');
                let e = matchMedia("(hover: none)");
                e.addListener(this._onMediaChanges.bind(this)), e.matches || this._attachDraggableListeners();
            }
            _attachDraggableListeners() {
                this.delegate.on("mousedown", this._onMouseDown.bind(this)), this.delegate.on("mousemove", this._onMouseMove.bind(this)), this.delegate.on("mouseup", this._onMouseUp.bind(this));
            }
            _removeDraggableListeners() {
                this.delegate.off("mousedown"), this.delegate.off("mousemove"), this.delegate.off("mouseup");
            }
            _checkScrollability() {
                this.classList.toggle("is-scrollable", this.scrollWidth > this.offsetWidth);
            }
            _calculateProgress() {
                l(this, "scrollable-content:progress", { progress: 100 * Math.max(0, Math.min(1, (this.scrollLeft * ("ltr" === window.themeVariables.settings.direction ? 1 : -1)) / (this.scrollWidth - this.clientWidth))) });
            }
            _onMediaChanges(e) {
                e.matches ? this._removeDraggableListeners() : this._attachDraggableListeners();
            }
            _onMouseDown(e) {
                e.target && "IMG" === e.target.nodeName && e.preventDefault(), (this.startX = e.clientX + this.scrollLeft), (this.diffX = 0), (this.drag = !0);
            }
            _onMouseMove(e) {
                this.drag && ((this.diffX = this.startX - (e.clientX + this.scrollLeft)), (this.scrollLeft += this.diffX));
            }
            _onMouseUp() {
                this.drag = !1;
                let e = 1,
                    t = () => {
                        let i = Math.sinh(e);
                        i <= 0 ? window.cancelAnimationFrame(t) : ((this.scrollLeft += this.diffX * i), (e -= 0.03), window.requestAnimationFrame(t));
                    };
                t();
            }
        }
    );
    window.customElements.define(
        "loading-bar",
        class extends c {
            constructor() {
                super(), this.rootDelegate.on("theme:loading:start", this.show.bind(this)), this.rootDelegate.on("theme:loading:end", this.hide.bind(this)), this.delegate.on("transitionend", this._onTransitionEnd.bind(this));
            }
            show() {
                this.classList.add("is-visible"), (this.style.transform = "scaleX(0.4)");
            }
            hide() {
                (this.style.transform = "scaleX(1)"), this.classList.add("is-finished");
            }
            _onTransitionEnd(e) {
                "transform" === e.propertyName && this.classList.contains("is-finished") && (this.classList.remove("is-visible"), this.classList.remove("is-finished"), (this.style.transform = "scaleX(0)"));
            }
        }
    );
    var G = class extends HTMLElement {
        connectedCallback() {
            (this.originalContent = this.textContent), (this.lastWidth = window.innerWidth), (this.hasBeenSplitted = !1), window.addEventListener("resize", this._onResize.bind(this));
        }
        [Symbol.asyncIterator]() {
            return {
                splitPromise: this.split.bind(this),
                index: 0,
                async next() {
                    let e = await this.splitPromise();
                    return this.index !== e.length ? { done: !1, value: e[this.index++] } : { done: !0 };
                },
            };
        }
        split(e = !1) {
            return this.childElementCount > 0 && !e
                ? Promise.resolve(Array.from(this.children))
                : ((this.hasBeenSplitted = !0),
                  new Promise((t) => {
                      requestAnimationFrame(() => {
                          this.innerHTML = this.originalContent.replace(/./g, "<span>$&</span>").replace(/\s/g, " ");
                          let i = {};
                          Array.from(this.children).forEach((e) => {
                              let t = parseInt(e.getBoundingClientRect().top);
                              i[t] = (i[t] || "") + e.textContent;
                          }),
                              (this.innerHTML = Object.values(i)
                                  .map((t) => `<span ${this.hasAttribute("reveal") && !e ? "reveal" : ""} ${this.hasAttribute("reveal-visibility") && !e ? "reveal-visibility" : ""} style="display: block">${t.trim()}</span>`)
                                  .join("")),
                              (this.style.opacity = this.hasAttribute("reveal") ? 1 : null),
                              (this.style.visibility = this.hasAttribute("reveal-visibility") ? "visible" : null),
                              t(Array.from(this.children));
                      });
                  }));
        }
        async _onResize() {
            this.lastWidth !== window.innerWidth && this.hasBeenSplitted && (await this.split(!0), this.dispatchEvent(new CustomEvent("split-lines:re-split", { bubbles: !0 })), (this.lastWidth = window.innerWidth));
        }
    };
    window.customElements.define("split-lines", G);
    var Z = class extends M {
        connectedCallback() {
            super.connectedCallback(), this.delegate.on("click", ".popover__overlay", () => (this.open = !1));
        }
        attributeChangedCallback(e, t, i) {
            super.attributeChangedCallback(e, t, i), "open" === e && document.documentElement.classList.toggle("lock-mobile", this.open);
        }
    };
    window.customElements.define("popover-content", Z);
    var J = class extends HTMLElement {
        connectedCallback() {
            (this.buttons = Array.from(this.querySelectorAll("button[aria-controls]"))),
                (this.scrollerElement = this.querySelector(".tabs-nav__scroller")),
                this.buttons.forEach((e) => e.addEventListener("click", () => this.selectButton(e))),
                this.addEventListener("shopify:block:select", (e) => this.selectButton(e.target, !e.detail.load)),
                (this.positionElement = document.createElement("span")),
                this.positionElement.classList.add("tabs-nav__position"),
                this.buttons.length > 0 ? this.buttons[0].parentElement.insertAdjacentElement("afterend", this.positionElement) : "",
                window.addEventListener("resize", this._onWindowResized.bind(this)),
                this._adjustNavigationPosition(),
                this.hasArrows && this._handleArrows();
        }
        get hasArrows() {
            return this.hasAttribute("arrows");
        }
        get selectedTabIndex() {
            return this.buttons.findIndex((e) => "true" === e.getAttribute("aria-expanded"));
        }
        get selectedButton() {
            return this.buttons.find((e) => "true" === e.getAttribute("aria-expanded"));
        }
        selectButton(e, t = !0) {
            if (!this.buttons.includes(e) || this.selectedButton === e) return;
            let i = document.getElementById(this.selectedButton.getAttribute("aria-controls")),
                s = document.getElementById(e.getAttribute("aria-controls"));
            t ? this._transitionContent(i, s) : ((i.hidden = !0), (s.hidden = !1)),
                this.selectedButton.setAttribute("aria-expanded", "false"),
                e.setAttribute("aria-expanded", "true"),
                l(this, "tabs-nav:changed", { button: e }),
                this._adjustNavigationPosition();
        }
        addButton(e) {
            e.addEventListener("click", () => this.selectButton(e)),
                e.setAttribute("aria-expanded", "false"),
                this.buttons[this.buttons.length - 1].insertAdjacentElement("afterend", e),
                this.buttons.push(e),
                this._adjustNavigationPosition(!1);
        }
        _transitionContent(e, t) {
            e.animate({ opacity: [1, 0] }, { duration: 250, easing: "ease" }).onfinish = () => {
                (e.hidden = !0), (t.hidden = !1), t.animate({ opacity: [0, 1] }, { duration: 250, easing: "ease" });
            };
        }
        _onWindowResized() {
            this._adjustNavigationPosition();
        }
        _adjustNavigationPosition(e = !0) {
            if (this.buttons.length < 1) return;
            let t = this.selectedButton.clientWidth / this.positionElement.parentElement.clientWidth,
                i = this.selectedButton.offsetLeft / this.positionElement.parentElement.clientWidth / t,
                s = this.scrollerElement.clientWidth / 2;
            this.scrollerElement.scrollTo({ behavior: e ? "smooth" : "auto", left: this.selectedButton.offsetLeft - s + this.selectedButton.clientWidth / 2 }),
                e || (this.positionElement.style.transition = "none"),
                this.positionElement.style.setProperty("--scale", t),
                this.positionElement.style.setProperty("--translate", 100 * i + "%"),
                this.positionElement.clientWidth,
                requestAnimationFrame(() => {
                    this.positionElement.classList.add("is-initialized"), (this.positionElement.style.transition = null);
                });
        }
        _handleArrows() {
            let e = this.querySelector(".tabs-nav__arrows");
            if (e == null) return;
            e.firstElementChild.addEventListener("click", () => {
                this.selectButton(this.buttons[Math.max(this.selectedTabIndex - 1, 0)]);
            }),
                e.lastElementChild.addEventListener("click", () => {
                    this.selectButton(this.buttons[Math.min(this.selectedTabIndex + 1, this.buttons.length - 1)]);
                });
        }
    };
    window.customElements.define("tabs-nav", J);
    var Q = class {
        static load(e) {
            let t,
                i = "requested",
                s = "loaded",
                n = this.libraries[e];
            if (n)
                return n.status === i
                    ? n.promise
                    : n.status === s
                    ? Promise.resolve()
                    : ((t = new Promise(
                          "script" === n.type
                              ? (e, t) => {
                                    let i = document.createElement("script");
                                    (i.id = n.tagId),
                                        (i.src = n.src),
                                        (i.onerror = t),
                                        (i.onload = () => {
                                            (n.status = s), e();
                                        }),
                                        document.body.appendChild(i);
                                }
                              : (e, t) => {
                                    let i = document.createElement("link");
                                    (i.id = n.tagId),
                                        (i.href = n.src),
                                        (i.rel = "stylesheet"),
                                        (i.type = "text/css"),
                                        (i.onerror = t),
                                        (i.onload = () => {
                                            (n.status = s), e();
                                        }),
                                        document.body.appendChild(i);
                                }
                      )),
                      (n.promise = t),
                      (n.status = i),
                      t);
        }
    };
    i(Q, "libraries", {
        flickity: { tagId: "flickity", src: window.themeVariables.libs.flickity, type: "script" },
        photoswipe: { tagId: "photoswipe", src: window.themeVariables.libs.photoswipe, type: "script" },
        qrCode: { tagId: "qrCode", src: window.themeVariables.libs.qrCode, type: "script" },
        modelViewerUiStyles: { tagId: "shopify-model-viewer-ui-styles", src: "https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css", type: "link" },
    });
    var K = class extends HTMLElement {
        async connectedCallback() {
            await Q.load("qrCode"), new window.QRCode(this, { text: this.getAttribute("identifier"), width: 200, height: 200 });
        }
    };
    window.customElements.define("qr-code", K);
    var ee = class extends HTMLSelectElement {
        connectedCallback() {
            if (((this.provinceElement = document.getElementById(this.getAttribute("aria-owns"))), this.addEventListener("change", this._updateProvinceVisibility.bind(this)), this.hasAttribute("data-default")))
                for (let e = 0; e !== this.options.length; ++e)
                    if (this.options[e].text === this.getAttribute("data-default")) {
                        this.selectedIndex = e;
                        break;
                    }
            this._updateProvinceVisibility();
            let e = "SELECT" === this.provinceElement.tagName ? this.provinceElement : this.provinceElement.querySelector("select");
            if (e.hasAttribute("data-default"))
                for (let t = 0; t !== e.options.length; ++t)
                    if (e.options[t].text === e.getAttribute("data-default")) {
                        e.selectedIndex = t;
                        break;
                    }
        }
        _updateProvinceVisibility() {
            let e = this.options[this.selectedIndex];
            if (!e) return;
            let t = JSON.parse(e.getAttribute("data-provinces") || "[]"),
                i = "SELECT" === this.provinceElement.tagName ? this.provinceElement : this.provinceElement.querySelector("select");
            (i.innerHTML = ""),
                0 !== t.length
                    ? (t.forEach((e) => {
                          i.options.add(new Option(e[1], e[0]));
                      }),
                      (this.provinceElement.hidden = !1))
                    : (this.provinceElement.hidden = !0);
        }
    };
    window.customElements.define("country-selector", ee, { extends: "select" });
    window.customElements.define(
        "modal-content",
        class extends M {
            connectedCallback() {
                super.connectedCallback(), this.appearAfterDelay && !(this.onlyOnce && this.hasAppearedOnce) && setTimeout(() => (this.open = !0), this.apparitionDelay), this.delegate.on("click", ".modal__overlay", () => (this.open = !1));
            }
            get appearAfterDelay() {
                return this.hasAttribute("apparition-delay");
            }
            get apparitionDelay() {
                return 1e3 * parseInt(this.getAttribute("apparition-delay") || 0);
            }
            get onlyOnce() {
                return this.hasAttribute("only-once");
            }
            get hasAppearedOnce() {
                return null !== localStorage.getItem("theme:popup-appeared");
            }
            attributeChangedCallback(e, t, i) {
                super.attributeChangedCallback(e, t, i), "open" === e && (document.documentElement.classList.toggle("lock-all", this.open), this.open && localStorage.setItem("theme:popup-appeared", !0));
            }
        }
    );
    var te = class extends HTMLElement {
        connectedCallback() {
            (this.rangeLowerBound = this.querySelector(".price-range__range-group input:first-child")),
                (this.rangeHigherBound = this.querySelector(".price-range__range-group input:last-child")),
                (this.textInputLowerBound = this.querySelector(".price-range__input:first-child input")),
                (this.textInputHigherBound = this.querySelector(".price-range__input:last-child input")),
                this.textInputLowerBound.addEventListener("focus", () => this.textInputLowerBound.select()),
                this.textInputHigherBound.addEventListener("focus", () => this.textInputHigherBound.select()),
                this.textInputLowerBound.addEventListener("change", (e) => {
                    (e.target.value = Math.max(Math.min(parseInt(e.target.value), parseInt(this.textInputHigherBound.value || e.target.max) - 1), e.target.min)),
                        (this.rangeLowerBound.value = e.target.value),
                        this.rangeLowerBound.parentElement.style.setProperty("--range-min", (parseInt(this.rangeLowerBound.value) / parseInt(this.rangeLowerBound.max)) * 100 + "%");
                }),
                this.textInputHigherBound.addEventListener("change", (e) => {
                    (e.target.value = Math.min(Math.max(parseInt(e.target.value), parseInt(this.textInputLowerBound.value || e.target.min) + 1), e.target.max)),
                        (this.rangeHigherBound.value = e.target.value),
                        this.rangeHigherBound.parentElement.style.setProperty("--range-max", (parseInt(this.rangeHigherBound.value) / parseInt(this.rangeHigherBound.max)) * 100 + "%");
                }),
                this.rangeLowerBound.addEventListener("change", (e) => {
                    (this.textInputLowerBound.value = e.target.value), this.textInputLowerBound.dispatchEvent(new Event("change", { bubbles: !0 }));
                }),
                this.rangeHigherBound.addEventListener("change", (e) => {
                    (this.textInputHigherBound.value = e.target.value), this.textInputHigherBound.dispatchEvent(new Event("change", { bubbles: !0 }));
                }),
                this.rangeLowerBound.addEventListener("input", (e) => {
                    l(this, "facet:abort-loading"),
                        (e.target.value = Math.min(parseInt(e.target.value), parseInt(this.textInputHigherBound.value || e.target.max) - 1)),
                        e.target.parentElement.style.setProperty("--range-min", (parseInt(e.target.value) / parseInt(e.target.max)) * 100 + "%"),
                        (this.textInputLowerBound.value = e.target.value);
                }),
                this.rangeHigherBound.addEventListener("input", (e) => {
                    l(this, "facet:abort-loading"),
                        (e.target.value = Math.max(parseInt(e.target.value), parseInt(this.textInputLowerBound.value || e.target.min) + 1)),
                        e.target.parentElement.style.setProperty("--range-max", (parseInt(e.target.value) / parseInt(e.target.max)) * 100 + "%"),
                        (this.textInputHigherBound.value = e.target.value);
                });
        }
    };
    window.customElements.define("price-range", te);
    var ie = class extends HTMLElement {
        connectedCallback() {
            let e = this.querySelector(".link-bar__link-item--selected");
            e &&
                requestAnimationFrame(() => {
                    e.style.scrollSnapAlign = "none";
                });
        }
    };
    window.customElements.define("link-bar", ie);
    var se = class {
        static prefersReducedMotion() {
            return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        }
        static supportsHover() {
            return window.matchMedia("(pointer: fine)").matches;
        }
    };
    function ne(e, t, i = !1) {
        let s = [],
            n = e;
        for (; (n = n.previousElementSibling); ) (!t || n.matches(t)) && s.push(n);
        for (i && s.push(e), n = e; (n = n.nextElementSibling); ) (!t || n.matches(t)) && s.push(n);
        return s;
    }
    async function ae(e) {
        let t = [];
        for (let i of ((null != e && "function" == typeof e[Symbol.iterator]) || (e = [e]), e))
            if ("function" == typeof i[Symbol.asyncIterator]) for await (let e of i) t.push(e);
            else t.push(i);
        return t;
    }
    window.customElements.define(
        "flickity-carousel",
        class extends c {
            constructor() {
                super(),
                    1 !== this.childElementCount && (this.addEventListener("flickity:ready", this._preloadNextImage.bind(this)), this.addEventListener("flickity:slide-changed", this._preloadNextImage.bind(this)), this._createFlickity());
            }
            async disconnectedCallback() {
                this.flickity && (await this.flickity).destroy();
            }
            get flickityConfig() {
                return JSON.parse(this.getAttribute("flickity-config"));
            }
            get flickityInstance() {
                return this.flickity;
            }
            async next() {
                (await this.flickityInstance).next();
            }
            async previous() {
                (await this.flickityInstance).previous();
            }
            async select(e) {
                (await this.flickityInstance).selectCell(e);
            }
            async setDraggable(e) {
                let t = await this.flickity;
                (t.options.draggable = e), t.updateDraggable();
            }
            async reload() {
                (await this.flickity).destroy(),
                    this.flickityConfig.cellSelector &&
                        Array.from(this.children)
                            .sort((e, t) => (parseInt(e.getAttribute("data-original-position")) > parseInt(t.getAttribute("data-original-position")) ? 1 : -1))
                            .forEach((e) => this.appendChild(e)),
                    this._createFlickity();
            }
            async _createFlickity() {
                (this.flickity = new Promise(async (e) => {
                    await Q.load("flickity"), await this.untilVisible({ rootMargin: "400px", threshold: 0 });
                    let t = new window.ThemeFlickity(this, {
                        ...this.flickityConfig,
                        rightToLeft: "rtl" === window.themeVariables.settings.direction,
                        accessibility: se.supportsHover(),
                        on: { ready: (e) => l(this, "flickity:ready", e), change: (e) => l(this, "flickity:slide-changed", e), settle: (e) => l(this, "flickity:slide-settled", e) },
                    });
                    e(t);
                })),
                    this.hasAttribute("click-nav") && ((await this.flickityInstance).on("staticClick", this._onStaticClick.bind(this)), this.addEventListener("mousemove", this._onMouseMove.bind(this)));
            }
            async _onStaticClick(e, t, i) {
                let s = await this.flickityInstance,
                    n = s.selectedElement.hasAttribute("data-media-type") && ["video", "external_video", "model"].includes(s.selectedElement.getAttribute("data-media-type"));
                if (!i || n || window.matchMedia(window.themeVariables.breakpoints.phone).matches) return;
                let a = s.viewport.getBoundingClientRect(),
                    r = Math.floor(a.right - a.width / 2);
                t.clientX > r ? s.next() : s.previous();
            }
            async _onMouseMove(e) {
                let t = await this.flickityInstance,
                    i = t.selectedElement.hasAttribute("data-media-type") && ["video", "external_video", "model"].includes(t.selectedElement.getAttribute("data-media-type"));
                this.classList.toggle("is-hovering-right", e.offsetX > this.clientWidth / 2 && !i), this.classList.toggle("is-hovering-left", e.offsetX <= this.clientWidth / 2 && !i);
            }
            async _preloadNextImage() {
                var e;
                let t = await this.flickity;
                t.selectedElement.nextElementSibling && (null == (e = t.selectedElement.nextElementSibling.querySelector("img")) || e.setAttribute("loading", "eager"));
            }
        }
    );
    window.customElements.define(
        "flickity-controls",
        class extends c {
            async connectedCallback() {
                this.flickityCarousel.addEventListener("flickity:ready", this._onSlideChanged.bind(this, !1)),
                    this.flickityCarousel.addEventListener("flickity:slide-changed", this._onSlideChanged.bind(this, !0)),
                    this.delegate.on("click", '[data-action="prev"]', () => this.flickityCarousel.previous()),
                    this.delegate.on("click", '[data-action="next"]', () => this.flickityCarousel.next()),
                    this.delegate.on("click", '[data-action="select"]', (e, t) => this.flickityCarousel.select(`#${t.getAttribute("aria-controls")}`));
            }
            get flickityCarousel() {
                return (this._flickityCarousel = this._flickityCarousel || document.getElementById(this.getAttribute("controls")));
            }
            async _onSlideChanged(e = !0) {
                let t = await this.flickityCarousel.flickityInstance;
                Array.from(this.querySelectorAll(`[aria-controls="${t.selectedElement.id}"]`)).forEach((t) => {
                    t.setAttribute("aria-current", "true"),
                        ne(t).forEach((e) => e.removeAttribute("aria-current")),
                        requestAnimationFrame(() => {
                            if (t.offsetParent && t.offsetParent !== this) {
                                let i = t.offsetParent.clientHeight / 2,
                                    s = t.offsetParent.clientWidth / 2;
                                t.offsetParent.scrollTo({ behavior: e ? "smooth" : "auto", top: t.offsetTop - i + t.clientHeight / 2, left: t.offsetLeft - s + t.clientWidth / 2 });
                            }
                        });
                });
            }
        }
    );
    window.customElements.define(
        "external-video",
        class extends c {
            constructor() {
                super(),
                    (this.hasLoaded = !1),
                    (async () => {
                        this.autoPlay ? (await this.untilVisible({ rootMargin: "300px", threshold: 0 }), this.play()) : this.addEventListener("click", this.play.bind(this), { once: !0 });
                    })();
            }
            get autoPlay() {
                return this.hasAttribute("autoplay");
            }
            get provider() {
                return this.getAttribute("provider");
            }
            async play() {
                this.hasLoaded || (await this._setupPlayer()),
                    "youtube" === this.provider
                        ? this.querySelector("iframe").contentWindow.postMessage(JSON.stringify({ event: "command", func: "playVideo", args: "" }), "*")
                        : "vimeo" === this.provider && this.querySelector("iframe").contentWindow.postMessage(JSON.stringify({ method: "play" }), "*");
            }
            pause() {
                this.hasLoaded &&
                    ("youtube" === this.provider
                        ? this.querySelector("iframe").contentWindow.postMessage(JSON.stringify({ event: "command", func: "pauseVideo", args: "" }), "*")
                        : "vimeo" === this.provider && this.querySelector("iframe").contentWindow.postMessage(JSON.stringify({ method: "pause" }), "*"));
            }
            _setupPlayer() {
                return this._setupPromise
                    ? this._setupPromise
                    : (this._setupPromise = new Promise((e) => {
                          let t = this.querySelector("template"),
                              i = t.content.firstElementChild.cloneNode(!0);
                          (i.onload = () => {
                              (this.hasLoaded = !0), e();
                          }),
                              this.autoPlay ? t.replaceWith(i) : ((this.innerHTML = ""), this.appendChild(i));
                      }));
            }
        }
    );
    var re = class {
        static load(e) {
            return e
                ? (this.loadedProducts[e] ||
                      (this.loadedProducts[e] = new Promise(async (t) => {
                          t(await (await fetch(`${window.themeVariables.routes.rootUrlWithoutSlash}/products/${e}.js`)).json());
                      })),
                  this.loadedProducts[e])
                : void 0;
        }
    };
    i(re, "loadedProducts", {});
    var oe = class extends HTMLElement {
        constructor() {
            super(),
                Q.load("modelViewerUiStyles"),
                window.Shopify.loadFeatures([
                    { name: "shopify-xr", version: "1.0", onLoad: this._setupShopifyXr.bind(this) },
                    {
                        name: "model-viewer-ui",
                        version: "1.0",
                        onLoad: () => {
                            this.modelUi = new window.Shopify.ModelViewerUI(this.firstElementChild, { focusOnPlay: !1 });
                            let e = this.querySelector("model-viewer");
                            e.addEventListener("shopify_model_viewer_ui_toggle_play", () => {
                                e.dispatchEvent(new CustomEvent("model:played", { bubbles: !0 }));
                            }),
                                e.addEventListener("shopify_model_viewer_ui_toggle_pause", () => {
                                    e.dispatchEvent(new CustomEvent("model:paused", { bubbles: !0 }));
                                });
                        },
                    },
                ]);
        }
        disconnectedCallback() {
            var e;
            null == (e = this.modelUi) || e.destroy();
        }
        play() {
            this.modelUi && this.modelUi.play();
        }
        pause() {
            this.modelUi && this.modelUi.pause();
        }
        async _setupShopifyXr() {
            if (window.ShopifyXR) {
                let e = (await re.load(this.getAttribute("product-handle"))).media.filter((e) => "model" === e.media_type);
                window.ShopifyXR.addModels(e), window.ShopifyXR.setupXRElements();
            } else document.addEventListener("shopify_xr_initialized", this._setupShopifyXr.bind(this));
        }
    };
    window.customElements.define("model-media", oe);
    var le = class extends HTMLElement {
        constructor() {
            super(), (this.hasLoaded = !1), this.autoPlay ? this.play() : this.addEventListener("click", this.play.bind(this), { once: !0 });
        }
        get autoPlay() {
            return this.hasAttribute("autoplay");
        }
        play() {
            this.hasLoaded || this._replaceContent(), this.querySelector("video").play();
        }
        pause() {
            this.hasLoaded && this.querySelector("video").pause();
        }
        _replaceContent() {
            let e = this.querySelector("template").content.firstElementChild.cloneNode(!0);
            (this.innerHTML = ""),
                this.appendChild(e),
                this.firstElementChild.addEventListener("play", () => {
                    this.dispatchEvent(new CustomEvent("video:played", { bubbles: !0 }));
                }),
                this.firstElementChild.addEventListener("pause", () => {
                    this.dispatchEvent(new CustomEvent("video:paused", { bubbles: !0 }));
                }),
                (this.hasLoaded = !0);
        }
    };
    window.customElements.define("native-video", le);
    window.customElements.define(
        "combo-box",
        class extends M {
            connectedCallback() {
                if (
                    (super.connectedCallback(),
                    (this.options = Array.from(this.querySelectorAll('[role="option"]'))),
                    this.delegate.on("click", '[role="option"]', this._onValueClicked.bind(this)),
                    this.delegate.on("keydown", '[role="listbox"]', this._onKeyDown.bind(this)),
                    this.delegate.on("change", "select", this._onValueChanged.bind(this)),
                    this.delegate.on("click", ".combo-box__overlay", () => (this.open = !1)),
                    this.hasAttribute("fit-toggle"))
                ) {
                    let e = Math.max(...this.options.map((e) => e.clientWidth)),
                        t = document.querySelector(`[aria-controls="${this.id}"]`);
                    t && t.style.setProperty("--largest-option-width", `${e + 2}px`);
                }
            }
            get nativeSelect() {
                return this.querySelector("select");
            }
            set selectedValue(e) {
                this.options.forEach((t) => {
                    t.setAttribute("aria-selected", t.getAttribute("value") === e ? "true" : "false");
                });
            }
            attributeChangedCallback(e, t, i) {
                if ((super.attributeChangedCallback(e, t, i), "open" === e)) {
                    if (this.open) {
                        let e = this.getBoundingClientRect();
                        this.classList.toggle("combo-box--top", e.top >= (window.innerHeight / 2) * 1.5), setTimeout(() => this.focusTrap.activate(), 150);
                    } else this.focusTrap.deactivate(), setTimeout(() => this.classList.remove("combo-box--top"), 200);
                    document.documentElement.classList.toggle("lock-mobile", this.open);
                }
            }
            _onValueClicked(e, t) {
                (this.selectedValue = t.value), (this.nativeSelect.value = t.value), this.nativeSelect.dispatchEvent(new Event("change", { bubbles: !0 })), (this.open = !1);
            }
            _onValueChanged(e, t) {
                Array.from(this.nativeSelect.options).forEach((e) => e.toggleAttribute("selected", t.value === e.value)), (this.selectedValue = t.value);
            }
            _onKeyDown(e) {
                var t, i;
                ("ArrowDown" === e.key || "ArrowUp" === e.key) &&
                    (e.preventDefault(), "ArrowDown" === e.key ? null == (t = document.activeElement.nextElementSibling) || t.focus() : null == (i = document.activeElement.previousElementSibling) || i.focus());
            }
        }
    );
    window.customElements.define(
        "quantity-selector",
        class extends c {
            connectedCallback() {
                (this.inputElement = this.querySelector("input")),
                    this.delegate.on("click", "button:first-child", () => (this.inputElement.quantity = this.inputElement.quantity - 1)),
                    this.delegate.on("click", "button:last-child", () => (this.inputElement.quantity = this.inputElement.quantity + 1));
            }
        }
    );
    var de = class extends HTMLInputElement {
        connectedCallback() {
            this.addEventListener("input", this._onValueInput.bind(this)), this.addEventListener("change", this._onValueChanged.bind(this)), this.addEventListener("keydown", this._onKeyDown.bind(this));
        }
        get quantity() {
            return parseInt(this.value);
        }
        set quantity(e) {
            let t = ("number" == typeof e || ("string" == typeof e && "" !== e.trim())) && !isNaN(e);
            "" !== e && ((!t || e < 0) && (e = parseInt(e) || 1), (this.value = Math.max(this.min || 1, Math.min(e, this.max || Number.MAX_VALUE)).toString()), (this.size = Math.max(this.value.length + 1, 2)));
        }
        _onValueInput() {
            this.quantity = this.value;
        }
        _onValueChanged() {
            "" === this.value && (this.quantity = 1);
        }
        _onKeyDown(e) {
            e.stopPropagation(), "ArrowUp" === e.key ? (this.quantity = this.quantity + 1) : "ArrowDown" === e.key && (this.quantity = this.quantity - 1);
        }
    };
    window.customElements.define("input-number", de, { extends: "input" });
    window.customElements.define(
        "announcement-bar",
        class extends c {
            async connectedCallback() {
                await customElements.whenDefined("announcement-bar-item"),
                    (this.items = Array.from(this.querySelectorAll("announcement-bar-item"))),
                    (this.hasPendingTransition = !1),
                    this.delegate.on("click", '[data-action="prev"]', this.previous.bind(this)),
                    this.delegate.on("click", '[data-action="next"]', this.next.bind(this)),
                    this.autoPlay && (this.delegate.on("announcement-bar:content:open", this._pausePlayer.bind(this)), this.delegate.on("announcement-bar:content:close", this._startPlayer.bind(this))),
                    window.ResizeObserver && ((this.resizeObserver = new ResizeObserver(this._updateCustomProperties.bind(this))), this.resizeObserver.observe(this)),
                    this.autoPlay && this._startPlayer(),
                    Shopify.designMode && this.delegate.on("shopify:block:select", (e) => this.select(e.target.index, !1));
            }
            get autoPlay() {
                return this.hasAttribute("auto-play");
            }
            get selectedIndex() {
                return this.items.findIndex((e) => e.selected);
            }
            previous() {
                this.select((this.selectedIndex - 1 + this.items.length) % this.items.length);
            }
            next() {
                this.select((this.selectedIndex + 1 + this.items.length) % this.items.length);
            }
            async select(e, t = !0) {
                this.selectedIndex !== e &&
                    !this.hasPendingTransition &&
                    (this.autoPlay && this._pausePlayer(),
                    (this.hasPendingTransition = !0),
                    await this.items[this.selectedIndex].deselect(t),
                    await this.items[e].select(t),
                    (this.hasPendingTransition = !1),
                    this.autoPlay && this._startPlayer());
            }
            _pausePlayer() {
                clearInterval(this._interval);
            }
            _startPlayer() {
                this._interval = setInterval(this.next.bind(this), 1e3 * parseInt(this.getAttribute("cycle-speed")));
            }
            _updateCustomProperties(e) {
                e.forEach((e) => {
                    if (e.target === this) {
                        let t = e.borderBoxSize ? (e.borderBoxSize.length > 0 ? e.borderBoxSize[0].blockSize : e.borderBoxSize.blockSize) : e.target.clientHeight;
                        document.documentElement.style.setProperty("--announcement-bar-height", `${t}px`);
                    }
                });
            }
        }
    );
    window.customElements.define(
        "announcement-bar-item",
        class extends c {
            connectedCallback() {
                this.hasContent &&
                    ((this.contentElement = this.querySelector(".announcement-bar__content")),
                    this.delegate.on("click", '[data-action="open-content"]', this.openContent.bind(this)),
                    this.delegate.on("click", '[data-action="close-content"]', this.closeContent.bind(this)),
                    Shopify.designMode && (this.addEventListener("shopify:block:select", this.openContent.bind(this)), this.addEventListener("shopify:block:deselect", this.closeContent.bind(this))));
            }
            get index() {
                return [...this.parentNode.children].indexOf(this);
            }
            get hasContent() {
                return this.hasAttribute("has-content");
            }
            get selected() {
                return !this.hasAttribute("hidden");
            }
            get focusTrap() {
                return (this._trapFocus =
                    this._trapFocus ||
                    T(this.contentElement.querySelector(".announcement-bar__content-inner"), {
                        fallbackFocus: this,
                        clickOutsideDeactivates: (e) => "BUTTON" !== e.target.tagName,
                        allowOutsideClick: (e) => "BUTTON" === e.target.tagName,
                        onDeactivate: this.closeContent.bind(this),
                        preventScroll: !0,
                    }));
            }
            async select(e = !0) {
                this.removeAttribute("hidden"),
                    await new Promise((t) => {
                        this.animate({ transform: ["translateY(8px)", "translateY(0)"], opacity: [0, 1] }, { duration: e ? 150 : 0, easing: "ease-in-out" }).onfinish = t;
                    });
            }
            async deselect(e = !0) {
                await this.closeContent(),
                    await new Promise((t) => {
                        this.animate({ transform: ["translateY(0)", "translateY(-8px)"], opacity: [1, 0] }, { duration: e ? 150 : 0, easing: "ease-in-out" }).onfinish = t;
                    }),
                    this.setAttribute("hidden", "");
            }
            async openContent() {
                this.hasContent &&
                    (this.contentElement.addEventListener("transitionend", () => this.focusTrap.activate(), { once: !0 }),
                    this.contentElement.removeAttribute("hidden"),
                    document.documentElement.classList.add("lock-all"),
                    this.dispatchEvent(new CustomEvent("announcement-bar:content:open", { bubbles: !0 })));
            }
            async closeContent() {
                if (!this.hasContent || this.contentElement.hasAttribute("hidden")) return Promise.resolve();
                await new Promise((e) => {
                    this.contentElement.addEventListener("transitionend", () => e(), { once: !0 }),
                        this.contentElement.setAttribute("hidden", ""),
                        this.focusTrap.deactivate(),
                        document.documentElement.classList.remove("lock-all"),
                        this.dispatchEvent(new CustomEvent("announcement-bar:content:close", { bubbles: !0 }));
                });
            }
        }
    );
    var ce = class extends HTMLElement {
        connectedCallback() {
            (this.facetToolbar = document.getElementById("mobile-facet-toolbar")),
                (this.tabsNav = document.getElementById("search-tabs-nav")),
                this.tabsNav.addEventListener("tabs-nav:changed", this._onCategoryChanged.bind(this)),
                this._completeSearch();
        }
        get terms() {
            return this.getAttribute("terms");
        }
        get completeFor() {
            return JSON.parse(this.getAttribute("complete-for")).filter((e) => "" !== e);
        }
        async _completeSearch() {
            let e = [];
            this.completeFor.forEach((t) => {
                e.push(
                    fetch(
                        `${window.themeVariables.routes.searchUrl}?section_id=${this.getAttribute("section-id")}&q=${this.terms}&type=${t}&options[prefix]=last&options[unavailable_products]=${
                            window.themeVariables.settings.searchUnavailableProducts
                        }`
                    )
                );
            }),
                await Promise.all(
                    (await Promise.all(e)).map(async (e) => {
                        let t = document.createElement("div");
                        t.innerHTML = await e.text();
                        let i = t.querySelector(".main-search__category-result"),
                            s = t.querySelector("#search-tabs-nav .tabs-nav__item");
                        i && (i.setAttribute("hidden", ""), this.insertAdjacentElement("beforeend", i), this.tabsNav.addButton(s));
                    })
                );
        }
        _onCategoryChanged(e) {
            let t = e.detail.button;
            this.facetToolbar.classList.toggle("is-collapsed", "product" !== t.getAttribute("data-type"));
        }
    };
    window.customElements.define("search-page", ce);
    window.customElements.define(
        "cookie-bar",
        class extends c {
            connectedCallback() {
                window.Shopify &&
                    window.Shopify.designMode &&
                    (this.rootDelegate.on("shopify:section:select", (e) => P(e, this, () => (this.open = !0))), this.rootDelegate.on("shopify:section:deselect", (e) => P(e, this, () => (this.open = !1)))),
                    this.delegate.on("click", '[data-action~="accept-policy"]', this._acceptPolicy.bind(this)),
                    this.delegate.on("click", '[data-action~="decline-policy"]', this._declinePolicy.bind(this)),
                    window.Shopify.loadFeatures([{ name: "consent-tracking-api", version: "0.1", onLoad: this._onCookieBarSetup.bind(this) }]);
            }
            set open(e) {
                this.toggleAttribute("hidden", !e);
            }
            _onCookieBarSetup() {
                window.Shopify.customerPrivacy.shouldShowGDPRBanner() && (this.open = !0);
            }
            _acceptPolicy() {
                window.Shopify.customerPrivacy.setTrackingConsent(!0, () => (this.open = !1));
            }
            _declinePolicy() {
                window.Shopify.customerPrivacy.setTrackingConsent(!1, () => (this.open = !1));
            }
        }
    );
    var he = class extends HTMLElement {
        async connectedCallback() {
            if (!this.hasAttribute("use-automatic-recommendations")) return;
            let e = await fetch(`${window.themeVariables.routes.productRecommendationsUrl}?product_id=${this.productId}&limit=${this.recommendationsCount}&section_id=${this.sectionId}`),
                t = document.createElement("div");
            t.innerHTML = await e.text();
            let i = t.querySelector("product-recommendations");
            if (i.hasChildNodes() && ((this.innerHTML = i.innerHTML), Shopify.enable_flash_sale || Shopify.enable_namagoo)) {
                let e = $(".product-card-price");
                for (let t = 0; t < e.length; t++) B(e, t);
            }
        }
        get productId() {
            return this.getAttribute("product-id");
        }
        get sectionId() {
            return this.getAttribute("section-id");
        }
        get recommendationsCount() {
            return parseInt(this.getAttribute("recommendations-count") || 4);
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
            i.hasChildNodes() && (this.innerHTML = i.innerHTML);
        }
        get searchQueryString() {
            let e = JSON.parse(localStorage.getItem("theme:recently-viewed-products") || "[]");
            return (
                this.hasAttribute("exclude-product-id") && e.includes(parseInt(this.getAttribute("exclude-product-id"))) && e.splice(e.indexOf(parseInt(this.getAttribute("exclude-product-id"))), 1),
                e
                    .map((e) => "id:" + e)
                    .slice(0, this.productsCount)
                    .join(" OR ")
            );
        }
        get sectionId() {
            return this.getAttribute("section-id");
        }
        get productsCount() {
            return this.getAttribute("products-count") || 4;
        }
    };
    function pe(e, t) {
        let i = "string" == typeof e ? e : e.preview_image ? e.preview_image.src : e.url;
        if (null === t) return i;
        if ("master" === t) return i.replace(/http(s)?:/, "");
        let s = i.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
        if (!s) return null;
        {
            let e = i.split(s[0]),
                n = s[0];
            return (e[0] + "_" + t + n).replace(/http(s)?:/, "");
        }
    }
    function me(e, t) {
        let i = [];
        return (
            ("string" == typeof e ? t : be(e, t)).forEach((t) => {
                i.push(`${pe(e, t + "x")} ${t}w`);
            }),
            i.join(",")
        );
    }
    function be(e, t) {
        let i = [],
            s = e.preview_image.width;
        return (
            t.forEach((e) => {
                s >= e && i.push(e);
            }),
            i
        );
    }
    function ge(e) {
        return new Promise((t) => {
            !e || "IMG" !== e.tagName || e.complete ? t() : (e.onload = () => t());
        });
    }
    window.customElements.define("recently-viewed-products", ue);
    var fe = class {
            constructor(e) {
                (this._effect = e), (this._playState = "idle"), (this._finished = Promise.resolve());
            }
            get finished() {
                return this._finished;
            }
            get animationEffects() {
                return this._effect instanceof ye ? [this._effect] : this._effect.animationEffects;
            }
            cancel() {
                this.animationEffects.forEach((e) => e.cancel());
            }
            finish() {
                this.animationEffects.forEach((e) => e.finish());
            }
            play() {
                (this._playState = "running"),
                    this._effect.play(),
                    (this._finished = this._effect.finished),
                    this._finished.then(
                        () => {
                            this._playState = "finished";
                        },
                        (e) => {
                            this._playState = "idle";
                        }
                    );
            }
        },
        ye = class {
            constructor(e, t, i = {}) {
                e &&
                    ("Animation" in window ? (this._animation = new Animation(new KeyframeEffect(e, t, i))) : ((i.fill = "forwards"), (this._animation = e.animate(t, i)), this._animation.pause()),
                    this._animation.addEventListener("finish", () => {
                        (e.style.opacity = t.hasOwnProperty("opacity") ? t.opacity[t.opacity.length - 1] : null), (e.style.visibility = t.hasOwnProperty("visibility") ? t.visibility[t.visibility.length - 1] : null);
                    }));
            }
            get finished() {
                return this._animation ? (this._animation.finished ? this._animation.finished : new Promise((e) => (this._animation.onfinish = e))) : Promise.resolve();
            }
            play() {
                this._animation && ((this._animation.startTime = null), this._animation.play());
            }
            cancel() {
                this._animation && this._animation.cancel();
            }
            finish() {
                this._animation && this._animation.finish();
            }
        },
        we = class {
            constructor(e) {
                (this._childrenEffects = e), (this._finished = Promise.resolve());
            }
            get finished() {
                return this._finished;
            }
            get animationEffects() {
                return this._childrenEffects.flatMap((e) => (e instanceof ye ? e : e.animationEffects));
            }
        },
        ve = class extends we {
            play() {
                let e = [];
                for (let t of this._childrenEffects) t.play(), e.push(t.finished);
                this._finished = Promise.all(e);
            }
        },
        _e = class extends we {
            play() {
                this._finished = new Promise(async (e, t) => {
                    try {
                        for (let e of this._childrenEffects) e.play(), await e.finished;
                        e();
                    } catch (e) {
                        t();
                    }
                });
            }
        },
        Ee = class extends HTMLElement {
            async connectedCallback() {
                (this._pendingAnimations = []),
                    this.addEventListener("split-lines:re-split", (e) => {
                        Array.from(e.target.children).forEach((e) => (e.style.visibility = this.selected ? "visible" : "hidden"));
                    }),
                    se.prefersReducedMotion() &&
                        (this.setAttribute("reveal-visibility", ""),
                        Array.from(this.querySelectorAll("[reveal], [reveal-visibility]")).forEach((e) => {
                            e.removeAttribute("reveal"), e.removeAttribute("reveal-visibility");
                        }));
            }
            get index() {
                return [...this.parentNode.children].indexOf(this);
            }
            get selected() {
                return !this.hasAttribute("hidden");
            }
            async transitionToLeave(e, t = !0) {
                "reveal" !== e && this.setAttribute("hidden", ""), this._pendingAnimations.forEach((e) => e.cancel()), (this._pendingAnimations = []);
                let i = null,
                    s = await ae(this.querySelectorAll("split-lines, .button-group, .button-wrapper")),
                    n = Array.from(this.querySelectorAll(".slideshow__image-wrapper"));
                switch (e) {
                    case "sweep":
                        i = new fe(new _e([new ye(this, { visibility: ["visible", "hidden"] }, { duration: 500 }), new ve(s.map((e) => new ye(e, { opacity: [1, 0], visibility: ["visible", "hidden"] })))]));
                        break;
                    case "fade":
                        i = new fe(new ye(this, { opacity: [1, 0], visibility: ["visible", "hidden"] }, { duration: 250, easing: "ease-in-out" }));
                        break;
                    case "reveal":
                        i = new fe(
                            new _e([
                                new ve(s.reverse().map((e) => new ye(e, { opacity: [1, 0], visibility: ["visible", "hidden"] }, { duration: 250, easing: "ease-in-out" }))),
                                new ve(
                                    n.map((e) =>
                                        e.classList.contains("slideshow__image-wrapper--secondary")
                                            ? new ye(e, { visibility: ["visible", "hidden"], clipPath: ["inset(0 0 0 0)", "inset(100% 0 0 0)"] }, { duration: 450, easing: "cubic-bezier(0.99, 0.01, 0.50, 0.94)" })
                                            : new ye(e, { visibility: ["visible", "hidden"], clipPath: ["inset(0 0 0 0)", "inset(0 0 100% 0)"] }, { duration: 450, easing: "cubic-bezier(0.99, 0.01, 0.50, 0.94)" })
                                    )
                                ),
                            ])
                        );
                }
                await this._executeAnimation(i, t), "reveal" === e && this.setAttribute("hidden", "");
            }
            async transitionToEnter(e, t = !0, i = !1) {
                this.removeAttribute("hidden"), await this._untilReady();
                let s = null,
                    n = await ae(this.querySelectorAll("split-lines, .button-group, .button-wrapper")),
                    a = Array.from(this.querySelectorAll(".slideshow__image-wrapper"));
                switch (e) {
                    case "sweep":
                        s = new fe(
                            new _e([
                                new ye(this, { visibility: ["hidden", "visible"], clipPath: i ? ["inset(0 100% 0 0)", "inset(0 0 0 0)"] : ["inset(0 0 0 100%)", "inset(0 0 0 0)"] }, { duration: 500, easing: "cubic-bezier(1, 0, 0, 1)" }),
                                new ve(
                                    n.map(
                                        (e, t) =>
                                            new ye(
                                                e,
                                                { opacity: [0, 1], visibility: ["hidden", "visible"], clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"], transform: ["translateY(100%)", "translateY(0)"] },
                                                { duration: 450, delay: 100 * t, easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)" }
                                            )
                                    )
                                ),
                            ])
                        );
                        break;
                    case "fade":
                        s = new fe(new ye(this, { opacity: [0, 1], visibility: ["hidden", "visible"] }, { duration: 250, easing: "ease-in-out" }));
                        break;
                    case "reveal":
                        s = new fe(
                            new _e([
                                new ve(
                                    a.map((e) =>
                                        e.classList.contains("slideshow__image-wrapper--secondary")
                                            ? new ye(e, { visibility: ["hidden", "visible"], clipPath: ["inset(100% 0 0 0)", "inset(0 0 0 0)"] }, { duration: 450, delay: 100, easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)" })
                                            : new ye(e, { visibility: ["hidden", "visible"], clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"] }, { duration: 450, delay: 100, easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)" })
                                    )
                                ),
                                new ve(
                                    n.map(
                                        (e, t) =>
                                            new ye(
                                                e,
                                                { opacity: [0, 1], visibility: ["hidden", "visible"], clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"], transform: ["translateY(100%)", "translateY(0)"] },
                                                { duration: 450, delay: 100 * t, easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)" }
                                            )
                                    )
                                ),
                            ])
                        );
                }
                return this._executeAnimation(s, t);
            }
            async _executeAnimation(e, t) {
                return this._pendingAnimations.push(e), t ? e.play() : e.finish(), e.finished;
            }
            async _untilReady() {
                return Promise.all(this._getVisibleImages().map((e) => ge(e)));
            }
            _preloadImages() {
                this._getVisibleImages().forEach((e) => {
                    e.setAttribute("loading", "eager");
                });
            }
            _getVisibleImages() {
                return Array.from(this.querySelectorAll("img")).filter((e) => "none" !== getComputedStyle(e.parentElement).display);
            }
        };
    window.customElements.define("slide-show-item", Ee);
    var Se = {
            _blockVerticalScroll(e = 18) {
                this.addEventListener("touchstart", (e) => {
                    this.firstTouchClientX = e.touches[0].clientX;
                }),
                    this.addEventListener(
                        "touchmove",
                        (t) => {
                            Math.abs(t.touches[0].clientX - this.firstTouchClientX) > e && t.preventDefault();
                        },
                        { passive: !1 }
                    );
            },
        },
        xe = class extends c {
            connectedCallback() {
                (this.items = Array.from(this.querySelectorAll("slide-show-item"))),
                    (this.pageDots = this.querySelector("page-dots")),
                    (this.isTransitioning = !1),
                    this.items.length > 1 &&
                        (Shopify.designMode &&
                            (this.addEventListener("shopify:block:deselect", this.startPlayer.bind(this)),
                            this.addEventListener("shopify:block:select", (e) => {
                                this.pausePlayer(), this.intersectionObserver.disconnect(), (!e.detail.load && e.target.selected) || this.select(e.target.index, !e.detail.load);
                            })),
                        this.addEventListener("swiperight", this.previous.bind(this)),
                        this.addEventListener("swipeleft", this.next.bind(this)),
                        this.addEventListener("page-dots:changed", (e) => this.select(e.detail.index)),
                        this._blockVerticalScroll()),
                    this._setupVisibility();
            }
            get selectedIndex() {
                return this.items.findIndex((e) => e.selected);
            }
            get transitionType() {
                return se.prefersReducedMotion() ? "fade" : this.getAttribute("transition-type");
            }
            async _setupVisibility() {
                await this.untilVisible(), await this.items[this.selectedIndex].transitionToEnter(this.transitionType).catch((e) => {}), this.startPlayer();
            }
            previous() {
                this.select((this.selectedIndex - 1 + this.items.length) % this.items.length, !0, !0);
            }
            next() {
                this.select((this.selectedIndex + 1 + this.items.length) % this.items.length, !0, !1);
            }
            async select(e, t = !0, i = !1) {
                if ("reveal" === this.transitionType && this.isTransitioning) return;
                this.isTransitioning = !0;
                let s = this.items[this.selectedIndex],
                    n = this.items[e];
                this.items[(n.index + 1) % this.items.length]._preloadImages(),
                    s && s !== n && ("reveal" !== this.transitionType ? s.transitionToLeave(this.transitionType, t) : await s.transitionToLeave(this.transitionType, t)),
                    this.pageDots && (this.pageDots.selectedIndex = n.index),
                    await n.transitionToEnter(this.transitionType, t, i).catch((e) => {}),
                    (this.isTransitioning = !1);
            }
            pausePlayer() {
                this.style.setProperty("--section-animation-play-state", "paused");
            }
            startPlayer() {
                this.hasAttribute("auto-play") && this.style.setProperty("--section-animation-play-state", "running");
            }
        };
    Object.assign(xe.prototype, Se), window.customElements.define("slide-show", xe);
    var ke = class extends HTMLElement {
        get index() {
            return [...this.parentNode.children].indexOf(this);
        }
        get selected() {
            return !this.hasAttribute("hidden");
        }
        get hasAttachedImage() {
            return this.hasAttribute("attached-image");
        }
        async transitionToEnter(e = !0) {
            this.removeAttribute("hidden");
            let t = this.querySelector(".image-with-text__text-wrapper"),
                i = await ae(this.querySelectorAll(".image-with-text__content split-lines")),
                s = new fe(
                    new _e([
                        new ve(
                            i.map(
                                (e, t) =>
                                    new ye(
                                        e,
                                        { opacity: [0, 0.2, 1], transform: ["translateY(100%)", "translateY(0)"], clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"] },
                                        { duration: 350, delay: 120 * t, easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)" }
                                    )
                            )
                        ),
                        new ye(t, { opacity: [0, 1] }, { duration: 300 }),
                    ])
                );
            return e ? s.play() : s.finish(), s.finished;
        }
        async transitionToLeave(e = !0) {
            let t = await ae(this.querySelectorAll(".image-with-text__text-wrapper, .image-with-text__content split-lines")),
                i = new fe(new ve(t.map((e) => new ye(e, { opacity: [1, 0] }, { duration: 200 }))));
            e ? i.play() : i.finish(), await i.finished, this.setAttribute("hidden", "");
        }
    };
    window.customElements.define("image-with-text-item", ke);
    window.customElements.define(
        "image-with-text",
        class extends c {
            connectedCallback() {
                (this.items = Array.from(this.querySelectorAll("image-with-text-item"))),
                    (this.imageItems = Array.from(this.querySelectorAll(".image-with-text__image"))),
                    (this.pageDots = this.querySelector("page-dots")),
                    (this.hasPendingTransition = !1),
                    this.items.length > 1 &&
                        (this.addEventListener("page-dots:changed", (e) => this.select(e.detail.index)),
                        Shopify.designMode &&
                            (this.addEventListener("shopify:block:deselect", this.startPlayer.bind(this)),
                            this.addEventListener("shopify:block:select", (e) => {
                                this.intersectionObserver.disconnect(), this.pausePlayer(), this.select(e.target.index, !e.detail.load);
                            }))),
                    this._setupVisibility();
            }
            async _setupVisibility() {
                await this.untilVisible(), this.hasAttribute("reveal-on-scroll") && (await this.transitionImage(this.selectedIndex), this.select(this.selectedIndex)), this.startPlayer();
            }
            get selectedIndex() {
                return this.items.findIndex((e) => e.selected);
            }
            async select(e, t = !0) {
                this.hasPendingTransition ||
                    ((this.hasPendingTransition = !0),
                    (this.items[e].hasAttachedImage || !t) && (await this.transitionImage(e, t)),
                    this.selectedIndex !== e && (await this.items[this.selectedIndex].transitionToLeave(t)),
                    this.pageDots && (this.pageDots.selectedIndex = e),
                    await this.items[e].transitionToEnter(t),
                    (this.hasPendingTransition = !1));
            }
            async transitionImage(e, t = !0) {
                let i = this.imageItems.find((e) => !e.hasAttribute("hidden")),
                    s = this.imageItems.find((t) => t.id === this.items[e].getAttribute("attached-image")) || i;
                i.setAttribute("hidden", ""), s.removeAttribute("hidden"), await ge(s);
                let n = new fe(new ye(s, { visibility: ["hidden", "visible"], clipPath: ["inset(0 0 0 100%)", "inset(0 0 0 0)"] }, { duration: 600, easing: "cubic-bezier(1, 0, 0, 1)" }));
                t ? n.play() : n.finish();
            }
            pausePlayer() {
                this.style.setProperty("--section-animation-play-state", "paused");
            }
            startPlayer() {
                this.style.setProperty("--section-animation-play-state", "running");
            }
        }
    );
    window.customElements.define(
        "testimonial-item",
        class extends c {
            connectedCallback() {
                this.addEventListener("split-lines:re-split", (e) => {
                    Array.from(e.target.children).forEach((e) => (e.style.visibility = this.selected ? "visible" : "hidden"));
                });
            }
            get index() {
                return [...this.parentNode.children].indexOf(this);
            }
            get selected() {
                return !this.hasAttribute("hidden");
            }
            async transitionToLeave(e = !0) {
                let t = await ae(this.querySelectorAll("split-lines, .testimonial__author")),
                    i = new fe(
                        new ve(
                            t
                                .reverse()
                                .map(
                                    (e, t) =>
                                        new ye(
                                            e,
                                            { visibility: ["visible", "hidden"], clipPath: ["inset(0 0 0 0)", "inset(0 0 100% 0)"], transform: ["translateY(0)", "translateY(100%)"] },
                                            { duration: 350, delay: 60 * t, easing: "cubic-bezier(0.68, 0.00, 0.77, 0.00)" }
                                        )
                                )
                        )
                    );
                e ? i.play() : i.finish(), await i.finished, this.setAttribute("hidden", "");
            }
            async transitionToEnter(e = !0) {
                let t = await ae(this.querySelectorAll("split-lines, .testimonial__author")),
                    i = new fe(
                        new ve(
                            t.map(
                                (e, t) =>
                                    new ye(
                                        e,
                                        { visibility: ["hidden", "visible"], clipPath: ["inset(0 0 100% 0)", "inset(0 0 0px 0)"], transform: ["translateY(100%)", "translateY(0)"] },
                                        { duration: 550, delay: 120 * t, easing: "cubic-bezier(0.23, 1, 0.32, 1)" }
                                    )
                            )
                        )
                    );
                return this.removeAttribute("hidden"), e ? i.play() : i.finish(), i.finished;
            }
        }
    );
    var Le = class extends c {
        connectedCallback() {
            (this.items = Array.from(this.querySelectorAll("testimonial-item"))),
                (this.pageDots = this.querySelector("page-dots")),
                (this.hasPendingTransition = !1),
                this.items.length > 1 &&
                    (this.addEventListener("swiperight", this.previous.bind(this)),
                    this.addEventListener("swipeleft", this.next.bind(this)),
                    this.addEventListener("prev-next:prev", this.previous.bind(this)),
                    this.addEventListener("prev-next:next", this.next.bind(this)),
                    this.addEventListener("page-dots:changed", (e) => this.select(e.detail.index)),
                    Shopify.designMode &&
                        this.addEventListener("shopify:block:select", (e) => {
                            var t;
                            null == (t = this.intersectionObserver) || t.disconnect(), (e.detail.load || !e.target.selected) && this.select(e.target.index, !e.detail.load);
                        }),
                    this._blockVerticalScroll()),
                this.hasAttribute("reveal-on-scroll") && this._setupVisibility();
        }
        get selectedIndex() {
            return this.items.findIndex((e) => e.selected);
        }
        async _setupVisibility() {
            await this.untilVisible(), this.items[this.selectedIndex].transitionToEnter();
        }
        previous() {
            this.select((this.selectedIndex - 1 + this.items.length) % this.items.length);
        }
        next() {
            this.select((this.selectedIndex + 1 + this.items.length) % this.items.length);
        }
        async select(e, t = !0) {
            this.hasPendingTransition ||
                ((this.hasPendingTransition = !0), await this.items[this.selectedIndex].transitionToLeave(t), this.pageDots && (this.pageDots.selectedIndex = e), await this.items[e].transitionToEnter(t), (this.hasPendingTransition = !1));
        }
    };
    Object.assign(Le.prototype, Se), window.customElements.define("testimonial-list", Le);
    var Ae = class extends HTMLElement {
        get index() {
            return [...this.parentNode.children].indexOf(this);
        }
        get selected() {
            return !this.hasAttribute("hidden");
        }
        async transitionToLeave(e = !0) {
            this.setAttribute("hidden", "");
            let t = new fe(new ye(this, { visibility: ["visible", "hidden"] }, { duration: 500 }));
            return e ? t.play() : t.finish(), t.finished;
        }
        async transitionToEnter(e = !0) {
            this.removeAttribute("hidden");
            let t = Array.from(this.querySelectorAll(".shop-the-look__dot"));
            t.forEach((e) => (e.style.opacity = 0));
            let i = new fe(
                new _e([
                    new ve(Array.from(this.querySelectorAll(".shop-the-look__image")).map((e) => new ye(e, { opacity: [1, 1] }, { duration: 0 }))),
                    new ye(this, { visibility: ["hidden", "visible"], zIndex: [0, 1], clipPath: ["inset(0 0 0 100%)", "inset(0 0 0 0)"] }, { duration: 500, easing: "cubic-bezier(1, 0, 0, 1)" }),
                    new ve(t.map((e, t) => new ye(e, { opacity: [0, 1], transform: ["scale(0)", "scale(1)"] }, { duration: 120, delay: 75 * t, easing: "ease-in-out" }))),
                ])
            );
            if ((e ? i.play() : i.finish(), await i.finished, window.matchMedia(window.themeVariables.breakpoints.tabletAndUp).matches)) {
                let e = this.querySelector(".shop-the-look__product-wrapper .shop-the-look__dot");
                null == e || e.setAttribute("aria-expanded", "true");
            }
        }
    };
    window.customElements.define("shop-the-look-item", Ae);
    window.customElements.define(
        "shop-the-look-nav",
        class extends c {
            connectedCallback() {
                (this.shopTheLook = this.closest("shop-the-look")), this.delegate.on("click", '[data-action="prev"]', () => this.shopTheLook.previous()), this.delegate.on("click", '[data-action="next"]', () => this.shopTheLook.next());
            }
            transitionToIndex(e, t = !0) {
                let i = Array.from(this.querySelectorAll(".shop-the-look__counter-page-transition")),
                    s = i.find((e) => !e.hasAttribute("hidden")),
                    n = i[e];
                (s.animate({ transform: ["translateY(0)", "translateY(-100%)"] }, { duration: t ? 1e3 : 0, easing: "cubic-bezier(1, 0, 0, 1)" }).onfinish = () => s.setAttribute("hidden", "")),
                    n.removeAttribute("hidden"),
                    n.animate({ transform: ["translateY(100%)", "translateY(0)"] }, { duration: t ? 1e3 : 0, easing: "cubic-bezier(1, 0, 0, 1)" });
            }
        }
    );
    window.customElements.define(
        "shop-the-look",
        class extends c {
            connectedCallback() {
                (this.lookItems = Array.from(this.querySelectorAll("shop-the-look-item"))),
                    (this.nav = this.querySelector("shop-the-look-nav")),
                    (this.hasPendingTransition = !1),
                    this.hasAttribute("reveal-on-scroll") && this._setupVisibility(),
                    this.lookItems.length > 1 &&
                        Shopify.designMode &&
                        this.addEventListener("shopify:block:select", async (e) => {
                            this.intersectionObserver.disconnect(),
                                await this.select(e.target.index, !e.detail.load),
                                this.nav.animate({ opacity: [0, 1], transform: ["translateY(30px)", "translateY(0)"] }, { duration: 0, fill: "forwards", easing: "ease-in-out" });
                        });
            }
            get selectedIndex() {
                return this.lookItems.findIndex((e) => e.selected);
            }
            async _setupVisibility() {
                await this.untilVisible();
                let e = Array.from(this.lookItems[this.selectedIndex].querySelectorAll(".shop-the-look__image"));
                for (let t of e) null !== t.offsetParent && (await ge(t));
                await this.lookItems[this.selectedIndex].transitionToEnter(), this.nav && this.nav.animate({ opacity: [0, 1], transform: ["translateY(30px)", "translateY(0)"] }, { duration: 150, fill: "forwards", easing: "ease-in-out" });
            }
            previous() {
                this.select((this.selectedIndex - 1 + this.lookItems.length) % this.lookItems.length);
            }
            next() {
                this.select((this.selectedIndex + 1 + this.lookItems.length) % this.lookItems.length);
            }
            async select(e, t = !0) {
                let i = this.lookItems[this.selectedIndex],
                    s = this.lookItems[e];
                this.hasPendingTransition || ((this.hasPendingTransition = !0), i !== s && (this.nav.transitionToIndex(e, t), i.transitionToLeave()), s.transitionToEnter(t), (this.hasPendingTransition = !1));
            }
        }
    );
    window.customElements.define(
        "collection-list",
        class extends c {
            async connectedCallback() {
                (this.items = Array.from(this.querySelectorAll(".list-collections__item"))),
                    this.hasAttribute("scrollable") &&
                        ((this.scroller = this.querySelector(".list-collections__scroller")),
                        this.addEventListener("prev-next:prev", this.previous.bind(this)),
                        this.addEventListener("prev-next:next", this.next.bind(this)),
                        this.addEventListener("shopify:block:select", (e) => e.target.scrollIntoView({ block: "nearest", inline: "center", behavior: e.detail.load ? "auto" : "smooth" }))),
                    this.hasAttribute("reveal-on-scroll") && this._setupVisibility();
            }
            async _setupVisibility() {
                await this.untilVisible();
                let e = se.prefersReducedMotion(),
                    t = new fe(
                        new ve(
                            this.items.map(
                                (t, i) =>
                                    new _e([
                                        new ye(
                                            t.querySelector(".list-collections__item-image"),
                                            { opacity: [0, 1], transform: [`scale(${e ? 1 : 1.1})`, "scale(1)"] },
                                            { duration: 250, delay: e ? 0 : 150 * i, easing: "cubic-bezier(0.65, 0, 0.35, 1)" }
                                        ),
                                        new ve(
                                            Array.from(t.querySelectorAll(".list-collections__item-info [reveal]")).map(
                                                (t, s) =>
                                                    new ye(
                                                        t,
                                                        { opacity: [0, 1], clipPath: [`inset(${e ? "0 0 0 0" : "0 0 100% 0"})`, "inset(0 0 0 0)"], transform: [`translateY(${e ? 0 : "100%"})`, "translateY(0)"] },
                                                        { duration: 200, delay: e ? 0 : 150 * i + 150 * s, easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)" }
                                                    )
                                            )
                                        ),
                                    ])
                            )
                        )
                    );
                this._hasSectionReloaded ? t.finish() : t.play();
            }
            previous() {
                let e = "ltr" === window.themeVariables.settings.direction ? 1 : -1;
                this.scroller.scrollBy({ left: -this.items[0].clientWidth * e, behavior: "smooth" });
            }
            next() {
                let e = "ltr" === window.themeVariables.settings.direction ? 1 : -1;
                this.scroller.scrollBy({ left: this.items[0].clientWidth * e, behavior: "smooth" });
            }
        }
    );
    var Ce = class extends c {
        constructor() {
            super(), (this.productListInner = this.querySelector(".product-list__inner")), (this.productItems = Array.from(this.querySelectorAll("product-item")));
        }
        connectedCallback() {
            this.addEventListener("prev-next:prev", this.previous.bind(this)), this.addEventListener("prev-next:next", this.next.bind(this)), !this.hidden && this.staggerApparition && this._staggerProductsApparition();
        }
        get staggerApparition() {
            return this.hasAttribute("stagger-apparition");
        }
        get apparitionAnimation() {
            return (this._animation =
                this._animation ||
                new fe(
                    new ve(
                        this.productItems.map(
                            (e, t) =>
                                new ye(
                                    e,
                                    { opacity: [0, 1], transform: [`translateY(${se.prefersReducedMotion() ? 0 : window.innerWidth < 1e3 ? 35 : 60}px)`, "translateY(0)"] },
                                    { duration: 600, delay: se.prefersReducedMotion() ? 0 : 100 * t - Math.min(3 * t * t, 100 * t), easing: "ease" }
                                )
                        )
                    )
                ));
        }
        previous(e) {
            let t = "ltr" === window.themeVariables.settings.direction ? 1 : -1,
                i = parseInt(getComputedStyle(this).getPropertyValue("--product-list-column-gap"));
            e.target.nextElementSibling.removeAttribute("disabled"),
                e.target.toggleAttribute("disabled", this.productListInner.scrollLeft * t - (this.productListInner.clientWidth + i) <= 0),
                this.productListInner.scrollBy({ left: -(this.productListInner.clientWidth + i) * t, behavior: "smooth" });
        }
        next(e) {
            let t = "ltr" === window.themeVariables.settings.direction ? 1 : -1,
                i = parseInt(getComputedStyle(this).getPropertyValue("--product-list-column-gap"));
            e.target.previousElementSibling.removeAttribute("disabled"),
                e.target.toggleAttribute("disabled", this.productListInner.scrollLeft * t + 2 * (this.productListInner.clientWidth + i) >= this.productListInner.scrollWidth),
                this.productListInner.scrollBy({ left: (this.productListInner.clientWidth + i) * t, behavior: "smooth" });
        }
        attributeChangedCallback(e) {
            var t, i;
            this.staggerApparition &&
                "hidden" === e &&
                (this.hidden
                    ? this.apparitionAnimation.finish()
                    : ((this.productListInner.scrollLeft = 0),
                      (this.productListInner.parentElement.scrollLeft = 0),
                      null == (t = this.querySelector(".prev-next-button--prev")) || t.setAttribute("disabled", ""),
                      null == (i = this.querySelector(".prev-next-button--next")) || i.removeAttribute("disabled"),
                      this._staggerProductsApparition()));
        }
        async _staggerProductsApparition() {
            this.productItems.forEach((e) => (e.style.opacity = 0)), await this.untilVisible({ threshold: this.clientHeight > 0 ? Math.min(50 / this.clientHeight, 1) : 0 }), this.apparitionAnimation.play();
        }
    };
    i(Ce, "observedAttributes", ["hidden"]), window.customElements.define("product-list", Ce);
    window.customElements.define(
        "logo-list",
        class extends c {
            async connectedCallback() {
                (this.items = Array.from(this.querySelectorAll(".logo-list__item"))),
                    (this.logoListScrollable = this.querySelector(".logo-list__list")),
                    this.items.length > 1 && (this.addEventListener("prev-next:prev", this.previous.bind(this)), this.addEventListener("prev-next:next", this.next.bind(this))),
                    this.hasAttribute("reveal-on-scroll") && this._setupVisibility();
            }
            async _setupVisibility() {
                await this.untilVisible({ rootMargin: "50px 0px", threshold: 0 });
                let e = new fe(
                    new ve(
                        this.items.map(
                            (e, t) => new ye(e, { opacity: [0, 1], transform: [`translateY(${se.prefersReducedMotion() ? 0 : "30px"})`, "translateY(0)"] }, { duration: 300, delay: se.prefersReducedMotion() ? 0 : 100 * t, easing: "ease" })
                        )
                    )
                );
                this._hasSectionReloaded ? e.finish() : e.play();
            }
            previous(e) {
                let t = "ltr" === window.themeVariables.settings.direction ? 1 : -1;
                e.target.nextElementSibling.removeAttribute("disabled"),
                    e.target.toggleAttribute("disabled", this.logoListScrollable.scrollLeft * t - (this.logoListScrollable.clientWidth + 24) <= 0),
                    this.logoListScrollable.scrollBy({ left: -(this.logoListScrollable.clientWidth + 24) * t, behavior: "smooth" });
            }
            next(e) {
                let t = "ltr" === window.themeVariables.settings.direction ? 1 : -1;
                e.target.previousElementSibling.removeAttribute("disabled"),
                    e.target.toggleAttribute("disabled", this.logoListScrollable.scrollLeft * t + 2 * (this.logoListScrollable.clientWidth + 24) >= this.logoListScrollable.scrollWidth),
                    this.logoListScrollable.scrollBy({ left: (this.logoListScrollable.clientWidth + 24) * t, behavior: "smooth" });
            }
        }
    );
    var Ie = class extends HTMLElement {
        connectedCallback() {
            window.addEventListener("scroll", Y(this._updateProgressBar.bind(this), 15));
        }
        get hasNextArticle() {
            return this.hasAttribute("has-next-article");
        }
        _updateProgressBar() {
            let e = z(),
                t = window.matchMedia(window.themeVariables.breakpoints.pocket).matches ? 40 : 80,
                i = this.getBoundingClientRect(),
                s = this.parentElement.getBoundingClientRect(),
                n = Math.max(-1 * ((s.bottom - (i.bottom - t)) / (s.height + t) - 1), 0);
            this.classList.toggle("is-visible", s.top < e && s.bottom > e + this.clientHeight - t),
                this.hasNextArticle && (n > 0.8 ? this.classList.add("article__nav--show-next") : this.classList.remove("article__nav--show-next")),
                this.style.setProperty("--transform", `${n}`);
        }
    };
    window.customElements.define("blog-post-navigation", Ie);
    window.customElements.define(
        "multi-column",
        class extends c {
            connectedCallback() {
                !this.hasAttribute("stack") &&
                    ((this.multiColumnInner = this.querySelector(".multi-column__inner")),
                    this.addEventListener("prev-next:prev", this.previous.bind(this)),
                    this.addEventListener("prev-next:next", this.next.bind(this)),
                    Shopify.designMode &&
                        this.addEventListener("shopify:block:select", (e) => {
                            e.target.scrollIntoView({ inline: "center", block: "nearest", behavior: e.detail.load ? "auto" : "smooth" });
                        })),
                    this.hasAttribute("stagger-apparition") && this._setupVisibility();
            }
            async _setupVisibility() {
                await this.untilVisible({ threshold: Math.min(50 / this.clientHeight, 1) });
                let e = se.prefersReducedMotion(),
                    t = new fe(
                        new ve(
                            Array.from(this.querySelectorAll(".multi-column__item")).map(
                                (t, i) =>
                                    new ye(
                                        t,
                                        { opacity: [0, 1], transform: [`translateY(${se.prefersReducedMotion() ? 0 : window.innerWidth < 1e3 ? 35 : 60}px)`, "translateY(0)"] },
                                        { duration: 600, delay: e ? 0 : 100 * i, easing: "ease" }
                                    )
                            )
                        )
                    );
                this._hasSectionReloaded ? t.finish() : t.play();
            }
            previous(e) {
                let t = "ltr" === window.themeVariables.settings.direction ? 1 : -1,
                    i = parseInt(getComputedStyle(this).getPropertyValue("--multi-column-column-gap"));
                e.target.nextElementSibling.removeAttribute("disabled"),
                    e.target.toggleAttribute("disabled", this.multiColumnInner.scrollLeft * t - (this.multiColumnInner.clientWidth + i) <= 0),
                    this.multiColumnInner.scrollBy({ left: -(this.multiColumnInner.clientWidth + i) * t, behavior: "smooth" });
            }
            next(e) {
                let t = "ltr" === window.themeVariables.settings.direction ? 1 : -1,
                    i = parseInt(getComputedStyle(this).getPropertyValue("--multi-column-column-gap"));
                e.target.previousElementSibling.removeAttribute("disabled"),
                    e.target.toggleAttribute("disabled", this.multiColumnInner.scrollLeft * t + 2 * (this.multiColumnInner.clientWidth + i) >= this.multiColumnInner.scrollWidth),
                    this.multiColumnInner.scrollBy({ left: (this.multiColumnInner.clientWidth + i) * t, behavior: "smooth" });
            }
        }
    );
    var Te = class extends HTMLElement {
        connectedCallback() {
            (this.listItems = Array.from(this.querySelectorAll("gallery-item"))),
                (this.scrollBarElement = this.querySelector(".gallery__progress-bar")),
                (this.listWrapperElement = this.querySelector(".gallery__list-wrapper")),
                this.listItems.length > 1 &&
                    (this.addEventListener("scrollable-content:progress", this._updateProgressBar.bind(this)),
                    this.addEventListener("prev-next:prev", this.previous.bind(this)),
                    this.addEventListener("prev-next:next", this.next.bind(this)),
                    Shopify.designMode && this.addEventListener("shopify:block:select", (e) => this.select(e.target.index, !e.detail.load)));
        }
        previous() {
            this.select([...this.listItems].reverse().find((e) => e.isOnLeftHalfPartOfScreen).index);
        }
        next() {
            this.select(this.listItems.findIndex((e) => e.isOnRightHalfPartOfScreen));
        }
        select(e, t = !0) {
            let i = this.listItems[e].getBoundingClientRect();
            this.listWrapperElement.scrollBy({ behavior: t ? "smooth" : "auto", left: Math.floor(i.left - window.innerWidth / 2 + i.width / 2) });
        }
        _updateProgressBar(e) {
            var t;
            null == (t = this.scrollBarElement) || t.style.setProperty("--transform", `${e.detail.progress}%`);
        }
    };
    window.customElements.define("gallery-list", Te);
    var Pe = class extends HTMLElement {
        get index() {
            return [...this.parentNode.children].indexOf(this);
        }
        get isOnRightHalfPartOfScreen() {
            return "ltr" === window.themeVariables.settings.direction ? this.getBoundingClientRect().left > window.innerWidth / 2 : this.getBoundingClientRect().right < window.innerWidth / 2;
        }
        get isOnLeftHalfPartOfScreen() {
            return "ltr" === window.themeVariables.settings.direction ? this.getBoundingClientRect().right < window.innerWidth / 2 : this.getBoundingClientRect().left > window.innerWidth / 2;
        }
    };
    window.customElements.define("gallery-item", Pe);
    window.customElements.define(
        "image-with-text-overlay",
        class extends c {
            connectedCallback() {
                this.hasAttribute("parallax") && !se.prefersReducedMotion() && ((this._hasPendingRaF = !1), (this._onScrollListener = this._onScroll.bind(this)), window.addEventListener("scroll", this._onScrollListener)),
                    this.hasAttribute("reveal-on-scroll") && this._setupVisibility();
            }
            disconnectedCallback() {
                super.disconnectedCallback(), this._onScrollListener && window.removeEventListener("scroll", this._onScrollListener);
            }
            async _setupVisibility() {
                await this.untilVisible();
                let e = this.querySelector(".image-overlay__image"),
                    t = await ae(this.querySelectorAll("split-lines")),
                    i = se.prefersReducedMotion();
                await ge(e);
                let s = [
                        new ye(e, { opacity: [0, 1], transform: [`scale(${i ? 1 : 1.1})`, "scale(1)"] }, { duration: 500, easing: "cubic-bezier(0.65, 0, 0.35, 1)" }),
                        new ve(
                            t.map(
                                (e, t) =>
                                    new ye(
                                        e,
                                        { opacity: [0, 0.2, 1], transform: [`translateY(${i ? 0 : "100%"})`, "translateY(0)"], clipPath: [`inset(${i ? "0 0 0 0" : "0 0 100% 0"})`, "inset(0 0 0 0)"] },
                                        { duration: 300, delay: i ? 0 : 120 * t, easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)" }
                                    )
                            )
                        ),
                        new ye(this.querySelector(".image-overlay__text-container"), { opacity: [0, 1] }, { duration: 300 }),
                    ],
                    n = new fe(i ? new ve(s) : new _e(s));
                this._hasSectionReloaded ? n.finish() : n.play();
            }
            _onScroll() {
                this._hasPendingRaF ||
                    ((this._hasPendingRaF = !0),
                    requestAnimationFrame(() => {
                        let e = this.getBoundingClientRect(),
                            t = this.querySelector(".image-overlay__content-wrapper"),
                            i = this.querySelector(".image-overlay__image"),
                            s = e.bottom,
                            n = e.height,
                            a = z();
                        t && (t.style.opacity = Math.max(1 - 3 * (1 - Math.min(s / n, 1)), 0).toString()),
                            i && (i.style.transform = `translateY(${100 - 100 * Math.max(1 - (1 - Math.min(s / (n + a), 1)), 0)}px)`),
                            (this._hasPendingRaF = !1);
                    }));
            }
        }
    );
    window.customElements.define(
        "image-with-text-block",
        class extends c {
            async connectedCallback() {
                this.hasAttribute("reveal-on-scroll") && this._setupVisibility();
            }
            async _setupVisibility() {
                await this.untilVisible();
                let e = Array.from(this.querySelectorAll(".image-with-text-block__image[reveal]")),
                    t = await ae(this.querySelectorAll("split-lines")),
                    i = se.prefersReducedMotion();
                for (let t of e) null !== t.offsetParent && (await ge(t));
                let s = [
                        new ve(e.map((e) => new ye(e, { opacity: [0, 1], transform: [`scale(${i ? 1 : 1.1})`, "scale(1)"] }, { duration: 500, easing: "cubic-bezier(0.65, 0, 0.35, 1)" }))),
                        new ye(this.querySelector(".image-with-text-block__content"), { opacity: [0, 1], transform: [`translateY(${i ? 0 : "60px"})`, "translateY(0)"] }, { duration: 150, easing: "ease-in-out" }),
                        new ve(
                            t.map(
                                (e, t) =>
                                    new ye(
                                        e,
                                        { opacity: [0, 0.2, 1], transform: [`translateY(${i ? 0 : "100%"})`, "translateY(0)"], clipPath: [`inset(${i ? "0 0 0 0" : "0 0 100% 0"})`, "inset(0 0 0 0)"] },
                                        { duration: 300, delay: i ? 0 : 120 * t, easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)" }
                                    )
                            )
                        ),
                        new ye(this.querySelector(".image-with-text-block__text-container"), { opacity: [0, 1] }, { duration: 300 }),
                    ],
                    n = new fe(i ? new ve(s) : new _e(s));
                this._hasSectionReloaded ? n.finish() : n.play();
            }
        }
    );
    window.customElements.define(
        "article-list",
        class extends c {
            async connectedCallback() {
                if (((this.articleItems = Array.from(this.querySelectorAll(".article-item"))), this.staggerApparition)) {
                    await this.untilVisible({ threshold: this.clientHeight > 0 ? Math.min(50 / this.clientHeight, 1) : 0 });
                    let e = new fe(
                        new ve(
                            this.articleItems.map(
                                (e, t) =>
                                    new ye(
                                        e,
                                        { opacity: [0, 1], transform: [`translateY(${se.prefersReducedMotion() ? 0 : window.innerWidth < 1e3 ? 35 : 60}px)`, "translateY(0)"] },
                                        { duration: 600, delay: se.prefersReducedMotion() ? 0 : 100 * t - Math.min(3 * t * t, 100 * t), easing: "ease" }
                                    )
                            )
                        )
                    );
                    this._hasSectionReloaded ? e.finish() : e.play();
                }
            }
            get staggerApparition() {
                return this.hasAttribute("stagger-apparition");
            }
        }
    );
    var Me = class extends HTMLElement {
        async connectedCallback() {
            let e = this.querySelector(".article__image");
            se.prefersReducedMotion() ? e.removeAttribute("reveal") : (await ge(e), e.animate({ opacity: [0, 1], transform: ["scale(1.1)", "scale(1)"] }, { duration: 500, fill: "forwards", easing: "cubic-bezier(0.65, 0, 0.35, 1)" }));
        }
    };
    window.customElements.define("blog-post-header", Me);
    var qe = class extends HTMLInputElement {
        connectedCallback() {
            this.addEventListener("click", () => (document.getElementById(this.getAttribute("aria-controls")).open = !0));
        }
    };
    window.customElements.define("predictive-search-input", qe, { extends: "input" });
    var Ve = class extends M {
        connectedCallback() {
            if ((super.connectedCallback(), this.hasAttribute("reverse-breakpoint"))) {
                this.originalDirection = this.classList.contains("drawer--from-left") ? "left" : "right";
                let e = window.matchMedia(this.getAttribute("reverse-breakpoint"));
                e.addListener(this._checkReverseOpeningDirection.bind(this)), this._checkReverseOpeningDirection(e);
            }
            this.delegate.on("click", ".drawer__overlay", () => (this.open = !1));
        }
        attributeChangedCallback(e, t, i) {
            super.attributeChangedCallback(e, t, i), "open" === e && document.documentElement.classList.toggle("lock-all", this.open);
        }
        _checkReverseOpeningDirection(e) {
            this.classList.remove("drawer--from-left"), (("left" === this.originalDirection && !e.matches) || ("left" !== this.originalDirection && e.matches)) && this.classList.add("drawer--from-left");
        }
    };
    window.customElements.define("drawer-content", Ve);
    window.customElements.define(
        "predictive-search-drawer",
        class extends Ve {
            connectedCallback() {
                super.connectedCallback(),
                    (this.inputElement = this.querySelector('[name="q"]')),
                    (this.drawerContentElement = this.querySelector(".drawer__content")),
                    (this.drawerFooterElement = this.querySelector(".drawer__footer")),
                    (this.loadingStateElement = this.querySelector(".predictive-search__loading-state")),
                    (this.resultsElement = this.querySelector(".predictive-search__results")),
                    (this.menuListElement = this.querySelector(".predictive-search__menu-list")),
                    this.delegate.on("input", '[name="q"]', this._debounce(this._onSearch.bind(this), 200)),
                    this.delegate.on("click", '[data-action="reset-search"]', this._startNewSearch.bind(this));
            }
            async _onSearch(e, t) {
                if ("Enter" !== e.key)
                    if ((this.abortController && this.abortController.abort(), this.drawerContentElement.classList.remove("drawer__content--center"), (this.drawerFooterElement.hidden = !0), "" === t.value))
                        (this.loadingStateElement.hidden = !0), (this.resultsElement.hidden = !0), this.menuListElement && (this.menuListElement.hidden = !1);
                    else {
                        this.drawerContentElement.classList.add("drawer__content--center"), (this.loadingStateElement.hidden = !1), (this.resultsElement.hidden = !0), this.menuListElement && (this.menuListElement.hidden = !0);
                        let e = {};
                        try {
                            (this.abortController = new AbortController()), (e = this._supportPredictiveApi() ? await this._doPredictiveSearch(t.value) : await this._doLiquidSearch(t.value));
                        } catch (e) {
                            if ("AbortError" === e.name) return;
                        }
                        (this.loadingStateElement.hidden = !0),
                            (this.resultsElement.hidden = !1),
                            this.menuListElement && (this.menuListElement.hidden = !0),
                            e.hasResults && ((this.drawerFooterElement.hidden = !1), this.drawerContentElement.classList.remove("drawer__content--center")),
                            (this.resultsElement.innerHTML = e.html);
                    }
            }
            async _doPredictiveSearch(e) {
                let t = await fetch(
                        `${window.themeVariables.routes.predictiveSearchUrl}?q=${e}&resources[limit]=10&resources[type]=${window.themeVariables.settings.searchMode}&resources[options[unavailable_products]]=${window.themeVariables.settings.searchUnavailableProducts}&resources[options[fields]]=title,body,product_type,variants.title,variants.sku,vendor&section_id=predictive-search`,
                        { signal: this.abortController.signal }
                    ),
                    i = document.createElement("div");
                return (i.innerHTML = await t.text()), { hasResults: null !== i.querySelector(".predictive-search__results-categories"), html: i.firstElementChild.innerHTML };
            }
            async _doLiquidSearch(e) {
                let t = [],
                    i = window.themeVariables.settings.searchMode.split(",").filter((e) => "collection" !== e);
                i.forEach((i) => {
                    t.push(
                        fetch(
                            `${window.themeVariables.routes.searchUrl}?section_id=predictive-search-compatibility&q=${e}&type=${i}&options[unavailable_products]=${window.themeVariables.settings.searchUnavailableProducts}&options[prefix]=last`,
                            { signal: this.abortController.signal }
                        )
                    );
                });
                let s = await Promise.all(t),
                    n = {};
                for (let [e, t] of s.entries()) {
                    let s = await t.text(),
                        a = document.createElement("div");
                    (a.innerHTML = s), (a.innerHTML = a.firstElementChild.innerHTML), a.childElementCount > 0 && (n[i[e]] = a.innerHTML);
                }
                if (!(Object.keys(n).length > 0))
                    return {
                        hasResults: !1,
                        html: `        <p class="text--large">${window.themeVariables.strings.searchNoResults}</p>          <div class="button-wrapper">            <button type="button" data-action="reset-search" class="button button--primary">${window.themeVariables.strings.searchNewSearch}</button>          </div>       `,
                    };
                {
                    let e = Object.entries(n),
                        t = Object.keys(n),
                        i =
                            '        <tabs-nav class="tabs-nav tabs-nav--edge2edge tabs-nav--narrow tabs-nav--no-border">          <scrollable-content class="tabs-nav__scroller hide-scrollbar">            <div class="tabs-nav__scroller-inner">             <div class="tabs-nav__item-list">      ';
                    for (let [s, n] of e)
                        i += `          <button type="button" class="tabs-nav__item heading heading--small" aria-expanded="${s === t[0] ? "true" : "false"}" aria-controls="predictive-search-${s}">           ${
                            window.themeVariables.strings["search" + s.charAt(0).toUpperCase() + s.slice(1) + "s"]
                        }          </button>        `;
                    for (let [s, n] of ((i += "              </div>            </div>         </scrollable-content>        </tabs-nav>      "), (i += '<div class="predictive-search__results-categories">'), e))
                        i += `          <div class="predictive-search__results-categories-item" ${s !== t[0] ? "hidden" : ""} id="predictive-search-${s}">            ${n}         </div>      `;
                    return { hasResults: !0, html: (i += "</div>") };
                }
            }
            _startNewSearch() {
                (this.inputElement.value = ""), this.inputElement.focus();
                let e = new Event("input", { bubbles: !0, cancelable: !0 });
                this.inputElement.dispatchEvent(e);
            }
            _supportPredictiveApi() {
                return JSON.parse(document.getElementById("shopify-features").innerHTML).predictiveSearch;
            }
            _debounce(e, t) {
                let i = null;
                return (...s) => {
                    clearTimeout(i),
                        (i = setTimeout(() => {
                            e.apply(this, s);
                        }, t));
                };
            }
        }
    );
    var $e = class extends HTMLElement {
        connectedCallback() {
            if (
                ((this.prevNextButtons = this.querySelector("prev-next-buttons")),
                (this.pageDots = this.querySelector("page-dots")),
                (this.scrollBarElement = this.querySelector(".timeline__progress-bar")),
                (this.listWrapperElement = this.querySelector(".timeline__list-wrapper")),
                (this.listItemElements = Array.from(this.querySelectorAll(".timeline__item"))),
                (this.isScrolling = !1),
                this.listItemElements.length > 1)
            ) {
                this.addEventListener("prev-next:prev", this.previous.bind(this)),
                    this.addEventListener("prev-next:next", this.next.bind(this)),
                    this.addEventListener("page-dots:changed", (e) => this.select(e.detail.index)),
                    Shopify.designMode &&
                        this.addEventListener("shopify:block:select", (e) => {
                            this.select([...e.target.parentNode.children].indexOf(e.target), !e.detail.load);
                        }),
                    (this.itemIntersectionObserver = new IntersectionObserver(this._onItemObserved.bind(this), { threshold: 0.4 }));
                let e = window.matchMedia(window.themeVariables.breakpoints.pocket);
                e.addListener(this._onMediaChanged.bind(this)), this._onMediaChanged(e);
            }
        }
        get selectedIndex() {
            return this.listItemElements.findIndex((e) => !e.hasAttribute("hidden"));
        }
        previous() {
            this.select(Math.max(0, this.selectedIndex - 1));
        }
        next() {
            this.select(Math.min(this.selectedIndex + 1, this.listItemElements.length - 1));
        }
        select(e, t = !0) {
            let i = this.listItemElements[e].getBoundingClientRect();
            t && ((this.isScrolling = !0), setTimeout(() => (this.isScrolling = !1), 800)),
                window.matchMedia(window.themeVariables.breakpoints.pocket).matches
                    ? this.listWrapperElement.scrollTo({ behavior: t ? "smooth" : "auto", left: this.listItemElements[0].clientWidth * e })
                    : this.listWrapperElement.scrollBy({ behavior: t ? "smooth" : "auto", left: Math.floor(i.left - window.innerWidth / 2 + i.width / 2) }),
                this._onItemSelected(e);
        }
        _onItemSelected(e) {
            var t;
            let i = this.listItemElements[e];
            i.removeAttribute("hidden", "false"),
                ne(i).forEach((e) => e.setAttribute("hidden", "")),
                (this.prevNextButtons.isPrevDisabled = 0 === e),
                (this.prevNextButtons.isNextDisabled = e === this.listItemElements.length - 1),
                (this.pageDots.selectedIndex = e),
                null == (t = this.scrollBarElement) || t.style.setProperty("--transform", (100 / (this.listItemElements.length - 1)) * e + "%");
        }
        _onItemObserved(e) {
            this.isScrolling ||
                e.forEach((e) => {
                    e.isIntersecting && this._onItemSelected([...e.target.parentNode.children].indexOf(e.target));
                });
        }
        _onMediaChanged(e) {
            e.matches ? this.listItemElements.forEach((e) => this.itemIntersectionObserver.observe(e)) : this.listItemElements.forEach((e) => this.itemIntersectionObserver.unobserve(e));
        }
    };
    window.customElements.define("time-line", $e);
    var Oe = class extends c {
        connectedCallback() {
            (this.pressItemsWrapper = this.querySelector(".press-list__wrapper")),
                (this.pressItems = Array.from(this.querySelectorAll("press-item"))),
                (this.pageDots = this.querySelector("page-dots")),
                this.pressItems.length > 1 &&
                    (Shopify.designMode &&
                        this.addEventListener("shopify:block:select", (e) => {
                            var t;
                            null == (t = this.intersectionObserver) || t.disconnect(), (e.detail.load || !e.target.selected) && this.select(e.target.index, !e.detail.load);
                        }),
                    this.pressItemsWrapper.addEventListener("swiperight", this.previous.bind(this)),
                    this.pressItemsWrapper.addEventListener("swipeleft", this.next.bind(this)),
                    this.addEventListener("page-dots:changed", (e) => this.select(e.detail.index)),
                    this._blockVerticalScroll()),
                this.hasAttribute("reveal-on-scroll") && this._setupVisibility();
        }
        async _setupVisibility() {
            await this.untilVisible(), this.pressItems[this.selectedIndex].transitionToEnter();
        }
        get selectedIndex() {
            return this.pressItems.findIndex((e) => e.selected);
        }
        previous() {
            this.select((this.selectedIndex - 1 + this.pressItems.length) % this.pressItems.length);
        }
        next() {
            this.select((this.selectedIndex + 1 + this.pressItems.length) % this.pressItems.length);
        }
        async select(e, t = !0) {
            let i = this.pressItems[this.selectedIndex],
                s = this.pressItems[e];
            await i.transitionToLeave(t), (this.pageDots.selectedIndex = e), await s.transitionToEnter(t);
        }
    };
    Object.assign(Oe.prototype, Se), window.customElements.define("press-list", Oe);
    var Be = class extends HTMLElement {
        connectedCallback() {
            this.addEventListener("split-lines:re-split", (e) => {
                Array.from(e.target.children).forEach((e) => (e.style.visibility = this.selected ? "visible" : "hidden"));
            });
        }
        get index() {
            return [...this.parentNode.children].indexOf(this);
        }
        get selected() {
            return !this.hasAttribute("hidden");
        }
        async transitionToLeave(e = !0) {
            let t = await ae(this.querySelectorAll("split-lines")),
                i = new fe(
                    new ve(
                        t
                            .reverse()
                            .map(
                                (e, t) =>
                                    new ye(
                                        e,
                                        { visibility: ["visible", "hidden"], clipPath: ["inset(0 0 0 0)", "inset(0 0 100% 0)"], transform: ["translateY(0)", "translateY(100%)"] },
                                        { duration: 350, delay: 60 * t, easing: "cubic-bezier(0.68, 0.00, 0.77, 0.00)" }
                                    )
                            )
                    )
                );
            e ? i.play() : i.finish(), await i.finished, this.setAttribute("hidden", "");
        }
        async transitionToEnter(e = !0) {
            this.removeAttribute("hidden");
            let t = await ae(this.querySelectorAll("split-lines, .testimonial__author")),
                i = new fe(
                    new ve(
                        t.map(
                            (e, t) =>
                                new ye(
                                    e,
                                    { visibility: ["hidden", "visible"], clipPath: ["inset(0 0 100% 0)", "inset(0 0 0px 0)"], transform: ["translateY(100%)", "translateY(0)"] },
                                    { duration: 550, delay: 120 * t, easing: "cubic-bezier(0.23, 1, 0.32, 1)" }
                                )
                        )
                    )
                );
            return e ? i.play() : i.finish(), i.finished;
        }
    };
    window.customElements.define("press-item", Be);
    window.customElements.define(
        "desktop-navigation",
        class extends c {
            connectedCallback() {
                (this.openingTimeout = null),
                    (this.currentMegaMenu = null),
                    this.delegate.on(
                        "mouseenter",
                        ".has-dropdown",
                        (e, t) => {
                            e.target === t && null !== e.relatedTarget && this.openDropdown(t);
                        },
                        !0
                    ),
                    this.delegate.on("click", ".header__linklist-link[aria-expanded], .nav-dropdown__link[aria-expanded]", (e, t) => {
                        window.matchMedia("(hover: hover)").matches || "true" === t.getAttribute("aria-expanded") || (e.preventDefault(), this.openDropdown(t.parentElement));
                    }),
                    this.delegate.on("shopify:block:select", (e) => this.openDropdown(e.target.parentElement)),
                    this.delegate.on("shopify:block:deselect", (e) => this.closeDropdown(e.target.parentElement));
            }
            openDropdown(e) {
                let t = e.querySelector("[aria-controls]"),
                    i = e.querySelector(`#${t.getAttribute("aria-controls")}`);
                this.currentMegaMenu = i.classList.contains("mega-menu") ? i : null;
                let s = setTimeout(() => {
                    if ("true" === t.getAttribute("aria-expanded")) return;
                    if ((t.setAttribute("aria-expanded", "true"), i.removeAttribute("hidden"), i.classList.contains("mega-menu") && !se.prefersReducedMotion())) {
                        let e = Array.from(i.querySelectorAll(".mega-menu__column, .mega-menu__image-push"));
                        e.forEach((e) => {
                            e.getAnimations().forEach((e) => e.cancel()), (e.style.opacity = 0);
                        }),
                            new fe(new ve(e.map((e, t) => new ye(e, { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] }, { duration: 250, delay: 100 + 60 * t, easing: "cubic-bezier(0.65, 0, 0.35, 1)" })))).play();
                    }
                    let n = (t) => {
                        null !== t.relatedTarget && (this.closeDropdown(e), e.removeEventListener("mouseleave", n));
                    };
                    e.addEventListener("mouseleave", n), (s = null), this.dispatchEvent(new CustomEvent("desktop-nav:dropdown:open", { bubbles: !0 }));
                }, 100);
                e.addEventListener(
                    "mouseleave",
                    () => {
                        s && clearTimeout(s);
                    },
                    { once: !0 }
                );
            }
            closeDropdown(e) {
                let t = e.querySelector("[aria-controls]"),
                    i = e.querySelector(`#${t.getAttribute("aria-controls")}`);
                requestAnimationFrame(() => {
                    i.classList.add("is-closing"),
                        t.setAttribute("aria-expanded", "false"),
                        setTimeout(
                            () => {
                                i.setAttribute("hidden", ""), clearTimeout(this.openingTimeout), i.classList.remove("is-closing");
                            },
                            i.classList.contains("mega-menu") && this.currentMegaMenu !== i ? 250 : 0
                        ),
                        this.dispatchEvent(new CustomEvent("desktop-nav:dropdown:close", { bubbles: !0 }));
                });
            }
        }
    );
    window.customElements.define(
        "mobile-navigation",
        class extends Ve {
            get apparitionAnimation() {
                if (this._apparitionAnimation) return this._apparitionAnimation;
                if (!se.prefersReducedMotion()) {
                    let e = Array.from(this.querySelectorAll('.mobile-nav__item[data-level="1"]')),
                        t = [];
                    t.push(
                        new ve(
                            e.map((e, t) => new ye(e, { opacity: [0, 1], transform: ["translateX(-40px)", "translateX(0)"] }, { duration: 300, delay: 300 + 120 * t - Math.min(2 * t * t, 120 * t), easing: "cubic-bezier(0.25, 1, 0.5, 1)" }))
                        )
                    );
                    let i = this.querySelector(".drawer__footer");
                    return (
                        i && t.push(new ye(i, { opacity: [0, 1], transform: ["translateY(100%)", "translateY(0)"] }, { duration: 300, delay: 500 + Math.max(125 * e.length - 25 * e.length, 25), easing: "cubic-bezier(0.25, 1, 0.5, 1)" })),
                        (this._apparitionAnimation = new fe(new ve(t)))
                    );
                }
            }
            attributeChangedCallback(e, t, i) {
                super.attributeChangedCallback(e, t, i),
                    "open" === e &&
                        (this.open && this.apparitionAnimation && (Array.from(this.querySelectorAll('.mobile-nav__item[data-level="1"], .drawer__footer')).forEach((e) => (e.style.opacity = 0)), this.apparitionAnimation.play()),
                        l(this, this.open ? "mobile-nav:open" : "mobile-nav:close"));
            }
        }
    );
    window.customElements.define(
        "store-header",
        class extends c {
            connectedCallback() {
                window.ResizeObserver && ((this.resizeObserver = new ResizeObserver(this._updateCustomProperties.bind(this))), this.resizeObserver.observe(this), this.resizeObserver.observe(this.querySelector(".header__wrapper"))),
                    this.isTransparent &&
                        ((this.isTransparencyDetectionLocked = !1),
                        this.delegate.on("desktop-nav:dropdown:open", () => (this.lockTransparency = !0)),
                        this.delegate.on("desktop-nav:dropdown:close", () => (this.lockTransparency = !1)),
                        this.rootDelegate.on("mobile-nav:open", () => (this.lockTransparency = !0)),
                        this.rootDelegate.on("mobile-nav:close", () => (this.lockTransparency = !1)),
                        this.delegate.on("mouseenter", this._checkTransparentHeader.bind(this), !0),
                        this.delegate.on("mouseleave", this._checkTransparentHeader.bind(this)),
                        this.isSticky && (this._checkTransparentHeader(), (this._onWindowScrollListener = Y(this._checkTransparentHeader.bind(this), 100)), window.addEventListener("scroll", this._onWindowScrollListener)));
            }
            disconnectedCallback() {
                super.disconnectedCallback(), window.ResizeObserver && this.resizeObserver.disconnect(), this.isTransparent && this.isSticky && window.removeEventListener("scroll", this._onWindowScrollListener);
            }
            get isSticky() {
                return this.hasAttribute("sticky");
            }
            get isTransparent() {
                return this.hasAttribute("transparent");
            }
            get transparentHeaderThreshold() {
                return 25;
            }
            set lockTransparency(e) {
                (this.isTransparencyDetectionLocked = e), this._checkTransparentHeader();
            }
            _updateCustomProperties(e) {
                e.forEach((e) => {
                    if (e.target === this) {
                        let t = e.borderBoxSize ? (e.borderBoxSize.length > 0 ? e.borderBoxSize[0].blockSize : e.borderBoxSize.blockSize) : e.target.clientHeight;
                        document.documentElement.style.setProperty("--header-height", `${t}px`);
                    }
                    if (e.target.classList.contains("header__wrapper")) {
                        let t = e.borderBoxSize ? (e.borderBoxSize.length > 0 ? e.borderBoxSize[0].blockSize : e.borderBoxSize.blockSize) : e.target.clientHeight;
                        document.documentElement.style.setProperty("--header-height-without-bottom-nav", `${t}px`);
                    }
                });
            }
            _checkTransparentHeader(e) {
                this.isTransparencyDetectionLocked || window.scrollY > this.transparentHeaderThreshold || (e && "mouseenter" === e.type) ? this.classList.remove("header--transparent") : this.classList.add("header--transparent");
            }
        }
    );
    window.customElements.define(
        "product-image-zoom",
        class extends M {
            connectedCallback() {
                super.connectedCallback(), (this.mediaElement = this.closest(".product__media")), (this.maxSpreadZoom = window.themeVariables.settings.mobileZoomFactor || 2), Q.load("photoswipe");
            }
            disconnectedCallback() {
                var e;
                super.disconnectedCallback(), null == (e = this.photoSwipeInstance) || e.destroy();
            }
            async attributeChangedCallback(e, t, i) {
                super.attributeChangedCallback(e, t, i), "open" === e && this.open && (await Q.load("photoswipe"), this._openPhotoSwipe());
            }
            async _openPhotoSwipe() {
                let e = await this._buildItems();
                this.photoSwipeInstance = new window.ThemePhotoSwipe(
                    this,
                    class {
                        constructor(e) {
                            (this.photoSwipeInstance = e),
                                (this.delegate = new o(this.photoSwipeInstance.scrollWrap)),
                                (this.maxSpreadZoom = window.themeVariables.settings.mobileZoomFactor || 2),
                                (this.pswpUi = this.photoSwipeInstance.scrollWrap.querySelector(".pswp__ui")),
                                this.delegate.on("click", '[data-action="pswp-close"]', this._close.bind(this)),
                                this.delegate.on("click", '[data-action="pswp-prev"]', this._goToPrev.bind(this)),
                                this.delegate.on("click", '[data-action="pswp-next"]', this._goToNext.bind(this)),
                                this.delegate.on("click", '[data-action="pswp-move-to"]', this._moveTo.bind(this)),
                                this.photoSwipeInstance.listen("close", this._onPswpClosed.bind(this)),
                                this.photoSwipeInstance.listen("doubleTap", this._onPswpDoubleTap.bind(this)),
                                this.photoSwipeInstance.listen("beforeChange", this._onPswpBeforeChange.bind(this)),
                                this.photoSwipeInstance.listen("initialZoomInEnd", this._onPswpInitialZoomInEnd.bind(this)),
                                this.photoSwipeInstance.listen("initialZoomOut", this._onPswpInitialZoomOut.bind(this)),
                                this.photoSwipeInstance.listen("parseVerticalMargin", this._onPswpParseVerticalMargin.bind(this)),
                                this.delegate.on("pswpTap", ".pswp__img", this._onPswpTap.bind(this));
                        }
                        init() {
                            let e = this.pswpUi.querySelector(".pswp__prev-next-buttons"),
                                t = this.pswpUi.querySelector(".pswp__dots-nav-wrapper");
                            if (this.photoSwipeInstance.items.length <= 1) return (e.style.display = "none"), void (t.style.display = "none");
                            (e.style.display = ""), (t.style.display = "");
                            let i = "";
                            this.photoSwipeInstance.items.forEach((e, t) => {
                                i += `        <button class="dots-nav__item tap-area" ${0 === t ? 'aria-current="true"' : ""} data-action="pswp-move-to">          <span class="visually-hidden">Go to slide ${t}</span>        </button>    `;
                            }),
                                (t.querySelector(".pswp__dots-nav-wrapper .dots-nav").innerHTML = i);
                        }
                        _close() {
                            this.photoSwipeInstance.close();
                        }
                        _goToPrev() {
                            this.photoSwipeInstance.prev();
                        }
                        _goToNext() {
                            this.photoSwipeInstance.next();
                        }
                        _moveTo(e, t) {
                            this.photoSwipeInstance.goTo([...t.parentNode.children].indexOf(t));
                        }
                        _onPswpClosed() {
                            this.delegate.off("pswpTap");
                        }
                        _onPswpDoubleTap(e) {
                            let t = this.photoSwipeInstance.currItem.initialZoomLevel;
                            this.photoSwipeInstance.getZoomLevel() !== t ? this.photoSwipeInstance.zoomTo(t, e, 333) : this.photoSwipeInstance.zoomTo(t < 0.7 ? 1 : this.maxSpreadZoom, e, 333);
                        }
                        _onPswpTap(e) {
                            "mouse" === e.detail.pointerType && this.photoSwipeInstance.toggleDesktopZoom(e.detail.releasePoint);
                        }
                        _onPswpBeforeChange() {
                            if (this.photoSwipeInstance.items.length <= 1) return;
                            let e = this.photoSwipeInstance.scrollWrap.querySelector(`.dots-nav__item:nth-child(${this.photoSwipeInstance.getCurrentIndex() + 1})`);
                            e.setAttribute("aria-current", "true"), ne(e).forEach((e) => e.removeAttribute("aria-current"));
                        }
                        _onPswpInitialZoomInEnd() {
                            var e;
                            null == (e = this.pswpUi) || e.classList.remove("pswp__ui--hidden");
                        }
                        _onPswpInitialZoomOut() {
                            var e;
                            null == (e = this.pswpUi) || e.classList.add("pswp__ui--hidden");
                        }
                        _onPswpParseVerticalMargin(e) {
                            e.vGap.bottom = this.photoSwipeInstance.items.length <= 1 || window.matchMedia(window.themeVariables.breakpoints.lapAndUp).matches ? 0 : 60;
                        }
                    },
                    e,
                    {
                        index: e.findIndex((e) => e.selected),
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
                            return { x: i.left, y: i.top + t, w: i.width };
                        },
                        getDoubleTapZoom: (e, t) => (e ? (t.w > t.h ? 1.6 : 1) : t.initialZoomLevel < 0.7 ? 1 : 1.33),
                    }
                );
                let t = null;
                (this.photoSwipeInstance.updateSize = new Proxy(this.photoSwipeInstance.updateSize, {
                    apply(e, i, s) {
                        t !== window.innerWidth && (e(arguments), (t = window.innerWidth));
                    },
                })),
                    this.photoSwipeInstance.listen("close", () => {
                        this.open = !1;
                    }),
                    this.photoSwipeInstance.init();
            }
            async _buildItems() {
                let e = Array.from(this.mediaElement.querySelectorAll('.product__media-item[data-media-type="image"]:not(.is-filtered)')),
                    t = await re.load(this.getAttribute("product-handle"));
                return Promise.resolve(
                    e.map((e) => {
                        let i = t.media.find((t) => t.id === parseInt(e.getAttribute("data-media-id"))),
                            s = be(i, [200, 300, 400, 500, 600, 700, 800, 1e3, 1200, 1400, 1600, 1800, 2e3, 2200, 2400, 2600, 2800, 3e3]),
                            n = Math.min(s[s.length - 1], window.innerWidth);
                        return {
                            selected: e.classList.contains("is-selected"),
                            src: pe(i, `${Math.ceil(Math.min(n * window.devicePixelRatio * this.maxSpreadZoom, 3e3))}x`),
                            msrc: e.firstElementChild.currentSrc,
                            originalMedia: i,
                            w: n,
                            h: parseInt(n / i.aspect_ratio),
                        };
                    })
                );
            }
        }
    );
    var He = class extends HTMLElement {
        connectedCallback() {
            var e;
            let t = this.querySelector("script");
            t && ((this.inventories = JSON.parse(t.innerHTML)), null == (e = document.getElementById(this.getAttribute("form-id"))) || e.addEventListener("variant:changed", this._onVariantChanged.bind(this)));
        }
        _onVariantChanged(e) {
            var t;
            null == (t = this.querySelector("span")) || t.remove(),
                e.detail.variant && "" !== this.inventories[e.detail.variant.id] ? ((this.hidden = !1), this.insertAdjacentHTML("afterbegin", this.inventories[e.detail.variant.id])) : (this.hidden = !0);
        }
    };
    window.customElements.define("product-inventory", He);
    var De = class extends HTMLElement {
        connectedCallback() {
            var e;
            null == (e = document.getElementById(this.getAttribute("form-id"))) || e.addEventListener("variant:changed", this._onVariantChanged.bind(this)), Shopify.designMode && Shopify.PaymentButton && Shopify.PaymentButton.init();
        }
        _onVariantChanged(e) {
            this._updateAddToCartButton(e.detail.variant), this._updateDynamicCheckoutButton(e.detail.variant);
        }
        _updateAddToCartButton(e) {
            let t = this.querySelector("[data-product-add-to-cart-button]");
            if (!t) return;
            let i = "";
            t.classList.remove("button--primary", "button--secondary", "button--ternary"),
                e
                    ? e.available
                        ? (t.removeAttribute("disabled"), t.classList.add(t.hasAttribute("data-use-primary") ? "button--primary" : "button--secondary"), (i = t.getAttribute("data-button-content")))
                        : (t.setAttribute("disabled", "disabled"), t.classList.add("button--ternary"), (i = window.themeVariables.strings.productFormSoldOut))
                    : (t.setAttribute("disabled", "disabled"), t.classList.add("button--ternary"), (i = window.themeVariables.strings.productFormUnavailable)),
                "loader-button" === t.getAttribute("is") ? (t.firstElementChild.innerHTML = i) : (t.innerHTML = i);
        }
        _updateDynamicCheckoutButton(e) {
            let t = this.querySelector(".shopify-payment-button");
            t && (t.style.display = e && e.available ? "block" : "none");
        }
    };
    window.customElements.define("product-payment-container", De);
    window.customElements.define(
        "product-payment-terms",
        class extends c {
            connectedCallback() {
                var e;
                null == (e = document.getElementById(this.getAttribute("form-id"))) || e.addEventListener("variant:changed", this._onVariantChanged.bind(this));
            }
            _onVariantChanged(e) {
                let t = e.detail.variant;
                if (t) {
                    let e = this.querySelector('[name="id"]');
                    (e.value = t.id), e.dispatchEvent(new Event("change", { bubbles: !0 }));
                }
            }
        }
    );
    var Ne = class extends HTMLFormElement {
        connectedCallback() {
            (this.id.disabled = !1), "page" !== window.themeVariables.settings.cartType && "cart" !== window.themeVariables.settings.pageType && this.addEventListener("submit", this._onSubmit.bind(this));
        }
        async _onSubmit(e) {
            if ((e.preventDefault(), !this.checkValidity())) return void this.reportValidity();
            let t = Array.from(this.elements).filter((e) => "submit" === e.type);
            t.forEach((e) => {
                e.setAttribute("disabled", "disabled"), e.setAttribute("aria-busy", "true");
            });
            let i = new FormData(this);
            i.append("sections", ["mini-cart"]), i.delete("option1"), i.delete("option2"), i.delete("option3");
            let s = await fetch(`${window.themeVariables.routes.cartAddUrl}.js`, { body: i, method: "POST", headers: { "X-Requested-With": "XMLHttpRequest" } });
            t.forEach((e) => {
                e.removeAttribute("disabled"), e.removeAttribute("aria-busy");
            });
            let n = await s.json();
            s.ok &&
                (this.dispatchEvent(new CustomEvent("variant:added", { bubbles: !0, detail: { variant: n.hasOwnProperty("items") ? n.items[0] : n } })),
                fetch(`${window.themeVariables.routes.cartUrl}.js`).then(async (e) => {
                    let t = await e.json();
                    document.documentElement.dispatchEvent(new CustomEvent("cart:updated", { bubbles: !0, detail: { cart: t } })),
                        (t.sections = n.sections),
                        document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", { bubbles: !0, detail: { cart: t, openMiniCart: "drawer" === window.themeVariables.settings.cartType && null === this.closest(".drawer") } }));
                })),
                this.dispatchEvent(new CustomEvent("cart-notification:show", { bubbles: !0, cancelable: !0, detail: { status: s.ok ? "success" : "error", error: n.description || "" } }));
        }
    };
    window.customElements.define("product-form", Ne, { extends: "form" });
    function Re(e, t = "") {
        "string" == typeof e && (e = e.replace(".", ""));
        let i = /\{\{\s*(\w+)\s*\}\}/,
            s = t || window.themeVariables.settings.moneyFormat;
        function n(e, t) {
            return null == e || e != e ? t : e;
        }
        function a(e, t, i, s) {
            if (((t = n(t, 2)), (i = n(i, ",")), (s = n(s, ".")), isNaN(e) || null == e)) return 0;
            let a = (e = (e / 100).toFixed(t)).split(".");
            return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i) + (a[1] ? s + a[1] : "");
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
                r = a(e, 0, "'");
        }
        return s.indexOf("with_comma_separator"), s.replace(i, r);
    }
    window.customElements.define(
        "product-media",
        class extends c {
            async connectedCallback() {
                var e;
                (this.mainCarousel = this.querySelector("flickity-carousel")),
                    this.hasAttribute("reveal-on-scroll") && this._setupVisibility(),
                    1 !== this.mainCarousel.childElementCount &&
                        ((this.selectedVariantMediaId = null),
                        (this.viewInSpaceElement = this.querySelector("[data-shopify-model3d-id]")),
                        (this.zoomButton = this.querySelector(".product__zoom-button")),
                        (this.product = await re.load(this.getAttribute("product-handle"))),
                        null == (e = document.getElementById(this.getAttribute("form-id"))) || e.addEventListener("variant:changed", this._onVariantChanged.bind(this)),
                        this.mainCarousel.addEventListener("model:played", () => this.mainCarousel.setDraggable(!1)),
                        this.mainCarousel.addEventListener("model:paused", () => this.mainCarousel.setDraggable(!0)),
                        this.mainCarousel.addEventListener("video:played", () => this.mainCarousel.setDraggable(!1)),
                        this.mainCarousel.addEventListener("video:paused", () => this.mainCarousel.setDraggable(!0)),
                        this.mainCarousel.addEventListener("flickity:ready", this._onFlickityReady.bind(this)),
                        this.mainCarousel.addEventListener("flickity:slide-changed", this._onFlickityChanged.bind(this)),
                        this.mainCarousel.addEventListener("flickity:slide-settled", this._onFlickitySettled.bind(this)),
                        this._onFlickityReady());
            }
            get thumbnailsPosition() {
                return window.matchMedia(window.themeVariables.breakpoints.pocket).matches ? "bottom" : this.getAttribute("thumbnails-position");
            }
            async _setupVisibility() {
                await this.untilVisible();
                let e = await this.mainCarousel.flickityInstance,
                    t = e ? e.selectedElement.querySelector("img") : this.querySelector(".product__media-image-wrapper img"),
                    i = se.prefersReducedMotion();
                await ge(t);
                let s = new fe(
                    new ve([
                        new ye(t, { opacity: [0, 1], transform: [`scale(${i ? 1 : 1.1})`, "scale(1)"] }, { duration: 500, easing: "cubic-bezier(0.65, 0, 0.35, 1)" }),
                        new ve(
                            Array.from(this.querySelectorAll(".product__thumbnail-item:not(.is-filtered)")).map(
                                (e, t) =>
                                    new ye(
                                        e,
                                        { opacity: [0, 1], transform: "left" === this.thumbnailsPosition ? [`translateY(${i ? 0 : "40px"})`, "translateY(0)"] : [`translateX(${i ? 0 : "50px"})`, "translateX(0)"] },
                                        { duration: 250, delay: i ? 0 : 100 * t, easing: "cubic-bezier(0.75, 0, 0.175, 1)" }
                                    )
                            )
                        ),
                    ])
                );
                this._hasSectionReloaded ? s.finish() : s.play();
            }
            async _onVariantChanged(e) {
                let t = e.detail.variant,
                    i = [];
                if (
                    (this.product.media.forEach((e) => {
                        var s;
                        let n = t.featured_media && e.id === t.featured_media.id;
                        if ((null == (s = e.alt) ? void 0 : s.includes("#")) && !n) {
                            let s = e.alt.split("#").pop().split("_");
                            this.product.options.forEach((n) => {
                                n.name.toLowerCase() === s[0].toLowerCase() && t.options[n.position - 1].toLowerCase() !== s[1].trim().toLowerCase() && i.push(e.id);
                            });
                        }
                    }),
                    [...new Set(Array.from(this.querySelectorAll(".is-filtered[data-media-id]")).map((e) => parseInt(e.getAttribute("data-media-id"))))].some((e) => !i.includes(e)))
                ) {
                    let e = t.featured_media ? t.featured_media.id : this.product.media.map((e) => e.id).filter((e) => !i.includes(e))[0];
                    Array.from(this.querySelectorAll("[data-media-id]")).forEach((t) => {
                        t.classList.toggle("is-filtered", i.includes(parseInt(t.getAttribute("data-media-id")))),
                            t.classList.toggle("is-selected", e === parseInt(t.getAttribute("data-media-id"))),
                            t.classList.toggle("is-initial-selected", e === parseInt(t.getAttribute("data-media-id")));
                    }),
                        this.mainCarousel.reload();
                } else {
                    if (!e.detail.variant.featured_media || this.selectedVariantMediaId === e.detail.variant.featured_media.id) return;
                    this.mainCarousel.select(`[data-media-id="${e.detail.variant.featured_media.id}"]`);
                }
                this.selectedVariantMediaId = e.detail.variant.featured_media ? e.detail.variant.featured_media.id : null;
            }
            async _onFlickityReady() {
                let e = await this.mainCarousel.flickityInstance;
                ["video", "external_video"].includes(e.selectedElement.getAttribute("data-media-type")) && this.hasAttribute("autoplay-video") && e.selectedElement.firstElementChild.play();
            }
            async _onFlickityChanged() {
                (await this.mainCarousel.flickityInstance).cells.forEach((e) => {
                    ["external_video", "video", "model"].includes(e.element.getAttribute("data-media-type")) && e.element.firstElementChild.pause();
                });
            }
            async _onFlickitySettled() {
                let e = (await this.mainCarousel.flickityInstance).selectedElement;
                switch (
                    (this.zoomButton && (this.zoomButton.hidden = "image" !== e.getAttribute("data-media-type")),
                    this.viewInSpaceElement && this.viewInSpaceElement.setAttribute("data-shopify-model3d-id", this.viewInSpaceElement.getAttribute("data-shopify-model3d-default-id")),
                    e.getAttribute("data-media-type"))
                ) {
                    case "model":
                        this.viewInSpaceElement.setAttribute("data-shopify-model3d-id", e.getAttribute("data-media-id")), e.firstElementChild.play();
                        break;
                    case "external_video":
                    case "video":
                        this.hasAttribute("autoplay-video") && e.firstElementChild.play();
                }
            }
        }
    );
    var Fe = class extends HTMLElement {
        connectedCallback() {
            var e;
            null == (e = document.getElementById(this.getAttribute("form-id"))) || e.addEventListener("variant:changed", this._onVariantChanged.bind(this));
        }
        get priceClass() {
            return this.getAttribute("price-class") || "";
        }
        get unitPriceClass() {
            return this.getAttribute("unit-price-class") || "";
        }
        _onVariantChanged(e) {
            this._updateLabels(e.detail.variant), this._updatePrices(e.detail.variant), this._updateSku(e.detail.variant);
        }
        _updateLabels(e) {
            let t = this.querySelector("[data-product-label-list]");
            if (t)
                if (e) {
                    if (((t.innerHTML = ""), e.compare_at_price > e.price)) {
                        let i = "";
                        (i = "percentage" === window.themeVariables.settings.discountMode ? `${Math.round((100 * (e.compare_at_price - e.price)) / e.compare_at_price)}%` : Re(e.compare_at_price - e.price)),
                            (t.innerHTML = `<span class="label label--highlight">${window.themeVariables.strings.collectionDiscount.replace("@savings@", i)}</span>`);
                    }
                } else t.innerHTML = "";
        }
        _updatePrices(e) {
            Shopify.variantChange(e),
                sessionStorage.setItem("varientID", e.id),
                sessionStorage.setItem("varientSku", e.sku),
                sessionStorage.pincode && "" !== sessionStorage.pincode && Shopify.pincodeCheckerApi(sessionStorage.product_id, e.sku, e.id, sessionStorage.pincode);
            let t = this.querySelector("[data-product-price-list]"),
                i = window.themeVariables.settings.currencyCodeEnabled ? window.themeVariables.settings.moneyWithCurrencyFormat : Shopify.money_format2;
            if (!t) {
                if (!document.querySelector(".custom-product-price")) return;
                (t = window.innerWidth > 990 ? document.querySelector(".custom-product-price [data-product-price-list]") : document.querySelector(".custom-product-price-mobile [data-product-price-list]")),
                    (i = window.themeVariables.settings.currencyCodeEnabled ? window.themeVariables.settings.moneyWithCurrencyFormat : Shopify.money_format);
            }
            if (e) {
                if (((t.innerHTML = ""), e.compare_at_price > e.price)) {
                    let s = We(e.price, t, e);
                    let percentOff = 1 - s / e.compare_at_price;
                    percentOff = Math.round(percentOff * 100);
                    (t.innerHTML += `<span class="price price--highlight ${this.priceClass}"><span class="visually-hidden">${window.themeVariables.strings.productSalePrice}</span>${Shopify.formatMoney(s, i)}</span>`),
                        (t.innerHTML += `<p class="custom-saved-price" style="margin:0 10px 0 0;font-weight:500;font-size: 14px;color: #00C68C;">${percentOff}% Off </p>`),
                        (t.innerHTML += `<span class="price price--compare line-through"><span class="visually-hidden">${window.themeVariables.strings.productRegularPrice}</span>${Shopify.formatMoney(e.compare_at_price, i)}</span>`);
                } else {
                    let s = We(e.price, t, e);
                    t.innerHTML += `<span class="price ${this.priceClass}"><span class="visually-hidden">${window.themeVariables.strings.productSalePrice}</span>${Shopify.formatMoney(s, i)}</span>`;
                }
                if (e.unit_price_measurement) {
                    We(e.unit_price_measurement, t, e);
                    let i = "";
                    1 !== e.unit_price_measurement.reference_value && (i = `<span class="unit-price-measurement__reference-value">${e.unit_price_measurement.reference_value}</span>`),
                        (t.innerHTML += `          <div class="price text--subdued ${this.unitPriceClass}">            <div class="unit-price-measurement">              <span class="unit-price-measurement__price">${Re(
                            e.unit_price
                        )}</span>              <span class="unit-price-measurement__separator">/</span>              ${i}             <span class="unit-price-measurement__reference-unit">${
                            e.unit_price_measurement.reference_unit
                        }</span>           </div>         </div>        `);
                }
                t.style.display = "";
            } else t.style.display = "none";
        }
        _updateSku(e) {
            let t = this.querySelector("[data-product-sku-container]");
            if (!t) return;
            let i = t.querySelector("[data-product-sku-number]");
            e && e.sku ? ((i.innerHTML = e.sku), (t.style.display = "")) : (t.style.display = "none");
        }
    };
    window.customElements.define("product-meta", Fe);
    window.customElements.define(
        "quick-buy-drawer",
        class extends Ve {
            connectedCallback() {
                super.connectedCallback(), this.delegate.on("variant:changed", this._onVariantChanged.bind(this));
            }
            async _load() {
                await super._load(), (this.imageElement = this.querySelector(".quick-buy-product__image")), window.Shopify && window.Shopify.PaymentButton && window.Shopify.PaymentButton.init();
            }
            _onVariantChanged(e) {
                let t = e.detail.variant;
                if (
                    (t &&
                        Array.from(this.querySelectorAll('[href*="/products"]')).forEach((e) => {
                            let i = new URL(e.href);
                            i.searchParams.set("variant", t.id), e.setAttribute("href", i.toString());
                        }),
                    !this.imageElement || !t || !t.featured_media)
                )
                    return;
                let i = t.featured_media;
                i.alt && this.imageElement.setAttribute("alt", i.alt),
                    this.imageElement.setAttribute("width", i.preview_image.width),
                    this.imageElement.setAttribute("height", i.preview_image.height),
                    this.imageElement.setAttribute("src", pe(i, "342x")),
                    this.imageElement.setAttribute("srcset", me(i, [114, 228, 342]));
            }
        }
    );
    window.customElements.define(
        "quick-buy-popover",
        class extends Z {
            connectedCallback() {
                super.connectedCallback(), this.delegate.on("variant:changed", this._onVariantChanged.bind(this)), this.delegate.on("variant:added", () => (this.open = !1));
            }
            async _load() {
                await super._load(), (this.imageElement = this.querySelector(".quick-buy-product__image"));
            }
            _onVariantChanged(e) {
                let t = e.detail.variant;
                if (
                    (t &&
                        Array.from(this.querySelectorAll('[href*="/products"]')).forEach((e) => {
                            let i = new URL(e.href);
                            i.searchParams.set("variant", t.id), e.setAttribute("href", i.toString());
                        }),
                    !this.imageElement || !t || !t.featured_media)
                )
                    return;
                let i = t.featured_media;
                i.alt && this.imageElement.setAttribute("alt", i.alt),
                    this.imageElement.setAttribute("width", i.preview_image.width),
                    this.imageElement.setAttribute("height", i.preview_image.height),
                    this.imageElement.setAttribute("src", pe(i, "195x")),
                    this.imageElement.setAttribute("srcset", me(i, [65, 130, 195]));
            }
        }
    );
    var ze = class extends HTMLElement {
        connectedCallback() {
            var e;
            null == (e = document.getElementById(this.getAttribute("form-id"))) || e.addEventListener("variant:changed", this._onVariantChanged.bind(this));
        }
        _onVariantChanged(e) {
            e.detail.variant ? this._renderForVariant(e.detail.variant.id) : (this.innerHTML = "");
        }
        async _renderForVariant(e) {
            let t = await fetch(`${window.themeVariables.routes.rootUrlWithoutSlash}/variants/${e}?section_id=store-availability`),
                i = document.createElement("div");
            (i.innerHTML = await t.text()), (this.innerHTML = i.firstElementChild.innerHTML.trim());
        }
    };
    window.customElements.define("store-pickup", ze);
    let We = (e, t, varient) => {
        if ((document.querySelector(".quick_product-price"), Shopify.enable_fixed_discount && t.className.includes("custom_product_pod_price"))) {
            let pod_price = "";
            let offerVariantdata = sessionStorage.getItem("variantQtys");
            let OfferProperty = [];
            let varient_pod_units = [];
            offerVariantdata = JSON.parse(offerVariantdata);
            for (var key in offerVariantdata) {
                if (offerVariantdata.hasOwnProperty(varient.id)) {
                    let OfferPropertyArr = offerVariantdata[varient.id];
                    OfferProperty.push(OfferPropertyArr[0]["pod_deal_applicability"]);
                    varient_pod_units.push(OfferPropertyArr[0]["pod_units"]);
                    break;
                }
            }
            let varient_pod_unit = varient_pod_units[0];
            varient_pod_unit = parseInt(varient_pod_unit);
            OfferProperty = OfferProperty[0];
            if (varient_pod_unit > 0 && OfferProperty == "true") {
                pod_price = parseInt(t.dataset.pod) * 100;
            } else {
                pod_price = e;
            }
            e = pod_price;
        } else if (Shopify.enable_namagoo && t.className.includes("custom-product_namogoo") && localStorage.getItem("Namogoo")) {
            e -= (e / 100) * JSON.parse(localStorage.getItem("Namogoo")).discountValue;
        }
        return e;
    };
    window.customElements.define(
        "product-variants",
        class extends c {
            async connectedCallback() {
                (this.masterSelector = document.getElementById(this.getAttribute("form-id")).id),
                    (this.optionSelectors = Array.from(this.querySelectorAll("[data-selector-type]"))),
                    this.masterSelector
                        ? ((this.product = await re.load(this.productHandle)),
                          this.delegate.on("change", '[name^="option"]', this._onOptionChanged.bind(this)),
                          this.masterSelector.addEventListener("change", this._onMasterSelectorChanged.bind(this)),
                          this._updateDisableSelectors(),
                          this.selectVariant(this.selectedVariant.id))
                        : console.warn(`The variant selector for product with handle ${this.productHandle} is not linked to any product form.`);
            }
            get selectedVariant() {
                return this._getVariantById(parseInt(this.masterSelector.value));
            }
            get productHandle() {
                return this.getAttribute("handle");
            }
            get hideSoldOutVariants() {
                return this.hasAttribute("hide-sold-out-variants");
            }
            get updateUrl() {
                return this.hasAttribute("update-url");
            }
            selectVariant(e) {
                var t;
                if ((this._isVariantSelectable(this._getVariantById(e)) || (e = this._getFirstMatchingAvailableOrSelectableVariant().id), (null == (t = this.selectedVariant) ? void 0 : t.id) !== e)) {
                    if (((this.masterSelector.value = e), this.masterSelector.dispatchEvent(new Event("change", { bubbles: !0 })), this.updateUrl && history.replaceState)) {
                        let t = new URL(window.location.href);
                        e ? t.searchParams.set("variant", e) : t.searchParams.delete("variant"), window.history.replaceState({ path: t.toString() }, "", t.toString());
                    }
                    this._updateDisableSelectors(), l(this.masterSelector.form, "variant:changed", { variant: this.selectedVariant });
                }
            }
            _onOptionChanged() {
                var e;
                this.selectVariant(null == (e = this._getVariantFromOptions()) ? void 0 : e.id);
            }
            _onMasterSelectorChanged() {
                var e;
                ((null == (e = this.selectedVariant) ? void 0 : e.options) || []).forEach((e, t) => {
                    let i = this.querySelector(`input[name="option${t + 1}"][value="${CSS.escape(e)}"], select[name="option${t + 1}"]`),
                        s = !1;
                    "SELECT" === i.tagName ? ((s = i.value !== e), (i.value = e)) : "INPUT" === i.tagName && ((s = !i.checked && i.value === e), (i.checked = i.value === e)), s && i.dispatchEvent(new Event("change", { bubbles: !0 }));
                });
            }
            _getVariantById(e) {
                return this.product.variants.find((t) => t.id === e);
            }
            _getVariantFromOptions() {
                let e = this._getSelectedOptionValues();
                return this.product.variants.find((t) => t.options.every((t, i) => t === e[i]));
            }
            _isVariantSelectable(e) {
                return !!e && (e.available || (!this.hideSoldOutVariants && !e.available));
            }
            _getFirstMatchingAvailableOrSelectableVariant() {
                let e = this._getSelectedOptionValues(),
                    t = null,
                    i = 0;
                do {
                    e.pop(),
                        (i += 1),
                        (t = this.product.variants.find((t) =>
                            this.hideSoldOutVariants ? t.available && t.options.slice(0, t.options.length - i).every((t, i) => t === e[i]) : t.options.slice(0, t.options.length - i).every((t, i) => t === e[i])
                        ));
                } while (!t && e.length > 0);
                return t;
            }
            _getSelectedOptionValues() {
                let e = [];
                return Array.from(this.querySelectorAll('input[name^="option"]:checked, select[name^="option"]')).forEach((t) => e.push(t.value)), e;
            }
            _updateDisableSelectors() {
                let e = this.selectedVariant;
                if (!e) return;
                let t = (e, t, i, s) => {
                    let n = "";
                    switch (e.getAttribute("data-selector-type")) {
                        case "color":
                            n = `.color-swatch:nth-child(${t + 1})`;
                            break;
                        case "variant-image":
                            n = `.variant-swatch:nth-child(${t + 1})`;
                            break;
                        case "block":
                            n = `.block-swatch:nth-child(${t + 1})`;
                            break;
                        case "dropdown":
                            n = `.combo-box__option-item:nth-child(${t + 1})`;
                    }
                    let varient_disabled = !i;
                    if (e.querySelector(n).dataset.varient_disabled != undefined) {
                        varient_disabled = JSON.parse(e.querySelector(n).dataset.varient_disabled);
                    }
                    if (e.querySelector(n)) {
                        e.querySelector(n).toggleAttribute("hidden", !s), this.hideSoldOutVariants ? e.querySelector(n).toggleAttribute("hidden", !i) : e.querySelector(n).classList.toggle("is-disabled", varient_disabled);
                    }
                };
                this.optionSelectors &&
                    this.optionSelectors[0] &&
                    this.product.options[0].values.forEach((i, s) => {
                        let n = this.product.variants.some((e) => e.option1 === i && e),
                            a = this.product.variants.some((e) => e.option1 === i && e.available);
                        t(this.optionSelectors[0], s, a, n),
                            this.optionSelectors[1] &&
                                this.product.options[1].values.forEach((i, s) => {
                                    let n = this.product.variants.some((t) => t.option2 === i && t.option1 === e.option1 && t),
                                        a = this.product.variants.some((t) => t.option2 === i && t.option1 === e.option1 && t.available);
                                    t(this.optionSelectors[1], s, a, n),
                                        this.optionSelectors[2] &&
                                            this.product.options[2].values.forEach((i, s) => {
                                                let n = this.product.variants.some((t) => t.option3 === i && t.option1 === e.option1 && t.option2 === e.option2 && t),
                                                    a = this.product.variants.some((t) => t.option3 === i && t.option1 === e.option1 && t.option2 === e.option2 && t.available);
                                                t(this.optionSelectors[2], s, a, n);
                                            });
                                });
                    });
            }
        }
    );
    window.customElements.define(
        "product-item",
        class extends c {
            connectedCallback() {
                (this.primaryImageList = Array.from(this.querySelectorAll(".product-item__primary-image"))),
                    this.delegate.on("change", ".product-item-meta__swatch-list .color-swatch__radio", this._onColorSwatchChanged.bind(this)),
                    this.delegate.on("mouseenter", ".product-item-meta__swatch-list .color-swatch__item", this._onColorSwatchHovered.bind(this), !0);
            }
            async _onColorSwatchChanged(e, t) {
                if (
                    (Array.from(this.querySelectorAll('[href*="/products"]')).forEach((e) => {
                        let i;
                        (i = "A" === e.tagName ? new URL(e.href) : new URL(e.getAttribute("href"), `https://${window.themeVariables.routes.host}`)).searchParams.set("variant", t.getAttribute("data-variant-id")),
                            e.setAttribute("href", i.toString());
                    }),
                    t.hasAttribute("data-variant-featured-media"))
                ) {
                    let e = this.primaryImageList.find((e) => e.getAttribute("data-media-id") === t.getAttribute("data-variant-featured-media"));
                    e.setAttribute("loading", "eager"), await (e.complete ? Promise.resolve() : new Promise((t) => (e.onload = t))), e.removeAttribute("hidden");
                    await e.animate(
                        Array.from(e.parentElement.classList).some((e) => ["aspect-ratio--short", "aspect-ratio--tall", "aspect-ratio--square"].includes(e))
                            ? [
                                  { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", transform: "translate(calc(-50% - 20px), -50%)", zIndex: 1, offset: 0 },
                                  { clipPath: "polygon(0 0, 20% 0, 5% 100%, 0 100%)", transform: "translate(calc(-50% - 20px), -50%)", zIndex: 1, offset: 0.3 },
                                  { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transform: "translate(-50%, -50%)", zIndex: 1, offset: 1 },
                              ]
                            : [
                                  { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", transform: "translateX(-20px)", zIndex: 1, offset: 0 },
                                  { clipPath: "polygon(0 0, 20% 0, 5% 100%, 0 100%)", transform: "translateX(-20px)", zIndex: 1, offset: 0.3 },
                                  { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transform: "translateX(0px)", zIndex: 1, offset: 1 },
                              ],
                        { duration: 500, easing: "ease-in-out" }
                    ).finished,
                        this.primaryImageList.filter((t) => t.classList.contains("product-item__primary-image") && t !== e).forEach((e) => e.setAttribute("hidden", ""));
                }
            }
            _onColorSwatchHovered(e, t) {
                let i = t.previousElementSibling;
                i.hasAttribute("data-variant-featured-media") && this.primaryImageList.find((e) => e.getAttribute("data-media-id") === i.getAttribute("data-variant-featured-media")).setAttribute("loading", "eager");
            }
        }
    );
    function Ye() {
        let e = document.querySelector(".js-load-more");
        var t = new IntersectionObserver(
            function (e) {
                !0 === e[0].isIntersecting && sessionStorage.setItem("Load_More", "true"),
                    (function () {
                        if ("true" === sessionStorage.getItem("Load_More")) {
                            sessionStorage.setItem("Load_More", "false");
                            var e = $(".load-more-icon"),
                                t = parseInt($("[data-total-pages]").val()),
                                i = parseInt($("[data-current-page]").val());
                            i += 1;
                            var s = $("[data-next-url]")
                                .val()
                                .replace(/page=[0-9]+/, "page=" + i);
                            $("[data-current-page]").val(i),
                                $.ajax({
                                    url: s,
                                    type: "GET",
                                    dataType: "html",
                                    success: function (e) {
                                        $(".load-more__inner").append($(e).find(".load-more__inner").html()), Shopify.customLazy(), labelsPriority();
                                    },
                                    complete: function () {
                                        i >= t && e.addClass("hide");
                                    },
                                });
                        }
                    })();
            },
            { threshold: [1] }
        );
        null !== e && t.observe(e);
    }
    sessionStorage.setItem("Load_More", "false"),
        Ye(),
        window.customElements.define(
            "product-facet",
            class extends c {
                connectedCallback() {
                    this.delegate.on("pagination:page-changed", this._rerender.bind(this)), this.delegate.on("facet:criteria-changed", this._rerender.bind(this)), this.delegate.on("facet:abort-loading", this._abort.bind(this));
                }
                async _rerender(e) {
                    history.replaceState({}, "", e.detail.url), this._abort(), this.showLoadingBar();
                    let t = new URL(window.location);
                    t.searchParams.set("section_id", this.getAttribute("section-id"));
                    try {
                        this.abortController = new AbortController();
                        let e = await (await fetch(t.toString(), { signal: this.abortController.signal })).text(),
                            i = document.createElement("div");
                        (i.innerHTML = e), (this.querySelector("#facet-main").innerHTML = i.querySelector("#facet-main").innerHTML);
                        let s = Array.from(i.querySelectorAll(".product-facet__active-list")),
                            n = document.querySelector(".mobile-toolbar__item--filters");
                        n && n.classList.toggle("has-filters", s.length > 0);
                        let a = i.querySelector("#facet-filters");
                        if (a) {
                            let e = this.querySelector("#facet-filters .drawer__content").scrollTop;
                            Array.from(this.querySelectorAll("#facet-filters-form .collapsible-toggle")).forEach((e) => {
                                let t = a.querySelector(`[aria-controls="${e.getAttribute("aria-controls")}"]`),
                                    i = "true" === e.getAttribute("aria-expanded");
                                t.setAttribute("aria-expanded", i ? "true" : "false"), t.nextElementSibling.toggleAttribute("open", i), (t.nextElementSibling.style.overflow = i ? "visible" : "");
                            }),
                                (this.querySelector("#facet-filters").innerHTML = a.innerHTML),
                                (this.querySelector("#facet-filters .drawer__content").scrollTop = e);
                        }
                        let r = this.querySelector(".product-facet__meta-bar") || this.querySelector(".product-facet__product-list") || this.querySelector(".product-facet__main");
                        requestAnimationFrame(() => {
                            r.scrollIntoView({ block: "start", behavior: "smooth" });
                        }),
                            this.hideLoadingBar();
                    } catch (e) {
                        if ("AbortError" === e.name) return;
                    }
                }
                _abort() {
                    this.abortController && this.abortController.abort();
                }
            }
        );
    window.customElements.define(
        "facet-filters",
        class extends Ve {
            connectedCallback() {
                super.connectedCallback(),
                    this.delegate.on("change", '[name^="filter."]', this._onFilterChanged.bind(this)),
                    this.rootDelegate.on("click", '[data-action="clear-filters"]', this._onFiltersCleared.bind(this)),
                    this.alwaysVisible && ((this.matchMedia = window.matchMedia(window.themeVariables.breakpoints.pocket)), this.matchMedia.addListener(this._adjustDrawer.bind(this)), this._adjustDrawer(this.matchMedia));
            }
            get alwaysVisible() {
                return this.hasAttribute("always-visible");
            }
            _onFiltersCleared(e, t) {
                e.preventDefault(),
                    l(this, "facet:criteria-changed", { url: t.href }),
                    setTimeout(function () {
                        Ye();
                    }, 1e3);
            }
            _onFilterChanged() {
                let e = new FormData(this.querySelector("#facet-filters-form")),
                    t = new URLSearchParams(e).toString();
                l(this, "facet:criteria-changed", { url: `${window.location.pathname}?${t}` }),
                    setTimeout(function () {
                        Ye();
                    }, 1e3);
            }
            _adjustDrawer(e) {
                this.classList.toggle("drawer", e.matches), this.classList.toggle("drawer--from-left", e.matches);
            }
        }
    );
    window.customElements.define(
        "sort-by-popover",
        class extends Z {
            connectedCallback() {
                super.connectedCallback(), this.delegate.on("change", '[name="sort_by"]', this._onSortChanged.bind(this));
            }
            _onSortChanged(e, t) {
                let i = new URL(location.href);
                i.searchParams.set("sort_by", t.value),
                    i.searchParams.delete("page"),
                    (this.open = !1),
                    this.dispatchEvent(new CustomEvent("facet:criteria-changed", { bubbles: !0, detail: { url: i.toString() } })),
                    setTimeout(function () {
                        Ye();
                    }, 1e3);
            }
        }
    );
    window.customElements.define(
        "cart-count",
        class extends c {
            connectedCallback() {
                this.rootDelegate.on("cart:updated", (e) => (this.innerText = e.detail.cart.item_count)), this.rootDelegate.on("cart:refresh", (e) => (this.innerText = e.detail ? e.detail.cart.item_count : ""));
            }
        }
    ),
        (Shopify.cartNamogooPrice = function (e) {
            if (Shopify.enable_namagoo) {
                let t = JSON.parse(localStorage.getItem("Namogoo")).discountValue,
                    i = e.total_price;
                (i -= (i / 100) * t), $(".mini-cart__drawer-footer .cart-total-text b").html(Shopify.formatMoney(i, Shopify.money_format2));
                for (let i = 0; i < e.items.length; i++)
                    if (Object.keys(e.items[i].properties).includes("namogoo")) {
                        let s = e.items[i].line_price;
                        (s -= (s / 100) * t),
                            $("#mini-cart-form [data-product_id=" + e.items[i].product_id + "]")
                                .siblings(".product-item-meta__price-list-container")
                                .children(".price-list")
                                .children(".price.price--highlight")
                                .html(Shopify.formatMoney(s, Shopify.money_format2));
                    }
            }
        }),
        (Shopify.cartGst = function () {
            0 == $(".main-checkout-btn").length &&
                ($(".mini-cart_footer").append(
                    '<button is="loader-button" onclick="shopifyCheckout()" form="mini-cart-form" type="submit" class="main-checkout-btn checkout-button hide button button--primary button--full" name="checkout">PLACE ORDER</button>'
                ),
                document.querySelector(".gst-container input") && document.querySelector(".gst-container input").checked && ($(".mini-cart__gst_details").show(), $(".main-checkout-btn").show(), $(".checkout-buttons-div").hide()),
                Shopify.gst_added &&
                    ($(".mini-cart__gst").append(
                        `<div class="mini-cart__gst_details"><p> ${sessionStorage.gst_billing_name} </p><p> ${sessionStorage.gst_billing_address} ${sessionStorage.gst_billing_city} ${sessionStorage.gst_billing_state} ${sessionStorage.gst_billing_pincode} </p></div>`
                    ),
                    (document.querySelector(".gst-container input").checked = !0),
                    $(".mini-cart__gst_details").show(),
                    $(".main-checkout-btn").show(),
                    $(".checkout-buttons-div").hide()),
                $(".gst-container input").click(function () {
                    this.checked
                        ? ($(".main-checkout-btn").show(), $(".checkout-buttons-div").hide(), Shopify.gst_added && $(".mini-cart__gst_details").show())
                        : ($(".main-checkout-btn").hide(), $(".checkout-buttons-div").show(), Shopify.gst_added && $(".mini-cart__gst_details").hide());
                }));
        });
    window.customElements.define(
        "cart-drawer",
        class extends Ve {
            connectedCallback() {
                super.connectedCallback(), (this.nextReplacementDelay = 0), this.rootDelegate.on("cart:refresh", this._rerenderCart.bind(this)), this.addEventListener("variant:added", () => (this.nextReplacementDelay = 600));
            }
            async _rerenderCart(e) {
                var t;
                let i = null,
                    s = "";
                e.detail && e.detail.cart ? ((i = e.detail.cart), (s = e.detail.cart.sections["mini-cart"])) : (s = await (await fetch(`${window.themeVariables.routes.cartUrl}?section_id=${this.getAttribute("section")}`)).text());
                let n = document.createElement("div");
                (n.innerHTML = s),
                    setTimeout(async () => {
                        var t;
                        let s = this.querySelector(".drawer__content").scrollTop;
                        if (i && 0 === i.item_count) {
                            let e = new fe(new ve(Array.from(this.querySelectorAll(".drawer__content, .drawer__footer")).map((e) => new ye(e, { opacity: [1, 0] }, { duration: 250, easing: "ease-in" }))));
                            e.play(), await e.finished;
                        }
                        (this.innerHTML = n.querySelector("cart-drawer").innerHTML),
                            Shopify.cartGst(),
                            Shopify.cartNamogooPrice(i),
                            i && 0 === i.item_count
                                ? this.querySelector(".drawer__content").animate({ opacity: [0, 1], transform: ["translateY(40px)", "translateY(0)"] }, { duration: 450, easing: "cubic-bezier(0.33, 1, 0.68, 1)" })
                                : (this.querySelector(".drawer__content").scrollTop = s),
                            (null == (t = null == e ? void 0 : e.detail) ? void 0 : t.openMiniCart) && (this.clientWidth, (this.open = !0));
                    }, (null == (t = null == e ? void 0 : e.detail) ? void 0 : t.replacementDelay) || this.nextReplacementDelay),
                    (this.nextReplacementDelay = 0);
            }
            async attributeChangedCallback(e, t, i) {
                if ((super.attributeChangedCallback(e, t, i), "open" === e && this.open && ((this.querySelector(".drawer__content").scrollTop = 0), !se.prefersReducedMotion()))) {
                    let e = Array.from(this.querySelectorAll(".line-item")),
                        t = this.querySelector(".mini-cart__recommendations-inner"),
                        i = this.querySelector(".drawer__footer"),
                        s = [];
                    t && window.matchMedia(window.themeVariables.breakpoints.pocket).matches && e.push(t),
                        e.forEach((e) => (e.style.opacity = 0)),
                        t && (t.style.opacity = 0),
                        i && (i.style.opacity = 0),
                        s.push(
                            new ve(
                                e.map(
                                    (e, t) => new ye(e, { opacity: [0, 1], transform: ["translateX(40px)", "translateX(0)"] }, { duration: 400, delay: 400 + 120 * t - Math.min(2 * t * t, 120 * t), easing: "cubic-bezier(0.25, 1, 0.5, 1)" })
                                )
                            )
                        ),
                        i && s.push(new ye(i, { opacity: [0, 1], transform: ["translateY(100%)", "translateY(0)"] }, { duration: 300, delay: 400, easing: "cubic-bezier(0.25, 1, 0.5, 1)" })),
                        t &&
                            !window.matchMedia(window.themeVariables.breakpoints.pocket).matches &&
                            s.push(new ye(t, { opacity: [0, 1], transform: ["translateX(100%)", "translateX(0)"] }, { duration: 250, delay: 400 + Math.max(120 * e.length - 25 * e.length, 25), easing: "cubic-bezier(0.25, 1, 0.5, 1)" })),
                        new fe(new ve(s)).play();
                }
                Shopify.cartGst(),
                    fetch(`${window.themeVariables.routes.cartUrl}.js`).then(async (e) => {
                        let t = await e.json();
                        Shopify.cartNamogooPrice(t);
                    });
            }
        }
    );
    var je = class extends HTMLElement {
            async connectedCallback() {
                je.recommendationsCache[this.productId] || (je.recommendationsCache[this.productId] = fetch(`${window.themeVariables.routes.productRecommendationsUrl}?product_id=${this.productId}&limit=10&section_id=${this.sectionId}`));
                let e = await je.recommendationsCache[this.productId],
                    t = document.createElement("div");
                t.innerHTML = await e.clone().text();
                let i = t.querySelector("cart-drawer-recommendations");
                i && i.hasChildNodes() ? (this.innerHTML = i.innerHTML) : (this.hidden = !0);
            }
            get productId() {
                return this.getAttribute("product-id");
            }
            get sectionId() {
                return this.getAttribute("section-id");
            }
        },
        Ue = je;
    i(Ue, "recommendationsCache", {}), window.customElements.define("cart-drawer-recommendations", Ue);
    var Xe = class extends HTMLTextAreaElement {
        connectedCallback() {
            this.addEventListener("change", this._onNoteChanged.bind(this));
        }
        get ownedToggle() {
            return this.hasAttribute("aria-owns") ? document.getElementById(this.getAttribute("aria-owns")) : null;
        }
        async _onNoteChanged() {
            this.ownedToggle && (this.ownedToggle.innerHTML = "" === this.value ? window.themeVariables.strings.cartAddOrderNote : window.themeVariables.strings.cartEditOrderNote);
            let e = await (
                await fetch(`${window.themeVariables.routes.cartUrl}/update.js`, { body: JSON.stringify({ note: this.value }), credentials: "same-origin", method: "POST", headers: { "Content-Type": "application/json" } })
            ).json();
            document.documentElement.dispatchEvent(new CustomEvent("cart:updated", { bubbles: !0, detail: { cart: e } }));
        }
    };
    window.customElements.define("cart-note", Xe, { extends: "textarea" });
    var Ge = class extends HTMLElement {
        connectedCallback() {
            document.documentElement.addEventListener("cart:updated", this._onCartUpdated.bind(this));
        }
        get threshold() {
            return parseFloat(this.getAttribute("threshold"));
        }
        _onCartUpdated(e) {
            this.style.setProperty("--progress", Math.min(parseFloat(e.detail.cart.total_price) / this.threshold, 1));
        }
    };
    window.customElements.define("free-shipping-bar", Ge);
    window.customElements.define(
        "line-item-quantity",
        class extends c {
            connectedCallback() {
                this.delegate.on("click", "a", this._onQuantityLinkClicked.bind(this)), this.delegate.on("change", "input", this._onQuantityChanged.bind(this));
            }
            _onQuantityLinkClicked(e, t) {
                e.preventDefault(), this._updateFromLink(t.href);
            }
            _onQuantityChanged(e, t) {
                this._updateFromLink(`${window.themeVariables.routes.cartChangeUrl}?quantity=${t.value}&line=${t.getAttribute("data-line")}`);
            }
            async _updateFromLink(e) {
                if ("cart" === window.themeVariables.settings.pageType) return void (window.location.href = e);
                let t = new URL(e, `https://${window.themeVariables.routes.host}`).searchParams,
                    i = t.get("line"),
                    s = t.get("id"),
                    n = parseInt(t.get("quantity"));
                this.dispatchEvent(new CustomEvent("line-item-quantity:change:start", { bubbles: !0, detail: { newLineQuantity: n } }));
                let a = await (
                    await fetch(`${window.themeVariables.routes.cartChangeUrl}.js`, {
                        body: JSON.stringify({ line: i, id: s, quantity: n, sections: ["mini-cart"] }),
                        credentials: "same-origin",
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                    })
                ).json();
                this.dispatchEvent(new CustomEvent("line-item-quantity:change:end", { bubbles: !0, detail: { cart: a, newLineQuantity: n } })),
                    document.documentElement.dispatchEvent(new CustomEvent("cart:updated", { bubbles: !0, detail: { cart: a } })),
                    document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", { bubbles: !0, detail: { cart: a, replacementDelay: 0 === n ? 600 : 750 } }));
            }
        }
    );
    var Ze = class extends HTMLElement {
        connectedCallback() {
            (this.lineItemLoader = this.querySelector(".line-item__loader")),
                this.addEventListener("line-item-quantity:change:start", this._onQuantityStart.bind(this)),
                this.addEventListener("line-item-quantity:change:end", this._onQuantityEnd.bind(this));
        }
        _onQuantityStart() {
            this.lineItemLoader && ((this.lineItemLoader.hidden = !1), (this.lineItemLoader.firstElementChild.hidden = !1), (this.lineItemLoader.lastElementChild.hidden = !0));
        }
        async _onQuantityEnd(e) {
            0 !== e.detail.cart.item_count &&
                this.lineItemLoader &&
                (await this.lineItemLoader.firstElementChild.animate({ opacity: [1, 0], transform: ["translateY(0)", "translateY(-10px)"] }, 75).finished,
                (this.lineItemLoader.firstElementChild.hidden = !0),
                0 === e.detail.newLineQuantity
                    ? (await this.animate({ opacity: [1, 0], height: [`${this.clientHeight}px`, 0] }, { duration: 300, easing: "ease" }).finished, this.remove())
                    : ((this.lineItemLoader.lastElementChild.hidden = !1),
                      await this.lineItemLoader.lastElementChild.animate({ opacity: [0, 1], transform: ["translateY(10px)", "translateY(0)"] }, { duration: 75, endDelay: 300 }).finished,
                      (this.lineItemLoader.hidden = !0)));
        }
    };
    window.customElements.define("line-item", Ze);
    window.customElements.define(
        "cart-notification",
        class extends c {
            connectedCallback() {
                this.rootDelegate.on("cart-notification:show", this._onShow.bind(this), !this.hasAttribute("global")),
                    this.delegate.on("click", '[data-action="close"]', (e) => {
                        e.stopPropagation(), (this.hidden = !0);
                    }),
                    this.addEventListener("mouseenter", this.stopTimer.bind(this)),
                    this.addEventListener("mouseleave", this.startTimer.bind(this)),
                    window.addEventListener("pagehide", () => (this.hidden = !0));
            }
            set hidden(e) {
                e ? this.stopTimer() : this.startTimer(), this.toggleAttribute("hidden", e);
            }
            get isInsideDrawer() {
                return this.classList.contains("cart-notification--drawer");
            }
            stopTimer() {
                clearTimeout(this._timeout);
            }
            startTimer() {
                this._timeout = setTimeout(() => (this.hidden = !0), 3e3);
            }
            _onShow(e) {
                if ((this.isInsideDrawer && !this.closest(".drawer").open) || (this.hasAttribute("global") && "success" === e.detail.status && "drawer" === window.themeVariables.settings.cartType)) return;
                e.stopPropagation();
                let t = "";
                this.isInsideDrawer ||
                    (t = `        <button class="cart-notification__close tap-area hidden-phone" data-action="close">          <span class="visually-hidden">${window.themeVariables.strings.accessibilityClose}</span>         <svg focusable="false" width="14" height="14" class="icon icon--close icon--inline" viewBox="0 0 14 14">            <path d="M13 13L1 1M13 1L1 13" stroke="currentColor" stroke-width="2" fill="none"></path>         </svg>        </button>      `),
                    "success" === e.detail.status
                        ? (this.classList.remove("cart-notification--error"),
                          (this.innerHTML = `        <div class="cart-notification__overflow">          <div class="container">            <div class="cart-notification__wrapper">              <svg focusable="false" width="20" height="20" class="icon icon--cart-notification" viewBox="0 0 20 20">                <rect width="20" height="20" rx="10" fill="currentColor"></rect>               <path d="M6 10L9 13L14 7" fill="none" stroke="rgb(var(--success-color))" stroke-width="2"></path>             </svg>              <div class="cart-notification__text-wrapper">                <span class="cart-notification__heading heading hidden-phone">${window.themeVariables.strings.cartItemAdded}</span>                <span class="cart-notification__heading heading hidden-tablet-and-up">${window.themeVariables.strings.cartItemAddedShort}</span>\t\t\t\t<a href="" class="noti-view">View Cart</a>              </div>              ${t}            </div>          </div>        </div>      `),
                          $(".noti-view").click(function (e) {
                              e.preventDefault(), $(".drawer--quick-buy").attr("open", !1), $(".header__cart").attr("aria-expanded", !0);
                          }))
                        : (this.classList.add("cart-notification--error"),
                          (this.innerHTML = `       <div class="cart-notification__overflow">          <div class="container">            <div class="cart-notification__wrapper">             <svg focusable="false" width="20" height="20" class="icon icon--cart-notification" viewBox="0 0 20 20">                <rect width="20" height="20" rx="10" fill="currentColor"></rect>               <path d="M9.6748 13.2798C9.90332 13.0555 10.1763 12.9434 10.4937 12.9434C10.811 12.9434 11.0819 13.0555 11.3062 13.2798C11.5347 13.5041 11.6489 13.7749 11.6489 14.0923C11.6489 14.4097 11.5347 14.6847 11.3062 14.9175C11.0819 15.146 10.811 15.2603 10.4937 15.2603C10.1763 15.2603 9.90332 15.146 9.6748 14.9175C9.45052 14.6847 9.33838 14.4097 9.33838 14.0923C9.33838 13.7749 9.45052 13.5041 9.6748 13.2798ZM9.56689 12.1816V5.19922H11.4141V12.1816H9.56689Z" fill="rgb(var(--error-color))"></path>             </svg>              <div class="cart-notification__text-wrapper">                <span class="cart-notification__heading heading">${e.detail.error}</span>             </div>                          ${t}            </div>          </div>        </div>      `)),
                    this.clientHeight,
                    (this.hidden = !1);
            }
        }
    );
    var Je = class extends HTMLElement {
        connectedCallback() {
            (this.submitButton = this.querySelector('[type="button"]')), this.submitButton.addEventListener("click", this._estimateShipping.bind(this));
        }
        async _estimateShipping() {
            let e = this.querySelector('[name="shipping-estimator[zip]"]').value,
                t = this.querySelector('[name="shipping-estimator[country]"]').value,
                i = this.querySelector('[name="shipping-estimator[province]"]').value;
            this.submitButton.setAttribute("aria-busy", "true");
            let s = await fetch(`${window.themeVariables.routes.cartUrl}/prepare_shipping_rates.json?shipping_address[zip]=${e}&shipping_address[country]=${t}&shipping_address[province]=${i}`, { method: "POST" });
            if (s.ok) {
                let s = await this._getAsyncShippingRates(e, t, i);
                this._formatShippingRates(s);
            } else {
                let e = await s.json();
                this._formatError(e);
            }
            this.submitButton.removeAttribute("aria-busy");
        }
        async _getAsyncShippingRates(e, t, i) {
            let s = await (await fetch(`${window.themeVariables.routes.cartUrl}/async_shipping_rates.json?shipping_address[zip]=${e}&shipping_address[country]=${t}&shipping_address[province]=${i}`)).text();
            return "null" === s ? this._getAsyncShippingRates(e, t, i) : JSON.parse(s).shipping_rates;
        }
        _formatShippingRates(e) {
            var t;
            null == (t = this.querySelector(".shipping-estimator__results")) || t.remove();
            let i = "";
            e.forEach((e) => {
                i += `<li>${e.presentment_name}: ${Re(100 * parseFloat(e.price))}</li>`;
            });
            let s = `      <div class="shipping-estimator__results">        <p>${
                0 === e.length ? window.themeVariables.strings.shippingEstimatorNoResults : 1 === e.length ? window.themeVariables.strings.shippingEstimatorOneResult : window.themeVariables.strings.shippingEstimatorMultipleResults
            }</p>        ${"" === i ? "" : `<ul class="unordered-list">${i}</ul>`}      </div>    `;
            this.insertAdjacentHTML("beforeend", s);
        }
        _formatError(e) {
            var t;
            null == (t = this.querySelector(".shipping-estimator__results")) || t.remove();
            let i = "";
            Object.keys(e).forEach((t) => {
                i += `<li>${t} ${e[t]}</li>`;
            });
            let s = `      <div class="shipping-estimator__results">        <p>${window.themeVariables.strings.shippingEstimatorError}</p>        <ul class="unordered-list">${i}</ul>      </div>    `;
            this.insertAdjacentHTML("beforeend", s);
        }
    };
    window.customElements.define("shipping-estimator", Je);
    var Qe = class extends HTMLAnchorElement {
        constructor() {
            super(), this.addEventListener("click", this._onClick.bind(this));
        }
        _onClick() {
            let e = document.getElementById("shopify-product-reviews");
            e && (window.matchMedia(window.themeVariables.breakpoints.pocket).matches ? (e.closest("collapsible-content").open = !0) : document.querySelector(`[aria-controls="${e.closest(".product-tabs__tab-item-wrapper").id}"]`).click());
        }
    };
    window.customElements.define("review-link", Qe, { extends: "a" });
    var Ke = class extends HTMLElement {
        connectedCallback() {
            var e;
            null == (e = document.getElementById(this.getAttribute("form-id"))) || e.addEventListener("variant:changed", this._onVariantChanged.bind(this)),
                (this.imageElement = this.querySelector(".product-sticky-form__image")),
                (this.priceElement = this.querySelector(".product-sticky-form__price")),
                (this.unitPriceElement = this.querySelector(".product-sticky-form__unit-price")),
                this._setupVisibilityObservers();
        }
        disconnectedCallback() {
            this.intersectionObserver.disconnect();
        }
        set hidden(e) {
            this.toggleAttribute("hidden", e), e ? document.documentElement.style.removeProperty("--cart-notification-offset") : document.documentElement.style.setProperty("--cart-notification-offset", `${this.clientHeight}px`);
        }
        _onVariantChanged(e) {
            let t = e.detail.variant,
                i = window.themeVariables.settings.currencyCodeEnabled ? window.themeVariables.settings.moneyWithCurrencyFormat : window.themeVariables.settings.moneyFormat;
            if (!t) return;
            if ((this.priceElement && (this.priceElement.innerHTML = Re(t.price, i)), this.unitPriceElement && ((this.unitPriceElement.style.display = t.unit_price_measurement ? "block" : "none"), t.unit_price_measurement))) {
                let e = "";
                1 !== t.unit_price_measurement.reference_value && (e = `<span class="unit-price-measurement__reference-value">${t.unit_price_measurement.reference_value}</span>`),
                    (this.unitPriceElement.innerHTML = `          <div class="unit-price-measurement">            <span class="unit-price-measurement__price">${Re(
                        t.unit_price
                    )}</span>            <span class="unit-price-measurement__separator">/</span>            ${e}            <span class="unit-price-measurement__reference-unit">${
                        t.unit_price_measurement.reference_unit
                    }</span>          </div>        `);
            }
            if (!this.imageElement || !t || !t.featured_media) return;
            let s = t.featured_media;
            s.alt && this.imageElement.setAttribute("alt", s.alt),
                this.imageElement.setAttribute("width", s.preview_image.width),
                this.imageElement.setAttribute("height", s.preview_image.height),
                this.imageElement.setAttribute("src", pe(s, "165x")),
                this.imageElement.setAttribute("srcset", me(s, [55, 110, 165]));
        }
        _setupVisibilityObservers() {
            let e = document.getElementById("MainPaymentContainer"),
                t = document.querySelector(".shopify-section--footer"),
                i = z();
            (this._isFooterVisible = this._isPaymentContainerPassed = !1),
                (this.intersectionObserver = new IntersectionObserver(
                    (s) => {
                        s.forEach((s) => {
                            if ((s.target === t && (this._isFooterVisible = s.intersectionRatio > 0), s.target === e)) {
                                let t = e.getBoundingClientRect();
                                this._isPaymentContainerPassed = 0 === s.intersectionRatio && t.top + t.height <= i;
                            }
                        }),
                            window.matchMedia(window.themeVariables.breakpoints.pocket).matches ? (this.hidden = !this._isPaymentContainerPassed || this._isFooterVisible) : (this.hidden = !this._isPaymentContainerPassed);
                    },
                    { rootMargin: `-${i}px 0px 0px 0px` }
                )),
                this.intersectionObserver.observe(e),
                this.intersectionObserver.observe(t);
        }
    };
    window.customElements.define("product-sticky-form", Ke),
        new (class {
            constructor() {
                (this.delegateElement = new o(document.body)), this.delegateElement.on("change", "[data-bind-value]", this._onValueChanged.bind(this));
            }
            _onValueChanged(e, t) {
                let i = document.getElementById(t.getAttribute("data-bind-value"));
                i && ("SELECT" === t.tagName && (t = t.options[t.selectedIndex]), (i.innerHTML = t.hasAttribute("title") ? t.getAttribute("title") : t.value));
            }
        })(),
        Shopify.designMode &&
            document.addEventListener("shopify:section:load", () => {
                window.SPR && (window.SPR.initDomEls(), window.SPR.loadProducts());
            }),
        (window.SPRCallbacks = {
            onFormSuccess(e, t) {
                document.getElementById(`form_${t.id}`).classList.add("spr-form--success");
            },
        }),
        (() => {
            let e = window.visualViewport ? window.visualViewport.width : document.documentElement.clientWidth,
                t = () => {
                    let t = window.visualViewport ? window.visualViewport.width : document.documentElement.clientWidth,
                        i = window.visualViewport ? window.visualViewport.height : document.documentElement.clientHeight;
                    t !== e &&
                        requestAnimationFrame(() => {
                            document.documentElement.style.setProperty("--window-height", i + "px"), (e = t);
                        });
                };
            t(), window.visualViewport ? window.visualViewport.addEventListener("resize", t) : window.addEventListener("resize", t);
        })(),
        (() => {
            let e = new o(document.body);
            e.on("keyup", 'input:not([type="checkbox"]):not([type="radio"]), textarea', (e, t) => {
                t.classList.toggle("is-filled", "" !== t.value);
            }),
                e.on("change", "select", (e, t) => {
                    t.parentNode.classList.toggle("is-filled", "" !== t.value);
                });
        })(),
        document.querySelectorAll(".rte table").forEach((e) => {
            e.outerHTML = '<div class="table-wrapper">' + e.outerHTML + "</div>";
        }),
        document.querySelectorAll(".rte iframe").forEach((e) => {
            (-1 !== e.src.indexOf("youtube") || -1 !== e.src.indexOf("youtu.be") || -1 !== e.src.indexOf("vimeo")) && (e.outerHTML = '<div class="video-wrapper">' + e.outerHTML + "</div>");
        }),
        new o(document.documentElement).on("click", "[data-smooth-scroll]", (e, t) => {
            let i = document.querySelector(t.getAttribute("href"));
            i && (e.preventDefault(), i.scrollIntoView({ behavior: "smooth", block: "start" }));
        }),
        document.addEventListener("keyup", function (e) {
            "Tab" === e.key && (document.body.classList.remove("no-focus-outline"), document.body.classList.add("focus-outline"));
        });
})(),
    (Shopify.money_format = "₹ {{amount_no_decimals}}"),
    (Shopify.money_format2 = "Rs. {{amount}}"),
    (Shopify.formatMoney = function (e, t) {
        "string" == typeof e && (e = e.replace(".", ""));
        var i = "",
            s = /\{\{\s*(\w+)\s*\}\}/,
            n = t || this.money_format;
        function a(e, t) {
            return void 0 === e ? t : e;
        }
        function r(e, t, i, s) {
            if (((t = a(t, 2)), (i = a(i, ",")), (s = a(s, ".")), isNaN(e) || null == e)) return 0;
            var n = (e = (e / 100).toFixed(t)).split(".");
            return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i) + (n[1] ? s + n[1] : "");
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
                i = r(e, 0, ".", ",");
        }
        return n.replace(s, i);
    });
