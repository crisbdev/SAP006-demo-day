const menuButton = document.querySelector(".navbar-button");

menuButton.addEventListener('click', () => {
  const items = document.querySelectorAll(".navbar-item");
  items.forEach(item => {
    item.classList.toggle("show");
  })
});