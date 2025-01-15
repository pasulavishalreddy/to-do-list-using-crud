function addtask(){
    let inputTag=document.getElementById("input");
    let inputValue = inputTag.value.trim();

if(inputValue === ""){
    alert("task should not be empty!");
    return;
}
let liststore=document.getElementById("liststore");
let li=document.createElement("li");
let taskTitle=document.createElement("p");
taskTitle.textContent = inputValue;
let editButton=document.createElement("button");
editButton.textContent="Edit";
editButton.classList.add("edit-btn");
let deleteButton=document.createElement("button");
deleteButton.textContent="Delete";
deleteButton.classList.add("delete-btn");

li.appendChild(taskTitle);
li.appendChild(editButton);
li.appendChild(deleteButton);
li.style.listStyleType="none";
liststore.appendChild(li);
inputTag.value="";

editButton.addEventListener("click", ()=>editTask(li))
deleteButton.addEventListener("click", ()=>deleteTask(li))
};

function editTask(listItem){
    let taskTitle= listItem.querySelector("p");
    let newTask=prompt("Edit task",taskTitle.textContent);
    if(newTask!==null &&newTask.trim() !== ""){
        taskTitle.textContent=newTask;
    }
}
function deleteTask(listItem){
    let confirmDelete = confirm("Are You Sure?");
    if(confirmDelete){
        listItem.remove();
        saveData()
    }
}

