const forms=document.getElementById('contact-form');
const photo=document.getElementById('photo');
const descr=document.getElementById('descr');
const title=document.getElementById('title');
const dates=document.getElementById('dates');

let blogImage=document.getElementById("photo");
let image;

document.querySelector("#photo").addEventListener("change",function(){
  const reader=new FileReader();
  reader.addEventListener("load",()=>{
    localStorage.setItem("image",reader.result);
  });
  reader.readAsDataURL(this.files[0]);
})


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
   //about photo

   //  photo.addEventListener('change', (event) => {
   //  const image = event.target.files[0];
   //    const reader = new FileReader();
   //    reader.readAsDataURL(image);
     
   //    reader.addEventListener('load', () => {
   //      localStorage.setItem('thumbnail', reader.result);
   //  });

   // });
  //photo end here 
 // localStorage.setItem('blogPhoto', photoValue);
 // localStorage.setItem('blogDesc', descrValue);
 //        alert('Blog Added')
      

       // var reader=new FileReader();

       // var blogs=JSON.parse(localStorage.getItem("blogs")) || [];

       // var blogData={};

       // photo.addEventListener('load',()=>{
       //     blogData.description=descrValue;
       //     blogData.image=reader.result;

       //      // console.log(reader.result);

       //     blogs.push(blogData);
       //     localStorage.setItem("blogs",JSON.stringify(blogs));
       //     // console.log(blogData);
       // });
      
       // reader.readAsDataURL(image.files[0]);
      //  acceptData();

      
       Image=localStorage.getItem("image");
       blogImage=Image;

       const data={title:titleValue,author:datesValue,content:descrValue,image:blogImage};
      //  const data={title:titleValue,author:datesValue,content:descrValue,image:formdata};
       console.log(data);
     

       fetch('https://naughty-clam-clothes.cyclic.app/api/v1/blogs',{

       method:"POST",
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


// const saveBlogData=function () {
// let  descrValue=descr.value.trim();
//  let  titleValue=title.value.trim();

//    var reader=new FileReader();
//    var blogs=JSON.parse(localStorage.getItem("blogs")) || [];

//        let blogData={};

//        reader.addEventListener('load',()=>{
//            blogData.title=titleValue;
//            blogData.description=descrValue;
//            blogData.image=reader.result;
          
//            blogs.push(blogData);
//            localStorage.setItem("blogs",JSON.stringify(blogs));

//        });
      
//         reader.readAsDataURL(photo.files[0]);
//          alert('Blog Added');
//          titleValue.value="";
//          descrValue.value="";

// }




// let data = [];

// let acceptData = () => {
//   data.push({
//     text: title.value,
//     dates:dates.value,
//     description: descr.value,
//     // description: textarea.value,
//   });

//   localStorage.setItem("data", JSON.stringify(data));

//   console.log(data);
//   createTasks();
// };

// let createTasks = () => {
//   tasks.innerHTML = "";
//   data.map((x, y) => {
//     return (tasks.innerHTML += `

//       <tr >
//         <td class="people" id=${y}>
//           <img src="images/imageone.jpg">
//           <!-- <div class="people-de">
//             <h5>John Doe</h5>
//             <p>john@gmail.com</p>
//           </div> -->
//         </td>
//         <td class="people-desc">
          
//           <p>${x.text}</p>

//         </td>
//         <td class="people-desc">
          
//           <p>${x.dates}</p>

//         </td>
//         <td class="active">
//           <p>Active</p>
//         </td>
//         <td class="role">
//           <p>${x.description}</p>
//         </td>
//         <td>
//           <a href="#" class="edit" onClick= "editTask(this)"><i class='bx bx-edit-alt' ></i></a>
//           <a href="#" class="delete" onClick ="deleteTask(this);createTasks()"><i class='bx bx-trash' ></i></a>
//         </td>
//       </tr>

    
//     `);
//   });

//   resetForm();
// };

// let resetForm = () => {
//   title.value = "";
//   descr.value = "";

// };


// let deleteTask = (e) => {
//   e.parentElement.parentElement.remove();

//   data.splice(e.parentElement.parentElement.id, 1);

//   localStorage.setItem("data", JSON.stringify(data));

//   console.log(data);
// };

// let editTask = (e) => {
//   let selectedTask = e.parentElement.parentElement;

//   title.value = selectedTask.children[0].innerHTML;
//   descr.value = selectedTask.children[1].innerHTML;
//   // textarea.value = selectedTask.children[2].innerHTML;

//   deleteTask(e);
// };

// (() => {
//   data = JSON.parse(localStorage.getItem("data")) || [];
//   console.log(data);
//   createTasks();
// })();