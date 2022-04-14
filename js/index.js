const navToggle = document.querySelectorAll('.header-btn');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('nav-open'); 
    })
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
