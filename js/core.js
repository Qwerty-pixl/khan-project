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
