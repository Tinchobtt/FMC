const btnMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('#menu');
const subMenuBtn = document.querySelectorAll('.submenu-btn');

btnMenu.addEventListener('click', ()=>{
    menu.classList.toggle('mostrar');
});

for(let i = 0; i < subMenuBtn.length; i++){
    subMenuBtn[i].addEventListener('click', function(){
        if(window.innerWidth < 800){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            }else{
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + 'px';
            };
            
        };
    });
};



