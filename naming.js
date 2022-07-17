const user = "username";
const loginForm = document.querySelector("#login-form");

var db = [];

function handleName() {
  const USER_LS = localStorage.getItem(user);
  if (USER_LS !== null) {
    window.location.href = "friends.html";
  } else {
    callDataPage();
  }
}

function callDataPage() {
  loginForm.addEventListener("submit", saveUserData);
}

function saveUserData(event) {
  const nickname = document.querySelector(".js-name");
  const data = {
    nickname: nickname.value,
  };
  db.push(data);
  localStorage.setItem(user, nickname.value);
}

function init() {
  handleName();
}

init();
