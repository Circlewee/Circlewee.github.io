function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  li.id = newToDo.id;
  li.appendChild(span);
  li.appendChild(btn);
  span.innerText = newToDo.text;
  btn.innerText = "🍑";
  btn.classList = "deleteButton";
  btn.addEventListener("click", deleteToDo);
  ToDoList.appendChild(li);
}

function savingToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(ToDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  ToDos = ToDos.filter((ToDo) => ToDo.id !== parseInt(li.id, 10));
  savingToDos();
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
  const li = event.target.parentElement;

  li.classList.toggle("textcenterline");
}

const ToDoForm = document.querySelector(".todo-form");
const ToDoInput = ToDoForm.querySelector("input");
const ToDoList = document.querySelector(".todo-list");
const TODOS_KEY = "ToDos";
const savedToDos = localStorage.getItem(TODOS_KEY);

let ToDos = [];

ToDoForm.addEventListener("submit", handleToDoSubmit);
ToDoList.addEventListener("click", todoClicked);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  ToDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
