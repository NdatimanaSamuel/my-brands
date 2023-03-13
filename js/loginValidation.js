
const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const password = document.getElementById('password');

const errortwos=document.getElementById('errortwos');


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
    

    

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    }
     else {
        setSuccess(password);


    // const valid_email = localStorage.getItem('register_email')
    // const valid_sandi = localStorage.getItem('register_sandi')

    // if (emailValue, passwordValue === '') {
    //     alert('Data not valid ')
    //     return false
    // }

    // if (emailValue != valid_email || passwordValue != valid_sandi) {

    //    errortwos.innerText = 'Your account not found! Register Now!!';
    
    // } else {
    //     localStorage.setItem('login_email', emailValue)
    //     localStorage.setItem('login_sandi', passwordValue)
    //     alert('Login successfuly ')
    //     window.location = 'admin/index.html'

    //     const data = {email:emailValue, password:passwordValue };
    //       console.log(data);
    // }

    const data = {email:emailValue, password:passwordValue };
        

         fetch('https://naughty-clam-clothes.cyclic.app/api/v1/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
         })
         .then((response)=>{
            return response.json();
         })
         .then((data)=>{
            console.log(data);
            if(data.token){
                localStorage.setItem("authToken", data.token)
                location.href="admin/index.html"
            }

          
            else{
               alert(data.message);
            }
         })
         .catch(err => alert(err))
    }

   

};
