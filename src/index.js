// webpack
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';


// Dropdown
const linksDropdown = document.querySelectorAll('.dropdown');


linksDropdown.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const menuDropdown = link.querySelector('.dropdown-menu');
        menuDropdown.classList.toggle('ativo');
    });
});



