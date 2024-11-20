const notescontainer = document.querySelector('.notes-container');
const createButton = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');
function showNotes(){
    notescontainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
//Function to update Storage
function updateStorage(){
    localStorage.setItem("notes",notescontainer.innerHTML);
}
//Create What will be inserted when clicking on the button create note
createButton.addEventListener('click', () =>{

    let inputbox = document.createElement("p");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    let img = document.createElement("img");
    img.src = "./images/delete.png";
    notescontainer.appendChild(inputbox).appendChild(img);
    updateStorage();
})
//Function to delete a note
notescontainer.addEventListener('click', function(e){
if (e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    updateStorage();
}
else if (e.target.tagName==="P"){
notes= document.querySelectorAll(".input-box");
    notes.forEach(note =>{
        note.onkeyup = function(){
            updateStorage();
        }
    });
}
});

document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});