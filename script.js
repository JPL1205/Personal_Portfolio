const menu = (function(){
    const menuBtn = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav');
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    })
})();

const pageLoadEffect = (function(){
    const introTitle = document.querySelector('.intro-text');
    const main = document.querySelector('.main');
    const svg = document.querySelector('.intro-svg');
    window.addEventListener('load', function(){
        setTimeout(function() {
            introTitle.classList.add('show');
            main.classList.add('show');
            svg.classList.add('show');
        }, 50);
    });
})();

