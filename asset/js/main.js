window.onscroll = function () {
    myFunction()
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

const from = document.querySelector('form')
from.addEventListener('submit',(e)=>{
    e.preventDefault()

    const captchaResponse = grecaptcha.getResponse();

    if (captchaResponse.length > 0){
        throw new Error("Captcha not complete")
    }

    const fd = new FormData(e.target)
    const params = new URLSearchParams(fd)

    fetch('http://httpbin.org/post', {
        method:"POST",
        body: params,
    })
    .then(res => res.json())
    then(data => console.log(data))
    .catch(err => console.error(err))

})


const swiper1 = new Swiper(".sample-slider", {
    grid: {
        rows: 2,
    },
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: false,
    scrollbar: '.swiper-scrollbar',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,   
      },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        prevEl: '.slidePrev-btn',
        nextEl: '.slideNext-btn'
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            grid: {
                rows: 1,
            },
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
            grid: {
                rows: 1,
            },
        },
        // when window width is >= 640px
        540: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        // when window width is <= 991px
            991: {
            slidesPerView: 3,
            spaceBetweenSlides: 30,
        },
          1400:{
            slidesPerView: 4,
            spaceBetween: false,
          }
    }
})

const swiper2 = new Swiper(".discover__swiper", {
    slidesPerGroup: 1,
    slidesPerView: 3,
    spaceBetween: 60,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        prevEl: '.slidePrev-btn',
        nextEl: '.slideNext-btn'
    },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 60,
            },
            720: {
                slidesPerView: 1,
                spaceBetween: 60,
              },
              750:{
                slidesPerView: 2,
                spaceBetween: 60,
              },
            1100:{
                slidesPerView: 3,
                spaceBetween: 60, 
            }
        }
});

const swiper3 = new Swiper(".collection__swiper", {
    slidesPerView: 4,
    grid: {
        rows: 2,
    },
    loop: true,
    slidesPerGroup: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
   // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        grid: {
            rows: 2,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        1200: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        },
    }
})

const swiper4 = new Swiper(".commonity-swiper", {
    slidesPerView: 4,
    centeredSlides: false,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop:  true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 30,
        },
        grid: {
            rows: 2,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        // when window width is <= 999px
            999: {
            slidesPerView: 2,
            spaceBetweenSlides: 40
        },
        1200:{
            slidesPerView: 3,
            spaceBetweenSlides: 30
        },
        1400:{
            slidesPerView: 4,
            spaceBetweenSlides: 30
        }
    }
  });



