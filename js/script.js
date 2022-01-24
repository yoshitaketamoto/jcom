const swiper1 = new Swiper('.swiper1', {
  slidesPerView: 1,
  breakpoints: {
    1140: {
      slidesPerView: 1.3,
    }
  },
  speed: 800,
  centeredSlides: true,
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  },
});

const swiper2 = new Swiper('.swiper2', {
  speed: 800,
  centeredSlides: true,
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
  	delay: 3000,
  	stopOnLastSlide: false,
  	disableOnInteraction: false,
  	reverseDirection: false
  },
});

const swiper3 = new Swiper('.swiper3', {
  breakpoints: {
    768: {
      spaceBetween: 20,
    }
  },
  speed: 800,
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  },
  slidesPerView: 1.7,
  centeredSlides: true,
  spaceBetween: 0,
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
  	delay: 3000,
  	stopOnLastSlide: false,
  	disableOnInteraction: false,
  	reverseDirection: false
  },
});

$(".openbtn").click(function () {
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
  $(".openbtn").removeClass('active');
  $("#g-nav").removeClass('panelactive');
});

$(".toggle-btn").on('click', function () {
  $(this).next(".toggle-wrap").slideToggle(300);
  if ($(this).children(".close-bar").hasClass('close')) {
    $(this).children(".close-bar").removeClass('close');
  } else {
    $(this).children(".close-bar").addClass('close');
  }
});


$('.footer-menu-title').on('click', function () {
  $(this).next('.footer-menu-box').slideToggle();
  if ($(this).hasClass('close')) {
    $(this).removeClass('close');
  } else {
    $(this).addClass('close');
  }
});

$(function () {
  var pagetop = $('.top-btn');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  if (window.matchMedia('(min-width: 768px)').matches) {
    /* ウィンドウサイズ668以下の処理を記述 */
    var slideup = $('.slideup-btn');
    slideup.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        slideup.fadeIn();
      } else {
        slideup.fadeOut();
      }
    });
    slideup.click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  }
});

$('.sidebar-list-1').hover(
  function() {
    $('.sidebar-right-1').toggleClass('is-open');
  }
);
$('.sidebar-list-2').hover(
  function() {
    $('.sidebar-right-2').toggleClass('is-open');
  }
);
$('.sidebar-list-3').hover(
  function() {
    $('.sidebar-right-3').toggleClass('is-open');
  },
);
$('.sidebar-list-4').hover(
  function() {
    $('.sidebar-right-4').toggleClass('is-open');
  }
);
$('.sidebar-list-5').hover(
  function() {
    $('.sidebar-right-5').toggleClass('is-open');
  },
);
$('.sidebar-list-6').hover(
  function() {
    $('.sidebar-right-6').toggleClass('is-open');
  }
);
$('.sidebar-list-7').hover(
  function() {
    $('.sidebar-right-7').toggleClass('is-open');
  }
);
$(document).ready(function(){
  $('#main').mouseover(function(){
    $('.sidebar-right').removeClass('is-open');
  });
});

$(function () {
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
     var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});