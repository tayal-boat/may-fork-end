{% comment %}
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
{% endcomment %}

Shopify.enable_namagoo = {{ settings.enable_namagoo }};
Shopify.cart_item_count = function () {
  $.getJSON('/cart.js', function(cart){
    console.log(cart.item_count);
    var cartCount = cart.item_count;
    $(".header__cart-count").html(cartCount);
    $('.header__cart-count.header__cart-count--floating.bubble-count').text(cartCount);
    })
};

var userSource="";function quickATC(){let e=$(".quick-buy-product").parents('.product-item__info ').find(".product-item-meta__title").text(),t=$(".quick-buy-product").parents('.product-item__info ').find(".price--highlight").text().split("price")[1];var i=$(".color-swatch__radio:checked").val();clevertap.event.push("Added to Cart",{"Product Name":e+" - "+i,Amount:t,Quantity:1,source:"Quick View Drawer",userSource:userSource}),clevertap.profile.push({Site:{"A2C Product Name":e+" - "+i,"A2C Amount":t,"A2C Quantity":1}}),setTimeout(function(){$(".drawer--quick-buy").attr("open",!1),$(".header__cart").attr("aria-expanded",!0)},1200)}userSource=navigator.userAgent.includes("Mobile")?"Mobile":navigator.userAgent.includes("iPad")?"Tablet":"Desktop",$(".featured-collections").on("click",function(){let e=$(this).siblings(".section__header").find('.tabs-nav__item[aria-expanded="true"]').text();clevertap.event.push("Homepage Cards section clicked",{userSource:userSource,"secttion Title":e})}),$(".product-item__quick-form").on("click",function(){let e=$(this).parents(".product-item__info").find(".product-item-meta__title").text(),t=$(this).parents(".product-item__info").find(".price--highlight").text().split("price")[1];clevertap.event.push("Quick Buy Clicked",{"Product Title":e,Price:t,userSource:userSource})}),$(".gokwik-checkout").click(function(){clevertap.event.push("GoKwik Button Clicked")}),$("#mini-cart-form").submit(function(){var e=$(".cart-total").val(),t="",i=[];$("#mini-cart .line-item").each(function(e,n){var o=$(this).find(".product-item-meta__title").text(),r=$(this).find(".product-item-meta__title").attr("data-product_id"),c=$(this).find(".price--highlight").text().split("price")[1],a=$(this).find(".product-item-meta__title").attr("data-product_type"),l=$(this).find(".quantity-selector__input").val();t=0==e?o:t+","+o,i.push({item_name:o,item_id:r,price:c,item_category:a,quantity:l})}),clevertap.event.push("Checkout Button Clicked",{Amount:e,"Product Name":t}),dataLayer.push({ecommerce:null}),dataLayer.push({event:"begin_checkout",ecommerce:{items:i}})}),$(".footer__item-content .linklist__item").each(function(){$(this).on("click",function(){let e=$(this).text().trim();clevertap.event.push("Footer Menu Item Clicked",{Item:e,Source:"Footer"})})}),$(".header__inline-navigation .header__linklist-item").each(function(){$(this).on("click",function(){let e=$(this).attr('data-item-title').trim();clevertap.event.push("Header Menu Item Clicked",{Item:e,Source:"Header Desktop"})})}),$('a[aria-controls="mini-cart"]').click(function(){clevertap.event.push("Slider Cart Opened",{Source:"Header"})}),window.matchMedia("(max-width: 767px)").matches&&($(".footer__item-title").append('\n  <span class="expanded toggle">+</span>\n  <span class="collapsed visually-hidden toggle">-</span>\n  '),$(".footer__item--links").click(function(){$(this).find(".footer__item-content").slideToggle(),$(this).find("span.toggle").toggleClass("visually-hidden")})),$(".myDropdown .toggle-link").click(function(){$(".myDropdown .dropdown-menu").removeClass("visually-hidden")}),$(".myDropdown .close-popup").click(function(){$(".myDropdown .dropdown-menu").addClass("visually-hidden")}),$(document).click(function(e){e.stopPropagation(),0===$(".myDropdown").has(e.target).length&&$(".dropdown-menu").addClass("visually-hidden")}),$("collapsible-content .mobile-nav .mobile-nav__item").each(function(){$(this).on("click",function(){let e=$(this).text().trim();clevertap.event.push("Header Menu Item Clicked",{Item:e,Source:"Hamburger"})})});let currentURL=location.href,cartStr="/cart",cartHashStr="/#cart";-1!=currentURL.indexOf(cartStr)&&(location.href="/#cart"),-1!=currentURL.indexOf(cartHashStr)&&$(".header__cart").attr("aria-expanded",!0),
$("button.press-list__logo-item.tap-area").hover(function(){$(this).trigger("click")}),$(".product-item").each(function(){$(this).find(".meta-label-new-arrival").length&&$(this).find(".lowest-price ").remove()}),$(document).ready(function(){function e(e,t){let i=(e=e[t]).getAttribute("data-price");i=parseInt(i);let n=e.parentElement.className;if(Shopify.enable_namagoo&&n.includes("custom-product-card_namogoo")&&localStorage.getItem("Namogoo")){let o=i/100*JSON.parse(localStorage.getItem("Namogoo")).discountValue,r=e.nextElementSibling.getAttribute("data-compare-price"),c=r-(i-=o),a=Math.round(100*c/r),l=e.offsetParent.children[0],u=e.parentElement.nextElementSibling;l.className.includes("custom-saved-price-lable")&&(l.innerHTML="You Save "+a+"%"),u.className.includes("custom-save-price")&&(u.innerHTML="You Save: "+Shopify.formatMoney(c,Shopify.money_format)+" ("+a+"%) "),e.className.includes("product-card-price-varies")?e.innerHTML="From "+Shopify.formatMoney(i,Shopify.money_format):e.innerHTML=Shopify.formatMoney(i,Shopify.money_format)}}if(Shopify.enable_flash_sale||Shopify.enable_namagoo){let t=$(".product-card-price");for(let i=0;i<t.length;i++)e(t,i)}});
$(document).on("click", ".custom-search-cta", function(e) {
  e.preventDefault();
  var t = $(this).parents("form").serialize();
  $.ajax({
      url: "/cart/add.js",
      dataType: "json",
      cache: !1,
      type: "post",
      data: t,
      success: function(e) {
          document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", {
              bubbles: !0
          })), document.getElementById("mini-cart").open = !0, document.querySelector("body").classList.add("noScroll"), $(".search-clear-icon").css('display', 'flex'), setTimeout(function() {
              Shopify.cart_item_count();
              cart_bubble();
          }, 1500)
      }
  })
});

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
  function lazyloaded_sections() {
      "false" == sessionStorage.getItem("lazyloaded_sections") && ($.ajax({
          url: "/pages/custom-homepage",
          type: "GET",
          dataType: "html",
          success: function(e) {
              let t = $(e).find("#index-lazyload_sections").html();
              $(".custom-lazyloaded-content").html(t);
              Shopify.homepageLazyload();
          }
      }), sessionStorage.setItem("lazyloaded_sections", "true"));

  }
  sessionStorage.setItem("lazyloaded_sections", "false"), document.addEventListener("touchmove", lazyloaded_sections, !0), document.addEventListener("scroll", lazyloaded_sections, !0)
  }
});

function isIOSMobile() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent)
};

// if (!isIOSMobile()) {
//   let i = Notification.permission;

//   function e() {
//       if ("visible" !== document.visibilityState) {
//           icon = "image-url";
//           var i = new Notification("Title", {
//               body: "Message to be displayed",
//               icon
//           });
//           i.onclick = () => {
//               i.close(), window.parent.focus()
//           }
//       }
//   }

//   function t() {
//     Notification.requestPermission(function(i) {
//       "granted" === i && (clevertap.profile.push({
//         Site: {
//           "Web Push": !0,
//           "MSG-push": !0
//         }
//       }), e(), console.log("granted"))
//     })
//   }
//   "granted" === i ? e() : t()
// };

// var actualDimension = $(window).width() + $(window).height();
// $(window).on('resize', function(){
//   if($(window).width() + $(window).height() < actualDimension) {
//     $('.fixed_nav.fixed_nav_mobile').css('position','relative')
//   } else {
//     $('.fixed_nav.fixed_nav_mobile').removeAttr('style')
//   }
// });

let unitsLeft = '';
let usual_price = '';

Shopify.variantChange = function(e){

  $('.pdp-btn-price').remove();
  //let compare_price =  ( ${e.price / 100} *100 ) / ${e.compare_at_price / 100} ;

  let regular_price = e.compare_at_price / 100;
  let sale_price = e.price / 100;
  let discount_percentage;
  
  if(regular_price > sale_price) {
    discount_percentage = Math.round( (( regular_price - sale_price)  / regular_price) * 100 ) + '% Off';
  } else {
    discount_percentage = ''
  }
  $("#AddToCart.a2c .loader-button__text, .cutomized-btn .loader-button__text, #AddToCart.prebook .loader-button__text").html('');
  $("#AddToCart.a2c .loader-button__text, .cutomized-btn .loader-button__text").append(`
  <span class="atc_btn">
  <svg id="Group_211011" data-name="Group 211011" xmlns="http://www.w3.org/2000/svg" width="19.725" height="20" viewBox="0 0 19.725 23">
    <path id="Rectangle_760" data-name="Rectangle 760" d="M8.558,5.081a.8.8,0,1,0,1.6,0ZM0,5.081a.8.8,0,1,0,1.6,0ZM5.081,1.6A3.477,3.477,0,0,1,8.558,5.081h1.6A5.081,5.081,0,0,0,5.081,0Zm0-1.6A5.081,5.081,0,0,0,0,5.081H1.6A3.477,3.477,0,0,1,5.081,1.6Z" transform="translate(4.78)" fill="#fff"/>
    <path id="Rectangle_788" data-name="Rectangle 788" d="M.836,13.108l.8.1Zm18.053,0-.8.1h0ZM17.819,4.55l.8-.1h0Zm-15.913,0-.8-.1ZM6.152,1.6h7.421V0H6.152ZM17.023,4.65l1.07,8.558,1.592-.2-1.07-8.558Zm-2.38,12.466H5.082v1.6h9.561ZM1.632,13.208,2.7,4.65l-1.592-.2L.04,13.009Zm3.45,3.908a3.477,3.477,0,0,1-3.45-3.908l-1.592-.2A5.081,5.081,0,0,0,5.082,18.72Zm13.011-3.908a3.477,3.477,0,0,1-3.45,3.908v1.6a5.081,5.081,0,0,0,5.042-5.712ZM13.573,1.6a3.477,3.477,0,0,1,3.45,3.045l1.592-.2A5.081,5.081,0,0,0,13.573,0ZM6.152,0A5.081,5.081,0,0,0,1.11,4.451l1.592.2A3.477,3.477,0,0,1,6.152,1.6Z" transform="translate(0 4.28)" fill="#fff"/>
  </svg>                    
  <span class="add_to_cart_btn">{{- 'product.form.add_to_cart' | t -}}</span>
 </span>
  <span class="pdp-btn-price custom_price_wrapper">
  <span class="inclusive_text_content">Inclusive of all Taxes</span>
  <span class="mobile_atc_btn">
    <span class="mobile_atc_price">₹${e.price / 100}</span>
    <span class="saved_price">${discount_percentage}</span>
  </span>
  </span>`);
  
  $("#AddToCart.prebook .loader-button__text").append(`
  <span class="atc_btn">
  <span class="add_to_cart_btn">{{- 'product.form.pre_order' | t -}}</span>
 </span>
  <span class="pdp-btn-price custom_price_wrapper">
  <span class="inclusive_text_content">Inclusive of all Taxes</span>
  <span class="mobile_atc_btn">
    <span class="mobile_atc_price">₹${e.price / 100}</span>
    <span class="saved_price">${discount_percentage}</span>
  </span>
  </span>`);
  console.log(e);

function swatches_change(varient_swatches_input){
for (let i = 0; i < varient_swatches_input.length; i++) {
 
          if (varient_swatches_input[i].checked) {
              $.ajax({
                  url: location.pathname + "?variant=" + e.id + "&section_id=main-product",
                  type: "GET",
                  dataType: "html",
                  success: function(e) {
                      var product_media = $(e).find('product-media').html();
                      $("product-media").html(product_media);
                      setTimeout(function() {
                          var product_itemsDiv = '.product_media_section .MultiCarousel-inner';
                          var product_itemsMainDiv = ('.product_media_section .MultiCarousel');
                          var product_selector = 'MultiCarousel_product';
                          Shopify.product_slider(product_itemsDiv, product_itemsMainDiv, product_selector);
                          if ($('.MultiCarousel_loaded.MultiCarousel-inner .product__media-item').length < 2) {
                              $(product_itemsMainDiv).addClass('hide_dots');
                            } else {
                              $(product_itemsMainDiv).removeClass('hide_dots');
                            }
                          $('.product__media-image-wrapper img').click(function () {
                            $('.product__zoom-button').click();
                          });
                          $('button.product__thumbnail-item.hidden-pocket').hover(function() {
                              $(this).trigger('click');
                          });
                      }, 500);
                  }
              })

              if (JSON.parse(varient_swatches_input[i].parentElement.dataset.varient_disabled)) {
                  // image swatch selector
      $('.custom-notify-btn').show();
      $('.out_of_stock_msg').show();
      $('.pincode_checker_heading').hide();
      $('.pdp_right_section .payment_offers').hide();
      $('.product__info button#AddToCart').hide();
      $('#AddToCart, .cutomized-btn, .button.custom-prebook').addClass('hide_cTA');
      $("#gokwik-buy-now").addClass('hide_cTA');
      $('quick-buy-drawer #AddToCart').hide();
      $('quick-buy-popover #AddToCart').hide();
      $('.product-item__quick-form.quick-buy-notify-me').show();
      $('.product-item__quick-form.quick-buy-notify-me .BIS_trigger').attr('data-variant-id',e.id);
      $('.d-lg-none.current-in-cart, .desktop.current-in-cart, .offer-callout-simple, .popup_wrapper').hide();
      $('.d-lg-none.restocking, .desktop.restocking').show();
      $('.pincode_checker_container').hide();
    if($('#BIS_trigger.custom-notify-btn').length > 0){
      $('#BIS_trigger.custom-notify-btn').attr('data-variant-id',e.id);
    } 
    setTimeout(() => {
      $('.flash-sale-lable').hide()
    }, 10)
      
  }else{
    $('.custom-notify-btn').hide();
    $('.out_of_stock_msg').hide();
    $('.pincode_checker_heading').show();
    $('.product__info .product-form__add-button').show();
    $('.pdp_right_section .payment_offers').show();
    $("#gokwik-buy-now").removeClass('hide_cTA');
    $('#AddToCart, .cutomized-btn, .button.custom-prebook').removeClass('hide_cTA');
    $('quick-buy-drawer #AddToCart').show();
    $('quick-buy-popover #AddToCart').show();
    $('.product-item__quick-form.quick-buy-notify-me').hide();
    $('.d-lg-none.current-in-cart, .desktop.current-in-cart, .offer-callout-simple, .popup_wrapper').show();
    $('.d-lg-none.restocking, .desktop.restocking').hide();
    $('.pincode_checker_container').show();
    var variant_personalization = sessionStorage.getItem('variant_personalization');
    variant_personalization = JSON.parse(variant_personalization);
    for (var key in variant_personalization) {
      if (variant_personalization.hasOwnProperty(e.id)) {
        $('.personalization-image-wrapper img').attr('src', variant_personalization[e.id]);
        break;
      }
    }
  }    
}
}
}
let varient_swatches_input = document.querySelectorAll('.variant-swatch input') ;
swatches_change(varient_swatches_input);
let color_swatches_input = document.querySelectorAll('.color-swatch input') ;
swatches_change(color_swatches_input)

let home_pod_price = document.querySelector('.custom-product-of-the-day-price .current_price');
if(home_pod_price){
let custom_price = '';
let offerVariantdata = sessionStorage.getItem('variantQtys');
let OfferProperty= [];
let varient_pod_units = [];
offerVariantdata = JSON.parse(offerVariantdata);
for (var key in offerVariantdata) {
  if (offerVariantdata.hasOwnProperty(e.id)) {
   let OfferPropertyArr = offerVariantdata[e.id];
    OfferProperty.push(OfferPropertyArr[0]['pod_deal_applicability']);
    varient_pod_units.push(OfferPropertyArr[0]['pod_units']);
    break;
   }
 }
 let varient_pod_unit = varient_pod_units[0];
 varient_pod_unit = parseInt(varient_pod_unit);
 OfferProperty = OfferProperty[0];
 if(varient_pod_unit > 0 && OfferProperty == 'true'){  
  custom_price = parseInt(home_pod_price.dataset.pod)
 }else{
  custom_price = e.price / 100;
 }

  home_pod_price.innerHTML = '₹ '+ custom_price;
}
}

  Shopify.accordion = function(tablinks){
    for (i = 0; i < tablinks.length; i++) {
      if (tablinks[i].hasAttribute("open")) {
        tablinks[i].removeAttribute("open"); 
        tablinks[i].previousElementSibling.setAttribute('aria-expanded','false');
      }
    } 
  }

  function preserveQuery() {
    Shopify.queryParams = {};
    if (window.location.search.length) {
      const params = window
        .location
        .search
        .substr(1)
        .split('&');
        const filterParams = params.filter(checkPrice);
        const fliterUrl = params.filter(priceNotInclude);
        function checkPrice(param) {
          return param.includes('filter.v.price');
        }

        function priceNotInclude(param) {
          return !param.includes('filter.v.price');
        }

      let fliterBaseUrl = fliterUrl.toString();
      fliterBaseUrl = fliterBaseUrl.replaceAll(',','&')
      Shopify.fliterUrl = fliterBaseUrl;
      for (let i = 0; i < filterParams.length; i++) {
        const keyValue = filterParams[i].split('=');

        if (keyValue.length) {
          Shopify.queryParams[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
        }
      }
    }

  }

  function triggerEvent(element, name, data = {}) {
    element.dispatchEvent(new CustomEvent(name, {
      bubbles: true,
      detail: data
    }));
  }

  Shopify.collectionFilter = function(filterLoad){

  let details = document.querySelectorAll("#facet-filters-form collapsible-content");
  let summary = $('#facet-filters-form .collapsible-toggle');

      summary.click(function(){
        Shopify.accordion(details);
      $(this).attr('aria-expanded','true');
      $(this).siblings('collapsible-content').attr('open','true'); 
       });

    preserveQuery();

    let sortItems = document.querySelectorAll('.price-tag-filter .tag');
    for (let i = 0; i < sortItems.length; i++) {
      sortItems[i].addEventListener('click', function(e) {
        preserveQuery();
        Shopify.queryParams['filter.v.price.gte'] = e.target.attributes['data-min'].value;
        Shopify.queryParams['filter.v.price.lte'] = e.target.attributes['data-max'].value;
        let searchParams = new URLSearchParams(Shopify.queryParams).toString();
        if(Shopify.fliterUrl){
          searchParams = `${Shopify.fliterUrl}&${searchParams}`  
        }
        triggerEvent(this, "facet:criteria-changed", { url: `${window.location.pathname}?${searchParams}` });

      })
    }
    if(filterLoad){
      Shopify.accordion(details);
      if(summary[0] != undefined){
      summary[0].setAttribute('aria-expanded','true');
      summary[0].nextElementSibling.setAttribute('open','true');
      }
     }
  }


  let collectionFilterLoad = true; Shopify.collectionFilter(collectionFilterLoad);

// Creating cleverTap push event
function createCleverTapEvent( event_name, event_data ){
  if( event_name != '' && event_data != '' ){
    clevertap.event.push( event_name, event_data );
  }
}


Shopify.homepageLazyload = function(){
  // Shopify.custom_slider(e);

  var press_itemsDiv = '.press_section .MultiCarousel-inner';
 var press_itemsMainDiv = ('.press_section .MultiCarousel');
 var press_selector = 'MultiCarousel_press';
Shopify.custom_slider(press_itemsDiv, press_itemsMainDiv, press_selector);

var explore_itemsDiv = '.explore_now_section .MultiCarousel-inner';
var explore_itemsMainDiv = ('.explore_now_section .MultiCarousel');
var explore_selector = 'MultiCarousel_explore';
Shopify.custom_slider(explore_itemsDiv, explore_itemsMainDiv, explore_selector);

// Explore our slide section
var explore_now_slider_img = document.querySelectorAll('.explore_now_slider .explore_item');
explore_now_slider_img.forEach((slide, i) => {
    slide.addEventListener('click', function() {
      
        let imageurl = slide.querySelector('a').href;
        let imageTitle = slide.querySelector('img').alt;
        clevertap.event.push("Explore now clicked", {
          "image url": imageurl,
          "image Title": imageTitle,
          "userSource": userSource
        })
    })
  });

  $('.shopify-section shopify-section--press').on('click', function() {
    clevertap.event.push("In the Press section clicked", {"userSource": userSource});
  });
  $("button.press-list__logo-item.tap-area").hover(function() {
    $(this).trigger("click")
  });
  labelsPriority()
  // tabs_ajax()
}

function labelsPriority() {
  $('.product-item').each(function() {
      if($(this).find('.z-10').length > 0) {
          $(this).find('.z-10').css({
            'display': 'flex',
            'alignItems': 'center'
          });
      } else if($(this).find('.z-9').length > 0) {
          $(this).find('.z-9').css({
            'display': 'flex',
            'alignItems': 'center'
          });
      } else if($(this).find('.z-8').length > 0) {
          $(this).find('.z-8').css({
            'display': 'flex',
            'alignItems': 'center'
          });
      } else if($(this).find('.z-7').length > 0) {
          $(this).find('.z-7').css({
            'display': 'flex',
            'alignItems': 'center'
          });
      } else if($(this).find('.z-6').length > 0) {
          $(this).find('.z-6').css({
            'display': 'flex',
            'alignItems': 'center'
          });
      } else if($(this).find('.z-5').length > 0) {
          $(this).find('.z-5').css({
            'display': 'flex',
            'alignItems': 'center'
          });
      } else if($(this).find('.z-4').length > 0) {
          $(this).find('.z-4').css({
            'display': 'flex',
            'alignItems': 'center'
          });
      } else if($(this).find('.z-3').length > 0) {
          $(this).find('.z-3').css({
            'display': 'flex',
            'alignItems': 'center'
          });
      } else if($(this).find('.z-2').length > 0) {
          $(this).find('.z-2').css({
            'display': 'flex',
            'alignItems': 'center'
          });
      } 
  })
}
window.addEventListener('load', labelsPriority)

// Creating cleverTap push event
function createCleverTapEvent( event_name, event_data ){
  if( event_name != '' && event_data != '' ){
    clevertap.event.push( event_name, event_data );
    console.log(clevertap.getCleverTapID());
  }
}

// Creating cleverTap login event
function createCleverTapLoginEvent( event_name, event_data ){
  if( event_name != '' && event_data != '' ){
    clevertap.onUserLogin.push( event_name, event_data );
  }
}

// Strip HTML tags from string
function stripHtml(html){
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

/* clevertap code for login customer starts here */

$("#customer_login").submit(function(){
  var event = 'Login';
  var userEmail = document.getElementById("customer[email]").value;
  var event_info = { "Email": userEmail };
  var event_login = "Site";

  createCleverTapEvent( event, event_info );
  createCleverTapLoginEvent(event_login, event_info);
});

/* clevertap code for login customer ends here */

/* Clevertap code for announcement bar starts here */

$('.announce .announcement-bar__message p').each(function (ind, el) {
  $(el).on('click', function (e) {
    var announcementText = $(this).text();
    
    var event = 'Announcement bar clicked';
    var event_info = { "Message": announcementText, "userSource": userSource };

    createCleverTapEvent( event, event_info );
  });
});

/* Clevertap code for announcement bar ends here */


/* Clevertap code for Bootstrap carousel homepage starts here */

const slides = document.querySelectorAll('.bootstrap-carousel .item');
slides.forEach((slide, i) => {
  slide.addEventListener('click', function() {
      let imageTitle = slide.querySelector('.image_alt').innerText;
      let slideNum = `${i+1}`
      
      var event = 'Homepage Banner clicked';
      var event_info = { "Banner Number": "Banner " + slideNum, "Banner Title": imageTitle, "userSource": userSource };

      createCleverTapEvent( event, event_info );
  })
});

/* Clevertap code for Bootstrap carousel homepage ends here */

/* Clevertap Code for "shop by category and top collections on colletion page" starts here  */
if (window.matchMedia("(min-width: 769px)").matches) {
  $('.shop_by_category_slider.only-desktop .single_column').each(function () {
    $(this).click(function () {
      var item = $(this).find('.collection_title span').text();
      var event = "Top Collections Clicked";
      var event_info = { "Item": stripHtml(item), "userSource": userSource };
  
      createCleverTapEvent( event, event_info );
    });
  });
} else {
  $('.shop_by_category_slider.only-mobile .single_column').each(function () {
    $(this).click(function () {
      var item = $(this).find('.collection_title span').text();
      var event = "Top Collections Clicked";
      var event_info = { "Item": stripHtml(item), "userSource": userSource };
  
      createCleverTapEvent( event, event_info );
    });
  });
}



/* Clevertap Code for "shop by category and top collections on colletion page" ends here  */

/* clevertap code for "image_carousel.liquid" section starts here */

  var image_slides = document.querySelectorAll('.deal-slider .slide-url');
  image_slides.forEach((slide, i) => {
    slide.addEventListener('click', function(e) {
      var imageurl = slide.href;
      var imageTitle = slide.querySelector('img').alt;
      var event = "image_carousel clicked";
      var event_info = { "image url": imageurl, "image Title": imageTitle, "userSource": userSource };
      createCleverTapEvent( event, event_info );
    })
  });

/* clevertap code for "image_carousel.liquid" section ends here */

/* clevertap code for Explore now section on homepage starts here */

  var explore_now_slider_img = document.querySelectorAll('.explore_now_slider .explore_item .explore_now_btn_link');
  explore_now_slider_img.forEach((explore_now_slide, i) => {
    explore_now_slide.addEventListener('click', function(e) {
      var imageurl = explore_now_slide.href;
      var imageTitle = explore_now_slide.querySelector('img').alt;
      var event = "Explore now clicked";
      var event_info = { "image url": imageurl, "image Title": imageTitle, "userSource": userSource };
      createCleverTapEvent( event, event_info );
    })
  });

/* clevertap code for Explore now section on homepage ends here */

/* Clevertap code starts for homepage-collection-banner.liquid */

  let collection_slides = document.querySelectorAll('.collection-banners .carousel-inner .carousel-item');
  collection_slides.forEach((slide, i) => {
    slide.addEventListener('click', function() {
      const slideNum = `${i+1}`;
      let imageTitle = slide.querySelector('.collection-banners .image_alt').innerText;
      
      var event = "Deals Banner clicked";
      var event_info = { "Banner Number": 'Banner ' + slideNum, "Banner Title": imageTitle, "userSource": userSource };
      createCleverTapEvent( event, event_info );
    })
  });

/* Clevertap code ends for homepage-collection-banner.liquid */

/* clevertap code for Featuerd blogs on homepage starts here */

$('.article-list').on('click', function() {
    var event = "Homepage Blog section clicked";
    var event_info = { "userSource": userSource };
    createCleverTapEvent( event, event_info );
});

/* clevertap code for Featuerd blogs on homepage ends here */

/* clevertap code for Press on homepage starts here */

  $('.shopify-section shopify-section--press').on('click', function() {
    var event = "In the Press section clicked";
    var event_info = { "userSource": userSource };
    createCleverTapEvent( event, event_info );
  });

/* clevertap code for Press on homepage ends here */

/* clevertap code for Bottom Navbar starts here */

$('.row-nav .fixed-nav-item').each(function() {
  $(this).click(function() {
    var event = "Bottom Navbar clicked";
    var item = $(this).find('.fixed_nav--link span').text()
    var event_info = {"item": item, "userSource": userSource };
    createCleverTapEvent( event, event_info );
  })
  
});

/* clevertap code for Bottom Navbar ends here */

/* clevertap code for login customer starts here */

$("#customer_login").submit(function(){
  var event = 'Login';
  var userEmail = document.getElementById("customer[email]").value;
  var event_info = { "Email": userEmail };
  var event_login = "Site";

  createCleverTapEvent( event, event_info );
  createCleverTapLoginEvent(event_login, event_info);
});

/* clevertap code for login customer ends here */

/* clevertap code for customer registeration starts here */

$("#register-customer").submit(function(){
  var firstName = document.getElementById("customer[first_name]").value;
  var lastName = document.getElementById("customer[last_name]").value;
  var userEmail = document.getElementById("customer[email]").value;
  var event_login = "Site";
  var event = 'Sign Up';
  var event_info = { "Email": userEmail, "First Name": firstName, "Last Name": lastName };

  createCleverTapLoginEvent(event_login, event_info);
  createCleverTapEvent( event, event_info );
});

/* clevertap code for customer registeration ends here */

/* clevertap code for clicking razor pay starts here */
$(".razorpay-checkout").click(function () {
  var mini_Cart_data = document.querySelector("#mini-cart-form");
  var productsincart = mini_Cart_data.dataset.cart_items;
  var event = 'razor/magic Button Clicked';
  var event_info = { "cart products": productsincart, "Amount": cart_total_price };

  createCleverTapEvent( event, event_info );
});

/* clevertap code for product-banners on pdp*/

$('a.banner_link').on('click', function() {
  let product_b_title = $(this).data('title');
  var event = `product page banner clicked`;
  var event_info = { "userSource": userSource, "product_title": product_b_title };
  createCleverTapEvent( event, event_info );
});

/* clevertap code for clicking razor pay ends here */

// OTP Login
const date = new Date()
options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true
};
const LOGIN_TIMESTAMP = new Intl.DateTimeFormat("en-GB", options).format(date);
  //Function to allow only numbers
     function _isNumberCheck(evt) {
      var charCode = (evt.which) ? evt.which : event.keyCode
      if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
      return true;
   }
   // Not allow 0 as first digit on input
   $(document).on("input", "#otp-mobile-number, #otp", (e) => {
      $(e.target).val($(e.target).val().replace(/^[^1-9][^0-9]*$/, ''));
      $('.otp-login-error').html('');
   })
   $(document).on("keypress", "#otp-mobile-number, #otp", (e) => {
      return _isNumberCheck(e);
   })
   let timerOn = false;
   function timer(remaining, timerOn) {
    let m = Math.floor(remaining / 60);
    let s = remaining % 60;

    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    $('#timer').html(m + ':' + s);
    remaining -= 1;
    if(remaining >= 0 && timerOn) {
      setTimeout(function() {
        timerOn = sessionStorage.getItem('timerOn');
        timerOn = JSON.parse(timerOn);
          timer(remaining, timerOn);
      }, 1000);
      return;
    }

    if(!timerOn) {
      // Do validate stuff here
      return;
    }

    // Do timeout stuff here
    $('.resend-timer').hide();
    $('.resend-text').show();
    $('.resend-btn').show();
    $('.otp-login-confirm-btn').css('background','#ED1C24');
  }

   function TimerFunction(){
    timerOn = true;
    sessionStorage.setItem('timerOn', timerOn);
    $('.resend-timer').show();
    $('.resend-text').hide();
    $('.resend-btn').hide();
    $('.otp-login-confirm-btn').removeAttr('style');
    timer(60, timerOn);
   }

   function countdown(timeleft, url){
    var timeleft = timeleft;
    var downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        sessionStorage.setItem('login','false');
        location.href = url;
      } else {
        document.getElementById("countdown").innerHTML = timeleft;
      }
      timeleft -= 1;
    }, 1000);
   }

   function emailMask(email) {
    var maskedEmail = email.replace(/([^@\.])/g, "*").split('');
    var previous	= "";
    for(i=0;i<maskedEmail.length;i++){
      if (i<=1 || previous == "." || previous == "@"){
        maskedEmail[i] = email[i];
      }
      previous = email[i];
    }
    return maskedEmail.join('');
  }

  var customer_container = document.querySelector('.customer-login-section.customer--section');
  function inputSubmit(input) {
    if(input){
    input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        // debugger
        if(customer_container.hasAttribute('otp_login_screen')){
        //  console.log('otp_login_screen');
        document.querySelector('.otp-login-btn').click();
        }
        else if(customer_container.hasAttribute('otp_send')){
          document.querySelector('.otp-login-confirm-btn').click();  
        }
        else{
        //  console.log('prevint defaunt reload');
          event.preventDefault();
        }
      }
    });
  }
    }

  function signup_window(session_id){
    $('.customer-login-section').attr('new_customer', 'true');
    $('.customer-login-section').removeAttr('multi_email');
    $('.otp-login-message h3').html('Continue with Email');
    $('.otp-timer-container').hide();
    $('.otp-login-error').html('');
    $('.otp-login-submit-btn').click(function(){
      let full_name = $('.otp-fullName #full_name').val();
      let email = $('.otp-email #email').val();
      let phone = $('#otp-mobile-number').val();
      let register_url = sessionStorage.getItem('login_location');
      sessionStorage.setItem('selected_email',email);
      otpSignUp(full_name, email, phone, session_id, register_url);
    })
  }

  function verifyemail(session_id, otp, url){
    let base_Url = 'https://otp.boat-lifestyle.com/email/verify';
    var settings = {
      "url": base_Url,
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        "session_id": session_id,
        "url": url,
        "otp": otp
      }),
    };
    
    $.ajax(settings).done(function (response) {
      // console.log(response);
      if(response.code == 200 && response.message == 'login URL sent'){
        $('.customer-login-section.customer--section').hide();
        $('.oto-login-success-container').show();
        localStorage.setItem('boatHead_input', response.Token);
        countdown(5, response.URL);
        
      }else if(response.code == 422 && response.message == 'validation_error'){
        $('.otp-login-error').html('Something went wrong please try again.');
      }else if(response.code == 401 || response.code == 429){
        $('.otp-login-error').html(response.message);
      }else if(response.code == 406){
        $('.otp-login-error').html('Otp expired.');
      }else{
        $('.otp-login-error').html('Something went wrong please try again.');
      }
    });
  }
  
  function emailResend(email, session_id){
    let base_Url = 'https://otp.boat-lifestyle.com/email/otp';
    var settings = {
      "url": base_Url,
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        "email": email,
        "session_id": session_id
      }),
    };
    
    $.ajax(settings).done(function (response) {
      // console.log(response);
      if(response.code == 200){
        
      }else if(response.code == 429){
        $('.otp-login-error').html(response.message);
      }else{
        $('.otp-login-error').html('Something went wrong please try again.');
      }
    });
  }

  function selectEmail(email, session_id, url){
    let base_Url = 'https://otp.boat-lifestyle.com/emails/select';
    var settings = {
      "url": base_Url,
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        "session_id": session_id,
        "email" : email,
        "url": url
      }),
    };
    $.ajax(settings).done(function (response) {
      // console.log(response);
      if(response.code == 200){
        $('.otp-login-error').html('');
        if(response.message == 'Email exists with different number  , OTP sent to email'){
          var session_id = response.session_id;
  
  // email varify code
  $('.customer-login-section').attr('otp_send', 'true');
  $('.customer-login-section').attr('otp_email_varify', 'true');
  $('.customer-login-section').removeAttr('multi_email');
  $('#resend__otp').removeClass('login-resend-btn');
  $('#resend__otp').addClass('email-resend-btn');
  $('.email-list-container').html('');
  $('.mobile-otp-inout input').val('');
  $('.otp-timer-container').show();
$('.mobile-login-input').html(`
<div class="input">
  <input type="textl" id="emailId" name="emailId" value="${sessionStorage.getItem('selected_email')}" class="input__field is-filled" required="" disabled="disabled">
  <label for="mobile" class="input__label">Enter your email</label>
</div>
`);
$('.otp-login-error').html('');
$('.otp-login-confirm-btn').addClass('email_varify');
TimerFunction();
  sessionStorage.setItem('login_session_id', response.session_id );
  
          }else{
        $('.customer-login-section.customer--section').hide();
        $('.oto-login-success-container').show();
        localStorage.setItem('boatHead_input', response.Token);
        countdown(5, response.URL);
          }
      }else if(response.code == 422 && response.message == 'validation_error'){
        // $('.otp-login-error').html('Something went wrong please try again.');
      }else if(response.code == 401 || response.code == 404 || response.code == 429 ){
        $('.otp-login-error').html(response.message);
      }
    });
  }

  function otpSignUp(full_name, email, phone, session_id, url){
    let base_Url = 'https://otp.boat-lifestyle.com/signup';
    var settings = {
      "url": base_Url,
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        "full_name" : full_name,
        "email": email,
        "phone": phone,
        "session_id": session_id,
        "url" : url
      }),
    };
    $.ajax(settings).done(function (response) {
      // console.log(response);
      if(response.code == 200){
        $('.otp-login-error').html('');
        if(response.message == 'Email exists with different number  , OTP sent to email'){
        var session_id = response.session_id;

// email varify code

  $('.customer-login-section').attr('otp_send', 'true');
  $('.customer-login-section').attr('otp_email_varify', 'true');
  $('.customer-login-section').removeAttr('new_customer');
  $('.customer-login-section').removeAttr('multi_email');
  $('#resend__otp').removeClass('login-resend-btn');
  $('#resend__otp').addClass('email-resend-btn');
  $('.email-list-container').html('');
  $('.mobile-otp-inout input').val('');
  $('.otp-timer-container').show();
$('.mobile-login-input').html(`
<div class="input">
  <input type="textl" id="emailId" name="emailId" value="${sessionStorage.getItem('selected_email')}" class="input__field is-filled" required="" disabled="disabled">
  <label for="mobile" class="input__label">Enter your email</label>
</div>
`);
$('.otp-login-error').html('');
$('.otp-login-confirm-btn').addClass('email_varify');
clevertap.event.push('OTP Signup', {
  "Full Name": full_name,
  "Email": email,
  "Phone": phone,
  "Message": response.message
})
clevertap.profile.push({
  "Site": {
    "OTP Signup Name": full_name,
    "OTP Signuo Number": phone,
    "OTP Signup Email": email,
    "MSG-sms": "TRUE",
    "MSG-whatsapp": "TRUE"
  }
 }); 
TimerFunction();
  sessionStorage.setItem('login_session_id', response.session_id );
        }else{
        $('.customer-login-section.customer--section').hide();
        $('.oto-login-success-container').show();
        localStorage.setItem('boatHead_input', response.Token);
        clevertap.event.push('OTP Signup', {
          "Full Name": full_name,
          "Email": email,
          "Phone": phone,
          "Message": response.message
        })
        clevertap.profile.push({
          "Site": {
            "OTP Signup Name": full_name,
            "OTP Signuo Number": phone,
            "OTP Signup Email": email,
            "MSG-sms": "TRUE",
            "MSG-whatsapp": "TRUE"
          }
        }); 
        countdown(5, response.URL);
      }
      }else if(response.code == 422 && response.message == 'validation_error'){
        $('.otp-login-error').html('Something went wrong please try again.');
        clevertap.event.push('OTP Signup', {
          "Full Name": full_name,
          "Email": email,
          "Phone": phone,
          "Message": response.message
        })
        clevertap.profile.push({
          "Site": {
            "OTP Signup Name": full_name,
            "OTP Signuo Number": phone,
            "OTP Signup Email": email,
            "MSG-sms": "TRUE",
            "MSG-whatsapp": "TRUE"
          }
        }); 
      }else if(response.code == 401){
        $('.otp-login-error').html('Customer already exist with this email ID and with ' + response.message + ' phone number login with this number.');
        let login_btn = $('.otp-login-submit-btn');
        login_btn.html('Back to Login');
        login_btn.attr('return_to_login', true);
        clevertap.event.push('OTP Signup', {
          "Full Name": full_name,
          "Email": email,
          "Phone": phone,
          "Message": response.message
        })
        clevertap.profile.push({
          "Site": {
            "OTP Signup Name": full_name,
            "OTP Signuo Number": phone,
            "OTP Signup Email": email,
            "MSG-sms": "TRUE",
            "MSG-whatsapp": "TRUE"
          }
        }); 
        $('.otp-login-submit-btn[return_to_login]').click(function(e){
          e.preventDefault();
          location.reload();
        })
      }else if(response.code == 429){
        $('.otp-login-error').html(response.message);
      }
    });
  }
  
function verifyotp(session_id, otp, url){
  let base_Url = 'https://otp.boat-lifestyle.com/login/verifyotp';
  var settings = {
    "url": base_Url,
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "session_id": session_id,
      "otp": otp,
      "url": url
    }),
  };
  
  $.ajax(settings).done(function (response) {
    // console.log(response);
    let mobile_number = $('.mobile-login-input input').val()
    if(response.code == 200 && response.message == 'login URL sent'){
      sessionStorage.setItem('timerOn', false);
    //  console.log(timerOn,'timerOn');
      $('.customer-login-section.customer--section').hide();
      $('.oto-login-success-container').show();
      localStorage.setItem('boatHead_input', response.Token);
      clevertap.event.push('Successful Login', {
        "Mobile Number": mobile_number,
        "Session ID": session_id,
        "Login Timestamp": LOGIN_TIMESTAMP
      })
      clevertap.profile.push({
        "Site": {
          "OTP Login Number": mobile_number,
          "Login Timestamp": LOGIN_TIMESTAMP,
          "MSG-sms": "TRUE",
          "MSG-whatsapp": "TRUE",
          "Login Timestamp": LOGIN_TIMESTAMP
        }
       }); 
      countdown(5, response.URL);
      
    }else if(response.code == 422 && response.message == 'validation_error'){
      $('.otp-login-error').html('Something went wrong please try again.');
      clevertap.event.push('Failed Login', {
        "Mobile Number": mobile_number,
        "Error Message": 'Something went wrong please try again.'
      })
      clevertap.profile.push({
        "Site": {
          "OTP Failed Mobile Number": mobile_number,
          "MSG-sms": "TRUE",
          "MSG-whatsapp": "TRUE"
        }
      }); 
    }else if(response.code == 401 && response.message == 'Incorrect Otp'){
      $('.otp-login-error').html(response.message);
      clevertap.event.push('Failed Login', {
        "Mobile Number": mobile_number,
        "Error Message": response.message
      })
      clevertap.profile.push({
        "Site": {
          "OTP Failed Mobile Number": mobile_number,
          "MSG-sms": "TRUE",
          "MSG-whatsapp": "TRUE"
        }
      });
    }else if(response.code == 401 && response.message == 'Customer does not exists , consider Sign up'){
      sessionStorage.setItem('timerOn', false);
    //  console.log(timerOn,'timerOn');
      $('.otp-login-error').html(response.message);
      clevertap.event.push('Failed Login', {
        "Mobile Number": mobile_number,
        "Error Message": response.message
      })
      clevertap.profile.push({
        "Site": {
          "OTP Failed Mobile Number": mobile_number,
          "MSG-sms": "TRUE",
          "MSG-whatsapp": "TRUE"
        }
      });
      signup_window(session_id);
    }else if(response.code == 406){
      $('.otp-login-error').html('Otp expired.');
      clevertap.event.push('Failed Login', {
        "Mobile Number": mobile_number,
        "Error Message": response.message
      })
      clevertap.profile.push({
        "Site": {
          "OTP Failed Mobile Number": mobile_number,
          "MSG-sms": "TRUE",
          "MSG-whatsapp": "TRUE"
        }
      });
    }else if(response.code == 300 && response.message == 'emailId list'){
      sessionStorage.setItem('timerOn', false);
    //  console.log(timerOn,'timerOn');
      $('.otp-login-message h3').html('Please select your Primary email id');
      $('.customer-login-section').attr('multi_email', 'true');
      $('.otp-timer-container').hide();
      $('.otp-login-error').html('');
      let emailList = response.emailList;
      let emailListHtml = '', i ;
      let emailListContainer = document.querySelector('.email-list-container');
      if(emailList.length > 0){
      for (let i = 0; i < emailList.length; i++) {
        emailListHtml = emailListHtml + '<span data-value="'+ emailList[i] +'">'+ emailMask(emailList[i]) +'</span>'
      }
      emailListContainer.innerHTML = emailListHtml + '<span class="redirect_to_signup">Continue with Email</span>';
      let emailSelector = $('.email-list-container span');
      let selectedEmail = '';
      console.dir(emailSelector[0]);
      selectedEmail = emailSelector[0].dataset.value;
      sessionStorage.setItem('selected_email', selectedEmail);
    //  console.log(selectedEmail);
      emailSelector[0].setAttribute('selected','true');
      emailSelector.click(function(event){
      selectedEmail = event.target.dataset.value;
      for (i = 0; i < emailSelector.length; i++) {
        if (emailSelector[i].hasAttribute("selected")) {
          emailSelector[i].removeAttribute("selected");   
        }
    }
    sessionStorage.setItem('selected_email', selectedEmail);
      $(this).attr('selected','true'); 
      });

      $('.redirect_to_signup').click(function(){
        signup_window(session_id);
      });
      let selectedEmail_url = sessionStorage.getItem('login_location');
      $('.customer-login-section[multi_email] .otp-login-submit-btn').click(function(){
      selectEmail(selectedEmail, session_id, selectedEmail_url);
      });
    }else{
      signup_window(session_id);
    }
    }else if(response.code == 429){
      $('.otp-login-error').html(response.message);
    }else{
      $('.otp-login-error').html('Something went wrong please try again.');
      clevertap.event.push('Failed Login', {
        "Error Message": 'Something went wrong please try again.'
      })
    }
  });
}

function otpLogin(phone){
  let base_Url = 'https://otp.boat-lifestyle.com/login/sendotp';
  var settings = {
    "url": base_Url,
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "phone": phone
    }),
  };
  $.ajax(settings).done(function (response) {
    // console.log(response);
    if(response.code == 200 && response.message == 'OTP sent'){
    $('.customer-login-section').attr('otp_send', 'true');
    $('.customer-login-section').removeAttr('otp_login_screen');
    $('#otp-mobile-number').attr('disabled', true)
    $('.otp-login-error').html('');
    TimerFunction();
      sessionStorage.setItem('login_session_id', response.session_id )
  }else if(response.code == 422 && response.message == 'validation_error'){
    $('.otp-login-error').html('The phone field is required.');
  }else if(response.code == 403 && response.message == 'Invalid phone number'){
    $('.otp-login-error').html(response.message);
  }else if(response.code == 429){
    $('.otp-login-error').html(response.message);
  }
  });
}

$('.otp-login-btn, .login-resend-btn').click(function(){
  if(!$('#resend__otp').hasClass('email-resend-btn')){
//  console.log('login-resend-btn');
  let phone = $('#otp-mobile-number').val();
  if(phone.length < 1){
    $('.otp-login-error').html('The phone field is required.');
  }else if(phone.length < 10){
    $('.otp-login-error').html('Invalid phone number.');
  }else {
    $('.otp-login-btn').attr('disabled', true);
    otpLogin(phone);
  }
  }
})

$(document).on('click', '#resend__otp', function(){
  TimerFunction();
});

$( "#otp" ).on( "input", function() {
  if($(this).val().length >5 ){
    $('.otp-login-confirm-btn').css('background','#ED1C24');
  }
});

$('.mobile-login-edit-icon').click(function(){
  $('.otp-login-error').html('');
  $('.otp-login-btn').attr('disabled', false);
  $('.customer--section').removeAttr('otp_send');
  $('.mobile-otp-inout input').val('');
  $('#otp-mobile-number').attr('disabled', false)
  });
  if(!sessionStorage.login_location && sessionStorage.login_location !== ''){
    sessionStorage.setItem('login_location','https://www.boat-lifestyle.com/');
  }
  

  document.querySelector('.custom-account-icon').addEventListener("click", function myFunction(event) {
    event.preventDefault();
      sessionStorage.setItem('login_location',window.location.href);
  });

  let mobile_account = document.querySelectorAll('.mobile-custom-account-icon');
  for (let i = 0; i < mobile_account.length; i++) {
    mobile_account[i].addEventListener("click", function myFunction(event) {
      event.preventDefault();
        sessionStorage.setItem('login_location',window.location.href);
        var account_url = this.firstElementChild.getAttribute('href');
        window.location = account_url;
    });
  }

 $('.otp-login-confirm-btn').click(function(){
   if(!$('.otp-login-confirm-btn').hasClass('email_varify')){
//  console.log('verifyotp');
  let session_id = sessionStorage.getItem('login_session_id');
  let otp = $('.mobile-otp-inout input').val();
  let url = sessionStorage.getItem('login_location');
if(session_id && session_id !== '' && session_id !== 'undefined' && url && otp !== ''){  
  verifyotp(session_id, otp, url);
}
     }else{
  let session_id = sessionStorage.getItem('login_session_id');
  let mobile_number = $('.mobile-login-input input').val()
  let otp = $('.mobile-otp-inout input').val();
  let url = sessionStorage.getItem('login_location');
if(session_id && session_id !== '' && session_id !== 'undefined' && url && otp !== ''){   
  verifyemail(session_id, otp, url);
}else if(otp == ''){
  $('.otp-login-error').html('OTP is required');
}   
     }
})

$('#resend__otp').click(function(){
  if($(this).hasClass('email-resend-btn')){
//  console.log('email-resend-btn');
  let session_id = sessionStorage.getItem('login_session_id');
  let email = $('#emailId').val();
if(session_id && session_id !== '' && session_id !== 'undefined' && email){   
  emailResend(email, session_id);
}  
  }
})

var input_login = document.querySelector('.mobile-login-input input');
inputSubmit(input_login);  
var otp_login = document.querySelector('.mobile-otp-inout input');
inputSubmit(otp_login);  

$('.mobile-otp-inout').click(function(){
  if($('.otp-login-error').html() !== ''){
    $('.otp-login-error').html('');
    $(this).children('input').val('');
  }
});

// if( window.location = '/account/logout'){
//   localStorage.removeItem('boatHead_input');
//   sessionStorage.removeItem('login')
// }
  // if ('OTPCredential' in window) {
  //   window.addEventListener('DOMContentLoaded', (e) => {
      
  //     const input = document.querySelector('input[autocomplete="one-time-code"]');
  //     if (!input) return;
  //     const ac = new AbortController();
  //     const form = input.closest('form');
  //     if (form) {
  //       form.addEventListener('submit', (e) => {
  //         ac.abort();
  //       });
  //     }
  //     // alert('Hii 1 otp');
  //     navigator.credentials.get({
  //       otp: { transport:['sms'] },
  //       signal: ac.signal
  //     }).then((otp) => {
  //       alert('otp');
  //       alert(otp);
  //       input.value = otp.code;
        
  //       // if (form) form.submit();
  //     }).catch((err) => {
  //       console.error(err);
  //     });
  //   });
  // }
  
$(document).on("click", ".custom-offer-add-to-cart", function(e) {
  e.preventDefault();
  let offerForm = $(this).parents("form")[0];
  let offerId = offerForm.querySelector('[name="id"]').value;
  let offerVariantData = sessionStorage.getItem('variantQtys');
  let OfferProperty= [];
  let varient_pod_units = [];
  let podData = {};
  offerVariantData = JSON.parse(offerVariantData);
    for (var key in offerVariantData) {
     if (offerVariantData.hasOwnProperty(offerId)) {
      let OfferPropertyArr = offerVariantData[offerId];
       OfferProperty.push(OfferPropertyArr[0]['pod_deal_applicability']);
       varient_pod_units.push(OfferPropertyArr[0]['pod_units']);
       break;
      }
    }
  let varient_pod_unit = varient_pod_units[0];
  varient_pod_unit = parseInt(varient_pod_unit);
  OfferProperty = OfferProperty[0];
  if(varient_pod_unit > 0){
   podData = {'quantity': 1,'id': offerId,'properties': {'_POD': OfferProperty }}
  }else{
   podData = {'quantity': 1,'id': offerId} 
  }
    if($(this).hasClass( "algolia_pod_offer" )){
      $.ajax({
        url: "/cart/add.js",
        dataType: "json",
        cache: !1,
        type: "post",
        data: podData,
        success: function(e) {
            document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", {
                bubbles: !0
            }));
            setTimeout(function() {
              Shopify.cart_item_count();
          }, 1500)
            // console.log('hiii');
            document.getElementById("mini-cart").open = !0, document.querySelector("body").classList.add("noScroll"), $(".search-clear-icon").css('display', 'flex')
        }
    })
    }else{
      $.ajax({
        url: "/cart/add.js",
        dataType: "json",
        cache: !1,
        type: "post",
        data: podData,
        success: function(e) {
            document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", {
                bubbles: !0
            }));
            setTimeout(function() {
              Shopify.cart_item_count();
          }, 1500)
        }
    })
    }
});



// Custom JavaScript slider
var autoplay = false,
infinite_loop = false,
autoplay_delay = false,
center_slide_scale = false,
show_active_dots = false,
oldX = 0,
oldY = 0,
autoplay_timeout = '';

Shopify.custom_slider = function(itemsDiv, itemsMainDiv, selector) {
slidePre = '',
slidePost = '',
slideItem = '',
numberOfSlides = '',
slide_length = '',
slider_dots = '';
  var itemWidth = "";
    if (document.querySelector(itemsMainDiv) !== null) {
  autoplay = JSON.parse(document.querySelector(itemsMainDiv).getAttribute('data-autoplay'));
  autoplay_timeout = JSON.parse(document.querySelector(itemsMainDiv).getAttribute('data-autoplay-timeout'));
  infinite_loop = JSON.parse(document.querySelector(itemsMainDiv).getAttribute('data-loop'));
  center_slide_scale = JSON.parse(document.querySelector(itemsMainDiv).getAttribute('data-centerSlideScale'));
  show_active_dots = JSON.parse(document.querySelector(itemsMainDiv).getAttribute('data-showActiveDots'));
  slidePre = document.createDocumentFragment();
  slidePost = document.createDocumentFragment();
  slideItem = document.querySelectorAll(itemsDiv + ' .item');
  slide_length = slideItem.length;
  slider_dots = $(itemsDiv).siblings('.MultiCarousel_dots_container').children('.multiCarousel_dots');
  let leftBth = '#' + selector + ' .leftLst';
  let RightBth = '#' + selector + ' .rightLst';

        $(itemsDiv).attr('autoplay_delay', 'false');
        for (var l = 0; l < slideItem.length; l++) {
  slideItem[l].setAttribute('data-index', [l]);
}

        $(RightBth).click(function() {
    click(1, this)
  });

        $(leftBth).click(function() {
      var condition = $(this).hasClass("leftLst");
            if (condition) click(0, this);
  });

        $('#' + selector + ' .multiCarousel_dots').click(function() {
  var curr = $(this).attr('data-index');
  changeCurrent(curr, this);
});

 ResCarouselSize(itemsMainDiv, selector);
        if (!isIOSMobile()) {
            $(window).resize(function() {
  ResCarouselSize(itemsMainDiv, selector);
});
 }
        if (autoplay) {
            slideAutoplay(itemsMainDiv, autoplay_timeout);
}

//this function define the size of the items
function ResCarouselSize(itemsMainDiv, selector) {
  var incno = 0;
  var dataItems = ("data-items");
  var itemClass = ('.item');
  var id = 0;
  var btnParentSb = '';
  var itemsSplit = '';
  var sampwidth = $(itemsMainDiv).width();
  var bodyWidth = $('body').width();
            $(itemsDiv).each(function() {
      id = id + 1;
      var itemNumbers = $(this).find(itemClass).length;
      btnParentSb = $(this).parent().attr(dataItems);
      itemsSplit = btnParentSb.split(',');
      $(this).parent().attr("id", selector + id);
      
      let desktop_slide = JSON.parse(document.querySelector(itemsMainDiv).getAttribute('data-responsive_desk_items'));
      let mid_slide = JSON.parse(document.querySelector(itemsMainDiv).getAttribute('data-responsive_mid_items'));
      let mobile_slide = JSON.parse(document.querySelector(itemsMainDiv).getAttribute('data-responsive_Small_items'));
      if (bodyWidth >= 992) {
          incno = desktop_slide;
          itemWidth = sampwidth / incno;
                } else if (bodyWidth >= 768) {
          incno = mid_slide;
          itemWidth = sampwidth / incno;
                } else {
          incno = mobile_slide;
          itemWidth = sampwidth / incno;
      }

                if (!$(this).hasClass('MultiCarousel_loaded')) {
      $(this).addClass('MultiCarousel_loaded');
      $(this).parent().addClass('MultiCarousel_load');
                    if (incno > 1 && center_slide_scale) {
                        for (var j = 1; j <= incno - 1; j++) {
                            slider_dots[slider_dots.length - j].remove();
      }
      let centerIndex = Math.floor(incno / 2);
      $(this).find(itemClass)[centerIndex].classList.add('center');
      }

                    for (var k = 0; k <= incno - 1; k++) {
        $(this).find(itemClass)[k].classList.add('active');
                        if (!center_slide_scale && incno < 2 && slider_dots[k]) {
        slider_dots[k].classList.add('active');
      }
      }
    }
                $(this).css({
                    'transform': 'translateX(0px)',
                    'width': itemWidth * itemNumbers
                });
                $(this).find(itemClass).each(function() {
          $(this).outerWidth(itemWidth);
      });
      $(this).addClass('MultiCarousel_loaded');
                if (autoplay == false && infinite_loop == false) {
      $(".leftLst").addClass("over");
      $(".rightLst").removeClass("over");
      }
      
  });
}

// Get the drag direction

document.querySelector(itemsDiv).addEventListener('dragstart', (e) => {
  oldX = e.pageX;
  oldY = e.pageY;
            $(itemsDiv).attr('autoplay_delay', 'true');
});

document.querySelector(itemsDiv).addEventListener('touchstart', (e) => {
  oldX = e.changedTouches[0].pageX;
  oldY = e.changedTouches[0].pageY;
            $(itemsDiv).attr('autoplay_delay', 'true');
});

document.querySelector(itemsDiv).addEventListener("dragend", getMouseDirection, false);

document.querySelector(itemsDiv).addEventListener('touchend', (event) => {
  var touch_event = event.changedTouches[0]; 
  getMouseDirection(touch_event);
  // if($(itemsDiv).attr('autoplay_delay') == 'true'){
  //   setTimeout(function() {$(itemsDiv).attr('autoplay_delay','false');},9000);
  // }
});
  }
 
  }
  

Shopify.product_slider = function(itemsDiv, itemsMainDiv, selector) {
    slidePre = '',
        slidePost = '',
        slideItem = '',
        numberOfSlides = '',
        slide_length = '',
        slider_dots = '';
    var itemWidth = "";
    if (document.querySelector(itemsMainDiv) !== null) {
        infinite_loop = true;
        slidePre = document.createDocumentFragment();
        slidePost = document.createDocumentFragment();
        slideItem = document.querySelectorAll(itemsDiv + ' .item');
        slide_length = slideItem.length;
        slider_dots = $(itemsDiv).siblings('.MultiCarousel_dots_container').children('.multiCarousel_dots');
        let leftBth = '#' + selector + ' .leftLst';
        let RightBth = '#' + selector + ' .rightLst';

        for (var l = 0; l < slideItem.length; l++) {
            slideItem[l].setAttribute('data-index', [l]);
        }

        $(RightBth).click(function() {
            click(1, this)
        });

        $(leftBth).click(function() {
            var condition = $(this).hasClass("leftLst");
            if (condition) click(0, this);
        });

        $('#' + selector + ' .multiCarousel_dots').click(function() {
            var curr = $(this).attr('data-index');
            changeCurrent(curr, this);
        });

        $('.product__thumbnail-item').click(function() {
            var thumbnail_curr = $(this).attr('data-index');
            product_changeCurrent(thumbnail_curr, this);
        });

        ResCarouselSize(itemsMainDiv, selector);
        if (!isIOSMobile()) {
            $(window).resize(function() {
                ResCarouselSize(itemsMainDiv, selector);
            });
        }

        //this function define the size of the items
        function ResCarouselSize(itemsMainDiv, selector) {
            var incno = 0;
            var dataItems = ("data-items");
            var itemClass = ('.item');
            var id = 0;
            var btnParentSb = '';
            var itemsSplit = '';
            var sampwidth = $(itemsMainDiv).width();
            var bodyWidth = $('body').width();
            $(itemsDiv).each(function() {
                id = id + 1;
                var itemNumbers = $(this).find(itemClass).length;
                btnParentSb = $(this).parent().attr(dataItems);
                itemsSplit = btnParentSb.split(',');
                $(this).parent().attr("id", selector + id);

                let desktop_slide = JSON.parse(document.querySelector(itemsMainDiv).getAttribute('data-responsive_desk_items'));
                let mid_slide = JSON.parse(document.querySelector(itemsMainDiv).getAttribute('data-responsive_mid_items'));
                let mobile_slide = JSON.parse(document.querySelector(itemsMainDiv).getAttribute('data-responsive_Small_items'));
                incno = 1;
                itemWidth = sampwidth / incno;

                if (!$(this).hasClass('MultiCarousel_loaded')) {
                    $(this).addClass('MultiCarousel_loaded');
                    $(this).parent().addClass('MultiCarousel_load');
                    if (incno > 1 && center_slide_scale) {
                        for (var j = 1; j <= incno - 1; j++) {
                            slider_dots[slider_dots.length - j].remove();
                        }
                        let centerIndex = Math.floor(incno / 2);
                        $(this).find(itemClass)[centerIndex].classList.add('center');
                    }

                    for (var k = 0; k <= incno - 1; k++) {
                        $(this).find(itemClass)[k].classList.add('active');
                        if (!center_slide_scale && incno < 2 && slider_dots[k]) {
                            slider_dots[k].classList.add('active');
                        }
                    }
                }
                var product_current_slide = $('.product__media-item.product_is-initial-selected').attr('data-index');
                var product_slider_width = itemWidth * itemNumbers;
                var product_itemsCondition = product_slider_width - $(window).width();
                product_current_slide = parseInt(product_current_slide);
                var Product_translateXval = parseInt(itemWidth * product_current_slide);
                var Product_last_item_padding = 0;
                if (window.innerWidth < 768) {
                   Product_last_item_padding = JSON.parse(document.querySelector(itemsMainDiv).getAttribute('data-last_item_padding'));
                  if (Product_translateXval > product_itemsCondition - itemWidth / 2) {
                    Product_translateXval = product_itemsCondition + Product_last_item_padding;
                    }  
                }
                $(this).css({
                    'transform': 'translateX('+ -Product_translateXval + 'px)',
                    'width': itemWidth * itemNumbers
                });
                $(this).find(itemClass).each(function() {
                    $(this).outerWidth(itemWidth);
                });
                $(this).addClass('MultiCarousel_loaded');
                if (autoplay == false && infinite_loop == false) {
                    $(".leftLst").addClass("over");
                    $(".rightLst").removeClass("over");
                }

            });
        }

        // Get the drag direction

        document.querySelector(itemsDiv).addEventListener('dragstart', (e) => {
            oldX = e.pageX;
            oldY = e.pageY;
        });

        document.querySelector(itemsDiv).addEventListener('touchstart', (e) => {
            oldX = e.changedTouches[0].pageX;
            oldY = e.changedTouches[0].pageY;
        });

        document.querySelector(itemsDiv).addEventListener("dragend", getMouseDirection, false);

        document.querySelector(itemsDiv).addEventListener('touchend', (event) => {
            var touch_event = event.changedTouches[0];
            getMouseDirection(touch_event);
        });
    }

}

//this function used to move the items
function ResCarousel(e, el, s, slide_container, dot) {
    var leftBtn = ('.leftLst');
    var rightBtn = ('.rightLst');
    var itemClass = ('.item');
    var translateXval = '';
    var divStyle = $(slide_container).css('transform');
    var slider_item = $(slide_container).find(itemClass);
    if (dot != null) {
        var slider_dots = dot;
    } else {
    var slider_dots = $(el).find('.multiCarousel_dots');
    }
    if (divStyle == 'none') {
      divStyle = 'matrix(1, 0, 0, 1, 0, 0)';
    }
    var values = divStyle.match(/-?[\d\.]+/g);
    var xds = Math.abs(values[4])
    var itemWidth = $(slide_container).children().innerWidth();
    var last_item_padding = 0;
    if (window.innerWidth < 768) {
    last_item_padding = JSON.parse(document.querySelector(el).getAttribute('data-last_item_padding'));
    }
    var itemsCondition = $(slide_container).width() - $(el).width();
    var itemsCondition_lastSlide = $(slide_container).width() - $(el).innerWidth() + last_item_padding;
    var active_slide = $(slide_container).find('.active');
    var active_slide_number = active_slide.length;
    var slider_dots_length = slider_dots_length;
    let counter = 0;
    center_slide_scale = JSON.parse(document.querySelector(el).getAttribute('data-centerSlideScale'));
 

    // Slider dots for multiple items have some work left to do. And active slide on right click have some work left to do.
    if (active_slide.length > 1) {
    slider_dots_length = slider_dots_length - active_slide_number - 1;
    }

    function active_slider_dots(e) {

        if (e == 0) {
    var active_slide_position = parseInt(active_slide[active_slide_number - 1].dataset.index) - 1;
            if (active_slide_position < 0) {
      active_slide_position = slider_item.length - 1;
    }

    let centerIndex = active_slide_position;
    let centerFlag = true;
            for (var k = 0; k < slider_item.length; k++) {

                if (slider_item[k].classList.contains('active')) {
          slider_item[k].classList.remove('active');
        }
                if (slider_item[k].classList.contains('center')) {
          slider_item[k].classList.remove('center');
        }
                if (!center_slide_scale && active_slide_number < 2 && slider_dots[k].classList.contains('active')) {
          slider_dots[k].classList.remove('active');
          }
          
                if (k == active_slide_position) {
                    for (var j = 0; j < active_slide_number; j++) {
                        if (k - active_slide_number + 1 >= 0) {
            counter = k - j; 
                        } else {
            counter = slider_item.length - j - 1; 
          }
        slider_item[counter].classList.add('active');
                        if (!center_slide_scale && active_slide_number < 2) {
        slider_dots[counter].classList.add('active');
        }
                        if (active_slide_number > 1 && active_slide_number % 2 !== 0 && centerFlag) {
          centerIndex = Math.floor(active_slide_number / 2);
          slider_item[counter - centerIndex].classList.add('center');
          centerFlag = false;
        }     
        }
      }     
    }

        } else if (e == 1) {
    var active_slide_position = parseInt(active_slide[0].dataset.index) + 1;
            if (active_slide_position > slider_item.length - 1) {
      active_slide_position = 0;
    }

    let centerIndex = active_slide_position;
    let centerFlag = true;
            for (var k = 0; k < slider_item.length; k++) {
        
                if (slider_item[k].classList.contains('active')) {
          slider_item[k].classList.remove('active');
        }
                if (slider_item[k].classList.contains('center')) {
          slider_item[k].classList.remove('center');
        }

                if (!center_slide_scale && active_slide_number < 2 && slider_dots[k].classList.contains('active')) {
          slider_dots[k].classList.remove('active');
          }
                    
                if (k == active_slide_position) {
                    for (var j = 0; j < active_slide_number; j++) {
                        if (k + active_slide_number - 1 < slider_item.length) {
            counter = k + j; 
                        } else {
            counter = j; 
          }

        slider_item[counter].classList.add('active');
                        if (!center_slide_scale && active_slide_number < 2) {
        slider_dots[counter].classList.add('active');
        }
                        if (active_slide_number > 1 && active_slide_number % 2 !== 0 && centerFlag) {
          centerIndex = Math.floor(active_slide_number / 2);
          slider_item[counter + centerIndex].classList.add('center');
          centerFlag = false;
        }  
        }
      }     
    }
        } else {
   
    var active_slide_position = s;
            if (!center_slide_scale && active_slide_number < 2) {
      // slider_dots.removeClass("active");
                for (var k = 0; k < slider_dots.length; k++) {
                    if (!center_slide_scale && active_slide_number < 2 && slider_dots[k] && slider_dots[k].classList.contains('active')) {
          slider_dots[k].classList.remove('active');
          }
      }
    slider_dots[active_slide_position].classList.add('active');
  } 
  }
  }
  active_slider_dots(e);
    if (e == 0) {
        translateXval = parseInt(xds) - parseInt(itemWidth * s);
        if (autoplay == false && infinite_loop == false) {
        $(el + ' ' + rightBtn).removeClass("over");
        }

        if (translateXval < 0 - itemWidth / 2) {
          translateXval = itemsCondition_lastSlide;
        } else if (translateXval <= itemWidth / 2) {
          translateXval = 0;
            if (autoplay == false && infinite_loop == false) {
          $(el + ' ' + leftBtn).addClass("over");
          }
        }
    } else if (e == 1) {
        translateXval = parseInt(xds) + parseInt(itemWidth * s);
        if (autoplay == false && infinite_loop == false) {
        $(el + ' ' + leftBtn).removeClass("over");
        }
        if (translateXval > itemsCondition) {
          translateXval = 0;
        } else if (translateXval > itemsCondition - itemWidth / 2) {
            translateXval = itemsCondition_lastSlide;
            if (autoplay == false && infinite_loop == false) {
            $(el + ' ' + rightBtn).addClass("over");
            }
        }
    } else {
      
      translateXval = parseInt(itemWidth * s);
      if (translateXval > itemsCondition - itemWidth / 2) {
        translateXval = itemsCondition_lastSlide;
        } else if (translateXval <= itemWidth / 2) {
        translateXval = 0;
      }
      
    }
    $(slide_container).css('transform', 'translateX(' + -translateXval + 'px)');
    if ($(slide_container).attr('autoplay_delay') == 'true') {
        setTimeout(function() {
            $(slide_container).attr('autoplay_delay', 'false');
        }, 5000);
    }
}

//It is used to get some elements from btn
function click(ell, ee) {
    var Parent = "#" + $(ee).parent().attr("id");
    var slide = $(Parent).attr("data-slide");
    var slide_container = $(Parent).children('.MultiCarousel-inner');
    slide_container.attr('autoplay_delay', 'true');
    ResCarousel(ell, Parent, slide, slide_container, dot = null);
}

/* slide number click function */  
function changeCurrent(curr, dot) {
var Parent = "#" + $(dot).parent().parent().attr("id");
var slide_container = $(Parent).children('.MultiCarousel-inner');
    var dots = $(dot).attr('class');
    dots = $('.' + dots)
    slide_container.attr('autoplay_delay', 'true');
    ResCarousel(e = null, Parent, curr, slide_container, dots);
}

/* slide number click function */
function product_changeCurrent(curr, dot) {
    var Parent = "#MultiCarousel_product1";
    var slide_container = $(Parent).children('.MultiCarousel-inner');
    var dots = $(dot).attr('data-class');
    dots = $('.' + dots)
    ResCarousel(e = null, Parent, curr, slide_container, dots);
}

/* slide autoplay function */  
function slideAutoplay(selector, duration) {
var newIndex = $(selector).attr("data-slide");
var slides_container = $(selector).children('.MultiCarousel-inner');
setInterval(function() {
        if (slides_container.attr('autoplay_delay') == 'false') {
            ResCarousel(1, selector, newIndex, slides_container, dot = null);
}
}, duration);
}

/* slide Drag function */  

function sliderDrag(event, slide_direction) {
  var Parent = "#" + $(event.target).parents('.MultiCarousel').attr('id');
    var slide = $(Parent).attr("data-slide");
    var slide_container = $(Parent).children('.MultiCarousel-inner');
    ResCarousel(slide_direction, Parent, slide, slide_container, dot = null);
}

var xDirection = "";
var yDirection = "";
// function to get the drag_direction
function getMouseDirection(e) {
    //Adding threshold for IOS anchor not working
    if (oldX - e.pageX > -20 && oldX - e.pageX < 20) {
      // e.target.closest('a')?.click();
    } else {
    //deal with the horizontal case
    if (oldX < e.pageX) {
        xDirection = "right";
        } else if (oldX > e.pageX) {
        xDirection = "left";
    }
 
    //deal with the vertical case
    if (oldY < e.pageY) {
        yDirection = "down";
    } else {
        yDirection = "up";
    }

        if (xDirection == "right") {
      sliderDrag(e, 0)
        } else if (xDirection == "left") {
      sliderDrag(e, 1)
     }
      
    oldX = e.pageX;
    oldY = e.pageY;
  }
    // console.log(xDirection + " " + yDirection);
}
var Slider_section_id = '';
var slider_Selector = document.querySelectorAll('.MultiCarousel:not(.MultiCarousel_load)');
for(let i = 0; i < slider_Selector.length; i++){
  Slider_section_id = slider_Selector[i].getAttribute('data-sliderId');
  var itemsDiv = '.MultiCarousel-inner.' + Slider_section_id;
  //  console.dir(document.querySelector(itemsDiv));
  var itemsMainDiv = ('.MultiCarousel.' + Slider_section_id);
  var selector = 'MultiCarousel_' + Slider_section_id;
  Shopify.custom_slider(itemsDiv, itemsMainDiv, selector);
}

// if(window.innerWidth <= 768){
var product_itemsDiv = '.product_media_section .MultiCarousel-inner';
var product_itemsMainDiv = ('.product_media_section .MultiCarousel');
var product_selector = 'MultiCarousel_product';
Shopify.product_slider(product_itemsDiv, product_itemsMainDiv, product_selector);
// }
if ($('.MultiCarousel_loaded.MultiCarousel-inner .product__media-item').length < 2) {
    $(product_itemsMainDiv).addClass('hide_dots');
} else {
    $(product_itemsMainDiv).removeClass('hide_dots');
}

$(document).ready(function(){
  // $('.mobile_hamburger_btn').on('click', function(e){
  //   e.preventDefault();
  //   if( $(this).attr('aria-expanded') == 'false' ){
  //     $(this).find('.mobile_hamburger_icon').attr('src', 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/hamburger-icon.png?v=1675762678');
  //   }else{
  //     // $(this).find('.mobile_hamburger_icon').attr('test', 'newtest');
  //     $(this).find('.mobile_hamburger_icon').attr('src', 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Chevron-Left-opt-2.png?v=1677134110');
  //     $(this).find('.mobile_hamburger_icon').css('height', 'auto');
  //   }
  //   return false;
  // })

  $('.mobile_hamburger_btn, #data-hamburger').on('click', function(e){
    e.preventDefault();
    if( $('.mobile_hamburger_btn').attr('aria-expanded') == 'false' ){
      $('.mobile_hamburger_btn').find('.mobile_hamburger_icon').attr('src', 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/hamburger-icon.png?v=1675762678');
      $('.collection_item_drawer').removeClass('open');
   $(".collection_item_drawer_inner").html('');
    }else{
      // $(this).find('.mobile_hamburger_icon').attr('test', 'newtest');
     $('.mobile_hamburger_btn').find('.mobile_hamburger_icon').attr('src', 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/close.svg?v=1683022560');
      $('.mobile_hamburger_btn').find('.mobile_hamburger_icon').css('height', 'auto');
    }
    return false;
  })

$('store-header').on('click', function(){
 $(this).find(".mobile_hamburger_btn").click();
 $(this).find(".mobile_hamburger_btn").attr('aria-expanded', 'false');
 $(this).find('.mobile_hamburger_icon').attr('src', 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/hamburger-icon.png?v=1675762678');
});

let screen_width = $("body").width();

if (screen_width > 767) {
  let height_three = $('.highlight-three .highlight-image .only-desktop').height();
  
  let img_height = (height_three / 2) - 10;
  $('.highlight-one .highlight-image, .highlight-two .highlight-image, .highlight-four .highlight-image, .highlight-five .highlight-image, .highlight-six .highlight-image').css("height", img_height+'px');
  $('.highlight-three .highlight-image').css("height", height_three+'px');
}

$('.collection_menu_item').on('click', function(e){
  e.preventDefault();
   var URL = $(this).children('a').attr('href');
   var collection_menu_navLink = $(this).text();
   $.ajax({
    url: URL + "?view=nav-subMenu",
    type: "GET",
    dataType: "html",
    success: function(e) {
      if($(e)[0].children.length > 0){
        $(".collection_item_drawer_inner").html(e);
        $('.collection_item-nav__link .menu_drawer_nav_link').html(collection_menu_navLink);
        $('.collection_item-nav_viewAll a').attr('href', URL);
        setTimeout(function(){
        $('.collection_item_drawer').addClass('open');
       },300); 
      }else{
       location.href = URL;
      }
    }
  });
});
$('.collection_item-nav__link').on('click', function(e){
  e.preventDefault();
   $('.collection_item_drawer').removeClass('open');
   setTimeout(function(){
   $(".collection_item_drawer_inner").html('');
  },1000); 
});

$('.sub_link_expand_container').click(function(){
$('.collection_menu_item.hide').toggle(500);
$(this).hasClass('expand') ? ($(this).children('.view-all').text('Expand Less'), $(this).removeClass('expand')) : ($(this).children('.view-all').text('Expand More'), $(this).addClass('expand'));
});
});

// Code to hide Category Filter if there is only 1 category inside it
// if($('button[aria-controls="facet-filter-filter.p.m.custom.category"]').siblings('.collapsible').find('.checkbox-container').length === 1) {
//   $('button[aria-controls="facet-filter-filter.p.m.custom.category"]').hide()
//   $('button[aria-controls="facet-filter-filter.p.m.custom.category"]').siblings('.collapsible').hide()
//   $('button[aria-controls="facet-filter-filter.p.m.custom.category"]').closest('.product-facet__filter-item').siblings('.product-facet__filter-item').find('button[aria-controls="facet-filter-filter.v.m.custom.sprinklr_color"]').attr('aria-expanded', true)
// }