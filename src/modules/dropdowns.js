// Dropdown
const linksDropdown = document.querySelectorAll('.dropdown');


export function dropAdm(){
    linksDropdown.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const menuDropdown = link.querySelector('.dropdown-menu');
            const isActive = menuDropdown.classList.contains('ativo');
            console.log(link);

            closeDropdown();
            if(!isActive){
                menuDropdown.classList.add('ativo');
            }else if(menuDropdown.classList.contains('ativo')){
                menuDropdown.classList.remove('ativo');
            }


            console.log(menuDropdown.classList.contains('ativo'));

        });
    });
}

function closeDropdown(link){
    const activeDropdown = document.querySelectorAll(".dropdown-menu.ativo");
    activeDropdown.forEach(dropdown => {
            dropdown.classList.toggle('ativo');
    });
}