let menu=document.querySelector('.menu-icon');
let navBar=document.querySelector('.navbar');
menu.onclick=()=>{
	navBar.classList.toggle("open-menu");
	menu.classList.toggle('move');
}

window.onscroll=()=>{
	navBar.classList.remove("open-menu");
	menu.classList.remove('move');
}

// review swipper
  var swiper = new Swiper(".reviews-content", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      
    });

  // header background change while scoloring

  let header=document.querySelector('header');

  window.addEventListener('scroll',()=>{
  	header.classList.toggle("header-active",window.scrollY>0);
  });

// scroll top

let scrollTop=document.querySelector('.scroll-top');

  window.addEventListener('scroll',()=>{
  	scrollTop.classList.toggle("scroll-active",window.scrollY>=400);
  });

