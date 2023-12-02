       
let form = document.getElementById("new-task-form");
let input = document.getElementById("new-task-input");
let tasks = document.getElementById("tasks");
let deleteAllBtn = document.getElementById("deleteAllBtn");
let editedLI = null;

deleteAllBtn.style.display = "none";

function addTask() {
  // let taskInput = document.getElementById("todoInput");
  let taskInputValue = input.value;

  if (taskInputValue.trim()) {

          // Creating Elements and adding

    let divTask = document.createElement("div");
    let divContent = document.createElement("div");
    let divActions = document.createElement("div");
    let inputCont = document.createElement("input");
    divTask.classList.add("class", "task");
    divContent.classList.add("class", "content");
    divActions.classList.add("class", "actions");
    inputCont.classList.add("class", "text");
    inputCont.setAttribute("readonly", "readonly  ");
    inputCont.type = "text";
    inputCont.value = taskInputValue;
    tasks.appendChild(divTask);
    divTask.appendChild(divContent);
    divTask.appendChild(divActions);
    divContent.appendChild(inputCont);

    //   Edit Button create and add in divActions
    let editBtn = document.createElement("button");
    editBtn.classList.add("class", "edit");
    editBtn.innerText = "Edit";
    divActions.appendChild(editBtn);

    //   Edit input
    editBtn.addEventListener("click", function () {
      // let forEditText = divContent.childNodes[0].nodeValue;
      // input.value = forEditText;
      if (editBtn.innerText.toLocaleLowerCase() == "edit") {
        inputCont.removeAttribute("readonly");
        inputCont.focus();
        editBtn.innerText = "save";
        // saveBtn.style.display = "inline-block";
        // editedLI = divContent;
      } else {
        inputCont.setAttribute("readonly", "readonly");
        editBtn.innerText = "edit";
      }
    });
    //   Delete Button add in divAction
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("class", "delete");
    divActions.appendChild(deleteBtn);

    deleteAllBtn.style.display = "inline-block";

    //   Deleting divTask 
    deleteBtn.addEventListener("click", function () {
      divTask.remove();
      if (tasks.children.length === 0) {
        
        deleteAllBtn.style.display = "none";
      }
    });

    //   Save Edited Todo
    // saveBtn.addEventListener("click", function () {
    //   // saveBtn.style.display = "none";
    //   addBtn.style.display = "inline-block";
    //   editedLI.childNodes[0].nodeValue = input.value;
    // });
  } else {
    alert("Please Input Todo");
  }

  input.value = "";
}

function deleteAll() {
  // console.log(divContent.children.length);
  if (tasks.children.length > 0) {
    tasks.innerHTML = null;
  }
  deleteAllBtn.style.display = "none";
}
