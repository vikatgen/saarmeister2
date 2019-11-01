//Smooth Scrolling for links and buttons with Jquery

/*$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    1000
  );
});

// Navigation change color after scrolling

const navbar = document.getElementById("navbar");

window.onscroll = function() {
  var top = window.scrollY;
  console.log(top);
  if (top >= 50) {
    navbar.classList.add("navactive");
  } else {
    navbar.classList.remove("navactive");
  }
}; */

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  toggleClasses();
});

function toggleClasses() {
  hamburger.classList.toggle("open");
  menu.classList.toggle("open");
}

setTimeout(toggleClasses, 500);
setTimeout(toggleClasses, 3000);
