const roles = ["Web Developer", "Violinist", "Curious Learner"];
let current = 0;

function toggleRole() {
  current = (current + 1) % roles.length;
  document.getElementById("toggle-role").textContent = roles[current];
}
setInterval(toggleRole, 2000);

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
