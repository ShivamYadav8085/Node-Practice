const socket = io();
const messageContainer = document.getElementById("message-container");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");
const userListContainer = document.getElementById("user-list");

let userList = [];
let to = {};
const from = {};
const conversation = [];
const name = prompt("What is your name?");
appendMessage("You joined");
socket.on("connect", () => {
  (from.id = socket.id), (from.name = name);
});
socket.emit("new-user", name);

socket.on("chat-message", (data) => {
  conversation.push(data);
});

socket.on("user-list", (data) => {
  userListContainer.innerHTML = "";
  userList = data;
  addCurrentUser();
  addUsers(userList);
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  from.id = socket.id;
  from.name = name;
  const message = messageInput.value;
  const data = { message, to, from };
  appendMessage(`You: ${message}`);
  conversation.push(data);
  socket.emit("send-chat-message", data);
  messageInput.value = "";
});

function appendMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}

const handleSelectUser = (user) => {
  to = user;
  messageContainer.innerText = "";
  conversation.forEach((con) => {
    if (con.from.id === to.id) {
      appendMessage(`${con.from.name}: ${con.message}`);
    } else if (con.from.id === from.id && con.to.id === to.id) {
      appendMessage(`you: ${con.message}`);
    }
  });
};

const addCurrentUser = ()=>{
  const h3 = document.createElement("h3");
  h3.innerText=from.name;
  userListContainer.append(h3)
}

const addUsers = (users) => {
  users.forEach((user) => {
    if (user.id !== from.id) {
      const div = document.createElement("div");
      div.addEventListener("click", () => {
        handleSelectUser(user);
      });
      div.innerText = user.name;
      userListContainer.append(div);
    }
  });
};
