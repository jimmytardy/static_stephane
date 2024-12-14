/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function () {
  /* start typed element */
  //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
  var subElementArray = $.map($(".sub-element"), function (el) {
    return $(el).text();
  });
  $(".element").typed({
    strings: subElementArray,
    typeSpeed: 30,
    contentType: "html",
    showCursor: false,
    loop: true,
    loopCount: true,
  });
  /* end typed element */

  /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/
  $(".custom-nav").singlePageNav({
    offset: $(".custom-nav").height(),
    filter: ":not(.external)",
    updateHash: false,
  });

  /* start navigation top js */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 58) {
      $(".custom-nav").addClass("sticky");
    } else {
      $(".custom-nav").removeClass("sticky");
    }
  });

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
  /* end navigation top js */

  $("body").bind("touchstart", function () {});

  /* wow
    -----------------*/
  new AOS.init();
});

/* start preloader */
$(window).load(function () {
  $(".preloader").fadeOut(1000); // set duration in brackets
});
/* end preloader */

window.addEventListener("DOMContentLoaded", function () {
  const videos = document.getElementsByClassName("custom-video");
  for (const video of videos) {
    video.addEventListener("click", function (e) {
      video.src = video.getAttribute("data-src"); // Remplacez par le chemin de votre vidéo
      video.setAttribute('controls', true)
      video.classList.add('in-progress')
      video.parentElement.classList.add('in-progress')
      video.load(); // Charge la vidéo
      video.play(); // Démarre automatiquement la lecture si besoin
    });
  }
});
