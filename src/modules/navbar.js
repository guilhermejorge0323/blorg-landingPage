const menu = document.querySelector('#menus-nav');
const buttonBurger = document.querySelector('#button-burger');


export function menuAtivo(){
    buttonBurger.addEventListener("click", () => {
        menu.classList.toggle('ativo');
        if(menu.classList.contains('ativo')){
            buttonBurger.src = 'src/assets/img/icon-close.svg';
        }else{
            buttonBurger.src = 'src/assets/img/icon-hamburger.svg'
        }
    });
}