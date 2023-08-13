const ButtonMenu = document.getElementById('button-menu');
const menu = document.querySelector('.menu');

ButtonMenu.addEventListener('click', () => {

    menu.classList.toggle('active');

})