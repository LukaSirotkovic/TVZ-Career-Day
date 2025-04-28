
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    mobileMenu.classList.toggle('active');
    navigation.classList.remove('scrolled');
});

const navigation = document.querySelector('.navigation');
// Ako je mobile meni aktivan, nemoj raditi scroll efekat

function handleScroll() {
    // Ako je mobile meni aktivan, nemoj raditi scroll efekat
    if (mobileMenu.classList.contains('active')) {
        return;
    }

    if (window.scrollY > 115) {
        navigation.classList.add('scrolled');
    } else {
        navigation.classList.remove('scrolled');
    }
}


window.addEventListener('scroll', handleScroll);