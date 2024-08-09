document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".header nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("mouseover", function () {
      link.style.color = "#ff6347"; // Altera a cor ao passar o mouse
    });

    link.addEventListener("mouseout", function () {
      link.style.color = "#fff"; // Volta para a cor original
    });
  });

  const cols = document.querySelectorAll(".clickable");

  cols.forEach((col) => {
    col.addEventListener("click", function () {
      alert("Você clicou em uma coluna!");
    });
  });
});

function showAlert() {
  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  alert(`Nome: ${name}\nUsuário: ${username}`);
}
