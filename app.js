//Smooth Scrolling for links and buttons with Jquery

/*$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    1000
  );
});*/

$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// Navigation change color after scrolling

/* const navbar = document.getElementById("navbar");

window.onscroll = function() {
  var top = window.scrollY;
  console.log(top);
  if (top >= 50) {
    navbar.classList.add("navactive");
  } else {
    navbar.classList.remove("navactive");
  }
}; */

// Menu Toggler

/* $("#toggle").click(function() {
  $(this).toggleClass("active");
  $("#overlay").toggleClass("open");
}); */

//navigation open and close function

$(function() {
  $("#toggle").click(function() {
    $(this).toggleClass("active");
    $("#overlay").toggleClass("open");
  });

  $("#overlay .overlay-menu ul li a").click(function() {
    $("#toggle").removeClass("active");
    $("#overlay").removeClass("open");
  });
});
