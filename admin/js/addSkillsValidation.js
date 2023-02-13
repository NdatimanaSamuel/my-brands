const forms=document.getElementById('contact-form');
const title=document.getElementById('title');
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

  const titleValue=title.value.trim();
  const descrValue=descr.value.trim();

  if (titleValue=== '') {
   setError(title,'Title is required');
 }
 else{
  setSuccess(title);
 }

 if (descrValue==='') {
 	setError(descr,'Description is required');
 }
 else{
 	setSuccess(descr);
 }

};