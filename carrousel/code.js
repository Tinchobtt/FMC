const slider = document.querySelector('#slider');
const btnLeft = document.querySelector('#btn_left');
const btnRight = document.querySelector('#btn_right');

let sliderSection = document.querySelectorAll('.slider_section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];

slider.insertAdjacentElement('afterbegin', sliderSectionLast);