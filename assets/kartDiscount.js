window.KDHooks = window.KDHooks || {};

var kartHtml = `<div id="af_cart_page" class="cdThemeSetupV2">
    <div class="af_cd_setup custom_kartdiscount_container" data-finder="false">
      <div style="display: flex;flex-direction:row;align-items: flex-start;" class="af_txtbtn_holder">
        <div class="af_txtbx_holder discountCode_txtbx_holder">
          <div class="discountCode_details_container">
            <div class="discountCode_details_inner_container"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22.472" height="23.348" viewBox="0 0 22.472 23.348">
            <defs>
              <clipPath id="clip-path">
                <rect id="Rectangle_116108" data-name="Rectangle 116108" width="22.472" height="23.348" fill="none"></rect>
              </clipPath>
            </defs>
            <g id="Group_337143" data-name="Group 337143" transform="translate(0 0)">
              <g id="Group_337142" data-name="Group 337142" transform="translate(0 0)" clip-path="url(#clip-path)">
                <path id="Path_346390" data-name="Path 346390" d="M21.657,12.326a1.261,1.261,0,0,1,0-1.306l.41-.667a2.747,2.747,0,0,0-1.29-3.973l-.724-.3a1.245,1.245,0,0,1-.769-1.059l-.06-.785a2.757,2.757,0,0,0-3.38-2.457l-.764.181a1.255,1.255,0,0,1-1.244-.4l-.506-.6a2.747,2.747,0,0,0-4.18,0l-.511.6a1.253,1.253,0,0,1-1.245.4l-.764-.181a2.757,2.757,0,0,0-3.38,2.457l-.06.785A1.246,1.246,0,0,1,2.42,6.078l-.724.3A2.748,2.748,0,0,0,.4,10.352l.41.667a1.261,1.261,0,0,1,0,1.306L.4,13a2.75,2.75,0,0,0,1.29,3.974l.724.3a1.241,1.241,0,0,1,.769,1.052l.06.785a2.749,2.749,0,0,0,3.38,2.454l.764-.181a1.267,1.267,0,0,1,1.245.4l.511.6a2.752,2.752,0,0,0,4.179,0l.506-.6a1.267,1.267,0,0,1,1.244-.4l.764.181a2.749,2.749,0,0,0,3.38-2.454l.06-.785a1.241,1.241,0,0,1,.769-1.051l.724-.3a2.72,2.72,0,0,0,.38-.194A2.749,2.749,0,0,0,22.066,13ZM7.382,9.18v0a1,1,0,1,1,1,1,1,1,0,0,1-1-1M8.764,15.2a.728.728,0,0,1-.527.219A.747.747,0,0,1,7.7,14.153l0,0,6-6a.749.749,0,0,1,1.086,1.031l-.028.028Zm5.622-.031a1,1,0,0,1-1-.992v-.007a1,1,0,1,1,1,1" transform="translate(0 0)" fill="#1a2024"></path>
              </g>
            </g>
          </svg><p class="discountCode_details">Save more on this order</p></div>
            <span class="discountCode">Code: <span class="af_coupon_text af_coupon_code"></span></span>
          </div>
          <input type="hidden" autocomplete="off" spellcheck="false" maxlength="120" placeholder="Coupon" id="af_custom_coupon_text" value="" class="af_custom_coupon_text input-full trbrbr0" style="margin: 0px; width: 100%; max-height: 42px; min-height: 42px; border-color: rgb(204, 204, 204);">
        </div>
        <div class="af_btn_holder">
          <button type="button" class="af_custom_apply_coupon_trigger btn btn--regular btn--color btn--fill tlblbr0" id="af_custom_apply_coupon_trigger" onclick="CDSetupInit.couponApplyClick(this)" style="margin:0;width:100%;max-height:42px;min-height:42px;padding: 8px 31px;">
            <af class="af_after_loading">Apply</af>
          </button>
        </div>
      </div>
      <div class=" af_popup_trigger ">
        <span class="af_popup_loading">
          <span class="af_loading_dots">
            <span class="af_loading_dots__dot"></span>
            <span class="af_loading_dots__dot"></span>
            <span class="af_loading_dots__dot"></span>
          </span>
        </span>
        <span class="af_opens_popup custom_discount_finder_btn">
        <span class="discount_finder_viewAll">View all coupons  &rarr;</span>
        <span class="discount_finder_apply_coupon">Apply Coupon
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="11" viewBox="0 0 11 11" fill="none">
<mask id="mask0_6272_265" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="11" height="11">
<rect width="11" height="11" transform="matrix(1 0 0 -1 0 11)" fill="url(#pattern0)"/>
</mask>
<g mask="url(#mask0_6272_265)">
<rect x="-5" y="13" width="18" height="18" transform="rotate(-90 -5 13)" fill="black"/>
</g>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_6272_265" transform="scale(0.00195312)"/>
</pattern>
<image id="image0_6272_265" width="512" height="512" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
        </span>
        </span>
      </div>
      <div class="discount_finder_offer_icon">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22.472" height="23.348" viewBox="0 0 22.472 23.348">
          <defs>
            <clipPath id="clip-path">
              <rect id="Rectangle_116108" data-name="Rectangle 116108" width="22.472" height="23.348" fill="none"></rect>
            </clipPath>
          </defs>
          <g id="Group_337143" data-name="Group 337143" transform="translate(0 0)">
            <g id="Group_337142" data-name="Group 337142" transform="translate(0 0)" clip-path="url(#clip-path)">
              <path id="Path_346390" data-name="Path 346390" d="M21.657,12.326a1.261,1.261,0,0,1,0-1.306l.41-.667a2.747,2.747,0,0,0-1.29-3.973l-.724-.3a1.245,1.245,0,0,1-.769-1.059l-.06-.785a2.757,2.757,0,0,0-3.38-2.457l-.764.181a1.255,1.255,0,0,1-1.244-.4l-.506-.6a2.747,2.747,0,0,0-4.18,0l-.511.6a1.253,1.253,0,0,1-1.245.4l-.764-.181a2.757,2.757,0,0,0-3.38,2.457l-.06.785A1.246,1.246,0,0,1,2.42,6.078l-.724.3A2.748,2.748,0,0,0,.4,10.352l.41.667a1.261,1.261,0,0,1,0,1.306L.4,13a2.75,2.75,0,0,0,1.29,3.974l.724.3a1.241,1.241,0,0,1,.769,1.052l.06.785a2.749,2.749,0,0,0,3.38,2.454l.764-.181a1.267,1.267,0,0,1,1.245.4l.511.6a2.752,2.752,0,0,0,4.179,0l.506-.6a1.267,1.267,0,0,1,1.244-.4l.764.181a2.749,2.749,0,0,0,3.38-2.454l.06-.785a1.241,1.241,0,0,1,.769-1.051l.724-.3a2.72,2.72,0,0,0,.38-.194A2.749,2.749,0,0,0,22.066,13ZM7.382,9.18v0a1,1,0,1,1,1,1,1,1,0,0,1-1-1M8.764,15.2a.728.728,0,0,1-.527.219A.747.747,0,0,1,7.7,14.153l0,0,6-6a.749.749,0,0,1,1.086,1.031l-.028.028Zm5.622-.031a1,1,0,0,1-1-.992v-.007a1,1,0,1,1,1,1" transform="translate(0 0)" fill="#1a2024"></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
    <div id="af_tagged_discounts" class="af_tagged_discounts">
    <div class="af_tag ">
      <span class="af_coupon_wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
          <path d="M17.78 3.09C17.45 2.443 16.778 2 16 2h-5.165c-.535 0-1.046.214-1.422.593l-6.82 6.89c0 .002 0 .003-.002.003-.245.253-.413.554-.5.874L.738 8.055c-.56-.953-.24-2.178.712-2.737L9.823.425C10.284.155 10.834.08 11.35.22l4.99 1.337c.755.203 1.293.814 1.44 1.533z" fill-opacity=".55"></path>
          <path fill-opacity=".25" d="M10.835 2H16c1.105 0 2 .895 2 2v5.172c0 .53-.21 1.04-.586 1.414l-6.818 6.818c-.777.778-2.036.782-2.82.01l-5.166-5.1c-.786-.775-.794-2.04-.02-2.828.002 0 .003 0 .003-.002l6.82-6.89C9.79 2.214 10.3 2 10.835 2zM13.5 8c.828 0 1.5-.672 1.5-1.5S14.328 5 13.5 5 12 5.672 12 6.5 12.672 8 13.5 8z"></path>
        </svg>
      </span>
      <div class="af_coupon_text_wrapper">
        <div class="af_coupon_text_amount">
          <span class="af_coupon_text af_coupon_code">FLAT5</span>
          <span class="af_coupon_text af_discount_amt">- <span class="af_money" data-current-currency="THB">
              <span class="">฿ 26,95</span>
            </span>
          </span>
        </div>
      </div>
      <div class="removeAfTag" onclick="CDSetupInit.removeIndividualCoupon('FLAT5',this)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">
          <path d="M1.5 1.5l10.05 10.05M11.5 1.5L1.45 11.55" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round"></path>
        </svg>
      </div>
    </div>
  </div>
    <dv class="discount_error"></dv>
    <input class="afHiddenDiscount" name="discount" type="hidden" value="">
  </div>`;
window.KDHooks.__handleHTMLCreations_af = function (htmlElem, cartSelectorObj) {
  // updating html of discount field
  // console.log(kartHtml);
  return kartHtml;
}

window.KDHooks.__discountFinderClick_ba = function () {
  // Preventing discount filder to open on click of view all coupons button
  return false;
}

window.KDHooks.__postDiscountProcess_af = function (response) {
  // Updating html of discount field on the basis of applied discount and updating responce of kart discount api for discount capping.
 // console.log(response, 'response of __postDiscountProcess_af');
 var responseData = JSON.parse(response);
  // var responseData = JSON.parse(response.data.entire_response);
  // console.log(responseData, 'responseData');
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
    $('.discountCode_details').html(`Rs ${saveAmount} savings with this coupon`);
    $('.custom_kartdiscount_container').addClass('discount_added');
    $('.discountCode_details_container').addClass('show');
    $('.custom_kartdiscount_container .af_btn_holder').html(`<button type="button" class="discountCode__remove_btn" onclick="CDSetupInit.removeIndividualCoupon('${discount_code[0]}',this);">Remove</button>`);
    $('.custom_kartdiscount_container').attr('couponCode', 'true');
    $('.mini-cart-total-price').hide();
    $('.discount_error').html('');
  }else if(responseData.is_success == false && responseData.code == "516"){
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
  // here we can get the discount finder list and use it as required
  // here we are getting the data of active discount code from dicount finder list and updating the content of the dicount finder in cart drawer.
  if ($('.custom_kartdiscount_container').attr('couponCode') !== "true") {
    for (let i = 0; i < df_list.length; i++) {
      if (df_list[i].is_active == 1) {
        var applyCoupun = df_list[i].code;
        var applyCoupun_heading = df_list[i].full_detail;
        applyCoupun_heading = applyCoupun_heading.split('•')[0];
        sessionStorage.setItem('applyCoupun', applyCoupun);
        sessionStorage.setItem('applyCoupun_heading', applyCoupun_heading);
        break;
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
  if (df_list.length > 0) {
    for (let i = 0; i < df_list.length; i++) {
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
                  <h6>${df_list[i].full_detail.split('•')[0]}</h6>
                  <!-- <p>${df_list[i].full_detail}</p> -->
                  <span>${df_list[i].code}</span>
              </div>
          </div>
          <div class="discount_finder_item_cta_btn">
              <button type="button" onclick="CDSetupInit.applyDiscount('${df_list[i].code}'), this.innerText = 'Applied', this.classList.add('coupon_applied');" ${df_list[i].is_active == 0 ? 'disabled': ''} class="${preAppliedCoupon == df_list[i].code ? 'coupon_applied' : ''}">${preAppliedCoupon == df_list[i].code ? 'Applied' : 'Tap To Apply'}</button>
          </div>
      </div>`
    }
    discountListContainer.innerHTML = discountListHtml;
  }

  return df_list;
}

var kdDom = document.querySelector('body');
kdDom.addEventListener('KD_discountRemoved', (e) => {
  // here we are updating the content of discount field in cart drawer on removal of discount code.
  $('.custom_kartdiscount_container .af_btn_holder').html(`<button type="button" class="af_custom_apply_coupon_trigger btn btn--regular btn--color btn--fill tlblbr0" id="af_custom_apply_coupon_trigger" onclick="CDSetupInit.couponApplyClick(this)" style="margin:0;width:100%;max-height:42px;min-height:42px;padding: 8px 31px;">
    <af class="af_after_loading">Apply</af>
  </button>`);
  $('.custom_kartdiscount_container').removeAttr('couponCode');
  $('.mini-cart-total-price').show();
  $('.discount_finder_item_cta_btn button').html('Tap To Apply');
  $('.discount_finder_item_cta_btn button').removeClass('coupon_applied');
  $('#af_custom_coupon_text').val(sessionStorage.applyCoupun);
  $('.discountCode_details').html(sessionStorage.getItem('applyCoupun_heading'));
});
kdDom.addEventListener('KD_discountFinderClicked', (e) => {
  if ($('.custom_kartdiscount_container').attr('data-finder') == "true") {
    $('.custom_discount_filder_container').attr('open_finder', true);
  }
});
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


Shopify.KartDiscount = function (cartJson) {
  var total_discount_amount = $('.discount_details').attr('data-discountAmount');
  var offer_discount_code = $('.discount_details').attr('data-discountCode');
  sessionStorage.setItem('total_discount_amount', total_discount_amount);
  sessionStorage.setItem('offer_discount_code', offer_discount_code);
  Shopify.KartDiscountHooks();
}