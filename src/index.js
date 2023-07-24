// webpack
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';


// Dropdown
const linksDropdown = document.querySelectorAll('.dropdown');
const dropdownsMenu = document.querySelectorAll('.dropdown-menu');

linksDropdown[0].addEventListener("click", (e) => {
    e.preventDefault();
    dropdownsMenu[0].classList.toggle('drop-ativo');
});

linksDropdown[1].addEventListener("click", (e) => {
    e.preventDefault();
    dropdownsMenu[1].classList.toggle('drop-ativo');
});

linksDropdown[2].addEventListener("click", (e) => {
    e.preventDefault();
    dropdownsMenu[2].classList.toggle('drop-ativo');
});

