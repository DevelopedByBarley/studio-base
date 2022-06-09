const menuToggler = document.getElementById('menu-toggler');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav_link');
const toTop = document.getElementById('toTop');

menuToggler.onclick = () => {
  nav.classList.toggle('active')
}

for(let navLink of navLinks) {
  navLink.onclick = () => {
    nav.classList.toggle('active')
  }
}

toTop.onclick = (event) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
} 