<!-- owl карусель -->

$('.slider1').owlCarousel({
    loop: true,
    // autoplay: true,
    autoplayTimeout: 3000,
    stagePadding: 0,
    // center: true,
    nav: true,
    navText: [$('.arrow-left '), $('.arrow-right')],
    dots: false,
    margin: 20,

    responsive: {
      0: {
        items: 1,
        center: true

      },
      993: {
        items: 1,
        center: true

      },
      1199: {
        items: 1,
        center: true

      },
      1330: {
        items: 2,
        center: false

      }
    }
  })


  // карусель 2
  $('.slider2').owlCarousel({
    loop: true,
    // autoplay: true,
    autoplayTimeout: 3000,
    stagePadding: 0,
    // center: true,
    nav: true,
    navText: [$('.slider-left '), $('.slider-right')],
    dots: false,
    margin: 20,

    responsive: {
      0: {
        items: 1,

      },
      1199: {
        items: 1,

      },
      1330: {
        items: 2,

      }
    }
  })
  // карусель 3
  $('.slider3').owlCarousel({
    loop: true,
    // autoplay: true,
    autoplayTimeout: 3000,
    stagePadding: 0,
    // center: true,
    nav: true,
    navText: [$('.slider-left2 '), $('.slider-right2')],
    dots: false,
    margin: 20,

    responsive: {
      0: {
        items: 2,

      },
      576: {
        items: 3,

      },
      992: {
        items: 3,

      },
      1199: {
        items: 4,

      },
      1330: {
        items: 4,

      }
    }
  })
  // карусель 4
  $('.slider4').owlCarousel({
    loop: true,
    // autoplay: true,
    autoplayTimeout: 3000,
    stagePadding: 0,
    // center: true,
    nav: true,
    navText: [$('.slider-left3 '), $('.slider-right3')],
    dots: false,
    margin: 30,

    responsive: {
      0: {
        items: 1,

      },
      1199: {
        items: 2,

      },
      1330: {
        items: 2,

      }
    }
  })

  
  
  
  // стики
  $(document).ready(function () {

    var element = $(".fixed_block");
    var height_el = element.offset().top;

    $(".fixed_block_position").css({
      "width": element.outerWidth(),
      "height": element.outerHeight()
    });

    $(window).scroll(function () {

      if ($(window).scrollTop() > height_el) {

        element.addClass("fixed");

      } else {

        element.removeClass("fixed");

      }

    });

  });

  $(function () {

    $(window).scroll(function () {

      if ($(this).scrollTop() != 0) {

        $('#toTop').fadeIn();

      } else {

        $('#toTop').fadeOut();

      }

    });

    $('#toTop').click(function () {

      $('body,html').animate({
        scrollTop: 0
      }, 200);

    });

  });
