const USER_NAME = document.querySelector(".user-component__title");
const user = "currentUser";
const loginForm = document.querySelector("#login-form");

var db = [];

function handleName() {
  const USER_LS = localStorage.getItem(user);
  if (USER_LS !== null) {
    USER_NAME.innerText = JSON.stringify(USER_LS);
  } else {
    callDataPage();
  }
}

function callDataPage() {
  if (window.location === "index.html") {
    return;
  } else {
    location.href = "index.html";
  }
}

function saveUserData(event) {
  const email = loginForm.getElementsByName("username")[0];
  const password = loginForm.getElementsByName("password")[0];
  const nickname = loginForm.getElementsByName("nickname")[0];
  const data = {
    email: email.value,
    password: password.value,
    nickname: nickname.value,
  };
  event.preventDefault();
  db.push(data);
  localStorage.setItem(user, data.nickname);
  console.log(db);
}

function init() {
  handleName();
}

init();

loginForm.addEventListener("submit", saveUserData);
