const cookie = document.querySelector("#cookie");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const reset = document.querySelector("#reset");
const message = document.querySelector("#message");
const cookieMessages = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão",
  "Life long learning"
]


cookie.addEventListener("click", showMessage)
reset.addEventListener("click", resetCookie)

function showMessage(event) {
  event.preventDefault();
  getMessage()
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function resetCookie(event) {
  event.preventDefault();
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function getMessage() {
  let messageIndex = Math.floor(Math.random() * cookieMessages.length)
  message.innerHTML = cookieMessages[messageIndex]
  console.log(messageIndex)
}