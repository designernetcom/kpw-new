/***************************************************
==================== JS INDEX ======================
****************************************************

// sticky header 
// Smooth active
// Preloader
// Side Info Js
// meanmenu activation 
// Register GSAP Plugins
// Counter active
// testimonial slider
// wow js activation 


****************************************************/

(function ($) {
  "use strict";


  // sticky header 
  let header = document.querySelector('.header-sticky');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
      header.classList.add('sticky')
    } else {
      header.classList.remove('sticky')
    }
  })



  // Smooth active
  var device_width = window.screen.width;

  if (device_width > 767) {
    if (document.querySelector("#has_smooth").classList.contains("has-smooth")) {
      const smoother = ScrollSmoother.create({
        smooth: 0.5,
        effects: device_width < 1025 ? false : true,
        smoothTouch: 0.1,
        normalizeScroll: true,
        ignoreMobileResize: true,
      });
    }

  }


  // Preloader
  $(document).ready(function () {
    $('#container').addClass('loaded');
    if ($('#container').hasClass('loaded')) {
      $('#preloader').delay(1000).queue(function () {
        $(this).remove();
      });
    }
  });


  // Side Info Js
  $(".side-info-close,.offcanvas-overlay").on("click", function () {
    $(".side-info").removeClass("info-open");
    $(".offcanvas-overlay").removeClass("overlay-open");
  });
  $(".side-toggle").on("click", function () {
    $(".side-info").addClass("info-open");
    $(".offcanvas-overlay").addClass("overlay-open");
  });


  // meanmenu activation 
  $('.main-menu').meanmenu({
    meanScreenWidth: "1199",
    meanMenuContainer: '.mobile-menu',
    meanMenuCloseSize: '28px',
  });


  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);



  // Counter active
  if ('counterUp' in window) {
    const skill_counter = window.counterUp.default
    const skill_cb = entries => {

      entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
          skill_counter(el, {
            duration: 1500,
            delay: 16,
          })
          el.classList.add('is-visible')
        }
      })
    }

    const IO = new IntersectionObserver(skill_cb, {
      threshold: 1
    })

    const els = document.querySelectorAll('.t-counter');
    els.forEach((el) => {
      IO.observe(el)
    });
  }


  // testimonial slider
  if (('.testimonial-slider').length) {
    var testimonial_slider = new Swiper(".testimonial-slider", {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 100,
      speed: 1800,
      watchSlidesProgress: true,
      navigation: {
        prevEl: ".testimonial-button-prev",
        nextEl: ".testimonial-button-next",
      },
      pagination: {
        el: '.testimonial-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        },
        1201: {
          slidesPerView: 1,
        },
        1367: {
          slidesPerView: 1,
        },
      }
    });
  }

    // testimonial slider
    if (('.product-slider').length) {
      var product_slider = new Swiper(".product-slider", {
        loop: true,
        autoplay : true,
        slidesPerView: 1,
        spaceBetween: 50,
        speed: 1800,
        watchSlidesProgress: true,
        navigation: {
          prevEl: ".testimonial-button-prev",
          nextEl: ".testimonial-button-next",
        },
        pagination: {
          el: '.testimonial-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          // when window width is >= px
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
          1201: {
            slidesPerView: 4,
          },
          1367: {
            slidesPerView: 5,
          },
        }
      });
    }


        // testimonial slider
        if (('.client-slider').length) {
          var client_slider = new Swiper(".client-slider", {
            loop: true,
            autoplay : true,
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 1800,
            watchSlidesProgress: true,
            navigation: {
              prevEl: ".testimonial-button-prev",
              nextEl: ".testimonial-button-next",
            },
            pagination: {
              el: '.testimonial-pagination',
              type: 'bullets',
              clickable: true
            },
            breakpoints: {
              // when window width is >= px
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1201: {
                slidesPerView: 5,
              },
              1367: {
                slidesPerView: 6,
              },
            }
          });
        }



        var swiper = new Swiper(".swipe1", {
          effect: "coverflow",
          grabCursor: true,
          autoplay:true,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
          },
          keyboard: {
            enabled: true
          },
          mousewheel: {
            thresholdDelta: 70
          },
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          breakpoints: {
            640: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 1
            },
            1024: {
              slidesPerView: 2
            },
            1560: {
              slidesPerView: 3
            }
          }
        });
        

            //12. Fancybox
    Fancybox.bind("[data-fancybox]", {});

      
  // wow js activation 
  new WOW().init();

})(jQuery);