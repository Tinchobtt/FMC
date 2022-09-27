const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');
const block = document.querySelectorAll('.crsel-content');

block.forEach( (cadaBlock, j)=>{
    if(j != 0){
        block[j].style.opacity = 0;
    }
})

punto.forEach( (cadaPunto, i)=>{
    punto[i].addEventListener('click',()=>{
            let operacion = position(i);
            grande.style.transform = `translateX(${operacion}%)`
            punto.forEach( (cadaPunto, i)=>{
                punto[i].classList.remove('activo');
                block[i].style.opacity = 0;
            });
            punto[i].classList.add('activo');  
            block[i].style.opacity = 1;
    })
});

function position(i){
    if(i==0){ return 0; }
    else if(i==1){ return -25; }
    else if(i==2){ return -50; }
    else{ return -75; }
};

