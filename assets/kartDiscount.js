window.KDHooks = window.KDHooks || {};
let kartHtml = '';
window.KDHooks.__handleHTMLCreations_af = function (htmlElem, cartSelectorObj) {
  // updating html of discount field
  return kartHtml;
}

window.KDHooks.__discountFinderClick_ba = function () {
  // Preventing discount filder to open on click of view all coupons button
  return false;
}

window.KDHooks.__postDiscountProcess_af = function (response) {
  // Updating html of discount field on the basis of applied discount and updating responce of kart discount api for discount capping.
  var responseData = '';
  if (typeof response === 'string') {
    responseData = JSON.parse(response);
  }
  else {
    responseData = response;
  }
  if (responseData.is_success) {
    var total_discount_amount = sessionStorage.total_discount_amount;
    total_discount_amount = parseInt(total_discount_amount);
    var cart_amount = responseData.data.response.formatted_text.total_price;
    var discount_amount = responseData.data.response.formatted_text.discount_amount;
    var saveAmount = parseFloat(discount_amount);
    var discount_pair = responseData.data.response.formatted_text.discount_pair;
    var discount_code = Object.keys(discount_pair);
    if (total_discount_amount > 0 && total_discount_amount < discount_amount && sessionStorage.offer_discount_code == discount_code[0]) {
      var after_discount = cart_amount - total_discount_amount;
      saveAmount = total_discount_amount;
      responseData.data.response.formatted_text.discount_amount = total_discount_amount.toFixed(2);
      responseData.data.response.formatted_text.final_total_price = after_discount.toFixed(2);
    }
    sessionStorage.setItem('applyCoupun', discount_code[0]);
    sessionStorage.setItem('Coupun_saveAmount', saveAmount);
    $('.af_coupon_text').html(discount_code[0]);
    $('.afHiddenDiscount').val(discount_code[0]);
    $('#af_custom_coupon_text').val(discount_code[0]);
    $('.discountCode_details').html(`₹${saveAmount} discount applied`);
    $('.custom_kartdiscount_container').addClass('discount_added');
    $('.discountCode_details_container').addClass('show');
    $('.custom_kartdiscount_container .af_btn_holder').html(`<button type="button" class="discountCode__remove_btn" onclick="CDSetupInit.removeIndividualCoupon('${discount_code[0]}',this);">Remove</button>`);
    $('.custom_kartdiscount_container').attr('couponCode', 'true');
    $('.mini-cart-total-price').hide();
    $('.discount_error').html('');
  } else if (responseData.is_success == false && responseData.code == "516") {
    var discountCode = responseData.data.discount_code;
    KDSdk.showError('Coupon code ' + discountCode + ' is invalid. Please try another code')
  }
  else {
    $('.discount_error').html(responseData.message);
    $('#af_custom_coupon_text').click(function () {
      $(this).val('');
      $('.discount_error').html('');
    });
    setTimeout(function () {
      $('.discount_error').html('');
    }, 7000);
  }
  responseData = JSON.stringify(responseData);
  response = responseData;
  // response.data.entire_response = responseData;
  return response; // return the modified response back.
}

window.KDHooks.__postDiscountFinder_af = function (df_list) {
  console.log('df_list', df_list);
  // alert('cart');
var KartDiscount_codes = JSON.parse(Shopify.KartDiscount_codes);
console.log(KartDiscount_codes);
  // here we can get the discount finder list and use it as required
  // here we are getting the data of active discount code from dicount finder list and updating the content of the dicount finder in cart drawer.
  if ($('.custom_kartdiscount_container').attr('couponCode') !== "true") {
    for (let i = 0; i < df_list.length; i++) {
      if (df_list[i].is_active == 1 && df_list[i].toLowerCase() == KartDiscount_codes[0].toLowerCase()) {
        var applyCoupun = df_list[i].code;
        var applyCoupun_heading = df_list[i].full_detail;
        applyCoupun_heading = applyCoupun_heading.split('•')[0];
        sessionStorage.setItem('applyCoupun', applyCoupun);
        sessionStorage.setItem('applyCoupun_heading', applyCoupun_heading);
      }
    }
    setTimeout(function () {
      if (applyCoupun !== undefined) {
        $('.af_coupon_text').html(applyCoupun);
        $('.afHiddenDiscount').val(applyCoupun);
        $('#af_custom_coupon_text').val(applyCoupun);
        $('.discountCode_details').html(applyCoupun_heading);
        $('.custom_kartdiscount_container').addClass('discount_added');
        $('.discountCode_details_container').addClass('show');
        $('.discount_error').html('');
      } else {
        $('.afHiddenDiscount').val('');
        $('#af_custom_coupon_text').val('');
        $('.custom_kartdiscount_container').removeClass('discount_added');
        $('.discountCode_details_container').removeClass('show');
      }
    }, 500);
  }
  // here we are updating the list of discount codes in discount filder
  let discountListHtml = '', i;
  let discountListContainer = document.querySelector('.discount_finder_body');
  var preAppliedCoupon = $('.discount_finder_header_field_details .af_coupon_text.af_coupon_code').html();

  function discount_finder_items(item) {
      var discount_collection_link = '';
    var discount_info = item.dependedProductCollection.entitled_collection;
      if(discount_info && discount_info != ""){
      var discount_collection = discount_info[0].handle;
      var discount_collection_link = discount_collection ? '/collections/' + discount_collection : '';
      }
      var discount_collection_element = discount_collection_link != '' ? `<a href="${discount_collection_link}" class="discount_finder_view_product">View Products</a>` : '';
      discountListHtml = discountListHtml + `
          <div class="discount_finder_item">
          <div class="discount_finder_item_details">
          <div class="discount_finder_item_icon">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22.472" height="23.348" viewBox="0 0 22.472 23.348">
          <defs>
            <clipPath id="clip-path">
              <rect id="Rectangle_116108" data-name="Rectangle 116108" width="22.472" height="23.348" fill="none"/>
            </clipPath>
          </defs>
          <g id="Group_337143" data-name="Group 337143" transform="translate(0 0)">
            <g id="Group_337142" data-name="Group 337142" transform="translate(0 0)" clip-path="url(#clip-path)">
              <path id="Path_346390" data-name="Path 346390" d="M21.657,12.326a1.261,1.261,0,0,1,0-1.306l.41-.667a2.747,2.747,0,0,0-1.29-3.973l-.724-.3a1.245,1.245,0,0,1-.769-1.059l-.06-.785a2.757,2.757,0,0,0-3.38-2.457l-.764.181a1.255,1.255,0,0,1-1.244-.4l-.506-.6a2.747,2.747,0,0,0-4.18,0l-.511.6a1.253,1.253,0,0,1-1.245.4l-.764-.181a2.757,2.757,0,0,0-3.38,2.457l-.06.785A1.246,1.246,0,0,1,2.42,6.078l-.724.3A2.748,2.748,0,0,0,.4,10.352l.41.667a1.261,1.261,0,0,1,0,1.306L.4,13a2.75,2.75,0,0,0,1.29,3.974l.724.3a1.241,1.241,0,0,1,.769,1.052l.06.785a2.749,2.749,0,0,0,3.38,2.454l.764-.181a1.267,1.267,0,0,1,1.245.4l.511.6a2.752,2.752,0,0,0,4.179,0l.506-.6a1.267,1.267,0,0,1,1.244-.4l.764.181a2.749,2.749,0,0,0,3.38-2.454l.06-.785a1.241,1.241,0,0,1,.769-1.051l.724-.3a2.72,2.72,0,0,0,.38-.194A2.749,2.749,0,0,0,22.066,13ZM7.382,9.18v0a1,1,0,1,1,1,1,1,1,0,0,1-1-1M8.764,15.2a.728.728,0,0,1-.527.219A.747.747,0,0,1,7.7,14.153l0,0,6-6a.749.749,0,0,1,1.086,1.031l-.028.028Zm5.622-.031a1,1,0,0,1-1-.992v-.007a1,1,0,1,1,1,1" transform="translate(0 0)" fill="#1a2024"/>
            </g>
          </g>
        </svg>
        </div>
              <div class="discount_finder_item_content">
                <h6>${item.full_detail.split('•')[0]}</h6>
                <!-- <p>${item.full_detail}</p> -->
                  <div class="discount_finder_view_products_container">
                <span>${item.code}</span>
                  ${discount_collection_element}
                  </div>
              </div>
          </div>
          <div class="discount_finder_item_cta_btn">
            <button type="button" onclick="CDSetupInit.applyDiscount('${item.code}')" ${item.is_active == 0 ? 'disabled' : ''} class="${preAppliedCoupon == item.code ? 'coupon_applied' : ''} ${item.code}">${preAppliedCoupon == item.code ? '<span>Applied</span>' : '</span>Tap To Apply</span>'}</button>
          </div>
      </div>`
    }

  if (df_list.length > 0) {
    for (let j = 0; j < KartDiscount_codes.length; j++) {
      for (let i = 0; i < df_list.length; i++) {
        if(df_list[i].code.toLowerCase() == KartDiscount_codes[j].toLowerCase()){
          discount_finder_items(df_list[i]);
        }
      }
    }

    discountListContainer.innerHTML = discountListHtml;
    setTimeout(function(){
      var discount_finder_apply_btn = $('.discount_finder_btn_holder .discount_finder_apply_btn');
      $('#af_kd_custom_coupon_text').on('input', function() {
        $(this).val().length > 0 ? discount_finder_apply_btn.addClass('discount_finder_active_btn') : discount_finder_apply_btn.removeClass('discount_finder_active_btn');
      });
    },500);
  }

  return df_list;
}

function deleteCookie(cookieName) {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

var kdDom = document.querySelector('body');
kdDom.addEventListener('KD_discountRemoved', (e) => {
  // here we are updating the content of discount field in cart drawer on removal of discount code.
  $('.custom_kartdiscount_container .af_btn_holder').html(`<button type="button" class="af_custom_apply_coupon_trigger btn btn--regular btn--color btn--fill tlblbr0" id="af_custom_apply_coupon_trigger" onclick="CDSetupInit.couponApplyClick(this)" style="margin:0;width:100%;max-height:42px;min-height:42px;padding: 8px 31px;">
    <af class="af_after_loading">Apply</af>
  </button>`);
  $('.custom_kartdiscount_container').removeAttr('couponCode');
  $('.mini-cart-total-price').show();
  $('.discount_finder_item_cta_btn button').html('<span>Tap To Apply</span>');
  $('.discount_finder_item_cta_btn button').removeClass('coupon_applied');
  $('#af_custom_coupon_text').val(sessionStorage.applyCoupun);
  $('.discountCode_details').html(sessionStorage.getItem('applyCoupun_heading'));
  
  setTimeout(() => {
    deleteCookie('discount_code');
  }, 1000)
});
kdDom.addEventListener('KD_validDiscountApplied', (e) => {
  // let discountCode = e.detail;
  var preAppliedCoupon = $('.discount_finder_header_field_details .af_coupon_text.af_coupon_code').html();
  $('.discount_finder_item_cta_btn .' + preAppliedCoupon).html('<span>Applied</span>');
  $('.discount_finder_item_cta_btn .' + preAppliedCoupon).addClass('coupon_applied');
  $('.custom_discount_filder_container').removeAttr('open_finder');
});
kdDom.addEventListener('KD_discountFinderClicked', (e) => {
  if ($('.custom_kartdiscount_container').attr('data-finder') == "true") {
    $('.custom_discount_filder_container').attr('open_finder', true);
  }
});

Shopify.KartDiscount = function (cartJson) {
  var total_discount_amount = $('.discount_details').attr('data-discountAmount');
  var offer_discount_code = $('.discount_details').attr('data-discountCode');
  sessionStorage.setItem('total_discount_amount', total_discount_amount);
  sessionStorage.setItem('offer_discount_code', offer_discount_code);
  Shopify.KartDiscountHooks();
}

Shopify.farziDiscount = function (basecode, cartToken) {
  $.ajax({
      type: "POST", url: "https://boat-api.farziengineer.co/discount", headers: { "Content-Type": "application/json" },
      data: `{"code":"${basecode}", "cartId":"${cartToken}"}`,
  }).then((response) => {
    // console.log(response , 'sucess response');
      if (response == "true" || response == "True") {
          setTimeout(function () {
      var couponlog_postrequest = {
          url: "https://boat-api.farziengineer.co/couponlog",
          method: "POST", timeout: 0,
          headers: { "Content-Type": "application/json", },
      };
      var v = setInterval(function () {
          if ($(".edit_checkout .fieldset:last p").length != 0 && $(".edit_checkout .fieldset:last p").css("display") != "none") {
              couponlog_postrequest.data = JSON.stringify({
                  coupon: basecode,
                  log: $(".edit_checkout .fieldset:last p").text(),
              });
              $.ajax(couponlog_postrequest).done(function (response) { });
              clearInterval(v);
          } else if ($(".notice.notice--warning .notice__content .notice__text").text().length > 0) {
              couponlog_postrequest.data = JSON.stringify({ coupon: basecode, log: $(".notice.notice--warning .notice__content .notice__text").text(), });
              $.ajax(couponlog_postrequest).done(function (response) { });
              clearInterval(v);
          } else if ($(".tags-list .tag .tag__wrapper .reduction-code .reduction-code__text").length != 0) {
              couponlog_postrequest.data = JSON.stringify({ coupon: basecode, log: $(".tags-list .tag .tag__wrapper .reduction-code .reduction-code__text").text(), });
              $.ajax(couponlog_postrequest).done(function (response) { });
              clearInterval(v);
          }
      }, 1000);
  }, 3000);
      }
  }).fail(() => {
    console.log(response , 'fail response');
});
}

Shopify.DiscountSubmit = function () {
// here we are farzi discount api on kart discount field submit
  $.getJSON('/cart.js', function (cart) {
    var cartToken = cart.token;
    var basecode = $('#af_kd_custom_coupon_text').val();
    Shopify.farziDiscount(basecode, cartToken);
  })
  setTimeout(function () {
    CDSetupInit.couponApplyClick(this);
  }, 500);
}

Shopify.KartDiscountHooks = function () {
  // here we are regulating the condition for opening of discount finder on click of view all coupon button.
  if ($('.custom_kartdiscount_container').attr('couponCode') !== "true") {
    setTimeout(function () {
      if ($('.custom_kartdiscount_container').attr('data-finder') == "false") {
        $('.af_opens_popup').click();
        $('.custom_kartdiscount_container').attr('data-finder', 'true');
      }
    }, 3000);
  }
}
Shopify.KartDiscountHooks();

window.KDHooks.__numberToMoney_af = function (convertedMoneyStr, extras) {
// converted currency string from number
  var finalAmount = extras.finalAmount;
  finalAmount = finalAmount.replace('.00', '');
  extras.money_format_first = "₹";
  convertedMoneyStr = extras.money_format_first + finalAmount + extras.money_format_second;
  return convertedMoneyStr; // $1.000,00 | {money_format_first: "$", finalAmount: '1.000,00', money_format_second: '', unconvertedString: '100000'}
} 