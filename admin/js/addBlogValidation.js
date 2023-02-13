const forms=document.getElementById('contact-form');
const photo=document.getElementById('photo');
const descr=document.getElementById('descr');

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


const validateInputs=() =>{

  const photoValue=photo.value.trim();
  const descrValue=descr.value.trim();

  if (photoValue=== '') {
   setError(photo,'Photo is required');
 }
 else{
  setSuccess(photo);
 }

 if (descrValue==='') {
 	setError(descr,'Description is required');
 }
 else{
 	setSuccess(descr);
 }

};