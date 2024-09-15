// For menu-trigger click (larger screens)
document.querySelector('.menu-trigger').addEventListener('click', function() {
    const menu = document.querySelector('.popup-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

// For hamburger click (smaller screens)
document.querySelector('.hamburger').addEventListener('click', function() {
    const menu = document.querySelector('.popup-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});





var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // Количество видимых слайдов
    spaceBetween: 30, // Расстояние между слайдами
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2, // Количество слайдов на экранах до 768px
        },
        480: {
            slidesPerView: 1, // Количество слайдов на мобильных экранах
        }
    }
});
