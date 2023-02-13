const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const names=document.getElementById('names');
const phone=document.getElementById('phone');
const address=document.getElementById('address');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const namesValue=names.value.trim();
    const phoneValue=phone.value.trim();
    const addressValue=address.value.trim();


     if (namesValue=== '') {
       setError(names,'Names is required');
     }
     else{
      setSuccess(names);
     }
    if (phoneValue==='') {
      setError(phone,'Phone is required')

    }
    else if(phoneValue.length<10){
       setError(phone,'Phone number is short');
    }
    else if (phoneValue.length>14) {
      setError(phone,'Phone number is Long');
    }
    else{
      setSuccess(phone);
    }
     if (addressValue==='') {
       setError(address,'Address is required');
     }
     else{
      setSuccess(address);
     }
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);

        localStorage.setItem('register_email', emailValue)
        localStorage.setItem('register_sandi', passwordValue)
        alert('Register success')
        window.location = 'login.html'
    }
   

    

   

};
