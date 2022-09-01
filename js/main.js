"use strict";



//loading
const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach(function (spyEl) {
    new ScrollMagic.Scene({
        // 감시할 장면(Scene)을 추가
        triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
        triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
    })
        .setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스 추가
        .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});


////home 글자 fade-in
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 1.4, //0.7, 1.4, 2.1, 2.7 s 후 동작
        opacity: 1,
    });
});



//이미지 바운스
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
    gsap.to(
        selector, //선택자
        random(1.5, 2.5), //애니메이션 동작 시간
        {
            y: size,
            repeat: -1, //무한반복
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, delay)
        });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


//about Progress Bar
var lang = {
    "html": "100%",
    "css": "90%",
    "javascript": "60%",
    "react": "40%"
};

var multiply = 3;

$.each(lang, function (language, pourcent) {

    var delay = 1500;

    setTimeout(function () {
        $('#' + language + '-pourcent').html(pourcent);
    }, delay * multiply);

    multiply++;

});



//scroll when tapping
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove("open");

    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: "smooth" });
});



//navbar toggle btn
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");

navbarToggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("open");
});


var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});


// //arrow-up

// const arrowUp = document.querySelector(".arrow-up");
// const homeHeight = home.getBoundingClientRect().height;

// document.addEventListener("scroll", () => {
//     if (window.scrollY > homeHeight / 2) {
//         arrowUp.classList.add("visible");
//     } else {
//         arrowUp.classList.remove("visible");
//     }
// });



// //Portfolio filter
// const protfolioFilter = document.querySelector(".category_button");
// const protfolioNameFilter = document.querySelector(".portfolio_group");
// const protfolio = document.querySelectorAll(".portfolio");
// protfolioFilter.addEventListener("click", (e) => {
//     const filter = e.target.dataset.filter;
//     if (filter == null) {
//         return;
//     }
//     console.log(filter);

//     protfolio.forEach((portfolio) => {
//         console.log(portfolio.dataset.type);
//         if (filter === "*" || filter === portfolio.dataset.type) {
//             portfolio.classList.remove("invisible");
//         } else {
//             portfolio.classList.add("invisible");
//         }
//     });
// });
