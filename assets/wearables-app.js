<script type="text/javascript">
  $(document).ready(function() {
    $("p.product-ques").append(`<span class="expand icon-faq"><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/down-arrow_2.png?v=1618568473" /></span>`);
    $("p.product-ques").click(function() {
      $(this).next(".product-ans").slideToggle("fast");
      $(this).find(".icon-faq").toggleClass("collapsed").removeClass("expand");
      $(this)
        .closest(".ac-tab-new")
        .siblings(".ac-tab-new")
        .find(".product-ans")
        .slideUp("fast");
      $(this)
        .closest(".ac-tab-new")
        .siblings(".ac-tab-new")
        .find(".icon-faq")
        .removeClass("collapsed")
        .addClass("expand");
    });
    $(".faqs").click(function() {
      $(this).hide();
      $(".ac-col").fadeIn();
    })
  });
</script>