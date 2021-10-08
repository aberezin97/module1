// Логика модальных окон
let modals = document.getElementsByClassName("modal");
window.addEventListener("click", (event) => {
  for (let i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].classList.remove("modal_show");
    }
  }
});
