const roles = ["Web Developer", "Violinist", "Curious Learner"];
let current = 0;

function toggleRole() {
  current = (current + 1) % roles.length;
  document.getElementById("toggle-role").textContent = roles[current];
}
setInterval(toggleRole, 2000);

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

