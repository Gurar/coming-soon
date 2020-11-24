let menu = document.querySelector(".burger");

if(menu) {
    menu.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('active');
        document.querySelector('.navbar__list--collapse').classList.toggle('menu-open');
        window.addEventListener('click', (event) => {
            if(event.target.tagName.toLowerCase() === 'a') {
                menu.classList.remove('active');
                document.querySelector('.navbar__list--collapse').classList.remove('menu-open');
        }
        });
    });
}