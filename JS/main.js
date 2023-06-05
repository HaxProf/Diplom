$(".burger, .overlay").on("click", function (e) {
  e.preventDefault();
  $(".header").toggleClass("header__open");
  $(".overlay").toggleClass("overlay--show");
});
$(".burger, .overlay").on("click", function (e) {
  e.preventDefault();
  $(".burger").toggleClass("burger__open");
});
$(function () {
  var mixer = mixitup(".target");
});

$(document).ready(function () {
  $(".services__tabs-link").click(function (e) {
    e.preventDefault();
    $(".services__tabs-body").removeClass("services__tabs-body--active");
    $($(this).attr("href")).addClass("services__tabs-body--active");
  });
});
