const forms=document.getElementById('contacts-form');
const names=document.getElementById('names');
const email=document.getElementById('email');
const subject=document.getElementById('subject');
const messages=document.getElementById('messages');

forms.addEventListener('submit', e =>{
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
const validateInputs=() =>{

  const namesValue=names.value.trim();
  const emailValue=email.value.trim();
  const subjectValue=subject.value.trim();
  const messageValue=messages.value.trim();

  if (namesValue=== '') {
   setError(names,'Names is required');
 }
 else{
  setSuccess(names);
 }

  if (emailValue==='') {
  	setError(email,'Email is required');
  }
  else if (!isValidEmail(emailValue)) {

  setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (subjectValue==='') {
    	setError(subject,'subject is required');
    }
    else{
    	setSuccess(subject);
    }

    if (messageValue==='') {
    	setError(messages,'message is required');
    }
    else
    {
    	setSuccess(messages);

        const data = {names:namesValue,subject:subjectValue,messages:messageValue };
        
        fetch('https://naughty-clam-clothes.cyclic.app/api/v1/sendMessage',{
               
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
        })
        .then((response) =>{
            return response.json();
            
         })
         .then((data)=>{
            alert(data.message);
            
            window.location = 'index.html'
          })
          .catch(error =>alert(error))
    }
};