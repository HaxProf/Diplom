$(".burger, .overlay").on("click", function (e) {
    e.preventDefault();
    $(".header").toggleClass("header__open");
	$(".overlay").toggleClass("overlay--show");
  });
  $(".burger, .overlay").on("click", function (e) {
    e.preventDefault();
    $(".burger").toggleClass("burger__open");
  });
 
