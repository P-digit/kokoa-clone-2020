const user = "username";
const USER_LS = localStorage.getItem(user);

function paintName(text) {
  if (
    window.location.href.includes("friends.html") ||
    window.location.href.includes("more.html")
  ) {
    const USER_NAME = document.querySelector(".user-component__title");

    USER_NAME.innerText = text;
  } else if (window.location.href.includes("chats.html")) {
    const nicoMsg = document.getElementsByClassName(
        "user-component__subtitle"
      )[0],
      catMsg = document.getElementsByClassName("user-component__subtitle")[1],
      dogMsg = document.getElementsByClassName("user-component__subtitle")[2];

    nicoMsg.innerText = `Hi! ${text}.`;
    catMsg.innerText = `Give me Kitty burrito, ${text}!`;
    dogMsg.innerText = `I love you, ${text}!`;
  } else {
    if (window.location.href.includes("chat.html")) {
      const nicoMsg = document.getElementsByClassName("message__bubble")[0];

      nicoMsg.innerText = `Hi! ${text}.`;
    } else if (window.location.href.includes("chat-cat.html")) {
      const catMsg = document.getElementsByClassName("message__bubble")[0];

      catMsg.innerText = `Give me Kitty burrito, ${text}!`;
    } else if (window.location.href.includes("chat-dog.html")) {
      const dogMsg = document.getElementsByClassName("message__bubble")[0];

      dogMsg.innerText = `I love you, ${text}!`;
    }
  }
}

function checkName() {
  if (USER_LS === null) {
    window.location.href = "index.html";
  } else {
    paintName(USER_LS);
  }
}

function init() {
  checkName();
}

init();
