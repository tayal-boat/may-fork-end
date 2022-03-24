$('#zestmoney-widget-control').click(function() {
 clevertap.event.push("ZestMoney Widget Clicked", {
    "Product Name": '{{product.title}}',
    "Product Id": '{{product.id}}',
    "Product Category": '{{product.type}}',
    "Product Price": '{{product.price}}',
    "userSource": userSource
 });
});