const $animation_img_first = document.querySelector('.animation_img_first');
const $animation_img_wrap = document.querySelector('.animation_img_wrap');
const $animation_img_nuts = document.querySelector('.animation_img_nuts');

const windowHeight = window.innerHeight;
const $meeboor = document.querySelectorAll('.meeboor');

const firstAnimEnd = 540;
const addBoxshadowClass = 600;
const seconAnimEnd = 900;

function animationFirstPart() {
    let scrollSize = window.scrollY;
    let bottomPlace;

    console.log(scrollSize);

    if(scrollSize < firstAnimEnd) {
        $animation_img_first.style.transform = `translate(0, ${scrollSize}px) rotate(${-scrollSize / 43}deg)`;
        $animation_img_nuts.style.transform = `translate(0,0) rotate(0deg)`;
        $animation_img_wrap.style.transform = `translate(${-scrollSize / 6}px, ${scrollSize + (scrollSize / 4)}px) rotate(${scrollSize / 43}deg)`;
    }

    if(scrollSize > addBoxshadowClass) {
        $animation_img_wrap.classList.add("box_shadow");
    } else {
        $animation_img_wrap.classList.remove("box_shadow");
    }

    if(scrollSize > firstAnimEnd && scrollSize < seconAnimEnd) {
        $animation_img_nuts.style.transform = `translate(${scrollSize / 15}px, ${-scrollSize + (scrollSize / 2)}px) rotate(${firstAnimEnd / 43}deg)`
        $animation_img_wrap.style.transform = `translate(${-scrollSize / 2.2}px, ${scrollSize + (scrollSize / 5)}px) rotate(${firstAnimEnd / 43}deg) scale(0.7)`;
    }
    
    if(scrollSize >= scrollSize + (scrollSize / 5)) {
        $animation_img_wrap.style.transform = bottomPlace;
    }
    
console.log(bottomPlace);

}

function addAnimation($meeboor) {
    $meeboor.forEach(function(elem){
        let thisPos = elem.offsetTop;
        let topOfWindow = window.scrollY;

        if (topOfWindow + windowHeight - 400 > thisPos ) {
            elem.classList.add("animation");
        }
    });
}

document.addEventListener("scroll", function() {
    addAnimation($meeboor);   
    animationFirstPart(); 
});

addAnimation($meeboor);   
animationFirstPart(); 
