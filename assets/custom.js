

Shopify.enable_namagoo = false;


var userSource="";function quickATC(){let e=$(".quick-buy-product__info").find(".product-item-meta__title").text(),t=$(".quick-buy-product__info").find(".price--highlight").text().split("price")[1];var i=$(".color-swatch__radio:checked").val();clevertap.event.push("Added to Cart",{"Product Name":e+" - "+i,Amount:t,Quantity:1,source:"Quick View Drawer",userSource:userSource}),clevertap.profile.push({Site:{"A2C Product Name":e+" - "+i,"A2C Amount":t,"A2C Quantity":1}}),setTimeout(function(){$(".drawer--quick-buy").attr("open",!1),$(".header__cart").attr("aria-expanded",!0)},1200)}userSource=navigator.userAgent.includes("Mobile")?"Mobile":navigator.userAgent.includes("iPad")?"Tablet":"Desktop",$(".featured-collections").on("click",function(){let e=$(this).siblings(".section__header").find('.tabs-nav__item[aria-expanded="true"]').text();clevertap.event.push("Homepage Cards section clicked",{userSource:userSource,"secttion Title":e})}),$(".product-item__quick-form").on("click",function(){let e=$(this).parents(".product-item__image-wrapper").siblings(".product-item__info").find(".product-item-meta__title").text(),t=$(this).parents(".product-item__image-wrapper").siblings(".product-item__info").find(".price--highlight").text().split("price")[1];clevertap.event.push("Quick Buy Clicked",{"Product Title":e,Price:t,userSource:userSource})}),$(".gokwik-checkout").click(function(){clevertap.event.push("GoKwik Button Clicked")}),$("#mini-cart-form").submit(function(){var e=$(".cart-total").val(),t="",i=[];$("#mini-cart .line-item").each(function(e,n){var o=$(this).find(".product-item-meta__title").text(),r=$(this).find(".product-item-meta__title").attr("data-product_id"),c=$(this).find(".price--highlight").text().split("price")[1],a=$(this).find(".product-item-meta__title").attr("data-product_type"),l=$(this).find(".quantity-selector__input").val();t=0==e?o:t+","+o,i.push({item_name:o,item_id:r,price:c,item_category:a,quantity:l})}),clevertap.event.push("Checkout Button Clicked",{Amount:e,"Product Name":t}),dataLayer.push({ecommerce:null}),dataLayer.push({event:"begin_checkout",ecommerce:{items:i}})}),$(".footer__item-content .linklist__item").each(function(){$(this).on("click",function(){let e=$(this).text().trim();clevertap.event.push("Footer Menu Item Clicked",{Item:e,Source:"Footer"})})}),$(".header__inline-navigation .header__linklist-item").each(function(){$(this).on("click",function(){let e=$(this).text().trim();clevertap.event.push("Header Menu Item Clicked",{Item:e,Source:"Header Desktop"})})}),$(".header__inline-navigation").click(function(){clevertap.event.push("Hamburger Menu Clicked")}),$('a[aria-controls="mini-cart"]').click(function(){clevertap.event.push("Slider Cart Opened",{Source:"Header"})}),window.matchMedia("(max-width: 767px)").matches&&($(".footer__item-title").append('\n  <span class="expanded toggle">+</span>\n  <span class="collapsed visually-hidden toggle">-</span>\n  '),$(".footer__item--links").click(function(){$(this).find(".footer__item-content").slideToggle(),$(this).find("span.toggle").toggleClass("visually-hidden")})),$(".myDropdown .toggle-link").click(function(){$(".myDropdown .dropdown-menu").removeClass("visually-hidden")}),$(".myDropdown .close-popup").click(function(){$(".myDropdown .dropdown-menu").addClass("visually-hidden")}),$(document).click(function(e){e.stopPropagation(),0===$(".myDropdown").has(e.target).length&&$(".dropdown-menu").addClass("visually-hidden")}),$(".mobile-nav  .mobile-nav__item").each(function(){$(this).on("click",function(){let e=$(this).text().trim();clevertap.event.push("Header Menu Item Clicked",{Item:e,Source:"Header Mobile"})})});let currentURL=location.href,cartStr="/cart",cartHashStr="/#cart";-1!=currentURL.indexOf(cartStr)&&(location.href="https://www.boat-lifestyle.com/#cart"),-1!=currentURL.indexOf(cartHashStr)&&$(".header__cart").attr("aria-expanded",!0),
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
              $(".header__cart-count").html($("#mini-cart input.cart--count").val());
              $('.header__cart-count.header__cart-count--floating.bubble-count').text($("#mini-cart input.cart--count").val());
              cart_bubble();
          }, 1500)
        
      }
  })
});

window.addEventListener("load", function() {
  function e() {
      "false" == sessionStorage.getItem("lazyloaded_sections") && ($.ajax({
          url: "/pages/custom-homepage",
          type: "GET",
          dataType: "html",
          success: function(e) {
              let t = $(e).find("#index-lazyload_sections").html();
              $(".custom-lazyloaded-content").html(t);
              Shopify.homepageLazyload();
          }
      }), sessionStorage.setItem("lazyloaded_sections", "true"))
  }
  sessionStorage.setItem("lazyloaded_sections", "false"), document.addEventListener("touchmove", e, !0), document.addEventListener("scroll", e, !0)
});

function isIOSMobile() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent)
};

if (!isIOSMobile()) {
  let i = Notification.permission;

  function e() {
      if ("visible" !== document.visibilityState) {
          icon = "image-url";
          var i = new Notification("Title", {
              body: "Message to be displayed",
              icon
          });
          i.onclick = () => {
              i.close(), window.parent.focus()
          }
      }
  }

  function t() {
    Notification.requestPermission(function(i) {
      "granted" === i && (clevertap.profile.push({
        Site: {
          "Web Push": !0,
          "MSG-push": !0
        }
      }), e(), console.log("granted"))
    })
  }
  "granted" === i ? e() : t()
};

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
  $('.pdp-btn-price').remove()
  $("#AddToCart .loader-button__text").append(`<span class="pdp-btn-price">₹${e.price / 100}</span>`)
  // console.log(e);
  
function swatches_change(varient_swatches_input){
for (let i = 0; i < varient_swatches_input.length; i++) {
if(varient_swatches_input[i].checked){
  if(JSON.parse(varient_swatches_input[i].parentElement.dataset.varient_disabled)) {
      $('.custom-notify-btn').show();
      $('.product__info button#AddToCart').hide();
      $('#AddToCart').addClass('hide_cTA');
      $("#gokwik-buy-now").addClass('hide_cTA');
      $('quick-buy-drawer #AddToCart').hide();
      $('quick-buy-popover #AddToCart').hide();
      $('.product-item__quick-form.quick-buy-notify-me').show();
      $('.product-item__quick-form.quick-buy-notify-me .BIS_trigger').attr('data-variant-id',e.id);
      $('.d-lg-none.current-in-cart, .desktop.current-in-cart, .offer-callout-simple, .popup_wrapper').hide();
    $('.d-lg-none.restocking, .desktop.restocking').show();
    if($('#BIS_trigger.custom-notify-btn').length > 0){
      $('#BIS_trigger.custom-notify-btn').attr('data-variant-id',e.id);
    } 
      
  }else{
    $('.custom-notify-btn').hide();
    $('.product__info button#AddToCart').show();
    $("#gokwik-buy-now").removeClass('hide_cTA');
    $('#AddToCart').removeClass('hide_cTA');
    $('quick-buy-drawer #AddToCart').show();
    $('quick-buy-popover #AddToCart').show();
    $('.product-item__quick-form.quick-buy-notify-me').hide();
    $('.d-lg-none.current-in-cart, .desktop.current-in-cart, .offer-callout-simple, .popup_wrapper').show();
    $('.d-lg-none.restocking, .desktop.restocking').hide();
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


// Creating cleverTap push event
function createCleverTapEvent( event_name, event_data ){
  if( event_name != '' && event_data != '' ){
    clevertap.event.push( event_name, event_data );
  }
}




// Owl slider 
// Note : Need to add custom_slider_init class , section_id , carousel-js snippet and schema to activate owl carosal in a section

$("#homepage-carousel .custom_slider_init").on('initialized.owl.carousel', async () => {
  $("#homepage-carousel .owl-item img").each(function(){$(this).css({"width":"100%"});$(this).removeClass("ml-3") })
})


let section_id = '';
let sliderSelector = document.querySelectorAll('.custom_slider_init');
for (let i = 0; i < sliderSelector.length; i++) {
  section_id = sliderSelector[i].getAttribute('data-sliderId');
  let slider_section_id = '.custom_slider_init.' + section_id;
  $(slider_section_id).owlCarousel({
    loop: JSON.parse(sliderSelector[i].getAttribute('data-loop')),
    responsiveClass: JSON.parse(sliderSelector[i].getAttribute('data-responsiveClass')),
    autoplay: JSON.parse(sliderSelector[i].getAttribute('data-autoplay')),
    autoplayTimeout: JSON.parse(sliderSelector[i].getAttribute('data-autoplay-timeout')),
    autoplayHoverPause:true,
    stopOnHover: true,
    items: JSON.parse(sliderSelector[i].getAttribute('data-items')),
    slideBy: JSON.parse(sliderSelector[i].getAttribute('data-slideBy')),
    nav: true,
    dots: JSON.parse(sliderSelector[i].getAttribute('data-dots')),
    margin: JSON.parse(sliderSelector[i].getAttribute('data-margin')),
    center: JSON.parse(sliderSelector[i].getAttribute('data-center_slide')),
    responsive: {
        300: {
            items: JSON.parse(sliderSelector[i].getAttribute('data-responsive_Small_items')),
            dots: JSON.parse(sliderSelector[i].getAttribute('data-responsive_Small_dots')),
            rows: 2
        },
        1024: {
           items: JSON.parse(sliderSelector[i].getAttribute('data-responsive_mid_items')),
           rows: 2
        }
    },onInitialized: startProgressBar,onTranslate: resetProgressBar,onTranslated: startProgressBar
  }).on("dragged.owl.carousel", function(event) {
    $(slider_section_id).trigger('stop.owl.autoplay');
    $(slider_section_id).trigger('play.owl.autoplay');
    if(JSON.parse(sliderSelector[i].getAttribute('data-slideBy')) > 1){
      slide_item_on_drag(slider_section_id, event.relatedTarget['_drag']['direction'] )
    } 
  });


  $(slider_section_id+'.main_banner_slider').on('changed.owl.carousel', function(event) {
    
    let total_slides = $(this).find('.owl-dots button').length;
    $(this).find('.owl-dots button').each(function(index){
      if($(this).hasClass('active')){
        $(this).find('span').html(index + 1 + '/'+total_slides);
      }else{
        $(this).find('span').html();
      }
    })
    
    if(event.item.index == event.item.count - 1){
      var $carousel = $(slider_section_id);
      var owl = $carousel.data('owlCarousel');
      /* owl.init({ rtl: true }); */
      
      let slide_change_time = JSON.parse(sliderSelector[i].getAttribute('data-autoplay-timeout')) - 10;
      setInterval(function () {
        $(slider_section_id+'.main_banner_slider').trigger('owl.jumpTo', 3)
      }, slide_change_time);
    }
  });

  function reverseSlide(){
    let slide_change_time = JSON.parse(sliderSelector[i].getAttribute('data-autoplay-timeout')) - 10;
    setInterval(function () {
      $(slider_section_id+'.main_banner_slider .owl-dots button.active').prev().click();
    }, slide_change_time);
  }

  function slide_item_on_drag(section_id, drag_direction) {
    if( drag_direction == 'right' ){// $(section_id + ' .owl-dots .owl-dot.active').prev().click();
    }
    else if( drag_direction == 'left' ){$(section_id + ' .owl-dots .owl-dot.active').next().click();} } 
  function startProgressBar() {
    
    /* Code for showing number on active dot */

    let total_count = $('.main_banner_slider .owl-dots button').length;
    $('.main_banner_slider .owl-dots button').each(function(index){
      if($(this).hasClass('active')){
        $(this).find('span').html(index + 1 + '/'+total_count);
      }else{
        $(this).find('span').html();
      }
    })

    /* Code for progress bar */
    $(".slide-progress").css({width: "100%",transition: "width 5000ms"});
  
  }
  function resetProgressBar() {$(".slide-progress").css({width: 0,transition: "width 0s"});}
  function openVideoPopup(url){
    if(url != ''){
      jQuery('.banner_video_modal .video_container iframe').attr('src', url);
      jQuery(".banner_video_modal").modal('show');
    }else{
      return false;
    }
  }
}

 
Shopify.homepageLazyload = function(){
  $('.explore_now_slider').owlCarousel({
    loop: true,
    responsiveClass: true,
    autoplay:true,
    items: 6,
    nav: false,
    dots: false,
    responsive: {
      300: {
        items: 2.3,
        margin: 10
      },
      600: {
        items: 5.2,
        margin: 10
      },
      1000: {
        items: 6,
        loop: true,
        margin: 10
      }
    }
  })

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

// Press section
    $('.custom_press_slider').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      items: 1,
      slideBy: 1,
      nav: false,
      dots: true
    });

  $('.shopify-section shopify-section--press').on('click', function() {
    clevertap.event.push("In the Press section clicked", {"userSource": userSource});
  });
  $("button.press-list__logo-item.tap-area").hover(function() {
    $(this).trigger("click")
  });
  labelsPriority()
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

const slides = document.querySelectorAll('.carousel-inner .carousel--item');
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

$('.top-collections.top-2 .collection-block').each(function () {
  $(this).click(function () {
    var item = $(this).find('.collection').attr('data-item');

    var event = "Top Collections Clicked";

    var event_info = { "Item": stripHtml(item), "userSource": userSource };

    createCleverTapEvent( event, event_info );
  });
});


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

/* clevertap code for clicking razor pay ends here */

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
              $(".header__cart-count").html($("#mini-cart input.cart--count").val())
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
              $(".header__cart-count").html($("#mini-cart input.cart--count").val())
          }, 1500)
        }
    })
    }
});

      