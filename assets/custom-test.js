

Shopify.enable_namagoo = false;
Shopify.cart_item_count = function () {
  $.getJSON('/cart.js', function(cart){
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

Shopify.variantChange = function (e) {
  var product_form = event.target;
  if (!e.available) {
    console.log(e.available, 'show notify me');
    // $('.custom-notify-btn').show();
    $('.out_of_stock_msg').show();
    $('.pincode_checker_heading').hide();
    $('.pdp_right_section .payment_offers').hide();
    $('.product__info button#AddToCart').hide();
    product_form.querySelector('#AddToCart') ? product_form.querySelector('#AddToCart').classList.add('hide_cTA') : '';
    product_form.querySelector('.cutomized-btn') ? product_form.querySelector('.cutomized-btn').classList.add('hide_cTA') : '';
    product_form.querySelector('.button.custom-prebook') ? product_form.querySelector('.button.custom-prebook').classList.add('hide_cTA') : '';
    $("#gokwik-buy-now").addClass('hide_cTA');
    // $('quick-buy-drawer #AddToCart').hide();
    // $('quick-buy-popover #AddToCart').hide();
    product_form.querySelector('.custom_notifyMe_btn') ? product_form.querySelector('.custom_notifyMe_btn').classList.add('show_notifyMe') : '';
    $('.product-item__quick-form.quick-buy-notify-me #notifyMe_trigger').attr('data-variant-id', e.id);
    $('.d-lg-none.current-in-cart, .desktop.current-in-cart, .offer-callout-simple, .popup_wrapper').hide();
    $('.d-lg-none.restocking, .desktop.restocking').show();
    $('.pincode_checker_container').hide();
    if ($('#notifyMe_trigger.custom-notify-btn').length > 0) {
      $('#notifyMe_trigger.custom-notify-btn').attr('data-variant-id', e.id);
      var varient_url = $('#notifyMe_trigger.custom-notify-btn').attr('data-url');
      varient_url = varient_url.split('?')[0];
      varient_url = varient_url + "?variant=" + e.id;
      $('#notifyMe_trigger.custom-notify-btn').attr('data-url', varient_url);
    }
    setTimeout(() => {
      $('.flash-sale-lable').hide()
    }, 10)

  } else {
    console.log(e.available, 'hide notify me');
    // $('.custom-notify-btn').hide();
    $('.out_of_stock_msg').hide();
    $('.pincode_checker_heading').show();
    $('.product__info .product-form__add-button').show();
    $('.pdp_right_section .payment_offers').show();
    $("#gokwik-buy-now").removeClass('hide_cTA');
    product_form.querySelector('#AddToCart') ? product_form.querySelector('#AddToCart').classList.remove('hide_cTA') : '';
    product_form.querySelector('.cutomized-btn') ? product_form.querySelector('.cutomized-btn').classList.remove('hide_cTA') : '';
    product_form.querySelector('.button.custom-prebook') ? product_form.querySelector('.button.custom-prebook').classList.remove('hide_cTA') : '';
    // $('quick-buy-drawer #AddToCart').show();
    // $('quick-buy-popover #AddToCart').show();
    product_form.querySelector('.custom_notifyMe_btn') ? product_form.querySelector('.custom_notifyMe_btn').classList.remove('show_notifyMe') : '';
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
  $('.pdp-btn-price').remove();
  //let compare_price =  ( ${e.price / 100} *100 ) / ${e.compare_at_price / 100} ;

  let regular_price = e.compare_at_price / 100;
  let sale_price = e.price / 100;
  let discount_percentage;

  if (regular_price > sale_price) {
    discount_percentage = Math.round(((regular_price - sale_price) / regular_price) * 100) + '% Off';
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
<span class="add_to_cart_btn">Add to cart</span>
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
<span class="add_to_cart_btn">Pre-order</span>
</span>
<span class="pdp-btn-price custom_price_wrapper">
<span class="inclusive_text_content">Inclusive of all Taxes</span>
<span class="mobile_atc_btn">
  <span class="mobile_atc_price">₹${e.price / 100}</span>
  <span class="saved_price">${discount_percentage}</span>
</span>
</span>`);
  //  console.log(e);

  function swatches_change(varient_swatches_input) {
    for (let i = 0; i < varient_swatches_input.length; i++) {

      if (varient_swatches_input[i].checked) {
        $.ajax({
          url: location.pathname + "?variant=" + e.id + "&section_id=main-product",
          type: "GET",
          dataType: "html",
          success: function (e) {
            var product_media = $(e).find('product-media').html();
            $("product-media").html(product_media);
            setTimeout(function () {
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
              $('button.product__thumbnail-item.hidden-pocket').hover(function () {
                $(this).trigger('click');
              });
            }, 500);
          }
        })


      }
    }
  }
  let varient_swatches_input = document.querySelectorAll('.variant-swatch input');
  swatches_change(varient_swatches_input);
  let color_swatches_input = document.querySelectorAll('.color-swatch input');
  swatches_change(color_swatches_input)

  let home_pod_price = document.querySelector('.custom-product-of-the-day-price .current_price');
  if (home_pod_price) {
    let custom_price = '';
    let offerVariantdata = sessionStorage.getItem('variantQtys');
    let OfferProperty = [];
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
    if (varient_pod_unit > 0 && OfferProperty == 'true') {
      custom_price = parseInt(home_pod_price.dataset.pod)
    } else {
      custom_price = e.price / 100;
    }

    home_pod_price.innerHTML = '₹ ' + custom_price;
  }
}

// Creating cleverTap push event
function createCleverTapEvent( event_name, event_data ){
  if( event_name != '' && event_data != '' ){
    clevertap.event.push( event_name, event_data );
  }
}

// Creating cleverTap push event
function createCleverTapEvent( event_name, event_data ){
  if( event_name != '' && event_data != '' ){
    clevertap.event.push( event_name, event_data );
    // console.log(clevertap.getCleverTapID());
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

// # info: Collection Filters Code
Shopify.accordion = function(tablinks) {
  for (i = 0; i < tablinks.length; i++) {
      if (tablinks[i].hasAttribute("open")) {
          tablinks[i].removeAttribute("open");
          tablinks[i].previousElementSibling.setAttribute('aria-expanded', 'false');
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
      fliterBaseUrl = fliterBaseUrl.replaceAll(',', '&')
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

Shopify.collectionFilter = function(filterLoad) {

  let details = document.querySelectorAll("#facet-filters-form collapsible-content");
  let summary = $('#facet-filters-form .collapsible-toggle');

  summary.click(function() {
      Shopify.accordion(details);
      $(this).attr('aria-expanded', 'true');
      $(this).siblings('collapsible-content').attr('open', 'true');
  });

  preserveQuery();

  let sortItems = document.querySelectorAll('.price-tag-filter .tag');
  for (let i = 0; i < sortItems.length; i++) {
      sortItems[i].addEventListener('click', function(e) {
          preserveQuery();
          Shopify.queryParams['filter.v.price.gte'] = e.target.attributes['data-min'].value;
          Shopify.queryParams['filter.v.price.lte'] = e.target.attributes['data-max'].value;
          let searchParams = new URLSearchParams(Shopify.queryParams).toString();
          if (Shopify.fliterUrl) {
              searchParams = `${Shopify.fliterUrl}&${searchParams}`
          }
          triggerEvent(this, "facet:criteria-changed", {
              url: `${window.location.pathname}?${searchParams}`
          });

      })
  }
  if (filterLoad) {
      Shopify.accordion(details);
      if (summary[0] != undefined) {
          summary[0].setAttribute('aria-expanded', 'true');
          summary[0].nextElementSibling.setAttribute('open', 'true');
      }
  }
}

let collectionFilterLoad = true;
Shopify.collectionFilter(collectionFilterLoad);

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
Shopify.custom_otp_login = function () {
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
    if ($('#otp-mobile-number').val().length > 0) {
      $('.otp-login-btn').addClass('active');
    } else ($('.otp-login-btn').removeClass('active'));
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
    if (remaining >= 0 && timerOn) {
      setTimeout(function () {
        timerOn = sessionStorage.getItem('timerOn');
        timerOn = JSON.parse(timerOn);
        timer(remaining, timerOn);
      }, 1000);
      return;
    }

    if (!timerOn) {
      // Do validate stuff here
      return;
    }

    // Do timeout stuff here
    $('.resend-timer').hide();
    $('.resend-text').show();
    $('.resend-btn').show();
  }

  function TimerFunction() {
    timerOn = true;
    sessionStorage.setItem('timerOn', timerOn);
    $('.resend-timer').show();
    $('.resend-text').hide();
    $('.resend-btn').hide();
    $('.otp-login-body-container').removeClass('login_error');
    $('#OTPInput input').val('');
    timer(60, timerOn);
  }

  function countdown(timeleft, url) {
    var timeleft = timeleft;
    var downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
        sessionStorage.setItem('login', 'false');
        location.href = url;
      } else {
        if(document.getElementById("countdown") != null){
          document.getElementById("countdown").innerHTML = timeleft;
        }
      }
      timeleft -= 1;
    }, 1000);
  }

  function emailMask(email) {
    var maskedEmail = email.replace(/([^@\.])/g, "*").split('');
    var previous = "";
    for (i = 0; i < maskedEmail.length; i++) {
      if (i <= 1 || previous == "." || previous == "@") {
        maskedEmail[i] = email[i];
      }
      previous = email[i];
    }
    return maskedEmail.join('');
  }

  var customer_container = document.querySelector('.customer-login-section.customer--section');
  function inputSubmit(input) {
    if (input) {
      input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          // debugger
          if (customer_container.hasAttribute('otp_login_screen')) {
            document.querySelector('.otp-login-btn').click();
          }
          else if (customer_container.hasAttribute('otp_send')) {
            document.querySelector('.otp-login-confirm-btn').click();
          }
          else {
            //  console.log('prevint defaunt reload');
            event.preventDefault();
          }
        }
      });
    }
  }

  function signup_window(session_id) {
    $('.customer-login-section').attr('new_customer', 'true');
    $('.mobile-login-otp_heading h2').html('<b>Continue with Email ID</b>');
    $('.mobile-login-otp_heading span').html('Please enter your Name & Email ID to continue');
    $('.customer-login-section').removeAttr('multi_email');
    $('.otp-login-message h3').html('Continue with Email');
    $('.otp-timer-container').hide();
    $('.otp-login-error').html('');
    $('.otp-login-submit-btn').click(function () {
      let full_name = $('.otp-fullName #full_name').val();
      let email = $('.otp-email #email').val();
      let phone = $('#otp-mobile-number').val();
      let register_url = sessionStorage.getItem('login_location');
      sessionStorage.setItem('selected_email', email);
      otpSignUp(full_name, email, phone, session_id, register_url);
    })
  }

  function verifyemail(session_id, otp, url) {
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
      if (response.code == 200 && response.message == 'login URL sent') {
        $('.customer-login-section.customer--section').hide();
        var notifyMeSuccessContainer = $('.notifyMe_popup__main_container .oto-login-success-container');
        if(notifyMeSuccessContainer.length > 0) {
          notifyMeSuccessContainer.html(`
          <div class="notifyMe_sucess_heading"><h2>We will inform you once the Product is back in stock!</h2><p>Meanwhile checkout our <b>other collections</b>.</p></div><div class="notifyMe_sucess_content"></div><div class="notifyMe_sucess_button"><button class="button button--secondary button--full" onclick="location.reload()">Continue</button></div>`);
        }
        $('.oto-login-success-container').show();
        localStorage.setItem('boatHead_input', response.Token);
        countdown(5, response.URL);
        $('.otp-login-body-container').removeClass('login_error');
      } else if (response.code == 422 && response.message == 'validation_error') {
        $('.otp-login-error').html('Something went wrong please try again.');
        $('.otp-login-body-container').addClass('login_error');
      } else if (response.code == 401 || response.code == 429) {
        $('.otp-login-error').html(response.message);
        $('.otp-login-body-container').addClass('login_error'); otp - login - error
      } else if (response.code == 406) {
        $('.otp-login-error').html('Otp expired.');
        $('.otp-login-body-container').addClass('login_error');
      } else {
        $('.otp-login-error').html('Something went wrong please try again.');
        $('.otp-login-body-container').addClass('login_error');
      }
    });
  }

  function emailResend(email, session_id) {
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
      if (response.code == 200) {

      } else if (response.code == 429) {
        $('.otp-login-error').html(response.message);
      } else {
        $('.otp-login-error').html('Something went wrong please try again.');
      }
    });
  }

  function selectEmail(email, session_id, url) {
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
        "email": email,
        "url": url
      }),
    };
    $.ajax(settings).done(function (response) {
      // console.log(response);
      if (response.code == 200) {
        $('.otp-login-error').html('');
        if (response.message == 'Email exists with different number  , OTP sent to email') {
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
          sessionStorage.setItem('login_session_id', response.session_id);

        } else {
          $('.customer-login-section.customer--section').hide();
          var notifyMeSuccessContainer = $('.notifyMe_popup__main_container .oto-login-success-container');
          if(notifyMeSuccessContainer.length > 0) {
            notifyMeSuccessContainer.html(`
            <div class="notifyMe_sucess_heading"><h2>We will inform you once the Product is back in stock!</h2><p>Meanwhile checkout our <b>other collections</b>.</p></div><div class="notifyMe_sucess_content"></div><div class="notifyMe_sucess_button"><button class="button button--secondary button--full" onclick="location.reload()">Continue</button></div>`);
          }
          $('.oto-login-success-container').show();
          localStorage.setItem('boatHead_input', response.Token);
          countdown(5, response.URL);
        }
      } else if (response.code == 422 && response.message == 'validation_error') {
        // $('.otp-login-error').html('Something went wrong please try again.');
      } else if (response.code == 401 || response.code == 404 || response.code == 429) {
        $('.otp-login-error').html(response.message);
      }
    });
  }

  function otpSignUp(full_name, email, phone, session_id, url) {
    let base_Url = 'https://otp.boat-lifestyle.com/signup';
    var settings = {
      "url": base_Url,
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        "full_name": full_name,
        "email": email,
        "phone": phone,
        "session_id": session_id,
        "url": url
      }),
    };
    $.ajax(settings).done(function (response) {
      // console.log(response);
      if (response.code == 200) {
        $('.otp-login-error').html('');
        if (response.message == 'Email exists with different number  , OTP sent to email') {
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
          sessionStorage.setItem('login_session_id', response.session_id);
        } else {
          $('.customer-login-section.customer--section').hide();
          var notifyMeSuccessContainer = $('.notifyMe_popup__main_container .oto-login-success-container');
          if(notifyMeSuccessContainer.length > 0) {
            notifyMeSuccessContainer.html(`
            <div class="notifyMe_sucess_heading"><h2>We will inform you once the Product is back in stock!</h2><p>Meanwhile checkout our <b>other collections</b>.</p></div><div class="notifyMe_sucess_content"></div><div class="notifyMe_sucess_button"><button class="button button--secondary button--full" onclick="location.reload()">Continue</button></div>`);
          }
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
      } else if (response.code == 422 && response.message == 'validation_error') {
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
      } else if (response.code == 401) {
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
        $('.otp-login-submit-btn[return_to_login]').click(function (e) {
          e.preventDefault();
          location.reload();
        })
      } else if (response.code == 429) {
        $('.otp-login-error').html(response.message);
      }else{
        $('.otp-login-error').html('Something went wrong please try again.');
      }
    });
  }

  function verifyotp(session_id, otp, url) {
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
      if (response.code == 200 && response.message == 'login URL sent') {
        sessionStorage.setItem('timerOn', false);
        $('.customer-login-section.customer--section').hide();
        var notifyMeSuccessContainer = $('.notifyMe_popup__main_container .oto-login-success-container');
        if(notifyMeSuccessContainer.length > 0) {
          notifyMeSuccessContainer.html(`
          <div class="notifyMe_sucess_heading"><h2>We will inform you once the Product is back in stock!</h2><p>Meanwhile checkout our <b>other collections</b>.</p></div><div class="notifyMe_sucess_content"></div><div class="notifyMe_sucess_button"><button class="button button--secondary button--full" onclick="location.reload()">Continue</button></div>`);
        }
        $('.oto-login-success-container').show();
        $('.otp-login-body-container').removeClass('login_error');
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

      } else if (response.code == 422 && response.message == 'validation_error') {
        $('.otp-login-error').html('Something went wrong please try again.');
        $('.otp-login-body-container').addClass('login_error');
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
      } else if (response.code == 401 && response.message == 'Incorrect OTP') {
        $('.otp-login-error').html(response.message);
        $('.otp-login-body-container').addClass('login_error');
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
      } else if (response.code == 401 && response.message == 'Customer does not exists , consider Sign up') {
        sessionStorage.setItem('timerOn', false);
        $('.otp-login-error').html(response.message);
        $('.otp-login-body-container').addClass('login_error');
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
      } else if (response.code == 406) {
        $('.otp-login-error').html('OTP expired.');
        $('.otp-login-body-container').addClass('login_error');
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
      } else if (response.code == 300 && response.message == 'emailId list') {
        sessionStorage.setItem('timerOn', false);
        $('.otp-login-message h3').html('Please select your Primary email id');
        $('.customer-login-section').attr('multi_email', 'true');
        $('.otp-timer-container').hide();
        $('.otp-login-error').html('');
        let emailList = response.emailList;
        let emailListHtml = '', i;
        let emailListContainer = document.querySelector('.email-list-container');
        if (emailList.length > 0) {
          $('.mobile-login-otp_heading h2').html('<b>Select your primary Email ID</b>');
          $('.mobile-login-otp_heading span').html('Please select one of the below to continue');
          for (let i = 0; i < emailList.length; i++) {
            emailListHtml = emailListHtml + '<span data-value="' + emailList[i] + '">' + emailList[i] + '</span>'
          }
          emailListContainer.innerHTML = emailListHtml + '<span class="redirect_to_signup">Continue with Email</span>';
          let emailSelector = $('.email-list-container span');
          let selectedEmail = '';
          console.dir(emailSelector[0]);
          selectedEmail = emailSelector[0].dataset.value;
          sessionStorage.setItem('selected_email', selectedEmail);
          emailSelector[0].setAttribute('selected', 'true');
          emailSelector.click(function (event) {
            selectedEmail = event.target.dataset.value;
            for (i = 0; i < emailSelector.length; i++) {
              if (emailSelector[i].hasAttribute("selected")) {
                emailSelector[i].removeAttribute("selected");
              }
            }
            sessionStorage.setItem('selected_email', selectedEmail);
            $(this).attr('selected', 'true');
          });

          $('.redirect_to_signup').click(function () {
            signup_window(session_id);
          });
          let selectedEmail_url = sessionStorage.getItem('login_location');
          $('.customer-login-section[multi_email] .otp-login-submit-btn').click(function () {
            selectEmail(selectedEmail, session_id, selectedEmail_url);
          });
        } else {
          signup_window(session_id);
        }
      } else if (response.code == 429) {
        $('.otp-login-error').html(response.message);
        $('.otp-login-body-container').addClass('login_error');
      } else {
        $('.otp-login-error').html('Something went wrong please try again.');
        $('.otp-login-body-container').addClass('login_error');
        clevertap.event.push('Failed Login', {
          "Error Message": 'Something went wrong please try again.'
        })
      }
    });
  }

  function otpLogin(phone) {
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
      if (response.code == 200 && response.message == 'OTP sent') {
        $('.customer-login-section').attr('otp_send', 'true');
        $('.customer-login-section').removeAttr('otp_login_screen');
        $('#otp-mobile-number').attr('disabled', true)
        $('.otp-login-error').html('');
        TimerFunction();
        sessionStorage.setItem('login_session_id', response.session_id)
      } else if (response.code == 422 && response.message == 'validation_error') {
        $('.otp-login-error').html('The phone field is required.');
      } else if (response.code == 403) {
        $('.otp-login-error').html(response.message);
      } else if (response.code == 429) {
        $('.otp-login-error').html(response.message);
      }
    });
  }

  $('.otp-login-btn, .login-resend-btn').click(function () {
    if (!$('#resend__otp').hasClass('email-resend-btn')) {
      var phone = $('#otp-mobile-number').val();
      if (phone.length < 1) {
        $('.otp-login-error').html('The phone field is required.');
      } else if (phone.length < 10) {
        $('.otp-login-error').html('Invalid phone number.');
      } else {
        // $('.otp-login-btn').attr('disabled', true);
        otpLogin(phone);
      }
    }
  })

  $(document).on('click', '#resend__otp', function () {
    TimerFunction();
  });

  $('.mobile-login-edit-icon').click(function () {
    $('.otp-login-error').html('');
    $('.otp-login-btn').attr('disabled', false);
    $('.customer--section').removeAttr('otp_send');
    $('.mobile-otp-inout input').val('');
    $('#otp-mobile-number').attr('disabled', false)
  });
  if (!sessionStorage.login_location && sessionStorage.login_location !== '') {
    sessionStorage.setItem('login_location', 'https://www.boat-lifestyle.com/');
  }


  document.querySelector('.custom-account-icon').addEventListener("click", function myFunction(event) {
    event.preventDefault();
    sessionStorage.setItem('login_location', window.location.href);
  });

  let mobile_account = document.querySelectorAll('.mobile-custom-account-icon');
  for (let i = 0; i < mobile_account.length; i++) {
    mobile_account[i].addEventListener("click", function myFunction(event) {
      event.preventDefault();
      sessionStorage.setItem('login_location', window.location.href);
      if(document.querySelectorAll('.login-popup-trigger').length == 0){
      var account_url = this.firstElementChild.getAttribute('href');
      window.location = account_url;
    }
    });
  }

  $('.otp-login-confirm-btn').click(function () {
    if (!$('.otp-login-confirm-btn').hasClass('email_varify')) {
      let session_id = sessionStorage.getItem('login_session_id');
      // Get the values of all the inputs
      var inputs = document.querySelectorAll('#OTPInput > *[id]');
      var compiledOtp = '';
      for (let i = 0; i < inputs.length; i++) {
        compiledOtp += inputs[i].value;
      }
      document.getElementById('otp').value = compiledOtp;
      let url = sessionStorage.getItem('login_location');
      if (session_id && session_id !== '' && session_id !== 'undefined' && url && compiledOtp !== '') {
        verifyotp(session_id, compiledOtp, url);
      }
    } else {
      let session_id = sessionStorage.getItem('login_session_id');
      let mobile_number = $('.mobile-login-input input').val()
      let otp = $('.mobile-otp-inout input').val();
      let url = sessionStorage.getItem('login_location');
      if (session_id && session_id !== '' && session_id !== 'undefined' && url && otp !== '') {
        verifyemail(session_id, otp, url);
      } else if (otp == '') {
        $('.otp-login-error').html('OTP is required');
      }
    }
  })

  $('#resend__otp').click(function () {
    if ($(this).hasClass('email-resend-btn')) {
      let session_id = sessionStorage.getItem('login_session_id');
      let email = $('#emailId').val();
      if (session_id && session_id !== '' && session_id !== 'undefined' && email) {
        emailResend(email, session_id);
      }
    }
  })

  var input_login = document.querySelector('.mobile-login-input input');
  inputSubmit(input_login);
  var otp_login = document.querySelector('.mobile-otp-inout input');
  inputSubmit(otp_login);

  $('.mobile-otp-inout').click(function () {
    if ($('.otp-login-error').html() !== '') {
      $('.otp-login-error').html('');
      $(this).children('input').val('');
    }
  });

};


$(document).on("click", ".custom-offer-add-to-cart", function (e) {
  e.preventDefault();
  let offerForm = $(this).parents("form")[0];
  let offerId = offerForm.querySelector('[name="id"]').value;
  let offerVariantData = sessionStorage.getItem('variantQtys');
  let OfferProperty = [];
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
  if (varient_pod_unit > 0) {
    podData = { 'quantity': 1, 'id': offerId, 'properties': { '_POD': OfferProperty } }
  } else {
    podData = { 'quantity': 1, 'id': offerId }
  }
  if ($(this).hasClass("algolia_pod_offer")) {
    $.ajax({
      url: "/cart/add.js",
      dataType: "json",
      cache: !1,
      type: "post",
      data: podData,
      success: function (e) {
        document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", {
          bubbles: !0
        }));
        setTimeout(function () {
          Shopify.cart_item_count();
        }, 1500)
        document.getElementById("mini-cart").open = !0, document.querySelector("body").classList.add("noScroll"), $(".search-clear-icon").css('display', 'flex')
      }
    })
  } else {
    $.ajax({
      url: "/cart/add.js",
      dataType: "json",
      cache: !1,
      type: "post",
      data: podData,
      success: function (e) {
        document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", {
          bubbles: !0
        }));
        setTimeout(function () {
          Shopify.cart_item_count();
        }, 1500)
      }
    })
  }
});

Shopify.loginInput = function ($otp_length) {
  // FOR LOGIN OTP INPUT FIELDS
  var OTP_element = document.getElementById('OTPInput');
  if (OTP_element != null) {
    for (let i = 0; i < $otp_length; i++) {
      let inputField = document.createElement('input'); // Creates a new input element
      inputField.id = 'otp-field' + i; // Don't remove
      inputField.maxLength = 1; // Sets individual field length to 1 char
      OTP_element.appendChild(inputField); // Adds the input field to the parent div (OTPInput)
    }

    /*  This is for switching back and forth the input box for user experience */
    const inputs = document.querySelectorAll('#OTPInput > *[id]');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('keydown', function (event) {
        if (event.key === "Backspace") {
          if (inputs[i].value == '') {
            if (i != 0) {
              inputs[i - 1].focus();
            }
          } else {
            inputs[i].value = '';
          }
        } else if (event.key === "ArrowLeft" && i !== 0) {
          inputs[i - 1].focus();
        } else if (event.key === "ArrowRight" && i !== inputs.length - 1) {
          inputs[i + 1].focus();
        } else if (event.key != "ArrowLeft" && event.key != "ArrowRight") {
          inputs[i].setAttribute("type", "text");
          inputs[i].value = ''; // Bug Fix: allow user to change a random otp digit after pressing it
        }
      });
      inputs[i].addEventListener('input', function () {
        inputs[i].value = inputs[i].value.toUpperCase(); // Converts to Upper case. Remove .toUpperCase() if conversion isnt required.
        if (i === inputs.length - 1 && inputs[i].value !== '') {
          $('.otp-login-confirm-btn').addClass('active');
          return true;
        } else if (inputs[i].value !== '') {
          inputs[i + 1].focus();
          $('.otp-login-confirm-btn').removeClass('active');
          $('.otp-login-body-container').removeClass('login_error');
        }
      });
    }
  }
}

Shopify.loginInput(6);
Shopify.custom_otp_login();

Shopify.notifyMe = function (btn) {
  event.preventDefault();
  let notifyMe_popup_Button = btn;
  var quick_popup_desktop = document.querySelectorAll('quick-buy-drawer');
  var quick_popup_mobile = document.querySelectorAll('quick-buy-popover');
  function quick_add_popup (quick_popup){
    if(quick_popup != null) {
      for (let i = 0; i < quick_popup.length; i++) {
        quick_popup[i].open=!1
      }
    }
  }
  quick_add_popup(quick_popup_desktop);
  quick_add_popup(quick_popup_mobile);
  document.querySelector('body').classList.add('overflow-hidden');
  var popupCloseButton = event.target;
  document.addEventListener("click", function (event) {
    var popupContainer = document.querySelector(".notifyMe_popup_container");
    // Check if the click occurred outside the popup container and not on the close button
    if (popupContainer != null && !popupContainer.contains(event.target) && event.target !== popupCloseButton) {
        closePopup();
    }
  });

function closePopup() {
  $('.notifyMe_popup__main_container').removeClass('show');
  $('body').removeClass('overflow-hidden');
  document.querySelector('.notifyMe_popup__main_container').innerHTML = '';
}
  var dataSet = btn.dataset;
  var varientID = dataSet["variantId"];
  varientID = parseInt(varientID);
  var varientSelector = '';
  var varientUrl = dataSet["url"];
  varientUrl = varientUrl + "?variant=" + varientID + "&view=notifyMe-popup";
  $.ajax({
    url: varientUrl,
    type: "GET",
    dataType: "html",
    success: function (e) {
      $(".notifyMe_popup__main_container").html(e);
      Shopify.loginInput(6);
      Shopify.custom_otp_login();
      const notifyMe_tempDiv = document.createElement('div');
      notifyMe_tempDiv.innerHTML = e;

      $('#notifyMe_submit_btn').click(function () {
        event.preventDefault();
        var varient_id = $('#variants_select').val();
        var mobile_number = $('#notifyMe_mobile_number').val();
        var title = $('.notifyMe_popup_title').text().trim() + " - " + $('#variants_select_title').val();
        var notifyMe_arr = [];
        var notifyMe_data = '';
        var notifyMe_varient = { "id": varient_id, "mobile_number": mobile_number, "title": title };
        if (mobile_number.length < 1) {
          $('#message_holder').html('Phone number is required.');
        } else if (mobile_number.length < 10) {
          $('#message_holder').html('Invalid phone number.');
        } else {
          $('#message_holder').html('');
          function isJson(str) {
            try {
              JSON.parse(str);
            } catch (e) {
              return false;
            }
            return true;
          }
          // CleverTap event for notify me
          clevertap.event.push("Notify Me When Available", notifyMe_varient);

          if (isJson(localStorage.notifyMe_data)) {
            notifyMe_data = JSON.parse(localStorage.notifyMe_data);
            notifyMe_data = notifyMe_data.filter(obj => obj.id !== varient_id);
            notifyMe_arr = notifyMe_data;
          }
          notifyMe_arr.push(notifyMe_varient);
          notifyMe_arr = JSON.stringify(notifyMe_arr);
          localStorage.setItem('notifyMe_data', notifyMe_arr);
          document.querySelector('.completed_message').style.display = 'block';
          var custom_popup_body = this.closest('.custom_popup');
          setTimeout(function () {
            custom_popup_body.classList.remove('show');
            document.querySelector('body').classList.remove('overflow-hidden');
            $('#mobile_number').val('');
            document.querySelector('.completed_message').removeAttribute('style');
          }, 3000);
        }
      });
      $('.variants_color_select').change(function () {
        var varientImage = $(this).attr('data-image');
        var varientId = $(this).attr('data-id');
        var variantTitle = $(this).attr('data-title');
        $('.notifyMe_popup_product_img img').attr('src', varientImage);
        $('.notifyMe_form-group input').val(varientId);
        $('#variants_select_title').val(variantTitle);
      });
    }
  })

  $('.notifyMe_popup__main_container').addClass('show');

}

$('#notifyMe_trigger').click(function (e) {
  e.preventDefault();
  sessionStorage.setItem('login_location', window.location.href);
});
//Function to allow only numbers
function _isNumberCheck(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57 || evt.target.value.length > 9))
    return false;
  return true;
}

// Not allow 0 as first digit on input
$(document).on("input", "#mobile_number", (e) => {
  $(e.target).val($(e.target).val().replace(/^[^1-9][^0-9]*$/, ''));
  $('#message_holder').html('');
})
$(document).on("keypress", "#mobile_number", (e) => {
  return _isNumberCheck(e);
})

$('.login, .login-popup-trigger').click(function () {
  event.preventDefault();
  var popupCloseButton = event.target;
  document.addEventListener("click", function (event) {
    var popupContainer = document.querySelector(".notifyMe_popup_container");
    // Check if the click occurred outside the popup container and not on the close button
    if (popupContainer != null && !popupContainer.contains(event.target) && event.target !== popupCloseButton) {
        closePopup();
    }
  });

function closePopup() {
  $('.login_popup_main_container').removeClass('show');
  $('body').removeClass('overflow-hidden');
  document.querySelector('.login_popup_main_container').innerHTML = '';
}

  $.ajax({
    url: "/account/login?view=otp-login-popup",
    type: "GET",
    dataType: "html",
    success: function (e) {
      document.querySelector('body').classList.add('overflow-hidden');
      $(".login_popup_main_container").html(e);
      Shopify.loginInput(6);
      Shopify.custom_otp_login();
    }
  });
  $('.login_popup_main_container').addClass('show');
});