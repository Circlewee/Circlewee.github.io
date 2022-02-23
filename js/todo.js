function savingToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(ToDos));
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const todo = document.createElement("span");
  const btn = document.createElement("button");
  const modifyTodo = document.createElement("input");

  modifyTodo.classList.add("modifyText", "hidden");
  li.id = newToDo.id;
  todo.innerText = newToDo.text;
  btn.innerText = "🍑";
  btn.classList = "deleteButton";

  todo.addEventListener("dblclick", updateTodo);
  btn.addEventListener("click", deleteToDo);

  div.appendChild(todo);
  div.appendChild(modifyTodo);
  li.appendChild(div);
  div.appendChild(btn);
  ToDoList.appendChild(li);
}

function updateTodo(event) {
  const clickedTodo = event.target;
  const modifyText = clickedTodo.parentElement.children[1];

  modifyText.classList.remove("hidden");
  modifyText.value = clickedTodo.innerText;

  modifyText.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      clickedTodo.innerText = modifyText.value;
      ToDos.forEach((element) => {
        // clickTodo.parentElement.parentElement === li
        if (element.id === parseInt(clickedTodo.parentElement.parentElement.id)) {
          element.text = modifyText.value;
        }
      });
      modifyText.classList.add("hidden");
      savingToDos();
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

// function todoClicked(event) {
//   const li = event.target;
//   li.classList.toggle("textcenterline");
// }

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
const savedToDos = localStorage.getItem(TODOS_KEY);

let ToDos = [];

ToDoForm.addEventListener("submit", handleToDoSubmit);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  ToDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
