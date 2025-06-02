const overlay = document.querySelector('.right-box .overlay');

setInterval(() => {
    overlay.classList.add('active');

    // ukloni "active" nakon 1.5 sekunde da nestane
    setTimeout(() => {
        overlay.classList.remove('active');
    }, 1500);
}, 5000);