document.querySelectorAll('.page-transition').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const href = item.getAttribute('href');

        document.body.classList.add('fade-out');

        if (href === 'index.html') {
            document.body.addEventListener('animationend', function() {
                window.location.href = href;
            });
        } else {
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Подождите 0.5 секунды (время анимации) перед переходом на другую страницу
        }
    });
});