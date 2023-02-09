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

const form=document.getElementById('contact-form');
const UserName=document.getElementById('username'); 
const Passwords=document.getElementById('password'); 

form.addEventListener('submit', e => { 

    e.preventDefault();

    validateInputs();
});

 const setError = (element, message) => {
    const inputControl = element.parentElement;
   const errorDisplays=inputControl.querySelector('.error');

    errorDisplays.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const Setsucess=element =>{
  const inputControl=element.parentElement;
   const errorDisplays=inputControl.querySelector('.error');
   errorDisplays.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(username).toLowerCase());
}


const validateInputs=()=>{
 
 const usernameValue=UserName.value.trim();
 const passwordValue=Passwords.value.trim();

 if (usernameValue=== '') {
     setError(UserName,"email is required");
 }

  else if (!isValidEmail(UserName)) {
        setError(username, 'Provide a valid email address');
      }

 else{
  Setsucess(username);
 }
 

 if (passwordValue=== '') {
     setError(password,"password is required");
 }
 else{
   Setsucess(password);
 }
};