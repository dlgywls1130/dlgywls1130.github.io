
'use strict'



//home back

function init(){

  //estrelas

  var style = ["style1", "style2", "style3", "style4"];
  var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
  var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var estrela = "";
  var qtdeEstrelas = 250;
  var noite = document.querySelector(".constelacao");
  var widthWindow = window.innerWidth;
  var heightWindow = window.innerHeight;

  for (var i = 0; i < qtdeEstrelas; i++) {
    estrela += "<span class='estrela " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
    + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." +getRandomArbitrary(0, 9)+ "s; left: "
    + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
  }

  noite.innerHTML = estrela;


}


//navbar scroll
window.onload = init;

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(`navbarHeight: ${navbarHeight}`);
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

//scroll when tapping
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {

  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');

  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior:"smooth"});

});

//navbar toggle btn
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');

navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
})

//arrow-up

const arrowUp = document.querySelector('.arrow-up');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

//Portfolio filter
const protfolioFilter = document.querySelector('.category_button');
const protfolioNameFilter = document.querySelector('.portfolio_group');
const protfolio = document.querySelectorAll('.portfolio');
protfolioFilter.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter;
    if(filter == null){
        return;
    }
    console.log(filter);

    protfolio.forEach((portfolio) => {
       console.log(portfolio.dataset.type);
       if(filter === '*' || filter === portfolio.dataset.type) {
        portfolio.classList.remove('invisible');
       } else{
        portfolio.classList.add('invisible');
       }
    });
});


