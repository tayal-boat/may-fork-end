/**
 * DEVELOPER DOCUMENTATION
 *
 * Include your custom JavaScript here.
 *
 * The theme Focal has been developed to be easily extensible through the usage of a lot of different JavaScript
 * events, as well as the usage of custom elements (https://developers.google.com/web/fundamentals/web-components/customelements)
 * to easily extend the theme and re-use the theme infrastructure for your own code.
 *
 * The technical documentation is summarized here.
 *
 * ------------------------------------------------------------------------------------------------------------
 * BEING NOTIFIED WHEN A VARIANT HAS CHANGED
 * ------------------------------------------------------------------------------------------------------------
 *
 * This event is fired whenever a the user has changed the variant in a selector. The target get you the form
 * that triggered this event.
 *
 * Example:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   let variant = event.detail.variant; // Gives you access to the whole variant details
 *   let form = event.target;
 * });
 *
 * ------------------------------------------------------------------------------------------------------------
 * MANUALLY CHANGE A VARIANT
 * ------------------------------------------------------------------------------------------------------------
 *
 * You may want to manually change the variant, and let the theme automatically adjust all the selectors. To do
 * that, you can get the DOM element of type "<product-variants>", and call the selectVariant method on it with
 * the variant ID.
 *
 * Example:
 *
 * const productVariantElement = document.querySelector('product-variants');
 * productVariantElement.selectVariant(12345);
 *
 * ------------------------------------------------------------------------------------------------------------
 * BEING NOTIFIED WHEN A NEW VARIANT IS ADDED TO THE CART
 * ------------------------------------------------------------------------------------------------------------
 *
 * This event is fired whenever a variant is added to the cart through a form selector (product page, quick
 * view...). This event DOES NOT include any change done through the cart on an existing variant. For that,
 * please refer to the "cart:updated" event.
 *
 * Example:
 *
 * document.addEventListener('variant:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 * });
 *
 * ------------------------------------------------------------------------------------------------------------
 * BEING NOTIFIED WHEN THE CART CONTENT HAS CHANGED
 * ------------------------------------------------------------------------------------------------------------
 *
 * This event is fired whenever the cart content has changed (if the quantity of a variant has changed, if a variant
 * has been removed, if the note has changed...). This event will also be emitted when a new variant has been
 * added (so you will receive both "variant:added" and "cart:updated"). Contrary to the variant:added event,
 * this event will give you the complete details of the cart.
 *
 * Example:
 *
 * document.addEventListener('cart:updated', function(event) {
 *   var cart = event.detail.cart; // Get the updated content of the cart
 * });
 *
 * ------------------------------------------------------------------------------------------------------------
 * REFRESH THE CART/MINI-CART
 * ------------------------------------------------------------------------------------------------------------
 *
 * If you are adding variants to the cart and would like to instruct the theme to re-render the cart, you cart
 * send the cart:refresh event, as shown below:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 *
 * ------------------------------------------------------------------------------------------------------------
 * USAGE OF CUSTOM ELEMENTS
 * ------------------------------------------------------------------------------------------------------------
 *
 * Our theme makes extensive use of HTML custom elements. Custom elements are an awesome way to extend HTML
 * by creating new elements that carry their own JavaScript for adding new behavior. The theme uses a large
 * number of custom elements, but the two most useful are drawer and popover. Each of those components add
 * a "open" attribute that you can toggle on and off. For instance, let's say you would like to open the cart
 * drawer, whose id is "mini-cart", you simply need to retrieve it and set its "open" attribute to true (or
 * false to close it):
 *
 * document.getElementById('mini-cart').open = true;
 *
 * Thanks to the power of custom elements, the theme will take care automagically of trapping focus, maintaining
 * proper accessibility attributes...
 *
 * If you would like to create your own drawer, you can re-use the <drawer-content> content. Here is a simple
 * example:
 *
 * // Make sure you add "aria-controls", "aria-expanded" and "is" HTML attributes to your button:
 * <button type="button" is="toggle-button" aria-controls="id-of-drawer" aria-expanded="false">Open drawer</button>
 *
 * <drawer-content id="id-of-drawer">
 *   Your content
 * </drawer-content>
 *
 * The nice thing with custom elements is that you do not actually need to instantiate JavaScript yourself: this
 * is done automatically as soon as the element is inserted to the DOM.
 *
 * ------------------------------------------------------------------------------------------------------------
 * THEME DEPENDENCIES
 * ------------------------------------------------------------------------------------------------------------
 *
 * While the theme tries to keep outside dependencies as small as possible, the theme still uses third-party code
 * to power some of its features. Here is the list of all dependencies:
 *
 * "vendor.js":
 *
 * The vendor.js contains required dependencies. This file is loaded in parallel of the theme file.
 *
 * - custom-elements polyfill (used for built-in elements on Safari - v1.0.0): https://github.com/ungap/custom-elements
 * - web-animations-polyfill (used for polyfilling WebAnimations on Safari 12, this polyfill will be removed in 1 year - v2.3.2): https://github.com/web-animations/web-animations-js
 * - instant-page (v5.1.0): https://github.com/instantpage/instant.page
 * - tocca (v2.0.9); https://github.com/GianlucaGuarini/Tocca.js/
 * - seamless-scroll-polyfill (v2.0.0): https://github.com/magic-akari/seamless-scroll-polyfill
 *
 * "flickity.js": v2.2.0 (with the "fade" package). Flickity is only loaded on demand if there is a product image
 * carousel on the page. Otherwise it is not loaded.
 *
 * "photoswipe": v4.1.3. PhotoSwipe is only loaded on demand to power the zoom feature on product page. If the zoom
 * feature is disabled, then this script is never loaded.
 */

/*
 * ------------------------------------------------------------------------------------------------------------
 * CLEVERTAP EVENTS
 * ------------------------------------------------------------------------------------------------------------
 *
 */

// Homepage Events
var userSource = "";
if (navigator.userAgent.includes("Mobile")) userSource = "Mobile";
else if (navigator.userAgent.includes("iPad")) userSource = "Tablet";
else userSource = "Desktop";
$(".featured-collections").on("click", function () {
  const sectionTitle = $(this)
    .siblings(".section__header")
    .find('.tabs-nav__item[aria-expanded="true"]')
    .text();
  clevertap.event.push("Homepage Cards section clicked", {
    userSource: userSource,
    "secttion Title": sectionTitle,
  });
});
$(".product-item__quick-form").on("click", function () {
  let prodTitle = $(this)
    .parents(".product-item__image-wrapper")
    .siblings(".product-item__info")
    .find(".product-item-meta__title")
    .text();
  let prodPrice = $(this)
    .parents(".product-item__image-wrapper")
    .siblings(".product-item__info")
    .find(".price--highlight")
    .text()
    .split("price")[1];
  clevertap.event.push("Quick Buy Clicked", {
    "Product Title": prodTitle,
    Price: prodPrice,
    userSource: userSource,
  });
});
$(".gokwik-checkout").click(function () {
  clevertap.event.push("GoKwik Button Clicked");
});
$("#mini-cart-form").submit(function () {
  var cart_total_price = $(".cart-total").val();
  var product_title_concat = "";
  var datalayer_items = [];

  $("#mini-cart .line-item").each(function (i, obj) {
    var product_title = $(this).find(".product-item-meta__title").text();
    var product_id = $(this)
      .find(".product-item-meta__title")
      .attr("data-product_id");
    var product_price = $(this)
      .find(".price--highlight")
      .text()
      .split("price")[1];
    var product_category = $(this)
      .find(".product-item-meta__title")
      .attr("data-product_type");
    var quantity = $(this).find(".quantity-selector__input").val();
    if (i == 0) {
      product_title_concat = product_title;
    } else {
      product_title_concat = product_title_concat + "," + product_title;
    }
    var item = {
      item_name: product_title,
      item_id: product_id,
      price: product_price,
      item_category: product_category,
      quantity: quantity,
    };
    datalayer_items.push(item);
  });
  clevertap.event.push("Checkout Button Clicked", {
    Amount: cart_total_price,
    "Product Name": product_title_concat,
  });
  dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
  dataLayer.push({
    event: "begin_checkout",
    ecommerce: {
      items: datalayer_items,
    },
  });
});

$(".footer__item-content .linklist__item").each(function () {
  $(this).on("click", function () {
    let footer_item = $(this).text().trim();
    clevertap.event.push("Footer Menu Item Clicked", {
      Item: footer_item,
      Source: "Footer",
    });
  });
});

$(".header__inline-navigation .header__linklist-item").each(function () {
  $(this).on("click", function () {
    let header_item = $(this).text().trim();
    clevertap.event.push("Header Menu Item Clicked", {
      Item: header_item,
      Source: "Header Desktop",
    });
  });
});
$(".header__inline-navigation").click(function () {
  clevertap.event.push("Hamburger Menu Clicked");
});

$('a[aria-controls="mini-cart"]').click(function () {
  clevertap.event.push("Slider Cart Opened", {
    Source: "Header",
  });
});

/*
 * ------------------------------------------------------------------------------------------------------------
 * FOOTER AND HEADER JS
 * ------------------------------------------------------------------------------------------------------------
 *
 */
if (window.matchMedia("(max-width: 767px)").matches) {
  $(".footer__item-title").append(`
	<span class="expanded toggle">+</span>
	<span class="collapsed visually-hidden toggle">-</span>
  `);
  $(".footer__item--links").click(function () {
    $(this).find(".footer__item-content").slideToggle();
    $(this).find("span.toggle").toggleClass("visually-hidden");
  });
}
$(".myDropdown .toggle-link").click(function () {
  $(".myDropdown .dropdown-menu").removeClass("visually-hidden");
});
$(".myDropdown .close-popup").click(function () {
  $(".myDropdown .dropdown-menu").addClass("visually-hidden");
});
$(document).click(function (e) {
  e.stopPropagation();
  var container = $(".myDropdown");
  if (container.has(e.target).length === 0) {
    $(".dropdown-menu").addClass("visually-hidden");
  }
});
$(".mobile-nav  .mobile-nav__item").each(function () {
  $(this).on("click", function () {
    let header_mob_item = $(this).text().trim();
    clevertap.event.push("Header Menu Item Clicked", {
      Item: header_mob_item,
      Source: "Header Mobile",
    });
  });
});

/*
 * ------------------------------------------------------------------------------------------------------------
 * QUICK VIEW ATC CT EVENT
 * ------------------------------------------------------------------------------------------------------------
 *
 */

function quickATC() {
  let _prodTitle = $(".quick-buy-product__info")
    .find(".product-item-meta__title")
    .text();
  let _prodPrice = $(".quick-buy-product__info")
    .find(".price--highlight")
    .text()
    .split("price")[1];
  var _variantTitle = $(".color-swatch__radio:checked").val();
  clevertap.event.push("Added to Cart", {
    "Product Name": _prodTitle + " - " + _variantTitle,
    Amount: _prodPrice,
    Quantity: 1,
    source: "Quick View Drawer",
    userSource: userSource,
  });
  clevertap.profile.push({
    Site: {
      "A2C Product Name": _prodTitle + " - " + _variantTitle,
      "A2C Amount": _prodPrice,
      "A2C Quantity": 1,
    },
  });
  setTimeout(function () {
    $(".drawer--quick-buy").attr("open", false);
    $(".header__cart").attr("aria-expanded", true);
  }, 1200);
}

/*
 * ------------------------------------------------------------------------------------------------------------
 * UPDATE CART URL ON CHECKOUT
 * ------------------------------------------------------------------------------------------------------------
 *
 */

let currentURL = location.href;
let cartStr = "/cart";
let cartHashStr = "/#cart";
if (currentURL.indexOf(cartStr) != -1) {
  location.href = "/#cart";
}
if (currentURL.indexOf(cartHashStr) != -1) {
  $(".header__cart").attr("aria-expanded", true);
}

/*
 * ------------------------------------------------------------------------------------------------------------
 * CART VALUE VALIDATION
 * ------------------------------------------------------------------------------------------------------------
 *
 */

// setInterval(function () {
//   var cartVal = parseInt($('.cart-total-text').text().split('.0')[0].split('Rs.')[1].replace(',', ''));
//   $('.line-item').each(function() {
//     let currQty = $(this).find('.quantity-selector__input').val();
//      if(currQty > 7 || cartVal > 47000) {
//       $('.mini-cart__drawer-footer .checkout-button, .mini-cart__drawer-footer .gokwik-checkout').hide()
//       $('.mini-cart__drawer-footer .cart-val-error').html(`Your cart value should be less than <strong>Rs.47000/-</strong> and must not contain more than <strong>7 units!</strong> Modify your cart to proceed.`).show();
// //       $('#mini-cart .drawer__footer--bordered').css('pointer-events', 'none');
//      }
//      else {
//       $('.mini-cart__drawer-footer .checkout-button, .mini-cart__drawer-footer .gokwik-checkout').show()
//       $('.mini-cart__drawer-footer .cart-val-error').hide();
// //       $('#mini-cart .drawer__footer--bordered').css('pointer-events', 'default');
//      }
//    })
// }, 1000 )

/*
 * ------------------------------------------------------------------------------------------------------------
 * AOS.js
 * ------------------------------------------------------------------------------------------------------------
 *
 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.AOS = t())
    : (e.AOS = t());
})(this, function () {
  return (function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = (n[o] = { exports: {}, id: o, loaded: !1 });
      return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
  })([
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        f = o(c),
        s = n(8),
        d = o(s),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = document.all && !window.atob,
        j = {
          offset: 120,
          delay: 0,
          easing: "ease",
          duration: 400,
          disable: !1,
          once: !1,
          startEvent: "DOMContentLoaded",
          throttleDelay: 99,
          debounceDelay: 50,
          disableMutationObserver: !1,
        },
        O = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if ((e && (k = !0), k))
            return (w = (0, y.default)(w, j)), (0, b.default)(w, j.once), w;
        },
        _ = function () {
          (w = (0, h.default)()), O();
        },
        S = function () {
          w.forEach(function (e, t) {
            e.node.removeAttribute("data-aos"),
              e.node.removeAttribute("data-aos-easing"),
              e.node.removeAttribute("data-aos-duration"),
              e.node.removeAttribute("data-aos-delay");
          });
        },
        z = function (e) {
          return (
            e === !0 ||
            ("mobile" === e && p.default.mobile()) ||
            ("phone" === e && p.default.phone()) ||
            ("tablet" === e && p.default.tablet()) ||
            ("function" == typeof e && e() === !0)
          );
        },
        A = function (e) {
          return (
            (j = i(j, e)),
            (w = (0, h.default)()),
            z(j.disable) || x
              ? S()
              : (document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", j.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", j.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", j.delay),
                "DOMContentLoaded" === j.startEvent &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? O(!0)
                  : "load" === j.startEvent
                  ? window.addEventListener(j.startEvent, function () {
                      O(!0);
                    })
                  : document.addEventListener(j.startEvent, function () {
                      O(!0);
                    }),
                window.addEventListener(
                  "resize",
                  (0, f.default)(O, j.debounceDelay, !0)
                ),
                window.addEventListener(
                  "orientationchange",
                  (0, f.default)(O, j.debounceDelay, !0)
                ),
                window.addEventListener(
                  "scroll",
                  (0, u.default)(function () {
                    (0, b.default)(w, j.once);
                  }, j.throttleDelay)
                ),
                j.disableMutationObserver || (0, d.default)("[data-aos]", _),
                w)
          );
        };
      e.exports = { init: A, refresh: O, refreshHard: _ };
    },
    function (e, t) {},
    ,
    ,
    ,
    ,
    function (e, t) {
      (function (t) {
        "use strict";
        function n(e, t, n) {
          function o(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (k = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (k = e), (h = setTimeout(s, t)), _ ? o(e) : g;
          }
          function a(e) {
            var n = e - w,
              o = e - k,
              i = t - n;
            return S ? j(i, y - o) : i;
          }
          function c(e) {
            var n = e - w,
              o = e - k;
            return void 0 === w || n >= t || n < 0 || (S && o >= y);
          }
          function s() {
            var e = O();
            return c(e) ? d(e) : void (h = setTimeout(s, a(e)));
          }
          function d(e) {
            return (h = void 0), z && b ? o(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (k = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(O());
          }
          function m() {
            var e = O(),
              n = c(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (S) return (h = setTimeout(s, t)), o(w);
            }
            return void 0 === h && (h = setTimeout(s, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            _ = !1,
            S = !1,
            z = !0;
          if ("function" != typeof e) throw new TypeError(f);
          return (
            (t = u(t) || 0),
            i(n) &&
              ((_ = !!n.leading),
              (S = "maxWait" in n),
              (y = S ? x(u(n.maxWait) || 0, t) : y),
              (z = "trailing" in n ? !!n.trailing : z)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e, t, o) {
          var r = !0,
            a = !0;
          if ("function" != typeof e) throw new TypeError(f);
          return (
            i(o) &&
              ((r = "leading" in o ? !!o.leading : r),
              (a = "trailing" in o ? !!o.trailing : a)),
            n(e, t, { leading: r, maxWait: t, trailing: a })
          );
        }
        function i(e) {
          var t = "undefined" == typeof e ? "undefined" : c(e);
          return !!e && ("object" == t || "function" == t);
        }
        function r(e) {
          return (
            !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
          );
        }
        function a(e) {
          return (
            "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) ||
            (r(e) && k.call(e) == d)
          );
        }
        function u(e) {
          if ("number" == typeof e) return e;
          if (a(e)) return s;
          if (i(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = i(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(l, "");
          var n = m.test(e);
          return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e;
        }
        var c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          f = "Expected a function",
          s = NaN,
          d = "[object Symbol]",
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y =
            "object" == ("undefined" == typeof t ? "undefined" : c(t)) &&
            t &&
            t.Object === Object &&
            t,
          g =
            "object" == ("undefined" == typeof self ? "undefined" : c(self)) &&
            self &&
            self.Object === Object &&
            self,
          h = y || g || Function("return this")(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function () {
            return h.Date.now();
          };
        e.exports = o;
      }.call(
        t,
        (function () {
          return this;
        })()
      ));
    },
    function (e, t) {
      (function (t) {
        "use strict";
        function n(e, t, n) {
          function i(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (O = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (O = e), (h = setTimeout(s, t)), _ ? i(e) : g;
          }
          function u(e) {
            var n = e - w,
              o = e - O,
              i = t - n;
            return S ? x(i, y - o) : i;
          }
          function f(e) {
            var n = e - w,
              o = e - O;
            return void 0 === w || n >= t || n < 0 || (S && o >= y);
          }
          function s() {
            var e = j();
            return f(e) ? d(e) : void (h = setTimeout(s, u(e)));
          }
          function d(e) {
            return (h = void 0), z && b ? i(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (O = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(j());
          }
          function m() {
            var e = j(),
              n = f(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (S) return (h = setTimeout(s, t)), i(w);
            }
            return void 0 === h && (h = setTimeout(s, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            _ = !1,
            S = !1,
            z = !0;
          if ("function" != typeof e) throw new TypeError(c);
          return (
            (t = a(t) || 0),
            o(n) &&
              ((_ = !!n.leading),
              (S = "maxWait" in n),
              (y = S ? k(a(n.maxWait) || 0, t) : y),
              (z = "trailing" in n ? !!n.trailing : z)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e) {
          var t = "undefined" == typeof e ? "undefined" : u(e);
          return !!e && ("object" == t || "function" == t);
        }
        function i(e) {
          return (
            !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
          );
        }
        function r(e) {
          return (
            "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) ||
            (i(e) && w.call(e) == s)
          );
        }
        function a(e) {
          if ("number" == typeof e) return e;
          if (r(e)) return f;
          if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(d, "");
          var n = p.test(e);
          return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e;
        }
        var u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          c = "Expected a function",
          f = NaN,
          s = "[object Symbol]",
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v =
            "object" == ("undefined" == typeof t ? "undefined" : u(t)) &&
            t &&
            t.Object === Object &&
            t,
          y =
            "object" == ("undefined" == typeof self ? "undefined" : u(self)) &&
            self &&
            self.Object === Object &&
            self,
          g = v || y || Function("return this")(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function () {
            return g.Date.now();
          };
        e.exports = n;
      }.call(
        t,
        (function () {
          return this;
        })()
      ));
    },
    function (e, t) {
      "use strict";
      function n(e, t) {
        var n = new r(o);
        (a = t),
          n.observe(i.documentElement, {
            childList: !0,
            subtree: !0,
            removedNodes: !0,
          });
      }
      function o(e) {
        e &&
          e.forEach(function (e) {
            var t = Array.prototype.slice.call(e.addedNodes),
              n = Array.prototype.slice.call(e.removedNodes),
              o = t.concat(n).filter(function (e) {
                return e.hasAttribute && e.hasAttribute("data-aos");
              }).length;
            o && a();
          });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = window.document,
        r =
          window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver,
        a = function () {};
      t.default = n;
    },
    function (e, t) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        r =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        f = (function () {
          function e() {
            n(this, e);
          }
          return (
            i(e, [
              {
                key: "phone",
                value: function () {
                  var e = o();
                  return !(!r.test(e) && !a.test(e.substr(0, 4)));
                },
              },
              {
                key: "mobile",
                value: function () {
                  var e = o();
                  return !(!u.test(e) && !c.test(e.substr(0, 4)));
                },
              },
              {
                key: "tablet",
                value: function () {
                  return this.mobile() && !this.phone();
                },
              },
            ]),
            e
          );
        })();
      t.default = new f();
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e, t, n) {
          var o = e.node.getAttribute("data-aos-once");
          t > e.position
            ? e.node.classList.add("aos-animate")
            : "undefined" != typeof o &&
              ("false" === o || (!n && "true" !== o)) &&
              e.node.classList.remove("aos-animate");
        },
        o = function (e, t) {
          var o = window.pageYOffset,
            i = window.innerHeight;
          e.forEach(function (e, r) {
            n(e, i + o, t);
          });
        };
      t.default = o;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(12),
        r = o(i),
        a = function (e, t) {
          return (
            e.forEach(function (e, n) {
              e.node.classList.add("aos-init"),
                (e.position = (0, r.default)(e.node, t.offset));
            }),
            e
          );
        };
      t.default = a;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(13),
        r = o(i),
        a = function (e, t) {
          var n = 0,
            o = 0,
            i = window.innerHeight,
            a = {
              offset: e.getAttribute("data-aos-offset"),
              anchor: e.getAttribute("data-aos-anchor"),
              anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
            };
          switch (
            (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)),
            a.anchor &&
              document.querySelectorAll(a.anchor) &&
              (e = document.querySelectorAll(a.anchor)[0]),
            (n = (0, r.default)(e).top),
            a.anchorPlacement)
          ) {
            case "top-bottom":
              break;
            case "center-bottom":
              n += e.offsetHeight / 2;
              break;
            case "bottom-bottom":
              n += e.offsetHeight;
              break;
            case "top-center":
              n += i / 2;
              break;
            case "bottom-center":
              n += i / 2 + e.offsetHeight;
              break;
            case "center-center":
              n += i / 2 + e.offsetHeight / 2;
              break;
            case "top-top":
              n += i;
              break;
            case "bottom-top":
              n += e.offsetHeight + i;
              break;
            case "center-top":
              n += e.offsetHeight / 2 + i;
          }
          return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
        };
      t.default = a;
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
        for (
          var t = 0, n = 0;
          e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

        )
          (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
            (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
            (e = e.offsetParent);
        return { top: n, left: t };
      };
      t.default = n;
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
        return (
          (e = e || document.querySelectorAll("[data-aos]")),
          Array.prototype.map.call(e, function (e) {
            return { node: e };
          })
        );
      };
      t.default = n;
    },
  ]);
});

(function ($) {
  $.fn.videoPopup = function (options) {
    var videoPopup = {
      embedLink: "",
    };

    var settings = $.extend(
      {
        autoplay: false,
        showControls: true,
        controlsColor: null,
        loopVideo: false,
        showVideoInformations: true,
        width: null,
        customOptions: {},
      },
      options
    );

    var parsers = {
      youtube: {
        regex:
          /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
        test: function (videoUrl, regex) {
          var match = videoUrl.match(regex);
          return match && match[7].length == 11 ? match[7] : false;
        },
        mount: function (videoCode) {
          var youtubeOptions = {
            autoplay: settings.autoplay,
            color: settings.controlsColor,
            loop: settings.loopVideo,
            controls: settings.showControls,
            showinfo: settings.showVideoInformations,
          };

          Object.assign(youtubeOptions, settings.customOptions);

          return (
            "https://www.youtube.com/embed/" +
            videoCode +
            "/?" +
            $.param(youtubeOptions)
          );
        },
      },
      vimeo: {
        regex:
          /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/,
        test: function (videoUrl, regex) {
          var match = videoUrl.match(regex);
          return match && match[5].length ? match[5] : false;
        },
        mount: function (videoCode) {
          var vimeoOptions = {
            autoplay: settings.autoplay,
            color: settings.controlsColor,
            loop: settings.loopVideo,
            controls: settings.showControls,
            title: settings.showVideoInformations,
          };

          Object.assign(vimeoOptions, settings.customOptions);

          return (
            "https://player.vimeo.com/video/" +
            videoCode +
            "/?" +
            $.param(vimeoOptions)
          );
        },
      },
    };

    function mountEmbedLink(videoUrl) {
      $.each(parsers, function (index, parser) {
        var videoCode = parser.test(videoUrl, parser.regex);

        if (videoCode) {
          videoPopup.embedLink = parser.mount(videoCode);
          return this;
        }
      });
    }

    function mountIframe() {
      var iframeElement =
        '<iframe src="' +
        videoPopup.embedLink +
        '" allowfullscreen frameborder="0" width="' +
        settings.width +
        '"></iframe>';

      if (!videoPopup.embedLink) {
        iframeElement =
          '<div class="videopopupjs__block--notfound">Video not found</div>';
      }

      return (
        '<div class="videopopupjs videopopupjs--animation">' +
        '<div class="videopopupjs__content">' +
        '<span class="videopopupjs__close"></span>' +
        iframeElement +
        "</div>" +
        "</div>"
      );
    }

    $(this).css("cursor", "pointer");
    $(this).on("click", function (event) {
      event.preventDefault();

      var videoUrl = $(this).attr("video-url");
      var videoIframe = mountEmbedLink(videoUrl);

      $("body").append(mountIframe());

      $(".videopopupjs__content").css("max-width", 700);
      if (settings.width) {
        $(".videopopupjs__content").css("max-width", settings.width);
      }

      if ($(".videopopupjs").hasClass("videopopupjs--animation")) {
        setTimeout(function () {
          $(".videopopupjs").removeClass("videopopupjs--animation");
        }, 200);
      }

      $(".videopopupjs, .videopopupjs__close").click(function () {
        $(".videopopupjs")
          .addClass("videopopupjs--hide")
          .delay(515)
          .queue(function () {
            $(this).remove();
          });
      });
    });

    $(document).keyup(function (event) {
      if (event.keyCode == 27) {
        $(".videopopupjs__close").click();
      }
    });

    return this;
  };
})(jQuery);


   
  $('.rock_india_gif').slick({
    autoplay: true,
    autoplaySpeed: 400,
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    speed: 400,
    slidesToShow: 1,
    adaptiveHeight: true
});
    
    $('.rock_india_gif-scnds').slick({
    autoplay: true,
    autoplaySpeed: 400,
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    speed: 400,
    slidesToShow: 1,
    adaptiveHeight: true
});

$(window).scroll(function (event) {
//   if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
//     var scroll = $(window).scrollTop();
//     if(scroll >= 40) {
//       $('.header ').addClass('sticky-header')
//        $('#mobile-facet-toolbar ').addClass('sticky-toolbar')
//     }
//   	else {
//       $('.header ').removeClass('sticky-header')
//       $('#mobile-facet-toolbar ').removeClass('sticky-toolbar')
//     }
//   }
  var scrollTop = $(window).scrollTop();
  if(scrollTop >= 1000) {
      $('#btn-back-to-top').css('display', 'flex');
  }
  else {
      $('#btn-back-to-top').css('display', 'none');
  }
  
    var scrollNav = $(window).scrollTop();
  if(scrollNav >= 60) {
      $('.fixed_nav.fixed_nav_mobile').css('display', 'block');
  }
  else {
      $('.fixed_nav.fixed_nav_mobile').css('display', 'none');
  }
});
$('button.press-list__logo-item.tap-area').hover(function(){  $(this).trigger('click');  }); 
$('.product-item').each(function() {
  if($(this).find('.meta-label-new-arrival').length) {
    $(this).find('.lowest-price ').remove();
  }
})
$(document).ready(function() {

function DisCalculation(selectedVarient, i){
selectedVarient = selectedVarient[i];

let savePrice = selectedVarient.getAttribute('data-price');
savePrice = parseInt(savePrice);
let product_flas_sale = selectedVarient.parentElement.className;
if(Shopify.enable_namagoo && product_flas_sale.includes("custom-product-card_namogoo")){
if(localStorage.getItem('Namogoo')) { 
  let NamogooDiscount = JSON.parse(localStorage.getItem('Namogoo'));
  let discountValue = NamogooDiscount.discountValue;
  let savePriceDis = savePrice / 100 * discountValue;
  let comparePrice = selectedVarient.nextElementSibling.getAttribute('data-compare-price');
  savePrice = savePrice - savePriceDis;
  let custom_saved_price = comparePrice - savePrice;
  let custom_saved_dis = Math.round(custom_saved_price * 100 / comparePrice);
  let custom_saved_price_lable = selectedVarient.offsetParent.children[0];
  let custom_save_price = selectedVarient.parentElement.nextElementSibling;
  if(custom_saved_price_lable.className.includes("custom-saved-price-lable")){
    custom_saved_price_lable.innerHTML = 'You Save ' + custom_saved_dis + '%';
  }
  if(custom_save_price.className.includes("custom-save-price")){
    custom_save_price.innerHTML = 'You Save: '+Shopify.formatMoney(custom_saved_price,Shopify.money_format)+' ('+custom_saved_dis+'%) '
  }
  if(selectedVarient.className.includes("product-card-price-varies")){
    selectedVarient.innerHTML = 'From ' + Shopify.formatMoney(savePrice,Shopify.money_format);
  }else{
    selectedVarient.innerHTML = Shopify.formatMoney(savePrice,Shopify.money_format);
  }
}   
}    
}
if(Shopify.enable_flash_sale || Shopify.enable_namagoo){
let selectedVarient = $('.product-card-price');
for (let i = 0; i < selectedVarient.length; i++) {
DisCalculation(selectedVarient, i);
}
};

$(document).on('click', '.custom-search-cta', function(event) {
  event.preventDefault();
  var formData = $(this).parents('form').serialize();
  $.ajax({
  url: '/cart/add.js',
  dataType: 'json',
  cache: false,
  type: 'post',
  data: formData,
  success: function (data) {
    document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
      bubbles: true
    }));
    document.getElementById('mini-cart').open = true;
    setTimeout(function(){
    $('.header__cart-count').html($('#mini-cart input.cart--count').val())
    },1500);
  }
  });
});
var observer = new IntersectionObserver(function(entries) {
  if(entries[0].isIntersecting === true){
    $('#shopify-section-announcement-bar').addClass('announcement-non-sticky');
  }else{
    $('#shopify-section-announcement-bar').removeClass('announcement-non-sticky');
  }
}, { threshold: [1] });
if(document.querySelector('#shopify-section-announcement-bar') !== null){
  observer.observe(document.querySelector('#shopify-section-announcement-bar'));
}
$('.algolia-header-search-input').click(function(){
  $(this).hide();
  // $('.algolia-custom-search-popup-container').css('opacity', '1');
  let searchContainerHeight = $('.shopify-section--header .container').height();
if($('#shopify-section-announcement-bar').hasClass('announcement-non-sticky')){
  searchContainerHeight = searchContainerHeight + $('#shopify-section-announcement-bar').height();
}

  $('.search-popup-container').css({'top': searchContainerHeight - 3 +'px', 'opacity': '1', 'transform': 'translateY(0px) translateZ(0px)', 'position': 'fixed'});
  $('body').addClass('noScroll');
  document.getElementsByClassName('predictive-search__input')[0].focus();
  setTimeout(function(){
  $('.algolia-autocomplete .aa-dataset-products').show();
  },1000);
  $('.algolia-trending-label').click(function(){
    document.querySelector('.predictive-search__input').value = $(this).text();
    document.querySelector('.predictive-search__input').dispatchEvent(new Event('input', {bubbles:true}));
    });
});
$('.search-clear-icon').click(function(){
  $('.algolia-header-search-input').show();
  // $('.algolia-custom-search-popup-container').css('opacity', '0');
  $('body').removeClass('noScroll'); 
  $('.search-popup-container').removeAttr('style');  
  $('.algolia-autocomplete .aa-dataset-products').hide(); 
  document.querySelector('.predictive-search__input').value = '';
  document.querySelector('.predictive-search__input').dispatchEvent(new Event('input', {bubbles:true}));
});
$('.algolia-search__form').submit(function(e){
  e.preventDefault();
});
let algolia_top_position = ($('#shopify-section-header').height() + $('.algolia-custom-search-popup-container').height() + 60);
$('.algolia-autocomplete').css('top', algolia_top_position + 'px');
});

