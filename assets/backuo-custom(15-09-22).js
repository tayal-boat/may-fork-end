var userSource = "";
function quickATC() {
    let a = $(".quick-buy-product__info").find(".product-item-meta__title").text(),
        b = $(".quick-buy-product__info").find(".price--highlight").text().split("price")[1];
    var c = $(".color-swatch__radio:checked").val();
    clevertap.event.push("Added to Cart", { "Product Name": a + " - " + c, Amount: b, Quantity: 1, source: "Quick View Drawer", userSource: userSource }),
        clevertap.profile.push({ Site: { "A2C Product Name": a + " - " + c, "A2C Amount": b, "A2C Quantity": 1 } }),
        setTimeout(function () {
            $(".drawer--quick-buy").attr("open", !1), $(".header__cart").attr("aria-expanded", !0);
        }, 1200);
}
(userSource = navigator.userAgent.includes("Mobile") ? "Mobile" : navigator.userAgent.includes("iPad") ? "Tablet" : "Desktop"),
    $(".featured-collections").on("click", function () {
        let a = $(this).siblings(".section__header").find('.tabs-nav__item[aria-expanded="true"]').text();
        clevertap.event.push("Homepage Cards section clicked", { userSource: userSource, "secttion Title": a });
    }),
    $(".product-item__quick-form").on("click", function () {
        let a = $(this).parents(".product-item__image-wrapper").siblings(".product-item__info").find(".product-item-meta__title").text(),
            b = $(this).parents(".product-item__image-wrapper").siblings(".product-item__info").find(".price--highlight").text().split("price")[1];
        clevertap.event.push("Quick Buy Clicked", { "Product Title": a, Price: b, userSource: userSource });
    }),
    $(".gokwik-checkout").click(function () {
        clevertap.event.push("GoKwik Button Clicked");
    }),
    $("#mini-cart-form").submit(function () {
        var a = $(".cart-total").val(),
            b = "",
            c = [];
        $("#mini-cart .line-item").each(function (d, i) {
            var a = $(this).find(".product-item-meta__title").text(),
                e = $(this).find(".product-item-meta__title").attr("data-product_id"),
                f = $(this).find(".price--highlight").text().split("price")[1],
                g = $(this).find(".product-item-meta__title").attr("data-product_type"),
                h = $(this).find(".quantity-selector__input").val();
            (b = 0 == d ? a : b + "," + a), c.push({ item_name: a, item_id: e, price: f, item_category: g, quantity: h });
        }),
            clevertap.event.push("Checkout Button Clicked", { Amount: a, "Product Name": b }),
            dataLayer.push({ ecommerce: null }),
            dataLayer.push({ event: "begin_checkout", ecommerce: { items: c } });
    }),
    $(".footer__item-content .linklist__item").each(function () {
        $(this).on("click", function () {
            let a = $(this).text().trim();
            clevertap.event.push("Footer Menu Item Clicked", { Item: a, Source: "Footer" });
        });
    }),
    $(".header__inline-navigation .header__linklist-item").each(function () {
        $(this).on("click", function () {
            let a = $(this).text().trim();
            clevertap.event.push("Header Menu Item Clicked", { Item: a, Source: "Header Desktop" });
        });
    }),
    $(".header__inline-navigation").click(function () {
        clevertap.event.push("Hamburger Menu Clicked");
    }),
    $('a[aria-controls="mini-cart"]').click(function () {
        clevertap.event.push("Slider Cart Opened", { Source: "Header" });
    }),
    window.matchMedia("(max-width: 767px)").matches &&
        ($(".footer__item-title").append('\n	<span class="expanded toggle">+</span>\n	<span class="collapsed visually-hidden toggle">-</span>\n  '),
        $(".footer__item--links").click(function () {
            $(this).find(".footer__item-content").slideToggle(), $(this).find("span.toggle").toggleClass("visually-hidden");
        })),
    $(".myDropdown .toggle-link").click(function () {
        $(".myDropdown .dropdown-menu").removeClass("visually-hidden");
    }),
    $(".myDropdown .close-popup").click(function () {
        $(".myDropdown .dropdown-menu").addClass("visually-hidden");
    }),
    $(document).click(function (a) {
        a.stopPropagation(), 0 === $(".myDropdown").has(a.target).length && $(".dropdown-menu").addClass("visually-hidden");
    }),
    $(".mobile-nav  .mobile-nav__item").each(function () {
        $(this).on("click", function () {
            let a = $(this).text().trim();
            clevertap.event.push("Header Menu Item Clicked", { Item: a, Source: "Header Mobile" });
        });
    });
let currentURL = location.href,
    cartStr = "/cart",
    cartHashStr = "/#cart";
-1 != currentURL.indexOf(cartStr) && (location.href = "https://www.boat-lifestyle.com/#cart"),
    -1 != currentURL.indexOf(cartHashStr) && $(".header__cart").attr("aria-expanded", !0),
    (function (b, a) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = a()) : "function" == typeof define && define.amd ? define([], a) : "object" == typeof exports ? (exports.AOS = a()) : (b.AOS = a());
    })(this, function () {
        return (function (b) {
            function a(d) {
                if (c[d]) return c[d].exports;
                var e = (c[d] = { exports: {}, id: d, loaded: !1 });
                return b[d].call(e.exports, e, e.exports, a), (e.loaded = !0), e.exports;
            }
            var c = {};
            return (a.m = b), (a.c = c), (a.p = "dist/"), a(0);
        })([
            function (c, g, a) {
                "use strict";
                function b(a) {
                    return a && a.__esModule ? a : { default: a };
                }
                var h =
                        Object.assign ||
                        function (d) {
                            for (var a = 1; a < arguments.length; a++) {
                                var b = arguments[a];
                                for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c]);
                            }
                            return d;
                        },
                    d = (b(a(1)), a(6)),
                    i = b(d),
                    j = b(a(7)),
                    k = b(a(8)),
                    l = b(a(9)),
                    m = b(a(10)),
                    n = b(a(11)),
                    o = b(a(14)),
                    p = [],
                    q = !1,
                    r = document.all && !window.atob,
                    s = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 },
                    e = function () {
                        if ((arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (q = !0), q)) return (p = (0, n.default)(p, s)), (0, m.default)(p, s.once), p;
                    },
                    f = function () {
                        (p = (0, o.default)()), e();
                    };
                c.exports = {
                    init: function (b) {
                        var a;
                        return (
                            (s = h(s, b)),
                            (p = (0, o.default)()),
                            !0 === (a = s.disable) || ("mobile" === a && l.default.mobile()) || ("phone" === a && l.default.phone()) || ("tablet" === a && l.default.tablet()) || ("function" == typeof a && !0 === a()) || r
                                ? void p.forEach(function (a, b) {
                                      a.node.removeAttribute("data-aos"), a.node.removeAttribute("data-aos-easing"), a.node.removeAttribute("data-aos-duration"), a.node.removeAttribute("data-aos-delay");
                                  })
                                : (document.querySelector("body").setAttribute("data-aos-easing", s.easing),
                                  document.querySelector("body").setAttribute("data-aos-duration", s.duration),
                                  document.querySelector("body").setAttribute("data-aos-delay", s.delay),
                                  "DOMContentLoaded" === s.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1
                                      ? e(!0)
                                      : "load" === s.startEvent
                                      ? window.addEventListener(s.startEvent, function () {
                                            e(!0);
                                        })
                                      : document.addEventListener(s.startEvent, function () {
                                            e(!0);
                                        }),
                                  window.addEventListener("resize", (0, j.default)(e, s.debounceDelay, !0)),
                                  window.addEventListener("orientationchange", (0, j.default)(e, s.debounceDelay, !0)),
                                  window.addEventListener(
                                      "scroll",
                                      (0, i.default)(function () {
                                          (0, m.default)(p, s.once);
                                      }, s.throttleDelay)
                                  ),
                                  s.disableMutationObserver || (0, k.default)("[data-aos]", f),
                                  p)
                        );
                    },
                    refresh: e,
                    refreshHard: f,
                };
            },
            function (a, b) {},
            ,
            ,
            ,
            ,
            function (b, a) {
                (function (a) {
                    "use strict";
                    function f(a) {
                        var b = void 0 === a ? "undefined" : c(a);
                        return !!a && ("object" == b || "function" == b);
                    }
                    function g(a) {
                        if ("number" == typeof a) return a;
                        if ("symbol" == (void 0 === (e = a) ? "undefined" : c(e)) || ((g = e) && "object" == (void 0 === g ? "undefined" : c(g)) && q.call(e) == j)) return i;
                        if (f(a)) {
                            var e,
                                g,
                                b = "function" == typeof a.valueOf ? a.valueOf() : a;
                            a = f(b) ? b + "" : b;
                        }
                        if ("string" != typeof a) return 0 === a ? a : +a;
                        a = a.replace(k, "");
                        var d = m.test(a);
                        return d || n.test(a) ? o(a.slice(2), d ? 2 : 8) : l.test(a) ? i : +a;
                    }
                    var c =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (a) {
                                      return typeof a;
                                  }
                                : function (a) {
                                      return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
                                  },
                        h = "Expected a function",
                        i = NaN,
                        j = "[object Symbol]",
                        k = /^\s+|\s+$/g,
                        l = /^[-+]0x[0-9a-f]+$/i,
                        m = /^0b[01]+$/i,
                        n = /^0o[0-7]+$/i,
                        o = parseInt,
                        d = "object" == (void 0 === a ? "undefined" : c(a)) && a && a.Object === Object && a,
                        e = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
                        p = d || e || Function("return this")(),
                        q = Object.prototype.toString,
                        r = Math.max,
                        s = Math.min,
                        t = function () {
                            return p.Date.now();
                        };
                    b.exports = function (d, e, a) {
                        var b = !0,
                            c = !0;
                        if ("function" != typeof d) throw new TypeError(h);
                        return (
                            f(a) && ((b = "leading" in a ? !!a.leading : b), (c = "trailing" in a ? !!a.trailing : c)),
                            (function (i, b, a) {
                                function k(a) {
                                    var b = o,
                                        c = p;
                                    return (o = p = void 0), (w = a), (q = i.apply(c, b));
                                }
                                function l(a) {
                                    var c = a - v;
                                    return void 0 === v || c >= b || c < 0 || (_ && a - w >= d);
                                }
                                function m() {
                                    var e,
                                        a,
                                        c = t();
                                    return l(c) ? n(c) : void (u = setTimeout(m, ((a = b - ((e = c) - v)), _ ? s(a, d - (e - w)) : a)));
                                }
                                function n(a) {
                                    return (u = void 0), e && o ? k(a) : ((o = p = void 0), q);
                                }
                                function c() {
                                    var a,
                                        c = t(),
                                        d = l(c);
                                    if (((o = arguments), (p = this), (v = c), d)) {
                                        if (void 0 === u) return (w = a = v), (u = setTimeout(m, b)), j ? k(a) : q;
                                        if (_) return (u = setTimeout(m, b)), k(v);
                                    }
                                    return void 0 === u && (u = setTimeout(m, b)), q;
                                }
                                var o,
                                    p,
                                    d,
                                    q,
                                    u,
                                    v,
                                    w = 0,
                                    j = !1,
                                    _ = !1,
                                    e = !0;
                                if ("function" != typeof i) throw new TypeError(h);
                                return (
                                    (b = g(b) || 0),
                                    f(a) && ((j = !!a.leading), (d = (_ = "maxWait" in a) ? r(g(a.maxWait) || 0, b) : d), (e = "trailing" in a ? !!a.trailing : e)),
                                    (c.cancel = function () {
                                        void 0 !== u && clearTimeout(u), (w = 0), (o = v = p = u = void 0);
                                    }),
                                    (c.flush = function () {
                                        return void 0 === u ? q : n(t());
                                    }),
                                    c
                                );
                            })(d, e, { leading: b, maxWait: e, trailing: c })
                        );
                    };
                }.call(
                    a,
                    (function () {
                        return this;
                    })()
                ));
            },
            function (b, a) {
                (function (a) {
                    "use strict";
                    function f(a) {
                        var b = void 0 === a ? "undefined" : c(a);
                        return !!a && ("object" == b || "function" == b);
                    }
                    function g(a) {
                        if ("number" == typeof a) return a;
                        if ("symbol" == (void 0 === (e = a) ? "undefined" : c(e)) || ((g = e) && "object" == (void 0 === g ? "undefined" : c(g)) && p.call(e) == i)) return h;
                        if (f(a)) {
                            var e,
                                g,
                                b = "function" == typeof a.valueOf ? a.valueOf() : a;
                            a = f(b) ? b + "" : b;
                        }
                        if ("string" != typeof a) return 0 === a ? a : +a;
                        a = a.replace(j, "");
                        var d = l.test(a);
                        return d || m.test(a) ? n(a.slice(2), d ? 2 : 8) : k.test(a) ? h : +a;
                    }
                    var c =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (a) {
                                      return typeof a;
                                  }
                                : function (a) {
                                      return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
                                  },
                        h = NaN,
                        i = "[object Symbol]",
                        j = /^\s+|\s+$/g,
                        k = /^[-+]0x[0-9a-f]+$/i,
                        l = /^0b[01]+$/i,
                        m = /^0o[0-7]+$/i,
                        n = parseInt,
                        d = "object" == (void 0 === a ? "undefined" : c(a)) && a && a.Object === Object && a,
                        e = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
                        o = d || e || Function("return this")(),
                        p = Object.prototype.toString,
                        q = Math.max,
                        r = Math.min,
                        s = function () {
                            return o.Date.now();
                        };
                    b.exports = function (h, b, a) {
                        function j(a) {
                            var b = n,
                                c = o;
                            return (n = o = void 0), (v = a), (p = h.apply(c, b));
                        }
                        function k(a) {
                            var c = a - u;
                            return void 0 === u || c >= b || c < 0 || (_ && a - v >= d);
                        }
                        function l() {
                            var e,
                                a,
                                c = s();
                            return k(c) ? m(c) : void (t = setTimeout(l, ((a = b - ((e = c) - u)), _ ? r(a, d - (e - v)) : a)));
                        }
                        function m(a) {
                            return (t = void 0), e && n ? j(a) : ((n = o = void 0), p);
                        }
                        function c() {
                            var a,
                                c = s(),
                                d = k(c);
                            if (((n = arguments), (o = this), (u = c), d)) {
                                if (void 0 === t) return (v = a = u), (t = setTimeout(l, b)), i ? j(a) : p;
                                if (_) return (t = setTimeout(l, b)), j(u);
                            }
                            return void 0 === t && (t = setTimeout(l, b)), p;
                        }
                        var n,
                            o,
                            d,
                            p,
                            t,
                            u,
                            v = 0,
                            i = !1,
                            _ = !1,
                            e = !0;
                        if ("function" != typeof h) throw new TypeError("Expected a function");
                        return (
                            (b = g(b) || 0),
                            f(a) && ((i = !!a.leading), (d = (_ = "maxWait" in a) ? q(g(a.maxWait) || 0, b) : d), (e = "trailing" in a ? !!a.trailing : e)),
                            (c.cancel = function () {
                                void 0 !== t && clearTimeout(t), (v = 0), (n = u = o = t = void 0);
                            }),
                            (c.flush = function () {
                                return void 0 === t ? p : m(s());
                            }),
                            c
                        );
                    };
                }.call(
                    a,
                    (function () {
                        return this;
                    })()
                ));
            },
            function (b, a) {
                "use strict";
                function c(a) {
                    a &&
                        a.forEach(function (a) {
                            var b = Array.prototype.slice.call(a.addedNodes),
                                c = Array.prototype.slice.call(a.removedNodes);
                            b.concat(c).filter(function (a) {
                                return a.hasAttribute && a.hasAttribute("data-aos");
                            }).length && f();
                        });
                }
                Object.defineProperty(a, "__esModule", { value: !0 });
                var d = window.document,
                    e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                    f = function () {};
                a.default = function (g, a) {
                    var b = new e(c);
                    (f = a), b.observe(d.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
                };
            },
            function (c, a) {
                "use strict";
                function d() {
                    return navigator.userAgent || navigator.vendor || window.opera || "";
                }
                Object.defineProperty(a, "__esModule", { value: !0 });
                var e = (function () {
                        function a(d, c) {
                            for (var b = 0; b < c.length; b++) {
                                var a = c[b];
                                (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(d, a.key, a);
                            }
                        }
                        return function (b, c, d) {
                            return c && a(b.prototype, c), d && a(b, d), b;
                        };
                    })(),
                    f = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    g = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    h = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                    i = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    b = (function () {
                        function a() {
                            !(function (a, b) {
                                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
                            })(this, a);
                        }
                        return (
                            e(a, [
                                {
                                    key: "phone",
                                    value: function () {
                                        var a = d();
                                        return !(!f.test(a) && !g.test(a.substr(0, 4)));
                                    },
                                },
                                {
                                    key: "mobile",
                                    value: function () {
                                        var a = d();
                                        return !(!h.test(a) && !i.test(a.substr(0, 4)));
                                    },
                                },
                                {
                                    key: "tablet",
                                    value: function () {
                                        return this.mobile() && !this.phone();
                                    },
                                },
                            ]),
                            a
                        );
                    })();
                a.default = new b();
            },
            function (b, a) {
                "use strict";
                Object.defineProperty(a, "__esModule", { value: !0 }),
                    (a.default = function (a, b) {
                        var c = window.pageYOffset,
                            d = window.innerHeight;
                        a.forEach(function (h, i) {
                            var a, f, g, e;
                            (a = h),
                                (f = d + c),
                                (g = b),
                                (e = a.node.getAttribute("data-aos-once")),
                                f > a.position ? a.node.classList.add("aos-animate") : void 0 === e || ("false" !== e && (g || "true" === e)) || a.node.classList.remove("aos-animate");
                        });
                    });
            },
            function (d, b, c) {
                "use strict";
                Object.defineProperty(b, "__esModule", { value: !0 });
                var a,
                    e = (a = c(12)) && a.__esModule ? a : { default: a };
                b.default = function (a, b) {
                    return (
                        a.forEach(function (a, c) {
                            a.node.classList.add("aos-init"), (a.position = (0, e.default)(a.node, b.offset));
                        }),
                        a
                    );
                };
            },
            function (d, b, c) {
                "use strict";
                Object.defineProperty(b, "__esModule", { value: !0 });
                var a,
                    e = (a = c(13)) && a.__esModule ? a : { default: a };
                b.default = function (a, g) {
                    var b = 0,
                        f = 0,
                        d = window.innerHeight,
                        c = { offset: a.getAttribute("data-aos-offset"), anchor: a.getAttribute("data-aos-anchor"), anchorPlacement: a.getAttribute("data-aos-anchor-placement") };
                    switch ((c.offset && !isNaN(c.offset) && (f = parseInt(c.offset)), c.anchor && document.querySelectorAll(c.anchor) && (a = document.querySelectorAll(c.anchor)[0]), (b = (0, e.default)(a).top), c.anchorPlacement)) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            b += a.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            b += a.offsetHeight;
                            break;
                        case "top-center":
                            b += d / 2;
                            break;
                        case "bottom-center":
                            b += d / 2 + a.offsetHeight;
                            break;
                        case "center-center":
                            b += d / 2 + a.offsetHeight / 2;
                            break;
                        case "top-top":
                            b += d;
                            break;
                        case "bottom-top":
                            b += a.offsetHeight + d;
                            break;
                        case "center-top":
                            b += a.offsetHeight / 2 + d;
                    }
                    return c.anchorPlacement || c.offset || isNaN(g) || (f = g), b + f;
                };
            },
            function (b, a) {
                "use strict";
                Object.defineProperty(a, "__esModule", { value: !0 }),
                    (a.default = function (a) {
                        for (var b = 0, c = 0; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop); )
                            (b += a.offsetLeft - ("BODY" != a.tagName ? a.scrollLeft : 0)), (c += a.offsetTop - ("BODY" != a.tagName ? a.scrollTop : 0)), (a = a.offsetParent);
                        return { top: c, left: b };
                    });
            },
            function (b, a) {
                "use strict";
                Object.defineProperty(a, "__esModule", { value: !0 }),
                    (a.default = function (a) {
                        return (
                            (a = a || document.querySelectorAll("[data-aos]")),
                            Array.prototype.map.call(a, function (a) {
                                return { node: a };
                            })
                        );
                    });
            },
        ]);
    }),
    (function (a) {
        a.fn.videoPopup = function (b) {
            var c = { embedLink: "" },
                d = a.extend({ autoplay: !1, showControls: !0, controlsColor: null, loopVideo: !1, showVideoInformations: !0, width: null, customOptions: {} }, b),
                e = {
                    youtube: {
                        regex: /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
                        test: function (b, c) {
                            var a = b.match(c);
                            return !(!a || 11 != a[7].length) && a[7];
                        },
                        mount: function (c) {
                            var b = { autoplay: d.autoplay, color: d.controlsColor, loop: d.loopVideo, controls: d.showControls, showinfo: d.showVideoInformations };
                            return Object.assign(b, d.customOptions), "https://www.youtube.com/embed/" + c + "/?" + a.param(b);
                        },
                    },
                    vimeo: {
                        regex: /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/,
                        test: function (b, c) {
                            var a = b.match(c);
                            return !(!a || !a[5].length) && a[5];
                        },
                        mount: function (c) {
                            var b = { autoplay: d.autoplay, color: d.controlsColor, loop: d.loopVideo, controls: d.showControls, title: d.showVideoInformations };
                            return Object.assign(b, d.customOptions), "https://player.vimeo.com/video/" + c + "/?" + a.param(b);
                        },
                    },
                };
            return (
                a(this).css("cursor", "pointer"),
                a(this).on("click", function (f) {
                    var b, g;
                    f.preventDefault(),
                        (g = a(this).attr("video-url")),
                        a.each(e, function (d, a) {
                            var b = a.test(g, a.regex);
                            if (b) return (c.embedLink = a.mount(b)), this;
                        }),
                        a("body").append(
                            ((b = '<iframe src="' + c.embedLink + '" allowfullscreen frameborder="0" width="' + d.width + '"></iframe>'),
                            c.embedLink || (b = '<div class="videopopupjs__block--notfound">Video not found</div>'),
                            '<div class="videopopupjs videopopupjs--animation"><div class="videopopupjs__content"><span class="videopopupjs__close"></span>' + b + "</div></div>")
                        ),
                        a(".videopopupjs__content").css("max-width", 700),
                        d.width && a(".videopopupjs__content").css("max-width", d.width),
                        a(".videopopupjs").hasClass("videopopupjs--animation") &&
                            setTimeout(function () {
                                a(".videopopupjs").removeClass("videopopupjs--animation");
                            }, 200),
                        a(".videopopupjs, .videopopupjs__close").click(function () {
                            a(".videopopupjs")
                                .addClass("videopopupjs--hide")
                                .delay(515)
                                .queue(function () {
                                    a(this).remove();
                                });
                        });
                }),
                a(document).keyup(function (b) {
                    27 == b.keyCode && a(".videopopupjs__close").click();
                }),
                this
            );
        };
    })(jQuery),
    $(".rock_india_gif").slick({ autoplay: !0, autoplaySpeed: 400, arrows: !1, dots: !1, infinite: !0, fade: !0, speed: 400, slidesToShow: 1, adaptiveHeight: !0 }),
    $(".rock_india_gif-scnds").slick({ autoplay: !0, autoplaySpeed: 400, arrows: !1, dots: !1, infinite: !0, fade: !0, speed: 400, slidesToShow: 1, adaptiveHeight: !0 }),
    $(window).scroll(function (a) {
        $(window).scrollTop() >= 1e3 ? $("#btn-back-to-top").css("display", "flex") : $("#btn-back-to-top").css("display", "none"),
            $(window).scrollTop() >= 60 ? $(".fixed_nav.fixed_nav_mobile").css("display", "block") : $(".fixed_nav.fixed_nav_mobile").css("display", "none");
    }),
    $("button.press-list__logo-item.tap-area").hover(function () {
        $(this).trigger("click");
    }),
    $(".product-item").each(function () {
        $(this).find(".meta-label-new-arrival").length && $(this).find(".lowest-price ").remove();
    }),
    $(document).ready(function () {
        function c(a, h) {
            let b = (a = a[h]).getAttribute("data-price");
            b = parseInt(b);
            let i = a.parentElement.className;
            if (Shopify.enable_namagoo && i.includes("custom-product-card_namogoo") && localStorage.getItem("Namogoo")) {
                let j = (b / 100) * JSON.parse(localStorage.getItem("Namogoo")).discountValue,
                    c = a.nextElementSibling.getAttribute("data-compare-price"),
                    d = c - (b -= j),
                    e = Math.round((100 * d) / c),
                    f = a.offsetParent.children[0],
                    g = a.parentElement.nextElementSibling;
                f.className.includes("custom-saved-price-lable") && (f.innerHTML = "You Save " + e + "%"),
                    g.className.includes("custom-save-price") && (g.innerHTML = "You Save: " + Shopify.formatMoney(d, Shopify.money_format) + " (" + e + "%) "),
                    a.className.includes("product-card-price-varies") ? (a.innerHTML = "From " + Shopify.formatMoney(b, Shopify.money_format)) : (a.innerHTML = Shopify.formatMoney(b, Shopify.money_format));
            }
        }
        if (Shopify.enable_flash_sale || Shopify.enable_namagoo) {
            let b = $(".product-card-price");
            for (let a = 0; a < b.length; a++) c(b, a);
        }
        $(document).on("click", ".custom-search-cta", function (a) {
            a.preventDefault();
            var b = $(this).parents("form").serialize();
            $.ajax({
                url: "/cart/add.js",
                dataType: "json",
                cache: !1,
                type: "post",
                data: b,
                success: function (a) {
                    document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", { bubbles: !0 })),
                        (document.getElementById("mini-cart").open = !0),
                        setTimeout(function () {
                            $(".header__cart-count").html($("#mini-cart input.cart--count").val());
                        }, 1500);
                },
            });
        });
        var d = new IntersectionObserver(
            function (a) {
                !0 === a[0].isIntersecting ? $("#shopify-section-announcement-bar").addClass("announcement-non-sticky") : $("#shopify-section-announcement-bar").removeClass("announcement-non-sticky");
            },
            { threshold: [1] }
        );
        null !== document.querySelector("#shopify-section-announcement-bar") && d.observe(document.querySelector("#shopify-section-announcement-bar")),
            $(".algolia-header-search-input .predictive-search__input").click(function () {
                let a = $(".shopify-section--header .container").height();
                $("#shopify-section-announcement-bar").hasClass("announcement-non-sticky") && (a += $("#shopify-section-announcement-bar").height()),
                 $(".search-popup-container").css({opacity: "1", transform: "translateY(0px) translateZ(0px)", display: "block" }),
                    setTimeout(function () {
                        $(".algolia-autocomplete .aa-dataset-products").show();
                    }, 1e3),
                    $(".algolia-trending-label").click(function () {
                      if(this.offsetParent !== null){
                        let predictiveInput = this.offsetParent.previousElementSibling.firstElementChild.querySelector('.predictive-search__input');
                        (predictiveInput.value = $(this).text()), predictiveInput.dispatchEvent(new Event("input", { bubbles: !0 }));
                      }                      
                    });
            }),
            $(".search-clear-icon").click(function () {
              let predictiveInputParent = this.offsetParent;
              var searchParent = $(this).closest('.algolia-header-custom-search').find('.search-popup-container');
              (predictiveInputParent.querySelector(".predictive-search__input").value = ""),
              predictiveInputParent.querySelector(".predictive-search__input").dispatchEvent(new Event("input", { bubbles: !0 }));
              setTimeout(function () {
                    searchParent.removeAttr("style");
                    $(".algolia-autocomplete .aa-dataset-products").hide();
                $(this).removeAttr("style");
                   }, 100)
            }),
            $(document).click(function(e) {
            if (!$(e.target).closest('.algolia-header-custom-search').length){
            $(".search-popup-container").hide();
            }
            }),
            $(".algolia-search__form, .algolia-search__form_mobile ").submit(function (a) {
                a.preventDefault();
            });
        let e = $("#shopify-section-header").height() + 60;
        $(".algolia-autocomplete").css("top", e + "px");
     
    });

window.addEventListener("load", function(){
    sessionStorage.setItem('lazyloaded_sections','false'); 
  document.addEventListener("touchmove", lazyloaded_sections, true);
  document.addEventListener("scroll", lazyloaded_sections, true);
  function lazyloaded_sections() {
    if(sessionStorage.getItem('lazyloaded_sections') == 'false'){
      $.ajax({
        url: '/pages/custom-homepage',
        type: 'GET',
        dataType: 'html',
        success: function(responseHTML){
         let content = $(responseHTML).find('#index-lazyload_sections').html();
         $('.custom-lazyloaded-content').html(content);
        }
      });
      sessionStorage.setItem('lazyloaded_sections','true');   
    }
    }
});

// Notifications Permission
let permission = Notification.permission;
if(permission === "granted") {
    showNotification();
} else if(permission === "default"){
    requestAndShowPermission();
} else {
  requestAndShowPermission();
}
function showNotification() {
    if(document.visibilityState === "visible") {
        return;
    }
    var title = "JavaScript Jeep";
    icon = "image-url"
    var body = "Message to be displayed";
    var notification = new Notification('Title', { body, icon });
    notification.onclick = () => {
      notification.close();
      window.parent.focus();
    }
}
function requestAndShowPermission() {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        clevertap.profile.push({
          "Site": {
            "Web Push": true,
            "MSG-push": true,
          }
        });
        showNotification();
        console.log('granted');
        
      }
    });
}