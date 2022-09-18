const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

punto.forEach( (cadaPunto, i)=>{
    punto[i].addEventListener('click',()=>{
        let posicion = i;
        let operacion = position(i);
        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach( (cadaPunto, i)=>{
            punto[i].classList.remove('activo');
        });
        punto[i].classList.add('activo');    
    })
});

function position(i){
    if(i==0){ return 0; }
    else if(i==1){ return -25; }
    else if(i==2){ return -50; }
    else{ return -75; }
};