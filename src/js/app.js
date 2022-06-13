let links = document.querySelectorAll('.main__link');
let sliders = document.querySelectorAll('.main__slider');
let sliderBtns = document.querySelectorAll('.main__slider-btn');
let images = document.querySelectorAll('.main__img');
let img;

for(let el of links){
    el.addEventListener('click', switchMainLink);
}

function switchMainLink(event){
    event.preventDefault();

    for(let el of links){
        el.classList.remove("main__link--active");
    }
    this.classList.add("main__link--active");

    for(let el of sliders){
        el.classList.remove("main__slider--active");
    }
    let slider = this.parentElement.parentElement.children[1];
    slider.classList.add("main__slider--active");

    sliderBtns = slider.children;
    sliderBtns[0].classList.add("main__slider-btn--active");

    for(let el of images){
        el.addEventListener('mousemove', switchImg);
    }
    img = this.parentElement.parentElement.children[2];
}

function switchImg(event){
    let coordX = event.offsetX;
    let ind = 0;

    if(coordX <= 91){
        ind = 0;
    }
    if(coordX > 91 && coordX <=182){
        ind = 1;
    }
    if(coordX > 182 && coordX <= 270){
        ind = 2;
    }
    if(coordX > 270){
        ind = 3;
    }

    swithSliderBtn(ind);
}

function swithSliderBtn(ind){
    for(let el of sliderBtns){
        el.classList.remove("main__slider-btn--active");
    }

    let btns = [...sliderBtns];

    [...sliderBtns][ind].classList.add("main__slider-btn--active");

    let src = "images/malva/malva-" + Number(ind + 5) + ".jpg";

    img.setAttribute('src', src);
}












