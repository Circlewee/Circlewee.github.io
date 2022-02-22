const afterLogin = document.querySelector("#afterlogin");
const loginForm = document.querySelector("#login-form");
const greetingSpan = document.querySelector("#greeting span:first-child");
const quotes = document.querySelector("#quotes");
const logoutButton = document.querySelector(".logoutButton");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUserName = localStorage.getItem(USERNAME_KEY);

function loginSubmit(event) {
  event.preventDefault();
  const inputUserName = loginForm[0].value; //#login-form input.value

  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, inputUserName);
  paintGreetings(inputUserName);
}

// 인사말 출력, afterLogin, quotes 출력
function paintGreetings(username) {
  greetingSpan.innerText = "Hello, " + username;

  afterLogin.classList.remove(HIDDEN_CLASSNAME);
  quotes.classList.remove(HIDDEN_CLASSNAME);

  logoutButton.addEventListener("click", logoutClicked);
}

// logoutButton 클릭 이벤트 함수
function logoutClicked(event) {
  event.preventDefault();

  localStorage.removeItem(USERNAME_KEY);
  loginForm.addEventListener("submit", loginSubmit);

  afterLogin.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  quotes.classList.add(HIDDEN_CLASSNAME);
}

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreetings(savedUserName);
}
