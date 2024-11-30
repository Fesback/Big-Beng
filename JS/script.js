const btnOpenMenu = document.querySelector('.btn-menu-responsive');
const btnCloseMenu = document.querySelector('.btn-close');

const menuMobile = document.querySelector('.menu-mobile');

/* EVENTS */

btnOpenMenu.addEventListener('click', () => {
    menuMobile.classList.add('active');
});

btnCloseMenu.addEventListener('click', () => {
    menuMobile.classList.remove('active');
});


/* GASEOSAS */

let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 0; 
let other_1 = null;
let other_2 = null;

document.addEventListener('DOMContentLoaded', () => {
    initializeCarousel();
});

const initializeCarousel = () => {
    other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();  
};

next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active = active + 1 >= countItem ? 0 : active + 1;
    other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
};

prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
};

const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if (itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if (itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if (itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;  
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    });

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    items.forEach((item, index) => {
        if (index !== active) {
            item.style.display = 'none'; 
        } else {
            item.style.display = 'block'; 
        }
    });

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();
    }, 5000);
};

let autoPlay = setInterval(() => {
    next.click();
}, 5000);


//transition smooth
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash; 
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}); 


