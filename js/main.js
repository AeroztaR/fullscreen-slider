'use strict';

let doc = document,
    sliderImages = doc.querySelectorAll('.slide'),
    arrowLeft = doc.querySelector('#arrow-left'),
    arrowRight = doc.querySelector('#arrow-right'),
    current = 0;

// clear img's
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

// init slider
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

// show prev 
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

// show next
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

// left arrow click
arrowLeft.addEventListener('click', () => {
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});

// right arrow click
arrowRight.addEventListener('click', () => {
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
});

startSlide();