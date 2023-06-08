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
    const element = document.getElementById("tab__01");
    element.scrollIntoView({ block: "center", behavior: "smooth" });
  });
});
$(document).ready(function () {
  $(".services__tabs-link").click(function (e) {
    e.preventDefault();
    const element2 = document.getElementById("tab__02");
    element2.scrollIntoView({ block: "center", behavior: "smooth" });
  });
});
$(document).ready(function () {
  $(".services__tabs-link").click(function (e) {
    e.preventDefault();
    const element3 = document.getElementById("tab__03");
    element3.scrollIntoView({ block: "center", behavior: "smooth" });
  });
});
$(document).ready(function () {
  $(".services__tabs-link").click(function (e) {
    e.preventDefault();
    const element4 = document.getElementById("tab__04");
    element4.scrollIntoView({ block: "center", behavior: "smooth" });
  });
});
$(document).ready(function () {
  $(".services__tabs-link").click(function (e) {
    e.preventDefault();
    const element5 = document.getElementById("tab__05");
    element5.scrollIntoView({ block: "center", behavior: "smooth" });
  });
});
$(document).ready(function () {
  $(".services__tabs-link").click(function (e) {
    e.preventDefault();
    const element6 = document.getElementById("tab__06");
    element6.scrollIntoView({ block: "center", behavior: "smooth" });
  });
});
$(document).ready(function () {
  $(".services__tabs-link").click(function (e) {
    e.preventDefault();
    const element7 = document.getElementById("tab__07");
    element7.scrollIntoView({ block: "center", behavior: "smooth" });
  });
});
$(document).ready(function () {
  $(".services__tabs-link").click(function (e) {
    e.preventDefault();
    const element8 = document.getElementById("tab__08");
    element8.scrollIntoView({ block: "center", behavior: "smooth" });
  });
});
