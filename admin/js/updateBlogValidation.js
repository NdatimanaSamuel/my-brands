const forms=document.getElementById('contact-form');
const photo=document.getElementById('photo');
const descr=document.getElementById('descr');
const title=document.getElementById('title');
const dates=document.getElementById('dates');

var blogKeyId = sessionStorage.getItem("blogIdKey");
showData(blogKeyId);



function showData(blogKey){
    fetch(`https://naughty-clam-clothes.cyclic.app/api/v1/blogs/${blogKey}`)
    .then((response) => response.json())
    .then((blogs)=>{
      

        let titleData=blogs.data.title;
        let authorData=blogs.data.author;
        let contentData=blogs.data.content;

        title.value=titleData;
        dates.value=authorData;
        descr.value=contentData
        console.log(titleData);
       
    
    });
}



forms.addEventListener('submit', e =>{
    e.preventDefault();
      validateInputs();
     //  saveBlogData();
   
   
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
  // const fileInput = document.getElementById('photo').files[0];
  const photoValue=photo.value.trim();
  const descrValue=descr.value.trim();
  const titleValue=title.value.trim();
  const datesValue=dates.value.trim();
  if (titleValue==='') {
    setError(title,'Title is required');
  }
  else{
     setSuccess(title);
  }

   if (datesValue==='') {
    setError(dates,'Date is required');
  }
  else{
     setSuccess(dates);
  }
   
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


    
     const fileInput = document.getElementById('photo');
     let reader = new FileReader();
     let result;
     
     // Lister to the change event on the <input> element
     fileInput.addEventListener('change', (event) => {
         // Get the selected image file
         const imageFile = event.target.files[0];
     
         if (imageFile) {
             
     
             // Convert the image file to a string
             reader.readAsDataURL(imageFile);
     
             // FileReader will emit the load event when the data URL is ready
             // Access the string using result property inside the callback function
             reader.addEventListener('load', () => {
                 // Get the data URL string
                 console.log(reader.result);
             });
         }
     });

       const data={title:titleValue,author:datesValue,content:descrValue,image:reader.result};
       console.log(data);

       fetch(`https://naughty-clam-clothes.cyclic.app/api/v1/blogs/${blogKeyId}`,{

       method:"PUT",
       headers:{
        "Content-Type":"application/json"
       },
       body:JSON.stringify(data)

       })
       .then((response)=>{
         return response.json();
       })
       .then((data)=>{
          alert(data.message);
          window.location = 'manageBlogs.html'
       })
       .catch(error =>alert(error))

 }

};


