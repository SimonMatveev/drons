const swiper1 = new Swiper(".main-block__swiper", {

    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let burger = document.querySelector(".header__menu-icon");
let menu = document.querySelector(".header__menu-list");
let body = document.querySelector("body");

if (burger) {
    burger.onclick = function () {
        if (menu) {
            menu.classList.toggle("header__menu-list--active");
            burger.classList.toggle("header__menu-icon--active");
            body.classList.toggle("body--lock");
        }
    }
}

let playpause = document.querySelector(".how-it-works__play-button")
let video = document.querySelector(".how-it-works__video")


playpause.addEventListener('click', function (e) {
    if (video.paused || video.ended) {
        video.play();
        video.setAttribute("controls","true");
        playpause.classList.toggle("how-it-works__play-button--hidden");
    }
});

