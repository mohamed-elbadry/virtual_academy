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

  $('.hamburger').click(function(){
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
      top: imgtodrag.offset().top ,
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

  $(".fav-icon").on('click', function(event) {
    event.preventDefault();
    
    $(this).toggleClass("active");
  });

  $(".show-pass").on('click', function(event) {
    event.preventDefault();
    
    $(this).toggleClass("active");
  });

  $(".show_hide_password .show-pass").on('click', function(event) {
    event.preventDefault();
    if($(this).siblings("input").attr("type") == "text"){
      $(this).siblings("input").attr('type', 'password');
    }else if($(this).siblings("input").attr("type") == "password"){
      $(this).siblings("input").attr('type', 'text');
    }
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
        $('#imagePreview').hide();
        $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#imageUpload").change(function() {
    readURL(this);
  });
    
  $("[data-fancybox]").fancybox({
      selector: '[data-fancybox="images"]',
      loop: true
  });
  
});


/*----------------------------------------*/

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
const done = document.querySelectorAll('.done');
done.forEach(function (el, key) {
  el.addEventListener('click', function (event) {
    event.preventDefault();
    const a = el.parentElement;
    const b = a.children[1];
    if (b.style.display === "none") {
      b.style.display = "block";
      $(this)
        .find('[data-fa-i2svg]')
        .toggleClass('fa-angle-down')
        .toggleClass('fa-angle-up');
    } else {
      b.style.display = "none";
      $(this)
        .find('[data-fa-i2svg]')
        .toggleClass('fa-angle-down')
        .toggleClass('fa-angle-up');
    }
  });
});

const play=document.getElementById('play');
const video=document.getElementById('testvideo');
const imag=document.getElementById('imag');
const wec=document.getElementById('wec')
play.addEventListener('click',function () {
  if (video.paused) {
    video.play()
    play.style.display='none';
    video.setAttribute("controls","controls")


} else {
  
}
  
})
video.addEventListener('pause',function () {
  play.style.display='block';
})

video.addEventListener('play',function () {
  play.style.display='none';
})