/*javascript  swiper*/
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      width: 680,
      spaceBetween: 35,
    },
    1024: {
      loop: true,
      width: 1880,
      spaceBetween: 67,
      centeredSlides: true,
      slidesPerView: 4.5,

    },
  },


  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  /*pagination: {
    el: '.swiper-pagination',
  },*/

  // Navigation arrows


})

/*フォーム*/





$('.check #form').submit(function (event) {

  if (!$('form')[0].reportValidity()) {

  }
  var formData = $('#form').serialize();
  $.ajax({
    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdeS74p9837wxhsb-rsmDC3d1vHe0xfD6QrFt76bMc1os36Rg/formResponse",
    data: formData,
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        $(".end-message").slideDown();
        $(".submit").fadeOut();
        //window.location.href = "thanks.html";
      },
      200: function () {
        $(".false-message").slideDown();
      }
    }
  });

  event.preventDefault();
});




//jQuery
$(function () {
  $(".query").on("click", function () {
    $(this).next(".answer").slideToggle();
  });

  $("a[href^='#']:not([href='#'])").click(function () {
    var target = $($(this).attr("href")).offset().top;
    target -= 140;
    $("html,body").animate({ scrollTop: target }, 500);

    return false;
  });

  setTimeout(function () {
    $(".main").fadeIn(1600);
  }, 500);

  $('.menu-trigger').on('click', function () {
    $('.hamburger').toggle();
  });

  $('.menu-trigger').on('click', function () {
    $(this).toggleClass('active');
  });



  AOS.init();

});


