/* See https://www.algolia.com/doc/integration/shopify/advanced-customization/customizing-instant-search/#hogan */
(function(algolia) {
  'use strict';
  var Hogan = algolia.externals.Hogan;
  var formatPrice = function formatPrice(value) {
    return algolia.formatMoney(Number(value) * 100);
  };

  function formattedPriceWithComparison(price, compare_at_price, price_ratio) {
    var comparing = Number(compare_at_price) && Number(compare_at_price) > Number(price);
    var discount_ratio = 1.0 - price_ratio;
    var res = '<b>' + formatPrice(price) + '</b>';
    if (comparing) {
      res = ' <span style="color:#05A143;font-size:14px;">' + Math.floor(discount_ratio * 100) + '% off </span>' +
        '<b style="padding-left:8px;">' + formatPrice(price) + '</b>' +
        ' <span class="ais-hit--price-striked">' + formatPrice(compare_at_price) + '</span> '
    }

    return res;
  }

  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

  var escapeHtml = function escapeHtml(unsafe) {
    return (unsafe || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  algolia.helpers = {
    formatNumber: function formatNumber(text, render) {
      return Number(render(text)).toLocaleString();
    },
    formattedPrice: function formattedPrice(text, render) {
      return formatPrice(render(text));
    },
    formattedPriceWithoutDecimals: function formattedPriceWithoutDecimals(
      text,
      render
    ) {
      return formatPrice(render(text)).replace(/\.\d+$/, '');
    },
    autocompletePrice: function autocompletePrice() {
      if (this._distinct) {
        var min = this.variants_min_price;
        var max = this.variants_max_price;
        if (min !== max) {
          return '<b>' + formatPrice(min) + ' - ' + formatPrice(max) + '</b>';
        }
      }
      return formattedPriceWithComparison(this.price, null);
    },
    instantsearchPrice: function instantsearchPrice() {
      if (this._distinct) {
        var min = this.variants_min_price;
        var max = this.variants_max_price;
        if (min !== max) {
          return '<b>' + formatPrice(min) + ' - ' + formatPrice(max) + '</b>';
        }
      }else{
        var price = this.price,
        compare_at_price = this.compare_at_price,
        price_ratio = this.price_ratio;
        var comparing = Number(compare_at_price) && Number(compare_at_price) > Number(price);
        var discount_ratio = 1.0 - price_ratio;
        if(Shopify.enable_fixed_discount && this.tags.includes(Shopify.tag_selector)){
          let variantId = this.objectID;
          let pod_price = Shopify.fixed_discount(this.tags);
          let offerVariantdata = sessionStorage.getItem('variantQtys');
          let OfferProperty= [];
          let varient_pod_units = [];
          offerVariantdata = JSON.parse(offerVariantdata);

           for (var key in offerVariantdata) {
              if (offerVariantdata.hasOwnProperty(variantId)) {
               let OfferPropertyArr = offerVariantdata[variantId];
                OfferProperty.push(OfferPropertyArr[0]['pod_deal_applicability']);
                varient_pod_units.push(OfferPropertyArr[0]['pod_units']);
                break;
               }
             }
             let varient_pod_unit = varient_pod_units[0];
             varient_pod_unit = parseInt(varient_pod_unit);
             OfferProperty = OfferProperty[0];
             if(varient_pod_unit > 0 && OfferProperty == 'true'){
              price = pod_price; 
             }
          discount_ratio = (compare_at_price - price) / compare_at_price;
      }

        var res = '<b>' + formatPrice(price) + '</b>';
        if (comparing) {
          res = '<b style="padding-right:4px;">' + formatPrice(price) + '</b>'
          +  ' <span style="color:#05A143;font-size:14px;font-weight:500;">' + Math.floor(discount_ratio * 100) + '% off </span>'
            + ' <span class="ais-hit--price-striked">' + formatPrice(compare_at_price) + '</span> '
        }
    
        return res;
      }
    },
    instantsearchLink: function instantsearchLink() {
      var addVariantId = !this._distinct && this.objectID !== this.id;
      return (
        '/products/' +
        this.handle +
        (addVariantId ? '?variant=' + this.objectID : '')
      );
    },
    fullTitle: function fullTitle() {
      var res = this.title.split('|')[0];
      if (res.includes('boAt')) {
        res = res.split('boAt')[1];
      }
      if (
        !this._distinct &&
        this.variant_title &&
        this.variant_title !== 'Default Title' &&
        this.variant_title !== 'Default'
      ) {
        res += ' (' + this.variant_title + ')';
      }

      return escapeHtml(res);
    },
    youSavePrice: function inventory() {
      var res = '';
      var compare_at_price = this.compare_at_price;
      var price = this.price;
      var price_ratio = this.price_ratio;
      var discount_ratio = 1.0 - price_ratio;
      let card_offers = JSON.parse(Shopify.card_offers);
      if (price >= 500) {
        /* res += ' <p class="ais-hit--price-discount">Save ₹15 more on UPI payment</p>'; */
        res += ` <p class="ais-hit--price-discount">${card_offers.offer_1}</p>`;
      } else {
        res += ` <p class="ais-hit--price-discount">${card_offers.offer_2}</p>`;
      }
      // res += ' <p class="ais-hit--price-discount"> You Save: ' + formatPrice(compare_at_price - price ) + ' (' +
      //   Math.floor(discount_ratio * 100) +
      //   '%)</p>';
      return res;
    },
    inventory: function inventory() {
      var res = this.inventory_available;
      var flashSale = '';
      var free = '';
      // console.log(this.inventory_quantity);
      if (this.tags.includes('flash-sale')) {
        flashSale = 'flash-sale';
      }
      if (this.tags.includes('Free-Smartwatch')) {
        free = '<input class="flash_sale_enable" type="hidden" name="properties[Free]" value="true">';
      }
      if(this.inventory_quantity < Shopify.sold_out_threshold) {
        if (this.tags.includes('Coming-Soon')) {
          res = '<input name="add" value="Coming Soon" type="submit" class="custom-search-cta sold-out" />';
        } else {
          // res = '<input name="add" value="Sold out" type="submit" class="custom-search-cta sold-out" />';
          res = `<div class="product-item__quick-form">
          <a href='#' class='BIS_trigger search-custom-notify-me' data-product-data='{"id": "${this.id}","handle":"${this.handle}","title":"${this.title}","tags":[],"available":"${this.inventory_available}",
          "variants":[{"id":"${this.objectID}","title":"${this.variant_title}","available":"${this.inventory_available}","inventory_quantity":"${this.inventory_quantity}","inventory_management":"${this.inventory_management}"}]}'>
          Notify Me
          </a>
          </div>`
        }
      }
      else if (this.inventory_available) {
        if(Shopify.enable_fixed_discount && this.tags.includes(Shopify.tag_selector)){
          res = ` ${free} <input name="add" value="Add to cart" type="submit" class="custom-offer-add-to-cart algolia_pod_offer add-to-cart-button ' + ${flashSale} + '" />`;
        }else{
          res = ` ${free} <input name="add" value="Add to cart" type="submit" class="custom-search-cta add-to-cart-button ' + ${flashSale} + '" />`;
        }
      } 
      // else {
      //   if (this.tags.includes('Coming-Soon')) {
      //     res = '<input name="add" value="Coming Soon" type="submit" class="custom-search-cta sold-out" />';
      //   } else {
      //     // res = '<input name="add" value="Sold out" type="submit" class="custom-search-cta sold-out" />';
      //     res = `<div class="product-item__quick-form">
      //     <a href='#' class='BIS_trigger search-custom-notify-me' data-product-data='{"id": "${this.id}","handle":"${this.handle}","title":"${this.title}","tags":[],"available":"${this.inventory_available}",
      //     "variants":[{"id":"${this.objectID}","title":"${this.variant_title}","available":"${this.inventory_available}","inventory_quantity":"${this.inventory_quantity}","inventory_management":"${this.inventory_management}"}]}'>
      //     Notify Me
      //     </a>
      //     </div>`
      //   }
      // }
      return res;
    },
    soldImage: function inventory() {
      var res = "aa-product-image";
      if(this.inventory_quantity < Shopify.sold_out_threshold){
        res = "aa-product-image sold-out"
      }else if (this.inventory_available) {
        res = "aa-product-image"
      } 
      return res;
    },
    reviews: function reviews() {
      var res = '';
      var reviews = this.meta.reviews;
      if (reviews) {
        var rating = reviews.rating;
        rating = JSON.parse(rating);
        var rating_value = rating.value;
        rating_value = Math.round(rating_value * 10) / 10;
        var rating_count = reviews.rating_count;
        res = `<div class="rating"><div class="rating__stars" role="img" aria-label="${rating_value} out of 5.0 stars">
            <span style="color:#05A143;">★</span>
            ${rating_value} </div> <span class="rating__caption">${rating_count} reviews</span>
            </div>`;
      } else {
        res = `<div class="rating"><div class="rating__stars" role="img" >
               <span style="color:#05A143;font-size:16px;">★</span>
               Be the first to review
              </div></div>`
      }
      return res;
    },
    imageClass: function imageClass() {
      var tags = this.tags;
      var res_class = ''
      if(this.inventory_quantity < Shopify.sold_out_threshold){
        if (tags.includes('Coming-Soon')) {
          res_class = 'aa-product-image'
        } else {
          res_class = 'aa-product-image sold-out'
        }
      }
      else if (this.inventory_available) {
        res_class = 'aa-product-image'
      } 

      return res_class;
    },
    containerClass: function containerClass() {
      var tags = this.tags;
      var res_class = ''
      if (tags.includes('st-hide') || tags.includes('prebooking')) {
        res_class = 'aa-product hide-suggestion'
      } else {
        res_class = 'aa-product show-suggestion'
      }
      return res_class;
    },
    badge: function badge() {
      var res = '';
      var res_class = '';
      // console.log(this);
      var tags = this.tags;
      var price_ratio = this.price_ratio;
      var comparing =
        Number(this.compare_at_price) && Number(this.compare_at_price) > Number(this.price);
      var discount_ratio = 1.0 - price_ratio;
      var response = '';
      if(this.inventory_quantity < Shopify.sold_out_threshold){
        if (tags.includes('Coming-Soon')) {
          var response = `<div class="aa-product-badge d-block">Coming Soon</div>`;
        } else if (tags.includes('Restocking-Soon')){
          var response = `<div class="aa-product-badge d-block">Restocking-Soon</div>`;
        }
        else {
          var response = `<div class="aa-product-badge sold-out">SOLD OUT</div>`;
        }
      }
      else if (this.inventory_available) {
        for (let i = 0; i < tags.length; i++) {
      if (tags[i].includes('Free-')) {
            res = `🎁 ${tags[i].replace('-',' ')}`;
            res_class = 'free-label label bg-green z-10';
            response = response + `<div class="aa-product-badge ${res_class} "> ${res} </div>`;
          } else if (tags[i].includes('Coupon-')) {
            res = `₹${tags[i].replace('Coupon-','').split('|')[0]} OFF ON ${tags[i].replace('Coupon-',' ').split('|')[1]}`;
            res_class = 'coupon-label label bg-green z-9';
            response = response + `<div class="aa-product-badge ${res_class} "> ${res} </div>`;
          } else if (tags[i].includes('flash-sale') && comparing) {
            res = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-fill flash-sale-thunder pr-1" viewBox="0 0 16 16">
              <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
            </svg> SUPER SAVER`;
            res_class = 'flash-sale-badge z-8';
            response = response + `<div class="aa-product-badge ${res_class} "> ${res} </div>`;
          } else if (tags[i].includes('meta-label-Bestseller')) {
            res = `🚀 ${tags[i].replace('meta-label-',' ')}`;
            res_class = 'label bg-orange z-7';
            response = response + `<div class="aa-product-badge ${res_class} "> ${res} </div>`;
          } else if (tags[i].includes('meta-label-trending')) {
            res = `<img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/fire_icon_5b106718-91ee-4406-961e-33b11cbae6e5.png?v=1666348762" style="width: 15px;position: unset;margin-right: 4px;transform:unset" /> ${tags[i].replace('meta-label-',' ')}`;
            res_class = 'label bg-orange z-6';
            response = response + `<div class="aa-product-badge ${res_class} "> ${res} </div>`;
          } else if (tags[i].includes('meta-label-exclusive')) {
            res = `💝 LIMITED EDITION`;
            res_class = 'label bg-purple z-5';
            response = response + `<div class="aa-product-badge ${res_class} "> ${res} </div>`;
          } else if (tags[i].includes('meta-label-just launched')) {
            res = `🎉 NEW LAUNCH`;
            res_class = 'label bg-purple z-4';
            response = response + `<div class="aa-product-badge ${res_class} "> ${res} </div>`;
          } else if (tags[i].includes('Feature|')) {
            res = `${tags[i].replace('Feature|',' ')}`;
            res_class = ' label bg-black z-3';
            response = response + `<div class="aa-product-badge ${res_class} "> ${res} </div>`;
          } else if (tags[i].includes('meta-label-')) {
            res = `${tags[i].replace('meta-label-',' ')}`;
            res_class = ' label bg-black z-2';
            response = response + `<div class="aa-product-badge ${res_class} "> ${res} </div>`;
          } else if (tags[i].includes('meta-label-sold')) {
            res = 'sold-out';
            res_class = ' label bg-black';
            response = response + `<div class="aa-product-badge ${res_class} "> ${res} </div>`;
          }
        }
      }
      //  else {
      //   if (tags.includes('Coming-Soon')) {
      //     var response = `<div class="aa-product-badge d-block">Coming Soon</div>`;
      //   } else if (tags.includes('Restocking-Soon')){
      //     var response = `<div class="aa-product-badge d-block">Restocking-Soon</div>`;
      //   }
      //    else {
      //     var response = `<div class="aa-product-badge sold-out">SOLD OUT</div>`;
      //   }
      // }
      return response;
    },
    fullHTMLTitle: function fullHTMLTitle() {
      var res = '';

      if (this._highlightResult.title && this._highlightResult.title.value) {
        res = algolia.helpers.fullEscapedAttribute(
          this._highlightResult.title.value
        );
      }

      if (
        !this._distinct &&
        this.variant_title &&
        this.variant_title !== 'Default Title' &&
        this.variant_title !== 'Default'
      ) {
        res += ' <span class="algolia-variant">(' + res + ')</span>';
      }
      return res;
    },
    fullEscapedAttribute(attribute) {
      return new DOMParser().parseFromString(attribute, 'text/html')
        .documentElement.textContent;
    },
    fullEscapedHTMLTitle: function fullEscapedHTMLTitle() {
      var res = '';

      if (this._highlightResult.title && this._highlightResult.title.value) {
        res = algolia.helpers.fullEscapedAttribute(
          this._highlightResult.title.value
        );
      }

      if (
        !this._distinct &&
        this.variant_title &&
        this.variant_title !== 'Default Title' &&
        this.variant_title !== 'Default'
      ) {
        res += ' <span class="algolia-variant">(' + res + ')</span>';
      }
      return res;
    },
    fullEscapedHTMLProductType: function fullEscapedHTMLProductType() {
      if (
        this._highlightResult.product_type &&
        this._highlightResult.product_type.value
      ) {
        return algolia.helpers.fullEscapedAttribute(
          this._highlightResult.product_type.value
        );
      } else {
        return '';
      }
    },
    fullEscapedHTMLVendor: function fullEscapedHTMLVendor() {
      if (this._highlightResult.vendor && this._highlightResult.vendor.value) {
        return algolia.helpers.fullEscapedAttribute(
          this._highlightResult.vendor.value
        );
      } else {
        return '';
      }
    },
    no_result_page: function no_result_page() {
      // console.log(this);
      let res = '';
      let query = this.query;
      let search_query = '';
      let algolia_festive = Shopify.algolia_festive;
      algolia_festive = JSON.parse(algolia_festive);

      let festive_query_list = [];
      let custom_query = query.trim();
      custom_query = custom_query.toLowerCase();
      for (let i = 0; i < algolia_festive.length; i++) {
        search_query = algolia_festive[i].search_query;
        search_query = search_query.toLowerCase();
        search_query = search_query.split(',');
        if (Array.isArray(search_query)) {
          festive_query_list = festive_query_list.concat(search_query);
        } else {
          festive_query_list.push(search_query);
        }
      }
      festive_query_list = festive_query_list.map(element => {
        return element.trim();
      });

      if (festive_query_list.includes(custom_query)) {

        for (let i = 0; i < algolia_festive.length; i++) {
          search_query = algolia_festive[i].search_query;
          search_query = search_query.toLowerCase();
          search_query = search_query.split(',');
          search_query = search_query.map(element => {
            return element.trim();
          });

          if (search_query.includes(custom_query)) {
            
            let text_alignment_class = "";
            let text_alignment = algolia_festive[i].text_alignment;
            if( text_alignment == "left"){
              text_alignment_class = "text_align_left";
            }else if( text_alignment == "right"){
              text_alignment_class = "text_align_right";
            }else{
              text_alignment_class = "text_align_center";
            }

            let copy_icon = '<svg class="coupon_code_wrapper 456456456" id="copy_svg_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312.36 389.98"><path d="M322.17,242c6.91,1.86,13.4,4.44,18.37,9.94,6,6.67,8.32,14.57,8.31,23.41q-.06,86,0,172.09c0,28.05.05,56.09,0,84.14,0,15.73-9,27.44-23.86,31.22a28,28,0,0,1-7.91.74c-5.1-.19-8.91-4-9.64-9.12a10.62,10.62,0,0,1,6.82-11.49,14.33,14.33,0,0,1,1.46-.41c10.72-2.64,11.64-3.83,11.64-14.93q0-125.27,0-250.53a36.9,36.9,0,0,0-.42-5.66,8.29,8.29,0,0,0-7.45-7.46,29.74,29.74,0,0,0-4.9-.42q-87.19,0-174.4,0a20.55,20.55,0,0,0-6.75.82c-4.2,1.48-5.56,5.12-6.14,9.26-1,6.74-5.89,10.67-12,9.82s-9.9-5.94-9.22-12.64c1.48-14.74,10.62-25,25.15-28.19a8,8,0,0,0,1.34-.6Z" transform="translate(-36.49 -242)"/><path d="M36.5,471.23q0-64.17,0-128.33c0-13.34,5.43-23.76,17.73-29.44a37.27,37.27,0,0,1,15.06-3.11q88.74-.32,177.48-.1c19.85,0,32.7,13.22,32.71,33.15q0,127.76,0,255.52c0,20.07-13.05,33-33.2,33.05q-88.35,0-176.71,0c-20.07,0-33.07-13.05-33.08-33.17Q36.47,535,36.5,471.23Zm21.43-.37v74.26q0,26.83,0,53.69c0,4.61,1.12,8.74,5.76,10.59a19.78,19.78,0,0,0,7.1,1q87,.06,174.05,0c9.95,0,13-3,13-12.9V344.63c0-9.75-3-12.82-12.65-12.82H70.8c-9.83,0-12.87,3.07-12.87,13Z" transform="translate(-36.49 -242)"/></svg>';
            res = `<div class="algolia-no-result-container algolia-no-result-festive ${text_alignment_class}"  style="background-image:url(${algolia_festive[i].coupon_url});background-repeat:no-repeat;"> <h3> ${algolia_festive[i].message}</h3> <div class="algolia-coupon-container"><p class="para_1"> ${algolia_festive[i].message2}</p> <div class="coupon-code"> <span class="coupon_code_wrapper">Use Code&nbsp;<span class="coupon_code">${algolia_festive[i].coupon_code}</span>&nbsp;${copy_icon}</span></div> <p> ${algolia_festive[i].coupon_value}</p> </div> </div>`;
            break
          }
        }

        let queryList = [];
        let storedQuery = sessionStorage.queryList;
        if (sessionStorage.queryList) {
          storedQuery = storedQuery.split(',');
          if (Array.isArray(storedQuery)) {
            queryList = storedQuery;
          } else {
            queryList.push(storedQuery);
          }
        }
        if (!queryList.includes(custom_query)) {
          queryList.unshift(custom_query);
          if (queryList.length > 5) {
            queryList.pop();
          }
        }
        sessionStorage.setItem('queryList', queryList);

      } else {
        res = `<div class="algolia-no-result-container"> <h3 class="pb-0 mb-0"> ${JSON.parse(Shopify.algolia_no_result)} </h3><div class="algolia-trending-list"> ${document.querySelector('.algolia-trending-list').innerHTML} </div></div>`;
        let algolia_trending_item = "";

        function algolia__input(algolia_no_result_input) {
          algolia_no_result_input.value = algolia_trending_item.trim();
          algolia_no_result_input.dispatchEvent(new Event("input", {
            bubbles: !0
          }))
        }
        setTimeout(function() {
          $(".algolia-trending-item").click(function() {
            algolia_trending_item = $(this).children(".algolia-trending-label").text();
            if (window.innerWidth < 1200) {
              let algolia_no_result_input = document.querySelector(".predictive-search__input_mobile");
              algolia__input(algolia_no_result_input);
            } else {
              let algolia_no_result_input = document.querySelector(".predictive-search__input_desk");
              algolia__input(algolia_no_result_input);
            }
          });
        }, 1000);
      }
      return res;
    },
    floor: function floor(text, render) {
      return '' + Math.floor(Number(render(text)));
    },
    ceil: function ceil(text, render) {
      return '' + Math.ceil(Number(render(text)));
    },
    sizedImage: function sizedImage(text, render) {
      var image = this._distinct ? this.product_image : this.image;
      if (!image) {
        return 'http://cdn.shopify.com/s/images/admin/no-image-compact.gif';
      }
      var size = render(text).replace(/^\s+|\s+$/g, ''); // Render and trim
      if (size === 'original') {
        return image;
      }
      return image.replace(/\/(.*)\.(\w{2,4})/g, '/$1_' + size + '.$2');
    },
  };

  [
    'pico',
    'icon',
    'thumb',
    'small',
    'compact',
    'medium',
    'large',
    'grande',
    'original',
  ].forEach(function(size) {
    algolia.helpers[size + 'Image'] = (function(_size) {
      return function() {
        var image = this._distinct ? this.product_image : this.image;

        if (!image) {
          return 'http://cdn.shopify.com/s/images/admin/no-image-compact.gif';
        }

        if (_size === 'original') {
          return image;
        }

        return image.replace(/\/(.*)\.(\w{2,4})/g, '/$1_' + _size + '.$2');
      };
    })(size); // We need to create a new scope so that the internal size has the good value.
  });

  /* Create an Hogan lambda, which doesn't respect the mustache doc */
  var helpers = algolia.assign({},
    algolia.helpers,
    algolia.translation_helpers
  );
  var helpersNames = Object.keys(helpers);
  var i = helpersNames.length;
  var helpersArray = new Array(i);
  while (i--) helpersArray[i] = [helpersNames[i], helpers[helpersNames[i]]];

  algolia.hoganHelpers = helpersArray.reduce(function(res, options) {
    var name = options[0];
    var helper = options[1];

    var newRes = algolia.assign({}, res);

    newRes[name] = function() {
      return function(text) {
        var render = function(value) {
          return Hogan.compile(value, algolia.hoganOptions).render(this);
        }.bind(this);

        return helper.call(this, text, render);
      }.bind(this);
    };
    return newRes;

  }, {});

  $('body .algolia-autocomplete').on('click touchstart', '.algolia-no-result-festive .coupon-code .coupon_code_wrapper', function() {
    
    const current_date = new Date();
    let coupon_code = $('.algolia-autocomplete .coupon_code').html();

    // Removing cookie value if alreadt exists

    current_date.setTime(current_date.getTime());
    const current_time = current_date.toUTCString();
    document.cookie = "discount_code='';expires=" + current_time;

    // Seeting cookie for 24 hrs
    let next_day = current_date.setTime(current_date.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = "discount_code=" + coupon_code + ";expires=" + next_day;
    $('.dis_code_copy_msg').remove();

    let copyText = document.querySelector(".coupon_code");
    copyToClipboard(copyText);

    $('<p class="dis_code_copy_msg">Copied! Discount will be applied on checkout.</p>').insertAfter('.algolia-coupon-container > :last-child')
    setTimeout(function() {
      $(".dis_code_copy_msg").css("display", "none")
    }, 2000);
  });

})(window.algoliaShopify);