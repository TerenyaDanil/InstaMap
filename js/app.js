

// burger = document.querySelector('.header__burger');
// menu = document.querySelector('.header__menu');
// body = document.querySelector('body');

// burger.onclick = function () {
//     burger.classList.toggle('active');
//     menu.classList.toggle('active');

// }


const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}



// btn = document.querySelector('.inner-program__btn');
// dop = document.querySelector('.inner-program__item-dop');


// btn.onclick = function () {
//     btn.classList.add('active');
//     dop.classList.add('active');

// }


var qus = document.querySelectorAll('.qustions__item-plus')

qus.forEach(function (el) {
    el.onclick = function () {
        el.classList.toggle("active");
        el.previousElementSibling.classList.toggle("active");
    }
});


// var swiper = new Swiper('.cases__slider', {
//     slidesPerView: 1,
//     slidesPerGroup: 1,

//     loop: true,
//     speed: 1000,
//     navigation: {
//         nextEl: '.cases__slider-next',
//         prevEl: '.cases__slider-prev',
//     },
//     breakpoints: {

//         768: {
//             slidesPerView: 2,

//             slidesPerGroup: 2,
//             spaceBetween: 100,
//         },

//     }

// });

// var swiper = new Swiper('.rev__slider', {
//     slidesPerView: 1,
//     slidesPerGroup: 1,
//     spaceBetween: 100,
//     loop: true,
//     speed: 1000,
//     navigation: {
//         nextEl: '.rev__slider-next',
//         prevEl: '.rev__slider-prev',
//     },
//     breakpoints: {

//         768: {
//             slidesPerView: 2,
//             spaceBetween: 100,
//             slidesPerGroup: 2,
//         },

//     }

// });




let header = gsap.timeline({
    scrollTrigger: {
        trigger: ".header",   // pin the trigger element while active
        start: "top center",

    }
});
if (window.innerWidth > 737) {

    header.from(".header__dop", { duration: 1, ease: "power4.out", opacity: 0, x: 100 }, "+=0.2")
        .from(".bot-header__time", { duration: 1, ease: "power4.out", opacity: 0, x: -150 }, "-=0.6")
        .from(".bot-header__title", { duration: 1.2, ease: "power4.out", opacity: 0, x: -150 }, "-=0.6")
        .from(".bot-header__btn", { duration: 1, ease: "power4.out", opacity: 0, x: -150 }, "-=0.8")

} else {
    header.from(".header__dop", { duration: 1, ease: "power4.out", opacity: 0, x: 100 }, "+=0.2")
        .from(".bot-header__time", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".bot-header__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".bot-header__btn", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.8")
}


let forr = gsap.timeline({
    scrollTrigger: {
        trigger: ".for",   // pin the trigger element while active
        start: "top center",

    }
});


forr.from(".for__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".inner-for__item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".inner-for__item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".inner-for__item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")



let program = gsap.timeline({
    scrollTrigger: {
        trigger: ".program",   // pin the trigger element while active
        start: "top center",

    }
});


program.from(".program__title", { duration: 1, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".program__img", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".inner-program__item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".inner-program__item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".inner-program__item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".inner-program__item-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".inner-program__item-5", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".inner-program__item-6", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".inner-program__item-7", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")



let tarif = gsap.timeline({
    scrollTrigger: {
        trigger: ".tarif",   // pin the trigger element while active
        start: "top center",

    }
});


let tarifItem = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__price-1",   // pin the trigger element while active
        start: "-300px center",
        end: "center center",



    }
});

let ItemOne = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__item-1",   // pin the trigger element while active
        start: "200px center",



    }
});


let ItemTwo = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__item-2",   // pin the trigger element while active
        start: "200px center",



    }
});


let ItemThree = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__item-3",   // pin the trigger element while active
        start: "200px center",

    }
});


let tarifOne = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__price-1",   // pin the trigger element while active
        start: "top center",


    }
});


let tarifTwo = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__price-2",   // pin the trigger element while active
        start: "top center",


    }
});


let tarifThree = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__price-3",   // pin the trigger element while active
        start: "top center",

    }
});




if (window.innerWidth > 737) {


    tarif.from(".tarif__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
        .from(".inner-tarif__img-1", { duration: 1.2, ease: "power4.out", opacity: 0, y: -50 }, "-=0.8")
        .from(".inner-tarif__img-2", { duration: 1.2, ease: "power4.out", opacity: 0, y: -50 }, "-=0.8")
        .from(".inner-tarif__img-3", { duration: 1.2, ease: "power4.out", opacity: 0, y: -50 }, "-=0.8")

    tarifItem.from(".inner-tarif__price-1 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-1", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-1 active" })
        .from(".inner-tarif__price-1 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })
        .from(".inner-tarif__price-2 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-2", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-2 active" })
        .from(".inner-tarif__price-2 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })
        .from(".inner-tarif__price-3 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-3", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-3 active" })
        .from(".inner-tarif__price-3 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })
} else {
    tarif.from(".tarif__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")

    ItemOne.from(".inner-tarif__img-1", { duration: 1.2, ease: "power4.out", opacity: 0, y: -50 }, "+=0.2")

    tarifOne.from(".inner-tarif__price-1 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-1", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-1 active" })
        .from(".inner-tarif__price-1 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })

    ItemTwo.from(".inner-tarif__img-2", { duration: 1.2, ease: "power4.out", opacity: 0, y: -50 }, "+=0.2")

    tarifTwo.from(".inner-tarif__price-2 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-2", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-2 active" })
        .from(".inner-tarif__price-2 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })

    ItemThree.from(".inner-tarif__img-3", { duration: 1.2, ease: "power4.out", opacity: 0, y: -50 }, "+=0.2")


    tarifThree.from(".inner-tarif__price-3 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-3", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-3 active" })
        .from(".inner-tarif__price-3 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })

}

let qustions = gsap.timeline({
    scrollTrigger: {
        trigger: ".qustions",   // pin the trigger element while active
        start: "top center",

    }
});


qustions.from(".qustions__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".qustions__item-1", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "-=0.8")
    .from(".qustions__item-2", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "-=0.8")
    .from(".qustions__item-3", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "-=0.8")
    .from(".qustions__item-4", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "-=0.8")
    .from(".qustions__item-5", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "-=0.8")
    .from(".qustions__dop-right", { duration: 1.2, ease: "power4.out", opacity: 0, x: 50 }, "-=0.8")



let qustionsDop = gsap.timeline({
    scrollTrigger: {
        trigger: ".qustions__send",   // pin the trigger element while active
        start: "top center",

    }
});

qustionsDop.from(".send-qustions__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "-=0.8")
    .from(".send-qustions__text", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "-=0.8")
    .from(".qustions__dop-left", { duration: 1.2, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")

