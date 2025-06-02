window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.right-box .overlay');

    if (!overlay) return;

    setInterval(() => {
        overlay.classList.add('active');

        setTimeout(() => {
            overlay.classList.remove('active');
        }, 1500); // prikaz 1.5s
    }, 5000); // svakih 5s
});