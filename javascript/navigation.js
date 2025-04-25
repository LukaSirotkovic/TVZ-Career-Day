
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navigation ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
