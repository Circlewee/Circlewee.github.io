const afterLogin = document.querySelector("#afterlogin");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUserName = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault(); //stop refresh
  const inputUserName = loginInput.value;

  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, inputUserName);
  paintGreetings(inputUserName);
}

function paintGreetings(username) {
  greeting.innerText = "Hello, " + username;
  afterLogin.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUserName);
}
