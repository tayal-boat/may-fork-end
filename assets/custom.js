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
	var userSource = '';
    if(navigator.userAgent.includes('Mobile')) userSource = 'Mobile';
    else if(navigator.userAgent.includes('iPad')) userSource = 'Tablet';
    else userSource = 'Desktop';
    const slides = document.querySelectorAll('.slideshow__slide-list .slideshow__slide');
    slides.forEach((slide, i) => {
      slide.addEventListener('click', function() {
          let imageTitle = slide.querySelector('.image_alt').innerText;
          alert(imageTitle)
          let slideNum = `${i+1}`
          clevertap.event.push("Homepage Banner clicked", {
            "Banner Number": 'Banner ' + slideNum,
            "Banner Title": imageTitle,
            "userSource": userSource
          })
      })
    });
	$('.featured-collections').on('click', function(){
        const sectionTitle = $(this).siblings('.section__header').find('.tabs-nav__item[aria-expanded="true"]').text();
        clevertap.event.push("Homepage Cards section clicked", {
          "userSource": userSource,
          "secttion Title": sectionTitle
        });
    });
    $('.product-item__quick-form').on('click', function() {
      	let prodTitle = $(this).parents('.product-item__image-wrapper').siblings('.product-item__info').find('.product-item-meta__title').text();
        let prodPrice = $(this).parents('.product-item__image-wrapper').siblings('.product-item__info').find('.price--highlight').text().split('price')[1];
      	clevertap.event.push("Quick Buy Clicked", {
          "Product Title": prodTitle,
          "Price": prodPrice,
          "userSource": userSource
        });
    });
	$('.gokwik-checkout').click(function () {
       clevertap.event.push('GoKwik Button Clicked');
    });
    $('#mini-cart-form').submit(function() {
       var cart_total_price = $('.cart-total').val();
       var product_title_concat = ""
       var datalayer_items = []
       
       $("#mini-cart .line-item").each(function (i, obj) {
         var product_title = $(this).find('.product-item-meta__title').text();
         var product_id = $(this).find('.product-item-meta__title').attr('data-product_id');
         var product_price = $(this).find('.price--highlight').text().split('price')[1];
         var product_category = $(this).find('.product-item-meta__title').attr('data-product_type');
         var quantity = $(this).find('.quantity-selector__input').val();
         if (i == 0) { 
           product_title_concat = product_title ;
         }
         else { 
           product_title_concat = product_title_concat + ',' + product_title;
         }
         var item = {
             'item_name': product_title,
             'item_id': product_id,
             'price': product_price,
             'item_category': product_category,
             'quantity': quantity
         }
         datalayer_items.push(item)
      });
      clevertap.event.push("Checkout Button Clicked", {
          "Amount": cart_total_price,
          "Product Name": product_title_concat
      });
      dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
      dataLayer.push({
          'event': 'begin_checkout',
          'ecommerce': {
          	'items': datalayer_items
          }
      });
    });
    



/*
* ------------------------------------------------------------------------------------------------------------
* FOOTER ACCORDIAN
* ------------------------------------------------------------------------------------------------------------
* 
*/

$('.footer__item--links').click(function() {
	$(this).find('.footer__item-content').slideToggle();
})