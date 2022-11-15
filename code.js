/*HEADER*/
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.main-nav');
const subMenuBtn = document.querySelectorAll('.submenu-btn');

btnMenu.addEventListener('click', ()=>{
    menu.classList.toggle('mostrar');
});

for(let i = 0; i < subMenuBtn.length; i++){
    subMenuBtn[i].addEventListener('click', function(){
        if(window.innerWidth < 1010){
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
/*CARROUSEL*/
const slider = document.querySelector('#slider');
const btnLeft = document.querySelector('#btn_left');
const btnRight = document.querySelector('#btn_right');

let sliderSection = document.querySelectorAll('.slider_section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next(){
    let sliderSectionFirst = document.querySelectorAll('.slider_section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 1s';
    opacidad();
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 1000);
}
function prev(){
    let sliderSection = document.querySelectorAll('.slider_section');
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = '0%';
    slider.style.transition = 'all 1s'
    opacidad();
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%';
    }, 1000);
}
function opacidad(){
    let content = document.querySelectorAll('.section_content');
    content.forEach((cadaContent)=>{
        cadaContent.style.transition = 'none';
        cadaContent.style.opacity = 0;
    });
    setTimeout(function(){
        content.forEach((cadaContent)=>{
            cadaContent.style.transition = 'ease-in .7s';
            cadaContent.style.opacity = 1;
        });
    },500);
}
function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    // start timer using current settings (if it's not already running)
    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    // start with new or original interval, stop current interval
    this.reset = function(newT = t) {
        t = newT;
        return this.stop().start();
    }
}

btnRight.addEventListener('click', ()=>{
    next();
    time.reset(8000);
});
btnLeft.addEventListener('click', ()=>{
    prev();
    time.reset(8000);
});

var time = new Timer(function() {
    next();
}, 8000);