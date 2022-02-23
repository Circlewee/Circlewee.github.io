function savingToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(ToDos));
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const todo = document.createElement("span");
  const deleteButton = document.createElement("button");
  const checkButton = document.createElement("button");
  const modifyTodo = document.createElement("input");

  modifyTodo.classList.add("modifyText", CLASS_HIDDEN);
  li.id = newToDo.id;
  todo.innerText = newToDo.text;
  deleteButton.innerText = "🍑";
  deleteButton.classList.add("deleteButton");
  checkButton.classList.add("checkButton");

  todo.addEventListener("dblclick", updateTodo);
  deleteButton.addEventListener("click", deleteToDo);
  checkButton.addEventListener("click", todoClicked);

  div.appendChild(checkButton);
  div.appendChild(todo);
  div.appendChild(modifyTodo);
  div.appendChild(deleteButton);
  li.appendChild(div);
  ToDoList.appendChild(li);
}

function updateTodo(event) {
  console.log(event);
  const clickedTodo = event.target; //span
  const parentDiv = clickedTodo.parentElement; //div
  const modifyText = parentDiv.children[2]; // modifyText

  modifyText.value = clickedTodo.innerText;
  parentDiv.children[3].classList.add(CLASS_HIDDEN);
  clickedTodo.classList.add(CLASS_HIDDEN);
  modifyText.classList.remove(CLASS_HIDDEN);

  modifyText.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      clickedTodo.innerText = modifyText.value;
      ToDos.forEach((element) => {
        // clickTodo.parentElement.parentElement === li
        if (element.id === parseInt(clickedTodo.parentElement.parentElement.id)) {
          element.text = modifyText.value;
        }
      });
      modifyText.classList.add(CLASS_HIDDEN);
      savingToDos();
      parentDiv.children[3].classList.remove(CLASS_HIDDEN);
      clickedTodo.classList.remove(CLASS_HIDDEN);
    }
  });
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newToDo = {
    id: Date.now(),
    text: ToDoInput.value,
  };

  ToDoInput.value = "";
  ToDos.push(newToDo);
  paintToDo(newToDo);
  savingToDos();
}

function todoClicked(event) {
  const todoDiv = event.target.parentElement;
  const todoSpan = todoDiv.children[1];

  todoSpan.classList.toggle("textcenterline");
  event.target.classList.toggle("indianred");
}

function deleteToDo(event) {
  const deleteTodo = event.target.parentElement.parentElement; //li
  deleteTodo.remove();
  ToDos = ToDos.filter((ToDo) => ToDo.id !== parseInt(deleteTodo.id));
  savingToDos();
}

const ToDoForm = document.querySelector(".todo-form");
const ToDoInput = ToDoForm.querySelector("input");
const ToDoList = document.querySelector(".todo-list");
const TODOS_KEY = "ToDos";
const CLASS_HIDDEN = "hidden";
const savedToDos = localStorage.getItem(TODOS_KEY);

let ToDos = [];

ToDoForm.addEventListener("submit", handleToDoSubmit);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  ToDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
