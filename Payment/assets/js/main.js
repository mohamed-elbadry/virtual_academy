$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".scroll-top-button").fadeIn();
    } else {
      $(".scroll-top-button").fadeOut();
    }
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(".scroll-top-button").on('click', function () {
    $('html , body').animate({
      scrollTop: 0
    }, 100);
  });

  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('active');
    $('.navbar-nav').toggleClass('active-nav');
    $('body').toggleClass('overflowNone')
  });

  var swiper = new Swiper(".swiper-header", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".swiper-courses", {
    spaceBetween: 10,
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
    },
  });

  $('.add-to-cart').on('click', function () {
    var cart = $('.cart-icon');
    var imgtodrag = $(this).closest('.course-box').find("img").first();
    if (imgtodrag) {
      var imgclone = imgtodrag.clone()
        .offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left
        })
        .css({
          'opacity': '0.8',
          'position': 'absolute',
          'height': '150px',
          'width': '150px',
          'border-radius': '50%',
          'z-index': '9999'
        })
        .appendTo($('body'))
        .animate({
          'top': cart.offset().top + 10,
          'left': cart.offset().left + 10,
          'width': 75,
          'height': 75
        }, 1000, 'easeInOutExpo');

      setTimeout(function () {
        cart.effect("bounce", {
          times: 1
        }, 200);
      }, 1500);

      imgclone.animate({
        'width': 0,
        'height': 0
      }, function () {
        $(this).detach()
      });
    }
  });

  $(".fav-icon").on('click', function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
  });

  $(".show-pass").on('click', function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
  });

  $(".show_hide_password .show-pass").on('click', function (event) {
    event.preventDefault();
    if ($(this).siblings("input").attr("type") == "text") {
      $(this).siblings("input").attr('type', 'password');
    } else if ($(this).siblings("input").attr("type") == "password") {
      $(this).siblings("input").attr('type', 'text');
    }
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
        $('#imagePreview').hide();
        $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#imageUpload").change(function () {
    readURL(this);
  });

  $("[data-fancybox]").fancybox({
    selector: '[data-fancybox="images"]',
    loop: true
  });

});

$("input:checkbox").on('click', function () {
  var $box = $(this);
  if ($box.is(":checked")) {
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});