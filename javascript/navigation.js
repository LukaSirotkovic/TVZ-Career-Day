
const navigation = document.querySelector('.navigation');

function handleScroll() {

    if (window.scrollY > 115) {
        navigation.classList.add('scrolled');
    } else {
        navigation.classList.remove('scrolled');
    }
}


window.addEventListener('scroll', handleScroll);