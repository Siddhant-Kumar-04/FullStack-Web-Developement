const serviceItem = document.querySelector('.has-dropdown');
const dropdown = document.querySelector('.dropdown');

serviceItem.addEventListener('mouseenter', () => {
    dropdown.style.display = 'block';
});

serviceItem.addEventListener('mouseleave', () => {
    dropdown.style.display = 'none';
});
