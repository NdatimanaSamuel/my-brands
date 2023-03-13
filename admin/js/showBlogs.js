const blogTable = document.getElementById("blog-table")


fetch('https://naughty-clam-clothes.cyclic.app/api/v1/blogs')
 
.then((response) => response.json())
.then((blogs)=>{
    console.log(blogs);

    blogs.data.forEach(blog => {
        
    const row = document.createElement("tr")
    const titleCell = document.createElement("td");
    const ContentCell=document.createElement("td");
    const authorCell = document.createElement("td")
    const actionsCell = document.createElement("td")
    const editButton = document.createElement("edibutton")
    const deleteButton = document.createElement("rebutton")

    // assign values to the cells
    titleCell.textContent=blog.title;
    ContentCell.textContent=blog.content;
    authorCell.textContent = blog.author;
    editButton.textContent = "Update"
    deleteButton.textContent = "Remove"
    actionsCell.appendChild(deleteButton)
    actionsCell.appendChild(editButton)
    // append rows
    row.appendChild(titleCell)
    row.appendChild(ContentCell)
    row.appendChild(authorCell)
    row.appendChild(actionsCell)

     // append table body
     blogTable.querySelector("tbody").appendChild(row)

     deleteButton.addEventListener("click", () => {
        deleteBlog(blog._id);
      })

   // here make update
   editButton.addEventListener("click",()=>{
      //  editBlog(blog._id);
      var blogId = blog._id;
      sessionStorage.setItem("blogIdKey", blogId);

       window.location = './updateBlog.html'
   });


    });
})
.cath(err => alert(err))


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