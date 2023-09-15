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

    var KartDiscount_detail = JSON.parse(Shopify.KartDiscount_detail);
    if(KartDiscount_detail[discount_code[0]] != undefined) {
      sessionStorage.setItem('applyCoupun_heading', KartDiscount_detail[discount_code[0]]);
    }

    sessionStorage.setItem('applyCoupun', discount_code[0]);
    sessionStorage.setItem('Coupun_saveAmount', saveAmount);
    $('.af_coupon_text').html(discount_code[0]);
    $('.afHiddenDiscount').val(discount_code[0]);
    $('#af_custom_coupon_text').val(discount_code[0]);
    $('.discountCode_details').html(`₹${saveAmount} savings with this coupon`);
    $('.custom_kartdiscount_container').addClass('discount_applied');
    $('.custom_kartdiscount_container').addClass('discount_added');
    $('.discountCode_details_container').addClass('show');
    $('.custom_kartdiscount_container .af_btn_holder').html(`<button type="button" class="discountCode__remove_btn" onclick="CDSetupInit.removeIndividualCoupon('${discount_code[0]}',this);">Remove</button>`);
    $('.custom_kartdiscount_container').attr('couponCode', 'true');
    $('.mini-cart-total-price').hide();
    $('.discount_error').html('');
    let cart_json = responseData.data.cart_json;
    cart_json = JSON.parse(cart_json);
      var cartTotal = cart_json.total_price;
      var line_item = document.querySelectorAll('line-item');
        for (var i = 0; i < cart_json.items.length; i++) {
          var itemPrice = cart_json.items[i].line_price;
          var discountPercent =itemPrice / cartTotal;
          discountPercent = Math.round(discountPercent * 100);
          var itemDiscount = saveAmount * discountPercent;
          var finalItemPrice = itemPrice - itemDiscount;
          finalItemPrice = Shopify.formatMoney(finalItemPrice, Shopify.money_format2);
          line_item[i].querySelector('.price-list') ? line_item[i].querySelector('.price-list').classList.add('kartDiscount_applied') : '';
          line_item[i].querySelector('.discount_line_price') ? line_item[i].querySelector('.discount_line_price').innerHTML = finalItemPrice : '';
        }

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
  var KartDiscount_detail = JSON.parse(Shopify.KartDiscount_detail);
  var KartDiscount_codes = Object.keys(KartDiscount_detail);
  // here we can get the discount finder list and use it as required
  // here we are getting the data of active discount code from dicount finder list and updating the content of the dicount finder in cart drawer.
  if ($('.custom_kartdiscount_container').attr('couponCode') !== "true") {
    if (df_list.length > 0) {
      var applyCoupun = '';
      for (let j = 0; j < KartDiscount_codes.length; j++) {
        if (applyCoupun == ''){
          for (let i = 0; i < df_list.length; i++) {
            if (df_list[i].code.toLowerCase() == KartDiscount_codes[j].toLowerCase() && df_list[i].is_active == 1) {
              applyCoupun = df_list[i].code;
              sessionStorage.setItem('applyCoupun', applyCoupun);
              var applyCoupun_heading = df_list[i].full_detail;
              applyCoupun_heading = applyCoupun_heading.split('•')[0];
              sessionStorage.setItem('applyCoupun_heading', applyCoupun_heading);
              break;
            }
          }
        }
      }
    }
    setTimeout(function () {
      if (applyCoupun) {
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
  var preAppliedCoupon = $('.discount_finder_header_field_details .af_coupon_text.af_coupon_code').html();
  
  if (df_list.length > 0) {
    for (let j = 0; j < KartDiscount_codes.length; j++) {
      for (let i = 0; i < df_list.length; i++) {
        if(df_list[i].code.toLowerCase() == KartDiscount_codes[j].toLowerCase()){
          df_list[i].is_active == 0 ? [document.querySelectorAll('.discount_cta_btn')[j].setAttribute('disabled', 'true')] : document.querySelectorAll('.discount_finder_item')[j].classList.add('active_discount');
          preAppliedCoupon ? preAppliedCoupon.toLowerCase() == df_list[i].code.toLowerCase() ? [document.querySelectorAll('.discount_cta_btn')[j].innerHTML = '<span>Applied</span>', document.querySelectorAll('.discount_cta_btn')[j].classList.add('coupon_applied'), document.querySelectorAll('.discount_finder_item')[j].classList.add('applied_discount')] : [document.querySelectorAll('.discount_cta_btn')[j].innerHTML = '<span>Tap to Apply</span>', document.querySelectorAll('.discount_cta_btn')[j].classList.remove('coupon_applied'), document.querySelectorAll('.discount_finder_item')[j].classList.remove('applied_discount')] : '';
        }
      }
    }

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
  $('.custom_kartdiscount_container').removeClass('discount_applied');
  $('#af_custom_coupon_text').val(sessionStorage.applyCoupun);
  $('.discountCode_details').html(sessionStorage.getItem('applyCoupun_heading'));
  var line_item = document.querySelectorAll('line-item');
  for (var i = 0; i < line_item.length; i++) {
    line_item[i].querySelector('.price-list') ? line_item[i].querySelector('.price-list').classList.remove('kartDiscount_applied') : '';
    line_item[i].querySelector('.discount_line_price') ? line_item[i].querySelector('.discount_line_price').innerHTML = '' : '';
  }
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
    console.log('fail response');
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