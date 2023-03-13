const messageTable = document.getElementById("messages-table")

fetch('https://naughty-clam-clothes.cyclic.app/api/v1/showMessages')
.then((response) => response.json())
.then((messages)=>{
    console.log(messages);

    messages.data.forEach(message => {

    const row = document.createElement("tr")
    const namesCell = document.createElement("td");
    const subjectCell=document.createElement("td");
    const MessagesCell = document.createElement("td")
    const sentAtCell = document.createElement("td")

    namesCell.textContent=message.names;
    subjectCell.textContent=message.subject;
    MessagesCell.textContent=message.messages;
    sentAtCell.textContent=message.sentAt;


     // append rows
     row.appendChild(namesCell)
     row.appendChild(subjectCell)
     row.appendChild(MessagesCell)
     row.appendChild(sentAtCell)
    // append table body
    messageTable.querySelector("tbody").appendChild(row)

    })
    .cath(err => alert(err))
});