const menuToggler = document.getElementById('menu-toggler');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav_link')
menuToggler.onclick = () => {
  nav.classList.toggle('active')
}
for(let navLink of navLinks) {
  navLink.onclick = () => {
    nav.classList.toggle('active')
  }
}