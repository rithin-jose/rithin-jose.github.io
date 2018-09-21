$(document).ready(function() {

    $(window).scroll(function() {

        if ($(window).scrollTop() > 1) {
          $('nav').addClass('my-nav');
        }
        else {

            $('nav').removeClass('my-nav');

        }

    });
});

$(function() {
   $(".links").click(function() {
      // remove classes from all
      $(".links").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
});
