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


const swiper1 = new Swiper(".sample-slider", {
    grid: {
        rows: 2,
    },
    loop: false,
    slidesPerGroup: 1,
    slidesPerView: 4,
    spaceBetween: false,
    scrollbar: '.swiper-scrollbar',
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
            spaceBetween: 30,
            grid: {
                rows: 2,
            },
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1
            ,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        // when window width is <= 999px
            999: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
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
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 60
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 60
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 60,
              },
            999:{
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
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        // when window width is <= 999px
            999: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        },
        1200: {
            slidesPerView: 4,
            spaceBetweenSlides: 30
        },
    }
})



