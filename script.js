function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

  // Get current year and insert it into the footer
  document.getElementById("year").textContent = new Date().getFullYear();
