document.addEventListener("DOMContentLoaded", function () {
    const rootElement = document.documentElement;

    let burger = document.querySelector(".hamburger"),
        header = document.querySelector(".header"),
        startScreen = document.querySelector('.js-main');



    window.onscroll = function () {
        fixed();
    }

    function fixed() {
        let headerHeight = header.getBoundingClientRect().height;

        let headerFixed = startScreen.offsetHeight - headerHeight;
        //&& window.pageYOffset >= headerFixed
        if (window.scrollY > 0 && window.pageYOffset >= headerFixed) {
            header.classList.add("header__fixed");
        } else {
            header.classList.remove("header__fixed");
        }
    }
        if(burger){
            burger.addEventListener("click", () => {
                rootElement.classList.toggle("block");
                header.classList.toggle("header--open");
                burger.classList.toggle("hamburger--active");

            })
        }



    let quotesBtn = document.querySelector('.quotes__btn');
    let popup = document.querySelector(".popup");
    let overlay = document.querySelector(".overlay");
    let productsBtn = document.querySelector(".products__btn");
    let startBtn = document.querySelector(".start__btn--defolt");
    if (quotesBtn) {
        quotesBtn.addEventListener("click", () => {
            popup.classList.add("popup__show");
            rootElement.classList.add("block");
            overlay.classList.add("active-overlay");
        });
    }
    if (productsBtn) {
        productsBtn.addEventListener("click", () => {
            popup.classList.add("popup__show");
            rootElement.classList.add("block");
            overlay.classList.add("active-overlay");
        });
    }
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            popup.classList.add("popup__show");
            rootElement.classList.add("block");
            overlay.classList.add("active-overlay");
        });
    }
    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;
        if (key == 27) {
            popup.classList.remove("popup__show");
            rootElement.classList.remove("block");
            overlay.classList.remove("active-overlay");

        }
    }, false);
    window.addEventListener("click", (e) => {
        let target = e.target;
        if (target.classList.contains("active-overlay")) {
            popup.classList.remove("popup__show");
            rootElement.classList.remove("block");
            overlay.classList.remove("active-overlay");
        }
    })
    let swiperBrands = new Swiper(".brands__swiper", {
        slidesPerView: "auto",
        spaceBetween: 74,

        navigation: {
            nextEl: ".brands__next",
            prevEl: ".brands__prev",
        },
        breakpoints: {
            320: {
                spaceBetween: 20
            },
            1000: {
                spaceBetween: 74,
            }
        }
    });

   let swiperPrimary = new Swiper(".primary__swiper", {
        slidesPerView: "auto",

       breakpoints: {
           320: {
           },

       },
       on: {
           resize() {
               if (window.innerWidth <= 1200) {
                   this.enable();
               } else if (window.innerWidth > 1200) {
                   this.slideTo(0);
                   this.disable();
               }
           },
       },

   });

    // let swiperPrimaryEN = new Swiper(".primary__swiper--en", {
    //     breakpoints: {
    //         320: {
    //             slidesPerView: "auto",
    //         },
    //
    //     },
    //     on: {
    //         resize() {
    //             if (window.innerWidth <= 1200) {
    //                 this.enable();
    //             } else if (window.innerWidth > 1200) {
    //                 this.slideTo(0);
    //                 this.disable();
    //             }
    //         },
    //     },
    //
    // });

    /* Плавный скролл к элементам */
    window.scrollSmooth = (container = document) => {
        const hrefAttributes = container.querySelectorAll("a[href*='#']");

        hrefAttributes.forEach((item) => {
            const href = item.href.split('#');

            const CURRENT_URL = window.location.origin + window.location.pathname;

            if (href[0] === CURRENT_URL) {
                item?.addEventListener('click', (e) => {
                    e.preventDefault();

                    const scrollTarget = document.getElementById(href[1]);

                    const topOffset = 70;
                    const elementPosition = scrollTarget.getBoundingClientRect().top;
                    const offsetPosition = elementPosition - topOffset;

                    window.scrollBy({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });
                });
            }
        });
    };

    window.scrollSmooth();


    // let langBtn = document.querySelector(".lang__button");
    // let langList = document.querySelector(".lang__list");
    // if (langBtn) {
    //     langBtn.addEventListener("click", (e) => {
    //         if (langList.classList.contains("hide")) {
    //             langList.classList.remove("hide");
    //             langList.classList.add("show");
    //         } else {
    //             langList.classList.remove("show");
    //             langList.classList.add("hide");
    //         }
    //
    //     })
    // }


    console.log("DOM fully loaded and parsed");
})