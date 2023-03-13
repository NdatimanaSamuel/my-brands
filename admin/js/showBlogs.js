const blogTable = document.getElementById("blog-table")

const blogPlace=document.querySelector('tbody');
let output='';

fetch('https://naughty-clam-clothes.cyclic.app/api/v1/blogs')
 
.then((response) => response.json())
.then((blogs)=>{
    console.log(blogs);

    blogs.data.forEach(blog => {
        
      output +=`
      <tr>
      <td class="people">
        <img src="${blog.image}">
        <div class="people-de">
          
         
        </div>
      </td>
      <td class="people-desc">
        
        <p class="card_preview_text">${blog.content}</p>

      </td>
      <td class="">
        <p>${blog.title}</p>
      </td>
      <td class="">
        <p>${blog.author}</p>
      </td>
      <!-- <td class="role">
        <p>Owner</p>
      </td> -->
      <td>
        <a href="#" class="edit"  onclick="updateButton('${blog._id}')"><i class='bx bx-edit-alt'></i></a>
        <a href="#" class="delete"  onclick="deleteButton('${blog._id}')"><i class='bx bx-trash' ></i></a>
       
      </td>
    </tr>
      
      
      `;
  
        
   
      
    //  deleteButton.addEventListener("click", () => {
    //   deleteBlog(blog._id);
    //   })

  //  // here make update
  //  editButton.addEventListener("click",()=>{
  //     //  editBlog(blog._id);
  //     var blogId = blog._id;
  //     sessionStorage.setItem("blogIdKey", blogId);

  //      window.location = './updateBlog.html'
  //  });


    });

    

blogPlace.innerHTML=output;

})
.cath(err => alert(err))


function deleteButton(id){
  deleteBlog(id);
}

function updateButton(id){
         var blogId = id;
      sessionStorage.setItem("blogIdKey", blogId);

        window.location = './updateBlog.html'
}

function deleteBlog(bookId) {
  
  fetch(`https://naughty-clam-clothes.cyclic.app/api/v1/blogs/${bookId}`, {
    method: "DELETE"
  })
  .then((response) => response.json())
  .then((data) => {
    // functionalities of delete
    alert(data.message);
    
  })
  .then(()=>location.reload())
  .catch(error => console.log(error))

}