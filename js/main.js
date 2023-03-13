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

//about form


//about show new all blog
const blogPlace=document.querySelector('.containers');
let output='';

fetch('https://naughty-clam-clothes.cyclic.app/api/v1/blogs')
 
.then((response) => response.json())
.then((blogs)=>{
    blogs.data.forEach(allblog => {
      
       output +=`
       <div class="blogcard">
       <img src="${
        allblog.image
      }">
       <div class="carddetails">
         
         <p class="card_preview_text">${allblog.content}</p>
       <a href="#" class="btn" style="margin-left: 30px; margin-bottom: 10px;">LearMore</a>
       </div>
     </div>
       
       `;
    });
    blogPlace.innerHTML=output;

});
