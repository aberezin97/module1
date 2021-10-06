let modals = document.getElementsByClassName("modal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  for (let i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].classList.remove("modal_show");
    }
  }
};
