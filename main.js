const cookie = document.querySelector("#cookie");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const reset = document.querySelector("#reset");


cookie.addEventListener("click", showTicket)
reset.addEventListener("click", resetCookie)

function showTicket(event) {
  event.preventDefault();
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function resetCookie(event) {
  event.preventDefault();
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}