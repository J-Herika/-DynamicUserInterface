const btnEl = document.querySelector(".btn");
const navItemsEl = document.querySelector(".nav-items");
btnEl.addEventListener("click", () => dropDownMenu());

function dropDownMenu() {
  navItemsEl.classList.toggle("hidden");
}
